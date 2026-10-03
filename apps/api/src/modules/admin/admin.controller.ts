import { Body, Controller, Get, HttpCode, Param, Patch, Post, Query } from '@nestjs/common';
import type { ModerationSeverity, ModerationStatus, Plan, Prisma } from '@prisma/client';
import { z } from 'zod';
import type { AbuseEventDto, AdminUserRowDto } from '@mascot/shared';
import type { AuthContext } from '../../common/auth-context';
import { AdminOnly, CurrentUser } from '../../common/decorators';
import { NotFound } from '../../common/errors';
import { ZodPipe } from '../../common/pipes/zod.pipe';
import { addDays } from '../../common/utils/time';
import { ALL_QUEUES, type QueueName } from '../../infra/queue/queue.constants';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { QueueService } from '../../infra/queue/queue.service';
import { AbuseService } from '../moderation/abuse.service';
import { PaymentsService } from '../payments/payments.service';
import { QuotaService } from '../quota/quota.service';
import { StyleCatalogService } from '../styles/style-catalog.service';
import { AdminAnalyticsService } from './admin-analytics.service';

const days = (v?: string) => Math.min(180, Math.max(1, Number(v) || 30));

const BanSchema = z.object({ reason: z.string().min(3).max(300) });
const GrantPremiumSchema = z.object({ days: z.number().int().min(1).max(3650) });
const GrantCreditsSchema = z.object({ amount: z.number().int().min(1).max(100_000) });
const ResolveSchema = z.object({ action: z.enum(['resolve', 'dismiss']), note: z.string().max(500).optional() });
const StyleUpdateSchema = z.object({
  isActive: z.boolean().optional(),
  isPremium: z.boolean().optional(),
  sortOrder: z.number().int().min(0).max(1000).optional(),
  name: z.string().min(1).max(40).optional(),
  tagline: z.string().min(1).max(80).optional(),
  promptOverrides: z.record(z.string(), z.union([z.string().max(2000), z.number()])).nullable().optional(),
});

@Controller('admin')
@AdminOnly('ADMIN', 'SUPPORT')
export class AdminController {
  constructor(
    private readonly analytics: AdminAnalyticsService,
    private readonly prisma: PrismaService,
    private readonly abuse: AbuseService,
    private readonly payments: PaymentsService,
    private readonly quota: QuotaService,
    private readonly styles: StyleCatalogService,
    private readonly queues: QueueService,
  ) {}

  @Get('me')
  async me(@CurrentUser() auth: AuthContext) {
    const user = await this.prisma.user.findUniqueOrThrow({ where: { id: auth.userId }, select: { id: true, username: true, firstName: true, role: true, photoUrl: true } });
    return user;
  }

  /* ----------------------------- analytics ----------------------------- */

  @Get('analytics/overview')
  overview(@Query('days') d?: string) {
    return this.analytics.overview(days(d));
  }

  @Get('analytics/users')
  userAnalytics(@Query('days') d?: string) {
    return this.analytics.users(days(d));
  }

  @Get('analytics/revenue')
  revenue(@Query('days') d?: string) {
    return this.analytics.revenue(days(d));
  }

  @Get('analytics/generations')
  generations(@Query('days') d?: string) {
    return this.analytics.generations(days(d));
  }

  /* ----------------------------- users ----------------------------- */

  @Get('users')
  async users(
    @Query('q') q?: string,
    @Query('plan') plan?: Plan,
    @Query('banned') banned?: string,
    @Query('sort') sort?: 'recent' | 'risk' | 'spend',
    @Query('cursor') cursor?: string,
  ): Promise<{ items: AdminUserRowDto[]; nextCursor: string | null }> {
    const where: Prisma.UserWhereInput = {
      deletedAt: null,
      ...(plan === 'PREMIUM' ? { premiumUntil: { gt: new Date() } } : plan === 'FREE' ? { OR: [{ premiumUntil: null }, { premiumUntil: { lte: new Date() } }] } : {}),
      ...(banned === 'true' ? { isBanned: true } : {}),
      ...(q
        ? {
            OR: [
              { username: { contains: q.replace(/^@/, ''), mode: 'insensitive' } },
              { firstName: { contains: q, mode: 'insensitive' } },
              ...(/^\d+$/.test(q) ? [{ telegramId: BigInt(q) }] : []),
              { id: q },
            ],
          }
        : {}),
    };
    const orderBy: Prisma.UserOrderByWithRelationInput = sort === 'risk' ? { riskScore: 'desc' } : { createdAt: 'desc' };
    const rows = await this.prisma.user.findMany({
      where,
      orderBy: [orderBy, { id: 'desc' }],
      take: 51,
      ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
      include: { _count: { select: { avatars: true, generations: true } } },
    });
    const page = rows.slice(0, 50);
    const spend = await this.prisma.payment.groupBy({
      by: ['userId'],
      where: { userId: { in: page.map((u) => u.id) }, status: 'PAID' },
      _sum: { amount: true },
    });
    const spendMap = new Map(spend.map((s) => [s.userId, s._sum.amount ?? 0]));
    return {
      items: page.map((u) => ({
        id: u.id,
        telegramId: u.telegramId.toString(),
        username: u.username,
        firstName: u.firstName,
        plan: this.quota.effectivePlan(u),
        credits: u.credits,
        avatars: u._count.avatars,
        generations: u._count.generations,
        starsSpent: spendMap.get(u.id) ?? 0,
        riskScore: u.riskScore,
        isBanned: u.isBanned,
        createdAt: u.createdAt.toISOString(),
        lastSeenAt: u.lastSeenAt?.toISOString() ?? null,
      })),
      nextCursor: rows.length > 50 ? (page[page.length - 1]?.id ?? null) : null,
    };
  }

  @Get('users/:id')
  async user(@Param('id') id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        avatars: { where: { deletedAt: null }, include: { primaryRender: true, style: true }, orderBy: { createdAt: 'desc' }, take: 20 },
        payments: { orderBy: { createdAt: 'desc' }, take: 30 },
        subscriptions: { orderBy: { createdAt: 'desc' }, take: 10 },
        moderationEvents: { orderBy: { createdAt: 'desc' }, take: 30 },
        generations: { orderBy: { createdAt: 'desc' }, take: 30 },
        creditLedger: { orderBy: { createdAt: 'desc' }, take: 30 },
        _count: { select: { referrals: true } },
      },
    });
    if (!user) throw new NotFound('User');
    return JSON.parse(JSON.stringify(user, (_k, v) => (typeof v === 'bigint' ? v.toString() : v)));
  }

  @Post('users/:id/ban')
  @HttpCode(200)
  async ban(@CurrentUser() auth: AuthContext, @Param('id') id: string, @Body(new ZodPipe(BanSchema)) body: z.infer<typeof BanSchema>) {
    await this.abuse.ban(id, body.reason, auth.userId);
    return { ok: true };
  }

  @Post('users/:id/unban')
  @HttpCode(200)
  async unban(@CurrentUser() auth: AuthContext, @Param('id') id: string) {
    await this.abuse.unban(id, auth.userId);
    return { ok: true };
  }

  @Post('users/:id/grant-premium')
  @AdminOnly('ADMIN')
  @HttpCode(200)
  async grantPremium(@CurrentUser() auth: AuthContext, @Param('id') id: string, @Body(new ZodPipe(GrantPremiumSchema)) body: z.infer<typeof GrantPremiumSchema>) {
    const now = new Date();
    const user = await this.prisma.user.findUniqueOrThrow({ where: { id }, select: { premiumUntil: true } });
    const base = user.premiumUntil && user.premiumUntil > now ? user.premiumUntil : now;
    await this.prisma.subscription.create({
      data: { userId: id, productId: 'admin_grant', status: 'ACTIVE', isRecurring: false, currentPeriodStart: now, currentPeriodEnd: addDays(base, body.days) },
    });
    await this.payments.recomputePremium(id);
    await this.prisma.auditLog.create({ data: { actorId: auth.userId, action: 'user.grant_premium', targetType: 'user', targetId: id, metadata: body } });
    return { ok: true };
  }

  @Post('users/:id/grant-credits')
  @AdminOnly('ADMIN')
  @HttpCode(200)
  async grantCredits(@CurrentUser() auth: AuthContext, @Param('id') id: string, @Body(new ZodPipe(GrantCreditsSchema)) body: z.infer<typeof GrantCreditsSchema>) {
    const balance = await this.quota.grantCredits(id, body.amount, 'ADMIN_GRANT', { type: 'admin', id: auth.userId });
    await this.prisma.auditLog.create({ data: { actorId: auth.userId, action: 'user.grant_credits', targetType: 'user', targetId: id, metadata: body } });
    return { balance };
  }

  /* ----------------------------- abuse monitoring ----------------------------- */

  @Get('abuse')
  async abuseEvents(
    @Query('status') status: ModerationStatus = 'OPEN',
    @Query('severity') severity?: ModerationSeverity,
    @Query('type') type?: string,
  ): Promise<AbuseEventDto[]> {
    const events = await this.prisma.moderationEvent.findMany({
      where: { status, ...(severity ? { severity } : {}), ...(type ? { type: type as never } : {}) },
      include: { user: { select: { username: true } } },
      orderBy: [{ severity: 'desc' }, { createdAt: 'desc' }],
      take: 200,
    });
    return events.map((e) => ({
      id: e.id,
      userId: e.userId,
      username: e.user?.username ?? null,
      type: e.type,
      severity: e.severity,
      status: e.status,
      details: e.details as Record<string, unknown>,
      createdAt: e.createdAt.toISOString(),
    }));
  }

  @Get('abuse/summary')
  async abuseSummary(@Query('days') d?: string) {
    const since = addDays(new Date(), -days(d));
    const [byType, riskiest, velocity] = await Promise.all([
      this.prisma.moderationEvent.groupBy({ by: ['type', 'severity'], where: { createdAt: { gte: since } }, _count: true }),
      this.prisma.user.findMany({ where: { riskScore: { gt: 0 } }, orderBy: { riskScore: 'desc' }, take: 20, select: { id: true, username: true, riskScore: true, isBanned: true } }),
      this.prisma.generation.groupBy({
        by: ['userId'],
        where: { createdAt: { gte: addDays(new Date(), -1) } },
        _count: true,
        orderBy: { _count: { userId: 'desc' } },
        take: 20,
      }),
    ]);
    return {
      byType: byType.map((b) => ({ type: b.type, severity: b.severity, count: b._count })),
      riskiestUsers: riskiest,
      highVelocityUsers: velocity.map((v) => ({ userId: v.userId, generations24h: v._count })),
    };
  }

  @Post('abuse/:id/resolve')
  @HttpCode(200)
  async resolve(@CurrentUser() auth: AuthContext, @Param('id') id: string, @Body(new ZodPipe(ResolveSchema)) body: z.infer<typeof ResolveSchema>) {
    await this.prisma.moderationEvent.update({
      where: { id },
      data: { status: body.action === 'resolve' ? 'RESOLVED' : 'DISMISSED', resolvedBy: auth.userId, resolvedAt: new Date() },
    });
    await this.prisma.auditLog.create({ data: { actorId: auth.userId, action: `abuse.${body.action}`, targetType: 'moderation_event', targetId: id, metadata: { note: body.note } } });
    return { ok: true };
  }

  /* ----------------------------- styles ----------------------------- */

  @Get('styles')
  async listStyles() {
    const styles = await this.styles.all();
    const usage = await this.prisma.avatarRender.groupBy({ by: ['styleId'], _count: true });
    const usageMap = new Map(usage.map((u) => [u.styleId, u._count]));
    const rows = await this.prisma.style.findMany({ select: { id: true, promptOverrides: true } });
    const overrides = new Map(rows.map((r) => [r.id, r.promptOverrides]));
    return styles.map((s) => ({ ...s, renders: usageMap.get(s.id) ?? 0, promptOverrides: overrides.get(s.id) ?? null }));
  }

  @Patch('styles/:id')
  @AdminOnly('ADMIN')
  async updateStyle(@CurrentUser() auth: AuthContext, @Param('id') id: string, @Body(new ZodPipe(StyleUpdateSchema)) body: z.infer<typeof StyleUpdateSchema>) {
    const { promptOverrides, ...rest } = body;
    await this.prisma.style.update({
      where: { id },
      data: { ...rest, ...(promptOverrides !== undefined ? { promptOverrides: promptOverrides ?? undefined } : {}) },
    });
    this.styles.invalidate();
    await this.prisma.auditLog.create({ data: { actorId: auth.userId, action: 'style.update', targetType: 'style', targetId: id, metadata: body as Prisma.InputJsonObject } });
    return this.styles.byId(id);
  }

  /* ----------------------------- payments ----------------------------- */

  @Get('payments')
  async listPayments(@Query('status') status?: string) {
    const rows = await this.prisma.payment.findMany({
      where: status ? { status: status as never } : { status: { not: 'PENDING' } },
      include: { user: { select: { username: true, telegramId: true } } },
      orderBy: { createdAt: 'desc' },
      take: 200,
    });
    return rows.map((p) => ({
      id: p.id,
      userId: p.userId,
      username: p.user?.username ?? null,
      telegramId: p.user?.telegramId.toString() ?? null,
      productId: p.productId,
      amount: p.amount,
      status: p.status,
      isRecurring: p.isRecurring,
      paidAt: p.paidAt?.toISOString() ?? null,
      refundedAt: p.refundedAt?.toISOString() ?? null,
      createdAt: p.createdAt.toISOString(),
    }));
  }

  @Post('payments/:id/refund')
  @AdminOnly('ADMIN')
  @HttpCode(200)
  async refund(@CurrentUser() auth: AuthContext, @Param('id') id: string) {
    await this.payments.refund(id, auth.userId);
    return { ok: true };
  }

  /* ----------------------------- queues ----------------------------- */

  @Get('queues')
  async queueStats() {
    return Promise.all(
      this.queues.all().map(async (q) => ({ name: q.name, paused: await q.isPaused(), counts: await q.getJobCounts() })),
    );
  }

  @Post('queues/:name/retry-failed')
  @AdminOnly('ADMIN')
  @HttpCode(200)
  async retryFailed(@CurrentUser() auth: AuthContext, @Param('name') name: string) {
    if (!ALL_QUEUES.includes(name as QueueName)) throw new NotFound('Queue');
    await this.queues.queue(name as QueueName).retryJobs({ state: 'failed', count: 500 });
    await this.prisma.auditLog.create({ data: { actorId: auth.userId, action: 'queue.retry_failed', targetType: 'queue', targetId: name } });
    return { ok: true };
  }
}
