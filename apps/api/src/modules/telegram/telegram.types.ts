/** Subset of Telegram Bot API types used by Mascot AI (Bot API 8.x+). */

export interface TgUser {
  id: number;
  is_bot?: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  allows_write_to_pm?: boolean;
  photo_url?: string;
}

export interface TgChat {
  id: number;
  type: 'private' | 'group' | 'supergroup' | 'channel';
}

export interface TgSuccessfulPayment {
  currency: string;
  total_amount: number;
  invoice_payload: string;
  subscription_expiration_date?: number;
  is_recurring?: boolean;
  is_first_recurring?: boolean;
  telegram_payment_charge_id: string;
  provider_payment_charge_id: string;
}

export interface TgRefundedPayment {
  currency: string;
  total_amount: number;
  invoice_payload: string;
  telegram_payment_charge_id: string;
  provider_payment_charge_id?: string;
}

export interface TgMessage {
  message_id: number;
  from?: TgUser;
  chat: TgChat;
  date: number;
  text?: string;
  successful_payment?: TgSuccessfulPayment;
  refunded_payment?: TgRefundedPayment;
}

export interface TgPreCheckoutQuery {
  id: string;
  from: TgUser;
  currency: string;
  total_amount: number;
  invoice_payload: string;
}

export interface TgInlineQuery {
  id: string;
  from: TgUser;
  query: string;
  offset: string;
}

export interface TgCallbackQuery {
  id: string;
  from: TgUser;
  data?: string;
}

export interface TgUpdate {
  update_id: number;
  message?: TgMessage;
  pre_checkout_query?: TgPreCheckoutQuery;
  inline_query?: TgInlineQuery;
  callback_query?: TgCallbackQuery;
}

export interface TgFile {
  file_id: string;
  file_unique_id: string;
  file_size?: number;
  file_path?: string;
}

export interface TgInputSticker {
  sticker: string;
  format: 'static' | 'animated' | 'video';
  emoji_list: string[];
  keywords?: string[];
}

export interface TgInlineKeyboardButton {
  text: string;
  url?: string;
  web_app?: { url: string };
  callback_data?: string;
}

export interface TgInlineKeyboardMarkup {
  inline_keyboard: TgInlineKeyboardButton[][];
}

export interface TgLabeledPrice {
  label: string;
  amount: number;
}

export interface TgInlineQueryResultPhoto {
  type: 'photo';
  id: string;
  photo_url: string;
  thumbnail_url: string;
  photo_width?: number;
  photo_height?: number;
  title?: string;
  caption?: string;
  reply_markup?: TgInlineKeyboardMarkup;
}

export interface TgPreparedInlineMessage {
  id: string;
  expiration_date: number;
}

export class TelegramApiError extends Error {
  constructor(
    readonly method: string,
    readonly errorCode: number,
    readonly description: string,
    readonly retryAfter?: number,
  ) {
    super(`Telegram ${method} failed (${errorCode}): ${description}`);
    this.name = 'TelegramApiError';
  }
}
