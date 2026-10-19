'use client';

import { motion } from 'framer-motion';
import { Bookmark, CalendarDays, Plane, Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { PlaceRow } from '@/components/cards';
import { Photo } from '@/components/photo';
import { Button, Empty, PageTitle, ProgressBar, Segmented } from '@/components/ui';
import { resolveItem } from '@/data';
import { destinationById } from '@/data/catalog';
import { useCollectionName } from '@/components/global-sheets';
import { useI18n } from '@/i18n/use';
import { cn, daysBetween, todayKey } from '@/lib/utils';
import { useApp, type Collection } from '@/store/app';
import { useUI } from '@/store/ui';

type Tab = 'collections' | 'trips' | 'all';

function Mosaic({ c }: { c: Collection }) {
  const { t } = useI18n();
  const name = useCollectionName()(c);
  const imgs = c.itemIds.map((id) => resolveItem(id)?.image).filter(Boolean) as string[];
  return (
    <Link href={`/collection/?id=${c.id}`} className="press block">
      <div className={cn('grid h-[150px] gap-1 overflow-hidden rounded-[22px] bg-surface-2', imgs.length >= 3 ? 'grid-cols-2 grid-rows-2' : 'grid-cols-1')}>
        {imgs.length === 0 && <div className="grid place-items-center text-[40px]">{c.emoji}</div>}
        {imgs.length > 0 && imgs.length < 3 && <Photo id={imgs[0]!} alt={name} width={400} className="h-full" />}
        {imgs.length >= 3 && (
          <>
            <Photo id={imgs[0]!} alt={name} width={300} className="row-span-2 h-full" />
            <Photo id={imgs[1]!} alt={name} width={200} className="h-full" />
            <Photo id={imgs[2]!} alt={name} width={200} className="h-full" />
          </>
        )}
      </div>
      <p className="mt-2 truncate text-[15px] font-semibold">
        {c.emoji} {name}
      </p>
      <p className="text-[12px] text-muted">
        {t('common.places', { count: c.itemIds.length })}
      </p>
    </Link>
  );
}

export default function SavedPage() {
  const [tab, setTab] = useState<Tab>('collections');
  const { collections, trips, savedIds } = useApp();
  const openSheet = useUI((s) => s.openSheet);
  const { t, f } = useI18n();

  return (
    <div className="scroll-area pb-tabbar absolute inset-0">
      <PageTitle title={t('saved.title')} subtitle={`${t('common.places', { count: savedIds.length })} · ${t('common.trips', { count: trips.length })}`} />
      <div className="px-5 pt-4">
        <Segmented
          layoutId="saved-tab"
          value={tab}
          onChange={setTab}
          options={[
            { value: 'collections', label: t('saved.collections') },
            { value: 'trips', label: t('saved.trips') },
            { value: 'all', label: t('saved.allPlaces') },
          ]}
        />
      </div>

      <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="px-5 pt-5">
        {tab === 'collections' && (
          <div className="grid grid-cols-2 gap-x-3 gap-y-5">
            {collections.map((c) => (
              <Mosaic key={c.id} c={c} />
            ))}
            <button
              onClick={() => openSheet({ type: 'new-collection' })}
              className="press flex h-[150px] flex-col items-center justify-center gap-2 rounded-[22px] border-2 border-dashed border-brand/30 text-brand-600"
            >
              <Plus className="size-7" />
              <span className="text-[14px] font-semibold">{t('saved.newCollection')}</span>
            </button>
          </div>
        )}

        {tab === 'trips' && (
          <div className="grid gap-3">
            {trips.map((trip) => {
              const d = destinationById(trip.destinationId);
              const until = daysBetween(todayKey(), trip.start);
              const nights = Math.max(1, daysBetween(trip.start, trip.end));
              const done = trip.checklist.filter((c) => c.done).length;
              return (
                <Link key={trip.id} href={`/trip/?id=${trip.id}`} className="press overflow-hidden rounded-[26px] bg-white shadow-card">
                  <div className="relative h-36">
                    <Photo id={d?.image ?? ''} alt={trip.name} width={800} className="absolute inset-0" tint={d?.theme.accent} />
                    <div className="photo-scrim absolute inset-0" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[12px] font-bold text-ink">
                      {until > 0 ? t('saved.inDays', { count: until }) : until === 0 ? t('saved.today') : t('saved.onTheRoad')}
                    </span>
                    <div className="absolute bottom-3 left-4 text-white">
                      <p className="text-[20px] font-bold tracking-[-0.02em]">{trip.name}</p>
                      <p className="flex items-center gap-1 text-[12px] text-white/85">
                        <CalendarDays className="size-3.5" /> {f.date(trip.start)} — {f.date(trip.end)} · {t('common.nights', { count: nights })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4">
                    <div className="flex-1">
                      <div className="flex justify-between text-[12px] font-semibold text-muted">
                        <span>{t('saved.readiness')}</span>
                        <span>
                          {done}/{trip.checklist.length}
                        </span>
                      </div>
                      <ProgressBar value={done / Math.max(1, trip.checklist.length)} className="mt-1.5" color="bg-mint" />
                    </div>
                    <span className="rounded-full bg-brand-50 px-3 py-1.5 text-[12px] font-bold text-brand-600">{t('common.places', { count: trip.items.length })}</span>
                  </div>
                </Link>
              );
            })}
            {trips.length === 0 ? (
              <Empty
                icon={<Plane className="size-7" />}
                title={t('saved.emptyTripsTitle')}
                text={t('saved.emptyTripsText')}
                action={<Button onClick={() => openSheet({ type: 'trip' })}>{t('saved.newTrip')}</Button>}
              />
            ) : (
              <Button variant="soft" onClick={() => openSheet({ type: 'trip' })}>
                <Plus className="size-4" /> {t('saved.newTrip')}
              </Button>
            )}
          </div>
        )}

        {tab === 'all' && (
          <div className="grid gap-2.5">
            {savedIds.map((id) => (
              <PlaceRow key={id} id={id} />
            ))}
            {savedIds.length === 0 && (
              <Empty
                icon={<Bookmark className="size-7" />}
                title={t('saved.emptyPlacesTitle')}
                text={t('saved.emptyPlacesText')}
                action={
                  <Link href="/map/">
                    <Button>{t('saved.openMap')}</Button>
                  </Link>
                }
              />
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
