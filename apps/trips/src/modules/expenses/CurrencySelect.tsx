import { useMemo } from 'react';
import { ALL_CURRENCIES, currencyName } from '../../data/currencies';

/** Список валют: сначала «закреплённые» (последние и нужные для поездки), затем все по алфавиту. */
export function CurrencySelect({ value, onChange, pinned = [], label }: { value: string; onChange: (code: string) => void; pinned?: string[]; label: string }) {
  const top = useMemo(() => [...new Set([value, ...pinned])].filter(Boolean), [value, pinned]);
  const rest = useMemo(() => ALL_CURRENCIES.filter((c) => !top.includes(c)).sort((a, b) => currencyName(a).localeCompare(currencyName(b), 'ru')), [top]);
  const opt = (c: string) => (
    <option key={c} value={c}>
      {c} · {currencyName(c)}
    </option>
  );
  return (
    <select className="input" aria-label={label} value={value} onChange={(e) => onChange(e.target.value)}>
      <optgroup label="Рядом">{top.map(opt)}</optgroup>
      <optgroup label="Все валюты">{rest.map(opt)}</optgroup>
    </select>
  );
}
