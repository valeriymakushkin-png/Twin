'use client';

import { CalendarRange, ChevronRight, Hourglass, Route, Search, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Chip, TopBar } from '@/components/ui';
import { useVisaFormat } from '@/components/visa-badge';
import type { VisaRegime } from '@/data/types';
import { countries, isEasyRegime, regimeTone } from '@/data/catalog';
import type { VisaResult } from '@/data/visa/rules';
import { useI18n } from '@/i18n/use';
import { flag } from '@/lib/countries';
import { cn } from '@/lib/utils';
import { useApp } from '@/store/app';
import { useUI } from '@/store/ui';
import { usePassport, useVisaLookup, useVisaPrefs } from '@/store/visa';

const tones = { mint: 'bg-mint-50 text-mint', sky: 'bg-sky-50 text-sky', amber: 'bg-amber-50 text-amber', rose: 'bg-rose-50 text-rose' };
type Filter = 'all' | 'easy' | 'free' | 'voa' | 'evisa' | 'required' | 'hacks';

const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

export default function VisaIndexPage() {
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const visaChecked = useApp((s) => s.visaChecked);
  const openSheet = useUI((s) => s.openSheet);
  const passport = usePassport();
  const holdings = useVisaPrefs((s) => s.holdings);
  const visaOf = useVisaLookup();
  const fmt = useVisaFormat();
  const { t, tk, f, locale, country } = useI18n();

  const all = useMemo(
    () =>
      countries
        .filter((c) => c.code !== passport)
        .map((c) => visaOf(c.code))
        .filter((v): v is VisaResult => !!v),
    [visaOf, passport],
  );

  const matches = (v: VisaResult) => {
    const r: VisaRegime = v.regime;
    if (filter === 'all') return true;
    if (filter === 'hacks') return !!v.waiver || v.offers.length > 0;
    if (filter === 'easy') return isEasyRegime(r);
    if (filter === 'free') return r === 'free' || r === 'eu';
    if (filter === 'evisa') return r === 'evisa' || r === 'eta';
    if (filter === 'required') return r === 'required' || r === 'schengen' || r === 'banned';
    return r === filter;
  };

  const s = fold(q.trim());
  const list = all
    .filter(matches)
    .filter((v) => !s || fold(country(v.code)).includes(s) || v.code.toLowerCase() === s)
    .sort((a, b) => country(a.code).localeCompare(country(b.code), locale));

  const easy = all.filter((v) => isEasyRegime(v.regime)).length;
  const online = all.filter((v) => v.regime === 'evisa' || v.regime === 'eta').length;
  const filters: [Filter, string][] = [
    ['all', t('visa.filterAll')],
    ['easy', t('visa.filterEasy')],
    ['hacks', t('visa.filterHacks')],
    ['free', t('visa.filterFree')],
    ['voa', t('visa.filterVoa')],
    ['evisa', t('visa.filterEvisa')],
    ['required', t('visa.filterRequired')],
  ];

  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-16">
      <TopBar title={t('visa.title')} />
      <div className="px-5">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-brand to-violet p-5 text-white shadow-brand">
          <div className="absolute -right-6 -top-10 text-[120px] opacity-15">🛂</div>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[13px] font-semibold text-white/80">{t('visa.yourPassport')}</p>
              <p className="truncate text-[24px] font-bold tracking-[-0.03em]">
                {flag(passport)} {country(passport)}
              </p>
            </div>
            <button onClick={() => openSheet({ type: 'passport', slot: 'main' })} className="press relative shrink-0 rounded-full bg-white/20 px-3.5 py-1.5 text-[13px] font-semibold backdrop-blur">
              {t('visa.change')}
            </button>
          </div>
          <p className="mt-3 text-[14px] text-white/90">
            <span className="text-[28px] font-black">{f.number(easy)}</span> {t('visa.easyCount')}
          </p>
          <p className="text-[13px] text-white/80">{t('visa.etaCount', { count: online })}</p>
          <p className="mt-1 text-[12px] text-white/70">{t('visa.checked', { count: visaChecked.length })}</p>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2.5">
          <button onClick={() => openSheet({ type: 'holdings' })} className="press flex items-center gap-2.5 rounded-[20px] bg-white p-3 text-left shadow-soft">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber">
              <Sparkles className="size-[18px]" />
            </span>
            <span className="min-w-0">
              <span className="block text-[13px] font-semibold leading-tight">{t('visa.holdingsTitle')}</span>
              <span className="block truncate text-[12px] text-muted">{holdings.length ? t('visa.holdingsCount', { count: holdings.length }) : t('visa.holdingsNone')}</span>
            </span>
          </button>
          <Link href="/visa/stay/" className="press flex items-center gap-2.5 rounded-[20px] bg-white p-3 shadow-soft">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-rose/10 text-rose">
              <Hourglass className="size-[18px]" />
            </span>
            <span className="min-w-0">
              <span className="block text-[13px] font-semibold leading-tight">{t('stay.title')}</span>
              <span className="block truncate text-[12px] text-muted">{t('stay.cardText')}</span>
            </span>
          </Link>
          <Link href="/visa/chain/" className="press flex items-center gap-2.5 rounded-[20px] bg-white p-3 shadow-soft">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-mint/10 text-mint">
              <Route className="size-[18px]" />
            </span>
            <span className="min-w-0">
              <span className="block text-[13px] font-semibold leading-tight">{t('chain.title')}</span>
              <span className="block truncate text-[12px] text-muted">{t('chain.cardText')}</span>
            </span>
          </Link>
          <Link href="/visa/calc/" className="press flex items-center gap-2.5 rounded-[20px] bg-white p-3 shadow-soft">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky">
              <CalendarRange className="size-[18px]" />
            </span>
            <span className="min-w-0">
              <span className="block text-[13px] font-semibold leading-tight">{t('visa.calc.title')}</span>
              <span className="block truncate text-[12px] text-muted">{t('visa.calc.schengen')}</span>
            </span>
          </Link>
        </div>

        {!holdings.length && (
          <button onClick={() => openSheet({ type: 'holdings' })} className="press mt-3 flex w-full items-center gap-3 rounded-[20px] bg-amber-50 p-3.5 text-left text-[13px] font-medium leading-snug text-ink-2">
            <Sparkles className="size-5 shrink-0 text-amber" />
            <span className="flex-1">{t('visa.holdingsCta')}</span>
            <ChevronRight className="size-4 shrink-0 text-faint" />
          </button>
        )}

        <div className="mt-4 flex h-12 items-center gap-2.5 rounded-full bg-white px-4 shadow-soft ring-1 ring-line-soft">
          <Search className="size-[18px] text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('visa.findCountry')} className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-faint" />
        </div>
      </div>
      <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto px-5 pb-2">
        {filters.map(([v, l]) => (
          <Chip key={v} active={filter === v} onClick={() => setFilter(v)}>
            {l}
          </Chip>
        ))}
      </div>
      <div className="mt-2 grid gap-2 px-5">
        {list.map((v) => (
          <Link key={v.code} href={`/visa/${v.code.toLowerCase()}/`} className="press flex items-center gap-3 rounded-[20px] bg-white p-3 shadow-soft">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-surface-2 text-[28px]">{flag(v.code)}</span>
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1.5 truncate text-[15px] font-semibold">
                <span className="truncate">{country(v.code)}</span>
                {(v.waiver || v.offers.length > 0) && <Sparkles className="size-3.5 shrink-0 text-amber" aria-label={t('visa.hackBadge')} />}
              </p>
              <p className="truncate text-[12px] text-muted">
                {fmt.stay(v)} · {fmt.cost(v)}
              </p>
            </div>
            <span className={cn('shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold', tones[regimeTone[v.regime]])}>{tk(`visa.regimeShort.${v.regime}`)}</span>
            <ChevronRight className="size-4 shrink-0 text-faint" />
          </Link>
        ))}
      </div>
    </div>
  );
}
