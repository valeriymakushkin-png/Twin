/**
 * Compact authoring helpers for city packs: one line of facts and one tuple per language per place,
 * expanded here into the CountryPack place shape the build validates.
 */
import type { MenuItem, Michelin, PlaceCategory, Price, TagKey } from '../../types';
import type { CityPack, L, PlaceText, RouteDay, Spot } from '../types';

export const LANGS = ['ru', 'en', 'es', 'de', 'fr', 'it'] as const;
type Lang = (typeof LANGS)[number];

/** [name, description, tip?] per language */
export type Texts = Record<Lang, [string, string, string?]>;

/** [dish as written on the menu, price, "ru gloss|en|es|de|fr|it"] */
export type Dish = [string, number | undefined, string];

export interface Extra {
  spot?: Spot;
  price?: Price;
  hours?: string;
  address?: string;
  michelin?: Michelin;
  menu?: Dish[];
}

export const free: Price = { kind: 'free' };
export const fixed = (amount: number, currency: string): Price => ({ kind: 'fixed', amount, currency });
export const level = (l: 1 | 2 | 3): Price => ({ kind: 'level', level: l });

export function makePlace(city: string) {
  return (id: string, category: PlaceCategory, lat: number, lng: number, image: string, rating: number, reviews: number, tags: TagKey[], texts: Texts, extra: Extra = {}): CityPack['places'][number] => {
    const glosses = extra.menu?.map((d) => d[2].split('|').map((x) => x.trim()));
    if (glosses?.some((g) => g.length !== 6)) throw new Error(`${id}: every dish needs 6 glosses (ru|en|es|de|fr|it)`);
    const text = Object.fromEntries(
      LANGS.map((l, i) => {
        const [name, description, tip] = texts[l];
        const t: PlaceText = { name, description, ...(tip ? { tip } : {}), ...(glosses ? { dishes: glosses.map((g) => g[i]!) } : {}) };
        return [l, t];
      }),
    ) as L<PlaceText>;
    const menu: MenuItem[] | undefined = extra.menu?.map(([dish, price]) => (price === undefined ? { dish } : { dish, price }));
    const { menu: _m, ...rest } = extra;
    return { id: `${city}-${id}`, city, category, lat, lng, image, rating, reviews, tags, ...rest, ...(menu ? { menu } : {}), text };
  };
}

/** A route day: stops (short ids get the city prefix; `=id` is an existing place id as is) and its title in six languages "ru|en|es|de|fr|it". */
export function makeDay(city: string) {
  return (stops: string[], titles: string): RouteDay => {
    const t = titles.split('|').map((x) => x.trim());
    if (t.length !== 6) throw new Error(`${city}: day title needs 6 languages`);
    return { stops: stops.map((s) => (s.startsWith('=') ? s.slice(1) : `${city}-${s}`)), text: Object.fromEntries(LANGS.map((l, i) => [l, { title: t[i]! }])) as L<{ title: string }> };
  };
}
