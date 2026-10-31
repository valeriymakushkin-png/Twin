'use client';

import { CalendarPlus, Check, ThumbsDown, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { Photo } from '@/components/photo';
import { Button, Empty, TopBar } from '@/components/ui';
import { destinationById, placeById, placeHref, placesIn } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { cn } from '@/lib/utils';
import { decodeSnapshot, editKey, fetchShared, republish, suggest, vote, type SharedTrip, type SharedView } from '@/lib/shared-trips';
import { useApp } from '@/store/app';

function Shared() {
  const params = useSearchParams();
  const code = params.get('code');
  const snapshot = params.get('s');
  const { t, tk, f, place, dest } = useI18n();
  const { createTrip, addToTrip } = useApp();
  const [view, setView] = useState<SharedView | null>(null);
  const [error, setError] = useState(false);
  const [pick, setPick] = useState('');
  const owner = !!code && !!editKey(code);

  const load = useCallback(async () => {
    if (!code) return;
    try {
      setView(await fetchShared(code));
      setError(false);
    } catch {
      setError(true);
    }
  }, [code]);
  useEffect(() => void load(), [load]);

  const trip: SharedTrip | null = useMemo(() => (view ? view.trip : snapshot ? decodeSnapshot(snapshot) : null), [view, snapshot]);
  if (!trip) return <div className="grid h-full place-items-center p-8 text-center text-muted">{error || snapshot || !code ? t('shared.notFound') : t('phrases.loading')}</div>;

  const d = destinationById(trip.destinationId);
  const days = Math.max(1, ...trip.items.map((i) => i.day + 1));
  const live = !!view;
  const candidates = placesIn(trip.destinationId).filter((p) => p.category !== 'hotel' && !trip.items.some((i) => i.placeId === p.id) && !view?.suggestions.some((s) => s.placeId === p.id));

  const act = async (fn: () => Promise<SharedView>) => {
    try {
      setView(await fn());
    } catch {
      toast.error(t('shared.failed'));
    }
  };

  const Votes = ({ id }: { id: string }) => {
    const v = view?.votes[id] ?? { up: 0, down: 0, mine: 0 };
    const btn = (value: 1 | -1, Icon: typeof ThumbsUp, n: number) => (
      <button aria-label={value === 1 ? t('shared.like') : t('shared.dislike')} onClick={() => code && act(() => vote(code, id, v.mine === value ? 0 : value))} className={cn('press inline-flex h-8 items-center gap-1 rounded-full px-2.5 text-[12.5px] font-semibold', v.mine === value ? 'bg-brand text-white' : 'bg-surface-2 text-ink-2')}>
        <Icon className="size-3.5" /> {n}
      </button>
    );
    return (
      <div className="flex shrink-0 items-center gap-1.5">
        {btn(1, ThumbsUp, v.up)}
        {btn(-1, ThumbsDown, v.down)}
      </div>
    );
  };

  const row = (placeId: string, extra?: React.ReactNode) => {
    const p = placeById(placeId);
    if (!p) return null;
    return (
      <div key={placeId} className="flex items-center gap-3 rounded-[20px] bg-white p-2.5 shadow-soft ring-1 ring-line-soft">
        <Link href={placeHref(p.id)} className="flex min-w-0 flex-1 items-center gap-3">
          <Photo id={p.image} alt={place(p.id).name} width={140} className="size-14 shrink-0" rounded="rounded-[14px]" />
          <span className="min-w-0">
            <span className="block truncate text-[14px] font-semibold">{place(p.id).name}</span>
            <span className="block truncate text-[12px] text-muted">{tk(`categories.${p.category}Short`)}</span>
          </span>
        </Link>
        {live && <Votes id={placeId} />}
        {extra}
      </div>
    );
  };

  const copyToMine = () => {
    const id = createTrip({ name: trip.name, destinationId: trip.destinationId, start: trip.start, end: trip.end });
    for (const i of trip.items) addToTrip(id, i.placeId, i.day);
    toast.success(t('shared.copied'));
    window.location.href = `/trip/?id=${id}`;
  };

  const accept = async (placeId: string) => {
    if (!code) return;
    await act(() => republish(code, { ...trip, items: [...trip.items, { placeId, day: 0 }] }));
  };

  return (
    <div className="pb-28">
      <TopBar title={t('shared.title')} />
      <div className="px-5">
        <p className="text-[13px] font-semibold text-muted">{d ? dest(d.id).name : ''}</p>
        <h1 className="text-[28px] font-bold leading-tight tracking-[-0.03em]">{trip.name}</h1>
        <p className="mt-1 text-[14px] text-muted">
          {f.date(trip.start)} — {f.date(trip.end)}
        </p>
        {!live && <p className="mt-3 rounded-2xl bg-amber-50 p-3.5 text-[13px] leading-snug text-ink-2">{t('shared.snapshot')}</p>}
        {live && <p className="mt-3 rounded-2xl bg-brand-50 p-3.5 text-[13px] leading-snug text-ink-2">{owner ? t('shared.ownerHint') : t('shared.guestHint')}</p>}

        {Array.from({ length: days }, (_, day) => {
          const items = trip.items.filter((i) => i.day === day);
          if (!items.length) return null;
          return (
            <section key={day} className="mt-5">
              <h2 className="text-[16px] font-bold">{t('plan.day', { n: day + 1 })}</h2>
              <div className="mt-2 grid gap-2">{items.map((i) => row(i.placeId))}</div>
            </section>
          );
        })}
        {trip.items.length === 0 && <Empty icon={<CalendarPlus className="size-6" />} title={t('shared.emptyTitle')} text="" />}

        {live && (
          <section className="mt-7">
            <h2 className="text-[16px] font-bold">{t('shared.suggestions')}</h2>
            <div className="mt-2 grid gap-2">
              {view!.suggestions.map((s) =>
                row(
                  s.placeId,
                  owner && (
                    <button aria-label={t('shared.accept')} onClick={() => void accept(s.placeId)} className="press grid size-9 shrink-0 place-items-center rounded-full bg-mint text-white">
                      <Check className="size-4" />
                    </button>
                  ),
                ),
              )}
              {view!.suggestions.length === 0 && <p className="text-[13px] text-muted">{t('shared.noSuggestions')}</p>}
            </div>
            <div className="mt-3 flex gap-2">
              <select aria-label={t('shared.suggest')} value={pick} onChange={(e) => setPick(e.target.value)} className="h-11 min-w-0 flex-1 rounded-2xl bg-white px-3 text-[14px] font-semibold shadow-soft outline-none ring-1 ring-line-soft focus:ring-2 focus:ring-brand">
                <option value="">{t('shared.suggest')}</option>
                {candidates.map((p) => (
                  <option key={p.id} value={p.id}>
                    {place(p.id).name}
                  </option>
                ))}
              </select>
              <Button disabled={!pick} onClick={() => code && pick && (void act(() => suggest(code, pick)), setPick(''))}>
                {t('shared.add')}
              </Button>
            </div>
          </section>
        )}

        <Button variant="secondary" className="mt-7 w-full" onClick={copyToMine}>
          <CalendarPlus className="size-4" /> {t('shared.copy')}
        </Button>
      </div>
    </div>
  );
}

export default function SharedTripPage() {
  return (
    <Suspense>
      <Shared />
    </Suspense>
  );
}
