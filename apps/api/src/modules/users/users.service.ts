import { Injectable, Logger } from '@nestjs/common';
import { Prisma, type User } from '@prisma/client';
import { isLocale, REFERRAL_REWARDS, type UpdateProfileInput, type UserProfileDto } from '@mascot/shared';
import { AppConfig } from '../../config/app-config';
import { NotFound } from '../../common/errors';
import { randomBase62 } from '../../common/utils/crypto';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { QueueService } from '../../infra/queue/queue.service';
import { QuotaService } from '../quota/quota.service';
import type { TgUser } from '../telegram/telegram.types';
import { telegramIdString, toSubscriptionDto } from './users.mapper';

export interface StartParam {
  referralCode?: string;
  source?: string;
  shareSlug?: string;
}

/**
 * start_param grammar (max 64 chars, [A-Za-z0-9_-]):
 *   ref_<code>            referral
 *   src_<channel>         acquisition source (tiktok, ads_x...)
 *   m_<shareSlug>         opened from a shared mascot
 * Segments can be combined with "__", e.g. ref_ab12CD34__src_tiktok
 */
export function parseStartParam(raw?: string | null): StartParam {
  const out: StartParam = {};
  if (!raw) return out;
  for (const segment of raw.split('__')) {
    const [prefix, ...rest] = segment.split('_');
    const value = rest.join('_');
    if (!value || !/^[A-Za-z0-9_-]{1,48}$/.test(value)) continue;
    if (prefix === 'ref') out.referralCode = value;
    else if (prefix === 'src') out.source = value.toLowerCase();
    else if (prefix === 'm') out.shareSlug = value;
  }
  return out;
}

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly quota: QuotaService,
    private readonly config: AppConfig,
    private readonly queues: QueueService,
  ) {}

  async upsertFromTelegram(tg: TgUser, startParamRaw?: string): Promise<{ user: User; isNew: boolean }> {
    const telegramId = BigInt(tg.id);
    const profile = {
      username: tg.username ?? null,
      firstName: tg.first_name ?? null,
      lastName: tg.last_name ?? null,
      languageCode: tg.language_code ?? null,
      photoUrl: tg.photo_url ?? null,
      isTelegramPremium: Boolean(tg.is_premium),
      ...(tg.allows_write_to_pm !== undefined ? { allowsWriteToPm: tg.allows_write_to_pm } : {}),
    };

    const existing = await this.prisma.user.findUnique({ where: { telegramId } });
    if (existing) {
      const user = await this.prisma.user.update({ where: { id: existing.id }, data: { ...profile, lastSeenAt: new Date() } });
      return { user, isNew: false };
    }

    const start = parseStartParam(startParamRaw);
    const referrer = start.referralCode
      ? await this.prisma.user.findUnique({ where: { referralCode: start.referralCode }, select: { id: true, isBanned: true } })
      : null;

    for (let attempt = 0; attempt < 5; attempt++) {
      try {
        const user = await this.prisma.$transaction(async (tx) => {
          const created = await tx.user.create({
            data: {
              telegramId,
              ...profile,
              referralCode: randomBase62(8),
              referredById: referrer && !referrer.isBanned ? referrer.id : null,
              acquisitionSource: start.source ?? (start.shareSlug ? 'share' : referrer ? 'referral' : null),
              lastSeenAt: new Date(),
              role: this.config.TELEGRAM_ADMIN_IDS.includes(String(tg.id)) ? 'ADMIN' : 'USER',
            },
          });
          if (created.referredById) {
            await this.quota.grantCredits(created.id, REFERRAL_REWARDS.inviteeCredits, 'SIGNUP_BONUS', { type: 'referral', id: created.referredById }, tx);
          }
          return tx.user.findUniqueOrThrow({ where: { id: created.id } });
        });
        return { user, isNew: true };
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
          const target = String((error.meta as { target?: unknown })?.target ?? '');
          if (target.includes('telegram_id')) {
            // Concurrent first launch: another request created the user.
            const user = await this.prisma.user.findUniqueOrThrow({ where: { telegramId } });
            return { user, isNew: false };
          }
          continue; // referral code collision — retry with a new code
        }
        throw error;
      }
    }
    throw new Error('Could not allocate a referral code');
  }

  /** Rewards the referrer when the invitee finishes their first mascot (capped monthly). */
  async rewardReferrerOnFirstMascot(userId: string): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { referredById: true, referralRewardedAt: true },
    });
    if (!user?.referredById || user.referralRewardedAt) return;
    const monthStart = new Date();
    monthStart.setUTCDate(1);
    monthStart.setUTCHours(0, 0, 0, 0);
    const rewardedThisMonth = await this.prisma.user.count({
      where: { referredById: user.referredById, referralRewardedAt: { gte: monthStart } },
    });
    const claimed = await this.prisma.user.updateMany({
      where: { id: userId, referralRewardedAt: null },
      data: { referralRewardedAt: new Date() },
    });
    if (claimed.count === 0 || rewardedThisMonth >= REFERRAL_REWARDS.monthlyCap) return;
    await this.quota.grantCredits(user.referredById, REFERRAL_REWARDS.referrerCredits, 'REFERRAL_BONUS', { type: 'referral', id: userId });
    await this.queues.notify({
      userId: user.referredById,
      message: { key: 'referralReward', params: { credits: REFERRAL_REWARDS.referrerCredits } },
      path: '/profile',
      button: 'openApp',
    });
  }

  async getProfile(userId: string): Promise<UserProfileDto> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        subscriptions: { where: { status: { in: ['ACTIVE', 'CANCELED'] } }, orderBy: { currentPeriodEnd: 'desc' }, take: 1 },
        _count: { select: { referrals: true } },
      },
    });
    if (!user || user.deletedAt) throw new NotFound('User');
    const ent = this.quota.entitlements(user);
    const [avatarsOwned, videoUnitsUsed, memesToday] = await Promise.all([
      this.prisma.avatar.count({ where: { userId, deletedAt: null, status: { in: ['READY', 'PROCESSING'] } } }),
      ent.videoUnitsPerMonth > 0 ? this.quota.videoUnitsUsedThisMonth(userId) : Promise.resolve(0),
      this.quota.getDaily(userId, 'meme'),
    ]);
    const plan = this.quota.effectivePlan(user);
    return {
      id: user.id,
      telegramId: telegramIdString(user),
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      photoUrl: user.photoUrl,
      languageCode: user.languageCode,
      locale: isLocale(user.locale) ? user.locale : null,
      plan,
      premiumUntil: plan === 'PREMIUM' && user.premiumUntil ? user.premiumUntil.toISOString() : null,
      credits: user.credits,
      referralCode: user.referralCode,
      referralLink: this.config.referralLink(user.referralCode),
      referralsCount: user._count.referrals,
      notificationsEnabled: user.notificationsEnabled,
      entitlements: ent,
      usage: {
        avatarsOwned,
        stickersUsed: user.stickersGenerated,
        stickersRemaining: ent.stickerAllowance === null ? null : Math.max(0, ent.stickerAllowance - user.stickersGenerated),
        videoUnitsUsedThisPeriod: videoUnitsUsed,
        videoUnitsRemaining: Math.max(0, ent.videoUnitsPerMonth - videoUnitsUsed),
        memesToday,
      },
      subscription: toSubscriptionDto(user.subscriptions[0]),
      createdAt: user.createdAt.toISOString(),
    };
  }

  async updateProfile(userId: string, input: UpdateProfileInput): Promise<UserProfileDto> {
    await this.prisma.user.update({ where: { id: userId }, data: input });
    return this.getProfile(userId);
  }

  async referralStats(userId: string) {
    const [total, rewarded, credits] = await Promise.all([
      this.prisma.user.count({ where: { referredById: userId } }),
      this.prisma.user.count({ where: { referredById: userId, referralRewardedAt: { not: null } } }),
      this.prisma.creditLedger.aggregate({ where: { userId, reason: 'REFERRAL_BONUS' }, _sum: { delta: true } }),
    ]);
    return { invited: total, activated: rewarded, creditsEarned: credits._sum.delta ?? 0, rewards: REFERRAL_REWARDS };
  }

  /** GDPR erasure: soft-delete immediately, hard-delete data + storage asynchronously. */
  async requestDeletion(userId: string): Promise<void> {
    await this.prisma.user.update({ where: { id: userId }, data: { deletedAt: new Date(), notificationsEnabled: false } });
    await this.queues.maintenance({ task: 'delete-account', userId });
  }
}
