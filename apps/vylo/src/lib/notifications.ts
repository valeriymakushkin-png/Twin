'use client';

import { dailyPick } from '@/components/daily';
import { guides, userById } from '@/data/social';
import { useI18n } from '@/i18n/use';
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

/** Activity feed rebuilt from local state; it refreshes daily so there is always something new. */
export function useNotifications() {
  const state = useApp();
  const meetups = useAllMeetups();
  const { t, dest, user, guide, meetupText } = useI18n();
  const dayStart = new Date(`${todayKey()}T00:00:00`).getTime();
  const now = Date.now();
  const list: Notice[] = [];

  for (const m of meetups.filter((x) => state.joined.includes(x.id))) {
    const title = meetupText(m).title;
    const hours = Math.round((meetupStart(m).getTime() - now) / 3_600_000);
    if (hours >= 0 && hours <= 48)
      list.push({ id: `mt-${m.id}`, kind: 'meetup', title, text: hours <= 1 ? t('notifications.meetupSoon') : t('notifications.meetupIn', { count: hours }), href: `/meetup/?id=${m.id}`, at: Math.max(dayStart, now - 60_000 * 20), image: m.image });
    const last = state.chats[m.id]?.at(-1);
    if (last && last.userId !== 'me') {
      const u = userById(last.userId);
      list.push({ id: `ch-${last.id}`, kind: 'chat', title: t('notifications.chatIn', { name: u ? user(u.id).name : t('notifications.participant'), title }), text: last.text, href: `/meetup/?id=${m.id}&chat=1`, at: last.at, userId: last.userId });
    }
  }

  const pick = dailyPick();
  list.push({ id: `pick-${todayKey()}`, kind: 'pick', title: t('notifications.pickTitle'), text: `${dest(pick.id).name} — ${dest(pick.id).tagline}`, href: `/d/${pick.id}/`, at: dayStart + 8 * 3_600_000, image: pick.image });

  const g = guides[hash(todayKey()) % guides.length]!;
  list.push({ id: `guide-${todayKey()}`, kind: 'guide', title: t('notifications.guideTitle', { name: user(g.authorId).name }), text: guide(g.id).title, href: `/guide/${g.id}/`, at: dayStart + 10 * 3_600_000, userId: g.authorId });

  if (state.myReviews.length)
    list.push({ id: `like-${state.myReviews[0]!.id}`, kind: 'like', title: t('notifications.likesTitle', { name: user('alex').name, count: 6 }), text: t('notifications.likesText'), href: '/profile/?tab=reviews', at: dayStart + 12 * 3_600_000, userId: 'alex' });

  list.push({ id: `follow-${todayKey()}`, kind: 'follow', title: user('anna').name, text: t('notifications.followText'), href: '/u/anna/', at: dayStart + 9 * 3_600_000, userId: 'anna' });

  if (state.streak.count > 0)
    list.push({ id: `streak-${todayKey()}`, kind: 'streak', title: t('profile.onTheRoad', { count: state.streak.count }), text: t('notifications.streakText'), href: '/profile/?tab=route', at: dayStart + 60_000 });

  const visible = list.filter((n) => n.at <= now).sort((a, b) => b.at - a.at);
  const unread = visible.filter((n) => n.at > state.notificationsSeenAt).length;
  return { list: visible, unread };
}
