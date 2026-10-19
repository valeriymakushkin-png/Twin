'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useMemo, useState } from 'react';
import { StatusBadge } from '@/components/admin/status-badge';
import { AButton, Badge, Card, Empty, PageHeader, SearchField, Select } from '@/components/admin/ui';
import { Photo } from '@/components/photo';
import { SPOT_STYLE } from '@/components/spot-badge';
import { bundledDestination, categoryColor, countries, destinationById } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { allPlaces, statusOf, type Status } from '@/lib/admin/entities';
import { useAdmin } from '@/lib/admin/repo';
import { can } from '@/lib/admin/roles';
import { flag } from '@/lib/countries';

const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

function PlacesInner() {
  const router = useRouter();
  const params = useSearchParams();
  const { t, tk, place, dest, country, version, locale } = useI18n();
  const role = useAdmin((s) => s.user?.role);
  const [q, setQ] = useState('');
  const [code, setCode] = useState(params.get('country') ?? '');
  const [kind, setKind] = useState(params.get('spot') ?? '');
  const [status, setStatus] = useState<Status | ''>('');
  const [limit, setLimit] = useState(100);

  const rows = useMemo(() => {
    const s = fold(q.trim());
    return allPlaces()
      .map((p) => {
        const city = destinationById(p.destinationId) ?? bundledDestination(p.destinationId);
        return { p, city, status: statusOf('places', p.id), name: place(p.id).name };
      })
      .filter((r) => !code || r.city?.countryCode === code)
      .filter((r) => !kind || (kind === 'insta' || kind === 'hidden' ? r.p.spot === kind : r.p.category === kind))
      .filter((r) => !status || r.status === status)
      .filter((r) => !s || fold(`${r.name} ${r.p.id} ${r.city ? dest(r.city.id).name : ''}`).includes(s))
      .sort((a, b) => a.name.localeCompare(b.name, locale));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, code, kind, status, version, place, dest, locale]);

  const countryOptions = [{ value: '', label: t('admin.list.anyCountry') }, ...[...countries].sort((a, b) => country(a.code).localeCompare(country(b.code), locale)).map((c) => ({ value: c.code, label: `${flag(c.code)} ${country(c.code)}` }))];

  return (
    <>
      <PageHeader
        title={t('admin.nav.places')}
        subtitle={t('admin.common.shown', { n: rows.length, total: allPlaces().length })}
        actions={
          can(role, 'content.write') && (
            <AButton onClick={() => router.push(`/admin/place/?new=1${code ? `&country=${code}` : ''}`)}>
              <Plus className="size-4" /> {t('admin.list.newPlace')}
            </AButton>
          )
        }
      />
      <div className="mb-4 flex flex-wrap gap-2">
        <SearchField value={q} onChange={setQ} placeholder={t('admin.common.search')} className="w-full md:w-72" />
        <Select value={code} onChange={setCode} options={countryOptions} className="w-56" toolbar />
        <Select
          value={kind}
          onChange={setKind}
          options={[
            { value: '', label: t('admin.common.all') },
            { value: 'insta', label: t('country.insta') },
            { value: 'hidden', label: t('country.hidden') },
            ...(['attraction', 'nature', 'food', 'hotel'] as const).map((c) => ({ value: c, label: tk(`categories.${c}`) })),
          ]}
          className="w-52"
          toolbar
        />
        <Select
          value={status}
          onChange={setStatus}
          options={[
            { value: '', label: t('admin.list.anyStatus') },
            { value: 'edited', label: t('admin.list.onlyEdited') },
            { value: 'custom', label: t('admin.list.onlyCustom') },
            { value: 'hidden', label: t('admin.list.onlyHidden') },
          ]}
          className="w-44"
          toolbar
        />
      </div>
      <Card>
        {rows.length === 0 && <Empty>{t('admin.common.noResults')}</Empty>}
        <ul>
          {rows.slice(0, limit).map(({ p, city, status: st, name }) => (
            <li key={p.id}>
              <Link href={`/admin/place/?id=${p.id}`} className="flex items-center gap-3 border-b border-[#e5e5ea] px-4 py-2.5 hover:bg-[#f5f5f7]">
                <Photo id={p.image} alt="" width={120} className="size-11 shrink-0" rounded="rounded-[8px]" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[14px] font-semibold">{name}</p>
                  <p className="truncate text-[12px] text-[#86868b]">
                    {city ? `${flag(city.countryCode)} ${dest(city.id).name}` : p.destinationId} · <span className="font-mono">{p.id}</span>
                  </p>
                </div>
                <div className="hidden items-center gap-1.5 md:flex">
                  {p.spot && <Badge color={SPOT_STYLE[p.spot].color}>{t(p.spot === 'insta' ? 'spots.insta' : 'spots.hidden')}</Badge>}
                  <Badge color={categoryColor[p.category]}>{tk(`categories.${p.category}Short`)}</Badge>
                </div>
                <span className="w-10 text-right text-[13px] tabular-nums text-[#6e6e73]">★ {p.rating}</span>
                <span className="w-20 text-right">
                  <StatusBadge status={st} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {rows.length > limit && (
          <div className="p-3 text-center">
            <AButton variant="plain" onClick={() => setLimit(limit + 200)}>
              {t('common.more')} ({rows.length - limit})
            </AButton>
          </div>
        )}
      </Card>
    </>
  );
}

export default function AdminPlaces() {
  return (
    <Suspense>
      <PlacesInner />
    </Suspense>
  );
}
