'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { StatusBadge } from '@/components/admin/status-badge';
import { Card, Empty, PageHeader, SearchField } from '@/components/admin/ui';
import { Photo } from '@/components/photo';
import { citiesIn, countries, placesInCountry } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { statusOf } from '@/lib/admin/entities';
import { flag } from '@/lib/countries';

const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

export default function AdminCountries() {
  const { t, tk, country, countryText, version, locale } = useI18n();
  const [q, setQ] = useState('');
  const rows = useMemo(() => {
    const s = fold(q.trim());
    return [...countries].filter((c) => !s || fold(`${country(c.code)} ${c.code}`).includes(s)).sort((a, b) => country(a.code).localeCompare(country(b.code), locale));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, version, country, locale]);

  return (
    <>
      <PageHeader title={t('admin.nav.countries')} subtitle={t('country.count', { count: countries.length })} />
      <SearchField value={q} onChange={setQ} placeholder={t('admin.common.search')} className="mb-4 w-full md:w-72" />
      <Card>
        {rows.length === 0 && <Empty>{t('admin.common.noResults')}</Empty>}
        <ul>
          {rows.map((c) => (
            <li key={c.code}>
              <Link href={`/admin/country/?code=${c.code}`} className="flex items-center gap-3 border-b border-[#e5e5ea] px-4 py-2.5 last:border-b-0 hover:bg-[#f5f5f7]">
                <Photo id={c.image} alt="" width={120} className="size-11 shrink-0" rounded="rounded-[8px]" tint={c.theme.accent} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[14px] font-semibold">
                    {flag(c.code)} {country(c.code)}
                  </p>
                  <p className="truncate text-[12px] text-[#86868b]">
                    {tk(`country.region.${c.region}`)} · {countryText(c.code)?.tagline ?? '—'}
                  </p>
                </div>
                <span className="hidden w-28 text-right text-[13px] tabular-nums text-[#6e6e73] md:block">{t('country.citiesCount', { count: citiesIn(c.code).length })}</span>
                <span className="hidden w-24 text-right text-[13px] tabular-nums text-[#6e6e73] md:block">{t('common.places', { count: placesInCountry(c.code).length })}</span>
                <span className="w-20 text-right">
                  <StatusBadge status={statusOf('countries', c.code)} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
