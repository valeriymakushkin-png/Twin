'use client';

import { ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Chip, TopBar } from '@/components/ui';
import type { VisaRegime } from '@/data/types';
import { isEasyRegime, regimeTone, visaCountries } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { flag } from '@/lib/countries';
import { cn } from '@/lib/utils';
import { useApp } from '@/store/app';

const tones = { mint: 'bg-mint-50 text-mint', sky: 'bg-sky-50 text-sky', amber: 'bg-amber-50 text-amber', rose: 'bg-rose-50 text-rose' };
type Filter = 'all' | 'easy' | 'free' | 'voa' | 'evisa' | 'required';

const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

export default function VisaIndexPage() {
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const visaChecked = useApp((s) => s.visaChecked);
  const { t, tk, f, locale, country } = useI18n();

  const matches = (r: VisaRegime) => {
    if (filter === 'all') return r !== 'domestic';
    if (filter === 'easy') return isEasyRegime(r) && r !== 'domestic';
    if (filter === 'evisa') return r === 'evisa' || r === 'eta';
    if (filter === 'required') return r === 'required' || r === 'schengen';
    return r === filter;
  };

  const list = useMemo(() => {
    const s = fold(q.trim());
    return visaCountries
      .filter((v) => matches(v.regime))
      .filter((v) => !s || fold(country(v.code)).includes(s) || v.code.toLowerCase() === s)
      .sort((a, b) => country(a.code).localeCompare(country(b.code), locale));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, filter, locale]);

  const easy = visaCountries.filter((v) => isEasyRegime(v.regime) && v.regime !== 'domestic').length;
  const filters: [Filter, string][] = [
    ['all', t('visa.filterAll')],
    ['easy', t('visa.filterEasy')],
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
          <p className="text-[13px] font-semibold text-white/80">{t('visa.passportOf')}</p>
          <p className="text-[24px] font-bold tracking-[-0.03em]">{t('visa.russia')}</p>
          <p className="mt-3 text-[14px] text-white/90">
            <span className="text-[28px] font-black">{f.number(easy)}</span> {t('visa.easyCount')}
          </p>
          <p className="mt-1 text-[12px] text-white/70">{t('visa.checked', { count: visaChecked.length })}</p>
        </div>

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
              <p className="truncate text-[15px] font-semibold">{country(v.code)}</p>
              <p className="truncate text-[12px] text-muted">
                {v.days ? `${t('visa.stay', { count: v.days })} · ` : ''}
                {f.price(v.cost)}
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
