'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { StatusBadge } from '@/components/admin/status-badge';
import { AButton, Card, Empty, PageHeader, SearchField, Select } from '@/components/admin/ui';
import { Photo } from '@/components/photo';
import { countries, placesIn } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { allDestinations, statusOf } from '@/lib/admin/entities';
import { useAdmin } from '@/lib/admin/repo';
import { can } from '@/lib/admin/roles';
import { flag } from '@/lib/countries';

const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

export default function AdminCities() {
  const router = useRouter();
  const { t, dest, country, version, locale } = useI18n();
  const role = useAdmin((s) => s.user?.role);
  const [q, setQ] = useState('');
  const [code, setCode] = useState('');

  const rows = useMemo(() => {
    const s = fold(q.trim());
    return allDestinations()
      .filter((d) => !code || d.countryCode === code)
      .map((d) => ({ d, name: dest(d.id).name }))
      .filter((r) => !s || fold(`${r.name} ${r.d.id} ${country(r.d.countryCode)}`).includes(s))
      .sort((a, b) => country(a.d.countryCode).localeCompare(country(b.d.countryCode), locale) || a.name.localeCompare(b.name, locale));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, code, version, dest, country, locale]);

  return (
    <>
      <PageHeader
        title={t('admin.nav.cities')}
        subtitle={t('admin.common.shown', { n: rows.length, total: allDestinations().length })}
        actions={
          can(role, 'content.write') && (
            <AButton onClick={() => router.push(`/admin/city/?new=1${code ? `&country=${code}` : ''}`)}>
              <Plus className="size-4" /> {t('admin.list.newCity')}
            </AButton>
          )
        }
      />
      <div className="mb-4 flex flex-wrap gap-2">
        <SearchField value={q} onChange={setQ} placeholder={t('admin.common.search')} className="w-full md:w-72" />
        <Select
          value={code}
          onChange={setCode}
          options={[{ value: '', label: t('admin.list.anyCountry') }, ...[...countries].sort((a, b) => country(a.code).localeCompare(country(b.code), locale)).map((c) => ({ value: c.code, label: `${flag(c.code)} ${country(c.code)}` }))]}
          className="w-56"
          toolbar
        />
      </div>
      <Card>
        {rows.length === 0 && <Empty>{t('admin.common.noResults')}</Empty>}
        <ul>
          {rows.map(({ d, name }) => (
            <li key={d.id}>
              <Link href={`/admin/city/?id=${d.id}`} className="flex items-center gap-3 border-b border-[#e5e5ea] px-4 py-2.5 last:border-b-0 hover:bg-[#f5f5f7]">
                <Photo id={d.image} alt="" width={120} className="size-11 shrink-0" rounded="rounded-[8px]" tint={d.theme?.accent} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[14px] font-semibold">{name}</p>
                  <p className="truncate text-[12px] text-[#86868b]">
                    {flag(d.countryCode)} {country(d.countryCode)} · <span className="font-mono">{d.id}</span>
                  </p>
                </div>
                <span className="hidden h-6 w-12 rounded-full md:block" style={{ background: `linear-gradient(135deg, ${d.theme?.accent}, ${d.theme?.accent2})` }} />
                <span className="w-24 text-right text-[13px] tabular-nums text-[#6e6e73]">{t('common.places', { count: placesIn(d.id).length })}</span>
                <span className="w-20 text-right">
                  <StatusBadge status={statusOf('destinations', d.id)} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
