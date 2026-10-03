import { Injectable, Logger } from '@nestjs/common';
import { AppConfig } from '../../config/app-config';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { StorageKeys, StorageService } from '../../infra/storage/storage.service';
import { PaymentsService } from '../payments/payments.service';
import { UsersService } from '../users/users.service';
import { TelegramBotService } from './telegram-bot.service';
import type { TgInlineQuery, TgInlineQueryResultPhoto, TgMessage, TgUpdate } from './telegram.types';

/** Routes bot updates: commands, Stars payments, inline mode. */
@Injectable()
export class TelegramUpdateHandler {
  private readonly logger = new Logger(TelegramUpdateHandler.name);

  constructor(
    private readonly bot: TelegramBotService,
    private readonly payments: PaymentsService,
    private readonly users: UsersService,
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly config: AppConfig,
  ) {}

  async handle(update: TgUpdate): Promise<void> {
    if (update.pre_checkout_query) return this.payments.handlePreCheckout(update.pre_checkout_query);
    if (update.message?.successful_payment && update.message.from) {
      return this.payments.handleSuccessfulPayment(update.message.from, update.message.successful_payment);
    }
    if (update.message?.refunded_payment) return this.payments.handleRefund(update.message.refunded_payment);
    if (update.inline_query) return this.handleInline(update.inline_query);
    if (update.callback_query) {
      await this.bot.answerCallbackQuery(update.callback_query.id);
      return;
    }
    if (update.message?.text && update.message.chat.type === 'private') return this.handleCommand(update.message);
  }

  private async handleCommand(message: TgMessage): Promise<void> {
    const [rawCommand = '', ...args] = (message.text ?? '').trim().split(/\s+/);
    const command = rawCommand.split('@')[0]?.toLowerCase();
    const chatId = message.chat.id;

    switch (command) {
      case '/start': {
        if (message.from) await this.users.upsertFromTelegram(message.from, args[0]);
        await this.bot.sendMessage(
          chatId,
          [
            '<b>Welcome to Mascot AI ✨</b>',
            '',
            'Upload a few selfies and get a personal 3D mascot that actually looks like you — then turn it into stickers, memes, profile pictures and videos.',
            '',
            '👇 Tap below to create yours in about a minute.',
          ].join('\n'),
          { parse_mode: 'HTML', reply_markup: this.bot.webAppButton('✨ Create my mascot', '/') },
        );
        return;
      }
      case '/premium':
        await this.bot.sendMessage(chatId, '👑 Premium: unlimited mascots & styles, videos, HD export, premium outfits and poses.', {
          reply_markup: this.bot.webAppButton('See Premium', '/premium'),
        });
        return;
      case '/paysupport':
        // Required by Telegram for bots selling digital goods for Stars.
        await this.bot.sendMessage(
          chatId,
          `Payment issue? Message @${this.config.TELEGRAM_SUPPORT_USERNAME} with your Telegram ID (${message.from?.id ?? 'unknown'}) and a short description. We answer within 24h and refund failed generations automatically.`,
        );
        return;
      case '/terms':
      case '/privacy':
        await this.bot.sendMessage(
          chatId,
          `Terms & Privacy: ${this.config.WEB_APP_URL}/legal\n\nWe delete your source photos after ${this.config.PHOTO_RETENTION_DAYS} days. You can delete your account and all data anytime from Profile → Delete account.`,
        );
        return;
      case '/help':
      default:
        await this.bot.sendMessage(
          chatId,
          'Commands:\n/start — open Mascot AI\n/premium — Premium plans\n/paysupport — payment support\n/terms — terms & privacy\n\nTip: type @' +
            this.config.TELEGRAM_BOT_USERNAME +
            ' in any chat to share your mascot.',
          { reply_markup: this.bot.webAppButton('Open Mascot AI', '/') },
        );
    }
  }

  /** Inline mode: share your mascot renders and memes in any chat (viral loop). */
  private async handleInline(query: TgInlineQuery): Promise<void> {
    const user = await this.prisma.user.findUnique({ where: { telegramId: BigInt(query.from.id) }, select: { id: true, referralCode: true } });
    const button = { text: '✨ Create your mascot', start_parameter: 'inline' };
    if (!user) {
      await this.bot.answerInlineQuery(query.id, [], { button, cacheTime: 10 });
      return;
    }
    const cta = { inline_keyboard: [[{ text: '✨ Make my own mascot', url: this.config.deepLink(`ref_${user.referralCode}__src_inline`) }]] };
    const [renders, memes] = await Promise.all([
      this.prisma.avatarRender.findMany({
        where: { avatar: { userId: user.id, deletedAt: null, status: 'READY' } },
        orderBy: { createdAt: 'desc' },
        take: 10,
      }),
      this.prisma.meme.findMany({ where: { userId: user.id, status: 'READY' }, orderBy: { createdAt: 'desc' }, take: 20 }),
    ]);
    const results: TgInlineQueryResultPhoto[] = [];
    for (const r of renders) {
      const url = this.storage.publicUrl(StorageKeys.renderShare(r.avatarId, r.id))!;
      results.push({ type: 'photo', id: `r_${r.id}`, photo_url: url, thumbnail_url: url, photo_width: 1080, photo_height: 1080, reply_markup: cta });
    }
    for (const m of memes) {
      const url = this.storage.publicUrl(m.imageKey)!;
      results.push({ type: 'photo', id: `m_${m.id}`, photo_url: url, thumbnail_url: url, reply_markup: cta });
    }
    await this.bot.answerInlineQuery(query.id, results.slice(0, 50), { button, isPersonal: true, cacheTime: 30 });
  }
}
