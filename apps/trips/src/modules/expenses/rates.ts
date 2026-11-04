import { db, type VyloDb } from '../../core/db';

/**
 * Курсы валют. Когда есть интернет, приложение само подгружает свежие курсы из бесплатных открытых источников и
 * кладёт их в базу вместе с датой; без интернета работает по последним сохранённым (или по курсам, введённым вручную).
 *
 * В сеть уходит только обычный запрос «дай курсы к доллару» — никаких данных пользователя. Источники пробуются по
 * очереди; ответ строго проверяется, и если формат неожиданный — берётся следующий источник.
 */

export interface RatesCache {
  base: 'USD';
  /** Единиц валюты за 1 USD (USD = 1) */
  rates: Record<string, number>;
  /** Дата, на которую источник публикует эти курсы (мс) */
  publishedAt: number;
  /** Когда приложение их загрузило (мс) */
  fetchedAt: number;
  /** Откуда взяты, например "open.er-api.com" */
  source: string;
}

export interface Parsed {
  rates: Record<string, number>;
  publishedAt: number;
}

const isObj = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v);

/** Оставляет только трёхбуквенные коды с положительными конечными значениями; USD = 1. Мало валют → ответ считается негодным. */
function clean(raw: Record<string, unknown>, upper: boolean): Record<string, number> | null {
  const out: Record<string, number> = {};
  for (const [k, v] of Object.entries(raw)) {
    const code = upper ? k : k.toUpperCase();
    if (/^[A-Z]{3}$/.test(code) && typeof v === 'number' && Number.isFinite(v) && v > 0) out[code] = v;
  }
  out.USD = 1;
  return Object.keys(out).length >= 10 ? out : null;
}

/** open.er-api.com: { result: "success", time_last_update_unix, rates: { EUR: 0.92, … } } */
export function parseErApi(json: unknown): Parsed | null {
  if (!isObj(json) || json.result !== 'success' || !isObj(json.rates)) return null;
  const rates = clean(json.rates, true);
  const t = json.time_last_update_unix;
  return rates && typeof t === 'number' && t > 0 ? { rates, publishedAt: t * 1000 } : null;
}

/** currency-api (jsDelivr / pages.dev): { date: "2026-11-03", usd: { eur: 0.92, … } } */
export function parseCurrencyApi(json: unknown): Parsed | null {
  if (!isObj(json) || !isObj(json.usd) || typeof json.date !== 'string') return null;
  const rates = clean(json.usd, false);
  const t = Date.parse(`${json.date}T00:00:00Z`);
  return rates && Number.isFinite(t) ? { rates, publishedAt: t } : null;
}

/** frankfurter.dev (курсы ЕЦБ, ~30 валют): { base: "USD", date: "2026-11-03", rates: { EUR: 0.92, … } } */
export function parseFrankfurter(json: unknown): Parsed | null {
  if (!isObj(json) || json.base !== 'USD' || !isObj(json.rates) || typeof json.date !== 'string') return null;
  const rates = clean(json.rates, true);
  const t = Date.parse(`${json.date}T00:00:00Z`);
  return rates && Number.isFinite(t) ? { rates, publishedAt: t } : null;
}

export interface RateEndpoint {
  name: string;
  url: string;
  parse: (json: unknown) => Parsed | null;
}

export const ENDPOINTS: RateEndpoint[] = [
  { name: 'open.er-api.com', url: 'https://open.er-api.com/v6/latest/USD', parse: parseErApi },
  { name: 'cdn.jsdelivr.net', url: 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json', parse: parseCurrencyApi },
  { name: 'currency-api.pages.dev', url: 'https://latest.currency-api.pages.dev/v1/currencies/usd.json', parse: parseCurrencyApi },
  { name: 'api.frankfurter.dev', url: 'https://api.frankfurter.dev/v1/latest?base=USD', parse: parseFrankfurter },
];

export class RatesError extends Error {}

export interface FetchOptions {
  fetch?: typeof fetch;
  now?: () => number;
  timeoutMs?: number;
  endpoints?: RateEndpoint[];
}

/** Пробует источники по очереди; первый, чей ответ прошёл проверку, побеждает. Все недоступны → RatesError. */
export async function fetchRates(options: FetchOptions = {}): Promise<RatesCache> {
  const doFetch = options.fetch ?? fetch;
  const now = options.now ?? Date.now;
  for (const ep of options.endpoints ?? ENDPOINTS) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), options.timeoutMs ?? 8000);
    try {
      const res = await doFetch(ep.url, { signal: controller.signal, cache: 'no-store', credentials: 'omit', referrerPolicy: 'no-referrer' });
      if (!res.ok) continue;
      const parsed = ep.parse(await res.json());
      if (parsed) return { base: 'USD', rates: parsed.rates, publishedAt: parsed.publishedAt, fetchedAt: now(), source: ep.name };
    } catch {
      /* нет сети, таймаут или не JSON — пробуем следующий источник */
    } finally {
      clearTimeout(timer);
    }
  }
  throw new RatesError('no-source');
}

export const MAX_AGE_MS = 12 * 3_600_000;
export const RETRY_AFTER_FAILURE_MS = 15 * 60_000;

export const isStale = (cache: RatesCache | undefined, now: number, maxAge = MAX_AGE_MS) => !cache || now - cache.fetchedAt > maxAge;

/**
 * Узкий источник (ЕЦБ, ~30 валют) не должен «стирать» широкий набор, загруженный ранее: недостающие валюты
 * остаются от предыдущей загрузки, если она не старше недели.
 */
export function mergeCaches(old: RatesCache | undefined, fresh: RatesCache): RatesCache {
  if (!old || Object.keys(fresh.rates).length >= 100 || fresh.fetchedAt - old.fetchedAt > 7 * 86_400_000) return fresh;
  return { ...fresh, rates: { ...old.rates, ...fresh.rates } };
}

export type RefreshResult = 'updated' | 'fresh' | 'failed' | 'offline' | 'disabled';

let inflight: Promise<RefreshResult> | null = null;
let lastFailure = -Infinity;

export interface RefreshOptions extends FetchOptions {
  /** Обновить, даже если сохранённые курсы свежие (кнопка «Обновить») */
  force?: boolean;
  /** Не ждать паузы после неудачи (например, интернет только что появился) */
  ignoreThrottle?: boolean;
  database?: VyloDb;
  online?: boolean;
}

export const getRatesCache = async (database: VyloDb = db) => (await database.settings.get('rates'))?.value as RatesCache | undefined;
export const isAutoEnabled = async (database: VyloDb = db) => ((await database.settings.get('ratesAuto'))?.value as boolean | undefined) !== false;

/**
 * Обновляет курсы, если это нужно и можно: есть интернет, автообновление не выключено, сохранённые курсы старше
 * 12 часов (или нет вообще) и недавняя попытка не провалилась. Одновременно выполняется не больше одного запроса.
 */
export function refreshRates(options: RefreshOptions = {}): Promise<RefreshResult> {
  if (inflight) return inflight;
  inflight = (async (): Promise<RefreshResult> => {
    const database = options.database ?? db;
    const now = (options.now ?? Date.now)();
    const online = options.online ?? (typeof navigator === 'undefined' ? true : navigator.onLine);
    if (!options.force && !(await isAutoEnabled(database))) return 'disabled';
    if (!online) return 'offline';
    const cache = await getRatesCache(database);
    if (!options.force && !isStale(cache, now)) return 'fresh';
    if (!options.force && !options.ignoreThrottle && now - lastFailure < RETRY_AFTER_FAILURE_MS) return 'failed';
    try {
      const fresh = await fetchRates(options);
      await database.settings.put({ key: 'rates', value: mergeCaches(cache, fresh) });
      return 'updated';
    } catch {
      lastFailure = now;
      return 'failed';
    }
  })().finally(() => {
    inflight = null;
  });
  return inflight;
}

/** Сбрасывает память о неудачах — нужно только тестам. */
export const _resetRatesState = () => {
  inflight = null;
  lastFailure = -Infinity;
};

/**
 * Включает автоматическую подгрузку: при запуске, когда интернет появляется после офлайна и когда приложение
 * снова открывают. Сам запрос делается, только если сохранённые курсы устарели.
 */
export function startRatesAutoRefresh(): () => void {
  void refreshRates();
  const onOnline = () => void refreshRates({ ignoreThrottle: true });
  const onVisible = () => {
    if (!document.hidden) void refreshRates();
  };
  window.addEventListener('online', onOnline);
  document.addEventListener('visibilitychange', onVisible);
  return () => {
    window.removeEventListener('online', onOnline);
    document.removeEventListener('visibilitychange', onVisible);
  };
}
