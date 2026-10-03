import { Logger } from '@nestjs/common';
import { Processor, WorkerHost } from '@nestjs/bullmq';
import type { Job } from 'bullmq';
import { AppConfig } from '../config/app-config';
import { PrismaService } from '../infra/prisma/prisma.service';
import { QUEUES, type NotifyJobData } from '../infra/queue/queue.constants';
import { TelegramBotService } from '../modules/telegram/telegram-bot.service';
import { TelegramApiError } from '../modules/telegram/telegram.types';
import { catalogFor, renderNotify } from '../i18n/bot-messages';

/**
 * Bot notifications ("your mascot is ready"). Globally rate limited below Telegram's
 * ~30 msg/s broadcast limit; users who blocked the bot are opted out automatically.
 */
@Processor(QUEUES.NOTIFY, { concurrency: 10, limiter: { max: 25, duration: 1000 } })
export class NotifyProcessor extends WorkerHost {
  private readonly logger = new Logger(NotifyProcessor.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly bot: TelegramBotService,
    private readonly config: AppConfig,
  ) {
    super();
  }

  async process(job: Job<NotifyJobData>): Promise<void> {
    if (!this.config.TELEGRAM_NOTIFICATIONS_ENABLED) return;
    const user = await this.prisma.user.findUnique({
      where: { id: job.data.userId },
      select: { telegramId: true, notificationsEnabled: true, deletedAt: true, isBanned: true, locale: true, languageCode: true },
    });
    if (!user || !user.notificationsEnabled || user.deletedAt || user.isBanned) return;
    const chatId = Number(user.telegramId);
    const catalog = catalogFor(user);
    // Jobs enqueued by a previous release (rolling deploy) carry pre-rendered English text.
    const legacy = job.data as NotifyJobData & { text?: string; buttonText?: string };
    const text = job.data.message ? renderNotify(catalog, job.data.message) : (legacy.text ?? '');
    if (!text) return;
    const markup = job.data.path ? this.bot.webAppButton(legacy.buttonText ?? catalog.buttons[job.data.button ?? 'open'], job.data.path) : undefined;
    try {
      if (job.data.photoUrl && !job.data.photoUrl.startsWith('http://localhost')) {
        await this.bot.sendPhoto(chatId, job.data.photoUrl, text, { reply_markup: markup });
      } else {
        await this.bot.sendMessage(chatId, text, { reply_markup: markup });
      }
    } catch (error) {
      if (error instanceof TelegramApiError && (error.errorCode === 403 || /chat not found/i.test(error.description))) {
        await this.prisma.user.update({ where: { id: job.data.userId }, data: { allowsWriteToPm: false, notificationsEnabled: false } });
        return;
      }
      if (error instanceof TelegramApiError && error.errorCode === 400) {
        this.logger.warn(`notify 400 for ${job.data.userId}: ${error.description}`);
        return;
      }
      throw error;
    }
  }
}
