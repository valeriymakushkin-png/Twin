'use client';

import { create } from 'zustand';
import { DEFAULT_LOCALE, isLocale, resolveLocale, type Locale } from '@mascot/shared';
import { en, type Dict, type Plural } from './en';
import { ru } from './ru';

export type { Dict, Plural };
export type { Locale };

export const DICTIONARIES: Record<Locale, Dict> = { en, ru };

const STORAGE_KEY = 'mascot.locale';

interface LocaleState {
  locale: Locale;
  /** True once the client-side locale has been resolved (avoids hydration mismatch). */
  resolved: boolean;
  setLocale: (locale: Locale, persist?: boolean) => void;
}

export const useLocaleStore = create<LocaleState>((set) => ({
  locale: DEFAULT_LOCALE,
  resolved: false,
  setLocale: (locale, persist = true) => {
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, locale);
      } catch {
        /* private mode — choice lives for the session only */
      }
    }
    if (typeof document !== 'undefined') document.documentElement.lang = locale;
    set({ locale, resolved: true });
  },
}));

/** Stored override → Telegram client language → browser language. */
export function detectLocale(telegramLanguageCode?: string | null): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* ignore */
  }
  if (telegramLanguageCode) return resolveLocale(telegramLanguageCode);
  if (typeof navigator !== 'undefined') return resolveLocale(navigator.language);
  return DEFAULT_LOCALE;
}

export function clearStoredLocale(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

/** Fills {placeholders}. Unknown placeholders are left visible so they're caught in QA. */
export function format(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in vars ? String(vars[key]) : match));
}

const pluralRules = new Map<Locale, Intl.PluralRules>();

export function pluralize(locale: Locale, forms: Plural, count: number, vars?: Record<string, string | number>): string {
  let rules = pluralRules.get(locale);
  if (!rules) {
    rules = new Intl.PluralRules(locale);
    pluralRules.set(locale, rules);
  }
  const category = rules.select(count) as keyof Plural;
  const template = forms[category] ?? forms.other;
  return format(template, { count, ...vars });
}

export interface Translator {
  locale: Locale;
  /** Typed dictionary for the active locale: `t.landing.cta`. */
  t: Dict;
  /** Interpolate a template: `f(t.home.greeting, { name })`. */
  f: (template: string, vars?: Record<string, string | number>) => string;
  /** Plural + interpolate: `p(t.create.addMore, 3)`. */
  p: (forms: Plural, count: number, vars?: Record<string, string | number>) => string;
  /** Look up a catalog label with a fallback, e.g. `pick(t.emotions, slug, recipe.label)`. */
  pick: <T>(map: Record<string, T>, key: string | null | undefined, fallback: T) => T;
}

export function translator(locale: Locale): Translator {
  return {
    locale,
    t: DICTIONARIES[locale],
    f: format,
    p: (forms, count, vars) => pluralize(locale, forms, count, vars),
    pick: (map, key, fallback) => (key != null && key in map ? map[key]! : fallback),
  };
}

const translators: Record<Locale, Translator> = { en: translator('en'), ru: translator('ru') };

export function useT(): Translator {
  const locale = useLocaleStore((s) => s.locale);
  return translators[locale];
}

/** For non-React code (toasts in query callbacks, etc.). */
export function getT(): Translator {
  return translators[useLocaleStore.getState().locale];
}

export function intlLocale(locale: Locale): string {
  return locale === 'ru' ? 'ru-RU' : 'en-US';
}
