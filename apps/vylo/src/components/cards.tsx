'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Clock, Heart, MapPin } from 'lucide-react';
import Link from 'next/link';
import { resolveItem } from '@/data';
import { destinationById } from '@/data/destinations';
import { userById } from '@/data/social';
import type { Destination, Guide, Meetup, Review } from '@/data/types';
import { cn, compact, formatWhen, timeAgo } from '@/lib/utils';
import { meetupStart, useApp } from '@/store/app';
import { Photo } from './photo';
import { SaveButton } from './save-button';
import { Avatar, AvatarStack, Rating } from './ui';

export function DestinationCard({ d, className }: { d: Destination; className?: string }) {
  return (
    <Link href={`/d/${d.id}/`} className={cn('press relative block h-[200px] w-[150px] shrink-0 overflow-hidden rounded-[24px] shadow-card', className)}>
      <Photo id={d.image} alt={d.name} width={400} className="absolute inset-0" />
      <div className="photo-scrim absolute inset-0" />
      <SaveButton id={d.id} tone="glass" size={16} className="absolute right-2.5 top-2.5 size-8" />
      <div className="absolute inset-x-3 bottom-3 text-white">
        <p className="text-[17px] font-bold leading-tight tracking-[-0.02em]">{d.name}</p>
        <p className="mt-0.5 text-[12px] text-white/80">{d.country}</p>
      </div>
    </Link>
  );
}

export function GuideCard({ g, className }: { g: Guide; className?: string }) {
  const author = userById(g.authorId);
  const liked = useApp((s) => s.liked.includes(g.id));
  const toggleLike = useApp((s) => s.toggleLike);
  return (
    <Link href={`/guide/${g.id}/`} className={cn('press relative block h-[168px] overflow-hidden rounded-[26px] shadow-card', className)}>
      <Photo id={g.image} alt={g.title} width={800} className="absolute inset-0" />
      <div className="photo-scrim absolute inset-0" />
      <span className="glass-dark absolute left-3 top-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white ring-1 ring-white/20">
        <Clock className="size-3" /> {g.readMins} мин
      </span>
      <div className="absolute inset-x-4 bottom-3.5 text-white">
        <p className="text-[18px] font-bold leading-tight tracking-[-0.02em]">{g.title}</p>
        <div className="mt-2 flex items-center justify-between">
          {author && (
            <span className="flex items-center gap-1.5 text-[12px] text-white/90">
              <Avatar userId={author.id} size={20} /> {author.name.split(' ')[0]}
            </span>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleLike(g.id);
            }}
            className="flex items-center gap-1 text-[12px] font-semibold"
          >
            <motion.span key={String(liked)} initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
              <Heart className={cn('size-4', liked && 'fill-rose text-rose')} />
            </motion.span>
            {compact(g.likes + (liked ? 1 : 0))}
          </button>
        </div>
      </div>
    </Link>
  );
}

export function MeetupRow({ m, className }: { m: Meetup; className?: string }) {
  const joined = useApp((s) => s.joined.includes(m.id));
  const toggleJoin = useApp((s) => s.toggleJoin);
  const dest = destinationById(m.destinationId);
  const attendees = joined && !m.createdByMe ? ['me', ...m.attendeeIds] : m.createdByMe ? ['me', ...m.attendeeIds] : m.attendeeIds;
  return (
    <Link href={`/meetup/?id=${m.id}`} className={cn('press flex gap-3 rounded-[24px] bg-white p-2.5 shadow-card', className)}>
      <Photo id={m.image} alt={m.title} width={240} className="h-[92px] w-[88px] shrink-0" rounded="rounded-[18px]" />
      <div className="flex min-w-0 flex-1 flex-col py-0.5 pr-1">
        <p className="truncate text-[15px] font-bold tracking-[-0.01em]">{m.title}</p>
        <p className="mt-0.5 flex items-center gap-1 truncate text-[12px] text-muted">
          <MapPin className="size-3 shrink-0" />
          {dest ? `${dest.name}, ${dest.country}` : m.placeName}
        </p>
        <p className="text-[12px] font-medium text-ink-2">{formatWhen(meetupStart(m))}</p>
        <div className="mt-auto flex items-center justify-between">
          <AvatarStack ids={attendees} max={3} size={22} />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (!m.createdByMe) toggleJoin(m.id);
            }}
            className={cn(
              'press h-7 rounded-full px-3.5 text-[12px] font-semibold ring-1 transition-colors',
              joined ? 'bg-mint-50 text-mint ring-mint/20' : 'bg-white text-brand-600 ring-brand/30',
            )}
          >
            {m.createdByMe ? 'Вы хост' : joined ? 'Вы идёте ✓' : 'Пойду'}
          </button>
        </div>
      </div>
    </Link>
  );
}

export function ReviewCard({ r, showTarget = true, className }: { r: Review; showTarget?: boolean; className?: string }) {
  const author = r.authorId === 'me' ? null : userById(r.authorId);
  const profile = useApp((s) => s.profile);
  const liked = useApp((s) => s.liked.includes(r.id));
  const toggleLike = useApp((s) => s.toggleLike);
  const target = resolveItem(r.targetId);
  return (
    <div className={cn('rounded-[24px] bg-white p-4 shadow-card', className)}>
      <div className="flex items-center gap-2.5">
        <Link href={author ? `/u/${author.id}/` : '/profile/'}>
          <Avatar userId={r.authorId} size={38} />
        </Link>
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-1 text-[14px] font-semibold">
            {author?.name ?? profile.name}
            {author?.verified && <BadgeCheck className="size-4 fill-brand text-white" />}
          </p>
          <p className="text-[12px] text-muted">{timeAgo(r.daysAgo)}</p>
        </div>
        <Rating value={r.rating} />
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{r.text}</p>
      {r.photos?.length ? (
        <div className="mt-3 flex gap-2">
          {r.photos.map((p) => (
            <Photo key={p} id={p} alt="" width={300} className="h-24 flex-1" rounded="rounded-2xl" />
          ))}
        </div>
      ) : null}
      <div className="mt-3 flex items-center justify-between">
        {showTarget && target ? (
          <Link href={target.href} className="flex min-w-0 items-center gap-1.5 text-[12px] font-semibold text-brand-600">
            <MapPin className="size-3.5 shrink-0" />
            <span className="truncate">{target.name}</span>
          </Link>
        ) : (
          <span />
        )}
        <button onClick={() => toggleLike(r.id)} className="press flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1.5 text-[12px] font-semibold text-ink-2">
          <motion.span key={String(liked)} initial={{ scale: 0.4 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 600, damping: 14 }}>
            <Heart className={cn('size-3.5', liked && 'fill-rose text-rose')} />
          </motion.span>
          {r.likes + (liked ? 1 : 0)} · Полезно
        </button>
      </div>
    </div>
  );
}

export function PlaceRow({ id, className, right }: { id: string; className?: string; right?: React.ReactNode }) {
  const item = resolveItem(id);
  if (!item) return null;
  return (
    <Link href={item.href} className={cn('press flex items-center gap-3 rounded-[22px] bg-white p-2.5 shadow-soft', className)}>
      <Photo id={item.image} alt={item.name} width={200} className="size-[68px] shrink-0" rounded="rounded-[16px]" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[15px] font-semibold">{item.name}</p>
        <p className="truncate text-[12px] text-muted">{item.subtitle}</p>
        <Rating value={item.rating} count={item.reviews} className="mt-1" />
      </div>
      {right ?? <SaveButton id={item.id} />}
    </Link>
  );
}
