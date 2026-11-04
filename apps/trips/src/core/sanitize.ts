import type { ExpenseCategory, Expense, ItineraryItem, Trip, TripCity } from './db';

/**
 * Проверка и «починка» записей из резервной копии. Файл копии мог быть создан другой версией приложения или изменён вручную;
 * одна «кривая» запись не должна ронять экран. Что можно исправить — исправляем, остальное отбрасываем.
 */
const CATEGORIES: readonly string[] = ['food', 'transport', 'stay', 'activities', 'shopping', 'other'];
const isObj = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v);
const str = (v: unknown, fallback = '', max = 500) => (typeof v === 'string' ? v.trim().slice(0, max) : fallback);
const num = (v: unknown): number | undefined => (typeof v === 'number' && Number.isFinite(v) ? v : undefined);
export const isIsoDate = (v: unknown): v is string => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(`${v}T00:00:00Z`));

/** Неизвестная категория (из другой версии или повреждённых данных) считается «Прочее». */
export const normalizeCategory = (v: unknown): ExpenseCategory => (typeof v === 'string' && CATEGORIES.includes(v) ? (v as ExpenseCategory) : 'other');

const coords = (lat: unknown, lng: unknown): { lat?: number; lng?: number } => {
  const a = num(lat);
  const b = num(lng);
  return a !== undefined && b !== undefined && Math.abs(a) <= 90 && Math.abs(b) <= 180 ? { lat: a, lng: b } : {};
};

export function sanitizeCity(v: unknown): TripCity | null {
  if (!isObj(v)) return null;
  const name = str(v.name, '', 80);
  if (!name) return null;
  const cc = typeof v.cc === 'string' && /^[A-Za-z]{2}$/.test(v.cc) ? v.cc.toUpperCase() : undefined;
  return { name, ...coords(v.lat, v.lng), ...(cc ? { cc } : {}) };
}

export function sanitizeTrip(v: Record<string, unknown>): Trip | null {
  if (!isIsoDate(v.startDate) || !isIsoDate(v.endDate)) return null;
  const [startDate, endDate] = v.startDate <= v.endDate ? [v.startDate, v.endDate] : [v.endDate, v.startDate];
  const seen = new Set<string>();
  const cities = (Array.isArray(v.cities) ? v.cities : []).flatMap((c) => {
    const city = sanitizeCity(c);
    if (!city || seen.has(city.name.toLowerCase())) return [];
    seen.add(city.name.toLowerCase());
    return [city];
  });
  const budget = num(v.budget);
  return {
    ...(v as unknown as Trip),
    name: str(v.name, 'Без названия', 80) || 'Без названия',
    countryCode: typeof v.countryCode === 'string' ? v.countryCode.toUpperCase().slice(0, 2) : '',
    cities,
    startDate,
    endDate,
    budget: budget !== undefined && budget > 0 ? budget : undefined,
    currency: typeof v.currency === 'string' && /^[A-Za-z]{3}$/.test(v.currency) ? v.currency.toUpperCase() : undefined,
  };
}

export function sanitizeItem(v: Record<string, unknown>, tripIds: ReadonlySet<string>): ItineraryItem | null {
  if (typeof v.tripId !== 'string' || !tripIds.has(v.tripId) || !isIsoDate(v.date)) return null;
  const time = typeof v.time === 'string' && /^([01]\d|2[0-3]):[0-5]\d$/.test(v.time) ? v.time : undefined;
  return {
    ...(v as unknown as ItineraryItem),
    title: str(v.title, '', 200),
    kind: v.kind === 'event' ? 'event' : 'place',
    order: num(v.order) ?? 0,
    time,
    ...coords(v.lat, v.lng),
    ...(Object.keys(coords(v.lat, v.lng)).length ? {} : { lat: undefined, lng: undefined }),
  };
}

export function sanitizeExpense(v: Record<string, unknown>, tripIds: ReadonlySet<string>): Expense | null {
  const amount = num(v.amount);
  const currency = typeof v.currency === 'string' ? v.currency.toUpperCase() : '';
  if (typeof v.tripId !== 'string' || !tripIds.has(v.tripId) || !isIsoDate(v.date) || amount === undefined || !/^[A-Z]{3}$/.test(currency)) return null;
  return { ...(v as unknown as Expense), amount, currency, category: normalizeCategory(v.category) };
}
