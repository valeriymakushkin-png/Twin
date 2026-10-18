export const LOCALES = ['ru', 'en', 'es', 'de', 'fr', 'it'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_META: Record<Locale, { native: string; flag: string; bcp47: string }> = {
  ru: { native: 'Русский', flag: '🇷🇺', bcp47: 'ru-RU' },
  en: { native: 'English', flag: '🇬🇧', bcp47: 'en-GB' },
  es: { native: 'Español', flag: '🇪🇸', bcp47: 'es-ES' },
  de: { native: 'Deutsch', flag: '🇩🇪', bcp47: 'de-DE' },
  fr: { native: 'Français', flag: '🇫🇷', bcp47: 'fr-FR' },
  it: { native: 'Italiano', flag: '🇮🇹', bcp47: 'it-IT' },
};

export const isLocale = (v: unknown): v is Locale => typeof v === 'string' && (LOCALES as readonly string[]).includes(v);

/** First supported language from the browser, English otherwise. */
export function detectLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en';
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.toLowerCase().split('-')[0];
    if (isLocale(base)) return base;
  }
  return 'en';
}
