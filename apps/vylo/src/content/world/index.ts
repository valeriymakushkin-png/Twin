import { create } from 'zustand';
import type { WorldText } from '@/data/world/types';
import type { Locale } from '@/i18n/config';

/** World texts are split per language so a traveller only downloads the one they read. */
const loaders: Record<Locale, () => Promise<{ default: WorldText }>> = {
  ru: () => import('./ru.generated'),
  en: () => import('./en.generated'),
  es: () => import('./es.generated'),
  de: () => import('./de.generated'),
  fr: () => import('./fr.generated'),
  it: () => import('./it.generated'),
};

interface WorldTextState {
  texts: Partial<Record<Locale, WorldText>>;
  load: (locale: Locale) => Promise<void>;
}

const pending = new Map<Locale, Promise<void>>();

export const useWorldText = create<WorldTextState>((set, get) => ({
  texts: {},
  load: (locale) => {
    if (get().texts[locale]) return Promise.resolve();
    let p = pending.get(locale);
    if (!p) {
      p = loaders[locale]()
        .then((m) => set((s) => ({ texts: { ...s.texts, [locale]: m.default } })))
        .finally(() => pending.delete(locale));
      pending.set(locale, p);
    }
    return p;
  },
}));
