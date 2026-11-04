import { db, type Expense, type ExpenseCategory } from '../../core/db';
import { newId } from '../../core/id';

export interface ExpenseInput {
  date: string;
  amount: number;
  currency: string;
  category: ExpenseCategory;
  note?: string;
}

export async function addExpense(tripId: string, input: ExpenseInput): Promise<string> {
  const id = newId();
  const now = Date.now();
  await db.expenses.add({ id, tripId, ...input, note: input.note?.trim() || undefined, createdAt: now, updatedAt: now });
  await db.settings.put({ key: lastCurrencyKey(tripId), value: input.currency }); // следующая трата по умолчанию в той же валюте
  return id;
}

export async function updateExpense(id: string, input: ExpenseInput): Promise<void> {
  await db.expenses.update(id, { ...input, note: input.note?.trim() || undefined, updatedAt: Date.now() });
}

export const deleteExpense = (id: string) => db.expenses.delete(id);

export const lastCurrencyKey = (tripId: string) => `lastCurrency:${tripId}`;

/**
 * Свой курс пары: сколько `to` за 1 `from`. `null` — вернуть автоматический. Обратная запись пары убирается,
 * чтобы не получилось два противоречащих друг другу курса.
 */
export async function setManualRate(from: string, to: string, rate: number | null): Promise<void> {
  await db.transaction('rw', db.settings, async () => {
    const current = ((await db.settings.get('manualRates'))?.value ?? {}) as Record<string, number>;
    const next = { ...current };
    delete next[`${to}>${from}`];
    if (rate === null) delete next[`${from}>${to}`];
    else next[`${from}>${to}`] = rate;
    await db.settings.put({ key: 'manualRates', value: next });
  });
}

export const setAutoRates = (on: boolean) => db.settings.put({ key: 'ratesAuto', value: on });
export const setHomeCurrency = (code: string) => db.settings.put({ key: 'homeCurrency', value: code });

export async function updateTripMoney(tripId: string, patch: { currency: string; budget?: number }): Promise<void> {
  await db.trips.update(tripId, { currency: patch.currency, budget: patch.budget, updatedAt: Date.now() });
}

export type { Expense };
