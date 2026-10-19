'use client';

import { MapPin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { GuideCard, MeetupRow, ReviewCard } from '@/components/cards';
import { Photo } from '@/components/photo';
import { Avatar, BackButton, Button, DemoBadge, UserName } from '@/components/ui';
import { isHiddenReview } from '@/data/catalog';
import { guides, meetups, reviews, stories, userById } from '@/data/social';
import { useI18n } from '@/i18n/use';
import { flag } from '@/lib/countries';
import { useApp } from '@/store/app';

export function UserScreen({ id }: { id: string }) {
  const u = userById(id)!;
  const following = useApp((s) => s.following.includes(id));
  const toggleFollow = useApp((s) => s.toggleFollow);
  const { t, tk, f, user, country } = useI18n();
  const text = user(id);
  const cover = stories.find((s) => s.userId === id)?.image ?? '6GzOuSeMmPw';
  const theirGuides = guides.filter((g) => g.authorId === id);
  const theirReviews = reviews.filter((r) => r.authorId === id && !isHiddenReview(r.id));
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
        <Avatar userId={id} size={96} className="ring-4 ring-canvas" />
        <h1 className="mt-3 text-[24px] font-bold tracking-[-0.03em]">
          <UserName userId={id} />
        </h1>
        <p className="flex items-center gap-2 text-[14px] text-muted">
          @{text.name.toLowerCase().replace(/\s+/g, '.')} <DemoBadge />
        </p>
        <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">{text.bio}</p>
        <p className="mt-2 flex items-center gap-1 text-[13px] text-muted">
          <MapPin className="size-3.5" /> {text.home}, {country(u.homeCountry)}
        </p>
        <div className="mt-4 grid grid-cols-3 rounded-[22px] bg-white py-3.5 shadow-soft">
          {[
            [f.number(u.trips), t('profile.statTrips')],
            [f.number(u.places), t('profile.statPlaces')],
            [f.compact(u.followers + (following ? 1 : 0)), t('discover.travelers')],
          ].map(([v, l]) => (
            <div key={String(l)} className="min-w-0 text-center">
              <p className="text-[19px] font-bold tracking-[-0.02em]">{v}</p>
              <p className="truncate px-1 text-[12px] text-muted">{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-[1fr_auto] gap-2.5">
          <Button variant={following ? 'soft' : 'primary'} onClick={() => toggleFollow(id)}>
            {following ? t('discover.following') : t('discover.follow')}
          </Button>
          <Button variant="secondary" aria-label={t('meetups.message')} onClick={() => toast(t('common.comingSoon'))}>
            <MessageCircle className="size-4" />
          </Button>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {u.style.map((s) => (
            <span key={s} className="rounded-full bg-brand-50 px-3 py-1 text-[12px] font-semibold text-brand-700">
              {tk(`tags.${s}`)}
            </span>
          ))}
        </div>

        <h2 className="mt-7 text-[17px] font-bold">{t('common.countries', { count: u.countries.length })}</h2>
        <div className="no-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5">
          {u.countries.map((c) => (
            <span key={c} className="flex shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-medium shadow-soft">
              {flag(c)} {country(c)}
            </span>
          ))}
        </div>

        {theirGuides.length > 0 && (
          <>
            <h2 className="mt-7 text-[17px] font-bold">{t('discover.tabGuides')}</h2>
            <div className="mt-3 grid gap-3">
              {theirGuides.map((g) => (
                <GuideCard key={g.id} g={g} />
              ))}
            </div>
          </>
        )}
        {hosted.length > 0 && (
          <>
            <h2 className="mt-7 text-[17px] font-bold">{t('meetups.title')}</h2>
            <div className="mt-3 grid gap-2.5">
              {hosted.map((m) => (
                <MeetupRow key={m.id} m={m} />
              ))}
            </div>
          </>
        )}
        {theirReviews.length > 0 && (
          <>
            <h2 className="mt-7 text-[17px] font-bold">{t('destination.reviews')}</h2>
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
