import 'fake-indexeddb/auto';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { VyloDb } from '../../core/db';
import { _resetRatesState, fetchRates, getRatesCache, isStale, mergeCaches, parseCurrencyApi, parseErApi, parseFrankfurter, refreshRates, type RatesCache } from './rates';

// Образцы ответов в форматах, которые публикуют сервисы (проверены по их документации; сами сервисы из среды разработки недоступны).
const many = Object.fromEntries('AUD BGN BRL CAD CHF CNY CZK DKK EUR GBP HKD HUF IDR ILS INR ISK JPY KRW MXN MYR NOK NZD PHP PLN RON SEK SGD THB TRY ZAR'.split(' ').map((c, i) => [c, 1 + i / 10]));
const erApi = { result: 'success', base_code: 'USD', time_last_update_unix: 1_793_000_000, rates: { USD: 1, ...many, VND: 25000 } };
const currencyApi = { date: '2026-11-03', usd: Object.fromEntries(Object.entries({ ...many, VND: 25000 }).map(([k, v]) => [k.toLowerCase(), v])) };
const frankfurter = { amount: 1, base: 'USD', date: '2026-11-03', rates: many };

const json = (body: unknown, status = 200) => Promise.resolve(new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } }));
const endpoints = (names: string[]) => names.map((name, i) => ({ name, url: `https://${name}/`, parse: [parseErApi, parseCurrencyApi, parseFrankfurter][i % 3]! }));

describe('разбор ответов сервисов', () => {
  it('open.er-api.com', () => {
    const p = parseErApi(erApi)!;
    expect(p.rates.VND).toBe(25000);
    expect(p.rates.USD).toBe(1);
    expect(p.publishedAt).toBe(1_793_000_000_000);
  });
  it('currency-api: коды в нижнем регистре приводятся к верхнему', () => {
    const p = parseCurrencyApi(currencyApi)!;
    expect(p.rates.VND).toBe(25000);
    expect(p.publishedAt).toBe(Date.parse('2026-11-03T00:00:00Z'));
  });
  it('frankfurter', () => {
    expect(parseFrankfurter(frankfurter)!.rates.THB).toBeCloseTo(many.THB!, 6);
  });
  it('отвергает неожиданные, неполные и испорченные ответы', () => {
    for (const bad of [null, 'html', [], {}, { result: 'error' }, { ...erApi, result: 'error' }, { ...erApi, rates: { EUR: 0.9 } }, { ...erApi, time_last_update_unix: 'вчера' }]) expect(parseErApi(bad)).toBeNull();
    expect(parseCurrencyApi({ date: 'не дата', usd: currencyApi.usd })).toBeNull();
    expect(parseFrankfurter({ ...frankfurter, base: 'EUR' })).toBeNull();
  });
  it('выбрасывает нулевые, отрицательные и нечисловые курсы', () => {
    const p = parseErApi({ ...erApi, rates: { ...erApi.rates, BAD: 0, NEG: -2, STR: '5', INF: Infinity, LONGCODE: 3 } })!;
    expect(Object.keys(p.rates)).not.toEqual(expect.arrayContaining(['BAD', 'NEG', 'STR', 'INF', 'LONGCODE']));
  });
});

describe('загрузка курсов', () => {
  it('берёт первый работающий источник', async () => {
    const f = vi.fn().mockImplementation(() => json(erApi));
    const c = await fetchRates({ fetch: f, now: () => 5, endpoints: endpoints(['a.test', 'b.test']) });
    expect(c).toMatchObject({ source: 'a.test', fetchedAt: 5, base: 'USD' });
    expect(f).toHaveBeenCalledTimes(1);
    expect(f.mock.calls[0]![1]).toMatchObject({ credentials: 'omit', referrerPolicy: 'no-referrer' }); // ничего лишнего в запросе
  });
  it('переходит к следующему источнику при ошибке сети, плохом статусе и странном ответе', async () => {
    const f = vi.fn().mockRejectedValueOnce(new TypeError('offline')).mockImplementationOnce(() => json({}, 503)).mockImplementationOnce(() => json({ oops: true })).mockImplementation(() => json(frankfurter));
    const c = await fetchRates({ fetch: f, endpoints: endpoints(['a', 'b', 'c', 'd']).map((e, i) => (i === 3 ? { ...e, parse: parseFrankfurter } : e)) });
    expect(c.source).toBe('d');
    expect(f).toHaveBeenCalledTimes(4);
  });
  it('все источники недоступны → ошибка', async () => {
    await expect(fetchRates({ fetch: () => Promise.reject(new Error('x')), endpoints: endpoints(['a', 'b']) })).rejects.toThrow('no-source');
  });
  it('зависший источник обрывается по таймауту', async () => {
    const hang = vi.fn().mockImplementation((_u: string, init: RequestInit) => new Promise((_, rej) => init.signal!.addEventListener('abort', () => rej(new Error('aborted')))));
    await expect(fetchRates({ fetch: hang as unknown as typeof fetch, timeoutMs: 20, endpoints: endpoints(['a']) })).rejects.toThrow();
  });
});

describe('автообновление', () => {
  let db: VyloDb;
  beforeEach(() => {
    _resetRatesState();
    db = new VyloDb(`rates-${Math.random()}`);
  });
  const ok = () => vi.fn().mockImplementation(() => json(erApi));
  const opts = (fetch: ReturnType<typeof ok>, extra = {}) => ({ database: db, fetch: fetch as unknown as typeof globalThis.fetch, endpoints: endpoints(['a.test']), online: true, ...extra });

  it('первый запуск при интернете: загружает и сохраняет курсы', async () => {
    const f = ok();
    expect(await refreshRates(opts(f))).toBe('updated');
    const cache = await getRatesCache(db);
    expect(cache!.rates.VND).toBe(25000);
    expect(cache!.source).toBe('a.test');
  });

  it('свежие курсы не перезагружаются, устаревшие — да', async () => {
    const f = ok();
    await refreshRates(opts(f, { now: () => 1_000_000 }));
    expect(await refreshRates(opts(f, { now: () => 1_000_000 + 3_600_000 }))).toBe('fresh');
    expect(f).toHaveBeenCalledTimes(1);
    expect(await refreshRates(opts(f, { now: () => 1_000_000 + 13 * 3_600_000 }))).toBe('updated');
    expect(f).toHaveBeenCalledTimes(2);
  });

  it('без интернета ничего не запрашивает и не портит сохранённое', async () => {
    await refreshRates(opts(ok()));
    const f = ok();
    expect(await refreshRates(opts(f, { online: false, force: true }))).toBe('offline');
    expect(f).not.toHaveBeenCalled();
    expect((await getRatesCache(db))!.rates.VND).toBe(25000);
  });

  it('неудача не стирает прежние курсы и не повторяется чаще, чем раз в 15 минут; при появлении сети — повторяется сразу', async () => {
    await refreshRates(opts(ok(), { now: () => 0 }));
    const down = vi.fn().mockRejectedValue(new Error('down'));
    expect(await refreshRates(opts(down, { now: () => 13 * 3_600_000 }))).toBe('failed');
    expect(await refreshRates(opts(down, { now: () => 13 * 3_600_000 + 60_000 }))).toBe('failed');
    expect(down).toHaveBeenCalledTimes(1); // вторая попытка отложена
    expect((await getRatesCache(db))!.rates.VND).toBe(25000);
    const back = ok();
    expect(await refreshRates(opts(back, { now: () => 13 * 3_600_000 + 120_000, ignoreThrottle: true }))).toBe('updated');
  });

  it('автообновление можно выключить, кнопка «Обновить» всё равно работает', async () => {
    await db.settings.put({ key: 'ratesAuto', value: false });
    const f = ok();
    expect(await refreshRates(opts(f))).toBe('disabled');
    expect(f).not.toHaveBeenCalled();
    expect(await refreshRates(opts(f, { force: true }))).toBe('updated');
  });

  it('одновременные вызовы делают один запрос', async () => {
    const f = ok();
    const [a, b] = await Promise.all([refreshRates(opts(f)), refreshRates(opts(f))]);
    expect([a, b]).toEqual(['updated', 'updated']);
    expect(f).toHaveBeenCalledTimes(1);
  });

  it('узкий источник дополняет, а не заменяет широкий набор', () => {
    const wide: RatesCache = { base: 'USD', rates: { USD: 1, EUR: 0.9, VND: 25000 }, publishedAt: 1, fetchedAt: 1000, source: 'wide' };
    const narrow: RatesCache = { base: 'USD', rates: { USD: 1, EUR: 0.95 }, publishedAt: 2, fetchedAt: 2000, source: 'narrow' };
    expect(mergeCaches(wide, narrow).rates).toEqual({ USD: 1, EUR: 0.95, VND: 25000 });
    expect(mergeCaches(wide, { ...narrow, fetchedAt: 9 * 86_400_000 }).rates).toEqual({ USD: 1, EUR: 0.95 }); // старое (>7 дней) не тянем
    expect(mergeCaches(undefined, narrow)).toBe(narrow);
  });

  it('isStale', () => {
    const c: RatesCache = { base: 'USD', rates: {}, publishedAt: 0, fetchedAt: 0, source: 's' };
    expect(isStale(undefined, 0)).toBe(true);
    expect(isStale(c, 11 * 3_600_000)).toBe(false);
    expect(isStale(c, 13 * 3_600_000)).toBe(true);
  });
});
