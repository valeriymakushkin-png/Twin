'use client';

import { useMemo, useSyncExternalStore } from 'react';
import { packs } from '@/content';
import { useWorldText } from '@/content/world';
import { catalogVersion, destinationById, overrides, placeById, subscribeCatalog, type LocalizedPatch } from '@/data/catalog';
import type { Meetup } from '@/data/types';
import type { CityText, CountryText, PlaceText } from '@/data/world/types';
import { countryName } from '@/lib/countries';
import { useApp } from '@/store/app';
import type { Locale } from './config';
import { formatters } from './format';
import { translate, type MessageKey, type TFunction, type Vars } from './index';

type DestText = Omit<CityText, 'gettingThere'> & { gettingThere?: string };

/** First non-empty value per field: edits in this language, then bundled text, then English, then anything. */
function resolve<T extends object>(locale: Locale, edits: LocalizedPatch<T> | undefined, base: Partial<Record<Locale, T | undefined>>): T {
  const order: Locale[] = [locale, 'en', 'ru', 'es', 'de', 'fr', 'it'];
  const out: Record<string, unknown> = {};
  // Lowest priority first, so the reader's language is applied last and wins field by field.
  for (const l of [...order].reverse()) {
    Object.assign(out, base[l] ?? {});
    for (const [k, v] of Object.entries(edits?.[l] ?? {})) if (v !== undefined && v !== '') out[k] = v;
  }
  return out as T;
}

export const useCatalogVersion = () => useSyncExternalStore(subscribeCatalog, catalogVersion, catalogVersion);

/** Everything a component needs to speak the user's language. */
export function useI18n() {
  const locale = useApp((s) => s.locale);
  const version = useCatalogVersion();
  const world = useWorldText((s) => s.texts);
  return useMemo(() => {
    const t: TFunction = (key, vars) => translate(locale, key, vars);
    /** For keys assembled at runtime (e.g. `tags.${tag}`) */
    const tk = (key: string, vars?: Vars) => translate(locale, key as MessageKey, vars);
    const c = packs[locale];
    const f = formatters(locale);
    const o = overrides();
    const country = (code: string) => countryName(code, locale);

    const byLocale = <T,>(get: (l: Locale) => T | undefined) =>
      Object.fromEntries((['ru', 'en', 'es', 'de', 'fr', 'it'] as Locale[]).map((l) => [l, get(l)])) as Partial<Record<Locale, T>>;

    const dest = (id: string): DestText =>
      resolve<DestText>(
        locale,
        o.destinations[id]?.text,
        byLocale((l) => (packs[l].destinations as Record<string, DestText>)[id] ?? world[l]?.cities[id]),
      );
    const place = (id: string): PlaceText =>
      resolve<PlaceText>(
        locale,
        o.places[id]?.text,
        byLocale((l) => (packs[l].places as Record<string, PlaceText>)[id] ?? world[l]?.places[id]),
      );
    /** Country article; `undefined` when nobody has written one yet. */
    const countryText = (code: string): CountryText | undefined => {
      const base = byLocale((l) => world[l]?.countries[code]);
      if (!Object.values(base).some(Boolean) && !o.countries[code]?.text) return undefined;
      return resolve<CountryText>(locale, o.countries[code]?.text, base);
    };
    const user = (id: string) => (c.users as Record<string, { name: string; home: string; bio: string }>)[id]!;
    const guide = (id: string) => (c.guides as Record<string, { title: string; subtitle: string; sections: { title: string; body: string }[] }>)[id]!;

    /** Display name and subtitle for any saved item (place or destination). */
    const item = (id: string) => {
      const d = destinationById(id);
      if (d) return { name: dest(d.id).name, subtitle: country(d.countryCode) };
      const p = placeById(id);
      if (p) {
        const city = destinationById(p.destinationId);
        return { name: place(p.id).name, subtitle: `${city ? dest(city.id).name : ''} · ${tk(`categories.${p.category}Short`)}` };
      }
      return { name: id, subtitle: '' };
    };

    const meetupText = (m: Meetup) =>
      m.createdByMe
        ? { title: m.title ?? '', placeName: m.placeName ?? '', description: m.description ?? '' }
        : (c.meetups as Record<string, { title: string; placeName: string; description: string }>)[m.id] ?? { title: m.id, placeName: '', description: '' };

    return { locale, version, t, tk, c, f, country, countryText, item, meetupText, dest, place, user, guide };
  }, [locale, version, world]);
}
