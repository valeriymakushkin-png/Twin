'use client';

import { Bell, BellOff, CalendarPlus, Clock, MapPin, Repeat, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { Button, Empty, ProgressBar, TopBar } from '@/components/ui';
import { useVisaFormat, useVisaTitle } from '@/components/visa-badge';
import { countries } from '@/data/catalog';
import { guideFacts, SCHENGEN, visaFor } from '@/data/visa/rules';
import { LOCALE_META } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { flag } from '@/lib/countries';
import { stayStatus, type StayStatus } from '@/lib/stay';
import { cn, todayKey } from '@/lib/utils';
import { usePassport, useVisaPrefs, type Stay } from '@/store/visa';

const TONE: Record<StayStatus['state'], { bar: string; text: string }> = {
  upcoming: { bar: 'bg-sky', text: 'text-sky' },
  ok: { bar: 'bg-mint', text: 'text-mint' },
  soon: { bar: 'bg-amber', text: 'text-amber' },
  urgent: { bar: 'bg-rose', text: 'text-rose' },
  overstay: { bar: 'bg-rose', text: 'text-rose' },
};

function StayCard({ stay }: { stay: Stay }) {
  const { t, tk, locale, country } = useI18n();
  const passport = usePassport();
  const holdings = useVisaPrefs((s) => s.holdings);
  const { updateStay, removeStay } = useVisaPrefs();
  const title = useVisaTitle();
  const fmt = useVisaFormat();
  const visa = visaFor(passport, stay.country, holdings);
  const g = guideFacts(stay.country);
  const bcp47 = LOCALE_META[locale].bcp47;
  const date = (iso: string) => new Date(`${iso}T00:00:00`).toLocaleDateString(bcp47, { day: 'numeric', month: 'long', year: 'numeric' });
  const unlimited = visa?.regime === 'domestic' || visa?.regime === 'eu';
  const allowance = stay.days ?? (visa?.days || 0);
  const status = allowance > 0 ? stayStatus(stay.entry, allowance, todayKey()) : undefined;
  const tone = status ? TONE[status.state] : undefined;
  const zone = SCHENGEN.has(stay.country) ? 'schengen' : g?.rule ? stay.country : undefined;

  return (
    <div className="rounded-[24px] bg-white p-4 shadow-soft ring-1 ring-line-soft">
      <div className="flex items-start gap-3">
        <span className="text-[30px] leading-none">{flag(stay.country)}</span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[17px] font-bold tracking-[-0.02em]">{country(stay.country)}</p>
          <p className="truncate text-[12.5px] text-muted">
            {t('stay.entered', { date: date(stay.entry) })}
            {visa ? ` · ${title(visa)}` : ''}
          </p>
        </div>
        <button aria-label={t('stay.remove')} onClick={() => removeStay(stay.id)} className="press grid size-9 place-items-center rounded-full text-muted">
          <Trash2 className="size-4" />
        </button>
      </div>

      {unlimited ? (
        <p className="mt-3 rounded-2xl bg-surface-2 p-3 text-[13px] text-ink-2">{t('stay.unlimited')}</p>
      ) : status && tone ? (
        <>
          <div className="mt-3 flex items-end justify-between gap-3">
            <div>
              <p className={cn('text-[28px] font-bold leading-none tracking-[-0.03em]', tone.text)}>
                {status.state === 'upcoming' ? allowance : status.state === 'overstay' ? 1 - status.left : status.left}
                <span className="ml-1.5 text-[14px] font-semibold">
                  {status.state === 'upcoming' ? t('stay.daysAllowed') : status.state === 'overstay' ? t('stay.daysOver') : t('stay.daysLeft')}
                </span>
              </p>
              <p className="mt-1 text-[13px] text-ink-2">{t('stay.leaveBy', { date: date(status.leaveBy) })}</p>
            </div>
            {status.state !== 'upcoming' && (
              <p className="text-[12px] text-muted">
                {status.used}/{allowance}
              </p>
            )}
          </div>
          <ProgressBar value={status.state === 'upcoming' ? 0 : (status.used / allowance) * 100} color={tone.bar} className="mt-2.5" />
          {status.state === 'overstay' && <p className="mt-2.5 rounded-2xl bg-rose/10 p-3 text-[13px] leading-snug text-rose">{t('stay.overstayWarn')}</p>}
        </>
      ) : (
        <p className="mt-3 rounded-2xl bg-amber-50 p-3 text-[13px] leading-snug text-ink-2">{t('stay.needDays')}</p>
      )}

      <label className="mt-3 flex items-center justify-between gap-3 text-[13px]">
        <span className="text-muted">{t('stay.allowanceLabel', { default: visa?.days ? fmt.stay(visa) : '—' })}</span>
        <input
          type="number"
          min={1}
          max={365}
          inputMode="numeric"
          value={stay.days ?? ''}
          placeholder={visa?.days ? String(visa.days) : ''}
          onChange={(e) => updateStay(stay.id, { days: e.target.value ? Math.max(1, Math.min(365, Number(e.target.value))) : undefined })}
          className="h-9 w-20 rounded-xl bg-surface-2 px-3 text-right text-[14px] font-semibold tabular-nums outline-none focus:ring-2 focus:ring-brand/40"
        />
      </label>

      <div className="mt-3 flex flex-wrap gap-2 text-[12.5px] font-semibold">
        {g?.extend && (
          <Link href={`/visa/${stay.country}/`} className="press inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1.5 text-sky">
            <Clock className="size-3.5" /> {t('stay.canExtend', { count: g.extend.days ?? 0 })}
          </Link>
        )}
        {g?.visaRun && g.visaRun !== 'no' && (
          <Link href={`/visa/${stay.country}/`} className="press inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-brand-600">
            <Repeat className="size-3.5" /> {t('stay.run')}: {tk(`visa.run.${g.visaRun}`)}
          </Link>
        )}
        {zone && (
          <Link href={`/visa/calc/?zone=${zone}`} className="press inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-amber">
            <CalendarPlus className="size-3.5" /> {t('stay.window', { days: g?.rule?.days ?? 90, window: g?.rule?.window ?? 180 })}
          </Link>
        )}
      </div>

      {g?.borders && g.borders.length > 0 && status && (status.state === 'soon' || status.state === 'urgent' || status.state === 'overstay') && g.visaRun !== 'no' && (
        <div className="mt-3 grid gap-1.5">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.06em] text-faint">{t('stay.nearRun')}</p>
          {g.borders.slice(0, 3).map((b) => {
            const there = visaFor(passport, b.to, holdings);
            return (
              <a key={b.name} href={`https://www.google.com/maps/search/?api=1&query=${b.lat},${b.lng}`} target="_blank" rel="noopener noreferrer" className="press flex items-center gap-2.5 rounded-2xl bg-surface-2/70 px-3 py-2.5">
                <MapPin className="size-4 shrink-0 text-faint" />
                <span className="min-w-0 flex-1 truncate text-[13px] font-semibold">{b.name}</span>
                <span className="shrink-0 text-[12px] text-muted">
                  {flag(b.to)} {there ? title(there) : ''}
                </span>
              </a>
            );
          })}
        </div>
      )}
      {visa && <p className="mt-3 text-[11.5px] leading-snug text-faint">{g?.checked ? t('stay.checked', { month: new Date(`${g.checked}-01T00:00:00`).toLocaleDateString(bcp47, { month: 'long', year: 'numeric' }) }) : ''}</p>}
    </div>
  );
}

export default function StayPage() {
  const { t, country, locale } = useI18n();
  const passport = usePassport();
  const { stays, remind, addStay, setRemind } = useVisaPrefs();
  const [code, setCode] = useState('TH');
  const [entry, setEntry] = useState(todayKey());
  const [notifState, setNotifState] = useState<NotificationPermission | 'unsupported'>('default');
  useEffect(() => setNotifState(typeof Notification === 'undefined' ? 'unsupported' : Notification.permission), []);

  const options = useMemo(
    () => countries.filter((c) => c.code !== passport).map((c) => ({ code: c.code, name: country(c.code) })).sort((a, b) => a.name.localeCompare(b.name, locale)),
    [country, locale, passport],
  );
  const sorted = [...stays].sort((a, b) => a.entry.localeCompare(b.entry));

  const toggleRemind = async () => {
    if (remind) return setRemind(false);
    if (typeof Notification !== 'undefined' && Notification.permission === 'default') setNotifState(await Notification.requestPermission());
    setRemind(true);
  };

  return (
    <div className="pb-28">
      <TopBar title={t('stay.title')} />
      <div className="px-5">
        <p className="text-[14px] leading-snug text-muted">{t('stay.intro')}</p>

        <div className="mt-4 rounded-[22px] bg-white p-4 shadow-soft ring-1 ring-line-soft">
          <label className="text-[12.5px] font-semibold text-muted" htmlFor="stay-country">
            {t('stay.country')}
          </label>
          <select id="stay-country" value={code} onChange={(e) => setCode(e.target.value)} className="mt-1.5 h-11 w-full rounded-xl bg-surface-2 px-3 text-[15px] font-semibold outline-none focus:ring-2 focus:ring-brand/40">
            {options.map((o) => (
              <option key={o.code} value={o.code}>
                {flag(o.code)} {o.name}
              </option>
            ))}
          </select>
          <label className="mt-3 block text-[12.5px] font-semibold text-muted" htmlFor="stay-entry">
            {t('stay.entry')}
          </label>
          <input id="stay-entry" type="date" value={entry} onChange={(e) => e.target.value && setEntry(e.target.value)} className="mt-1.5 h-11 w-full rounded-xl bg-surface-2 px-3 text-[15px] font-semibold outline-none focus:ring-2 focus:ring-brand/40" />
          <Button className="mt-3 w-full" onClick={() => addStay({ country: code, entry })}>
            <CalendarPlus className="size-4" /> {t('stay.add')}
          </Button>
        </div>

        <button onClick={toggleRemind} className="press mt-3 flex w-full items-center gap-3 rounded-[20px] bg-white p-3.5 text-left shadow-soft ring-1 ring-line-soft">
          <span className={cn('grid size-10 shrink-0 place-items-center rounded-2xl', remind ? 'bg-brand text-white' : 'bg-surface-2 text-muted')}>{remind ? <Bell className="size-5" /> : <BellOff className="size-5" />}</span>
          <span className="min-w-0 flex-1">
            <span className="block text-[14px] font-semibold">{t('stay.remind')}</span>
            <span className="block text-[12px] leading-snug text-muted">{notifState === 'denied' ? t('stay.remindDenied') : notifState === 'unsupported' ? t('stay.remindUnsupported') : t('stay.remindHint')}</span>
          </span>
        </button>

        <div className="mt-5 grid gap-3">
          {sorted.map((s) => (
            <StayCard key={s.id} stay={s} />
          ))}
          {sorted.length === 0 && <Empty icon={<CalendarPlus className="size-6" />} title={t('stay.emptyTitle')} text={t('stay.emptyText')} />}
        </div>
        <p className="mt-5 text-[11.5px] leading-snug text-faint">{t('stay.disclaimer')}</p>
      </div>
    </div>
  );
}
