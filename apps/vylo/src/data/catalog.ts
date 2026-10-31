import type { Locale } from '@/i18n/config';
import { continentOf } from '@/lib/countries';
import { baseDestinations } from './destinations';
import { basePlaces } from './places';
import type { Destination, Place, VisaInfo } from './types';
import { baseVisa } from './visa';
import { worldCities, worldCountries, worldPeople, worldPlaces, worldVisa } from './world.generated';
import type { MatrixCell } from './visa/types';
import type { CityText, CountryFacts, CountryText, PlaceText, Region } from './world/types';

/**
 * The live catalogue: bundled destinations and places, the generated world packs and whatever the
 * team changed in the admin panel. Arrays are updated in place, so modules that imported them keep
 * seeing current data; React components re-render through the catalogue version in `useI18n`.
 */

export type Patch<T> = Partial<T> & {
  /** Hidden from travellers (kept so it can be restored) */
  deleted?: boolean;
  /** Created in the admin panel rather than bundled with the app */
  custom?: boolean;
  updatedAt?: number;
  updatedBy?: string;
};

export type LocalizedPatch<T> = Partial<Record<Locale, Partial<T>>>;

export interface CatalogSettings {
  /** Overrides the automatic "place of the day" */
  placeOfDay?: string;
  /** Banner on the discover screen */
  announcement?: LocalizedPatch<{ text: string }>;
  hiddenReviews?: string[];
  hiddenMeetups?: string[];
  /** Destinations pinned to the top of "Popular" */
  featured?: string[];
  /** Day planner: how many places a day holds at each pace (meals and the sunset photo stop included) */
  planner?: { perDay?: Partial<Record<'relaxed' | 'balanced' | 'packed', number>> };
}

export interface CatalogOverrides {
  destinations: Record<string, Patch<Destination> & { text?: LocalizedPatch<CityText> }>;
  places: Record<string, Patch<Place> & { text?: LocalizedPatch<PlaceText> }>;
  countries: Record<string, Patch<CountryFacts> & { text?: LocalizedPatch<CountryText>; visa?: Partial<Omit<VisaInfo, 'code'>>; passportRules?: Record<string, MatrixCell> }>;
  settings: CatalogSettings;
}

export const emptyOverrides = (): CatalogOverrides => ({ destinations: {}, places: {}, countries: {}, settings: {} });

export const destinations: Destination[] = [];
export const places: Place[] = [];
export const visaCountries: VisaInfo[] = [];
export const countries: CountryFacts[] = [];

const byDestination = new Map<string, Destination>();
const byPlace = new Map<string, Place>();
const byVisa = new Map<string, VisaInfo>();
const byCountry = new Map<string, CountryFacts>();
const placesByCity = new Map<string, Place[]>();
const citiesByCountry = new Map<string, Destination[]>();

/** Places that ship with the app (data/places.ts) plus the world packs; photo-spot `people` photos for the former live in the packs. */
const shippedPlaces: Place[] = [...basePlaces.map((p) => (worldPeople[p.id] ? { ...p, people: worldPeople[p.id] } : p)), ...worldPlaces];

const BUNDLED = new Set<string>([...baseDestinations.map((d) => d.id), ...worldCities.map((d) => d.id), ...basePlaces.map((p) => p.id), ...worldPlaces.map((p) => p.id)]);

let current: CatalogOverrides = emptyOverrides();
let version = 0;
const listeners = new Set<() => void>();

const strip = <T extends object>(patch: T) => {
  const { deleted: _d, custom: _c, updatedAt: _u, updatedBy: _b, text: _t, visa: _v, passportRules: _r, ...rest } = patch as T & Record<string, unknown>;
  return rest;
};

function merge<T extends { id: string }>(base: T[], patches: Record<string, Patch<T>>, isComplete: (p: Patch<T>) => boolean): T[] {
  const out: T[] = [];
  for (const item of base) {
    const p = patches[item.id];
    if (p?.deleted) continue;
    out.push(p ? ({ ...item, ...strip(p), id: item.id } as T) : item);
  }
  for (const [id, p] of Object.entries(patches)) if (p.custom && !p.deleted && isComplete(p)) out.push({ ...strip(p), id } as unknown as T);
  return out;
}

/** Countries that only have bundled destinations still get a page, styled from their first city. */
function derivedCountry(d: Destination): CountryFacts {
  const continent = continentOf(d.countryCode);
  const region: Region = d.countryCode === 'RU' ? 'russia' : ({ EU: 'europe', AF: 'africa', NA: 'americas', SA: 'americas', OC: 'oceania', AS: 'asia', AN: 'asia' } as const)[continent];
  return { code: d.countryCode, region, image: d.image, theme: d.theme, fromMoscow: { hours: 0, direct: false } };
}

function rebuild() {
  const o = current;
  const ds = merge<Destination>([...baseDestinations, ...worldCities], o.destinations, (p) => !!(p.countryCode && p.lat !== undefined && p.lng !== undefined));
  const ps = merge<Place>(shippedPlaces, o.places, (p) => !!(p.destinationId && p.lat !== undefined && p.lng !== undefined));
  destinations.splice(0, destinations.length, ...ds);
  places.splice(0, places.length, ...ps);

  byDestination.clear();
  citiesByCountry.clear();
  for (const d of destinations) {
    byDestination.set(d.id, d);
    const list = citiesByCountry.get(d.countryCode) ?? [];
    list.push(d);
    citiesByCountry.set(d.countryCode, list);
  }
  byPlace.clear();
  placesByCity.clear();
  for (const p of places) {
    if (!byDestination.has(p.destinationId)) continue;
    byPlace.set(p.id, p);
    const list = placesByCity.get(p.destinationId) ?? [];
    list.push(p);
    placesByCity.set(p.destinationId, list);
  }

  const cs = new Map<string, CountryFacts>();
  for (const c of worldCountries) cs.set(c.code, c);
  for (const d of destinations) if (!cs.has(d.countryCode)) cs.set(d.countryCode, derivedCountry(d));
  for (const [code, p] of Object.entries(o.countries)) {
    const base = cs.get(code);
    if (p.deleted) cs.delete(code);
    else if (base) cs.set(code, { ...base, ...strip(p), code });
  }
  countries.splice(0, countries.length, ...cs.values());
  byCountry.clear();
  for (const c of countries) byCountry.set(c.code, c);

  const vs = new Map<string, VisaInfo>();
  for (const v of [...baseVisa, ...worldVisa]) vs.set(v.code, v);
  for (const [code, p] of Object.entries(o.countries)) {
    const base = vs.get(code);
    // Rules can also be written for a country that had none.
    if (p.visa && (base || p.visa.regime)) vs.set(code, { ...(base ?? { days: 0, cost: { kind: 'free' }, validity: 'sixMonths', docs: [], notes: [] }), ...p.visa, code } as VisaInfo);
  }
  visaCountries.splice(0, visaCountries.length, ...vs.values());
  byVisa.clear();
  for (const v of visaCountries) byVisa.set(v.code, v);
}

rebuild();

export function applyOverrides(o: CatalogOverrides) {
  current = { ...emptyOverrides(), ...o };
  rebuild();
  version++;
  listeners.forEach((l) => l());
}

export const overrides = () => current;
/** Admin corrections to the passport matrix for one destination, keyed by passport. */
export const passportRules = (code: string) => current.countries[code]?.passportRules;
export const catalogVersion = () => version;
export function subscribeCatalog(l: () => void) {
  listeners.add(l);
  return () => void listeners.delete(l);
}

export const destinationById = (id: string) => byDestination.get(id);
export const placeById = (id: string) => byPlace.get(id);
export const placesIn = (destinationId: string) => placesByCity.get(destinationId) ?? [];
export const visaByCode = (code: string) => byVisa.get(code);
export const countryByCode = (code: string) => byCountry.get(code);
export const citiesIn = (code: string) => citiesByCountry.get(code) ?? [];
export const placesInCountry = (code: string) => citiesIn(code).flatMap((d) => placesIn(d.id));

/** Shipped with the build (has a static page), as opposed to created in the admin panel. */
export const isBundled = (id: string) => BUNDLED.has(id);
/** World ids whose texts come from the lazily loaded world packs. */
const WORLD = new Set<string>([...worldCities.map((d) => d.id), ...worldPlaces.map((p) => p.id), ...worldCountries.map((c) => c.code)]);
export const isWorld = (id: string) => WORLD.has(id);

export const destinationHref = (id: string) => (isBundled(id) ? `/d/${id}/` : `/city/?id=${id}`);
export const placeHref = (id: string) => (isBundled(id) ? `/p/${id}/` : `/place/?id=${id}`);
const BUNDLED_COUNTRIES = new Set<string>([...baseDestinations.map((d) => d.countryCode), ...worldCountries.map((c) => c.code)]);
export const countryHref = (code: string) => (BUNDLED_COUNTRIES.has(code) ? `/c/${code.toLowerCase()}/` : `/country/?code=${code}`);

export { categoryColor } from './places';
export { isEasyRegime, regimeTone } from './visa';

/** The catalogue as shipped, before any admin edits (the admin console diffs against it). */
export const bundledDestinations: Destination[] = [...baseDestinations, ...worldCities];
export const bundledPlaces: Place[] = shippedPlaces;
export const bundledDestination = (id: string) => bundledDestinations.find((d) => d.id === id);
export const bundledPlace = (id: string) => bundledPlaces.find((p) => p.id === id);
export const bundledCountry = (code: string) => worldCountries.find((c) => c.code === code);
export const bundledVisa = (code: string) => [...baseVisa, ...worldVisa].find((v) => v.code === code);

/** Country facts before admin edits: the world pack, or derived from its first bundled city. */
export function baseCountry(code: string): CountryFacts | undefined {
  const w = bundledCountry(code);
  if (w) return w;
  const d = bundledDestinations.find((x) => x.countryCode === code);
  return d ? derivedCountry(d) : undefined;
}

/** Moderation switches from the admin console. */
export const isHiddenReview = (id: string) => !!current.settings.hiddenReviews?.includes(id);
export const isHiddenMeetup = (id: string) => !!current.settings.hiddenMeetups?.includes(id);
