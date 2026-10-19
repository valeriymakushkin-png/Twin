'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Bike, Car, ChevronDown, ChevronUp, Footprints, LocateFixed, Navigation, Sparkles, Trash2, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import { LOCALE_META } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { externalLinks, fetchRoute, type RouteResult, type RouteStep, type TravelMode } from '@/lib/routing';
import { cn } from '@/lib/utils';
import { MY_LOCATION, useRoute } from '@/store/route';

const MODES: { value: TravelMode; icon: typeof Footprints }[] = [
  { value: 'walk', icon: Footprints },
  { value: 'bike', icon: Bike },
  { value: 'car', icon: Car },
];

const STEP_TYPES = new Set(['depart', 'arrive', 'turn', 'newname', 'continue', 'merge', 'fork', 'endofroad', 'roundabout', 'onramp', 'offramp']);

/** Fetches the route whenever the stops or the mode change; stale requests are cancelled. */
export function useRouteResult() {
  const { stops, mode } = useRoute();
  const [result, setResult] = useState<RouteResult | null>(null);
  const [loading, setLoading] = useState(false);
  const key = `${mode}|${stops.map((s) => `${s.lat.toFixed(5)},${s.lng.toFixed(5)}`).join(';')}`;
  useEffect(() => {
    if (stops.length < 2) return void setResult(null);
    const ctrl = new AbortController();
    setLoading(true);
    const timer = setTimeout(() => {
      fetchRoute(stops, mode, ctrl.signal)
        .then(setResult)
        .catch(() => {})
        .finally(() => setLoading(false));
    }, 250);
    return () => {
      clearTimeout(timer);
      ctrl.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return { result, loading };
}

export function useRouteFormat() {
  const { t, tk, f, locale } = useI18n();
  const duration = (s: number) => {
    const total = Math.max(1, Math.round(s / 60));
    const h = Math.floor(total / 60);
    return h ? t('route.hm', { h, m: total % 60 }) : t('route.min', { m: total });
  };
  const distance = (m: number) =>
    m < 1000 ? t('route.m', { n: f.number(Math.max(10, Math.round(m / 10) * 10)) }) : t('route.km', { n: new Intl.NumberFormat(LOCALE_META[locale].bcp47, { maximumFractionDigits: m < 10_000 ? 1 : 0 }).format(m / 1000) });
  const instruction = (s: RouteStep) => {
    const type = s.type.replace(/\s/g, '').replace(/^(rotary|roundaboutturn|exitroundabout|exitrotary)$/, 'roundabout').replace(/^(notification|uselane)$/, 'continue');
    const head = tk(`route.step.${STEP_TYPES.has(type) ? type : 'go'}`);
    const dir = s.modifier && type !== 'depart' && type !== 'arrive' ? tk(`route.dir.${s.modifier.replace(/\s/g, '')}`) : '';
    return [`${head}${dir && !dir.startsWith('route.') ? ` ${dir}` : ''}`, s.name].filter(Boolean).join(' · ');
  };
  return { duration, distance, instruction };
}

export function RoutePanel({ result, loading, onFit }: { result: RouteResult | null; loading: boolean; onFit: () => void }) {
  const { stops, mode, setMode, remove, move, optimize, clear, setOpen, setStops } = useRoute();
  const { t } = useI18n();
  const fmt = useRouteFormat();
  const [expanded, setExpanded] = useState(true);
  const [steps, setSteps] = useState(false);
  const fitted = useRef('');
  const label = (s: (typeof stops)[number]) => (s.id === MY_LOCATION ? t('route.myLocation') : s.label);

  useEffect(() => {
    const k = stops.map((s) => s.id ?? `${s.lat},${s.lng}`).join('|');
    if (k && k !== fitted.current) {
      fitted.current = k;
      onFit();
    }
  }, [stops, onFit]);

  const startFromMe = () => {
    if (!navigator.geolocation) return toast.error(t('map.locateUnavailable'));
    toast(t('route.locating'));
    navigator.geolocation.getCurrentPosition(
      (p) => setStops([{ id: MY_LOCATION, lat: p.coords.latitude, lng: p.coords.longitude, label: '' }, ...stops.filter((s) => s.id !== MY_LOCATION)]),
      () => toast(t('map.locateFailed'), { description: t('map.locateFailedHint') }),
      { enableHighAccuracy: true, timeout: 8000 },
    );
  };

  const links = stops.length >= 2 ? externalLinks(stops, mode) : null;

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 40, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
      className="glass mx-3 flex max-h-[58vh] flex-col overflow-hidden rounded-[28px] shadow-float ring-1 ring-black/5"
    >
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-3 px-4 pb-2 pt-3 text-left">
        <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#2563eb] text-white">
          <Navigation className="size-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[17px] font-bold tracking-[-0.02em]">
            {result && stops.length > 1 ? fmt.duration(result.duration) : t('route.title')}
            {result && stops.length > 1 && <span className="ml-2 text-[14px] font-semibold text-muted">{fmt.distance(result.distance)}</span>}
          </span>
          <span className="block truncate text-[12px] text-muted">
            {loading ? t('route.loading') : stops.length ? `${t('route.stops', { count: stops.length })}${result?.approximate ? ` · ${t('route.approximate')}` : ''}` : t('route.empty')}
          </span>
        </span>
        {expanded ? <ChevronDown className="size-5 text-faint" /> : <ChevronUp className="size-5 text-faint" />}
        <span
          role="button"
          aria-label={t('route.close')}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
          className="grid size-8 place-items-center rounded-full bg-surface-2"
        >
          <X className="size-4" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="min-h-0 overflow-hidden">
            <div className="scroll-area max-h-[44vh] px-4 pb-4">
              <div className="grid grid-cols-3 gap-1 rounded-full bg-surface-2 p-1">
                {MODES.map((m) => (
                  <button key={m.value} onClick={() => setMode(m.value)} className={cn('flex h-9 items-center justify-center gap-1.5 rounded-full text-[13px] font-semibold transition-all', mode === m.value ? 'bg-white text-ink shadow-soft' : 'text-muted')}>
                    <m.icon className="size-4" /> {t(`route.${m.value}`)}
                  </button>
                ))}
              </div>

              <ol className="mt-3 grid gap-1.5">
                {stops.map((s, i) => {
                  const leg = result?.legs[i];
                  return (
                    <li key={`${s.id ?? ''}${s.lat}${s.lng}`}>
                      <div className="flex items-center gap-2.5 rounded-2xl bg-white/80 px-2.5 py-2 ring-1 ring-line-soft">
                        <span className={cn('grid size-6 shrink-0 place-items-center rounded-full text-[11px] font-black text-white', i === 0 ? 'bg-[#16a34a]' : i === stops.length - 1 ? 'bg-[#e11d48]' : 'bg-[#2563eb]')}>{i + 1}</span>
                        <span className="min-w-0 flex-1 truncate text-[14px] font-semibold">{label(s)}</span>
                        <button aria-label={t('route.up')} disabled={i === 0} onClick={() => move(i, -1)} className="grid size-7 place-items-center rounded-full text-muted disabled:opacity-25">
                          <ChevronUp className="size-4" />
                        </button>
                        <button aria-label={t('route.down')} disabled={i === stops.length - 1} onClick={() => move(i, 1)} className="grid size-7 place-items-center rounded-full text-muted disabled:opacity-25">
                          <ChevronDown className="size-4" />
                        </button>
                        <button aria-label={t('route.remove')} onClick={() => remove(i)} className="grid size-7 place-items-center rounded-full text-muted">
                          <X className="size-4" />
                        </button>
                      </div>
                      {leg && i < stops.length - 1 && (
                        <p className="ml-[22px] border-l-2 border-dashed border-[#2563eb]/30 py-1 pl-4 text-[11px] font-semibold text-muted">
                          {fmt.duration(leg.duration)} · {fmt.distance(leg.distance)}
                        </p>
                      )}
                    </li>
                  );
                })}
              </ol>

              <div className="mt-3 flex flex-wrap gap-2">
                {stops[0]?.id !== MY_LOCATION && (
                  <button onClick={startFromMe} className="press flex h-9 items-center gap-1.5 rounded-full bg-white px-3.5 text-[13px] font-semibold ring-1 ring-line">
                    <LocateFixed className="size-4 text-[#2563eb]" /> {t('route.myLocation')}
                  </button>
                )}
                {stops.length > 3 && (
                  <button
                    onClick={() => {
                      optimize();
                      toast.success(t('route.optimized'));
                    }}
                    className="press flex h-9 items-center gap-1.5 rounded-full bg-white px-3.5 text-[13px] font-semibold ring-1 ring-line"
                  >
                    <Sparkles className="size-4 text-amber" /> {t('route.optimize')}
                  </button>
                )}
                {stops.length > 0 && (
                  <button onClick={clear} className="press flex h-9 items-center gap-1.5 rounded-full bg-white px-3.5 text-[13px] font-semibold text-rose ring-1 ring-line">
                    <Trash2 className="size-4" /> {t('route.clear')}
                  </button>
                )}
              </div>

              {links && (
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <a href={links.apple} target="_blank" rel="noreferrer" className="press flex h-11 items-center justify-center rounded-full bg-ink text-[14px] font-semibold text-white">
                    {t('route.openApple')}
                  </a>
                  <a href={links.google} target="_blank" rel="noreferrer" className="press flex h-11 items-center justify-center rounded-full bg-white text-[14px] font-semibold ring-1 ring-line">
                    {t('route.openGoogle')}
                  </a>
                </div>
              )}

              {result && !result.approximate && result.legs.some((l) => l.steps.length) && (
                <>
                  <button onClick={() => setSteps(!steps)} className="mt-3 flex w-full items-center justify-between text-[14px] font-bold">
                    {t('route.steps')}
                    {steps ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                  </button>
                  {steps && (
                    <div className="mt-2 grid gap-3">
                      {result.legs.map((leg, li) => (
                        <div key={li}>
                          <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-faint">{t('route.leg', { name: label(stops[li + 1]!) })}</p>
                          <ol className="mt-1 grid gap-1">
                            {leg.steps.map((st, si) => (
                              <li key={si} className="flex items-start justify-between gap-3 border-b border-line-soft py-1.5 text-[13px]">
                                <span className="text-ink-2">{fmt.instruction(st)}</span>
                                {st.distance > 0 && <span className="shrink-0 text-[12px] text-muted">{fmt.distance(st.distance)}</span>}
                              </li>
                            ))}
                          </ol>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
              <p className="mt-3 text-center text-[10px] text-faint">{t('route.attribution')}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
