import { Injectable, Logger } from '@nestjs/common';
import { AppConfig } from '../../config/app-config';
import { sleep } from '../../common/utils/async';
import {
  TelegramApiError,
  type TgFile,
  type TgInlineKeyboardMarkup,
  type TgInlineQueryResultPhoto,
  type TgInputSticker,
  type TgLabeledPrice,
  type TgMessage,
  type TgPreparedInlineMessage,
} from './telegram.types';

interface TgResponse<T> {
  ok: boolean;
  result?: T;
  error_code?: number;
  description?: string;
  parameters?: { retry_after?: number; migrate_to_chat_id?: number };
}

/**
 * Thin, dependency-free Telegram Bot API client.
 * Handles 429 flood control (retry_after) transparently and supports multipart uploads.
 */
@Injectable()
export class TelegramBotService {
  private readonly logger = new Logger(TelegramBotService.name);

  constructor(private readonly config: AppConfig) {}

  private get baseUrl(): string {
    return `${this.config.TELEGRAM_API_BASE}/bot${this.config.TELEGRAM_BOT_TOKEN}`;
  }

  async call<T>(method: string, params: Record<string, unknown> = {}, attempt = 1): Promise<T> {
    const res = await fetch(`${this.baseUrl}/${method}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
      signal: AbortSignal.timeout(30_000),
    });
    return this.handle<T>(method, res, () => this.call<T>(method, params, attempt + 1), attempt);
  }

  async callMultipart<T>(
    method: string,
    fields: Record<string, string | number | boolean | object>,
    files: Record<string, { data: Buffer; filename: string; contentType: string }>,
    attempt = 1,
  ): Promise<T> {
    const form = new FormData();
    for (const [key, value] of Object.entries(fields)) {
      form.append(key, typeof value === 'object' ? JSON.stringify(value) : String(value));
    }
    for (const [key, file] of Object.entries(files)) {
      form.append(key, new Blob([new Uint8Array(file.data)], { type: file.contentType }), file.filename);
    }
    const res = await fetch(`${this.baseUrl}/${method}`, {
      method: 'POST',
      body: form,
      signal: AbortSignal.timeout(60_000),
    });
    return this.handle<T>(method, res, () => this.callMultipart<T>(method, fields, files, attempt + 1), attempt);
  }

  private async handle<T>(method: string, res: Response, retry: () => Promise<T>, attempt: number): Promise<T> {
    let body: TgResponse<T>;
    try {
      body = (await res.json()) as TgResponse<T>;
    } catch {
      throw new TelegramApiError(method, res.status, `Non-JSON response (HTTP ${res.status})`);
    }
    if (body.ok) return body.result as T;
    const retryAfter = body.parameters?.retry_after;
    if (body.error_code === 429 && retryAfter && attempt <= 3 && retryAfter <= 30) {
      this.logger.warn(`Telegram flood control on ${method}, retrying in ${retryAfter}s`);
      await sleep(retryAfter * 1000);
      return retry();
    }
    throw new TelegramApiError(method, body.error_code ?? res.status, body.description ?? 'Unknown error', retryAfter);
  }

  /* ----------------------------- messaging ----------------------------- */

  sendMessage(
    chatId: number | string,
    text: string,
    extra: { reply_markup?: TgInlineKeyboardMarkup; parse_mode?: 'HTML' | 'MarkdownV2'; link_preview_options?: object } = {},
  ): Promise<TgMessage> {
    return this.call('sendMessage', { chat_id: chatId, text, ...extra });
  }

  sendPhoto(
    chatId: number | string,
    photoUrl: string,
    caption: string,
    extra: { reply_markup?: TgInlineKeyboardMarkup; parse_mode?: 'HTML' } = {},
  ): Promise<TgMessage> {
    return this.call('sendPhoto', { chat_id: chatId, photo: photoUrl, caption, ...extra });
  }

  webAppButton(text: string, path = '/'): TgInlineKeyboardMarkup {
    const url = new URL(path, this.config.WEB_APP_URL).toString();
    return { inline_keyboard: [[{ text, web_app: { url } }]] };
  }

  /** Deep link button that opens the Mini App via t.me (works in groups and forwarded messages). */
  deepLinkButton(text: string, startParam?: string): TgInlineKeyboardMarkup {
    const url = startParam ? this.config.deepLink(startParam) : this.config.miniAppLink;
    return { inline_keyboard: [[{ text, url }]] };
  }

  /* ----------------------------- payments (Telegram Stars) ----------------------------- */

  createInvoiceLink(params: {
    title: string;
    description: string;
    payload: string;
    prices: TgLabeledPrice[];
    subscriptionPeriod?: number;
    photoUrl?: string;
  }): Promise<string> {
    return this.call('createInvoiceLink', {
      title: params.title,
      description: params.description,
      payload: params.payload,
      provider_token: '',
      currency: 'XTR',
      prices: params.prices,
      ...(params.subscriptionPeriod ? { subscription_period: params.subscriptionPeriod } : {}),
      ...(params.photoUrl ? { photo_url: params.photoUrl, photo_width: 512, photo_height: 512 } : {}),
    });
  }

  answerPreCheckoutQuery(id: string, ok: boolean, errorMessage?: string): Promise<boolean> {
    return this.call('answerPreCheckoutQuery', {
      pre_checkout_query_id: id,
      ok,
      ...(ok ? {} : { error_message: errorMessage ?? 'Payment cannot be processed right now.' }),
    });
  }

  refundStarPayment(userId: number, telegramPaymentChargeId: string): Promise<boolean> {
    return this.call('refundStarPayment', { user_id: userId, telegram_payment_charge_id: telegramPaymentChargeId });
  }

  editUserStarSubscription(userId: number, telegramPaymentChargeId: string, isCanceled: boolean): Promise<boolean> {
    return this.call('editUserStarSubscription', {
      user_id: userId,
      telegram_payment_charge_id: telegramPaymentChargeId,
      is_canceled: isCanceled,
    });
  }

  /* ----------------------------- stickers ----------------------------- */

  uploadStickerFile(userId: number, webp: Buffer): Promise<TgFile> {
    return this.callMultipart<TgFile>(
      'uploadStickerFile',
      { user_id: userId, sticker_format: 'static' },
      { sticker: { data: webp, filename: 'sticker.webp', contentType: 'image/webp' } },
    );
  }

  createNewStickerSet(params: { userId: number; name: string; title: string; stickers: TgInputSticker[] }): Promise<boolean> {
    return this.call('createNewStickerSet', {
      user_id: params.userId,
      name: params.name,
      title: params.title,
      stickers: params.stickers,
      sticker_type: 'regular',
    });
  }

  addStickerToSet(userId: number, name: string, sticker: TgInputSticker): Promise<boolean> {
    return this.call('addStickerToSet', { user_id: userId, name, sticker });
  }

  getStickerSet(name: string): Promise<{ name: string; stickers: Array<{ file_id: string }> }> {
    return this.call('getStickerSet', { name });
  }

  /* ----------------------------- sharing / inline ----------------------------- */

  /** Bot API 8.0: prepares a message the Mini App can share via WebApp.shareMessage(id). */
  savePreparedInlineMessage(userId: number, result: TgInlineQueryResultPhoto): Promise<TgPreparedInlineMessage> {
    return this.call('savePreparedInlineMessage', {
      user_id: userId,
      result,
      allow_user_chats: true,
      allow_bot_chats: false,
      allow_group_chats: true,
      allow_channel_chats: true,
    });
  }

  answerInlineQuery(
    inlineQueryId: string,
    results: TgInlineQueryResultPhoto[],
    opts: { cacheTime?: number; isPersonal?: boolean; nextOffset?: string; button?: { text: string; start_parameter?: string; web_app?: { url: string } } } = {},
  ): Promise<boolean> {
    return this.call('answerInlineQuery', {
      inline_query_id: inlineQueryId,
      results,
      cache_time: opts.cacheTime ?? 30,
      is_personal: opts.isPersonal ?? true,
      next_offset: opts.nextOffset ?? '',
      ...(opts.button ? { button: opts.button } : {}),
    });
  }

  answerCallbackQuery(id: string, text?: string): Promise<boolean> {
    return this.call('answerCallbackQuery', { callback_query_id: id, ...(text ? { text } : {}) });
  }

  /* ----------------------------- setup ----------------------------- */

  getMe(): Promise<{ id: number; username: string; can_join_groups: boolean; supports_inline_queries: boolean }> {
    return this.call('getMe');
  }

  setWebhook(url: string, secretToken: string): Promise<boolean> {
    return this.call('setWebhook', {
      url,
      secret_token: secretToken,
      allowed_updates: ['message', 'pre_checkout_query', 'inline_query', 'callback_query'],
      drop_pending_updates: false,
      max_connections: 80,
    });
  }

  setMyCommands(commands: Array<{ command: string; description: string }>, languageCode?: string): Promise<boolean> {
    return this.call('setMyCommands', { commands, ...(languageCode ? { language_code: languageCode } : {}) });
  }

  setChatMenuButton(text: string, url: string): Promise<boolean> {
    return this.call('setChatMenuButton', { menu_button: { type: 'web_app', text, web_app: { url } } });
  }

  setMyDescription(description: string, shortDescription: string): Promise<[boolean, boolean]> {
    return Promise.all([
      this.call<boolean>('setMyDescription', { description }),
      this.call<boolean>('setMyShortDescription', { short_description: shortDescription }),
    ]);
  }
}
