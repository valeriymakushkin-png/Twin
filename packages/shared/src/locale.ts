/**
 * Supported UI / bot languages. Telegram reports the client language as an IETF tag
 * (`language_code`); a user can override it in the Mini App (stored as `users.locale`).
 */
export const SUPPORTED_LOCALES = ['en', 'ru'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

/** Languages whose speakers overwhelmingly read Russian better than English. */
const RU_FALLBACK = new Set(['ru', 'uk', 'be', 'kk', 'ky', 'uz', 'tg', 'hy', 'az', 'ka', 'tt', 'ba']);

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

/** Maps a Telegram `language_code` (e.g. "ru", "uk", "en-US", "pt-br") to a supported locale. */
export function resolveLocale(languageCode: string | null | undefined): Locale {
  const base = (languageCode ?? '').toLowerCase().split(/[-_]/)[0] ?? '';
  if (isLocale(base)) return base;
  return RU_FALLBACK.has(base) ? 'ru' : DEFAULT_LOCALE;
}

/** Effective locale: explicit user choice wins over the Telegram client language. */
export function userLocale(user: { locale?: string | null; languageCode?: string | null }): Locale {
  return isLocale(user.locale) ? user.locale : resolveLocale(user.languageCode);
}
