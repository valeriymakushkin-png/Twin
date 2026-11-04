import { daysBetween } from '../../core/dates';
import type { Expense, ExpenseCategory } from '../../core/db';
import { normalizeCategory } from '../../core/sanitize';

/**
 * Расчёты по расходам — чистые функции без базы и экрана (поэтому они покрыты тестами).
 * Деньги считаются обычными числами; до копеек они округляются только при показе.
 */
export const CATEGORIES: ExpenseCategory[] = ['food', 'transport', 'stay', 'activities', 'shopping', 'other'];

/** Курсы. `auto` — «единиц валюты за 1 USD» (загружаются из сети). `manual` — свои курсы пар: ключ "THB>EUR" = сколько EUR за 1 THB. */
export interface Rates {
  auto: Record<string, number>;
  manual: Record<string, number>;
}

export type RateSource = 'same' | 'manual' | 'auto';
export interface RateInfo {
  rate: number;
  source: RateSource;
}

const ok = (n: unknown): n is number => typeof n === 'number' && Number.isFinite(n) && n > 0;

/**
 * Курс из `from` в `to`. Приоритет: своя запись пользователя (прямая или обратная), затем автоматический курс
 * через доллар. Нет ни того ни другого — `undefined` (экран попросит ввести курс).
 */
export function rateBetween(from: string, to: string, rates: Rates): RateInfo | undefined {
  if (from === to) return { rate: 1, source: 'same' };
  const direct = rates.manual[`${from}>${to}`];
  if (ok(direct)) return { rate: direct, source: 'manual' };
  const inverse = rates.manual[`${to}>${from}`];
  if (ok(inverse)) return { rate: 1 / inverse, source: 'manual' };
  const a = from === 'USD' ? 1 : rates.auto[from];
  const b = to === 'USD' ? 1 : rates.auto[to];
  if (ok(a) && ok(b)) return { rate: b / a, source: 'auto' };
  return undefined;
}

export function convert(amount: number, from: string, to: string, rates: Rates): number | undefined {
  const r = rateBetween(from, to, rates);
  return r ? amount * r.rate : undefined;
}

export interface Converted {
  expense: Expense;
  /** Сумма в валюте отчётов; `undefined`, если курса нет */
  value?: number;
  rate?: RateInfo;
}

export type BudgetState = 'ok' | 'warn' | 'over';

export interface Summary {
  currency: string;
  /** Всего в валюте отчётов (только траты, для которых есть курс) */
  total: number;
  count: number;
  /** Траты без курса: в итоги не вошли, экран предлагает задать курс */
  missing: Expense[];
  byCategory: { category: ExpenseCategory; total: number; share: number }[];
  byDay: { date: string; total: number; items: Converted[] }[];
  /** Средний расход в день по тратам внутри дат поездки; `undefined`, если таких трат нет */
  averagePerDay?: number;
  /** На сколько дней делили среднее */
  averageDays: number;
  today: number;
  budget?: { amount: number; spent: number; left: number; ratio: number; state: BudgetState };
}

export interface TripBasis {
  startDate: string;
  endDate: string;
  currency: string;
  budget?: number;
}

/**
 * Итоги по поездке: общая сумма, по категориям, по дням, средний расход в день и остаток бюджета.
 *
 * Средний расход в день = траты внутри дат поездки ÷ число прошедших дней поездки (не больше длины поездки).
 * Если поездка ещё не началась, делим на число разных дней, в которые были траты. Траты вне дат поездки
 * (например, бронь за месяц до вылета) идут в общий итог и бюджет, но среднее не искажают.
 */
export function summarize(expenses: Expense[], trip: TripBasis, rates: Rates, today: string): Summary {
  const converted: Converted[] = expenses.map((expense) => {
    const rate = rateBetween(expense.currency, trip.currency, rates);
    return { expense, rate, value: rate ? expense.amount * rate.rate : undefined };
  });
  const priced = converted.filter((c): c is Converted & { value: number } => c.value !== undefined);
  const total = priced.reduce((s, c) => s + c.value, 0);

  const byCategory = CATEGORIES.map((category) => ({ category, total: priced.filter((c) => normalizeCategory(c.expense.category) === category).reduce((s, c) => s + c.value, 0) }))
    .filter((c) => c.total > 0)
    .map((c) => ({ ...c, share: total > 0 ? c.total / total : 0 }))
    .sort((a, b) => b.total - a.total);

  const days = new Map<string, Converted[]>();
  for (const c of converted) days.set(c.expense.date, [...(days.get(c.expense.date) ?? []), c]);
  const byDay = [...days]
    .map(([date, items]) => ({
      date,
      items: items.sort((a, b) => b.expense.createdAt - a.expense.createdAt),
      total: items.reduce((s, c) => s + (c.value ?? 0), 0),
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  const inTrip = priced.filter((c) => c.expense.date >= trip.startDate && c.expense.date <= trip.endDate);
  const tripLength = daysBetween(trip.startDate, trip.endDate) + 1;
  const averageDays =
    today < trip.startDate ? Math.max(1, new Set(inTrip.map((c) => c.expense.date)).size) : Math.max(1, Math.min(tripLength, daysBetween(trip.startDate, today) + 1));
  const averagePerDay = inTrip.length ? inTrip.reduce((s, c) => s + c.value, 0) / averageDays : undefined;

  const budget =
    trip.budget && trip.budget > 0
      ? (() => {
          const ratio = total / trip.budget;
          return { amount: trip.budget, spent: total, left: trip.budget - total, ratio, state: (ratio > 1 ? 'over' : ratio >= 0.8 ? 'warn' : 'ok') as BudgetState };
        })()
      : undefined;

  return {
    currency: trip.currency,
    total,
    count: expenses.length,
    missing: converted.filter((c) => c.value === undefined).map((c) => c.expense),
    byCategory,
    byDay,
    averagePerDay,
    averageDays,
    today: priced.filter((c) => c.expense.date === today).reduce((s, c) => s + c.value, 0),
    budget,
  };
}

/**
 * Разбор суммы из поля ввода: «1250», «1 250,50», «1,250.50», «1.250.000», «12.5».
 * - пробелы и апострофы игнорируются;
 * - один разделитель (точка или запятая) — десятичный: «1,250» это 1,25;
 * - если есть и точка, и запятая, десятичным считается тот, что правее, а другой — разделитель тысяч;
 * - повторяющийся разделитель — это тысячи («1.250.000» → 1 250 000).
 * Ноль, отрицательные, буквы и пустая строка → null.
 */
export function parseAmount(input: string): number | null {
  const s = input.replace(/[\s  ']/g, '');
  if (!/^[\d.,]+$/.test(s) || !/\d/.test(s)) return null;
  const dots = s.split('.').length - 1;
  const commas = s.split(',').length - 1;
  let normalized: string;
  if (dots && commas) {
    const dec = s.lastIndexOf('.') > s.lastIndexOf(',') ? '.' : ',';
    const thousands = dec === '.' ? ',' : '.';
    const at = s.lastIndexOf(dec);
    const intPart = s.slice(0, at);
    if (intPart.includes(dec)) return null;
    normalized = intPart.split(thousands).join('') + '.' + s.slice(at + 1);
  } else if (!dots && !commas) {
    normalized = s;
  } else {
    const sep = dots ? '.' : ',';
    if (dots + commas === 1) normalized = s.replace(sep, '.');
    else {
      const parts = s.split(sep);
      if (parts[0]!.length === 0 || parts[0]!.length > 3 || !parts.slice(1).every((p) => p.length === 3)) return null;
      normalized = parts.join('');
    }
  }
  const n = Number(normalized);
  return Number.isFinite(n) && n > 0 && n < 1e12 ? Math.round(n * 1e6) / 1e6 : null;
}

/**
 * Курс для показа человеку в удобную сторону: если за 1 единицу `from` меньше единицы `to` — показываем «1 to = N from».
 * Так для донгов видно «1 € = 28 500 ₫», а не «1 ₫ = 0,000035 €».
 */
export function displayRate(rate: number): { inverted: boolean; value: number } {
  return rate < 1 ? { inverted: true, value: 1 / rate } : { inverted: false, value: rate };
}
