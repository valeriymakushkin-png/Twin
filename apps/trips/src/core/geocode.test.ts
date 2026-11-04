import { beforeEach, describe, expect, it, vi } from 'vitest';
import { clearGeocodeCache, GeocodeError, GEOCODING_URL, parseGeocoding, searchOnline } from './geocode';

// Образцы устроены по документации Open-Meteo Geocoding API (живой ответ из среды разработки получить нельзя).
const sample = {
  results: [
    { id: 2950159, name: 'Берлин', latitude: 52.52437, longitude: 13.41053, elevation: 74, feature_code: 'PPLC', country_code: 'DE', admin1: 'Берлин', timezone: 'Europe/Berlin', population: 3426354, country_id: 2921044, country: 'Германия' },
    { id: 5083330, name: 'Берлин', latitude: 44.46867, longitude: -71.18508, feature_code: 'PPL', country_code: 'US', admin1: 'Нью-Гэмпшир', population: 9425, country: 'США' },
    { id: 2950157, name: 'Берлин', latitude: 52.5, longitude: 13.4, feature_code: 'ADM1', country_code: 'DE', country: 'Германия' },
  ],
  generationtime_ms: 0.7,
};
const respond = (body: unknown, ok = true, status = 200) => vi.fn(async () => ({ ok, status, json: async () => body }) as unknown as Response);

beforeEach(() => clearGeocodeCache());

describe('разбор ответа геокодера', () => {
  it('берёт только населённые пункты, переводит страну в верхний регистр', () => {
    const hits = parseGeocoding(sample)!;
    expect(hits.map((h) => `${h.name}:${h.countryCode}`)).toEqual(['Берлин:DE', 'Берлин:US']); // область (ADM1) отброшена
    expect(hits[0]).toMatchObject({ lat: 52.52437, lng: 13.41053, region: 'Берлин', country: 'Германия', population: 3426354 });
  });
  it('нет results — «не найдено» (пустой список), а не ошибка', () => {
    expect(parseGeocoding({ generationtime_ms: 0.3 })).toEqual([]);
  });
  it('ошибка сервиса и чужая форма — ошибка', () => {
    expect(parseGeocoding({ error: true, reason: 'Parameter name is required' })).toBeNull();
    expect(parseGeocoding(null)).toBeNull();
    expect(parseGeocoding([])).toBeNull();
    expect(parseGeocoding({ results: 'x' })).toBeNull();
  });
  it('отбрасывает записи с неверными координатами, страной или без названия', () => {
    const bad = { results: [
      { name: 'A', latitude: 91, longitude: 0, country_code: 'DE' },
      { name: 'B', latitude: 10, longitude: 181, country_code: 'DE' },
      { name: 'C', latitude: 10, longitude: 10, country_code: 'DEU' },
      { name: '', latitude: 10, longitude: 10, country_code: 'DE' },
      { name: 'D', latitude: '10', longitude: 10, country_code: 'DE' },
      { name: 'Ok', latitude: 10, longitude: 10, country_code: 'de' },
    ] };
    expect(parseGeocoding(bad)!.map((h) => h.name)).toEqual(['Ok']);
  });
  it('убирает дубликаты', () => {
    const dup = { results: [sample.results[0], { ...sample.results[0], id: 1 }] };
    expect(parseGeocoding(dup)).toHaveLength(1);
  });
});

describe('поиск города в интернете', () => {
  it('запрос содержит только название, язык и формат; без cookie и referrer', async () => {
    const f = respond(sample);
    const hits = await searchOnline('Берлин', { fetchImpl: f });
    expect(hits).toHaveLength(2);
    const [url, init] = f.mock.calls[0] as unknown as [string, RequestInit];
    const u = new URL(url);
    expect(`${u.origin}${u.pathname}`).toBe(GEOCODING_URL);
    expect(Object.fromEntries(u.searchParams)).toEqual({ name: 'Берлин', count: '8', language: 'ru', format: 'json' });
    expect(init).toMatchObject({ credentials: 'omit', referrerPolicy: 'no-referrer' });
  });
  it('латиница — английский язык; слишком короткий запрос в сеть не уходит', async () => {
    const f = respond({ results: [] });
    await searchOnline('Ber', { fetchImpl: f });
    expect(new URL((f.mock.calls[0] as unknown as [string])[0]).searchParams.get('language')).toBe('en');
    const g = respond(sample);
    expect(await searchOnline('B', { fetchImpl: g })).toEqual([]);
    expect(g).not.toHaveBeenCalled();
  });
  it('повторный запрос берётся из памяти', async () => {
    const f = respond(sample);
    await searchOnline('Берлин', { fetchImpl: f });
    await searchOnline('  берлин ', { fetchImpl: f });
    expect(f).toHaveBeenCalledTimes(1);
  });
  it('сбои: HTTP, не тот формат, сеть — GeocodeError', async () => {
    await expect(searchOnline('Берлин', { fetchImpl: respond({}, false, 429) })).rejects.toBeInstanceOf(GeocodeError);
    await expect(searchOnline('Мюнхен', { fetchImpl: respond({ error: true }) })).rejects.toBeInstanceOf(GeocodeError);
    await expect(searchOnline('Кёльн', { fetchImpl: vi.fn(async () => { throw new TypeError('Failed to fetch'); }) })).rejects.toBeInstanceOf(GeocodeError);
  });
});
