/**
 * Validates the country packs in src/data/world/countries and splits them into
 *   src/data/world.generated.ts            — facts bundled with the app (ids, coordinates, photos…)
 *   src/content/world/<locale>.generated.ts — texts, loaded only for the language in use
 * Usage: node --experimental-strip-types scripts/build-world.mts [--check] [country files…]
 */
import { readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { baseDestinations as destinations } from '../src/data/destinations.ts';
import { basePlaces } from '../src/data/places.ts';
import { baseVisa as visaCountries } from '../src/data/visa.ts';
import ru from '../src/i18n/messages/ru.ts';
import type { CountryPack } from '../src/data/world/types.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'src/data/world/countries');
const LOCALES = ['ru', 'en', 'es', 'de', 'fr', 'it'] as const;
const REGIONS = ['europe', 'sea', 'asia', 'mideast', 'caucasus', 'africa', 'americas', 'oceania', 'russia'];
const MOTIFS = ['waves', 'palms', 'peaks', 'grid', 'torii', 'dunes', 'tiles', 'aurora', 'sun', 'domes', 'balloons', 'mosaic', 'snow', 'lanterns'];
const CATEGORIES = ['attraction', 'food', 'hotel', 'nature'];
const REGIMES = Object.keys(ru.visa.regime);
const TAGS = new Set(Object.keys(ru.tags));
const DOCS = new Set(Object.keys(ru.visa.doc));
const NOTES = new Set(Object.keys(ru.visa.note));
const VALIDITY = new Set(Object.keys(ru.visa.validity));
const SLUG = /^[a-z][a-z0-9-]{1,40}$/;
const PHOTO = /^[A-Za-z0-9_-]{11}$/;
const HEX = /^#[0-9a-f]{6}$/i;
const CYRILLIC = /[А-Яа-яЁё]/;

const args = process.argv.slice(2);
const checkOnly = args.includes('--check');
const only = args.filter((a) => !a.startsWith('--')).map((a) => basename(a));
const errors: string[] = [];
const warnings: string[] = [];

const km = (a: { lat: number; lng: number }, b: { lat: number; lng: number }) => {
  const r = Math.PI / 180;
  const h = Math.sin(((b.lat - a.lat) * r) / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(((b.lng - a.lng) * r) / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(h));
};

function checkText(where: string, text: unknown, fields: Record<string, 'string' | 'opt' | number | 'guide'>) {
  if (!text || typeof text !== 'object') return void errors.push(`${where}: text missing`);
  const byLocale = text as Record<string, Record<string, unknown>>;
  for (const l of LOCALES) {
    const t = byLocale[l];
    if (!t) {
      errors.push(`${where}: no "${l}" text`);
      continue;
    }
    const strings: string[] = [];
    for (const [k, kind] of Object.entries(fields)) {
      const v = t[k];
      if (kind === 'opt' && v === undefined) continue;
      if (kind === 'string' || kind === 'opt') {
        if (typeof v !== 'string' || !v.trim()) errors.push(`${where}.${l}.${k}: empty`);
        else strings.push(v);
      } else if (typeof kind === 'number') {
        if (!Array.isArray(v) || v.length !== kind || v.some((x) => typeof x !== 'string' || !x.trim())) errors.push(`${where}.${l}.${k}: needs ${kind} non-empty strings`);
        else strings.push(...v);
      } else {
        const g = v as { title?: string; sections?: { title?: string; body?: string }[] } | undefined;
        if (!g?.title || !Array.isArray(g.sections) || g.sections.length !== 4 || g.sections.some((s) => !s?.title?.trim() || !s?.body?.trim())) errors.push(`${where}.${l}.${k}: needs a title and 4 sections`);
        else strings.push(g.title, ...g.sections.flatMap((s) => [s.title!, s.body!]));
      }
    }
    for (const s of strings) {
      if (l !== 'ru' && CYRILLIC.test(s)) errors.push(`${where}.${l}: Cyrillic in a non-Russian text: "${s.slice(0, 50)}"`);
      if (/\{\w+\}/.test(s)) errors.push(`${where}.${l}: unexpected placeholder in "${s.slice(0, 50)}"`);
    }
    if (l === 'ru' && !strings.some((s) => CYRILLIC.test(s))) errors.push(`${where}.ru: Russian text has no Cyrillic`);
  }
  // Prose copied from English instead of translated (names are allowed to match).
  const en = byLocale.en;
  if (en) for (const l of ['es', 'de', 'fr', 'it'] as const) for (const k of ['description', 'tagline', 'howToGet', 'gettingThere']) {
    const a = byLocale[l]?.[k];
    if (typeof a === 'string' && a.length > 24 && a === en[k]) errors.push(`${where}.${l}.${k}: identical to English`);
  }
}

function checkTheme(where: string, t: CountryPack['country']['theme'] | undefined) {
  if (!t || !HEX.test(t.accent) || !HEX.test(t.accent2) || !MOTIFS.includes(t.motif)) errors.push(`${where}: theme needs hex accent, accent2 and a motif (${MOTIFS.join(', ')})`);
}

const files = readdirSync(dir).filter((f) => f.endsWith('.ts') && (!only.length || only.includes(f))).sort();
const packs: CountryPack[] = [];
for (const f of files) {
  try {
    const mod = await import(pathToFileURL(join(dir, f)).href);
    if (!mod.default?.country) errors.push(`${f}: must default-export a CountryPack`);
    else packs.push(mod.default as CountryPack);
  } catch (e) {
    errors.push(`${f}: ${(e as Error).message.split('\n')[0]}`);
  }
}

const baseIds = new Set([...destinations.map((d) => d.id), ...basePlaces.map((p) => p.id)]);
const seen = new Set<string>();
const codes = new Set<string>();
const baseVisa = new Set(visaCountries.map((v) => v.code));
const regionNames = new Intl.DisplayNames('en', { type: 'region', fallback: 'none' });

for (const pack of packs) {
  const c = pack.country;
  const w = `country ${c?.code}`;
  if (!c || !/^[A-Z]{2}$/.test(c.code) || !regionNames.of(c.code)) {
    errors.push(`${w}: invalid ISO code`);
    continue;
  }
  if (codes.has(c.code)) errors.push(`${w}: duplicate country`);
  codes.add(c.code);
  if (!REGIONS.includes(c.region)) errors.push(`${w}: region must be one of ${REGIONS.join(', ')}`);
  if (!PHOTO.test(c.image)) errors.push(`${w}: image must be an Unsplash id`);
  checkTheme(w, c.theme);
  if (!c.fromMoscow || !(c.fromMoscow.hours > 0 && c.fromMoscow.hours < 30)) errors.push(`${w}: fromMoscow.hours`);
  if (c.visa) {
    const v = c.visa;
    if (!REGIMES.includes(v.regime)) errors.push(`${w}: visa.regime must be one of ${REGIMES.join(', ')}`);
    if (!VALIDITY.has(v.validity)) errors.push(`${w}: visa.validity must be one of ${[...VALIDITY].join(', ')}`);
    for (const d of v.docs ?? []) if (!DOCS.has(d)) errors.push(`${w}: unknown visa doc "${d}"`);
    for (const n of v.notes ?? []) if (!NOTES.has(n)) errors.push(`${w}: unknown visa note "${n}"`);
    if (!v.cost?.kind) errors.push(`${w}: visa.cost`);
  } else if (!baseVisa.has(c.code)) errors.push(`${w}: visa rules are required (country is not in data/visa.ts)`);
  checkText(w, c.text, { tagline: 'string', description: 'string', howToGet: 'string', tips: 3, guide: 'guide' });

  const cityCoords = new Map<string, { lat: number; lng: number }>();
  for (const d of destinations.filter((d) => d.countryCode === c.code)) cityCoords.set(d.id, d);
  for (const city of pack.cities) {
    const cw = `city ${city.id}`;
    if (!SLUG.test(city.id)) errors.push(`${cw}: id must be a slug`);
    if (baseIds.has(city.id) || seen.has(city.id)) errors.push(`${cw}: id already used`);
    seen.add(city.id);
    if (!(Math.abs(city.lat) <= 90 && Math.abs(city.lng) <= 180)) errors.push(`${cw}: coordinates`);
    if (!PHOTO.test(city.image)) errors.push(`${cw}: image must be an Unsplash id`);
    for (const g of city.gallery ?? []) if (!PHOTO.test(g)) errors.push(`${cw}: gallery id "${g}"`);
    if (!(city.rating >= 3.5 && city.rating <= 5)) errors.push(`${cw}: rating 3.5–5`);
    if (!Number.isInteger(city.reviews)) errors.push(`${cw}: reviews must be an integer`);
    for (const t of city.tags ?? []) if (!TAGS.has(t)) errors.push(`${cw}: unknown tag "${t}"`);
    if (!city.months?.length || city.months.some((m) => m < 1 || m > 12)) errors.push(`${cw}: months 1–12`);
    if (!/^[A-Z]{3}$/.test(city.currency)) errors.push(`${cw}: currency`);
    if (!/^[a-z]{2}$/.test(city.language)) errors.push(`${cw}: language`);
    if (!/^UTC([+-]\d{1,2}(:\d{2})?)?$/.test(city.timezone)) errors.push(`${cw}: timezone like UTC+3`);
    if (!(city.zoom >= 3 && city.zoom <= 16)) errors.push(`${cw}: zoom`);
    checkTheme(cw, city.theme);
    checkText(cw, city.text, { name: 'string', tagline: 'string', description: 'string', tips: 2, gettingThere: 'string' });
    cityCoords.set(city.id, city);
  }
  if (cityCoords.size < 2) errors.push(`${w}: needs at least 2 cities in total`);

  const perCity = new Map<string, { n: number; insta: number; hidden: number }>();
  for (const p of pack.places) {
    const pw = `place ${p.id}`;
    if (!SLUG.test(p.id)) errors.push(`${pw}: id must be a slug`);
    if (baseIds.has(p.id) || seen.has(p.id)) errors.push(`${pw}: id already used`);
    seen.add(p.id);
    const city = cityCoords.get(p.city);
    if (!city) errors.push(`${pw}: unknown city "${p.city}" for ${c.code}`);
    else if (km(city, p) > 150) errors.push(`${pw}: ${Math.round(km(city, p))} km from ${p.city} — check coordinates`);
    if (!CATEGORIES.includes(p.category)) errors.push(`${pw}: category`);
    if (p.spot && p.spot !== 'insta' && p.spot !== 'hidden') errors.push(`${pw}: spot must be insta or hidden`);
    if (!PHOTO.test(p.image)) errors.push(`${pw}: image must be an Unsplash id`);
    if (!(p.rating >= 3.5 && p.rating <= 5)) errors.push(`${pw}: rating 3.5–5`);
    if (!Number.isInteger(p.reviews)) errors.push(`${pw}: reviews must be an integer`);
    for (const t of p.tags ?? []) if (!TAGS.has(t)) errors.push(`${pw}: unknown tag "${t}"`);
    checkText(pw, p.text, { name: 'string', description: 'string', tip: 'opt' });
    const s = perCity.get(p.city) ?? { n: 0, insta: 0, hidden: 0 };
    s.n++;
    if (p.spot === 'insta') s.insta++;
    if (p.spot === 'hidden') s.hidden++;
    perCity.set(p.city, s);
  }
  for (const city of pack.cities) {
    const s = perCity.get(city.id) ?? { n: 0, insta: 0, hidden: 0 };
    if (s.n < 4) errors.push(`city ${city.id}: needs ≥ 4 places (has ${s.n})`);
    if (!s.insta) errors.push(`city ${city.id}: needs an insta spot`);
    if (!s.hidden) errors.push(`city ${city.id}: needs a hidden spot`);
  }
}

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):\n  ${errors.join('\n  ')}`);
  process.exit(1);
}
const cityCount = packs.reduce((n, p) => n + p.cities.length, 0);
const placeCount = packs.reduce((n, p) => n + p.places.length, 0);
for (const w of warnings) console.warn(w);
if (checkOnly) {
  console.log(`✓ ${packs.length} countries, ${cityCount} cities, ${placeCount} places are valid`);
  process.exit(0);
}

const json = (v: unknown) => JSON.stringify(v, null, 0);
const header = '// Generated by scripts/build-world.mts from src/data/world/countries — do not edit.\n';
const facts = {
  countries: packs.map(({ country: { text: _t, visa: _v, ...f } }) => f),
  cities: packs.flatMap((p) => p.cities.map(({ text: _t, ...f }) => ({ ...f, countryCode: p.country.code }))),
  places: packs.flatMap((p) => p.places.map(({ text: _t, city, ...f }) => ({ ...f, destinationId: city }))),
  visa: packs.filter((p) => p.country.visa).map((p) => ({ code: p.country.code, ...p.country.visa })),
};
writeFileSync(
  join(root, 'src/data/world.generated.ts'),
  `${header}import type { Destination, Place, VisaInfo } from './types';\nimport type { CountryFacts } from './world/types';\n\n` +
    // JSON.parse keeps tsc from inferring a union over thousands of literals (TS2590) and parses faster;
    // the shapes were validated above.
    `export const worldCountries = JSON.parse(${JSON.stringify(JSON.stringify(facts.countries))}) as CountryFacts[];\n` +
    `export const worldCities = JSON.parse(${JSON.stringify(JSON.stringify(facts.cities))}) as Destination[];\n` +
    `export const worldPlaces = JSON.parse(${JSON.stringify(JSON.stringify(facts.places))}) as Place[];\n` +
    `export const worldVisa = JSON.parse(${JSON.stringify(JSON.stringify(facts.visa))}) as VisaInfo[];\n`,
);
mkdirSync(join(root, 'src/content/world'), { recursive: true });
for (const l of LOCALES) {
  const text = {
    countries: Object.fromEntries(packs.map((p) => [p.country.code, p.country.text[l]])),
    cities: Object.fromEntries(packs.flatMap((p) => p.cities.map((c) => [c.id, c.text[l]]))),
    places: Object.fromEntries(packs.flatMap((p) => p.places.map((x) => [x.id, x.text[l]]))),
  };
  writeFileSync(join(root, `src/content/world/${l}.generated.ts`), `${header}import type { WorldText } from '@/data/world/types';\n\nconst text: WorldText = ${json(text)};\n\nexport default text;\n`);
}
console.log(`✓ world: ${packs.length} countries, ${cityCount} cities, ${placeCount} places`);
