import { Injectable, Logger } from '@nestjs/common';
import type { ModerationSeverity, ModerationType, Prisma } from '@prisma/client';
import { AppConfig } from '../../config/app-config';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { RedisService } from '../../infra/redis/redis.service';
import { BANNED_SET } from '../auth/auth.guard';

const SEVERITY_WEIGHT: Record<ModerationSeverity, number> = { LOW: 2, MEDIUM: 10, HIGH: 35, CRITICAL: 100 };

/**
 * Trust & safety ledger. Every signal becomes a moderation_event and bumps the user's
 * risk score; crossing AUTO_BAN_RISK_SCORE (or any CRITICAL event) bans automatically.
 * Duplicate signals of the same type are throttled to one per user per hour.
 */
@Injectable()
export class AbuseService {
  private readonly logger = new Logger(AbuseService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly config: AppConfig,
  ) {}

  async record(
    type: ModerationType,
    severity: ModerationSeverity,
    userId: string | null,
    details: Prisma.InputJsonObject,
  ): Promise<void> {
    if (userId) {
      const throttle = await this.redis.client.set(`abuse:${type}:${userId}`, '1', 'EX', 3600, 'NX');
      if (throttle !== 'OK' && severity !== 'CRITICAL') return;
    }
    await this.prisma.moderationEvent.create({ data: { type, severity, userId, details } });
    if (!userId) return;
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { riskScore: { increment: SEVERITY_WEIGHT[severity] } },
      select: { riskScore: true, isBanned: true },
    });
    if (!user.isBanned && (severity === 'CRITICAL' || user.riskScore >= this.config.AUTO_BAN_RISK_SCORE)) {
      await this.ban(userId, `auto: ${type} (risk ${user.riskScore})`, null);
    }
  }

  async ban(userId: string, reason: string, actorId: string | null): Promise<void> {
    await this.prisma.user.update({ where: { id: userId }, data: { isBanned: true, banReason: reason } });
    await this.redis.client.sadd(BANNED_SET, userId);
    await this.prisma.auditLog.create({ data: { actorId, action: 'user.ban', targetType: 'user', targetId: userId, metadata: { reason } } });
    this.logger.warn(`user ${userId} banned: ${reason}`);
  }

  async unban(userId: string, actorId: string | null): Promise<void> {
    await this.prisma.user.update({ where: { id: userId }, data: { isBanned: false, banReason: null, riskScore: 0 } });
    await this.redis.client.srem(BANNED_SET, userId);
    await this.prisma.auditLog.create({ data: { actorId, action: 'user.unban', targetType: 'user', targetId: userId } });
  }

  /** Rebuilds the Redis ban set from Postgres (source of truth). */
  async syncBanSet(): Promise<number> {
    const banned = await this.prisma.user.findMany({ where: { isBanned: true }, select: { id: true } });
    const pipeline = this.redis.client.multi().del(BANNED_SET);
    if (banned.length) pipeline.sadd(BANNED_SET, ...banned.map((u) => u.id));
    await pipeline.exec();
    return banned.length;
  }
}
