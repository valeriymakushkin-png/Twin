'use client';

import { Building2, Camera, Flag, Gem, Map as MapIcon, MapPin, PencilLine, Plus } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { AuditList } from '@/components/admin/audit-list';
import { Card, PageHeader } from '@/components/admin/ui';
import { useWorldText } from '@/content/world';
import { countries, destinations, overrides, places } from '@/data/catalog';
import { LOCALE_META, LOCALES } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { missingLocales } from '@/lib/admin/entities';
import { adminRepo, useAdmin, type AuditEntry } from '@/lib/admin/repo';
import { can } from '@/lib/admin/roles';

export default function AdminDashboard() {
  const { t, f, version } = useI18n();
  const { user, token } = useAdmin();
  const world = useWorldText((s) => s.texts);
  const [recent, setRecent] = useState<AuditEntry[]>([]);

  useEffect(() => {
    if (token && can(user?.role, 'audit.read')) adminRepo.audit(token).then((a) => setRecent(a.slice(0, 6)), () => {});
  }, [token, user?.role, version]);

  const stats = useMemo(() => {
    const o = overrides();
    return [
      { icon: Flag, label: t('admin.dash.countries'), value: countries.length, href: '/admin/countries/', color: '#0071e3' },
      { icon: Building2, label: t('admin.dash.cities'), value: destinations.length, href: '/admin/cities/', color: '#5e5ce6' },
      { icon: MapPin, label: t('admin.dash.places'), value: places.length, href: '/admin/places/', color: '#34c759' },
      { icon: Camera, label: t('admin.dash.insta'), value: places.filter((p) => p.spot === 'insta').length, href: '/admin/places/?spot=insta', color: '#ff2d55' },
      { icon: Gem, label: t('admin.dash.hidden'), value: places.filter((p) => p.spot === 'hidden').length, href: '/admin/places/?spot=hidden', color: '#30b0c7' },
      { icon: PencilLine, label: t('admin.dash.edits'), value: Object.keys(o.places).length + Object.keys(o.destinations).length + Object.keys(o.countries).length, href: '/admin/audit/', color: '#ff9500' },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t, version]);

  const health = useMemo(() => {
    const noPhoto = [...places, ...destinations].filter((x) => !x.image).length;
    const missing = LOCALES.map((l) => ({
      l,
      n: places.filter((p) => missingLocales('places', p.id, world).includes(l)).length + destinations.filter((d) => missingLocales('cities', d.id, world).includes(l)).length,
    })).filter((x) => x.n > 0);
    return { noPhoto, missing };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [world, version]);

  return (
    <>
      <PageHeader title={t('admin.dash.hello', { name: user?.name.split(' ')[0] ?? '' })} subtitle={t('admin.nav.dashboard')} />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {stats.map((s) => (
          <Link key={s.label} href={s.href} className="rounded-[14px] bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_0_0_0.5px_rgba(0,0,0,0.06)] transition hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <s.icon className="size-5" style={{ color: s.color }} />
            <p className="mt-3 text-[26px] font-bold tabular-nums tracking-[-0.02em]">{f.number(s.value)}</p>
            <p className="text-[13px] text-[#6e6e73]">{s.label}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
        <div className="grid content-start gap-8">
          <Card title={t('admin.dash.health')}>
            {health.noPhoto === 0 && health.missing.length === 0 ? (
              <p className="px-4 py-4 text-[14px] text-[#34c759]">✓ {t('admin.dash.allGood')}</p>
            ) : (
              <ul>
                {health.noPhoto > 0 && (
                  <li className="flex items-center justify-between border-b border-[#e5e5ea] px-4 py-3">
                    <span className="text-[14px]">{t('admin.dash.noPhoto')}</span>
                    <Link href="/admin/photos/" className="text-[14px] font-semibold text-[#ff9500]">
                      {health.noPhoto}
                    </Link>
                  </li>
                )}
                {health.missing.map((m) => (
                  <li key={m.l} className="flex items-center justify-between border-b border-[#e5e5ea] px-4 py-3 last:border-b-0">
                    <span className="text-[14px]">{t('admin.dash.missingText', { lang: `${LOCALE_META[m.l].flag} ${LOCALE_META[m.l].native}` })}</span>
                    <Link href={`/admin/translations/?lang=${m.l}`} className="text-[14px] font-semibold text-[#ff9500]">
                      {m.n}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Card>
          {can(user?.role, 'audit.read') && (
            <Card title={t('admin.dash.recent')} action={<Link href="/admin/audit/" className="text-[13px] font-medium text-[#0071e3]">{t('admin.nav.audit')}</Link>}>
              <AuditList entries={recent} />
            </Card>
          )}
        </div>
        {can(user?.role, 'content.write') && (
          <Card title={t('admin.dash.quick')}>
            {[
              { href: '/admin/place/?new=1', icon: Plus, label: t('admin.dash.addPlace') },
              { href: '/admin/city/?new=1', icon: Building2, label: t('admin.dash.addCity') },
              { href: '/admin/map/', icon: MapIcon, label: t('admin.dash.openMap') },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="flex items-center gap-3 border-b border-[#e5e5ea] px-4 py-3.5 text-[14px] font-medium last:border-b-0 hover:bg-[#f5f5f7]">
                <span className="grid size-8 place-items-center rounded-[8px] bg-[#0071e3] text-white">
                  <a.icon className="size-4" />
                </span>
                {a.label}
              </Link>
            ))}
          </Card>
        )}
      </div>
    </>
  );
}
