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
import { SaveButton } from '../save-button';
import { AvatarStack, Rating } from '../ui';
import { KindDot, KindPill } from './kind-ui';
import { KIND, placeKind, tint, type PinKind } from './kinds';

/** Card chrome shared by every kind: a faint wash of the kind's colour, a gradient edge, a coloured glow when active. */
function Shell({ kind, active, onFocus, children }: { kind: PinKind; active: boolean; onFocus: () => void; children: React.ReactNode }) {
  const k = KIND[kind];
  return (
    <div
      onClick={onFocus}
      className={cn('relative flex gap-3 overflow-hidden rounded-[26px] p-2.5 pl-3.5 transition-shadow', !active && 'shadow-float')}
      style={{
        background: `linear-gradient(120deg, ${tint(k.color, 13)} 0%, #ffffff 58%)`,
        boxShadow: active ? `0 0 0 2px ${k.color}, 0 14px 30px -8px color-mix(in srgb, ${k.color} 60%, transparent)` : undefined,
      }}
    >
      <span aria-hidden className="absolute bottom-3.5 left-0 top-3.5 w-1 rounded-r-full" style={{ background: k.gradient }} />
      {children}
    </div>
  );
}

/** Photo with the kind's glyph pinned to its corner — the same badge the pin on the map wears. */
function CardPhoto({ kind, children }: { kind: PinKind; children: React.ReactNode }) {
  return (
    <div className="relative shrink-0">
      {children}
      <KindDot kind={kind} size={28} className="absolute -right-1.5 -top-1.5" />
    </div>
  );
}

export function MapCard({ id, active, onFocus }: { id: string; active: boolean; onFocus: () => void }) {
  const meetups = useAllMeetups();
  const joined = useApp((s) => s.joined.includes(id));
  const toggleJoin = useApp((s) => s.toggleJoin);
  const { t, f, item, meetupText } = useI18n();
  const meetup = meetups.find((m) => m.id === id);
  const { routeHere, addToRoute, inRoute } = useRouteActions();

  if (meetup) {
    const text = meetupText(meetup);
    const attendees = joined ? ['me', ...meetup.attendeeIds] : meetup.attendeeIds;
    const k = KIND.meetup;
    return (
      <Shell kind="meetup" active={active} onFocus={onFocus}>
        <CardPhoto kind="meetup">
          <Link href={`/meetup/?id=${meetup.id}`} className="block">
            <Photo id={meetup.image} alt={text.title} width={260} className="h-[104px] w-[96px]" rounded="rounded-[18px]" />
          </Link>
        </CardPhoto>
        <div className="flex min-w-0 flex-1 flex-col py-0.5 pr-1">
          <Link href={`/meetup/?id=${meetup.id}`} className="truncate text-[16px] font-bold tracking-[-0.02em]">
            {text.title}
          </Link>
          <p className="mt-0.5 flex items-center gap-1 truncate text-[12px] text-muted">
            <MapPin className="size-3 shrink-0" />
            {text.placeName}
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-[12px] font-medium text-ink-2">
            <Clock className="size-3 shrink-0" style={{ color: k.color }} />
            {f.when(meetupStart(meetup))}
          </p>
          <div className="mt-auto flex items-center justify-between gap-2">
            <AvatarStack ids={attendees} max={3} size={24} />
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleJoin(meetup.id);
              }}
              className={cn('press h-8 shrink-0 rounded-full px-4 text-[13px] font-semibold transition-colors', joined ? 'bg-mint-50 text-mint' : 'text-white')}
              style={joined ? undefined : { background: k.gradient, boxShadow: `0 6px 14px -4px color-mix(in srgb, ${k.color} 70%, transparent)` }}
            >
              {joined ? t('meetups.going') : t('meetups.join')}
            </button>
          </div>
        </div>
      </Shell>
    );
  }

  const ref = resolveItem(id);
  if (!ref) return null;
  const text = item(id);
  const place = ref.kind === 'place' ? placeById(id) : undefined;
  const kind: PinKind = place ? placeKind(place) : 'city';
  const k = KIND[kind];
  return (
    <Shell kind={kind} active={active} onFocus={onFocus}>
      <CardPhoto kind={kind}>
        <Link href={ref.href} className="block">
          <Photo id={ref.image} alt={text.name} width={260} className="h-[104px] w-[104px]" rounded="rounded-[18px]" />
        </Link>
      </CardPhoto>
      <div className="flex min-w-0 flex-1 flex-col py-0.5">
        <div className="flex items-start gap-1">
          <Link href={ref.href} className="min-w-0 flex-1">
            <p className="truncate text-[16px] font-bold tracking-[-0.02em]">{text.name}</p>
            <Rating value={ref.rating} count={ref.reviews} className="mt-0.5" />
          </Link>
          <SaveButton id={ref.id} className="-mr-1 -mt-1" />
        </div>
        <p className="mt-0.5 truncate text-[12px] text-muted">{text.subtitle}</p>
        <div className="mt-auto flex items-center gap-1.5">
          <KindPill kind={kind} className="shrink-0" />
          <span className="flex-1" />
          {ref.kind === 'place' && (
            <>
              <button
                aria-label={t('spots.addToRoute')}
                onClick={(e) => {
                  e.stopPropagation();
                  addToRoute(id);
                }}
                className="press grid size-8 place-items-center rounded-full bg-white text-ink-2 shadow-soft ring-1 ring-line-soft"
              >
                {inRoute(id) ? <Route className="size-4 text-[#2563eb]" /> : <Plus className="size-4" />}
              </button>
              <button
                aria-label={t('mapx.route')}
                onClick={(e) => {
                  e.stopPropagation();
                  void routeHere(id);
                }}
                className="press grid size-8 place-items-center rounded-full text-white"
                style={{ background: k.gradient, boxShadow: `0 6px 14px -4px color-mix(in srgb, ${k.color} 75%, transparent)` }}
              >
                <Navigation className="size-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </Shell>
  );
}
