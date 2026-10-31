'use client';

import { useMemo, useSyncExternalStore } from 'react';
import { catalogVersion, subscribeCatalog } from '@/data/catalog';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { bestPassport, PASSPORTS, visaFor, type VisaResult } from '@/data/visa/rules';
import type { Holding } from '@/data/visa/types';
import type { Locale } from '@/i18n/config';
import { uid } from '@/lib/utils';
import { useApp } from './app';

/** A stay entered in the 90/180 calculator (dates as YYYY-MM-DD, both days count). */
export interface StayTrip {
  id: string;
  /** "schengen" or a destination code with a rolling-window rule */
  zone: string;
  from: string;
  to: string;
}

/** A stay the traveller is on or planning, tracked against the entry allowance. */
export interface Stay {
  id: string;
  country: string;
  /** Entry date, YYYY-MM-DD */
  entry: string;
  /** Allowance from the stamp or e-visa; falls back to the passport's rule for the country */
  days?: number;
}

/** One country of a multi-country trip. */
export interface ChainLeg {
  id: string;
  country: string;
  nights: number;
}

interface VisaPrefs {
  /** null until the traveller picks one — then we guess from the language */
  passport: string | null;
  second: string | null;
  holdings: Holding[];
  trips: StayTrip[];
  stays: Stay[];
  /** Show a system notification when the app opens and a stay is about to end */
  remind: boolean;
  chain: { start: string | null; legs: ChainLeg[]; passportExpires: string | null };
  addStay: (s: Omit<Stay, 'id'>) => void;
  updateStay: (id: string, patch: Partial<Omit<Stay, 'id'>>) => void;
  removeStay: (id: string) => void;
  setRemind: (on: boolean) => void;
  setChain: (patch: Partial<VisaPrefs['chain']>) => void;
  setPassport: (code: string) => void;
  setSecond: (code: string | null) => void;
  toggleHolding: (h: Holding) => void;
  addTrip: (t: Omit<StayTrip, 'id'>) => void;
  updateTrip: (id: string, patch: Partial<Omit<StayTrip, 'id'>>) => void;
  removeTrip: (id: string) => void;
}

export const useVisaPrefs = create<VisaPrefs>()(
  persist(
    (set) => ({
      passport: null,
      second: null,
      holdings: [],
      trips: [],
      stays: [],
      remind: false,
      chain: { start: null, legs: [], passportExpires: null },
      addStay: (st) => set((s) => ({ stays: [...s.stays, { ...st, id: uid() }] })),
      updateStay: (id, patch) => set((s) => ({ stays: s.stays.map((x) => (x.id === id ? { ...x, ...patch } : x)) })),
      removeStay: (id) => set((s) => ({ stays: s.stays.filter((x) => x.id !== id) })),
      setRemind: (remind) => set({ remind }),
      setChain: (patch) => set((s) => ({ chain: { ...s.chain, ...patch } })),
      setPassport: (code) => set((s) => ({ passport: code, second: s.second === code ? null : s.second })),
      setSecond: (code) => set({ second: code }),
      toggleHolding: (h) => set((s) => ({ holdings: s.holdings.includes(h) ? s.holdings.filter((x) => x !== h) : [...s.holdings, h] })),
      addTrip: (t) => set((s) => ({ trips: [...s.trips, { ...t, id: uid() }] })),
      updateTrip: (id, patch) => set((s) => ({ trips: s.trips.map((t) => (t.id === id ? { ...t, ...patch } : t)) })),
      removeTrip: (id) => set((s) => ({ trips: s.trips.filter((t) => t.id !== id) })),
    }),
    { name: 'vylo-visa-v1', storage: createJSONStorage(() => localStorage), version: 1 },
  ),
);

const byLocale: Record<Locale, string> = { ru: 'RU', en: 'US', es: 'ES', de: 'DE', fr: 'FR', it: 'IT' };

/** Best guess before the traveller picks: the region of their browser language, else the app language. */
export function guessPassport(locale: Locale): string {
  try {
    for (const tag of typeof navigator === 'undefined' ? [] : navigator.languages) {
      const region = new Intl.Locale(tag).region;
      if (region && PASSPORTS.includes(region)) return region;
    }
  } catch {
    /* older engines */
  }
  return byLocale[locale];
}

export function usePassport(): string {
  const chosen = useVisaPrefs((s) => s.passport);
  const locale = useApp((s) => s.locale);
  return chosen ?? guessPassport(locale);
}

/** Entry rules for the traveller's own passport(s) and held visas. */
export function useVisaLookup(): (code: string) => VisaResult | undefined {
  const passport = usePassport();
  const holdings = useVisaPrefs((s) => s.holdings);
  // Admin edits to visa rules arrive through the live catalogue.
  const version = useSyncExternalStore(subscribeCatalog, catalogVersion, catalogVersion);
  return useMemo(() => {
    void version;
    const cache = new Map<string, VisaResult | undefined>();
    return (code: string) => {
      if (!cache.has(code)) cache.set(code, visaFor(passport, code, holdings));
      return cache.get(code);
    };
  }, [passport, holdings, version]);
}

export function useVisa(code: string): VisaResult | undefined {
  return useVisaLookup()(code);
}

/** The second passport's result when it is strictly easier than the main one. */
export function useSecondPassportEdge(code: string): VisaResult | undefined {
  const passport = usePassport();
  const second = useVisaPrefs((s) => s.second);
  const holdings = useVisaPrefs((s) => s.holdings);
  return useMemo(() => {
    if (!second || second === passport) return undefined;
    const best = bestPassport([passport, second], code, holdings);
    return best?.passport === second ? best : undefined;
  }, [passport, second, holdings, code]);
}

/** Outside React (store actions): the current passport and holdings. */
export function currentVisa(code: string): VisaResult | undefined {
  const s = useVisaPrefs.getState();
  return visaFor(s.passport ?? guessPassport(useApp.getState().locale), code, s.holdings);
}
