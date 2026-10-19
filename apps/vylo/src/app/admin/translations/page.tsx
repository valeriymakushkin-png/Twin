'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useMemo, useState } from 'react';
import { Card, PageHeader, Segmented } from '@/components/admin/ui';
import { useWorldText } from '@/content/world';
import { countries, destinations, places } from '@/data/catalog';
import { LOCALE_META, LOCALES, type Locale } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { missingLocales } from '@/lib/admin/entities';

function TranslationsInner() {
  const { t, f, item, country, version } = useI18n();
  const world = useWorldText((s) => s.texts);
  const params = useSearchParams();
  const [lang, setLang] = useState<Locale>((LOCALES as readonly string[]).includes(params.get('lang') ?? '') ? (params.get('lang') as Locale) : 'en');

  const rows = useMemo(() => {
    const all = [
      ...countries.map((c) => ({ kind: 'countries' as const, id: c.code, href: `/admin/country/?code=${c.code}`, name: country(c.code) })),
      ...destinations.map((d) => ({ kind: 'cities' as const, id: d.id, href: `/admin/city/?id=${d.id}`, name: item(d.id).name })),
      ...places.map((p) => ({ kind: 'places' as const, id: p.id, href: `/admin/place/?id=${p.id}`, name: item(p.id).name })),
    ];
    return all.map((r) => ({ ...r, missing: missingLocales(r.kind, r.id, world) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [world, version, item, country]);

  const coverage = LOCALES.map((l) => ({ l, done: rows.filter((r) => !r.missing.includes(l)).length }));
  const missing = rows.filter((r) => r.missing.includes(lang));

  return (
    <>
      <PageHeader title={t('admin.nav.translations')} subtitle={`${t('admin.tr.entities')}: ${rows.length}`} />
      <Card title={t('admin.tr.coverage')}>
        <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {coverage.map(({ l, done }) => (
            <button key={l} onClick={() => setLang(l)} className="rounded-[12px] bg-[#f5f5f7] p-3 text-left ring-[#0071e3] data-[on=true]:ring-2" data-on={l === lang}>
              <p className="text-[14px] font-semibold">
                {LOCALE_META[l].flag} {LOCALE_META[l].native}
              </p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e5e5ea]">
                <div className="h-full rounded-full bg-[#34c759]" style={{ width: `${(done / Math.max(1, rows.length)) * 100}%` }} />
              </div>
              <p className="mt-1 text-[12px] text-[#6e6e73]">{f.percent(done / Math.max(1, rows.length))}</p>
            </button>
          ))}
        </div>
      </Card>
      <Card className="mt-8" title={`${t('admin.tr.missing')} · ${LOCALE_META[lang].native}`} action={<Segmented value={lang} onChange={setLang} options={LOCALES.map((l) => ({ value: l, label: l.toUpperCase() }))} />}>
        {missing.length === 0 ? (
          <p className="px-4 py-6 text-center text-[14px] text-[#34c759]">✓ {t('admin.tr.complete')}</p>
        ) : (
          <ul>
            {missing.slice(0, 300).map((r) => (
              <li key={`${r.kind}:${r.id}`}>
                <Link href={r.href} className="flex items-center justify-between border-b border-[#e5e5ea] px-4 py-2.5 text-[14px] last:border-b-0 hover:bg-[#f5f5f7]">
                  <span className="truncate">{r.name}</span>
                  <span className="font-mono text-[12px] text-[#86868b]">{r.id}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </>
  );
}

export default function AdminTranslations() {
  return (
    <Suspense>
      <TranslationsInner />
    </Suspense>
  );
}
