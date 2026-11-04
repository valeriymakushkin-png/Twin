import { describe, expect, it } from 'vitest';
import type { Expense, ItineraryItem, Trip } from '../../core/db';
import type { CityLocator } from '../map/stats';
import { checkTrip } from './check';

const LISBON = { lat: 38.7223, lng: -9.1393, cc: 'PT' };
const PARIS = { lat: 48.8566, lng: 2.3522, cc: 'FR' };
const locate: CityLocator = (name, country) => {
  const n = name.toLowerCase();
  if (n === 'лиссабон') return LISBON;
  if (n === 'париж') return country === 'FR' ? PARIS : PARIS; // у Парижа в списке только Франция
  return undefined;
};
const trip = (cities: Trip['cities'] = [{ name: 'Лиссабон' }], over: Partial<Trip> = {}): Trip => ({ id: 't', name: 'Т', countryCode: 'PT', cities, startDate: '2026-05-01', endDate: '2026-05-05', createdAt: 1, updatedAt: 1, ...over });
let n = 0;
const item = (date: string, extra: Partial<ItineraryItem> = {}): ItineraryItem => ({ id: `i${++n}`, tripId: 't', date, order: 0, kind: 'place', title: 'Место', createdAt: 1, updatedAt: 1, ...extra });
const exp = (date: string): Expense => ({ id: `e${++n}`, tripId: 't', date, amount: 1, currency: 'EUR', category: 'food', createdAt: 1, updatedAt: 1 });

describe('проверка поездки', () => {
  it('чистая поездка — без замечаний', () => {
    expect(checkTrip(trip(), [item('2026-05-02', { city: 'Лиссабон' })], [exp('2026-05-03')], locate)).toEqual([]);
  });

  it('записи вне дат: замечание и исправление «раздвинуть даты» (в обе стороны)', () => {
    const issues = checkTrip(trip(), [item('2026-04-29'), item('2026-05-02'), item('2026-05-07'), item('2026-05-08')], [], locate);
    expect(issues).toHaveLength(1);
    expect(issues[0]!).toMatchObject({ level: 'warn', fix: { kind: 'extendDates', start: '2026-04-29', end: '2026-05-08' } });
    expect(issues[0]!.text).toContain('3 записи');
  });

  it('город без координат: замечание с «уточнить»; город только в записях тоже проверяется', () => {
    const issues = checkTrip(trip([{ name: 'Нигденск' }]), [item('2026-05-02', { city: 'Сказкино' })], [], locate);
    expect(issues.map((i) => i.fix)).toEqual([{ kind: 'pickCity', city: 'Нигденск' }, { kind: 'pickCity', city: 'Сказкино' }]);
  });

  it('город из другой страны: предупреждает, пока страна не выбрана явно', () => {
    const issues = checkTrip(trip([{ name: 'Париж' }]), [], [], locate);
    expect(issues).toHaveLength(1);
    // названия стран в именительном падеже, в кавычках (склонять их нельзя)
    expect(issues[0]!.text).toContain('«Франция»');
    expect(issues[0]!.text).toContain('«Португалия»');
    // выбрали из подсказки (страна и координаты заданы) — всё согласовано, замечаний нет
    expect(checkTrip(trip([{ name: 'Париж', lat: 48.8566, lng: 2.3522, cc: 'FR' }]), [], [], locate)).toEqual([]);
  });

  it('место далеко от своего города', () => {
    const issues = checkTrip(trip(), [item('2026-05-02', { city: 'Лиссабон', title: 'Смотровая', lat: 41.15, lng: -8.63 })], [], locate);
    expect(issues).toHaveLength(1);
    expect(issues[0]!.text).toMatch(/Смотровая.*\d+ км/);
    expect(checkTrip(trip(), [item('2026-05-02', { city: 'Лиссабон', lat: 38.73, lng: -9.14 })], [], locate)).toEqual([]);
  });

  it('траты вне дат — справка, не ошибка', () => {
    const issues = checkTrip(trip(), [], [exp('2026-04-30'), exp('2026-05-02'), exp('2026-05-09')], locate);
    expect(issues).toHaveLength(1);
    expect(issues[0]).toMatchObject({ level: 'info' });
    expect(issues[0]!.text).toContain('2 траты');
  });
});
