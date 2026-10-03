import { Logger } from '@nestjs/common';
import { Processor, WorkerHost } from '@nestjs/bullmq';
import type { Job } from 'bullmq';
import { EMOTION_CATALOG, type StickerEmotion } from '@mascot/shared';
import { AppConfig } from '../config/app-config';
import { loadEnv } from '../config/env';
import { randomSlug } from '../common/utils/crypto';
import { PrismaService } from '../infra/prisma/prisma.service';
import { QUEUES, type TelegramJobData } from '../infra/queue/queue.constants';
import { QueueService } from '../infra/queue/queue.service';
import { StorageService } from '../infra/storage/storage.service';
import { TelegramBotService } from '../modules/telegram/telegram-bot.service';
import { TelegramApiError, type TgInputSticker } from '../modules/telegram/telegram.types';

/** Publishes sticker packs as Telegram sticker sets owned by the user. */
@Processor(QUEUES.TELEGRAM, { concurrency: loadEnv().WORKER_CONCURRENCY_TELEGRAM, limiter: { max: 20, duration: 1000 } })
export class TelegramProcessor extends WorkerHost {
  private readonly logger = new Logger(TelegramProcessor.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly bot: TelegramBotService,
    private readonly config: AppConfig,
    private readonly queues: QueueService,
  ) {
    super();
  }

  private newSetName(): string {
    // [a-z][a-z0-9_]*, no double underscores, must end with _by_<bot>, ≤ 64 chars.
    return `m${randomSlug(9)}_by_${this.config.TELEGRAM_BOT_USERNAME}`.slice(0, 64);
  }

  async process(job: Job<TelegramJobData>): Promise<void> {
    if (job.data.kind !== 'publish-sticker-pack') return;
    const pack = await this.prisma.stickerPack.findUnique({
      where: { id: job.data.packId },
      include: { stickers: { where: { status: 'READY' }, orderBy: { sortOrder: 'asc' } }, user: true },
    });
    if (!pack || pack.status !== 'PUBLISHING') return;
    const userTgId = Number(pack.user.telegramId);
    try {
      for (const sticker of pack.stickers) {
        if (sticker.telegramFileId || !sticker.imageKey) continue;
        const webp = await this.storage.get('public', sticker.imageKey);
        const file = await this.bot.uploadStickerFile(userTgId, webp);
        await this.prisma.sticker.update({ where: { id: sticker.id }, data: { telegramFileId: file.file_id } });
        sticker.telegramFileId = file.file_id;
      }
      const toInput = (s: (typeof pack.stickers)[number]): TgInputSticker => {
        const recipe = EMOTION_CATALOG[s.emotion as StickerEmotion];
        return {
          sticker: s.telegramFileId!,
          format: 'static',
          emoji_list: [s.emoji, ...(recipe?.extraEmojis ?? [])].slice(0, 20),
          keywords: [s.emotion, 'mascot', pack.title.slice(0, 30)].slice(0, 20),
        };
      };

      let setName = pack.telegramSetName;
      if (!setName) {
        for (let attempt = 0; attempt < 3 && !setName; attempt++) {
          const candidate = this.newSetName();
          try {
            await this.bot.createNewStickerSet({ userId: userTgId, name: candidate, title: pack.title.slice(0, 64), stickers: pack.stickers.slice(0, 50).map(toInput) });
            setName = candidate;
          } catch (error) {
            if (error instanceof TelegramApiError && /occupied|STICKERSET_INVALID/i.test(error.description)) continue;
            throw error;
          }
        }
        if (!setName) throw new Error('could not allocate a sticker set name');
      } else {
        const existing = await this.bot.getStickerSet(setName);
        const published = new Set(existing.stickers.map((s) => s.file_id));
        for (const sticker of pack.stickers) {
          if (!published.has(sticker.telegramFileId!)) await this.bot.addStickerToSet(userTgId, setName, toInput(sticker));
        }
      }

      await this.prisma.stickerPack.update({
        where: { id: pack.id },
        data: { status: 'PUBLISHED', telegramSetName: setName, publishedAt: new Date(), publishError: null },
      });
      await this.queues.notify({
        userId: pack.userId,
        message: { key: 'packPublished', params: { title: pack.title, url: `https://t.me/addstickers/${setName}` } },
        path: `/mascot/${pack.avatarId}/stickers?pack=${pack.id}`,
        button: 'openApp',
      });
    } catch (error) {
      const final = job.attemptsMade + 1 >= (job.opts.attempts ?? 1);
      const description = error instanceof TelegramApiError ? error.description : (error as Error).message;
      const userFixable = error instanceof TelegramApiError && /PEER_ID_INVALID|user not found|bot was blocked/i.test(description);
      this.logger.warn(`publish ${pack.id} failed (final=${final || userFixable}): ${description}`);
      if (final || userFixable) {
        await this.prisma.stickerPack.update({
          where: { id: pack.id },
          data: {
            status: pack.telegramSetName ? 'PUBLISHED' : 'READY',
            publishError: userFixable ? 'Open the Mascot AI bot and press Start, then try again.' : 'Telegram is unavailable, please retry.',
          },
        });
        return;
      }
      throw error;
    }
  }
}
