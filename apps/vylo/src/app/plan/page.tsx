'use client';

import { CalendarPlus, Map as MapIcon, Minus, Plus, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { Photo } from '@/components/photo';
import { useRouteActions } from '@/components/route-actions';
import { Button, Chip, Segmented, TopBar } from '@/components/ui';
import { destinationById, destinations, overrides, placeById, placeHref, placesIn } from '@/data/catalog';
import { LOCALE_META } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { INTERESTS, PACES, planDays, type Interest, type Pace, type Slot } from '@/lib/planner';
import { sunDay } from '@/lib/sun';
import { clockTime, placeOffset } from '@/lib/tz';
import { addDays, cn, todayKey } from '@/lib/utils';
import { useApp } from '@/store/app';

const SLOT_COLOR: Record<Slot, string> = { morning: '#0ea5e9', lunch: '#f97316', afternoon: '#0ea5e9', sunset: '#e11d48', dinner: '#f97316' };

function Planner() {
  const params = useSearchParams();
  const router = useRouter();
  const { t, tk, locale, dest, place, country } = useI18n();
  const { createTrip, autoPlanTrip } = useApp();
  const { routeThrough } = useRouteActions();
  const bcp47 = LOCALE_META[locale].bcp47;
  const sorted = useMemo(() => [...destinations].sort((a, b) => country(a.countryCode).localeCompare(country(b.countryCode), locale) || dest(a.id).name.localeCompare(dest(b.id).name, locale)), [country, dest, locale]);
  const [cityId, setCityId] = useState(() => (destinationById(params.get('d') ?? '') ? params.get('d')! : 'bangkok'));
  const [days, setDays] = useState(3);
  const [pace, setPace] = useState<Pace>('balanced');
  const [interests, setInterests] = useState<Interest[]>([]);
  const [start, setStart] = useState(() => addDays(todayKey(), 14));
  const [day, setDay] = useState(0);
  const d = destinationById(cityId) ?? destinationById('bangkok')!;
  const perDay = overrides().settings.planner?.perDay;

  const plan = useMemo(() => planDays(placesIn(d.id), days, { pace, interests, perDay }), [d.id, days, pace, interests, perDay]);
  const total = plan.reduce((n, p) => n + p.length, 0);
  const toggle = (i: Interest) => setInterests((l) => (l.includes(i) ? l.filter((x) => x !== i) : [...l, i]));

  /** Start of the evening golden hour at the spot on that day of the trip. */
  const sunsetAt = (placeId: string, dayIdx: number) => {
    const p = placeById(placeId);
    if (!p) return '';
    const [y, m, dd] = addDays(start, dayIdx).split('-').map(Number) as [number, number, number];
    const sun = sunDay(y, m, dd, p.lat, p.lng);
    if (!sun.goldenEvening) return '';
    return clockTime(sun.goldenEvening[0], placeOffset(d.countryCode, p.lat, p.lng, d.timezone, sun.solarNoon), bcp47);
  };

  const save = () => {
    const id = createTrip({ name: t('plan.tripName', { city: dest(d.id).name }), destinationId: d.id, start, end: addDays(start, days - 1) });
    autoPlanTrip(id, { pace, interests });
    toast.success(t('plan.saved'));
    router.push(`/trip/?id=${id}`);
  };

  const items = plan[day] ?? [];
  return (
    <div className="pb-32">
      <TopBar title={t('plan.title')} />
      <div className="px-5">
        <p className="text-[14px] leading-snug text-muted">{t('plan.intro')}</p>

        <label className="mt-4 block text-[13px] font-semibold text-muted" htmlFor="plan-city">
          {t('plan.where')}
        </label>
        <select
          id="plan-city"
          value={d.id}
          onChange={(e) => (setCityId(e.target.value), setDay(0))}
          className="mt-1.5 h-12 w-full rounded-2xl bg-white px-4 text-[15px] font-semibold shadow-soft outline-none ring-1 ring-line-soft focus:ring-2 focus:ring-brand"
        >
          {sorted.map((x) => (
            <option key={x.id} value={x.id}>
              {dest(x.id).name} — {country(x.countryCode)}
            </option>
          ))}
        </select>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div>
            <p className="text-[13px] font-semibold text-muted">{t('plan.days')}</p>
            <div className="mt-1.5 flex h-12 items-center justify-between rounded-2xl bg-white px-2 shadow-soft ring-1 ring-line-soft">
              <button aria-label="−" onClick={() => (setDays((n) => Math.max(1, n - 1)), setDay(0))} className="press grid size-9 place-items-center rounded-full bg-surface-2">
                <Minus className="size-4" />
              </button>
              <span className="text-[17px] font-bold tabular-nums">{days}</span>
              <button aria-label="+" onClick={() => setDays((n) => Math.min(14, n + 1))} className="press grid size-9 place-items-center rounded-full bg-surface-2">
                <Plus className="size-4" />
              </button>
            </div>
          </div>
          <div>
            <label className="text-[13px] font-semibold text-muted" htmlFor="plan-start">
              {t('plan.start')}
            </label>
            <input id="plan-start" type="date" value={start} min={todayKey()} onChange={(e) => e.target.value && setStart(e.target.value)} className="mt-1.5 h-12 w-full rounded-2xl bg-white px-3 text-[14px] font-semibold shadow-soft outline-none ring-1 ring-line-soft focus:ring-2 focus:ring-brand" />
          </div>
        </div>

        <p className="mt-4 text-[13px] font-semibold text-muted">{t('plan.paceTitle')}</p>
        <Segmented className="mt-1.5" layoutId="plan-pace" value={pace} onChange={(v) => (setPace(v), setDay(0))} options={PACES.map((p) => ({ value: p, label: tk(`plan.pace.${p}`) }))} />
        <p className="mt-1.5 text-[12px] text-muted">{t('plan.paceHint', { count: { relaxed: 3, balanced: 5, packed: 7, ...perDay }[pace] })}</p>

        <p className="mt-4 text-[13px] font-semibold text-muted">{t('plan.interests')}</p>
        <div className="mt-1.5 flex flex-wrap gap-2">
          {INTERESTS.map((i) => (
            <Chip key={i} active={interests.includes(i)} onClick={() => (toggle(i), setDay(0))}>
              {tk(`plan.interest.${i}`)}
            </Chip>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <h2 className="text-[19px] font-bold tracking-[-0.02em]">{t('plan.result', { city: dest(d.id).name })}</h2>
          <span className="text-[12px] text-muted">{t('plan.count', { count: total })}</span>
        </div>

        <div className="no-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5">
          {plan.map((p, i) => (
            <button key={i} onClick={() => setDay(i)} className={cn('press h-10 shrink-0 rounded-full px-4 text-[13px] font-semibold', day === i ? 'text-white' : 'bg-white text-ink-2 ring-1 ring-line-soft')} style={day === i ? { background: d.theme.accent } : undefined}>
              {t('plan.day', { n: i + 1 })} · {p.length}
            </button>
          ))}
        </div>

        <div className="mt-3 grid gap-2.5">
          {items.length === 0 && <p className="rounded-[20px] border-2 border-dashed border-line p-5 text-center text-[14px] text-muted">{t('plan.emptyDay')}</p>}
          {items.map(({ placeId, slot }) => {
            const p = placeById(placeId);
            if (!p) return null;
            return (
              <Link key={placeId} href={placeHref(p.id)} className="press flex items-center gap-3 rounded-[20px] bg-white p-2.5 shadow-soft">
                <Photo id={p.image} alt={place(p.id).name} width={160} className="size-16 shrink-0" rounded="rounded-[14px]" tint={d.theme.accent} />
                <div className="min-w-0 flex-1">
                  <p className="text-[11.5px] font-bold uppercase tracking-wide" style={{ color: SLOT_COLOR[slot] }}>
                    {tk(`plan.slot.${slot}`)}
                    {slot === 'sunset' && sunsetAt(p.id, day) ? ` · ${t('plan.goldenFrom', { time: sunsetAt(p.id, day) })}` : ''}
                  </p>
                  <p className="truncate text-[15px] font-semibold">{place(p.id).name}</p>
                  <p className="truncate text-[12px] text-muted">{tk(`categories.${p.category}Short`)}</p>
                </div>
              </Link>
            );
          })}
          {items.length > 1 && (
            <button onClick={() => routeThrough(items.map((i) => i.placeId))} className="press flex h-11 items-center justify-center gap-2 rounded-full text-[14px] font-semibold" style={{ background: `${d.theme.accent}14`, color: d.theme.accent }}>
              <MapIcon className="size-4" /> {t('spots.showOnMap')}
            </button>
          )}
        </div>
        <p className="mt-4 flex items-start gap-2 text-[11.5px] leading-snug text-faint">
          <Sparkles className="mt-0.5 size-3.5 shrink-0" /> {t('plan.note')}
        </p>
      </div>

      <div className="pb-safe fixed inset-x-0 bottom-0 z-30 mx-auto max-w-[480px] bg-gradient-to-t from-canvas via-canvas/95 to-transparent px-5 pt-6">
        <Button size="lg" className="w-full" onClick={save} disabled={total === 0}>
          <CalendarPlus className="size-5" /> {t('plan.save')}
        </Button>
      </div>
    </div>
  );
}

export default function PlanPage() {
  return (
    <Suspense>
      <Planner />
    </Suspense>
  );
}
