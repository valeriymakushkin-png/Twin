'use client';

import { ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Chip, TopBar } from '@/components/ui';
import type { VisaRegime } from '@/data/types';
import { regimeMeta, visaCountries } from '@/data/visa';
import { countryName, flag } from '@/lib/countries';
import { cn } from '@/lib/utils';
import { useApp } from '@/store/app';

const tones = { mint: 'bg-mint-50 text-mint', sky: 'bg-sky-50 text-sky', amber: 'bg-amber-50 text-amber', rose: 'bg-rose-50 text-rose' };

export default function VisaIndexPage() {
  const [q, setQ] = useState('');
  const [regime, setRegime] = useState<VisaRegime | 'all' | 'easy'>('all');
  const visaChecked = useApp((s) => s.visaChecked);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return visaCountries
      .filter((v) => (regime === 'all' ? true : regime === 'easy' ? v.regime === 'free' || v.regime === 'voa' : v.regime === regime))
      .filter((v) => !s || countryName(v.code).toLowerCase().includes(s))
      .sort((a, b) => countryName(a.code).localeCompare(countryName(b.code), 'ru'));
  }, [q, regime]);

  const easy = visaCountries.filter((v) => v.regime === 'free' || v.regime === 'voa').length;

  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-16">
      <TopBar title="Визы" />
      <div className="px-5">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-brand to-violet p-5 text-white shadow-brand">
          <div className="absolute -right-6 -top-10 text-[120px] opacity-15">🛂</div>
          <p className="text-[13px] font-semibold text-white/80">Паспорт гражданина</p>
          <p className="text-[24px] font-bold tracking-[-0.03em]">🇷🇺 России</p>
          <p className="mt-3 text-[14px] text-white/90">
            <span className="text-[28px] font-black">{easy}</span> стран из нашего списка — без визы или с визой по прибытии
          </p>
          <p className="mt-1 text-[12px] text-white/70">Проверено вами: {visaChecked.length}</p>
        </div>

        <div className="mt-4 flex h-12 items-center gap-2.5 rounded-full bg-white px-4 shadow-soft ring-1 ring-line-soft">
          <Search className="size-[18px] text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Найти страну" className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-faint" />
        </div>
      </div>
      <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto px-5 pb-2">
        {(
          [
            ['all', 'Все'],
            ['easy', 'Легко'],
            ['free', 'Без визы'],
            ['voa', 'По прибытии'],
            ['evisa', 'E-виза'],
            ['required', 'Нужна виза'],
          ] as const
        ).map(([v, l]) => (
          <Chip key={v} active={regime === v} onClick={() => setRegime(v)}>
            {l}
          </Chip>
        ))}
      </div>
      <div className="mt-2 grid gap-2 px-5">
        {list.map((v) => {
          const meta = regimeMeta[v.regime];
          return (
            <Link key={v.code} href={`/visa/${v.code.toLowerCase()}/`} className="press flex items-center gap-3 rounded-[20px] bg-white p-3 shadow-soft">
              <span className="grid size-12 place-items-center rounded-2xl bg-surface-2 text-[28px]">{flag(v.code)}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[15px] font-semibold">{countryName(v.code)}</p>
                <p className="text-[12px] text-muted">{v.days ? `до ${v.days} дней · ` : ''}{v.cost}</p>
              </div>
              <span className={cn('shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold', tones[meta.tone])}>{meta.label}</span>
              <ChevronRight className="size-4 shrink-0 text-faint" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
