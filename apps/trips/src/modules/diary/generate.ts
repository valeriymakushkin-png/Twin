import type { DiaryPage, ExpenseCategory, ItineraryItem, PhotoSlot, Trip } from '../../core/db';
import { formatDayFull, formatRange } from '../../core/dates';
import { fill, plural } from '../../core/strings';
import { countryName } from '../../data/countries';
import type { TripFacts } from '../map/stats';
import { ITEMS_LEFT, P, PHOTOS, PLACES, DAYS } from './phrases';
import { Picker, rng } from './random';

/** Всё, что нужно генератору: факты поездки и подготовленные значения. Чистые данные — легко проверять тестами. */
export interface DiaryInput {
  trip: Trip;
  /** Записи маршрута (любой порядок) */
  items: ItineraryItem[];
  /** Фото записей: id записи → id фото по порядку */
  photosByItem: Map<string, string[]>;
  facts: TripFacts;
  /** Расходы в валюте отчётов; нет данных — нет и фраз про деньги */
  spend?: {
    currency: string;
    byDay: Map<string, number>;
    average?: number;
    topCategory?: { label: string; total: number; category: ExpenseCategory };
    mostExpensiveDay?: { date: string; total: number };
  };
  money: (amount: number, currency: string) => string;
}

const slot = (source: string): PhotoSlot => ({ source, fx: 0.5, fy: 0.5, zoom: 1 });

/** «1 250 км» — километры округляются, чтобы не изображать лишнюю точность. */
export const formatKm = (km: number): string => {
  const rounded = km >= 100 ? Math.round(km / 10) * 10 : Math.round(km);
  // Неразрывные пробелы: число и «км» не должны оказаться на разных строках.
  return `${new Intl.NumberFormat('ru-RU').format(rounded)}\u00a0км`;
};

const joinCities = (cities: string[]): string => (cities.length <= 5 ? cities.join(' → ') : `${cities.slice(0, 4).join(' → ')} и ещё ${cities.length - 4}`);

const ordered = (items: ItineraryItem[]) => [...items].sort((a, b) => (a.date === b.date ? a.order - b.order : a.date < b.date ? -1 : 1));

/**
 * Собирает страницы дневника по фактам поездки. Результат зависит только от входных данных и зерна `seed`:
 * тот же вход и то же зерно дают тот же дневник; новое зерно даёт другие формулировки.
 */
export function generateDiary(input: DiaryInput, seed: number): DiaryPage[] {
  const { trip, facts } = input;
  const picker = new Picker(rng(seed));
  const items = ordered(input.items);
  const pages: DiaryPage[] = [];

  // Обложка: свои фото поездки, иначе первое фото из маршрута.
  const firstPhoto = items.flatMap((i) => input.photosByItem.get(i.id) ?? [])[0];
  const coverSource = trip.coverPhotoId ?? firstPhoto;
  pages.push({ id: 'cover', key: 'cover', kind: 'cover', title: trip.name, subtitle: `${countryName(trip.countryCode)} · ${formatRange(trip.startDate, trip.endDate)}`, photo: coverSource ? slot(coverSource) : null });

  // Обзор
  const daysText = plural(facts.days, DAYS);
  const placesText = plural(facts.places, PLACES);
  const overview: string[] = [fill(picker.pick('overview.intro', facts.places > 0 ? P.overviewIntro : P.overviewIntroNoPlaces), { days: daysText, places: placesText })];
  if (facts.cities.length === 1) overview.push(fill(picker.pick('overview.city', P.overviewCity), { city: facts.cities[0]! }));
  else if (facts.cities.length > 1) overview.push(fill(picker.pick('overview.cities', P.overviewCities), { cities: joinCities(facts.cities) }));
  if (facts.km >= 5) overview.push(fill(picker.pick('overview.km', P.overviewKm), { km: formatKm(facts.km) }));
  pages.push({ id: 'overview', key: 'overview', kind: 'overview', text: overview.join(' ') });

  // Дни с записями
  const byDay = new Map<string, ItineraryItem[]>();
  for (const i of items) byDay.set(i.date, [...(byDay.get(i.date) ?? []), i]);
  const tripDayNumber = (date: string) => Math.round((Date.parse(`${date}T00:00:00Z`) - Date.parse(`${trip.startDate}T00:00:00Z`)) / 86_400_000) + 1;
  for (const [date, list] of [...byDay].sort(([a], [b]) => (a < b ? -1 : 1))) {
    const n = list.length;
    const first = list[0]!;
    const last = list[n - 1]!;
    const sentences: string[] = [];
    if (n === 1) sentences.push(fill(picker.pick('day.one', P.dayOne), { first: first.title }));
    else if (n === 2) sentences.push(fill(picker.pick('day.two', P.dayTwo), { first: first.title, second: list[1]!.title }));
    else sentences.push(fill(picker.pick('day.many', P.dayMany), { count: plural(n, PLACES), first: first.title, second: list[1]!.title, rest: String(n - 2) }));
    if (first.time && picker.chance(0.6)) sentences[0] = fill(picker.pick('day.start', P.dayStart), { time: first.time, first: first.title }) + (n > 1 ? ` ${fill(picker.pick('day.more', ['Дальше — ещё {more}.', 'Затем — ещё {more}.', 'После него в плане ещё {more}.']), { more: plural(n - 1, ITEMS_LEFT) })}` : '');
    if (n > 1 && last.time && last.time !== first.time && picker.chance(0.5)) sentences.push(fill(picker.pick('day.end', P.dayEnd), { last: last.title, time: last.time }));
    const cities = [...new Set(list.map((i) => i.city).filter((c): c is string => !!c))];
    if (cities.length === 1 && facts.cities.length > 1 && picker.chance(0.6)) sentences.push(fill(picker.pick('day.city', P.dayCity), { city: cities[0]! }));
    if (facts.busiestDay?.date === date && n >= 3) sentences.push(picker.pick('day.busiest', P.dayBusiest));
    const spent = input.spend?.byDay.get(date);
    if (input.spend && spent && spent > 0 && picker.chance(0.7)) sentences.push(fill(picker.pick('day.spend', P.daySpend), { amount: input.money(spent, input.spend.currency) }));
    const photos = list.flatMap((i) => input.photosByItem.get(i.id) ?? []).slice(0, 3);
    pages.push({ id: `day:${date}`, key: `day:${date}`, kind: 'day', date, heading: `День ${tripDayNumber(date)} · ${formatDayFull(date)}`, text: sentences.join(' '), photos: photos.map(slot) });
  }
  if (byDay.size === 0) {
    // Без записей: одна «пустая» страница дня не нужна, обзор и итог говорят сами за себя.
  }

  // Факты и рекорды
  const lines: string[] = [];
  const add = (id: string, variants: readonly string[], vars: Record<string, string | number>) => lines.push(fill(picker.pick(id, variants), vars));
  if (facts.busiestDay) add('fact.busiest', P.factBusiest, { date: formatDayFull(facts.busiestDay.date), count: plural(facts.busiestDay.count, ITEMS_LEFT) });
  if (facts.quietestDay) add('fact.quietest', P.factQuietest, { date: formatDayFull(facts.quietestDay.date), count: plural(facts.quietestDay.count, ITEMS_LEFT) });
  if (facts.farthest) add('fact.farthest', P.factFarthest, { title: facts.farthest.title, km: formatKm(facts.farthest.km) });
  if (facts.earliest) add('fact.earliest', P.factEarliest, { time: facts.earliest.time, title: facts.earliest.title });
  if (facts.latest) add('fact.latest', P.factLatest, { time: facts.latest.time, title: facts.latest.title });
  if (input.spend?.mostExpensiveDay) add('fact.expensive', P.factExpensiveDay, { date: formatDayFull(input.spend.mostExpensiveDay.date), amount: input.money(input.spend.mostExpensiveDay.total, input.spend.currency) });
  if (input.spend?.average !== undefined) add('fact.average', P.factAverage, { amount: input.money(input.spend.average, input.spend.currency) });
  if (input.spend?.topCategory) add('fact.category', P.factCategory, { category: input.spend.topCategory.label, amount: input.money(input.spend.topCategory.total, input.spend.currency) });
  if (facts.photos > 0) add('fact.photos', P.factPhotos, { photos: plural(facts.photos, PHOTOS), count: facts.photos });
  if (lines.length >= 2) pages.push({ id: 'stats', key: 'stats', kind: 'stats', text: picker.pick('stats.intro', P.statsIntro), lines });

  // Карта маршрута
  if (facts.km >= 1 || facts.cities.length > 0) {
    const text =
      facts.km >= 1 && facts.cities.length > 1
        ? `${fill(picker.pick('map.caption', P.mapCaption), { route: joinCities(facts.cities) })} ${fill(picker.pick('map.km', P.mapKm), { km: formatKm(facts.km) })}`
        : facts.cities.length > 0
          ? fill(picker.pick('map.caption', P.mapCaption), { route: joinCities(facts.cities) })
          : picker.pick('map.none', P.mapNoRoute);
    pages.push({ id: 'map', key: 'map', kind: 'map', text });
  }

  // Финал
  pages.push({ id: 'closing', key: 'closing', kind: 'closing', text: fill(picker.pick('closing', facts.places > 0 ? P.closing : P.closingNoPlaces), { name: trip.name, days: daysText, places: placesText }) });
  return pages;
}

/** Отпечаток данных поездки: меняется, когда в поездке что-то изменилось и дневник стоит пересобрать. */
export function fingerprint(input: DiaryInput): string {
  const f = input.facts;
  const spent = input.spend ? [...input.spend.byDay.values()].reduce((a, b) => a + b, 0) : 0;
  return JSON.stringify([input.trip.name, input.trip.startDate, input.trip.endDate, f.cities, f.items, f.places, Math.round(f.km), f.photos, Math.round(spent), input.items.map((i) => `${i.date}${i.title}`).sort().join('|').length]);
}
