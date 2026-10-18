'use client';

import { useMemo } from 'react';
import { packs, type ContentPack } from '@/content';
import { destinationById } from '@/data/destinations';
import { placeById } from '@/data/places';
import type { Meetup } from '@/data/types';
import { countryName } from '@/lib/countries';
import { useApp } from '@/store/app';
import { formatters } from './format';
import { translate, type MessageKey, type TFunction, type Vars } from './index';

/** Everything a component needs to speak the user's language. */
export function useI18n() {
  const locale = useApp((s) => s.locale);
  return useMemo(() => {
    const t: TFunction = (key, vars) => translate(locale, key, vars);
    /** For keys assembled at runtime (e.g. `tags.${tag}`) */
    const tk = (key: string, vars?: Vars) => translate(locale, key as MessageKey, vars);
    const c = packs[locale];
    const f = formatters(locale);
    const country = (code: string) => countryName(code, locale);

    /** Display name and subtitle for any saved item (place or destination). */
    const item = (id: string) => {
      const d = destinationById(id);
      if (d) return { name: c.destinations[d.id].name, subtitle: country(d.countryCode) };
      const p = placeById(id);
      if (p) {
        const dest = destinationById(p.destinationId);
        return { name: c.places[p.id].name, subtitle: `${dest ? c.destinations[dest.id].name : ''} · ${tk(`categories.${p.category}Short`)}` };
      }
      return { name: id, subtitle: '' };
    };

    const meetupText = (m: Meetup) =>
      m.createdByMe
        ? { title: m.title ?? '', placeName: m.placeName ?? '', description: m.description ?? '' }
        : (c.meetups as Record<string, { title: string; placeName: string; description: string }>)[m.id] ?? { title: m.id, placeName: '', description: '' };

    // Typed-by-string lookups for ids that arrive as plain strings (routes, saved ids).
    const dest = (id: string) => (c.destinations as Record<string, ContentPack['destinations'][keyof ContentPack['destinations']]>)[id]!;
    const place = (id: string) => (c.places as Record<string, ContentPack['places'][keyof ContentPack['places']]>)[id]!;
    const user = (id: string) => (c.users as Record<string, ContentPack['users'][keyof ContentPack['users']]>)[id]!;
    const guide = (id: string) => (c.guides as Record<string, ContentPack['guides'][keyof ContentPack['guides']]>)[id]!;

    return { locale, t, tk, c, f, country, item, meetupText, dest, place, user, guide };
  }, [locale]);
}
