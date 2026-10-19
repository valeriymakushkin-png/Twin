'use client';

import { Clock, MapPin, Navigation, Plus, Route } from 'lucide-react';
import Link from 'next/link';
import { resolveItem } from '@/data';
import { placeById } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { cn } from '@/lib/utils';
import { meetupStart, useAllMeetups, useApp } from '@/store/app';
import { Photo } from '../photo';
import { useRouteActions } from '../route-actions';
import { SpotBadge } from '../spot-badge';
import { SaveButton } from '../save-button';
import { AvatarStack, Rating, Tag } from '../ui';

export function MapCard({ id, active, onFocus }: { id: string; active: boolean; onFocus: () => void }) {
  const meetups = useAllMeetups();
  const joined = useApp((s) => s.joined.includes(id));
  const toggleJoin = useApp((s) => s.toggleJoin);
  const { t, tk, f, item, meetupText } = useI18n();
  const meetup = meetups.find((m) => m.id === id);
  const { routeHere, addToRoute, inRoute } = useRouteActions();
  const shell = cn('flex gap-3 rounded-[26px] bg-white p-2.5 shadow-float transition-shadow', active && 'ring-2 ring-brand/60');

  if (meetup) {
    const text = meetupText(meetup);
    const attendees = joined ? ['me', ...meetup.attendeeIds] : meetup.attendeeIds;
    return (
      <div className={shell} onClick={onFocus}>
        <Link href={`/meetup/?id=${meetup.id}`} className="shrink-0">
          <Photo id={meetup.image} alt={text.title} width={260} className="h-[104px] w-[96px]" rounded="rounded-[18px]" />
        </Link>
        <div className="flex min-w-0 flex-1 flex-col py-0.5 pr-1">
          <Link href={`/meetup/?id=${meetup.id}`} className="truncate text-[16px] font-bold tracking-[-0.02em]">
            {text.title}
          </Link>
          <p className="mt-0.5 flex items-center gap-1 truncate text-[12px] text-muted">
            <MapPin className="size-3 shrink-0" />
            {text.placeName}
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-[12px] font-medium text-ink-2">
            <Clock className="size-3 shrink-0 text-pink" />
            {f.when(meetupStart(meetup))}
          </p>
          <div className="mt-auto flex items-center justify-between gap-2">
            <AvatarStack ids={attendees} max={3} size={24} />
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleJoin(meetup.id);
              }}
              className={cn('press h-8 shrink-0 rounded-full px-4 text-[13px] font-semibold transition-colors', joined ? 'bg-mint-50 text-mint' : 'bg-brand text-white shadow-brand')}
            >
              {joined ? t('meetups.going') : t('meetups.join')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const ref = resolveItem(id);
  if (!ref) return null;
  const text = item(id);
  return (
    <div className={shell} onClick={onFocus}>
      <Link href={ref.href} className="shrink-0">
        <Photo id={ref.image} alt={text.name} width={260} className="h-[104px] w-[104px]" rounded="rounded-[18px]" />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col py-0.5">
        <div className="flex items-start gap-1">
          <Link href={ref.href} className="min-w-0 flex-1">
            <p className="truncate text-[16px] font-bold tracking-[-0.02em]">{text.name}</p>
            <Rating value={ref.rating} count={ref.reviews} className="mt-0.5" />
          </Link>
          <SaveButton id={ref.id} className="-mr-1 -mt-1" />
        </div>
        <p className="mt-0.5 truncate text-[12px] text-muted">{text.subtitle}</p>
        {ref.kind === 'place' ? (
          <div className="mt-auto flex items-center gap-1.5">
            {placeById(id)?.spot ? <SpotBadge spot={placeById(id)!.spot!} /> : <Tag>{tk(`tags.${ref.tags[0] ?? 'photo'}`)}</Tag>}
            <span className="flex-1" />
            <button
              aria-label={t('spots.addToRoute')}
              onClick={(e) => {
                e.stopPropagation();
                addToRoute(id);
              }}
              className="press grid size-8 place-items-center rounded-full bg-surface-2 text-ink-2"
            >
              {inRoute(id) ? <Route className="size-4 text-[#2563eb]" /> : <Plus className="size-4" />}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                void routeHere(id);
              }}
              className="press flex h-8 items-center gap-1 rounded-full bg-[#2563eb] px-3 text-[12px] font-semibold text-white"
            >
              <Navigation className="size-3.5" /> {t('mapx.route')}
            </button>
          </div>
        ) : (
          <div className="mt-auto flex gap-1.5 overflow-hidden">
            {ref.tags.slice(0, 2).map((tag) => (
              <Tag key={tag}>{tk(`tags.${tag}`)}</Tag>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
