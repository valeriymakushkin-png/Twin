import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { STAR_PRODUCTS, type AdminOverviewDto, type TimePoint } from '@mascot/shared';
import { addDays, dayKey, isoDay, startOfUtcDay } from '../../common/utils/time';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { QueueService } from '../../infra/queue/queue.service';
import { RedisService } from '../../infra/redis/redis.service';
import { ActivityService } from '../users/activity.service';

type DailyRow = { day: Date; value: bigint | number | null };

function toNumber(v: bigint | number | null | undefined): number {
  return v === null || v === undefined ? 0 : Number(v);
}

/** Fills missing days with zeros so charts have a continuous x-axis. */
function series(rows: DailyRow[], days: number): TimePoint[] {
  const map = new Map(rows.map((r) => [isoDay(new Date(r.day)), toNumber(r.value)]));
  const start = startOfUtcDay(addDays(new Date(), -(days - 1)));
  return Array.from({ length: days }, (_, i) => {
    const date = isoDay(addDays(start, i));
    return { date, value: map.get(date) ?? 0 };
  });
}

/**
 * Admin analytics. Heavy aggregates run on Postgres (indexed by created_at) and are cached
 * in Redis for 60 s; active-user counts come from per-day HyperLogLogs (no table scans).
 * For multi-million-row scale, point these at a read replica (DATABASE_REPLICA_URL).
 */
@Injectable()
export class AdminAnalyticsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly queues: QueueService,
  ) {}

  private since(days: number): Date {
    return startOfUtcDay(addDays(new Date(), -(days - 1)));
  }

  private async activeUsers(days: number): Promise<number> {
    const keys = Array.from({ length: days }, (_, i) => ActivityService.hllKey(dayKey(addDays(new Date(), -i))));
    return this.redis.client.pfcount(...keys);
  }

  private async dauSeries(days: number): Promise<TimePoint[]> {
    const start = this.since(days);
    const pipeline = this.redis.client.pipeline();
    const dates = Array.from({ length: days }, (_, i) => addDays(start, i));
    dates.forEach((d) => pipeline.pfcount(ActivityService.hllKey(dayKey(d))));
    const results = (await pipeline.exec()) ?? [];
    return dates.map((d, i) => ({ date: isoDay(d), value: Number(results[i]?.[1] ?? 0) }));
  }

  async overview(days: number): Promise<AdminOverviewDto> {
    return this.redis.remember(`admin:overview:${days}`, 60, async () => {
      const since = this.since(days);
      const [totalUsers, newUsers, premium, dau, wau, mau, revenue, refunds, activeSubs, banned, openEvents] = await Promise.all([
        this.prisma.user.count({ where: { deletedAt: null } }),
        this.prisma.user.count({ where: { createdAt: { gte: since } } }),
        this.prisma.user.count({ where: { premiumUntil: { gt: new Date() } } }),
        this.activeUsers(1),
        this.activeUsers(7),
        this.activeUsers(30),
        this.prisma.payment.aggregate({ where: { status: 'PAID', paidAt: { gte: since } }, _sum: { amount: true }, _count: true }),
        this.prisma.payment.count({ where: { status: 'REFUNDED', refundedAt: { gte: since } } }),
        this.prisma.subscription.count({ where: { isRecurring: true, status: 'ACTIVE', currentPeriodEnd: { gt: new Date() } } }),
        this.prisma.user.count({ where: { isBanned: true } }),
        this.prisma.moderationEvent.count({ where: { status: 'OPEN' } }),
      ]);
      const payers = await this.prisma.payment.groupBy({ by: ['userId'], where: { status: 'PAID', paidAt: { gte: since } } });

      const gen = await this.prisma.generation.groupBy({ by: ['status'], where: { createdAt: { gte: since } }, _count: true, _sum: { costMicros: true } });
      const total = gen.reduce((s, g) => s + g._count, 0);
      const succeeded = gen.find((g) => g.status === 'SUCCEEDED')?._count ?? 0;
      const failed = gen.find((g) => g.status === 'FAILED')?._count ?? 0;
      const cost = gen.reduce((s, g) => s + (g._sum.costMicros ?? 0), 0);
      const [latency] = await this.prisma.$queryRaw<Array<{ p50: number | null; p95: number | null }>>(Prisma.sql`
        SELECT percentile_cont(0.5) WITHIN GROUP (ORDER BY EXTRACT(EPOCH FROM (completed_at - created_at)) * 1000) AS p50,
               percentile_cont(0.95) WITHIN GROUP (ORDER BY EXTRACT(EPOCH FROM (completed_at - created_at)) * 1000) AS p95
        FROM generations WHERE status = 'SUCCEEDED' AND type = 'AVATAR' AND created_at >= ${since}`);

      const uploaders = await this.prisma.photo.groupBy({ by: ['userId'], where: { createdAt: { gte: since } } });
      const creators = await this.prisma.avatar.groupBy({ by: ['userId'], where: { createdAt: { gte: since }, status: 'READY' } });
      const queues = await Promise.all(
        this.queues.all().map(async (q) => {
          const c = await q.getJobCounts('waiting', 'prioritized', 'active', 'delayed', 'failed');
          return { name: q.name, waiting: (c.waiting ?? 0) + (c.prioritized ?? 0), active: c.active ?? 0, delayed: c.delayed ?? 0, failed: c.failed ?? 0 };
        }),
      );
      const stars = revenue._sum.amount ?? 0;
      return {
        rangeDays: days,
        users: { total: totalUsers, new: newUsers, dau, wau, mau, premium },
        revenue: {
          stars,
          payments: revenue._count,
          refunds,
          arppuStars: payers.length ? Math.round(stars / payers.length) : 0,
          mrrStars: activeSubs * STAR_PRODUCTS.premium_monthly.stars,
        },
        conversion: {
          freeToPremium: totalUsers ? Number((premium / totalUsers).toFixed(4)) : 0,
          uploadToMascot: uploaders.length ? Number((creators.length / uploaders.length).toFixed(4)) : 0,
        },
        generations: {
          total,
          succeeded,
          failed,
          successRate: total ? Number((succeeded / Math.max(1, succeeded + failed)).toFixed(4)) : 0,
          p50Ms: latency?.p50 ? Math.round(latency.p50) : null,
          p95Ms: latency?.p95 ? Math.round(latency.p95) : null,
          estimatedCostUsd: Number((cost / 1_000_000).toFixed(2)),
        },
        queues,
        abuse: { openEvents, bannedUsers: banned },
      };
    });
  }

  async users(days: number) {
    return this.redis.remember(`admin:users:${days}`, 60, async () => {
      const since = this.since(days);
      const signups = await this.prisma.$queryRaw<DailyRow[]>(Prisma.sql`
        SELECT date_trunc('day', created_at) AS day, COUNT(*) AS value FROM users WHERE created_at >= ${since} GROUP BY 1 ORDER BY 1`);
      const newPremium = await this.prisma.$queryRaw<DailyRow[]>(Prisma.sql`
        SELECT date_trunc('day', created_at) AS day, COUNT(*) AS value FROM subscriptions WHERE created_at >= ${since} GROUP BY 1 ORDER BY 1`);
      const sources = await this.prisma.user.groupBy({
        by: ['acquisitionSource'],
        where: { createdAt: { gte: since } },
        _count: true,
        orderBy: { _count: { acquisitionSource: 'desc' } },
        take: 10,
      });
      const [retention] = await this.prisma.$queryRaw<Array<{ d1: number | null; d7: number | null }>>(Prisma.sql`
        SELECT AVG(CASE WHEN last_seen_at >= created_at + interval '1 day' THEN 1.0 ELSE 0 END) FILTER (WHERE created_at < now() - interval '1 day') AS d1,
               AVG(CASE WHEN last_seen_at >= created_at + interval '7 day' THEN 1.0 ELSE 0 END) FILTER (WHERE created_at < now() - interval '7 day') AS d7
        FROM users WHERE created_at >= ${since}`);
      return {
        signups: series(signups, days),
        active: await this.dauSeries(days),
        newPremium: series(newPremium, days),
        sources: sources.map((s) => ({ source: s.acquisitionSource ?? 'organic', count: s._count })),
        retention: { d1: Number(retention?.d1 ?? 0), d7: Number(retention?.d7 ?? 0) },
      };
    });
  }

  async revenue(days: number) {
    return this.redis.remember(`admin:revenue:${days}`, 60, async () => {
      const since = this.since(days);
      const daily = await this.prisma.$queryRaw<DailyRow[]>(Prisma.sql`
        SELECT date_trunc('day', paid_at) AS day, SUM(amount) AS value FROM payments WHERE status IN ('PAID','REFUNDED') AND paid_at >= ${since} GROUP BY 1 ORDER BY 1`);
      const refunds = await this.prisma.$queryRaw<DailyRow[]>(Prisma.sql`
        SELECT date_trunc('day', refunded_at) AS day, SUM(amount) AS value FROM payments WHERE status = 'REFUNDED' AND refunded_at >= ${since} GROUP BY 1 ORDER BY 1`);
      const byProduct = await this.prisma.payment.groupBy({
        by: ['productId'],
        where: { status: 'PAID', paidAt: { gte: since } },
        _sum: { amount: true },
        _count: true,
      });
      const activeSubs = await this.prisma.subscription.count({ where: { isRecurring: true, status: 'ACTIVE', currentPeriodEnd: { gt: new Date() } } });
      const canceling = await this.prisma.subscription.count({ where: { isRecurring: true, status: 'CANCELED', currentPeriodEnd: { gt: new Date() } } });
      return {
        daily: series(daily, days),
        refunds: series(refunds, days),
        byProduct: byProduct.map((p) => ({ productId: p.productId, stars: p._sum.amount ?? 0, count: p._count })),
        subscriptions: { active: activeSubs, canceling, mrrStars: activeSubs * STAR_PRODUCTS.premium_monthly.stars },
        /** Telegram pays developers ≈ $0.013 per Star (excluding store fees, which users pay). */
        estimatedUsd: Number(((byProduct.reduce((s, p) => s + (p._sum.amount ?? 0), 0) * 0.013) || 0).toFixed(2)),
      };
    });
  }

  async generations(days: number) {
    return this.redis.remember(`admin:generations:${days}`, 60, async () => {
      const since = this.since(days);
      const daily = await this.prisma.$queryRaw<Array<{ day: Date; type: string; value: bigint }>>(Prisma.sql`
        SELECT date_trunc('day', created_at) AS day, type::text AS type, COUNT(*) AS value FROM generations WHERE created_at >= ${since} GROUP BY 1, 2 ORDER BY 1`);
      const start = this.since(days);
      const byDay = Array.from({ length: days }, (_, i) => ({ date: isoDay(addDays(start, i)) } as Record<string, string | number>));
      for (const row of daily) {
        const bucket = byDay.find((b) => b.date === isoDay(new Date(row.day)));
        if (bucket) bucket[row.type] = Number(row.value);
      }
      const latency = await this.prisma.$queryRaw<Array<{ type: string; p50: number; p95: number; n: bigint }>>(Prisma.sql`
        SELECT type::text AS type,
               percentile_cont(0.5) WITHIN GROUP (ORDER BY EXTRACT(EPOCH FROM (completed_at - created_at))) AS p50,
               percentile_cont(0.95) WITHIN GROUP (ORDER BY EXTRACT(EPOCH FROM (completed_at - created_at))) AS p95,
               COUNT(*) AS n
        FROM generations WHERE status = 'SUCCEEDED' AND created_at >= ${since} GROUP BY 1`);
      const failures = await this.prisma.generation.groupBy({
        by: ['errorCode'],
        where: { status: 'FAILED', createdAt: { gte: since } },
        _count: true,
        orderBy: { _count: { errorCode: 'desc' } },
        take: 10,
      });
      const byType = await this.prisma.generation.groupBy({
        by: ['type', 'status'],
        where: { createdAt: { gte: since } },
        _count: true,
        _sum: { costMicros: true },
      });
      const providers = await this.prisma.generation.groupBy({
        by: ['provider', 'status'],
        where: { createdAt: { gte: since }, provider: { not: null } },
        _count: true,
      });
      return {
        daily: byDay,
        latency: latency.map((l) => ({ type: l.type, p50Sec: Number(l.p50?.toFixed?.(1) ?? l.p50), p95Sec: Number(l.p95?.toFixed?.(1) ?? l.p95), count: Number(l.n) })),
        failures: failures.map((f) => ({ code: f.errorCode ?? 'UNKNOWN', count: f._count })),
        byType: byType.map((b) => ({ type: b.type, status: b.status, count: b._count, costUsd: Number(((b._sum.costMicros ?? 0) / 1e6).toFixed(2)) })),
        providers: providers.map((p) => ({ provider: p.provider, status: p.status, count: p._count })),
      };
    });
  }
}
