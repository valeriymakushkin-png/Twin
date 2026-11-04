import type { ItineraryItem, Trip } from '../../core/db';
import { normalizeName } from '../../data/cities';
import { dedupeConsecutive, haversineKm, routeLengthKm, type LatLng } from './geo';

/** Находит координаты города по названию и стране (из встроенного списка); `undefined`, если неизвестен. */
export type CityLocator = (name: string, countryCode: string) => LatLng | undefined;

export interface PlacedCity {
  key: string;
  name: string;
  countryCode: string;
  point?: LatLng;
}

export interface Pin extends LatLng {
  id: string;
  kind: 'city' | 'place';
  label: string;
  /** Сколько записей маршрута относится к этой точке (для города) */
  count: number;
  tripId: string;
  planned: boolean;
}

export interface TravelStats {
  /** Страны поездок, которые уже начались (по «сегодня») */
  countries: string[];
  /** Страны будущих поездок, в которых пока не были */
  plannedCountries: string[];
  cities: PlacedCity[];
  trips: number;
  places: number;
  /** Километры по прямой вдоль маршрутов начавшихся поездок */
  km: number;
  pins: Pin[];
}

export const cityKey = (name: string, countryCode: string) => `${countryCode}:${normalizeName(name)}`;

/** Координаты записи маршрута: свои, иначе города записи. */
export function itemPoint(item: ItineraryItem, trip: Trip, locate: CityLocator): LatLng | undefined {
  if (item.lat !== undefined && item.lng !== undefined) return { lat: item.lat, lng: item.lng };
  return item.city ? cityPoint(item.city, trip, locate) : undefined;
}

export function cityPoint(name: string, trip: Trip, locate: CityLocator): LatLng | undefined {
  const own = trip.cities.find((c) => normalizeName(c.name) === normalizeName(name));
  if (own?.lat !== undefined && own.lng !== undefined) return { lat: own.lat, lng: own.lng };
  return locate(name, trip.countryCode);
}

const chronological = (items: ItineraryItem[]) => [...items].sort((a, b) => (a.date === b.date ? a.order - b.order : a.date < b.date ? -1 : 1));

/**
 * Точки маршрута поездки по порядку. Берём места записей (свои координаты или города); если их меньше двух разных,
 * маршрутом считаем города поездки в том порядке, в каком они перечислены.
 */
export function tripRoute(trip: Trip, items: ItineraryItem[], locate: CityLocator): LatLng[] {
  const fromItems = dedupeConsecutive(chronological(items).flatMap((i) => itemPoint(i, trip, locate) ?? []));
  if (fromItems.length >= 2) return fromItems;
  const fromCities = dedupeConsecutive(trip.cities.flatMap((c) => cityPoint(c.name, trip, locate) ?? []));
  return fromCities.length >= 2 ? fromCities : fromItems.length ? fromItems : fromCities;
}

export interface TravelFilter {
  /** Только поездки, начавшиеся в этом году; undefined — за всё время */
  year?: number;
}

export function computeTravel(trips: Trip[], itemsOf: (tripId: string) => ItineraryItem[], locate: CityLocator, today: string, filter: TravelFilter = {}): TravelStats {
  const selected = trips.filter((t) => filter.year === undefined || t.startDate.startsWith(String(filter.year)));
  const visitedTrips = selected.filter((t) => t.startDate <= today);
  const plannedTrips = selected.filter((t) => t.startDate > today);

  const countries = [...new Set(visitedTrips.map((t) => t.countryCode))];
  const plannedCountries = [...new Set(plannedTrips.map((t) => t.countryCode))].filter((c) => !countries.includes(c));

  const cityMap = new Map<string, PlacedCity>();
  const pins: Pin[] = [];
  let km = 0;
  let places = 0;

  for (const [list, planned] of [[visitedTrips, false], [plannedTrips, true]] as const) {
    for (const trip of list) {
      const items = itemsOf(trip.id);
      if (!planned) {
        places += items.filter((i) => i.kind === 'place').length;
        km += routeLengthKm(tripRoute(trip, items, locate));
        for (const c of trip.cities) {
          const key = cityKey(c.name, trip.countryCode);
          if (!cityMap.has(key)) cityMap.set(key, { key, name: c.name, countryCode: trip.countryCode, point: cityPoint(c.name, trip, locate) });
        }
      }
      // Пины: города поездки и места с собственными координатами
      for (const c of trip.cities) {
        const point = cityPoint(c.name, trip, locate);
        if (point) pins.push({ id: `${trip.id}:c:${normalizeName(c.name)}`, kind: 'city', label: c.name, count: items.filter((i) => i.city && normalizeName(i.city) === normalizeName(c.name)).length, tripId: trip.id, planned, ...point });
      }
      for (const i of items)
        if (i.kind === 'place' && i.lat !== undefined && i.lng !== undefined) pins.push({ id: `${trip.id}:p:${i.id}`, kind: 'place', label: i.title, count: 1, tripId: trip.id, planned, lat: i.lat, lng: i.lng });
    }
  }

  return { countries, plannedCountries, cities: [...cityMap.values()], trips: visitedTrips.length, places, km, pins };
}

/** Годы, за которые есть поездки (для переключателя «год / всё время»), новые первыми. */
export const tripYears = (trips: Trip[]): number[] => [...new Set(trips.map((t) => Number(t.startDate.slice(0, 4))))].sort((a, b) => b - a);

// --- Факты для дневника -------------------------------------------------------------------------------------------------

export interface TripFacts {
  days: number;
  items: number;
  places: number;
  events: number;
  cities: string[];
  km: number;
  /** Самое далёкое от первой точки маршрута место */
  farthest?: { title: string; km: number };
  busiestDay?: { date: string; count: number };
  quietestDay?: { date: string; count: number };
  earliest?: { time: string; title: string };
  latest?: { time: string; title: string };
  photos: number;
}

export function tripFacts(trip: Trip, items: ItineraryItem[], locate: CityLocator, photoCount: number, days: number): TripFacts {
  const ordered = chronological(items);
  const places = items.filter((i) => i.kind === 'place').length;
  const byDay = new Map<string, number>();
  for (const i of items) byDay.set(i.date, (byDay.get(i.date) ?? 0) + 1);
  const dayList = [...byDay].sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1));

  const route = tripRoute(trip, items, locate);
  let farthest: TripFacts['farthest'];
  const origin = route[0];
  if (origin) {
    for (const i of ordered) {
      const p = itemPoint(i, trip, locate);
      if (!p) continue;
      const d = haversineKm(origin, p);
      if (d >= 1 && (!farthest || d > farthest.km)) farthest = { title: i.title, km: d };
    }
  }

  const timed = ordered.filter((i) => i.time).sort((a, b) => (a.time! < b.time! ? -1 : a.time! > b.time! ? 1 : 0));
  return {
    days,
    items: items.length,
    places,
    events: items.length - places,
    cities: trip.cities.map((c) => c.name),
    km: routeLengthKm(route),
    farthest,
    busiestDay: dayList[0] && dayList[0][1] > 1 ? { date: dayList[0][0], count: dayList[0][1] } : undefined,
    quietestDay: dayList.length > 1 && dayList.at(-1)![1] < dayList[0]![1] ? { date: dayList.at(-1)![0], count: dayList.at(-1)![1] } : undefined,
    earliest: timed[0] ? { time: timed[0].time!, title: timed[0].title } : undefined,
    latest: timed.at(-1) && timed.length > 1 ? { time: timed.at(-1)!.time!, title: timed.at(-1)!.title } : undefined,
    photos: photoCount,
  };
}

