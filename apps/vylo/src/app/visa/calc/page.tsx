'use client';

import { CalendarRange, Plus, Trash2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense, useMemo, useState } from 'react';
import { Chip, TopBar } from '@/components/ui';
import { visaGuides } from '@/data/visa/guides.generated';
import { SCHENGEN } from '@/data/visa/rules';
import { LOCALE_META } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { flag } from '@/lib/countries';
import { cn, todayKey } from '@/lib/utils';
import { useVisaPrefs } from '@/store/visa';

const DAY = 86_400_000;
const toDay = (iso: string) => Math.floor(Date.parse(`${iso}T00:00:00Z`) / DAY);
const toIso = (day: number) => new Date(day * DAY).toISOString().slice(0, 10);

interface Zone {
  key: string;
  days: number;
  window: number;
}

/** Schengen plus every destination whose guide declares a rolling-window rule of its own. */
const ZONES: Zone[] = [
  { key: 'schengen', days: 90, window: 180 },
  ...visaGuides.filter((g) => g.rule && !SCHENGEN.has(g.code)).map((g) => ({ key: g.code, days: g.rule!.days, window: g.rule!.window })),
];

/** Rolling-window arithmetic: every calendar day spent inside counts, entry and exit days included. */
function evaluate(trips: { from: string; to: string }[], zone: Zone, onDay: number) {
  const days = new Set<number>();
  for (const t of trips) {
    const a = toDay(t.from);
    const b = toDay(t.to);
    if (Number.isNaN(a) || Number.isNaN(b)) continue;
    for (let d = Math.min(a, b); d <= Math.max(a, b); d++) days.add(d);
  }
  const usedAt = (day: number, set: Set<number>) => {
    let n = 0;
    for (let d = day - zone.window + 1; d <= day; d++) if (set.has(d)) n++;
    return n;
  };
  const used = usedAt(onDay, days);
  // Longest stay starting on onDay without breaking the rule on any day.
  const sim = new Set(days);
  let until: number | undefined;
  for (let d = onDay; d < onDay + zone.window + zone.days; d++) {
    sim.add(d);
    if (usedAt(d, sim) > zone.days) break;
    until = d;
  }
  const last = days.size ? Math.max(...days) : undefined;
  const reset = last !== undefined && last + zone.window > onDay ? last + zone.window : undefined;
  return { used, until, reset };
}

function Calculator() {
  const params = useSearchParams();
  const { t, country, locale } = useI18n();
  const bcp47 = LOCALE_META[locale].bcp47;
  const trips = useVisaPrefs((s) => s.trips);
  const addTrip = useVisaPrefs((s) => s.addTrip);
  const updateTrip = useVisaPrefs((s) => s.updateTrip);
  const removeTrip = useVisaPrefs((s) => s.removeTrip);
  const initial = ZONES.find((z) => z.key === params.get('zone')) ?? ZONES[0];
  const [zone, setZone] = useState<Zone>(initial);
  const [on, setOn] = useState(todayKey());
  const mine = trips.filter((x) => x.zone === zone.key).sort((a, b) => a.from.localeCompare(b.from));
  const result = useMemo(() => evaluate(mine, zone, toDay(on)), [mine, zone, on]);
  const fmt = (day: number) => new Date(day * DAY).toLocaleDateString(bcp47, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  const left = zone.days - result.used;
  const label = (z: Zone) => (z.key === 'schengen' ? `🇪🇺 ${t('visa.calc.schengen')}` : `${flag(z.key)} ${country(z.key)}`);
  const input = 'h-10 w-full min-w-0 rounded-xl bg-surface-2 px-3 text-[14px] font-medium outline-none focus:ring-2 focus:ring-brand/40';

  const add = () => {
    const last = mine.at(-1);
    const start = last ? toDay(last.to) + 30 : toDay(todayKey());
    addTrip({ zone: zone.key, from: toIso(start), to: toIso(start + 6) });
  };

  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-16">
      <TopBar title={t('visa.calc.title')} />
      <p className="px-5 text-[14px] text-muted">{t('visa.calc.subtitle')}</p>
      <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto px-5 pb-2">
        {ZONES.map((z) => (
          <Chip key={z.key} active={z.key === zone.key} onClick={() => setZone(z)}>
            {label(z)} · {z.days}/{z.window}
          </Chip>
        ))}
      </div>

      <div className="px-5">
        <div className={cn('mt-2 rounded-[28px] p-5 text-white shadow-float', left >= 0 ? 'bg-gradient-to-br from-[#0ea5e9] to-[#6366f1]' : 'bg-gradient-to-br from-[#f43f5e] to-[#e11d48]')}>
          <label className="flex items-center gap-2 text-[13px] font-semibold text-white/85">
            <CalendarRange className="size-4" /> {t('visa.calc.onDate')}
            <input type="date" value={on} onChange={(e) => e.target.value && setOn(e.target.value)} className="rounded-lg bg-white/20 px-2 py-1 text-[13px] text-white outline-none [color-scheme:dark]" />
          </label>
          <p className="mt-3 text-[30px] font-black tracking-[-0.03em]">{left >= 0 ? t('visa.calc.left', { count: left }) : t('visa.calc.over', { count: -left })}</p>
          <p className="text-[14px] text-white/85">{t('visa.calc.used', { used: result.used, limit: zone.days })}</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/25">
            <div className="h-full rounded-full bg-white" style={{ width: `${Math.min(100, (result.used / zone.days) * 100)}%` }} />
          </div>
          <p className="mt-4 text-[14px] leading-snug">
            {result.until !== undefined ? t('visa.calc.canStay', { date: fmt(toDay(on)), until: fmt(result.until) }) : t('visa.calc.cannotEnter', { date: fmt(toDay(on)) })}
          </p>
          {result.reset !== undefined && <p className="mt-1 text-[13px] text-white/80">{t('visa.calc.fullReset', { date: fmt(result.reset) })}</p>}
        </div>

        <div className="mt-5 grid gap-2.5">
          {mine.length === 0 && <p className="rounded-[22px] border-2 border-dashed border-line p-5 text-center text-[14px] leading-relaxed text-muted">{t('visa.calc.empty')}</p>}
          {mine.map((trip) => (
            <div key={trip.id} className="grid grid-cols-[1fr_1fr_auto] items-end gap-2 rounded-[20px] bg-white p-3 shadow-soft">
              <label className="min-w-0">
                <span className="mb-1 block text-[11px] font-semibold text-faint">{t('visa.calc.entry')}</span>
                <input type="date" value={trip.from} onChange={(e) => e.target.value && updateTrip(trip.id, { from: e.target.value })} className={input} />
              </label>
              <label className="min-w-0">
                <span className="mb-1 block text-[11px] font-semibold text-faint">{t('visa.calc.exit')}</span>
                <input type="date" value={trip.to} min={trip.from} onChange={(e) => e.target.value && updateTrip(trip.id, { to: e.target.value })} className={input} />
              </label>
              <button onClick={() => removeTrip(trip.id)} aria-label={t('visa.calc.remove')} className="grid size-10 place-items-center rounded-xl bg-rose-50 text-rose">
                <Trash2 className="size-4" />
              </button>
            </div>
          ))}
          <button onClick={add} className="press flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-[15px] font-semibold text-white">
            <Plus className="size-4" /> {t('visa.calc.add')}
          </button>
        </div>
        <p className="mt-5 text-center text-[12px] leading-relaxed text-faint">{t('visa.calc.note')}</p>
      </div>
    </div>
  );
}

export default function CalculatorPage() {
  return (
    <Suspense>
      <Calculator />
    </Suspense>
  );
}
