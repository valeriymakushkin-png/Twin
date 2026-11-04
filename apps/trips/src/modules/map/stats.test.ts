import { describe, expect, it } from 'vitest';
import type { ItineraryItem, Trip } from '../../core/db';
import { haversineKm } from './geo';
import { computeTravel, tripFacts, tripRoute, tripYears, type CityLocator } from './stats';

const LISBON = { lat: 38.7223, lng: -9.1393 };
const PORTO = { lat: 41.1579, lng: -8.6291 };
const PARIS = { lat: 48.8566, lng: 2.3522 };
const locate: CityLocator = (name) => ({ лиссабон: LISBON, порту: PORTO, париж: PARIS } as Record<string, typeof LISBON>)[name.toLowerCase()];

let n = 0;
const trip = (id: string, cc: string, start: string, end: string, cities: string[]): Trip => ({ id, name: id, countryCode: cc, cities: cities.map((name) => ({ name })), startDate: start, endDate: end, createdAt: 1, updatedAt: 1 });
const item = (tripId: string, date: string, order: number, title: string, extra: Partial<ItineraryItem> = {}): ItineraryItem => ({ id: `i${++n}`, tripId, date, order, kind: 'place', title, createdAt: 1, updatedAt: 1, ...extra });

const pt = trip('pt', 'PT', '2026-05-01', '2026-05-05', ['Лиссабон', 'Порту']);
const fr = trip('fr', 'FR', '2026-09-01', '2026-09-03', ['Париж']);
const old = trip('old', 'PT', '2025-04-01', '2025-04-03', ['Лиссабон']);
const items: Record<string, ItineraryItem[]> = {
  pt: [item('pt', '2026-05-01', 0, 'Белен', { city: 'Лиссабон' }), item('pt', '2026-05-03', 0, 'Рибейра', { city: 'Порту' }), item('pt', '2026-05-04', 0, 'Лувр?', { city: 'Порту', kind: 'event' })],
  fr: [item('fr', '2026-09-01', 0, 'Лувр', { city: 'Париж' })],
  old: [],
};
const itemsOf = (id: string) => items[id] ?? [];

describe('маршрут поездки', () => {
  it('берёт места записей по порядку и склеивает одинаковые подряд', () => {
    const route = tripRoute(pt, items.pt!, locate);
    expect(route).toEqual([LISBON, PORTO]);
  });
  it('если мест мало — маршрут по городам поездки в перечисленном порядке', () => {
    expect(tripRoute(pt, [], locate)).toEqual([LISBON, PORTO]);
    expect(tripRoute(trip('x', 'PT', '2026-05-01', '2026-05-02', ['Порту', 'Лиссабон']), [], locate)).toEqual([PORTO, LISBON]);
  });
  it('собственные координаты места важнее координат города', () => {
    const own = item('pt', '2026-05-01', 0, 'Вид', { city: 'Лиссабон', lat: 38.7, lng: -9.2 });
    expect(tripRoute(pt, [own, items.pt![1]!], locate)[0]).toEqual({ lat: 38.7, lng: -9.2 });
  });
  it('неизвестные города пропускаются без ошибки', () => {
    expect(tripRoute(trip('y', 'PT', '2026-05-01', '2026-05-02', ['Нигденск']), [], locate)).toEqual([]);
  });
});

describe('счётчики путешествий', () => {
  const all = [pt, fr, old];

  it('считает страны, города и километры только по начавшимся поездкам', () => {
    const s = computeTravel(all, itemsOf, locate, '2026-06-01');
    expect(s.countries.sort()).toEqual(['PT']);
    expect(s.plannedCountries).toEqual(['FR']);
    expect(s.trips).toBe(2); // pt и old
    expect(s.cities.map((c) => c.name).sort()).toEqual(['Лиссабон', 'Порту']); // «Лиссабон» из двух поездок считается один раз
    expect(s.km).toBeCloseTo(haversineKm(LISBON, PORTO), 3);
    expect(s.places).toBe(2);
  });

  it('после начала парижской поездки добавляется страна, город и километры не растут без маршрута', () => {
    const s = computeTravel(all, itemsOf, locate, '2026-09-02');
    expect(s.countries.sort()).toEqual(['FR', 'PT']);
    expect(s.plannedCountries).toEqual([]);
    expect(s.cities).toHaveLength(3);
    expect(s.km).toBeCloseTo(haversineKm(LISBON, PORTO), 3);
  });

  it('фильтр по году', () => {
    const s = computeTravel(all, itemsOf, locate, '2026-12-31', { year: 2025 });
    expect(s).toMatchObject({ countries: ['PT'], trips: 1, km: 0 });
    expect(tripYears(all)).toEqual([2026, 2025]);
  });

  it('пины: города с координатами и места со своими координатами; будущие поездки помечены', () => {
    const own = [item('pt', '2026-05-02', 1, 'Смотровая', { lat: 38.71, lng: -9.13 })];
    const s = computeTravel(all, (id) => (id === 'pt' ? [...items.pt!, ...own] : itemsOf(id)), locate, '2026-06-01');
    expect(s.pins.filter((p) => p.kind === 'city' && !p.planned).map((p) => p.label).sort()).toEqual(['Лиссабон', 'Лиссабон', 'Порту']);
    expect(s.pins.find((p) => p.kind === 'place')).toMatchObject({ label: 'Смотровая', lat: 38.71 });
    expect(s.pins.find((p) => p.planned)).toMatchObject({ label: 'Париж' });
    expect(s.pins.find((p) => p.label === 'Порту')!.count).toBe(2);
  });

  it('без поездок и без координат ничего не ломается', () => {
    expect(computeTravel([], itemsOf, locate, '2026-06-01')).toMatchObject({ countries: [], cities: [], km: 0, trips: 0, pins: [] });
    const s = computeTravel([trip('z', 'XX', '2026-01-01', '2026-01-02', ['Нигденск'])], itemsOf, locate, '2026-06-01');
    expect(s.countries).toEqual(['XX']);
    expect(s.cities[0]!.point).toBeUndefined();
    expect(s.km).toBe(0);
  });
});

describe('факты для дневника', () => {
  it('находит самый насыщенный день, самое далёкое место и ранний/поздний старт', () => {
    const list = [
      item('pt', '2026-05-01', 0, 'Белен', { city: 'Лиссабон', time: '09:30' }),
      item('pt', '2026-05-01', 1, 'Алфама', { city: 'Лиссабон', time: '12:00' }),
      item('pt', '2026-05-01', 2, 'Ужин', { city: 'Лиссабон', time: '21:00' }),
      item('pt', '2026-05-03', 0, 'Рибейра', { city: 'Порту', time: '10:00' }),
    ];
    const f = tripFacts(pt, list, locate, 3, 5);
    expect(f).toMatchObject({ days: 5, items: 4, places: 4, events: 0, photos: 3 });
    expect(f.busiestDay).toEqual({ date: '2026-05-01', count: 3 });
    expect(f.quietestDay).toEqual({ date: '2026-05-03', count: 1 });
    expect(f.farthest!.title).toBe('Рибейра');
    expect(f.farthest!.km).toBeCloseTo(haversineKm(LISBON, PORTO), 3);
    expect(f.earliest).toEqual({ time: '09:30', title: 'Белен' });
    expect(f.latest).toEqual({ time: '21:00', title: 'Ужин' });
    expect(f.km).toBeCloseTo(haversineKm(LISBON, PORTO), 3);
  });
  it('в поездке без записей фактов нет', () => {
    const f = tripFacts(pt, [], locate, 0, 5);
    expect(f.busiestDay).toBeUndefined();
    expect(f.farthest).toBeUndefined();
    expect(f.earliest).toBeUndefined();
    expect(f.items).toBe(0);
  });
});
