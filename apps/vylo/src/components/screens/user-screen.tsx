'use client';

import { BadgeCheck, MapPin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { GuideCard, MeetupRow, ReviewCard } from '@/components/cards';
import { Photo } from '@/components/photo';
import { Avatar, BackButton, Button } from '@/components/ui';
import { guides, meetups, reviews, stories, userById } from '@/data/social';
import { countryName, flag } from '@/lib/countries';
import { compact, plural } from '@/lib/utils';
import { useApp } from '@/store/app';

export function UserScreen({ id }: { id: string }) {
  const u = userById(id)!;
  const following = useApp((s) => s.following.includes(id));
  const toggleFollow = useApp((s) => s.toggleFollow);
  const cover = stories.find((s) => s.userId === id)?.image ?? '1501785888041-af3ef285b470';
  const theirGuides = guides.filter((g) => g.authorId === id);
  const theirReviews = reviews.filter((r) => r.authorId === id);
  const hosted = meetups.filter((m) => m.hostId === id);

  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-16">
      <div className="relative h-[220px]">
        <Photo id={cover} alt="" width={900} className="absolute inset-0" />
        <div className="photo-scrim-top absolute inset-0" />
        <div className="pt-safe absolute inset-x-0 top-0 flex h-14 items-center px-4">
          <BackButton tone="glass" />
        </div>
      </div>
      <div className="relative -mt-12 px-5">
        <Avatar userId={id} size={96} className="rounded-full ring-4 ring-canvas" />
        <h1 className="mt-3 flex items-center gap-1.5 text-[24px] font-bold tracking-[-0.03em]">
          {u.name} {u.verified && <BadgeCheck className="size-6 fill-brand text-white" />}
        </h1>
        <p className="text-[14px] text-muted">@{u.handle}</p>
        <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">{u.bio}</p>
        <p className="mt-2 flex items-center gap-1 text-[13px] text-muted">
          <MapPin className="size-3.5" /> {u.home}
        </p>
        <div className="mt-4 grid grid-cols-3 rounded-[22px] bg-white py-3.5 shadow-soft">
          {[
            [u.trips, 'Поездок'],
            [u.places, 'Мест'],
            [compact(u.followers + (following ? 1 : 0)), 'Читателей'],
          ].map(([v, l]) => (
            <div key={String(l)} className="text-center">
              <p className="text-[19px] font-bold tracking-[-0.02em]">{v}</p>
              <p className="text-[12px] text-muted">{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-[1fr_auto] gap-2.5">
          <Button variant={following ? 'soft' : 'primary'} onClick={() => toggleFollow(id)}>
            {following ? 'Вы подписаны' : 'Подписаться'}
          </Button>
          <Button variant="secondary" onClick={() => toast('Личные сообщения появятся в следующем обновлении', { description: 'А пока — пишите в чатах встреч' })}>
            <MessageCircle className="size-4" />
          </Button>
        </div>

        <h2 className="mt-7 text-[17px] font-bold">
          {u.countries.length} {plural(u.countries.length, ['страна', 'страны', 'стран'])} в паспорте
        </h2>
        <div className="no-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5">
          {u.countries.map((c) => (
            <span key={c} className="flex shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-medium shadow-soft">
              {flag(c)} {countryName(c)}
            </span>
          ))}
        </div>

        {theirGuides.length > 0 && (
          <>
            <h2 className="mt-7 text-[17px] font-bold">Гиды</h2>
            <div className="mt-3 grid gap-3">
              {theirGuides.map((g) => (
                <GuideCard key={g.id} g={g} />
              ))}
            </div>
          </>
        )}
        {hosted.length > 0 && (
          <>
            <h2 className="mt-7 text-[17px] font-bold">Организует встречи</h2>
            <div className="mt-3 grid gap-2.5">
              {hosted.map((m) => (
                <MeetupRow key={m.id} m={m} />
              ))}
            </div>
          </>
        )}
        {theirReviews.length > 0 && (
          <>
            <h2 className="mt-7 text-[17px] font-bold">Отзывы</h2>
            <div className="mt-3 grid gap-3">
              {theirReviews.map((r) => (
                <ReviewCard key={r.id} r={r} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
