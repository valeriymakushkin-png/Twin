'use client';

import { motion } from 'framer-motion';
import { Clock, Heart, Lock, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { resolveItem } from '@/data';
import { destinationById } from '@/data/destinations';
import { userById } from '@/data/social';
import type { Destination, Guide, Meetup, Review } from '@/data/types';
import { useI18n } from '@/i18n/use';
import { cn } from '@/lib/utils';
import { meetupStart, useApp } from '@/store/app';
import { Photo } from './photo';
import { SaveButton } from './save-button';
import { Avatar, AvatarStack, DemoBadge, Rating, UserName } from './ui';

export function DestinationCard({ d, className }: { d: Destination; className?: string }) {
  const { dest, country } = useI18n();
  return (
    <Link href={`/d/${d.id}/`} className={cn('press relative block h-[200px] w-[150px] shrink-0 overflow-hidden rounded-[24px] shadow-card', className)}>
      <Photo id={d.image} alt={dest(d.id).name} width={400} className="absolute inset-0" tint={d.theme.accent} />
      <div className="photo-scrim absolute inset-0" />
      <span className="absolute left-3 top-3 h-1 w-8 rounded-full" style={{ background: `linear-gradient(90deg, ${d.theme.accent}, ${d.theme.accent2})` }} />
      <SaveButton id={d.id} tone="glass" size={16} className="absolute right-2.5 top-2.5 size-8" />
      <div className="absolute inset-x-3 bottom-3 text-white">
        <p className="text-[17px] font-bold leading-tight tracking-[-0.02em]">{dest(d.id).name}</p>
        <p className="mt-0.5 text-[12px] text-white/80">{country(d.countryCode)}</p>
      </div>
    </Link>
  );
}

export function GuideCard({ g, className }: { g: Guide; className?: string }) {
  const { t, f, guide, user } = useI18n();
  const liked = useApp((s) => s.liked.includes(g.id));
  const toggleLike = useApp((s) => s.toggleLike);
  const text = guide(g.id);
  return (
    <Link href={`/guide/${g.id}/`} className={cn('press relative block h-[168px] overflow-hidden rounded-[26px] shadow-card', className)}>
      <Photo id={g.image} alt={text.title} width={800} className="absolute inset-0" />
      <div className="photo-scrim absolute inset-0" />
      <div className="absolute left-3 top-3 flex gap-1.5">
        <span className="glass-dark flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white ring-1 ring-white/20">
          <Clock className="size-3" /> {t('common.readMinsShort', { count: g.readMins })}
        </span>
        {g.plus && (
          <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[#fcd34d] to-[#f59e0b] px-2.5 py-1 text-[11px] font-black text-[#451a03]">
            <Sparkles className="size-3" /> {t('plus.exclusive')}
          </span>
        )}
      </div>
      <div className="absolute inset-x-4 bottom-3.5 text-white">
        <p className="text-[18px] font-bold leading-tight tracking-[-0.02em]">{text.title}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[12px] text-white/90">
            <Avatar userId={g.authorId} size={20} /> {user(g.authorId).name.split(' ')[0]}
          </span>
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
            {f.compact(g.likes + (liked ? 1 : 0))}
          </button>
        </div>
      </div>
    </Link>
  );
}

export function MeetupRow({ m, className }: { m: Meetup; className?: string }) {
  const joined = useApp((s) => s.joined.includes(m.id));
  const toggleJoin = useApp((s) => s.toggleJoin);
  const { t, f, country, meetupText, dest } = useI18n();
  const d2 = destinationById(m.destinationId);
  const text = meetupText(m);
  const attendees = m.createdByMe || joined ? ['me', ...m.attendeeIds] : m.attendeeIds;
  return (
    <Link href={`/meetup/?id=${m.id}`} className={cn('press flex gap-3 rounded-[24px] bg-white p-2.5 shadow-card', className)}>
      <Photo id={m.image} alt={text.title} width={240} className="h-[92px] w-[88px] shrink-0" rounded="rounded-[18px]" />
      <div className="flex min-w-0 flex-1 flex-col py-0.5 pr-1">
        <p className="flex items-center gap-1 truncate text-[15px] font-bold tracking-[-0.01em]">
          {m.private && <Lock className="size-3.5 shrink-0 text-amber" />}
          <span className="truncate">{text.title}</span>
        </p>
        <p className="mt-0.5 flex items-center gap-1 truncate text-[12px] text-muted">
          <MapPin className="size-3 shrink-0" />
          {d2 ? `${dest(d2.id).name}, ${country(d2.countryCode)}` : text.placeName}
        </p>
        <p className="text-[12px] font-medium text-ink-2">{f.when(meetupStart(m))}</p>
        <div className="mt-auto flex items-center justify-between gap-2">
          <AvatarStack ids={attendees} max={3} size={22} />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (!m.createdByMe) toggleJoin(m.id);
            }}
            className={cn('press h-7 shrink-0 rounded-full px-3.5 text-[12px] font-semibold ring-1 transition-colors', joined ? 'bg-mint-50 text-mint ring-mint/20' : 'bg-white text-brand-600 ring-brand/30')}
          >
            {m.createdByMe ? t('meetups.youHost') : joined ? `${t('meetups.going')} ✓` : t('meetups.joinShort')}
          </button>
        </div>
      </div>
    </Link>
  );
}

export function ReviewCard({ r, showTarget = true, className }: { r: Review; showTarget?: boolean; className?: string }) {
  const { c, t, f, item } = useI18n();
  const author = r.authorId === 'me' ? null : userById(r.authorId);
  const liked = useApp((s) => s.liked.includes(r.id));
  const toggleLike = useApp((s) => s.toggleLike);
  const target = resolveItem(r.targetId);
  const text = r.text ?? (c.reviews as Record<string, string>)[r.id] ?? '';
  return (
    <div className={cn('rounded-[24px] bg-white p-4 shadow-card', className)}>
      <div className="flex items-center gap-2.5">
        <Link href={author ? `/u/${author.id}/` : '/profile/'}>
          <Avatar userId={r.authorId} size={38} />
        </Link>
        <div className="min-w-0 flex-1">
          <UserName userId={r.authorId} className="text-[14px] font-semibold" />
          <p className="flex items-center gap-1.5 text-[12px] text-muted">
            {f.agoDays(r.daysAgo)}
            {author && <DemoBadge />}
          </p>
        </div>
        <Rating value={r.rating} />
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{text}</p>
      {r.photos?.length ? (
        <div className="mt-3 flex gap-2">
          {r.photos.map((p) => (
            <Photo key={p} id={p} alt="" width={300} className="h-24 flex-1" rounded="rounded-2xl" />
          ))}
        </div>
      ) : null}
      <div className="mt-3 flex items-center justify-between gap-2">
        {showTarget && target ? (
          <Link href={target.href} className="flex min-w-0 items-center gap-1.5 text-[12px] font-semibold text-brand-600">
            <MapPin className="size-3.5 shrink-0" />
            <span className="truncate">{item(target.id).name}</span>
          </Link>
        ) : (
          <span />
        )}
        <button onClick={() => toggleLike(r.id)} className="press flex shrink-0 items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1.5 text-[12px] font-semibold text-ink-2">
          <motion.span key={String(liked)} initial={{ scale: 0.4 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 600, damping: 14 }}>
            <Heart className={cn('size-3.5', liked && 'fill-rose text-rose')} />
          </motion.span>
          {r.likes + (liked ? 1 : 0)}
        </button>
      </div>
      {!author && <span className="sr-only">{t('common.you')}</span>}
    </div>
  );
}

export function PlaceRow({ id, className, right }: { id: string; className?: string; right?: React.ReactNode }) {
  const { item } = useI18n();
  const ref = resolveItem(id);
  if (!ref) return null;
  const text = item(id);
  return (
    <Link href={ref.href} className={cn('press flex items-center gap-3 rounded-[22px] bg-white p-2.5 shadow-soft', className)}>
      <Photo id={ref.image} alt={text.name} width={200} className="size-[68px] shrink-0" rounded="rounded-[16px]" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[15px] font-semibold">{text.name}</p>
        <p className="truncate text-[12px] text-muted">{text.subtitle}</p>
        <Rating value={ref.rating} count={ref.reviews} className="mt-1" />
      </div>
      {right ?? <SaveButton id={ref.id} />}
    </Link>
  );
}
