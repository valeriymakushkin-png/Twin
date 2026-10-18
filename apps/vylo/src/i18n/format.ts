import type { Price } from '@/data/types';
import { LOCALE_META, type Locale } from './config';
import { translate } from './index';

const tag = (l: Locale) => LOCALE_META[l].bcp47;

/** Locale-aware formatters built on Intl — no hand-rolled date or number strings anywhere in the UI. */
export function formatters(locale: Locale) {
  const l = tag(locale);
  const cap = (s: string) => s.charAt(0).toLocaleUpperCase(l) + s.slice(1);

  const money = (amount: number, currency: string) =>
    new Intl.NumberFormat(l, { style: 'currency', currency, maximumFractionDigits: amount % 1 ? 2 : 0 }).format(amount);

  return {
    number: (n: number) => new Intl.NumberFormat(l).format(n),
    compact: (n: number) => new Intl.NumberFormat(l, { notation: 'compact', maximumFractionDigits: 1 }).format(n),
    /** Takes a fraction: 0.036 → "3.6%" ("3,6 %" in ru/fr/de) */
    percent: (n: number, digits = 1) => new Intl.NumberFormat(l, { style: 'percent', maximumFractionDigits: digits, minimumFractionDigits: digits }).format(n),
    money,
    price: (p: Price): string => {
      switch (p.kind) {
        case 'free':
          return translate(locale, 'common.free');
        case 'fixed':
          return money(p.amount, p.currency);
        case 'from': {
          const base = translate(locale, 'common.from', { price: money(p.amount, p.currency) });
          return p.per === 'night' ? translate(locale, 'common.perNight', { price: base }) : base;
        }
        case 'level':
          return '$'.repeat(p.level);
      }
    },
    hours: (h: string) => (h === 'always' ? translate(locale, 'common.always') : h),
    time: (d: Date) => d.toLocaleTimeString(l, { hour: '2-digit', minute: '2-digit' }),
    /** "Today, 18:00" / "Tomorrow, 10:30" / "Sat 12 Oct, 07:00" */
    when: (d: Date, now = new Date()) => {
      const startOf = (x: Date) => new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime();
      const days = Math.round((startOf(d) - startOf(now)) / 86_400_000);
      const time = d.toLocaleTimeString(l, { hour: '2-digit', minute: '2-digit' });
      if (days === 0 || days === 1) return `${cap(new Intl.RelativeTimeFormat(l, { numeric: 'auto' }).format(days, 'day'))}, ${time}`;
      return `${cap(d.toLocaleDateString(l, { weekday: 'short', day: 'numeric', month: 'short' }))}, ${time}`;
    },
    date: (iso: string) => new Date(`${iso}T00:00:00`).toLocaleDateString(l, { day: 'numeric', month: 'short' }),
    agoDays: (days: number) =>
      days >= 7 ? new Intl.RelativeTimeFormat(l, { numeric: 'auto' }).format(-Math.round(days / 7), 'week') : new Intl.RelativeTimeFormat(l, { numeric: 'auto' }).format(-days, 'day'),
    agoMs: (ms: number) => {
      const rtf = new Intl.RelativeTimeFormat(l, { numeric: 'auto', style: 'short' });
      const m = Math.max(1, Math.round(ms / 60_000));
      if (m < 60) return rtf.format(-m, 'minute');
      const h = Math.round(m / 60);
      return h < 24 ? rtf.format(-h, 'hour') : rtf.format(-Math.round(h / 24), 'day');
    },
    month: (m: number) => new Date(2024, m - 1, 1).toLocaleDateString(l, { month: 'long' }),
    /** [4,5,6,9,10] → "April – June, September – October" */
    months: (list: number[]) => {
      const sorted = [...list];
      const ranges: [number, number][] = [];
      for (const m of sorted) {
        const last = ranges.at(-1);
        if (last && (last[1] % 12) + 1 === m) last[1] = m;
        else ranges.push([m, m]);
      }
      const name = (m: number) => new Date(2024, m - 1, 1).toLocaleDateString(l, { month: 'long' });
      return cap(ranges.map(([a, b]) => (a === b ? name(a) : `${name(a)} – ${name(b)}`)).join(', '));
    },
    language: (code: string) => cap(new Intl.DisplayNames(l, { type: 'language' }).of(code) ?? code),
    currencyName: (code: string) => {
      const name = new Intl.DisplayNames(l, { type: 'currency' }).of(code) ?? code;
      return `${cap(name)} (${code})`;
    },
    weekdayShort: (d: Date) => d.toLocaleDateString(l, { weekday: 'short' }),
  };
}

export type Formatters = ReturnType<typeof formatters>;
