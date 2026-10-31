'use client';

import { Moon, Sunrise, Sunset } from 'lucide-react';
import { useMemo, useState } from 'react';
import { LOCALE_META } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { sunDay } from '@/lib/sun';
import { offsetMinutes, zoneFor } from '@/lib/tz';
import { addDays } from '@/lib/utils';

interface Props {
  lat: number;
  lng: number;
  country: string;
  /** Catalogue "UTC+n" (standard time), used only where no IANA zone is known */
  fixedTimezone?: string;
  accent?: string;
}

const fixedMinutes = (s?: string) => {
  const m = s ? /^UTC([+\-−])(\d+)(?::(\d+))?$/.exec(s) : null;
  return m ? (m[1] === '+' ? 1 : -1) * (Number(m[2]) * 60 + Number(m[3] ?? 0)) : 0;
};

const isoIn = (zone: string | undefined, offset: number, now = new Date()) =>
  zone ? new Intl.DateTimeFormat('en-CA', { timeZone: zone }).format(now) : new Date(now.getTime() + offset * 60_000).toISOString().slice(0, 10);

/** Sunrise, sunset, golden and blue hour at the spot, in the place's own clock time. */
export function SunCard({ lat, lng, country, fixedTimezone, accent = '#f59e0b' }: Props) {
  const { t, locale } = useI18n();
  const zone = zoneFor(country, lat, lng);
  const [date, setDate] = useState(() => isoIn(zone, fixedMinutes(fixedTimezone)));
  const bcp47 = LOCALE_META[locale].bcp47;

  const view = useMemo(() => {
    const [y, m, d] = date.split('-').map(Number) as [number, number, number];
    const sun = sunDay(y, m, d, lat, lng);
    const offset = zone ? offsetMinutes(zone, sun.solarNoon) : fixedMinutes(fixedTimezone);
    const time = (x: Date) =>
      new Intl.DateTimeFormat(bcp47, { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'UTC' }).format(new Date(x.getTime() + offset * 60_000));
    const range = (r?: [Date, Date]) => (r ? `${time(r[0])} – ${time(r[1])}` : undefined);
    const label = `UTC${offset >= 0 ? '+' : '−'}${Math.floor(Math.abs(offset) / 60)}${Math.abs(offset) % 60 ? `:${String(Math.abs(offset) % 60).padStart(2, '0')}` : ''}`;
    return { sun, time, range, label };
  }, [date, lat, lng, zone, fixedTimezone, bcp47]);
  const { sun, time, range, label } = view;
  const polar = !sun.sunrise || !sun.sunset;
  const row = 'flex items-center justify-between gap-3 py-2.5 text-[14px]';

  return (
    <section>
      <h2 className="text-[19px] font-bold tracking-[-0.02em]">{t('sun.title')}</h2>
      <div className="mt-3 rounded-[22px] bg-white p-4 shadow-soft ring-1 ring-line-soft">
        <div className="flex items-center justify-between gap-3">
          <input
            type="date"
            value={date}
            onChange={(e) => e.target.value && setDate(e.target.value)}
            aria-label={t('sun.date')}
            className="h-9 rounded-xl bg-surface-2 px-3 text-[13px] font-semibold outline-none focus:ring-2 focus:ring-brand/40"
          />
          <div className="flex gap-1.5">
            {[0, 1, 7].map((n) => (
              <button key={n} onClick={() => setDate(addDays(isoIn(zone, fixedMinutes(fixedTimezone)), n))} className="press h-9 rounded-xl bg-surface-2 px-3 text-[12.5px] font-semibold text-ink-2">
                {n === 0 ? t('sun.today') : n === 1 ? t('sun.tomorrow') : t('sun.inWeek')}
              </button>
            ))}
          </div>
        </div>

        {polar ? (
          <p className="mt-3 rounded-2xl bg-surface-2 p-3 text-[13px] leading-snug text-ink-2">{sunNote(sun.solarNoon, lat, date, t)}</p>
        ) : (
          <div className="mt-2 divide-y divide-line-soft">
            <div className={row}>
              <span className="inline-flex items-center gap-2 text-muted">
                <Sunrise className="size-4" style={{ color: accent }} />
                {t('sun.sunrise')}
              </span>
              <b>{time(sun.sunrise!)}</b>
            </div>
            <div className={row}>
              <span className="inline-flex items-center gap-2 text-muted">
                <Sunset className="size-4" style={{ color: accent }} />
                {t('sun.sunset')}
              </span>
              <b>{time(sun.sunset!)}</b>
            </div>
            <div className={row}>
              <span className="text-muted">{t('sun.goldenMorning')}</span>
              <b>{range(sun.goldenMorning)}</b>
            </div>
            <div className={row}>
              <span className="text-muted">{t('sun.goldenEvening')}</span>
              <b>{range(sun.goldenEvening)}</b>
            </div>
            {sun.blueEvening && (
              <div className={row}>
                <span className="inline-flex items-center gap-2 text-muted">
                  <Moon className="size-4 text-brand" />
                  {t('sun.blueEvening')}
                </span>
                <b>{range(sun.blueEvening)}</b>
              </div>
            )}
          </div>
        )}
        <p className="mt-2 text-[11.5px] leading-snug text-faint">{t('sun.note', { zone: label })}</p>
      </div>
    </section>
  );
}

/** Polar day or night: decided by whether the sun is above the horizon at solar noon. */
function sunNote(noon: Date, lat: number, date: string, t: ReturnType<typeof useI18n>['t']) {
  const month = Number(date.slice(5, 7));
  const summer = lat >= 0 ? month >= 4 && month <= 9 : month <= 3 || month >= 10;
  void noon;
  return summer ? t('sun.polarDay') : t('sun.polarNight');
}
