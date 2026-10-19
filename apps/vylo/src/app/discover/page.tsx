'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Bell, Lightbulb, Search } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { DestinationCard, GuideCard, MeetupRow, PlaceRow, ReviewCard } from '@/components/cards';
import { DailyPickCard, QuestStrip } from '@/components/daily';
import { SearchOverlay } from '@/components/map/search-overlay';
import { Photo } from '@/components/photo';
import { RegionExplorer } from '@/components/region-explorer';
import { Avatar, Chip, SectionHeader, UserName } from '@/components/ui';
import { countryHref, destinationById, destinationHref, destinations, placeHref, places } from '@/data/catalog';
import { guides, reviews, stories, users } from '@/data/social';
import { useI18n } from '@/i18n/use';
import { useNotifications } from '@/lib/notifications';
import { cn } from '@/lib/utils';
import { meetupStart, useAllMeetups, useApp } from '@/store/app';
import { useUI } from '@/store/ui';

type Tab = 'all' | 'destinations' | 'guides' | 'food' | 'tips';

const RUSSIA = ['baikal', 'kamchatka', 'teriberka', 'altai', 'dagestan', 'spb', 'sochi'];

export default function DiscoverPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('all');
  const [searchOpen, setSearchOpen] = useState(false);
  const { profile, following, toggleFollow } = useApp();
  const openSheet = useUI((s) => s.openSheet);
  const meetups = useAllMeetups();
  const { unread } = useNotifications();
  const { t, f, dest, user } = useI18n();

  const recommended = useMemo(() => {
    const wanted = new Set(profile.interests);
    const score = (destId: string) => destinationById(destId)?.tags.filter((tag) => wanted.has(tag)).length ?? 0;
    return [...guides].sort((a, b) => score(b.destinationId) - score(a.destinationId));
  }, [profile.interests]);

  const upcoming = [...meetups].sort((a, b) => meetupStart(a).getTime() - meetupStart(b).getTime()).slice(0, 3);
  const first = (profile.name || t('onboarding.defaultName')).split(' ')[0]!;
  const hour = new Date().getHours();
  const hello = t(hour < 5 ? 'discover.greetingNight' : hour < 12 ? 'discover.greetingMorning' : hour < 18 ? 'discover.greetingDay' : 'discover.greetingEvening', { name: first });

  const tabs: { value: Tab; label: string }[] = [
    { value: 'all', label: t('discover.tabAll') },
    { value: 'destinations', label: t('discover.tabDestinations') },
    { value: 'guides', label: t('discover.tabGuides') },
    { value: 'food', label: t('discover.tabFood') },
    { value: 'tips', label: t('discover.tabTips') },
  ];

  return (
    <div className="scroll-area pb-tabbar absolute inset-0">
      <header className="pt-safe px-5">
        <div className="flex items-center justify-between gap-3 pt-3">
          <div className="min-w-0">
            <p className="truncate text-[14px] text-muted">{hello} 👋</p>
            <h1 className="text-[30px] font-bold leading-tight tracking-[-0.035em]">{t('discover.title')}</h1>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Link href="/notifications/" aria-label={t('discover.notifications')} className="press relative grid size-11 place-items-center rounded-full bg-white shadow-soft">
              <Bell className="size-5" />
              {unread > 0 && <span className="absolute right-2 top-2 grid size-4 place-items-center rounded-full bg-rose text-[9px] font-bold text-white ring-2 ring-white">{unread}</span>}
            </Link>
            <Link href="/profile/" aria-label={t('tabs.profile')}>
              <Avatar userId="me" size={44} ring className="shadow-soft" />
            </Link>
          </div>
        </div>
        <button onClick={() => setSearchOpen(true)} className="press mt-4 flex h-12 w-full items-center gap-2.5 rounded-full bg-white px-4 text-left shadow-soft ring-1 ring-line-soft">
          <Search className="size-[18px] text-muted" strokeWidth={2.4} />
          <span className="truncate text-[15px] text-faint">{t('discover.searchPlaceholder')}</span>
        </button>
      </header>

      <div className="no-scrollbar mt-5 flex gap-3.5 overflow-x-auto px-5 pb-1">
        {stories.map((s, i) => (
          <button key={s.id} onClick={() => openSheet({ type: 'story', index: i })} className="press flex w-[66px] shrink-0 flex-col items-center gap-1.5">
            <span className="rounded-full bg-gradient-to-tr from-[#2dd4bf] via-brand to-pink p-[2.5px]">
              <span className="block rounded-full bg-canvas p-[2px]">
                <Avatar userId={s.userId} size={56} />
              </span>
            </span>
            <span className="w-full truncate text-center text-[11px] font-medium text-ink-2">{user(s.userId).name.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto px-5 pb-2">
        {tabs.map((tb) => (
          <Chip key={tb.value} active={tab === tb.value} onClick={() => setTab(tb.value)}>
            {tb.label}
          </Chip>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
          {tab === 'all' && (
            <div className="mt-3 grid gap-7">
              <DailyPickCard />
              <QuestStrip />

              <section>
                <SectionHeader title={t('discover.popular')} onAction={() => setTab('destinations')} />
                <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto px-5 pb-3">
                  {destinations.slice(0, 12).map((d) => (
                    <DestinationCard key={d.id} d={d} />
                  ))}
                </div>
              </section>

              <RegionExplorer />

              <section className="relative mx-5 overflow-hidden rounded-[28px] bg-[#0b1220] p-5 text-white shadow-float">
                <Photo id="TilO4-6h3VA" alt="" width={800} className="absolute inset-0 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-[#0b1220]/60 to-transparent" />
                <div className="relative">
                  <h3 className="text-[22px] font-bold leading-tight tracking-[-0.03em]">{t('discover.russiaTitle')}</h3>
                  <p className="mt-1.5 max-w-[270px] text-[13px] text-white/80">{t('discover.russiaText')}</p>
                  <div className="no-scrollbar -mx-5 mt-4 flex gap-2 overflow-x-auto px-5">
                    {RUSSIA.map((id) => (
                      <Link key={id} href={destinationHref(id)} className="press glass-dark shrink-0 rounded-full px-3.5 py-2 text-[13px] font-semibold ring-1 ring-white/20">
                        {dest(id).name}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <SectionHeader title={t('discover.recommended')} onAction={() => setTab('guides')} />
                <div className="mt-3 grid gap-3 px-5">
                  {recommended.slice(0, 3).map((g) => (
                    <GuideCard key={g.id} g={g} />
                  ))}
                </div>
              </section>

              <section>
                <SectionHeader title={t('discover.meetupsNearby')} href="/meetups/" />
                <div className="mt-3 grid gap-2.5 px-5">
                  {upcoming.map((m) => (
                    <MeetupRow key={m.id} m={m} />
                  ))}
                </div>
              </section>

              <section className="relative mx-5 overflow-hidden rounded-[28px] bg-ink p-5 text-white shadow-float">
                <Photo id="OIbcmFyMDbo" alt="" width={800} className="absolute inset-0 opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
                <div className="relative max-w-[240px]">
                  <h3 className="text-[22px] font-bold leading-tight tracking-[-0.03em]">{t('discover.promoTitle')}</h3>
                  <p className="mt-2 text-[13px] text-white/75">{t('discover.promoText')}</p>
                  <button onClick={() => router.push('/meetups/new/')} className="press mt-4 h-10 rounded-full bg-white px-4 text-[13px] font-bold text-ink">
                    {t('discover.promoButton')}
                  </button>
                </div>
              </section>

              <section>
                <SectionHeader title={t('discover.realPlaces')} />
                <div className="mt-3 grid gap-3 px-5">
                  {reviews.slice(0, 4).map((r) => (
                    <ReviewCard key={r.id} r={r} />
                  ))}
                </div>
              </section>

              <section>
                <SectionHeader title={t('discover.travelers')} />
                <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto px-5 pb-3">
                  {users.slice(0, 8).map((u) => {
                    const on = following.includes(u.id);
                    return (
                      <div key={u.id} className="flex w-[148px] shrink-0 flex-col items-center rounded-[24px] bg-white p-4 text-center shadow-card">
                        <Link href={`/u/${u.id}/`} className="flex w-full flex-col items-center">
                          <Avatar userId={u.id} size={64} />
                          <UserName userId={u.id} className="mt-2.5 max-w-full truncate text-[14px] font-semibold" />
                          <p className="text-[11px] text-muted">
                            {t('common.countries', { count: u.countries.length })} · {f.compact(u.followers)}
                          </p>
                        </Link>
                        <button onClick={() => toggleFollow(u.id)} className={cn('press mt-3 h-8 w-full rounded-full text-[12px] font-bold transition-colors', on ? 'bg-surface-2 text-ink-2' : 'bg-brand text-white shadow-brand')}>
                          {on ? t('discover.following') : t('discover.follow')}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          )}

          {tab === 'destinations' && (
            <div className="mt-3 grid grid-cols-2 gap-3 px-5">
              {destinations.map((d) => (
                <DestinationCard key={d.id} d={d} className="h-[220px] w-auto" />
              ))}
            </div>
          )}

          {tab === 'guides' && (
            <div className="mt-3 grid gap-3 px-5">
              {guides.map((g) => (
                <GuideCard key={g.id} g={g} />
              ))}
            </div>
          )}

          {tab === 'food' && (
            <div className="mt-3 grid gap-2.5 px-5">
              {places
                .filter((p) => p.category === 'food')
                .map((p) => (
                  <PlaceRow key={p.id} id={p.id} />
                ))}
            </div>
          )}

          {tab === 'tips' && (
            <div className="mt-3 grid gap-3 px-5">
              {destinations.map((d) => (
                <Link key={d.id} href={destinationHref(d.id)} className="press flex gap-3 rounded-[22px] bg-white p-4 shadow-soft">
                  <span className="grid size-10 shrink-0 place-items-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg, ${d.theme.accent}, ${d.theme.accent2})` }}>
                    <Lightbulb className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-faint">{dest(d.id).name}</p>
                    <p className="mt-0.5 text-[14px] leading-relaxed text-ink-2">{dest(d.id).tips[0]}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {searchOpen && (
          <SearchOverlay
            onClose={() => setSearchOpen(false)}
            onPick={(id, kind) => {
              setSearchOpen(false);
              router.push(kind === 'country' ? countryHref(id) : destinationById(id) ? destinationHref(id) : placeHref(id));
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
