import { Logger, type OnApplicationBootstrap } from '@nestjs/common';
import { InjectQueue, Processor, WorkerHost } from '@nestjs/bullmq';
import type { Job, Queue } from 'bullmq';
import { Prisma } from '@prisma/client';
import { AppConfig } from '../config/app-config';
import { addDays, dayKey, startOfUtcDay } from '../common/utils/time';
import { PrismaService } from '../infra/prisma/prisma.service';
import { MAINTENANCE_SCHEDULE, QUEUES, type MaintenanceJobData } from '../infra/queue/queue.constants';
import { QueueService } from '../infra/queue/queue.service';
import { RedisService } from '../infra/redis/redis.service';
import { StorageKeys, StorageService } from '../infra/storage/storage.service';
import { GenerationsService } from '../modules/generations/generations.service';
import { AbuseService } from '../modules/moderation/abuse.service';
import { PaymentsService } from '../modules/payments/payments.service';
import { ActivityService } from '../modules/users/activity.service';

/**
 * Housekeeping: subscriptions, payments, privacy retention, GDPR erasure, stuck-job recovery,
 * analytics rollups. Recurring tasks use BullMQ job schedulers (exactly one run per tick
 * across all worker replicas).
 */
@Processor(QUEUES.MAINTENANCE, { concurrency: 2 })
export class MaintenanceProcessor extends WorkerHost implements OnApplicationBootstrap {
  private readonly logger = new Logger(MaintenanceProcessor.name);

  constructor(
    @InjectQueue(QUEUES.MAINTENANCE) private readonly queue: Queue,
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly payments: PaymentsService,
    private readonly generations: GenerationsService,
    private readonly abuse: AbuseService,
    private readonly redis: RedisService,
    private readonly queues: QueueService,
    private readonly config: AppConfig,
  ) {
    super();
  }

  async onApplicationBootstrap(): Promise<void> {
    for (const { task, pattern } of MAINTENANCE_SCHEDULE) {
      await this.queue.upsertJobScheduler(`cron:${task}`, { pattern, tz: 'UTC' }, { name: task, data: { task }, opts: { attempts: 3 } });
    }
    await this.abuse.syncBanSet().catch((e: Error) => this.logger.warn(`ban set sync failed: ${e.message}`));
  }

  async process(job: Job<MaintenanceJobData>): Promise<unknown> {
    switch (job.data.task) {
      case 'expire-subscriptions': {
        const expired = await this.payments.expireSubscriptions();
        await this.abuse.syncBanSet();
        return { expired };
      }
      case 'expire-payments':
        return { expired: await this.payments.expirePendingPayments() };
      case 'purge-photos':
        return this.purgePhotos();
      case 'rollup-daily-stats':
        await this.rollup(startOfUtcDay(addDays(new Date(), -1)));
        await this.rollup(startOfUtcDay());
        return { ok: true };
      case 'recover-stale-generations':
        return this.recoverStale();
      case 'delete-account':
        return this.deleteAccount(job.data.userId!);
      case 'delete-avatar':
        return this.deleteAvatar(job.data.avatarId!);
      default:
        return null;
    }
  }

  /** Privacy: source selfies are deleted after PHOTO_RETENTION_DAYS (DNA + renders remain). */
  private async purgePhotos(): Promise<{ deleted: number }> {
    const cutoff = addDays(new Date(), -this.config.PHOTO_RETENTION_DAYS);
    let deleted = 0;
    for (;;) {
      const batch = await this.prisma.photo.findMany({ where: { createdAt: { lt: cutoff } }, select: { id: true, storageKey: true, avatarId: true }, take: 500 });
      if (!batch.length) break;
      await this.storage.delete('private', batch.map((p) => p.storageKey));
      await this.prisma.photo.deleteMany({ where: { id: { in: batch.map((p) => p.id) } } });
      const avatarIds = [...new Set(batch.map((p) => p.avatarId).filter((id): id is string => Boolean(id)))];
      if (avatarIds.length) {
        await this.prisma.$executeRaw(Prisma.sql`UPDATE avatar_dna SET reference_photo_keys = '{}' WHERE avatar_id IN (${Prisma.join(avatarIds)})`);
      }
      deleted += batch.length;
    }
    this.logger.log(`purged ${deleted} photos older than ${this.config.PHOTO_RETENTION_DAYS} days`);
    return { deleted };
  }

  private async rollup(day: Date): Promise<void> {
    const next = addDays(day, 1);
    const range = { gte: day, lt: next };
    const [newUsers, avatars, generations, failed, revenue, newPremium, cost, active] = await Promise.all([
      this.prisma.user.count({ where: { createdAt: range } }),
      this.prisma.avatar.count({ where: { createdAt: range, status: 'READY' } }),
      this.prisma.generation.count({ where: { createdAt: range } }),
      this.prisma.generation.count({ where: { createdAt: range, status: 'FAILED' } }),
      this.prisma.payment.aggregate({ where: { paidAt: range, status: { in: ['PAID', 'REFUNDED'] } }, _sum: { amount: true } }),
      this.prisma.subscription.count({ where: { createdAt: range } }),
      this.prisma.generation.aggregate({ where: { createdAt: range }, _sum: { costMicros: true } }),
      this.redis.client.pfcount(ActivityService.hllKey(dayKey(day))),
    ]);
    const data = {
      newUsers,
      activeUsers: active,
      avatarsCreated: avatars,
      generations,
      failedGenerations: failed,
      starsRevenue: revenue._sum.amount ?? 0,
      newPremium,
      costMicros: BigInt(cost._sum.costMicros ?? 0),
    };
    await this.prisma.dailyStat.upsert({ where: { date: day }, create: { date: day, ...data }, update: data });
  }

  /** Generations orphaned by a crashed worker / lost job are failed and refunded. */
  private async recoverStale(): Promise<{ recovered: number }> {
    let recovered = 0;
    for (const generation of await this.generations.findStale()) {
      const queue = this.queues.queue(
        generation.type === 'STICKER_PACK' ? QUEUES.STICKER
          : generation.type === 'MEME' ? QUEUES.MEME
          : generation.type === 'PROFILE_PICTURE' ? QUEUES.PFP
          : generation.type === 'VIDEO' ? QUEUES.VIDEO
          : QUEUES.AVATAR,
      );
      const job = await queue.getJob(generation.id);
      const state = job ? await job.getState() : 'missing';
      if (state === 'active' || state === 'waiting' || state === 'prioritized' || state === 'delayed') continue;
      await this.generations.fail(generation.id, 'STALE', 'Generation timed out. You were refunded — please try again.');
      if (generation.type === 'AVATAR' && generation.avatarId) {
        await this.prisma.avatar.update({ where: { id: generation.avatarId }, data: { status: 'FAILED', failureReason: 'STALE' } });
        await this.prisma.photo.updateMany({ where: { avatarId: generation.avatarId }, data: { avatarId: null } });
      }
      recovered++;
    }
    return { recovered };
  }

  private async avatarStorageKeys(avatarId: string) {
    const renders = await this.prisma.avatarRender.findMany({ where: { avatarId } });
    const avatar = await this.prisma.avatar.findUnique({ where: { id: avatarId }, select: { cardKey: true } });
    const packs = await this.prisma.stickerPack.findMany({ where: { avatarId }, include: { stickers: true } });
    const memes = await this.prisma.meme.findMany({ where: { avatarId } });
    const pfps = await this.prisma.profilePicture.findMany({ where: { avatarId } });
    const videos = await this.prisma.video.findMany({ where: { avatarId } });
    const cards = renders.map((r) => StorageKeys.avatarCard(avatarId, r.id));
    return {
      private: [
        ...renders.map((r) => r.masterKey),
        ...packs.flatMap((p) => p.stickers.map((s) => s.masterKey)),
        ...pfps.map((p) => p.hdKey),
      ],
      public: [
        avatar?.cardKey,
        ...cards,
        ...renders.flatMap((r) => [r.imageKey, r.thumbKey, StorageKeys.renderShare(avatarId, r.id)]),
        ...packs.flatMap((p) => p.stickers.map((s) => s.imageKey)),
        ...memes.map((m) => m.imageKey),
        ...pfps.map((p) => p.imageKey),
        ...videos.flatMap((v) => [v.videoKey, v.thumbnailKey]),
      ],
    };
  }

  private async deleteAvatar(avatarId: string): Promise<{ ok: boolean }> {
    const keys = await this.avatarStorageKeys(avatarId);
    await this.storage.delete('private', keys.private);
    await this.storage.delete('public', keys.public);
    const photos = await this.prisma.photo.findMany({ where: { avatarId }, select: { storageKey: true } });
    await this.storage.delete('private', photos.map((p) => p.storageKey));
    await this.prisma.photo.deleteMany({ where: { avatarId } });
    await this.prisma.avatar.update({ where: { id: avatarId }, data: { primaryRenderId: null } });
    await this.prisma.avatar.delete({ where: { id: avatarId } });
    return { ok: true };
  }

  /** GDPR erasure: storage objects first, then the user row (FK cascades remove the rest). */
  private async deleteAccount(userId: string): Promise<{ ok: boolean }> {
    const user = await this.prisma.user.findUnique({ where: { id: userId }, select: { deletedAt: true } });
    if (!user?.deletedAt) return { ok: false };
    const avatars = await this.prisma.avatar.findMany({ where: { userId }, select: { id: true } });
    for (const avatar of avatars) await this.deleteAvatar(avatar.id);
    const photos = await this.prisma.photo.findMany({ where: { userId }, select: { storageKey: true } });
    await this.storage.delete('private', photos.map((p) => p.storageKey));
    // Payments survive with user_id = NULL (ON DELETE SET NULL) for accounting; everything else cascades.
    await this.prisma.user.delete({ where: { id: userId } });
    this.logger.log(`account ${userId} erased`);
    return { ok: true };
  }
}
