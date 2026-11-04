import { countryName } from './countries';

/**
 * Встроенный список городов мира (GeoNames, население от 15 000, лицензия CC BY 4.0) — для поиска города и его координат
 * без интернета. Файл большой, поэтому подгружается только когда нужен (форма поездки, карта, дневник).
 * Строка: [название, русские названия через «|», страна, широта, долгота, население].
 */
export type CityRow = [name: string, ru: string, cc: string, lat: number, lng: number, pop: number];

export interface City {
  name: string;
  ru: string[];
  cc: string;
  lat: number;
  lng: number;
  pop: number;
}

export interface CityIndex {
  cities: City[];
  /** Для каждого города — нормализованные названия (английское и русские) */
  keys: string[][];
}

/** Приводит название к виду для сравнения: без регистра, «ё» = «е», без диакритики и знаков препинания. */
export const normalizeName = (s: string): string =>
  s
    .toLowerCase()
    .replace(/ё/g, 'е')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();

export function buildIndex(rows: CityRow[]): CityIndex {
  const cities = rows.map(([name, ru, cc, lat, lng, pop]): City => ({ name, ru: ru ? ru.split('|') : [], cc, lat, lng, pop }));
  return { cities, keys: cities.map((c) => [normalizeName(c.name), ...c.ru.map(normalizeName)]) };
}

let loading: Promise<CityIndex> | null = null;
export function loadCities(): Promise<CityIndex> {
  loading ??= import('./cities.generated.json').then((m) => buildIndex(m.default as CityRow[]));
  return loading;
}

export interface CityHit {
  city: City;
  /** Как показать город: на языке запроса (русское название, если вводили по-русски) */
  label: string;
}

const hasCyrillic = (s: string) => /[А-Яа-яЁё]/.test(s);

/** Совпадение: 3 — название целиком, 2 — начало названия, 1 — начало любого слова названия («york» → «New York»), 0 — нет. */
function matchLevel(keys: string[], q: string): { level: number; at: number } {
  let best = { level: 0, at: 0 };
  keys.forEach((k, i) => {
    const level = k === q ? 3 : k.startsWith(q) ? 2 : k.includes(' ' + q) ? 1 : 0;
    if (level > best.level) best = { level, at: i };
  });
  return best;
}

/**
 * Поиск города по началу названия на русском или латиницей. Сначала точные совпадения, затем по началу, затем по слову;
 * внутри уровня — города выбранной страны, потом по населению.
 */
export function searchCities(index: CityIndex, query: string, options: { country?: string; limit?: number } = {}): CityHit[] {
  const q = normalizeName(query);
  if (q.length < 2) return [];
  const cyr = hasCyrillic(query);
  const hits: { city: City; level: number; at: number; home: number }[] = [];
  for (let i = 0; i < index.cities.length; i++) {
    const m = matchLevel(index.keys[i]!, q);
    if (m.level) hits.push({ city: index.cities[i]!, level: m.level, at: m.at, home: index.cities[i]!.cc === options.country ? 1 : 0 });
  }
  hits.sort((a, b) => b.level - a.level || b.home - a.home || b.city.pop - a.city.pop);
  return hits.slice(0, options.limit ?? 8).map(({ city, at }) => ({
    city,
    // at === 0 — совпало английское название; at > 0 — русское (индекс сдвинут на 1)
    label: cyr ? (at > 0 ? city.ru[at - 1]! : (city.ru[0] ?? city.name)) : city.name,
  }));
}

/** Точное совпадение названия (на любом языке): среди одноимённых предпочитаем город нужной страны, затем самый людный. */
export function findCity(index: CityIndex, name: string, country?: string): City | undefined {
  const q = normalizeName(name);
  if (!q) return undefined;
  let best: City | undefined;
  for (let i = 0; i < index.cities.length; i++) {
    if (!index.keys[i]!.includes(q)) continue;
    const c = index.cities[i]!;
    if (!best || (c.cc === country && best.cc !== country) || (c.cc === best.cc && c.pop > best.pop && (best.cc === country) === (c.cc === country))) best = c;
  }
  return best;
}

export const cityCountryName = (c: City) => countryName(c.cc);
