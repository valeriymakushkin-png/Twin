import type { Expense, ItineraryItem, Trip } from '../../core/db';
import { formatDayShort } from '../../core/dates';
import { countryName } from '../../data/countries';
import { normalizeName } from '../../data/cities';
import { plural } from '../../core/strings';
import { haversineKm } from '../map/geo';
import { cityPoint, tripCities, type CityLocator } from '../map/stats';

/** Что можно исправить одной кнопкой. */
export type IssueFix =
  /** Раздвинуть даты поездки, чтобы в них попали все записи */
  | { kind: 'extendDates'; start: string; end: string }
  /** Уточнить город: выбрать нужный из списка (с координатами и страной) */
  | { kind: 'pickCity'; city: string };

export interface Issue {
  id: string;
  /** warn — данные противоречат друг другу, info — стоит знать */
  level: 'warn' | 'info';
  text: string;
  fix?: IssueFix;
}

const RECORDS = ['{n} запись', '{n} записи', '{n} записей'] as const;
const EXPENSES = ['{n} трата', '{n} траты', '{n} трат'] as const;
/** Если место записи дальше этого от своего города — скорее всего, опечатка в координатах или не тот город. */
export const FAR_FROM_CITY_KM = 150;

/**
 * Проверка поездки на противоречия: записи вне дат, города без координат или «из другой страны», места далеко от своего
 * города, траты вне дат. Ничего не меняет — только находит и предлагает исправление.
 */
export function checkTrip(trip: Trip, items: ItineraryItem[], expenses: Expense[], locate: CityLocator): Issue[] {
  const issues: Issue[] = [];

  // 1. Записи вне дат поездки: дневник и счётчики дней считаются по датам поездки.
  const outside = items.filter((i) => i.date < trip.startDate || i.date > trip.endDate);
  if (outside.length) {
    const dates = outside.map((i) => i.date).sort();
    const first = dates[0]!;
    const last = dates[dates.length - 1]!;
    issues.push({
      id: 'items-outside',
      level: 'warn',
      text: `${plural(outside.length, RECORDS)} вне дат поездки (${first === last ? formatDayShort(first) : `${formatDayShort(first)} — ${formatDayShort(last)}`}). В дневнике и счётчиках дней они не совпадут с датами поездки.`,
      fix: { kind: 'extendDates', start: first < trip.startDate ? first : trip.startDate, end: last > trip.endDate ? last : trip.endDate },
    });
  }

  // 2. Города: без координат и «не из этой страны».
  for (const city of tripCities(trip, items, locate)) {
    const own = trip.cities.find((c) => normalizeName(c.name) === normalizeName(city.name));
    const explicit = own?.lat !== undefined && own.lng !== undefined;
    if (!city.point) {
      issues.push({ id: `city-nocoords:${city.key}`, level: 'warn', text: `«${city.name}» не найден в списке городов — он не попадёт на карту и в километры.`, fix: { kind: 'pickCity', city: city.name } });
      continue;
    }
    if (!own?.cc && !explicit) {
      const found = locate(city.name, trip.countryCode);
      if (found?.cc && found.cc !== trip.countryCode)
        issues.push({
          id: `city-country:${city.key}`,
          level: 'warn',
          text: `«${city.name}» найден в стране «${countryName(found.cc)}», а страна поездки — «${countryName(trip.countryCode)}». Уточните город, чтобы страна на карте была верной.`,
          fix: { kind: 'pickCity', city: city.name },
        });
    }
  }

  // 3. Места со своими координатами, которые далеко от своего города.
  for (const i of items) {
    if (i.lat === undefined || i.lng === undefined || !i.city) continue;
    const c = cityPoint(i.city, trip, locate);
    if (!c) continue;
    const d = haversineKm(c, { lat: i.lat, lng: i.lng });
    if (d > FAR_FROM_CITY_KM) issues.push({ id: `far:${i.id}`, level: 'warn', text: `«${i.title}» отмечено в ${Math.round(d / 10) * 10} км от города «${i.city}» — проверьте координаты или город.` });
  }

  // 4. Траты вне дат поездки: в средний расход в день они не входят.
  const spentOutside = expenses.filter((e) => e.date < trip.startDate || e.date > trip.endDate);
  if (spentOutside.length) issues.push({ id: 'expenses-outside', level: 'info', text: `${plural(spentOutside.length, EXPENSES)} вне дат поездки — они учтены в итоге, но не в среднем расходе в день.` });

  return issues;
}
