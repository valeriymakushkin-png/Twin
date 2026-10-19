'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { CountryCard, REGION_ORDER } from '@/components/region-explorer';
import { Chip, TopBar } from '@/components/ui';
import { countries, countryHref, destinationHref, destinations } from '@/data/catalog';
import type { Region } from '@/data/world/types';
import { LOCALES } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { countryName, flag } from '@/lib/countries';

const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

export default function CountriesPage() {
  const { t, tk, locale, country, dest } = useI18n();
  const [q, setQ] = useState('');
  const [region, setRegion] = useState<Region | 'all'>('all');
  const regions = REGION_ORDER.filter((r) => countries.some((c) => c.region === r));
  const s = fold(q.trim());

  const list = useMemo(
    () =>
      countries
        .filter((c) => region === 'all' || c.region === region)
        .filter((c) => !s || LOCALES.some((l) => fold(countryName(c.code, l)).includes(s)))
        .sort((a, b) => country(a.code).localeCompare(country(b.code), locale)),
    [region, s, country, locale],
  );
  const cities = s ? destinations.filter((d) => fold(dest(d.id).name).includes(s)).slice(0, 8) : [];

  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-16">
      <TopBar title={t('country.title')} />
      <div className="px-5">
        <div className="flex h-12 items-center gap-2.5 rounded-full bg-white px-4 shadow-soft ring-1 ring-line-soft">
          <Search className="size-[18px] text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('country.search')} className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-faint" />
        </div>
      </div>
      <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto px-5 pb-1">
        <Chip active={region === 'all'} onClick={() => setRegion('all')}>
          {t('country.allRegions')}
        </Chip>
        {regions.map((r) => (
          <Chip key={r} active={region === r} onClick={() => setRegion(r)}>
            {tk(`country.region.${r}`)}
          </Chip>
        ))}
      </div>
      {cities.length > 0 && (
        <div className="mx-5 mt-4 grid gap-1 rounded-[22px] bg-white p-2 shadow-soft">
          {cities.map((d) => (
            <Link key={d.id} href={destinationHref(d.id)} className="flex items-center gap-3 rounded-2xl px-2 py-2 hover:bg-surface-2">
              <span className="text-[22px]">{flag(d.countryCode)}</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[15px] font-semibold">{dest(d.id).name}</span>
                <span className="block truncate text-[12px] text-muted">{country(d.countryCode)}</span>
              </span>
            </Link>
          ))}
        </div>
      )}
      <p className="mt-4 px-5 text-[13px] font-semibold text-muted">{t('country.count', { count: list.length })}</p>
      <div className="mt-2 grid grid-cols-2 gap-3 px-5">
        {list.map((c) => (
          <CountryCard key={c.code} c={c} wide />
        ))}
      </div>
      {list.length === 0 && (
        <Link href={countryHref('RU')} className="mt-8 block text-center text-[14px] text-muted">
          {t('common.notFound')}
        </Link>
      )}
    </div>
  );
}
