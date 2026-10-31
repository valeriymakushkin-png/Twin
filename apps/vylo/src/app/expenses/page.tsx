'use client';

import { Download, Plus, RefreshCw, Trash2, Wallet } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { Button, Chip, Empty, ProgressBar, TopBar } from '@/components/ui';
import { destinationById, destinations } from '@/data/catalog';
import { LOCALE_META } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { convert, perUsd, refreshFxIfStale, useFx } from '@/lib/fx';
import { daysBetween, todayKey } from '@/lib/utils';
import { useApp } from '@/store/app';
import { EXPENSE_CATEGORIES, homeCurrencyFor, useExpenses, type ExpenseCategory } from '@/store/expenses';
import { usePassport } from '@/store/visa';

const COLORS: Record<ExpenseCategory, string> = { food: '#f97316', transport: '#0ea5e9', stay: '#8b5cf6', activities: '#10b981', shopping: '#ec4899', misc: '#64748b' };
const COMMON = ['USD', 'EUR', 'GBP', 'RUB'];

function Expenses() {
  const params = useSearchParams();
  const { t, tk, f, locale } = useI18n();
  const passport = usePassport();
  const trips = useApp((s) => s.trips);
  const { items, home: savedHome, lastCurrency, setHome, add, remove } = useExpenses();
  const { rates, at, source, loading, failed, refresh } = useFx();
  const [tripId, setTripId] = useState(params.get('trip') ?? '');
  const trip = trips.find((x) => x.id === tripId);
  const tripDest = trip ? destinationById(trip.destinationId) : undefined;
  const home = savedHome ?? homeCurrencyFor(passport);
  const currencies = useMemo(() => [...new Set([...COMMON, home, ...destinations.map((d) => d.currency)])].sort((a, b) => a.localeCompare(b)), [home]);

  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState(() => tripDest?.currency ?? lastCurrency ?? home);
  const [category, setCategory] = useState<ExpenseCategory>('food');
  const [date, setDate] = useState(todayKey());
  const [note, setNote] = useState('');
  useEffect(() => refreshFxIfStale(), []);
  useEffect(() => {
    if (tripDest) setCurrency(tripDest.currency);
  }, [tripDest]);

  const mine = items.filter((x) => (tripId ? x.tripId === tripId : true));
  const inHome = (e: { amount: number; currency: string }) => convert(e.amount, e.currency, home, rates);
  const unconverted = mine.filter((e) => inHome(e) === undefined);
  const total = mine.reduce((n, e) => n + (inHome(e) ?? 0), 0);
  const byCategory = EXPENSE_CATEGORIES.map((c) => ({ c, sum: mine.filter((e) => e.category === c).reduce((n, e) => n + (inHome(e) ?? 0), 0) })).filter((x) => x.sum > 0);
  const dates = [...new Set(mine.map((e) => e.date))].sort().reverse();
  const spanDays = mine.length ? Math.max(1, daysBetween(dates.at(-1)!, dates[0]!) + 1) : 0;
  const budgetUsd = trip && tripDest ? tripDest.budgetPerDay * Math.max(1, daysBetween(trip.start, trip.end) + 1) : undefined;
  const budget = budgetUsd !== undefined ? convert(budgetUsd, 'USD', home, rates) : undefined;
  const rateKnown = perUsd(home, rates) !== undefined;
  const bcp47 = LOCALE_META[locale].bcp47;

  const submit = () => {
    const n = Number(amount.replace(',', '.'));
    if (!Number.isFinite(n) || n <= 0) return;
    add({ amount: n, currency, category, date, note: note.trim() || undefined, tripId: tripId || undefined });
    setAmount('');
    setNote('');
  };

  const exportCsv = () => {
    const rows = [['date', 'category', 'amount', 'currency', `amount_${home}`, 'note'], ...mine.map((e) => [e.date, e.category, e.amount, e.currency, inHome(e)?.toFixed(2) ?? '', (e.note ?? '').replace(/"/g, '""')])];
    const blob = new Blob(['﻿' + rows.map((r) => r.map((c) => `"${c}"`).join(',')).join('\n')], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `vylo-expenses-${todayKey()}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const field = 'h-11 w-full rounded-xl bg-surface-2 px-3 text-[15px] font-semibold outline-none focus:ring-2 focus:ring-brand/40';
  return (
    <div className="pb-28">
      <TopBar title={t('expenses.title')} />
      <div className="px-5">
        {trips.length > 0 && (
          <select aria-label={t('expenses.trip')} value={tripId} onChange={(e) => setTripId(e.target.value)} className="h-11 w-full rounded-2xl bg-white px-4 text-[14px] font-semibold shadow-soft outline-none ring-1 ring-line-soft focus:ring-2 focus:ring-brand">
            <option value="">{t('expenses.allTrips')}</option>
            {trips.map((x) => (
              <option key={x.id} value={x.id}>
                {x.name}
              </option>
            ))}
          </select>
        )}

        <div className="mt-3 rounded-[26px] bg-gradient-to-br from-[#4f46e5] to-[#0ea5e9] p-5 text-white shadow-float">
          <p className="text-[13px] text-white/80">{t('expenses.total')}</p>
          <p className="mt-1 text-[34px] font-bold leading-none tracking-[-0.03em]">{f.money(Math.round(total), home)}</p>
          <p className="mt-2 text-[12.5px] text-white/80">
            {spanDays > 0 ? t('expenses.perDay', { amount: f.money(Math.round(total / spanDays), home) }) : t('expenses.noneYet')}
            {budget !== undefined && ` · ${t('expenses.budget', { amount: f.money(Math.round(budget), home) })}`}
          </p>
          {budget !== undefined && budget > 0 && <ProgressBar value={Math.min(100, (total / budget) * 100)} color={total > budget ? 'bg-rose' : 'bg-white'} className="mt-3 bg-white/25" />}
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 text-[12px] text-muted">
          <span>
            {at ? t('expenses.ratesAt', { date: new Date(at).toLocaleDateString(bcp47, { day: 'numeric', month: 'long' }), source: source ?? '' }) : failed ? t('expenses.ratesFailed') : t('expenses.ratesNone')}
          </span>
          <button onClick={() => void refresh()} disabled={loading} className="press inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-semibold text-ink-2 shadow-soft ring-1 ring-line-soft disabled:opacity-50">
            <RefreshCw className={loading ? 'size-3.5 animate-spin' : 'size-3.5'} /> {t('expenses.refresh')}
          </button>
        </div>
        {(unconverted.length > 0 || !rateKnown) && (
          <p className="mt-2 rounded-2xl bg-amber-50 p-3 text-[12.5px] leading-snug text-ink-2">{t('expenses.noRate', { currency: unconverted[0]?.currency ?? home })}</p>
        )}

        <div className="mt-4 flex items-center gap-2">
          <label htmlFor="exp-home" className="text-[12.5px] font-semibold text-muted">
            {t('expenses.home')}
          </label>
          <select id="exp-home" value={home} onChange={(e) => setHome(e.target.value)} className="h-9 rounded-xl bg-white px-2.5 text-[13px] font-semibold shadow-soft outline-none ring-1 ring-line-soft">
            {currencies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 rounded-[22px] bg-white p-4 shadow-soft ring-1 ring-line-soft">
          <div className="grid grid-cols-[1fr_110px] gap-2.5">
            <input inputMode="decimal" placeholder={t('expenses.amount')} aria-label={t('expenses.amount')} value={amount} onChange={(e) => setAmount(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && submit()} className={field} />
            <select aria-label={t('expenses.currency')} value={currency} onChange={(e) => setCurrency(e.target.value)} className={field}>
              {[...new Set([currency, ...currencies])].map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="no-scrollbar -mx-4 mt-3 flex gap-2 overflow-x-auto px-4">
            {EXPENSE_CATEGORIES.map((c) => (
              <Chip key={c} active={category === c} onClick={() => setCategory(c)}>
                {tk(`expenses.cat.${c}`)}
              </Chip>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            <input type="date" aria-label={t('expenses.date')} value={date} onChange={(e) => e.target.value && setDate(e.target.value)} className={field} />
            <input placeholder={t('expenses.note')} aria-label={t('expenses.note')} value={note} onChange={(e) => setNote(e.target.value)} className={field} />
          </div>
          <Button className="mt-3 w-full" onClick={submit} disabled={!amount}>
            <Plus className="size-4" /> {t('expenses.add')}
          </Button>
        </div>

        {byCategory.length > 0 && (
          <div className="mt-4 rounded-[22px] bg-white p-4 shadow-soft ring-1 ring-line-soft">
            <div className="flex h-3 overflow-hidden rounded-full bg-surface-2">
              {byCategory.map(({ c, sum }) => (
                <span key={c} style={{ width: `${(sum / total) * 100}%`, background: COLORS[c] }} />
              ))}
            </div>
            <ul className="mt-3 grid gap-1.5">
              {byCategory.map(({ c, sum }) => (
                <li key={c} className="flex items-center justify-between text-[13.5px]">
                  <span className="inline-flex items-center gap-2">
                    <span className="size-2.5 rounded-full" style={{ background: COLORS[c] }} />
                    {tk(`expenses.cat.${c}`)}
                  </span>
                  <b>{f.money(Math.round(sum), home)}</b>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 grid gap-3">
          {dates.map((d) => (
            <div key={d}>
              <p className="mb-1.5 pl-1 text-[12px] font-semibold text-muted">{new Date(`${d}T00:00:00`).toLocaleDateString(bcp47, { weekday: 'short', day: 'numeric', month: 'long' })}</p>
              <div className="overflow-hidden rounded-[20px] bg-white shadow-soft ring-1 ring-line-soft">
                {mine
                  .filter((e) => e.date === d)
                  .map((e) => {
                    const h = inHome(e);
                    return (
                      <div key={e.id} className="flex items-center gap-3 border-b border-line-soft px-4 py-3 last:border-b-0">
                        <span className="size-2.5 shrink-0 rounded-full" style={{ background: COLORS[e.category] }} />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[14px] font-semibold">{e.note || tk(`expenses.cat.${e.category}`)}</p>
                          <p className="truncate text-[12px] text-muted">{e.note ? tk(`expenses.cat.${e.category}`) : ''}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[14px] font-bold">{f.money(e.amount, e.currency)}</p>
                          {e.currency !== home && <p className="text-[11.5px] text-muted">{h === undefined ? '—' : `≈ ${f.money(Math.round(h), home)}`}</p>}
                        </div>
                        <button aria-label={t('stay.remove')} onClick={() => remove(e.id)} className="press grid size-8 place-items-center rounded-full text-muted">
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
          {mine.length === 0 && <Empty icon={<Wallet className="size-6" />} title={t('expenses.emptyTitle')} text={t('expenses.emptyText')} />}
        </div>

        {mine.length > 0 && (
          <Button variant="secondary" className="mt-4 w-full" onClick={exportCsv}>
            <Download className="size-4" /> {t('expenses.export')}
          </Button>
        )}
        <p className="mt-5 text-[11.5px] leading-snug text-faint">{t('expenses.disclaimer')}</p>
      </div>
    </div>
  );
}

export default function ExpensesPage() {
  return (
    <Suspense>
      <Expenses />
    </Suspense>
  );
}
