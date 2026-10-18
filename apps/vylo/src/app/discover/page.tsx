'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { BadgeCheck, Bell, Lightbulb, Search } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { DestinationCard, GuideCard, MeetupRow, PlaceRow, ReviewCard } from '@/components/cards';
import { DailyPickCard, QuestStrip } from '@/components/daily';
import { SearchOverlay } from '@/components/map/search-overlay';
import { Photo } from '@/components/photo';
import { Avatar, Chip, SectionHeader } from '@/components/ui';
import { destinations } from '@/data/destinations';
import { places } from '@/data/places';
import { guides, reviews, stories, userById, users } from '@/data/social';
import { useNotifications } from '@/lib/notifications';
import { compact, cn } from '@/lib/utils';
import { meetupStart, useAllMeetups, useApp } from '@/store/app';
import { useUI } from '@/store/ui';

type Tab = 'all' | 'destinations' | 'guides' | 'food' | 'tips';

const tabs: { value: Tab; label: string }[] = [
  { value: 'all', label: 'Всё' },
  { value: 'destinations', label: 'Направления' },
  { value: 'guides', label: 'Маршруты' },
  { value: 'food', label: 'Еда' },
  { value: 'tips', label: 'Советы' },
];

const interestTags: Record<string, string[]> = {
  Пляжи: ['Пляжи', 'Дайвинг', 'Сёрфинг'],
  Горы: ['Горы', 'Треккинг', 'Природа'],
  Города: ['Город', 'Архитектура', 'Шопинг'],
  Еда: ['Еда', 'Вино'],
  Культура: ['Культура', 'История', 'Искусство'],
  Приключения: ['Приключения', 'Роуд-трип', 'Сафари'],
  Фото: ['Фото', 'Закаты'],
};

export default function DiscoverPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('all');
  const [searchOpen, setSearchOpen] = useState(false);
  const { profile, following, toggleFollow } = useApp();
  const openSheet = useUI((s) => s.openSheet);
  const meetups = useAllMeetups();
  const { unread } = useNotifications();

  const recommended = useMemo(() => {
    const wanted = profile.interests.flatMap((i) => interestTags[i] ?? []);
    if (!wanted.length) return guides;
    const score = (destId: string) => destinations.find((d) => d.id === destId)?.tags.filter((t) => wanted.includes(t)).length ?? 0;
    return [...guides].sort((a, b) => score(b.destinationId) - score(a.destinationId));
  }, [profile.interests]);

  const upcoming = [...meetups].sort((a, b) => meetupStart(a).getTime() - meetupStart(b).getTime()).slice(0, 3);
  const hello = (() => {
    const h = new Date().getHours();
    return h < 5 ? 'Доброй ночи' : h < 12 ? 'Доброе утро' : h < 18 ? 'Добрый день' : 'Добрый вечер';
  })();

  return (
    <div className="scroll-area pb-tabbar absolute inset-0">
      <header className="pt-safe px-5">
        <div className="flex items-center justify-between pt-3">
          <div>
            <p className="text-[14px] text-muted">
              {hello}, {profile.name.split(' ')[0]} 👋
            </p>
            <h1 className="text-[30px] font-bold leading-tight tracking-[-0.035em]">Обзор</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/notifications/" aria-label="Уведомления" className="press relative grid size-11 place-items-center rounded-full bg-white shadow-soft">
              <Bell className="size-5" />
              {unread > 0 && <span className="absolute right-2 top-2 grid size-4 place-items-center rounded-full bg-rose text-[9px] font-bold text-white ring-2 ring-white">{unread}</span>}
            </Link>
            <Link href="/profile/" aria-label="Профиль">
              <Avatar userId="me" size={44} ring className="shadow-soft" />
            </Link>
          </div>
        </div>
        <button onClick={() => setSearchOpen(true)} className="press mt-4 flex h-12 w-full items-center gap-2.5 rounded-full bg-white px-4 text-left shadow-soft ring-1 ring-line-soft">
          <Search className="size-[18px] text-muted" strokeWidth={2.4} />
          <span className="text-[15px] text-faint">Направления, места, темы</span>
        </button>
      </header>

      {/* Stories */}
      <div className="no-scrollbar mt-5 flex gap-3.5 overflow-x-auto px-5 pb-1">
        {stories.map((s, i) => {
          const u = userById(s.userId)!;
          return (
            <button key={s.id} onClick={() => openSheet({ type: 'story', index: i })} className="press flex w-[66px] shrink-0 flex-col items-center gap-1.5">
              <span className="rounded-full bg-gradient-to-tr from-amber via-pink to-brand p-[2.5px]">
                <span className="block rounded-full bg-canvas p-[2px]">
                  <Avatar userId={u.id} size={56} />
                </span>
              </span>
              <span className="w-full truncate text-center text-[11px] font-medium text-ink-2">{u.name.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto px-5 pb-2">
        {tabs.map((t) => (
          <Chip key={t.value} active={tab === t.value} onClick={() => setTab(t.value)}>
            {t.label}
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
                <SectionHeader title="Популярные направления" onAction={() => setTab('destinations')} />
                <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto px-5 pb-3">
                  {destinations.slice(0, 10).map((d) => (
                    <DestinationCard key={d.id} d={d} />
                  ))}
                </div>
              </section>

              <section>
                <SectionHeader title="Рекомендуем для вас" onAction={() => setTab('guides')} />
                <div className="mt-3 grid gap-3 px-5">
                  {recommended.slice(0, 3).map((g) => (
                    <GuideCard key={g.id} g={g} />
                  ))}
                </div>
              </section>

              <section>
                <SectionHeader title="Встречи рядом" href="/meetups/" />
                <div className="mt-3 grid gap-2.5 px-5">
                  {upcoming.map((m) => (
                    <MeetupRow key={m.id} m={m} />
                  ))}
                </div>
              </section>

              <section className="relative mx-5 overflow-hidden rounded-[28px] bg-ink p-5 text-white shadow-float">
                <Photo id="1539635278303-d4002c07eae3" alt="" width={800} className="absolute inset-0 opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
                <div className="relative max-w-[230px]">
                  <h3 className="text-[22px] font-bold leading-tight tracking-[-0.03em]">Превращайте поездки в знакомства</h3>
                  <p className="mt-2 text-[13px] text-white/75">Найдите компанию на закат, хайкинг или ужин — где бы вы ни были.</p>
                  <button onClick={() => router.push('/meetups/new/')} className="press mt-4 h-10 rounded-full bg-white px-4 text-[13px] font-bold text-ink">
                    Создать встречу
                  </button>
                </div>
              </section>

              <section>
                <SectionHeader title="Реальные места от реальных людей" />
                <div className="mt-3 grid gap-3 px-5">
                  {reviews.slice(0, 4).map((r) => (
                    <ReviewCard key={r.id} r={r} />
                  ))}
                </div>
              </section>

              <section>
                <SectionHeader title="Путешественники" />
                <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto px-5 pb-3">
                  {users.slice(0, 8).map((u) => {
                    const on = following.includes(u.id);
                    return (
                      <div key={u.id} className="flex w-[148px] shrink-0 flex-col items-center rounded-[24px] bg-white p-4 text-center shadow-card">
                        <Link href={`/u/${u.id}/`} className="flex flex-col items-center">
                          <Avatar userId={u.id} size={64} />
                          <p className="mt-2.5 flex items-center gap-1 text-[14px] font-semibold">
                            {u.name.split(' ')[0]}
                            {u.verified && <BadgeCheck className="size-4 fill-brand text-white" />}
                          </p>
                          <p className="text-[11px] text-muted">
                            {u.countries.length} стран · {compact(u.followers)}
                          </p>
                        </Link>
                        <button
                          onClick={() => toggleFollow(u.id)}
                          className={cn('press mt-3 h-8 w-full rounded-full text-[12px] font-bold transition-colors', on ? 'bg-surface-2 text-ink-2' : 'bg-brand text-white shadow-brand')}
                        >
                          {on ? 'Вы подписаны' : 'Подписаться'}
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
              {destinations.flatMap((d) =>
                d.tips.slice(0, 1).map((t) => (
                  <Link key={d.id + t} href={`/d/${d.id}/`} className="press flex gap-3 rounded-[22px] bg-white p-4 shadow-soft">
                    <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-amber-50 text-amber">
                      <Lightbulb className="size-5" />
                    </span>
                    <div>
                      <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-faint">{d.name}</p>
                      <p className="mt-0.5 text-[14px] leading-relaxed text-ink-2">{t}</p>
                    </div>
                  </Link>
                )),
              )}
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
              router.push(kind === 'country' ? `/visa/${id.toLowerCase()}/` : (destinations.some((d) => d.id === id) ? `/d/${id}/` : `/p/${id}/`));
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
