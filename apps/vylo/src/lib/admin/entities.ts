'use client';

import { packs } from '@/content';
import { bundledDestinations, bundledPlaces, countries, destinations, overrides, places } from '@/data/catalog';
import type { Destination, Place } from '@/data/types';
import type { WorldText } from '@/data/world/types';
import { LOCALES, type Locale } from '@/i18n/config';
import type { EntityKind } from './repo';

export type Status = 'custom' | 'hidden' | 'edited' | 'original';

export function statusOf(kind: EntityKind, id: string): Status {
  const p = overrides()[kind][id];
  if (!p) return 'original';
  if (p.deleted) return 'hidden';
  if (p.custom) return 'custom';
  return 'edited';
}

/** Everything the console can edit, including entries hidden from travellers. */
export function allDestinations(): Destination[] {
  const o = overrides().destinations;
  const hidden = bundledDestinations.filter((d) => o[d.id]?.deleted).map((d) => ({ ...d, ...o[d.id] }) as Destination);
  const hiddenCustom = Object.entries(o)
    .filter(([, p]) => p.custom && p.deleted)
    .map(([id, p]) => ({ ...p, id }) as unknown as Destination);
  return [...destinations, ...hidden, ...hiddenCustom];
}

export function allPlaces(): Place[] {
  const o = overrides().places;
  const hidden = bundledPlaces.filter((p) => o[p.id]?.deleted).map((p) => ({ ...p, ...o[p.id] }) as Place);
  const hiddenCustom = Object.entries(o)
    .filter(([, p]) => p.custom && p.deleted)
    .map(([id, p]) => ({ ...p, id }) as unknown as Place);
  return [...places, ...hidden, ...hiddenCustom];
}

export const allCountries = () => countries;

type TextKind = 'cities' | 'places' | 'countries';

/** Text as bundled with the app for one language (before admin edits). */
export function bundledText(kind: TextKind, id: string, locale: Locale, world: Partial<Record<Locale, WorldText>>): Record<string, unknown> | undefined {
  if (kind === 'cities') return ((packs[locale].destinations as Record<string, unknown>)[id] ?? world[locale]?.cities[id]) as Record<string, unknown> | undefined;
  if (kind === 'places') return ((packs[locale].places as Record<string, unknown>)[id] ?? world[locale]?.places[id]) as Record<string, unknown> | undefined;
  return world[locale]?.countries[id] as Record<string, unknown> | undefined;
}

const KIND_OF: Record<TextKind, EntityKind> = { cities: 'destinations', places: 'places', countries: 'countries' };
const REQUIRED: Record<TextKind, string> = { cities: 'name', places: 'name', countries: 'description' };

/** Languages in which this entry has no name (or description, for countries) at all. */
export function missingLocales(kind: TextKind, id: string, world: Partial<Record<Locale, WorldText>>): Locale[] {
  const edits = overrides()[KIND_OF[kind]][id]?.text as Partial<Record<Locale, Record<string, unknown>>> | undefined;
  const key = REQUIRED[kind];
  return LOCALES.filter((l) => !edits?.[l]?.[key] && !bundledText(kind, id, l, world)?.[key]);
}

/** Only the fields that differ from the bundled version end up in the patch. */
export function diff<T extends object>(base: T | undefined, next: T): Partial<T> {
  if (!base) return next;
  const out: Partial<T> = {};
  for (const k of Object.keys(next) as (keyof T)[]) if (JSON.stringify(base[k]) !== JSON.stringify(next[k])) out[k] = next[k];
  return out;
}

const CYR: Record<string, string> = Object.fromEntries(
  'а:a б:b в:v г:g д:d е:e ё:e ж:zh з:z и:i й:y к:k л:l м:m н:n о:o п:p р:r с:s т:t у:u ф:f х:kh ц:ts ч:ch ш:sh щ:sch ъ: ы:y ь: э:e ю:yu я:ya'
    .split(' ')
    .map((pair) => pair.split(':') as [string, string]),
);

/** "Мост Обербаумбрюкке" → "most-oberbaumbryukke" */
export const slugify = (s: string) =>
  [...s.toLowerCase()]
    .map((ch) => CYR[ch] ?? ch)
    .join('')
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);
