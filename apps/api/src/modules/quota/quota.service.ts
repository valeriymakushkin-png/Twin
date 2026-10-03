import { HttpStatus, Injectable } from '@nestjs/common';
import type { CreditReason, Prisma } from '@prisma/client';
import {
  CREDIT_COSTS,
  PLAN_ENTITLEMENTS,
  type Entitlements,
  type Plan,
  type StyleRecipe,
} from '@mascot/shared';
import { AppException, PaywallException } from '../../common/errors';
import { dayKey, secondsUntilEndOfUtcDay } from '../../common/utils/time';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { RedisService } from '../../infra/redis/redis.service';

export type DailyAction = 'avatar' | 'style' | 'sticker' | 'meme' | 'pfp';

/** Everything that was charged for a generation, persisted in generation.input.charge for exact refunds. */
export interface Charge {
  credits: number;
  /** FREE lifetime sticker allowance units. */
  stickerAllowance: number;
  daily?: { action: DailyAction; amount: number; day: string };
  videoUnits?: number;
}

export const EMPTY_CHARGE: Charge = { credits: 0, stickerAllowance: 0 };

export interface QuotaUser {
  id: string;
  plan: Plan;
  premiumUntil: Date | null;
  credits: number;
  stickersGenerated: number;
  avatarsCreated: number;
}

const QUOTA_USER_SELECT = {
  id: true,
  plan: true,
  premiumUntil: true,
  credits: true,
  stickersGenerated: true,
  avatarsCreated: true,
} as const;

/**
 * Entitlements & metering.
 *
 * Order of evaluation for every paid action:
 *   1. plan allowance (FREE lifetime / PREMIUM fair-use daily caps)
 *   2. credits (bought with Telegram Stars)
 *   3. HTTP 402 with a paywall reason
 *
 * All decrements are atomic conditional updates so concurrent requests cannot overspend.
 */
@Injectable()
export class QuotaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  effectivePlan(user: { plan: Plan; premiumUntil: Date | null }): Plan {
    return user.premiumUntil && user.premiumUntil.getTime() > Date.now() ? 'PREMIUM' : 'FREE';
  }

  entitlements(user: { plan: Plan; premiumUntil: Date | null }): Entitlements {
    return PLAN_ENTITLEMENTS[this.effectivePlan(user)];
  }

  async loadUser(userId: string): Promise<QuotaUser> {
    return this.prisma.user.findUniqueOrThrow({ where: { id: userId }, select: QUOTA_USER_SELECT });
  }

  /* ----------------------------- daily fair-use counters ----------------------------- */

  private dailyKey(userId: string, action: DailyAction, day = dayKey()): string {
    return `quota:${action}:${userId}:${day}`;
  }

  async getDaily(userId: string, action: DailyAction): Promise<number> {
    return Number((await this.redis.client.get(this.dailyKey(userId, action))) ?? 0);
  }

  private async consumeDaily(user: QuotaUser, action: DailyAction, amount: number, limit: number): Promise<Charge['daily']> {
    const day = dayKey();
    const key = this.dailyKey(user.id, action, day);
    const value = await this.redis.incrWindow(key, secondsUntilEndOfUtcDay() + 3600, amount);
    if (value > limit) {
      await this.redis.client.decrby(key, amount);
      if (this.effectivePlan(user) === 'FREE') {
        throw new PaywallException('DAILY_LIMIT', 'Daily free limit reached. Go Premium for more.');
      }
      throw new AppException('DAILY_LIMIT', 'Fair-use daily limit reached. It resets at 00:00 UTC.', HttpStatus.TOO_MANY_REQUESTS);
    }
    return { action, amount, day };
  }

  /* ----------------------------- credits ----------------------------- */

  async spendCredits(
    userId: string,
    amount: number,
    ref: { type: string; id?: string },
    tx: Prisma.TransactionClient = this.prisma,
  ): Promise<boolean> {
    if (amount <= 0) return true;
    const updated = await tx.user.updateMany({
      where: { id: userId, credits: { gte: amount } },
      data: { credits: { decrement: amount } },
    });
    if (updated.count === 0) return false;
    const { credits } = await tx.user.findUniqueOrThrow({ where: { id: userId }, select: { credits: true } });
    await tx.creditLedger.create({
      data: { userId, delta: -amount, balanceAfter: credits, reason: 'SPEND', refType: ref.type, refId: ref.id },
    });
    return true;
  }

  async grantCredits(
    userId: string,
    amount: number,
    reason: CreditReason,
    ref: { type: string; id?: string },
    tx: Prisma.TransactionClient = this.prisma,
  ): Promise<number> {
    const { credits } = await tx.user.update({
      where: { id: userId },
      data: { credits: { increment: amount } },
      select: { credits: true },
    });
    await tx.creditLedger.create({
      data: { userId, delta: amount, balanceAfter: credits, reason, refType: ref.type, refId: ref.id },
    });
    return credits;
  }

  /* ----------------------------- authorizations ----------------------------- */

  async authorizeAvatar(userId: string): Promise<Charge> {
    const user = await this.loadUser(userId);
    const ent = this.entitlements(user);
    const daily = await this.consumeDaily(user, 'avatar', 1, ent.avatarGenerationsPerDay);
    try {
      if (ent.maxAvatars === null) return { ...EMPTY_CHARGE, daily };
      const processing = await this.prisma.avatar.count({
        where: { userId, status: 'PROCESSING', deletedAt: null },
      });
      // Lifetime counter (not current count) so FREE users cannot delete & recreate for free.
      if (user.avatarsCreated + processing < ent.maxAvatars) return { ...EMPTY_CHARGE, daily };
      if (await this.spendCredits(userId, CREDIT_COSTS.extraAvatar, { type: 'avatar' })) {
        return { ...EMPTY_CHARGE, credits: CREDIT_COSTS.extraAvatar, daily };
      }
      throw new PaywallException('AVATAR_LIMIT', 'Your free mascot is already created. Unlock unlimited mascots with Premium.');
    } catch (error) {
      await this.refundDaily(userId, daily);
      throw error;
    }
  }

  async authorizeStyleRender(userId: string, style: Pick<StyleRecipe, 'isPremium'>, premiumWardrobe: boolean): Promise<Charge> {
    const user = await this.loadUser(userId);
    const ent = this.entitlements(user);
    const daily = await this.consumeDaily(user, 'style', 1, ent.styleRendersPerDay);
    try {
      const needsPremium = (style.isPremium && !ent.allStyles) || (premiumWardrobe && !ent.premiumWardrobe);
      if (!needsPremium) return { ...EMPTY_CHARGE, daily };
      if (await this.spendCredits(userId, CREDIT_COSTS.styleRender, { type: 'style' })) {
        return { ...EMPTY_CHARGE, credits: CREDIT_COSTS.styleRender, daily };
      }
      throw new PaywallException(
        premiumWardrobe && !ent.premiumWardrobe ? 'PREMIUM_WARDROBE' : 'PREMIUM_STYLE',
        'This look is part of Premium.',
      );
    } catch (error) {
      await this.refundDaily(userId, daily);
      throw error;
    }
  }

  /** Validates that the initial avatar style/wardrobe is allowed (no credit path for the first mascot). */
  assertStyleAllowed(user: QuotaUser, style: Pick<StyleRecipe, 'isPremium'>, premiumWardrobe: boolean): void {
    const ent = this.entitlements(user);
    if (style.isPremium && !ent.allStyles) {
      throw new PaywallException('PREMIUM_STYLE', 'This style is part of Premium. Pick a free style or upgrade.');
    }
    if (premiumWardrobe && !ent.premiumWardrobe) {
      throw new PaywallException('PREMIUM_WARDROBE', 'Premium outfits and poses require Premium.');
    }
  }

  async authorizeStickers(userId: string, count: number): Promise<Charge> {
    const user = await this.loadUser(userId);
    const ent = this.entitlements(user);
    if (ent.stickerAllowance === null) {
      const daily = await this.consumeDaily(user, 'sticker', count, ent.stickersPerDay ?? Number.MAX_SAFE_INTEGER);
      return { ...EMPTY_CHARGE, daily };
    }
    const remaining = Math.max(0, ent.stickerAllowance - user.stickersGenerated);
    const fromAllowance = Math.min(remaining, count);
    const overflow = count - fromAllowance;
    const credits = overflow * CREDIT_COSTS.sticker;

    return this.prisma.$transaction(async (tx) => {
      if (fromAllowance > 0) {
        const reserved = await tx.user.updateMany({
          where: { id: userId, stickersGenerated: { lte: ent.stickerAllowance! - fromAllowance } },
          data: { stickersGenerated: { increment: fromAllowance } },
        });
        if (reserved.count === 0) {
          throw new AppException('CONFLICT', 'Sticker allowance changed, please retry', HttpStatus.CONFLICT);
        }
      }
      if (credits > 0 && !(await this.spendCredits(userId, credits, { type: 'stickers' }, tx))) {
        throw new PaywallException(
          'STICKER_LIMIT',
          remaining > 0
            ? `You have ${remaining} free stickers left. Unlock the full pack with Premium.`
            : 'Free stickers used. Unlock unlimited sticker packs with Premium.',
        );
      }
      return { ...EMPTY_CHARGE, credits, stickerAllowance: fromAllowance };
    });
  }

  async authorizeMeme(userId: string): Promise<Charge> {
    const user = await this.loadUser(userId);
    const daily = await this.consumeDaily(user, 'meme', 1, this.entitlements(user).memesPerDay);
    return { ...EMPTY_CHARGE, daily };
  }

  async authorizePfp(userId: string, opts: { ai: boolean; premiumBackground: boolean; premiumWardrobe: boolean }): Promise<Charge> {
    const user = await this.loadUser(userId);
    const ent = this.entitlements(user);
    const daily = await this.consumeDaily(user, 'pfp', 1, ent.memesPerDay);
    try {
      const needsPremium =
        (opts.ai && !ent.aiProfilePictures) ||
        (opts.premiumBackground && !ent.allStyles) ||
        (opts.premiumWardrobe && !ent.premiumWardrobe);
      if (!needsPremium) return { ...EMPTY_CHARGE, daily };
      if (await this.spendCredits(userId, CREDIT_COSTS.aiProfilePicture, { type: 'pfp' })) {
        return { ...EMPTY_CHARGE, credits: CREDIT_COSTS.aiProfilePicture, daily };
      }
      throw new PaywallException('AI_PFP_PREMIUM', 'AI profile pictures and premium backgrounds are part of Premium.');
    } catch (error) {
      await this.refundDaily(userId, daily);
      throw error;
    }
  }

  async videoUnitsUsedThisMonth(userId: string): Promise<number> {
    const now = new Date();
    const monthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
    const agg = await this.prisma.video.aggregate({
      where: { userId, createdAt: { gte: monthStart }, status: { not: 'FAILED' } },
      _sum: { costUnits: true },
    });
    return agg._sum.costUnits ?? 0;
  }

  async authorizeVideo(userId: string, units: number): Promise<Charge> {
    const user = await this.loadUser(userId);
    const ent = this.entitlements(user);
    if (ent.videoUnitsPerMonth === 0) {
      throw new PaywallException('VIDEO_PREMIUM_ONLY', 'Video generation is a Premium feature.');
    }
    const used = await this.videoUnitsUsedThisMonth(userId);
    const remaining = Math.max(0, ent.videoUnitsPerMonth - used);
    if (remaining >= units) return { ...EMPTY_CHARGE, videoUnits: units };
    const credits = (units - remaining) * CREDIT_COSTS.videoUnit;
    if (await this.spendCredits(userId, credits, { type: 'video' })) {
      return { ...EMPTY_CHARGE, credits, videoUnits: units };
    }
    throw new PaywallException('VIDEO_QUOTA', 'Monthly video allowance used. Top up credits to keep creating.', 'credits_200');
  }

  /* ----------------------------- refunds ----------------------------- */

  private async refundDaily(userId: string, daily: Charge['daily']): Promise<void> {
    if (!daily) return;
    await this.redis.client.decrby(this.dailyKey(userId, daily.action, daily.day), daily.amount);
  }

  /** Reverses a charge (failed / canceled generation). Safe to call once per generation. */
  async refund(userId: string, charge: Charge | undefined, ref: { type: string; id: string }, units = 1): Promise<void> {
    if (!charge) return;
    const ratio = Math.min(1, Math.max(0, units));
    const credits = Math.round(charge.credits * ratio);
    const allowance = Math.round(charge.stickerAllowance * ratio);
    await this.prisma.$transaction(async (tx) => {
      if (credits > 0) await this.grantCredits(userId, credits, 'GENERATION_FAILED_REFUND', ref, tx);
      if (allowance > 0) {
        await tx.user.update({ where: { id: userId }, data: { stickersGenerated: { decrement: allowance } } });
      }
    });
    if (charge.daily) {
      await this.refundDaily(userId, { ...charge.daily, amount: Math.round(charge.daily.amount * ratio) });
    }
  }
}
