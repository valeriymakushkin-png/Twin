'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Photo } from '@/components/photo';
import { Chip, SectionHeader } from '@/components/ui';
import { citiesIn, countries, countryHref, placesInCountry } from '@/data/catalog';
import type { CountryFacts, Region } from '@/data/world/types';
import { useI18n } from '@/i18n/use';
import { flag } from '@/lib/countries';

export const REGION_ORDER: Region[] = ['europe', 'sea', 'asia', 'mideast', 'caucasus', 'africa', 'americas', 'oceania', 'russia'];

export function CountryCard({ c, wide }: { c: CountryFacts; wide?: boolean }) {
  const { t, country, countryText } = useI18n();
  const text = countryText(c.code);
  return (
    <Link href={countryHref(c.code)} className={`press relative block shrink-0 overflow-hidden rounded-[24px] shadow-card ${wide ? 'h-[170px] w-full' : 'h-[210px] w-[170px]'}`}>
      <Photo id={c.image} alt={country(c.code)} width={wide ? 800 : 440} className="absolute inset-0" tint={c.theme.accent} />
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 35%, ${c.theme.accent}f0)` }} />
      <div className="absolute inset-x-3.5 bottom-3 text-white">
        <p className="text-[22px] leading-none">{flag(c.code)}</p>
        <p className="mt-1.5 truncate text-[17px] font-bold tracking-[-0.02em]">{country(c.code)}</p>
        <p className="truncate text-[12px] text-white/85">{text?.tagline ?? `${t('country.citiesCount', { count: citiesIn(c.code).length })} · ${t('common.places', { count: placesInCountry(c.code).length })}`}</p>
      </div>
    </Link>
  );
}

/** Discover section: pick a region, swipe through its countries. */
export function RegionExplorer() {
  const { t, tk, country, locale } = useI18n();
  const regions = REGION_ORDER.filter((r) => countries.some((c) => c.region === r));
  const [region, setRegion] = useState<Region>(regions[0] ?? 'europe');
  const list = useMemo(
    () => countries.filter((c) => c.region === region).sort((a, b) => placesInCountry(b.code).length - placesInCountry(a.code).length || country(a.code).localeCompare(country(b.code), locale)),
    [region, country, locale],
  );
  return (
    <section>
      <SectionHeader title={t('country.explore')} href="/countries/" action={t('country.all')} />
      <p className="px-5 text-[13px] text-muted">{t('country.exploreText')}</p>
      <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto px-5 pb-1">
        {regions.map((r) => (
          <Chip key={r} active={r === region} onClick={() => setRegion(r)}>
            {tk(`country.region.${r}`)}
          </Chip>
        ))}
      </div>
      <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto px-5 pb-2">
        {list.map((c) => (
          <CountryCard key={c.code} c={c} />
        ))}
      </div>
    </section>
  );
}
