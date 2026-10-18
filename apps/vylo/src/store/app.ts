import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { destinationById } from '@/data/destinations';
import { placeById } from '@/data/places';
import { meetups as seedMeetups, userById } from '@/data/social';
import type { Meetup, Review } from '@/data/types';
import { visaByCode } from '@/data/visa';
import { achievements, levelFor, questsFor, unlockedAchievements, XP, type Progress, type QuestKey } from '@/lib/gamification';
import { todayKey, uid } from '@/lib/utils';
import { useUI } from './ui';

export interface Collection {
  id: string;
  name: string;
  emoji: string;
  itemIds: string[];
  createdAt: number;
}

export interface TripItem {
  id: string;
  placeId: string;
  day: number;
}

export interface ChecklistItem {
  id: string;
  text: string;
  done: boolean;
}

export interface Trip {
  id: string;
  name: string;
  destinationId: string;
  start: string;
  end: string;
  items: TripItem[];
  checklist: ChecklistItem[];
  createdAt: number;
}

export interface ChatMessage {
  id: string;
  userId: string;
  text: string;
  at: number;
}

export interface Profile {
  name: string;
  handle: string;
  avatar: string;
  home: string;
  bio: string;
  citizenship: string;
  interests: string[];
}

interface Daily {
  date: string;
  counts: Partial<Record<QuestKey, number>>;
  claimed: string[];
}

interface State {
  onboarded: boolean;
  profile: Profile;
  savedIds: string[];
  collections: Collection[];
  beenHere: string[];
  visited: string[];
  joined: string[];
  myMeetups: Meetup[];
  trips: Trip[];
  myReviews: Review[];
  liked: string[];
  following: string[];
  chats: Record<string, ChatMessage[]>;
  visaChecked: string[];
  guidesRead: string[];
  viewed: string[];
  recentSearches: string[];
  xp: number;
  streak: { count: number; best: number; last: string };
  daily: Daily;
  unlocked: string[];
  mapStyle: 'satellite' | 'light';
  notificationsSeenAt: number;

  completeOnboarding: (p: Partial<Profile>, visited: string[]) => void;
  updateProfile: (p: Partial<Profile>) => void;
  checkIn: () => void;
  toggleSave: (id: string) => boolean;
  createCollection: (name: string, emoji: string, itemId?: string) => string;
  toggleInCollection: (collectionId: string, itemId: string) => void;
  deleteCollection: (id: string) => void;
  toggleBeenHere: (id: string) => void;
  toggleVisited: (code: string) => void;
  toggleJoin: (meetupId: string) => void;
  createMeetup: (m: Omit<Meetup, 'id' | 'hostId' | 'attendeeIds' | 'createdByMe'>) => string;
  createTrip: (t: { name: string; destinationId: string; start: string; end: string; placeIds?: string[] }) => string;
  addToTrip: (tripId: string, placeId: string, day?: number) => void;
  removeFromTrip: (tripId: string, itemId: string) => void;
  moveTripItem: (tripId: string, itemId: string, day: number) => void;
  toggleChecklist: (tripId: string, itemId: string) => void;
  addChecklist: (tripId: string, text: string) => void;
  deleteTrip: (id: string) => void;
  addReview: (targetId: string, rating: number, text: string) => void;
  toggleLike: (id: string) => void;
  toggleFollow: (userId: string) => void;
  sendMessage: (meetupId: string, text: string, userId?: string) => void;
  markVisaChecked: (code: string) => void;
  markGuideRead: (id: string) => void;
  markViewed: (id: string) => void;
  addSearch: (q: string) => void;
  clearSearches: () => void;
  track: (key: QuestKey, by?: number) => void;
  claimQuest: (questId: string) => void;
  setMapStyle: (s: State['mapStyle']) => void;
  markNotificationsSeen: () => void;
  reset: () => void;
}

const defaultProfile: Profile = {
  name: 'Путешественник',
  handle: 'traveler',
  avatar: '',
  home: 'Москва, Россия',
  bio: 'Коллекционирую закаты и штампы в паспорте.',
  citizenship: 'RU',
  interests: [],
};

const initial = {
  onboarded: false,
  profile: defaultProfile,
  savedIds: [] as string[],
  collections: [] as Collection[],
  beenHere: [] as string[],
  visited: [] as string[],
  joined: [] as string[],
  myMeetups: [] as Meetup[],
  trips: [] as Trip[],
  myReviews: [] as Review[],
  liked: [] as string[],
  following: [] as string[],
  chats: {} as Record<string, ChatMessage[]>,
  visaChecked: [] as string[],
  guidesRead: [] as string[],
  viewed: [] as string[],
  recentSearches: [] as string[],
  xp: 0,
  streak: { count: 0, best: 0, last: '' },
  daily: { date: '', counts: {}, claimed: [] } as Daily,
  unlocked: [] as string[],
  mapStyle: 'satellite' as const,
  notificationsSeenAt: 0,
};

export function progressOf(s: Pick<State, 'savedIds' | 'collections' | 'visited' | 'beenHere' | 'joined' | 'myMeetups' | 'myReviews' | 'trips' | 'streak' | 'visaChecked' | 'guidesRead' | 'following'>): Progress {
  return {
    saved: s.savedIds.length,
    collections: s.collections.length,
    visited: s.visited.length,
    beenHere: s.beenHere.length,
    joined: s.joined.length,
    hosted: s.myMeetups.length,
    reviews: s.myReviews.length,
    trips: s.trips.length,
    streak: s.streak.count,
    visaChecks: s.visaChecked.length,
    guidesRead: s.guidesRead.length,
    following: s.following.length,
  };
}

const freshDaily = (d: Daily): Daily => (d.date === todayKey() ? d : { date: todayKey(), counts: {}, claimed: [] });

function defaultChecklist(destinationId: string): ChecklistItem[] {
  const d = destinationById(destinationId);
  const visa = d ? visaByCode(d.countryCode) : undefined;
  const items = ['Загранпаспорт', 'Страховка', 'Билеты', 'Бронь жилья', 'Зарядки и адаптер', 'Аптечка'];
  if (visa) {
    for (const doc of visa.docs) if (!items.includes(doc)) items.push(doc);
    if (visa.regime === 'required' || visa.regime === 'evisa' || visa.regime === 'eta') items.unshift(`Оформить: ${visa.title.toLowerCase()}`);
  }
  return items.map((text) => ({ id: uid(), text, done: false }));
}

export const useApp = create<State>()(
  persist(
    (set, get) => {
      /** Grant XP, then surface any level-up and newly unlocked achievements. */
      const gain = (xp: number, label: string) => {
        const before = levelFor(get().xp);
        set((s) => ({ xp: s.xp + xp }));
        if (xp > 0) useUI.getState().pushReward(xp, label);
        const fresh = unlockedAchievements(progressOf(get())).filter((id) => !get().unlocked.includes(id));
        if (fresh.length) {
          const bonus = fresh.reduce((sum, id) => sum + (achievements.find((a) => a.id === id)?.xp ?? 0), 0);
          set((s) => ({ unlocked: [...s.unlocked, ...fresh], xp: s.xp + bonus }));
          for (const id of fresh) {
            const achievement = achievements.find((a) => a.id === id);
            if (achievement) useUI.getState().celebrate({ kind: 'achievement', achievement });
          }
        }
        const after = levelFor(get().xp);
        if (after.index > before.index) useUI.getState().celebrate({ kind: 'level', level: after.level, name: after.name });
      };

      const bump = (key: QuestKey, by = 1) =>
        set((s) => {
          const daily = freshDaily(s.daily);
          return { daily: { ...daily, counts: { ...daily.counts, [key]: (daily.counts[key] ?? 0) + by } } };
        });

      return {
        ...initial,

        completeOnboarding: (p, visited) => {
          set((s) => ({
            onboarded: true,
            profile: { ...s.profile, ...p },
            visited: Array.from(new Set([...s.visited, ...visited])),
            collections: s.collections.length
              ? s.collections
              : [
                  { id: 'wishlist', name: 'Хочу поехать', emoji: '✨', itemIds: [], createdAt: Date.now() },
                  { id: 'food', name: 'Гастро-места', emoji: '🍜', itemIds: [], createdAt: Date.now() },
                ],
          }));
          gain(50 + visited.length * 10, 'Добро пожаловать в Vylo');
        },

        updateProfile: (p) => set((s) => ({ profile: { ...s.profile, ...p } })),

        checkIn: () => {
          const today = todayKey();
          const { streak } = get();
          if (streak.last === today) return;
          const yesterday = todayKey(new Date(Date.now() - 86_400_000));
          const count = streak.last === yesterday ? streak.count + 1 : 1;
          const best = Math.max(streak.best, count);
          set({ streak: { count, best, last: today }, daily: freshDaily(get().daily) });
          if (get().onboarded) {
            if (count > 1) useUI.getState().celebrate({ kind: 'streak', count, best });
            gain(XP.checkIn * Math.min(count, 7), `Серия ${count} 🔥`);
          }
        },

        toggleSave: (id) => {
          const saved = get().savedIds.includes(id);
          if (saved) {
            set((s) => ({
              savedIds: s.savedIds.filter((x) => x !== id),
              collections: s.collections.map((c) => ({ ...c, itemIds: c.itemIds.filter((x) => x !== id) })),
            }));
            return false;
          }
          set((s) => ({ savedIds: [id, ...s.savedIds] }));
          bump('save');
          gain(XP.save, 'Сохранено');
          return true;
        },

        createCollection: (name, emoji, itemId) => {
          const id = uid();
          set((s) => ({
            collections: [...s.collections, { id, name, emoji, itemIds: itemId ? [itemId] : [], createdAt: Date.now() }],
            savedIds: itemId && !s.savedIds.includes(itemId) ? [itemId, ...s.savedIds] : s.savedIds,
          }));
          gain(XP.collection, 'Новая коллекция');
          return id;
        },

        toggleInCollection: (collectionId, itemId) => {
          set((s) => ({
            collections: s.collections.map((c) =>
              c.id !== collectionId ? c : { ...c, itemIds: c.itemIds.includes(itemId) ? c.itemIds.filter((x) => x !== itemId) : [itemId, ...c.itemIds] },
            ),
            savedIds: s.savedIds.includes(itemId) ? s.savedIds : [itemId, ...s.savedIds],
          }));
        },

        deleteCollection: (id) => set((s) => ({ collections: s.collections.filter((c) => c.id !== id) })),

        toggleBeenHere: (id) => {
          const been = get().beenHere.includes(id);
          if (been) return set((s) => ({ beenHere: s.beenHere.filter((x) => x !== id) }));
          set((s) => ({ beenHere: [id, ...s.beenHere] }));
          const code = destinationById(id)?.countryCode ?? destinationById(placeById(id)?.destinationId ?? '')?.countryCode;
          if (code && !get().visited.includes(code)) {
            set((s) => ({ visited: [...s.visited, code] }));
            gain(XP.beenHere + XP.visitCountry, 'Новая страна в паспорте');
          } else gain(XP.beenHere, 'Отмечено');
        },

        toggleVisited: (code) => {
          if (get().visited.includes(code)) return set((s) => ({ visited: s.visited.filter((c) => c !== code) }));
          set((s) => ({ visited: [...s.visited, code] }));
          gain(XP.visitCountry, 'Штамп в паспорт');
        },

        toggleJoin: (meetupId) => {
          if (get().joined.includes(meetupId)) return set((s) => ({ joined: s.joined.filter((x) => x !== meetupId) }));
          set((s) => ({ joined: [...s.joined, meetupId] }));
          bump('join');
          gain(XP.join, 'Вы в деле!');
          const m = [...seedMeetups, ...get().myMeetups].find((x) => x.id === meetupId);
          const host = m && userById(m.hostId);
          if (m && host) {
            setTimeout(() => get().sendMessage(meetupId, `Привет, ${get().profile.name.split(' ')[0]}! Круто, что ты с нами 🙌 Если будут вопросы — пиши сюда.`, host.id), 1600);
          }
        },

        createMeetup: (m) => {
          const id = `my-${uid()}`;
          set((s) => ({ myMeetups: [{ ...m, id, hostId: 'me', attendeeIds: [], createdByMe: true }, ...s.myMeetups], joined: [...s.joined, id] }));
          gain(XP.hostMeetup, 'Встреча создана');
          return id;
        },

        createTrip: ({ name, destinationId, start, end, placeIds = [] }) => {
          const id = uid();
          const trip: Trip = {
            id,
            name,
            destinationId,
            start,
            end,
            items: placeIds.map((placeId, i) => ({ id: uid(), placeId, day: Math.min(i, 2) })),
            checklist: defaultChecklist(destinationId),
            createdAt: Date.now(),
          };
          set((s) => ({ trips: [trip, ...s.trips] }));
          gain(XP.trip, 'Поездка создана');
          return id;
        },

        addToTrip: (tripId, placeId, day = 0) =>
          set((s) => ({
            trips: s.trips.map((t) => (t.id !== tripId || t.items.some((i) => i.placeId === placeId) ? t : { ...t, items: [...t.items, { id: uid(), placeId, day }] })),
          })),

        removeFromTrip: (tripId, itemId) =>
          set((s) => ({ trips: s.trips.map((t) => (t.id !== tripId ? t : { ...t, items: t.items.filter((i) => i.id !== itemId) })) })),

        moveTripItem: (tripId, itemId, day) =>
          set((s) => ({ trips: s.trips.map((t) => (t.id !== tripId ? t : { ...t, items: t.items.map((i) => (i.id === itemId ? { ...i, day } : i)) })) })),

        toggleChecklist: (tripId, itemId) =>
          set((s) => ({
            trips: s.trips.map((t) => (t.id !== tripId ? t : { ...t, checklist: t.checklist.map((c) => (c.id === itemId ? { ...c, done: !c.done } : c)) })),
          })),

        addChecklist: (tripId, text) =>
          set((s) => ({ trips: s.trips.map((t) => (t.id !== tripId ? t : { ...t, checklist: [...t.checklist, { id: uid(), text, done: false }] })) })),

        deleteTrip: (id) => set((s) => ({ trips: s.trips.filter((t) => t.id !== id) })),

        addReview: (targetId, rating, text) => {
          set((s) => ({ myReviews: [{ id: uid(), targetId, authorId: 'me', rating, text, daysAgo: 0, likes: 0 }, ...s.myReviews] }));
          gain(XP.review, 'Спасибо за отзыв');
        },

        toggleLike: (id) => {
          if (get().liked.includes(id)) return set((s) => ({ liked: s.liked.filter((x) => x !== id) }));
          set((s) => ({ liked: [...s.liked, id] }));
          bump('like');
        },

        toggleFollow: (userId) => {
          if (get().following.includes(userId)) return set((s) => ({ following: s.following.filter((x) => x !== userId) }));
          set((s) => ({ following: [...s.following, userId] }));
          bump('follow');
          gain(XP.follow, 'Подписка');
        },

        sendMessage: (meetupId, text, userId = 'me') => {
          set((s) => ({ chats: { ...s.chats, [meetupId]: [...(s.chats[meetupId] ?? []), { id: uid(), userId, text, at: Date.now() }] } }));
        },

        markVisaChecked: (code) => {
          bump('visa');
          if (get().visaChecked.includes(code)) return;
          set((s) => ({ visaChecked: [...s.visaChecked, code] }));
          gain(0, '');
        },

        markGuideRead: (id) => {
          bump('guide');
          if (get().guidesRead.includes(id)) return;
          set((s) => ({ guidesRead: [...s.guidesRead, id] }));
          gain(5, 'Гид прочитан');
        },

        markViewed: (id) => {
          bump('view');
          set((s) => ({ viewed: [id, ...s.viewed.filter((x) => x !== id)].slice(0, 20) }));
        },

        addSearch: (q) => set((s) => ({ recentSearches: [q, ...s.recentSearches.filter((x) => x !== q)].slice(0, 6) })),
        clearSearches: () => set({ recentSearches: [] }),

        track: bump,

        claimQuest: (questId) => {
          const quest = questsFor(todayKey()).find((q) => q.id === questId);
          const daily = freshDaily(get().daily);
          if (!quest || daily.claimed.includes(questId) || (daily.counts[quest.key] ?? 0) < quest.target) return;
          set({ daily: { ...daily, claimed: [...daily.claimed, questId] } });
          gain(quest.xp, 'Задание выполнено');
        },

        setMapStyle: (mapStyle) => set({ mapStyle }),
        markNotificationsSeen: () => set({ notificationsSeenAt: Date.now() }),
        reset: () => set({ ...initial }),
      };
    },
    {
      name: 'vylo-state-v1',
      storage: createJSONStorage(() => localStorage),
      version: 1,
    },
  ),
);

/** All meetups: curated plus the ones the user created. */
export function useAllMeetups() {
  const mine = useApp((s) => s.myMeetups);
  return [...mine, ...seedMeetups];
}

export function meetupStart(m: Meetup) {
  if (m.startsAt) return new Date(m.startsAt);
  // Demo meetups float with the calendar: N days ahead at a sociable hour, always in the future.
  const start = new Date();
  start.setDate(start.getDate() + Math.floor(m.startsInHours / 24));
  start.setHours(10 + (m.startsInHours % 10), m.startsInHours % 2 ? 30 : 0, 0, 0);
  if (start.getTime() < Date.now()) start.setDate(start.getDate() + 1);
  return start;
}
