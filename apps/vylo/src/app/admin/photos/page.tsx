'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Badge, Card, PageHeader, Segmented } from '@/components/admin/ui';
import { countries, destinations, places } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { photoUrl } from '@/lib/photos';

type Filter = 'all' | 'broken' | 'ok' | 'reused';

/** Every image in the catalogue; the browser tells us which ones fail to load. */
export default function AdminPhotos() {
  const { t, place, dest, country, version } = useI18n();
  const [filter, setFilter] = useState<Filter>('all');
  const [state, setState] = useState<Record<string, 'ok' | 'broken'>>({});
  const [limit, setLimit] = useState(120);

  const items = useMemo(
    () => [
      ...countries.map((c) => ({ key: `c:${c.code}`, image: c.image, name: country(c.code), href: `/admin/country/?code=${c.code}` })),
      ...destinations.map((d) => ({ key: `d:${d.id}`, image: d.image, name: dest(d.id).name, href: `/admin/city/?id=${d.id}` })),
      ...places.map((p) => ({ key: `p:${p.id}`, image: p.image, name: place(p.id).name, href: `/admin/place/?id=${p.id}` })),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [version, place, dest, country],
  );
  // Places that show the same photo as another place: usually stand-ins that should get their own picture.
  const uses = useMemo(() => {
    const m = new Map<string, number>();
    for (const i of items) if (i.key.startsWith('p:') && i.image) m.set(i.image, (m.get(i.image) ?? 0) + 1);
    return m;
  }, [items]);
  const reused = (i: { key: string; image: string }) => i.key.startsWith('p:') && (uses.get(i.image) ?? 0) > 1;
  const broken = items.filter((i) => !i.image || state[i.key] === 'broken').length;
  const shown = items
    .filter((i) => filter === 'all' || (filter === 'reused' ? reused(i) : filter === 'broken' ? !i.image || state[i.key] === 'broken' : state[i.key] === 'ok'))
    // Group places that share a photo next to each other.
    .sort((a, b) => (filter === 'reused' ? (b.image === a.image ? 0 : (uses.get(b.image) ?? 0) - (uses.get(a.image) ?? 0) || a.image.localeCompare(b.image)) : 0));

  return (
    <>
      <PageHeader
        title={t('admin.nav.photos')}
        subtitle={`${items.length} · ${t('admin.photos.broken')}: ${broken} · ${t('admin.photos.reused')}: ${items.filter(reused).length}`}
        actions={
          <Segmented
            value={filter}
            onChange={setFilter}
            options={[
              { value: 'all', label: t('admin.common.all') },
              { value: 'broken', label: t('admin.photos.onlyBroken') },
              { value: 'ok', label: t('admin.photos.ok') },
              { value: 'reused', label: t('admin.photos.reused') },
            ]}
          />
        }
      />
      <Card padded>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {shown.slice(0, limit).map((i) => (
            <Link key={i.key} href={i.href} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-[#f5f5f7]">
                {i.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photoUrl(i.image, 400)}
                    alt=""
                    loading="lazy"
                    onLoad={() => setState((s) => (s[i.key] === 'ok' ? s : { ...s, [i.key]: 'ok' }))}
                    onError={() => setState((s) => (s[i.key] === 'broken' ? s : { ...s, [i.key]: 'broken' }))}
                    className="absolute inset-0 size-full object-cover transition group-hover:scale-105"
                  />
                )}
                {(!i.image || state[i.key] === 'broken') && (
                  <div className="absolute inset-0 grid place-items-center">
                    <Badge color="#ff3b30">{t('admin.photos.broken')}</Badge>
                  </div>
                )}
              </div>
              <p className="mt-1.5 truncate text-[12px] font-medium">{i.name}</p>
            </Link>
          ))}
        </div>
        {shown.length > limit && (
          <button onClick={() => setLimit(limit + 240)} className="mt-4 w-full text-[14px] font-semibold text-[#0071e3]">
            {t('common.more')} ({shown.length - limit})
          </button>
        )}
      </Card>
    </>
  );
}
