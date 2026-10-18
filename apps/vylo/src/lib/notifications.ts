'use client';

import { dailyPick } from '@/components/daily';
import { guides, userById } from '@/data/social';
import { meetupStart, useAllMeetups, useApp } from '@/store/app';
import { hash, todayKey } from './utils';

export interface Notice {
  id: string;
  kind: 'meetup' | 'chat' | 'guide' | 'like' | 'pick' | 'streak' | 'follow';
  title: string;
  text: string;
  href: string;
  at: number;
  userId?: string;
  image?: string;
}

/** Activity feed, rebuilt from local state; it refreshes daily so there is always something new. */
export function useNotifications() {
  const state = useApp();
  const meetups = useAllMeetups();
  const dayStart = new Date(`${todayKey()}T00:00:00`).getTime();
  const now = Date.now();
  const list: Notice[] = [];

  for (const m of meetups.filter((x) => state.joined.includes(x.id))) {
    const start = meetupStart(m).getTime();
    const hours = Math.round((start - now) / 3_600_000);
    if (hours >= 0 && hours <= 48)
      list.push({ id: `mt-${m.id}`, kind: 'meetup', title: m.title, text: hours <= 1 ? 'Начинается совсем скоро!' : `Начало через ${hours} ч — не забудьте`, href: `/meetup/?id=${m.id}`, at: Math.max(dayStart, now - 60_000 * 20), image: m.image });
    const last = state.chats[m.id]?.at(-1);
    if (last && last.userId !== 'me') {
      const u = userById(last.userId);
      list.push({ id: `ch-${last.id}`, kind: 'chat', title: `${u?.name ?? 'Участник'} в «${m.title}»`, text: last.text, href: `/meetup/?id=${m.id}&chat=1`, at: last.at, userId: last.userId });
    }
  }

  const pick = dailyPick();
  list.push({ id: `pick-${todayKey()}`, kind: 'pick', title: 'Новое место дня', text: `${pick.name} — ${pick.tagline.toLowerCase()}`, href: `/d/${pick.id}/`, at: dayStart + 8 * 3_600_000, image: pick.image });

  const g = guides[hash(todayKey()) % guides.length]!;
  const author = userById(g.authorId);
  list.push({ id: `guide-${todayKey()}`, kind: 'guide', title: `Новый гид от ${author?.name ?? 'путешественника'}`, text: g.title, href: `/guide/${g.id}/`, at: dayStart + 10 * 3_600_000, userId: g.authorId });

  if (state.myReviews.length)
    list.push({ id: `like-${state.myReviews[0]!.id}`, kind: 'like', title: 'Алекс и ещё 6 человек', text: 'отметили ваш отзыв полезным', href: '/profile/?tab=reviews', at: dayStart + 12 * 3_600_000, userId: 'alex' });

  list.push({ id: `follow-${todayKey()}`, kind: 'follow', title: 'Анна Лебедева', text: 'теперь читает ваши обновления', href: '/u/anna/', at: dayStart + 9 * 3_600_000, userId: 'anna' });

  if (state.streak.count > 0)
    list.push({ id: `streak-${todayKey()}`, kind: 'streak', title: `Серия ${state.streak.count} 🔥`, text: 'Заходите завтра, чтобы не потерять серию', href: '/profile/?tab=quests', at: dayStart + 60_000 });

  const visible = list.filter((n) => n.at <= now).sort((a, b) => b.at - a.at);
  const unread = visible.filter((n) => n.at > state.notificationsSeenAt).length;
  return { list: visible, unread };
}
