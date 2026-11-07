'use client';

import { motion } from 'framer-motion';
import { Car, Coffee, Footprints, Map as MapIcon, Utensils } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MichelinBadge } from '@/components/food/michelin';
import { KindDot } from '@/components/map/kind-ui';
import { placeKind } from '@/components/map/kinds';
import { cityRoutes, placeById, placeHref } from '@/data/catalog';
import type { Place } from '@/data/types';
import { useI18n } from '@/i18n/use';
import { cn, distanceKm } from '@/lib/utils';
import { useRoute } from '@/store/route';

/** Minutes spent at a stop: a meal is an hour, a photo spot half an hour, a park or a big sight longer. */
const stay = (p: Place) => (p.category === 'food' ? 60 : p.reviews > 50000 && p.category === 'attraction' ? 110 : p.spot === 'insta' ? 40 : p.spot === 'hidden' ? 45 : p.category === 'nature' ? 90 : 75);

/** Getting from one stop to the next: walk up to ~1.2 km, otherwise a taxi or Grab at city speed. */
function leg(a: Place, b: Place) {
  const km = distanceKm(a, b) * 1.25; // streets are never straight
  if (km <= 1.2) return { mode: 'walk' as const, min: Math.max(3, Math.round((km / 4.5) * 60)), km };
  // In town ~22 km/h with traffic; out-of-town trips (to tunnels, waterfalls, parks) run faster on highways.
  return { mode: 'ride' as const, min: Math.round(km > 15 ? 20 + (km / 45) * 60 : 8 + (km / 22) * 60), km };
}

/** What a food stop is at that hour. */
const meal = (minutes: number) => (minutes < 10 * 60 + 30 ? 'breakfast' : minutes < 15 * 60 ? 'lunch' : minutes < 17 * 60 + 30 ? 'snack' : 'dinner');

const clock = (m: number) => `${String(Math.floor(m / 60) % 24).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;

function DayPlan({ index, ids, title, accent }: { index: number; ids: string[]; title: string; accent: string }) {
  const { t, tk, f, place } = useI18n();
  const router = useRouter();
  const setStops = useRoute((s) => s.setStops);
  const stops = ids.map((id) => placeById(id)).filter((p): p is Place => !!p);
  // Meals happen at meal times: the first stop to eat is lunch (not before 12:00); a later one in the evening is dinner
  // (not before 18:30). Waiting for it shows up as free time.
  let at = 9 * 60;
  let meals = 0;
  // Only the day's last place to eat waits for dinner; a café or ice cream before it stays a snack on the way.
  const lastFood = stops.findLastIndex((p) => p.category === 'food');
  const eaten = new Set<string>(); // each of breakfast, lunch and dinner happens once a day
  const rows = stops.map((p, i) => {
    const travel = i ? leg(stops[i - 1]!, p) : null;
    if (travel) at += travel.min;
    let wait = 0;
    if (p.category === 'food' && i === 0) at = 8 * 60; // a day that opens with food starts with breakfast at 8:00
    else if (p.category === 'food') {
      // Lunch is the first meal reached before 15:00; past that, the day's last place to eat waits for dinner.
      const lunch = meals === 0 && at < 15 * 60;
      const target = lunch ? 12 * 60 : i === lastFood && (at >= 16 * 60 || i === stops.length - 1) ? 18 * 60 + 30 : at;
      if (at < target) (wait = target - at), (at = target);
      meals++;
    }
    const start = at;
    at += stay(p);
    // A café or bar before the day's last place to eat is a snack, even in the early evening,
    // and so is a second stop at the same mealtime (sweets after lunch).
    const m = meal(start);
    const label = (m === 'dinner' && i !== lastFood) || eaten.has(m) ? 'snack' : m;
    if (p.category === 'food' && label !== 'snack') eaten.add(label);
    return { p, travel, start, wait, label };
  });
  const showOnMap = () => {
    setStops(stops.map((p) => ({ id: p.id, lat: p.lat, lng: p.lng, label: place(p.id).name })));
    router.push('/map/?route=1');
  };
  return (
    <div className="overflow-hidden rounded-[26px] bg-white shadow-soft ring-1 ring-line-soft">
      <div className="flex items-center gap-3 px-4 pb-2 pt-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-[14px] text-[15px] font-black text-white" style={{ background: accent }}>
          {index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-faint">{t('routes.day', { n: index + 1 })}</p>
          <p className="truncate text-[16px] font-bold tracking-[-0.02em]">{title}</p>
        </div>
        <span className="shrink-0 text-[12px] font-semibold tabular-nums text-muted">
          {clock(rows[0]?.start ?? 540)}–{clock(at)}
        </span>
      </div>
      <ol className="px-4 pb-2">
        {rows.map(({ p, travel, start, wait, label }, i) => {
          const kind = placeKind(p);
          const isFood = p.category === 'food';
          return (
            <li key={p.id}>
              {travel && (
                <div className="flex items-center gap-3 py-1 pl-[13px]">
                  <span className="h-6 w-px border-l-2 border-dotted border-line" />
                  <span className="flex items-center gap-1 text-[11px] font-medium text-faint">
                    {travel.mode === 'walk' ? <Footprints className="size-3" /> : <Car className="size-3" />}
                    {t(travel.mode === 'walk' ? 'routes.walk' : 'routes.ride', { min: travel.min })}
                  </span>
                </div>
              )}
              {wait >= 30 && (
                <div className="my-1 ml-[3px] flex items-center gap-2 rounded-[12px] bg-surface-2/80 px-2.5 py-1.5 text-[11.5px] font-medium text-muted">
                  <Coffee className="size-3.5 shrink-0" /> {t('routes.free', { time: f.duration(Math.round(wait / 15) * 15) })}
                </div>
              )}
              <Link href={placeHref(p.id)} className="press -mx-2 flex items-center gap-3 rounded-[16px] px-2 py-1.5">
                <KindDot kind={kind} size={28} className="ring-0" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[14.5px] font-semibold tracking-[-0.01em]">{place(p.id).name}</p>
                  <p className="flex items-center gap-1.5 text-[12px] text-muted">
                    <span className="tabular-nums">{clock(start)}</span>
                    {isFood && (
                      <span className="inline-flex items-center gap-1 font-semibold" style={{ color: accent }}>
                        <Utensils className="size-3" /> {tk(`routes.${label}`)}
                      </span>
                    )}
                  </p>
                </div>
                {p.michelin && <MichelinBadge m={p.michelin} />}
              </Link>
              {i === rows.length - 1 && <span className="sr-only">.</span>}
            </li>
          );
        })}
      </ol>
      <button onClick={showOnMap} className="press flex h-12 w-full items-center justify-center gap-2 border-t border-line-soft text-[14px] font-semibold" style={{ color: accent }}>
        <MapIcon className="size-4" /> {t('routes.showOnMap')}
      </button>
    </div>
  );
}

/** Curated routes for 1, 2 or 3 days: the best day first, meals on the way, times and transfers worked out. */
export function CityRoutes({ cityId, accent }: { cityId: string; accent: string }) {
  const { t, routeTitles } = useI18n();
  const days = cityRoutes(cityId);
  const titles = routeTitles(cityId);
  const [count, setCount] = useState(Math.min(2, days.length));
  if (days.length < 1) return null;
  return (
    <section className="px-5">
      <h2 className="text-[19px] font-bold tracking-[-0.02em]">{t('routes.title')}</h2>
      <p className="mt-1 text-[13px] leading-snug text-muted">{t('routes.subtitle')}</p>
      <div className="mt-3 grid grid-cols-3 rounded-full bg-surface-2 p-1" role="tablist">
        {days.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={count === i + 1}
            onClick={() => setCount(i + 1)}
            className={cn('relative h-9 rounded-full text-[13px] font-semibold transition-colors', count === i + 1 ? 'text-ink' : 'text-muted')}
          >
            {count === i + 1 && <motion.span layoutId={`route-days-${cityId}`} className="absolute inset-0 rounded-full bg-white shadow-soft" transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }} />}
            <span className="relative">{t('routes.days', { count: i + 1 })}</span>
          </button>
        ))}
      </div>
      <motion.div key={count} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="mt-3 grid gap-3">
        {days.slice(0, count).map((ids, i) => (
          <DayPlan key={i} index={i} ids={ids} title={titles[i] ?? ''} accent={accent} />
        ))}
      </motion.div>
      <p className="mt-2 px-1 text-[12px] leading-snug text-faint">{t('routes.hint')}</p>
    </section>
  );
}
