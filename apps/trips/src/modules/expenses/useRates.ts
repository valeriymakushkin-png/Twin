import { useLiveQuery } from 'dexie-react-hooks';
import { useMemo } from 'react';
import { db, type Trip } from '../../core/db';
import { guessHomeCurrency } from '../../data/currencies';
import type { Rates } from './calc';
import type { RatesCache } from './rates';

/** Курсы для экрана: автоматические из кэша и свои, введённые вручную. Обновляются сами, когда курсы подгрузились. */
export function useRatesData() {
  // null — курсов в базе нет; undefined — база ещё читается (экран в этот миг не должен показывать «нет курса»).
  const cache = useLiveQuery(async () => ((await db.settings.get('rates'))?.value as RatesCache | undefined) ?? null, []);
  const manual = useLiveQuery(async () => ((await db.settings.get('manualRates'))?.value ?? {}) as Record<string, number>, []);
  const autoSetting = useLiveQuery(async () => (await db.settings.get('ratesAuto'))?.value as boolean | undefined, []);
  const rates = useMemo<Rates>(() => ({ auto: cache?.rates ?? {}, manual: manual ?? {} }), [cache, manual]);
  return { rates, cache, autoEnabled: autoSetting !== false, ready: cache !== undefined && manual !== undefined };
}

/** Валюта «дома»: последняя выбранная пользователем или угаданная по языку телефона. */
export function useHomeCurrency(): string {
  const saved = useLiveQuery(async () => (await db.settings.get('homeCurrency'))?.value as string | undefined, []);
  return saved ?? guessHomeCurrency();
}

export const tripCurrency = (trip: Trip, home: string) => trip.currency ?? home;
