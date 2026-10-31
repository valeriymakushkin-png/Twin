'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { overrides } from '@/data/catalog';

/**
 * Exchange rates, per 1 USD. Fetched in the traveller's browser from open.er-api.com (about 160 currencies,
 * daily) with frankfurter.dev (ECB reference rates) as the fallback, and cached with the date they are from.
 * Nothing is bundled: a stale number presented as current is worse than none. The team can pin a rate for a
 * currency in the admin panel (catalogue settings); a pinned rate always wins.
 */
const SOURCES = [
  {
    name: 'open.er-api.com',
    url: 'https://open.er-api.com/v6/latest/USD',
    parse: (j: { result?: string; rates?: Record<string, number>; time_last_update_unix?: number }) => (j.result === 'success' && j.rates ? { rates: j.rates, at: (j.time_last_update_unix ?? 0) * 1000 } : null),
  },
  {
    name: 'frankfurter.dev',
    url: 'https://api.frankfurter.dev/v1/latest?base=USD',
    parse: (j: { rates?: Record<string, number>; date?: string }) => (j.rates && j.date ? { rates: { USD: 1, ...j.rates }, at: Date.parse(`${j.date}T00:00:00Z`) } : null),
  },
] as const;

interface FxState {
  rates: Record<string, number>;
  /** When the source published these rates (ms) */
  at: number | null;
  source: string | null;
  loading: boolean;
  failed: boolean;
  refresh: () => Promise<void>;
}

const STALE_MS = 12 * 3_600_000;

export const useFx = create<FxState>()(
  persist(
    (set, get) => ({
      rates: {},
      at: null,
      source: null,
      loading: false,
      failed: false,
      refresh: async () => {
        if (get().loading) return;
        set({ loading: true, failed: false });
        for (const s of SOURCES) {
          try {
            const res = await fetch(s.url, { cache: 'no-store' });
            if (!res.ok) continue;
            const parsed = (s.parse as (j: unknown) => { rates: Record<string, number>; at: number } | null)(await res.json());
            if (parsed && Object.keys(parsed.rates).length > 10) {
              set({ rates: parsed.rates, at: parsed.at, source: s.name, loading: false, failed: false });
              return;
            }
          } catch {
            /* offline or blocked: try the next source */
          }
        }
        set({ loading: false, failed: true });
      },
    }),
    { name: 'vylo-fx-v1', storage: createJSONStorage(() => localStorage), partialize: (s) => ({ rates: s.rates, at: s.at, source: s.source }) },
  ),
);

/** Refresh when the cached rates are missing or older than half a day. */
export const refreshFxIfStale = () => {
  const { at, refresh } = useFx.getState();
  if (!at || Date.now() - at > STALE_MS) void refresh();
};

export const pinnedRates = () => overrides().settings.rates?.perUSD ?? {};

/** Units of `code` per 1 USD: the team's pinned rate, else the fetched one. */
export function perUsd(code: string, rates: Record<string, number>): number | undefined {
  if (code === 'USD') return 1;
  return pinnedRates()[code] ?? rates[code];
}

/** `amount` of `from` expressed in `to`, or undefined when either rate is unknown. */
export function convert(amount: number, from: string, to: string, rates: Record<string, number>): number | undefined {
  if (from === to) return amount;
  const a = perUsd(from, rates);
  const b = perUsd(to, rates);
  return a && b ? (amount / a) * b : undefined;
}
