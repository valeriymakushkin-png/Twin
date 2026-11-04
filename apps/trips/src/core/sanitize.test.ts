import { describe, expect, it } from 'vitest';
import { normalizeCategory, sanitizeExpense, sanitizeItem, sanitizeTrip } from './sanitize';

const ids = new Set(['t1']);

describe('починка записей из копии', () => {
  it('неизвестная категория расхода — «Прочее»', () => {
    expect(normalizeCategory('fun')).toBe('other');
    expect(normalizeCategory(undefined)).toBe('other');
    expect(normalizeCategory('food')).toBe('food');
  });
  it('поездка: без городов и с перепутанными датами остаётся рабочей, с «битой» датой отбрасывается', () => {
    const t = sanitizeTrip({ id: 't1', name: '  ', countryCode: 'pt', startDate: '2026-05-05', endDate: '2026-05-01', createdAt: 1, updatedAt: 1 })!;
    expect(t).toMatchObject({ name: 'Без названия', countryCode: 'PT', cities: [], startDate: '2026-05-01', endDate: '2026-05-05' });
    expect(sanitizeTrip({ id: 't', startDate: '2026-13-40', endDate: '2026-05-01' })).toBeNull();
    expect(sanitizeTrip({ id: 't', startDate: 'вчера', endDate: '2026-05-01' })).toBeNull();
  });
  it('города поездки: мусор и дубликаты убираются, координаты проверяются', () => {
    const t = sanitizeTrip({ id: 't1', name: 'T', countryCode: 'PT', startDate: '2026-05-01', endDate: '2026-05-02', cities: ['x', null, { name: '' }, { name: 'Лиссабон', lat: 38.7, lng: -9.1, cc: 'pt' }, { name: 'лиссабон' }, { name: 'Порту', lat: 999, lng: 1 }] })!;
    expect(t.cities).toEqual([{ name: 'Лиссабон', lat: 38.7, lng: -9.1, cc: 'PT' }, { name: 'Порту' }]);
  });
  it('запись маршрута: чужая поездка и неверная дата — отбрасывается; время, вид и порядок исправляются', () => {
    expect(sanitizeItem({ id: 'i', tripId: 'zzz', date: '2026-05-01' }, ids)).toBeNull();
    expect(sanitizeItem({ id: 'i', tripId: 't1', date: 'x' }, ids)).toBeNull();
    const i = sanitizeItem({ id: 'i', tripId: 't1', date: '2026-05-01', title: 'Белен', kind: 'странный', order: 'x', time: '25:99', lat: 100, lng: 5 }, ids)!;
    expect(i).toMatchObject({ title: 'Белен', kind: 'place', order: 0 });
    expect(i.time).toBeUndefined();
    expect(i.lat).toBeUndefined();
  });
  it('расход: валюта и сумма обязательны; категория чинится', () => {
    expect(sanitizeExpense({ id: 'e', tripId: 't1', date: '2026-05-01', amount: NaN, currency: 'EUR' }, ids)).toBeNull();
    expect(sanitizeExpense({ id: 'e', tripId: 't1', date: '2026-05-01', amount: 5, currency: 'евро' }, ids)).toBeNull();
    expect(sanitizeExpense({ id: 'e', tripId: 't1', date: '2026-05-01', amount: 5, currency: 'eur', category: 'fun' }, ids)).toMatchObject({ currency: 'EUR', category: 'other', amount: 5 });
  });
});
