'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight, Moon, Plus, Sparkles, Trash2, Wallet, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { usePlus } from '@/components/paywall';
import { Photo } from '@/components/photo';
import { BackButton, IconButton, PlusBadge, Segmented } from '@/components/ui';
import { VisaBadge } from '@/components/visa-badge';
import { destinationById } from '@/data/destinations';
import { categoryColor, placeById, placesIn } from '@/data/places';
import { useI18n } from '@/i18n/use';
import { cn, daysBetween } from '@/lib/utils';
import { useApp, type ChecklistItem } from '@/store/app';

function useCountdown(iso: string) {
  const [left, setLeft] = useState({ d: 0, h: 0, m: 0 });
  useEffect(() => {
    const tick = () => {
      const ms = Math.max(0, new Date(`${iso}T09:00:00`).getTime() - Date.now());
      setLeft({ d: Math.floor(ms / 86_400_000), h: Math.floor((ms % 86_400_000) / 3_600_000), m: Math.floor((ms % 3_600_000) / 60_000) });
    };
    tick();
    const t = setInterval(tick, 30_000);
    return () => clearInterval(t);
  }, [iso]);
  return left;
}

function TripInner() {
  const id = useSearchParams().get('id') ?? '';
  const router = useRouter();
  const trip = useApp((s) => s.trips.find((t) => t.id === id));
  const { addToTrip, removeFromTrip, moveTripItem, toggleChecklist, addChecklist, deleteTrip, autoPlanTrip } = useApp();
  const { t, tk, f, place, dest } = useI18n();
  const plus = usePlus();
  const [tab, setTab] = useState<'plan' | 'check'>('plan');
  const [day, setDay] = useState(0);
  const [newItem, setNewItem] = useState('');
  const left = useCountdown(trip?.start ?? '2099-01-01');

  if (!trip) return <div className="grid h-full place-items-center text-muted">{t('trip.notFound')}</div>;
  const d = destinationById(trip.destinationId)!;
  const nights = Math.max(1, daysBetween(trip.start, trip.end));
  const days = nights + 1;
  const done = trip.checklist.filter((c) => c.done).length;
  const suggestions = placesIn(d.id).filter((p) => !trip.items.some((i) => i.placeId === p.id));
  const dayItems = trip.items.filter((i) => i.day === day);
  const accent = d.theme.accent;
  const label = (c: ChecklistItem) =>
    c.key ? tk(`trip.item.${c.key}`) : c.doc ? tk(`visa.doc.${c.doc}`) : c.apply ? t('trip.item.apply', { visa: tk(`visa.regime.${c.apply}`) }) : (c.text ?? '');
  const autoPlan = () =>
    plus.gate(() => {
      const n = autoPlanTrip(trip.id);
      setDay(0);
      toast.success(t('trip.autoPlanDone', { count: n }));
    });

  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-16">
      <div className="relative h-[300px] overflow-hidden">
        <Photo id={d.image} alt={dest(d.id).name} width={900} priority className="absolute inset-0" tint={accent} />
        <div className="photo-scrim-top absolute inset-0" />
        <div className="pt-safe absolute inset-x-0 top-0 flex h-14 items-center justify-between px-4">
          <BackButton tone="glass" />
          <IconButton
            label={t('trip.delete')}
            tone="glass"
            onClick={() => {
              if (window.confirm(t('trip.deleteConfirm', { name: trip.name }))) {
                deleteTrip(trip.id);
                router.replace('/saved/');
              }
            }}
          >
            <Trash2 className="size-[18px]" />
          </IconButton>
        </div>
        <div className="absolute inset-x-5 bottom-10 text-white">
          <p className="text-[13px] font-medium text-white/85">
            {f.date(trip.start)} — {f.date(trip.end)}
          </p>
          <h1 className="text-[32px] font-bold leading-tight tracking-[-0.035em]">{trip.name}</h1>
          <div className="mt-3 flex gap-2">
            {[
              [left.d, t('trip.d')],
              [left.h, t('trip.h')],
              [left.m, t('trip.m')],
            ].map(([v, l]) => (
              <div key={String(l)} className="glass-dark min-w-[62px] rounded-2xl px-3 py-2 text-center ring-1 ring-white/20">
                <p className="text-[22px] font-bold leading-none">{v}</p>
                <p className="mt-1 text-[11px] text-white/75">{l}</p>
              </div>
            ))}
            <div className="flex items-end pb-1 text-[12px] text-white/80">{t('trip.untilDeparture')}</div>
          </div>
        </div>
      </div>

      <div className="relative -mt-6 rounded-t-[30px] bg-canvas px-5 pt-5">
        <div className="grid grid-cols-3 gap-2.5">
          <div className="rounded-[20px] bg-white p-3 shadow-soft">
            <Moon className="size-[18px] text-violet" />
            <p className="mt-1.5 text-[18px] font-bold">{f.number(nights)}</p>
            <p className="text-[11px] text-muted">{t('trip.nightsWord', { count: nights })}</p>
          </div>
          <div className="rounded-[20px] bg-white p-3 shadow-soft">
            <Wallet className="size-[18px] text-mint" />
            <p className="mt-1.5 text-[18px] font-bold">~{f.money(d.budgetPerDay * days, 'USD')}</p>
            <p className="text-[11px] text-muted">{t('trip.budget')}</p>
          </div>
          <div className="rounded-[20px] bg-white p-3 shadow-soft">
            <Check className="size-[18px] text-amber" />
            <p className="mt-1.5 text-[18px] font-bold">{f.percent(done / Math.max(1, trip.checklist.length), 0)}</p>
            <p className="text-[11px] text-muted">{t('trip.readiness')}</p>
          </div>
        </div>

        <VisaBadge code={d.countryCode} className="mt-3" />

        <Segmented
          className="mt-5"
          layoutId="trip-tab"
          value={tab}
          onChange={setTab}
          options={[
            { value: 'plan', label: t('trip.route') },
            { value: 'check', label: t('trip.checklist', { done, total: trip.checklist.length }) },
          ]}
        />

        {tab === 'plan' && (
          <div className="pt-4">
            <button onClick={autoPlan} className="press mb-4 flex w-full items-center gap-3 rounded-[20px] p-3.5 text-left text-white shadow-float" style={{ background: `linear-gradient(135deg, ${accent}, ${d.theme.accent2})` }}>
              <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-white/20">
                <Sparkles className="size-5" />
              </span>
              <span className="min-w-0 flex-1 text-[14px] font-bold">{t('trip.autoPlan')}</span>
              {!plus.active && <PlusBadge />}
            </button>
            <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1">
              {Array.from({ length: days }, (_, i) => {
                const count = trip.items.filter((x) => x.day === i).length;
                return (
                  <button key={i} onClick={() => setDay(i)} className={cn('press flex min-w-[64px] shrink-0 flex-col items-center rounded-[18px] px-3 py-2 ring-1 transition-colors', day === i ? 'bg-ink text-white ring-ink' : 'bg-white text-ink-2 ring-line')}>
                    <span className="text-[11px] font-semibold opacity-70">{t('trip.day')}</span>
                    <span className="text-[18px] font-bold leading-tight">{i + 1}</span>
                    <span className={cn('mt-0.5 size-1.5 rounded-full', count ? (day === i ? 'bg-white' : 'bg-current') : 'bg-transparent')} />
                  </button>
                );
              })}
            </div>

            <div className="relative mt-4 grid gap-2.5">
              <AnimatePresence initial={false}>
                {dayItems.map((item, idx) => {
                  const p = placeById(item.placeId);
                  if (!p) return null;
                  return (
                    <motion.div key={item.id} layout initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} className="flex items-center gap-3">
                      <div className="flex flex-col items-center self-stretch">
                        <span className="grid size-7 place-items-center rounded-full text-[12px] font-bold text-white" style={{ background: accent }}>
                          {idx + 1}
                        </span>
                        {idx < dayItems.length - 1 && <span className="w-0.5 flex-1" style={{ background: `${accent}33` }} />}
                      </div>
                      <div className="flex min-w-0 flex-1 items-center gap-3 rounded-[20px] bg-white p-2.5 shadow-soft">
                        <Link href={`/p/${p.id}/`} className="flex min-w-0 flex-1 items-center gap-3">
                          <Photo id={p.image} alt={place(p.id).name} width={140} className="size-14 shrink-0" rounded="rounded-[14px]" />
                          <div className="min-w-0">
                            <p className="truncate text-[14px] font-semibold">{place(p.id).name}</p>
                            <p className="text-[11px] font-semibold" style={{ color: categoryColor[p.category] }}>
                              {tk(`categories.${p.category}Short`)}
                              {p.hours ? ` · ${f.hours(p.hours)}` : ''}
                            </p>
                          </div>
                        </Link>
                        <div className="flex shrink-0 items-center">
                          <button aria-label={t('trip.earlier')} disabled={day === 0} onClick={() => moveTripItem(trip.id, item.id, day - 1)} className="grid size-7 place-items-center rounded-full text-muted disabled:opacity-30">
                            <ChevronLeft className="size-4" />
                          </button>
                          <button aria-label={t('trip.later')} disabled={day === days - 1} onClick={() => moveTripItem(trip.id, item.id, day + 1)} className="grid size-7 place-items-center rounded-full text-muted disabled:opacity-30">
                            <ChevronRight className="size-4" />
                          </button>
                          <button aria-label={t('trip.remove')} onClick={() => removeFromTrip(trip.id, item.id)} className="grid size-7 place-items-center rounded-full text-muted">
                            <X className="size-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              {dayItems.length === 0 && <p className="rounded-[20px] border-2 border-dashed border-line p-5 text-center text-[14px] text-muted">{t('trip.dayFree', { n: day + 1 })}</p>}
            </div>

            {suggestions.length > 0 && (
              <>
                <h3 className="mt-6 text-[15px] font-bold">{t('trip.addToDay', { n: day + 1 })}</h3>
                <div className="no-scrollbar -mx-5 mt-3 flex gap-2.5 overflow-x-auto px-5 pb-2">
                  {suggestions.map((p) => (
                    <button key={p.id} onClick={() => addToTrip(trip.id, p.id, day)} className="press relative w-[130px] shrink-0 text-left">
                      <Photo id={p.image} alt={place(p.id).name} width={300} className="h-[96px] w-full" rounded="rounded-[18px]" />
                      <span className="absolute right-2 top-2 grid size-7 place-items-center rounded-full bg-white shadow-soft" style={{ color: accent }}>
                        <Plus className="size-4" strokeWidth={2.6} />
                      </span>
                      <p className="mt-1.5 truncate text-[13px] font-semibold">{place(p.id).name}</p>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {tab === 'check' && (
          <div className="grid gap-1.5 pt-4">
            {trip.checklist.map((c) => (
              <motion.button layout key={c.id} onClick={() => toggleChecklist(trip.id, c.id)} className="flex items-center gap-3 rounded-[18px] bg-white px-4 py-3 text-left shadow-soft">
                <motion.span animate={{ scale: c.done ? [1, 1.25, 1] : 1 }} className={cn('grid size-6 shrink-0 place-items-center rounded-lg border-2 transition-colors', c.done ? 'border-mint bg-mint text-white' : 'border-line')}>
                  {c.done && <Check className="size-3.5" strokeWidth={3.5} />}
                </motion.span>
                <span className={cn('text-[15px] transition-colors', c.done ? 'text-faint line-through' : 'text-ink')}>{label(c)}</span>
              </motion.button>
            ))}
            <form
              className="mt-2 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (!newItem.trim()) return;
                addChecklist(trip.id, newItem.trim());
                setNewItem('');
              }}
            >
              <input value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder={t('trip.addItem')} className="h-12 min-w-0 flex-1 rounded-[18px] bg-white px-4 text-[15px] outline-none ring-1 ring-line focus:ring-2 focus:ring-brand" />
              <button aria-label={t('common.add')} className="press grid size-12 place-items-center rounded-[18px] bg-brand text-white shadow-brand">
                <Plus className="size-5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TripPage() {
  return (
    <Suspense>
      <TripInner />
    </Suspense>
  );
}
