'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { uid } from '@/lib/utils';

export const EXPENSE_CATEGORIES = ['food', 'transport', 'stay', 'activities', 'shopping', 'misc'] as const;
export type ExpenseCategory = (typeof EXPENSE_CATEGORIES)[number];

export interface Expense {
  id: string;
  /** Trip it belongs to, if any */
  tripId?: string;
  amount: number;
  /** ISO 4217 code the money was spent in */
  currency: string;
  category: ExpenseCategory;
  /** YYYY-MM-DD */
  date: string;
  note?: string;
}

interface ExpenseState {
  /** Currency totals are shown in; null until chosen (then guessed from the passport) */
  home: string | null;
  lastCurrency: string | null;
  items: Expense[];
  setHome: (code: string) => void;
  add: (e: Omit<Expense, 'id'>) => void;
  remove: (id: string) => void;
}

export const useExpenses = create<ExpenseState>()(
  persist(
    (set) => ({
      home: null,
      lastCurrency: null,
      items: [],
      setHome: (home) => set({ home }),
      add: (e) => set((s) => ({ items: [{ ...e, id: uid() }, ...s.items], lastCurrency: e.currency })),
      remove: (id) => set((s) => ({ items: s.items.filter((x) => x.id !== id) })),
    }),
    { name: 'vylo-expenses-v1', storage: createJSONStorage(() => localStorage), version: 1 },
  ),
);

/** Currency a traveller with this passport most likely thinks in. */
const HOME_BY_PASSPORT: Record<string, string> = {
  RU: 'RUB', US: 'USD', GB: 'GBP', CH: 'CHF', CA: 'CAD', AU: 'AUD', NZ: 'NZD', JP: 'JPY', CN: 'CNY', IN: 'INR', KR: 'KRW', BR: 'BRL', MX: 'MXN', TR: 'TRY', PL: 'PLN', CZ: 'CZK',
  HU: 'HUF', RO: 'RON', SE: 'SEK', NO: 'NOK', DK: 'DKK', UA: 'UAH', KZ: 'KZT', GE: 'GEL', IL: 'ILS', AE: 'AED', SA: 'SAR', ZA: 'ZAR', TH: 'THB', ID: 'IDR', VN: 'VND', SG: 'SGD',
};
const EURO = new Set('AT BE CY DE EE ES FI FR GR HR IE IT LT LU LV MT NL PT SI SK'.split(' '));
export const homeCurrencyFor = (passport: string) => HOME_BY_PASSPORT[passport] ?? (EURO.has(passport) ? 'EUR' : 'USD');
