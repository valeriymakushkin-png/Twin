import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './db';

/**
 * Онлайн-уточнение городов, которых нет во встроенном списке. Источник — открытый Geocoding API проекта Open-Meteo
 * (данные GeoNames, лицензия CC BY 4.0, ключ не нужен): https://open-meteo.com/en/docs/geocoding-api
 * В сеть уходит только введённое название города (без cookie и без referrer), ничего другого о пользователе или поездке.
 * Выключается в «Настройках». Без сети и при любом сбое приложение продолжает работать со встроенным списком.
 */
export interface GeoHit {
  /** Название на русском (если в базе есть), иначе исходное */
  name: string;
  countryCode: string;
  country?: string;
  /** Область/регион — для различения одноимённых городов */
  region?: string;
  lat: number;
  lng: number;
  population?: number;
}

export const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search';

const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);
const str = (v: unknown): string | undefined => (typeof v === 'string' && v.trim() ? v.trim() : undefined);

/**
 * Разбор ответа: { results: [{ name, latitude, longitude, country_code, country, admin1, population, feature_code }] }.
 * Ответ без `results` — «ничего не найдено» (пустой список). `{ error: true, reason }` и любая другая форма — ошибка (null).
 * Берутся только населённые пункты (код GeoNames PPL…), без областей и стран; координаты и страна проверяются.
 */
export function parseGeocoding(json: unknown): GeoHit[] | null {
  if (!isObj(json) || json.error === true) return null;
  if (json.results === undefined) return [];
  if (!Array.isArray(json.results)) return null;
  const out: GeoHit[] = [];
  const seen = new Set<string>();
  for (const r of json.results) {
    if (!isObj(r)) continue;
    const name = str(r.name);
    const lat = r.latitude;
    const lng = r.longitude;
    const cc = typeof r.country_code === 'string' && /^[A-Za-z]{2}$/.test(r.country_code) ? r.country_code.toUpperCase() : undefined;
    if (!name || !cc || typeof lat !== 'number' || typeof lng !== 'number' || !Number.isFinite(lat) || !Number.isFinite(lng) || Math.abs(lat) > 90 || Math.abs(lng) > 180) continue;
    if (typeof r.feature_code === 'string' && !r.feature_code.startsWith('PPL')) continue;
    const key = `${cc}:${name.toLowerCase()}:${lat.toFixed(1)}:${lng.toFixed(1)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ name, countryCode: cc, country: str(r.country), region: str(r.admin1), lat, lng, population: typeof r.population === 'number' && r.population > 0 ? r.population : undefined });
  }
  return out;
}

const cache = new Map<string, GeoHit[]>();
export const clearGeocodeCache = () => cache.clear();

export class GeocodeError extends Error {}

/** Ищет города по началу названия. Бросает `GeocodeError` при сбое сети/ответа; пустой список — «не найдено». */
export async function searchOnline(query: string, options: { language?: 'ru' | 'en'; count?: number; signal?: AbortSignal; fetchImpl?: typeof fetch; timeoutMs?: number } = {}): Promise<GeoHit[]> {
  const q = query.trim();
  if (q.length < 2 || q.length > 60) return [];
  const language = options.language ?? (/[А-Яа-яЁё]/.test(q) ? 'ru' : 'en');
  const key = `${language}:${q.toLowerCase()}`;
  const hit = cache.get(key);
  if (hit) return hit;
  const url = `${GEOCODING_URL}?${new URLSearchParams({ name: q, count: String(options.count ?? 8), language, format: 'json' })}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), options.timeoutMs ?? 7000);
  options.signal?.addEventListener('abort', () => controller.abort(), { once: true });
  try {
    const res = await (options.fetchImpl ?? fetch)(url, { credentials: 'omit', referrerPolicy: 'no-referrer', signal: controller.signal });
    if (!res.ok) throw new GeocodeError(`HTTP ${res.status}`);
    const parsed = parseGeocoding(await res.json());
    if (!parsed) throw new GeocodeError('format');
    cache.set(key, parsed);
    return parsed;
  } catch (e) {
    throw e instanceof GeocodeError ? e : new GeocodeError((e as Error).message ?? 'network');
  } finally {
    clearTimeout(timer);
  }
}

/** Настройка «искать города через интернет» (по умолчанию включена). */
export function useGeoOnline(): boolean {
  const v = useLiveQuery(async () => (await db.settings.get('geoOnline'))?.value as boolean | undefined, []);
  return v ?? true;
}
export const setGeoOnline = (on: boolean) => db.settings.put({ key: 'geoOnline', value: on });
