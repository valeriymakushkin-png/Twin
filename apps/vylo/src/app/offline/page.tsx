'use client';

import { CloudDownload, CloudOff, Loader2, RefreshCw, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { usePlus } from '@/components/paywall';
import { Photo } from '@/components/photo';
import { Empty, ProgressBar, TopBar } from '@/components/ui';
import { destinationById, destinationHref, destinations, placesIn } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { downloadDestination, offlineSupported, removeDestination, storageUsage } from '@/lib/offline';
import { useApp } from '@/store/app';

const mb = (n: number) => `${Math.max(1, Math.round(n / 1_048_576))} MB`;

export default function OfflinePage() {
  const { t, tk, dest, country } = useI18n();
  const { gate } = usePlus();
  const saved = useApp((s) => s.offline);
  const { markOffline, unmarkOffline } = useApp();
  const [busy, setBusy] = useState<string | null>(null);
  const [usage, setUsage] = useState<{ used: number; quota: number } | null>(null);
  const [pick, setPick] = useState('');
  useEffect(() => void storageUsage().then(setUsage), [saved.length, busy]);

  const options = useMemo(() => [...destinations].filter((d) => !saved.includes(d.id)).sort((a, b) => dest(a.id).name.localeCompare(dest(b.id).name)), [dest, saved]);

  const download = (id: string) =>
    gate(async () => {
      if (!offlineSupported()) return toast.error(t('offline.unsupported'));
      setBusy(id);
      const ok = await downloadDestination(id);
      setBusy(null);
      if (ok) {
        markOffline(id);
        toast.success(t('offline.ready'));
      } else toast.error(t('offline.failed'));
    });

  const remove = async (id: string) => {
    setBusy(id);
    await removeDestination(id, saved);
    unmarkOffline(id);
    setBusy(null);
    toast.success(t('offlineMgr.removed'));
  };

  return (
    <div className="pb-28">
      <TopBar title={t('offlineMgr.manageTitle')} />
      <div className="px-5">
        <p className="text-[14px] leading-snug text-muted">{t('offlineMgr.manageIntro')}</p>

        {usage && (
          <div className="mt-4 rounded-[20px] bg-white p-4 shadow-soft ring-1 ring-line-soft">
            <div className="flex items-center justify-between text-[13px]">
              <span className="font-semibold">{t('offlineMgr.storage')}</span>
              <span className="text-muted">{t('offlineMgr.storageOf', { used: mb(usage.used), total: mb(usage.quota) })}</span>
            </div>
            <ProgressBar value={Math.max(1, (usage.used / usage.quota) * 100)} className="mt-2" />
          </div>
        )}

        <div className="mt-4 grid gap-2.5">
          {saved.map((id) => {
            const d = destinationById(id);
            if (!d) return null;
            const working = busy === id;
            return (
              <div key={id} className="flex items-center gap-3 rounded-[20px] bg-white p-2.5 shadow-soft ring-1 ring-line-soft">
                <Link href={destinationHref(id)} className="flex min-w-0 flex-1 items-center gap-3">
                  <Photo id={d.image} alt={dest(id).name} width={160} className="size-14 shrink-0" rounded="rounded-[14px]" tint={d.theme.accent} />
                  <span className="min-w-0">
                    <span className="block truncate text-[15px] font-semibold">{dest(id).name}</span>
                    <span className="block truncate text-[12px] text-muted">
                      {country(d.countryCode)} · {t('offlineMgr.places', { count: placesIn(id).length })}
                    </span>
                  </span>
                </Link>
                {working ? (
                  <Loader2 className="mr-2 size-5 animate-spin text-muted" />
                ) : (
                  <>
                    <button aria-label={t('offlineMgr.update')} onClick={() => download(id)} className="press grid size-9 place-items-center rounded-full text-brand-600">
                      <RefreshCw className="size-4" />
                    </button>
                    <button aria-label={t('offlineMgr.remove')} onClick={() => void remove(id)} className="press grid size-9 place-items-center rounded-full text-muted">
                      <Trash2 className="size-4" />
                    </button>
                  </>
                )}
              </div>
            );
          })}
          {saved.length === 0 && <Empty icon={<CloudOff className="size-6" />} title={t('offlineMgr.noneTitle')} text={t('offlineMgr.noneText')} />}
        </div>

        <label htmlFor="offline-add" className="mt-5 block text-[13px] font-semibold text-muted">
          {t('offlineMgr.add')}
        </label>
        <div className="mt-1.5 flex gap-2">
          <select id="offline-add" value={pick} onChange={(e) => setPick(e.target.value)} className="h-12 min-w-0 flex-1 rounded-2xl bg-white px-4 text-[14px] font-semibold shadow-soft outline-none ring-1 ring-line-soft focus:ring-2 focus:ring-brand">
            <option value="">—</option>
            {options.map((d) => (
              <option key={d.id} value={d.id}>
                {dest(d.id).name} — {country(d.countryCode)}
              </option>
            ))}
          </select>
          <button disabled={!pick || !!busy} onClick={() => pick && (download(pick), setPick(''))} className="press grid size-12 shrink-0 place-items-center rounded-2xl bg-brand text-white shadow-brand disabled:opacity-40">
            {busy && busy === pick ? <Loader2 className="size-5 animate-spin" /> : <CloudDownload className="size-5" />}
          </button>
        </div>
        <p className="mt-5 rounded-2xl bg-amber-50 p-3.5 text-[12.5px] leading-snug text-ink-2">{t('offlineMgr.limits')}</p>
        <p className="mt-2 text-[11.5px] text-faint">{tk('offlineMgr.plusNote')}</p>
      </div>
    </div>
  );
}
