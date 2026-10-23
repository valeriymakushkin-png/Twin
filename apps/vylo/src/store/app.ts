import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { destinationById, isHiddenMeetup, placeById, placesIn } from '@/data/catalog';
import { currentVisa } from './visa';
import { meetups as seedMeetups, userById } from '@/data/social';
import type { Meetup, Review, VisaDoc, VisaRegime } from '@/data/types';
import { detectLocale, type Locale } from '@/i18n/config';
import { translate } from '@/i18n';
import { avatarFromSeed, type AvatarConfig } from '@/lib/avatar';
import { earnedPatches, MILES, patches, questsFor, statusFor, type Progress, type QuestKey } from '@/lib/gamification';
import { daysBetween, distanceKm, todayKey, uid } from '@/lib/utils';
import { useUI } from './ui';

export interface Collection {
  id: string;
  name: string;
  /** Built-in collections keep a key so their name follows the app language */
  nameKey?: 'wishlist' | 'foodies';
  emoji: string;
  itemIds: string[];
  createdAt: number;
}

export interface TripItem {
  id: string;
  placeId: string;
  day: number;
}

export type ChecklistKey = 'passport' | 'insurance' | 'tickets' | 'booking' | 'chargers' | 'firstAid';

export interface ChecklistItem {
  id: string;
  done: boolean;
  /** Custom item typed by the user */
  text?: string;
  key?: ChecklistKey;
  doc?: VisaDoc;
  apply?: VisaRegime;
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
  avatar: AvatarConfig;
  home: string;
  bio: string;
  citizenship: string;
  interests: string[];
}

export type PassportCover = 'classic' | 'night' | 'sunset' | 'forest' | 'arctic';

interface Daily {
  date: string;
  counts: Partial<Record<QuestKey, number>>;
  claimed: string[];
}

interface State {
  locale: Locale;
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
  miles: number;
  streak: { count: number; best: number; last: string };
  vacation: { month: string; used: number };
  daily: Daily;
  unlocked: string[];
  mapStyle: 'satellite' | 'light';
  notificationsSeenAt: number;
  plus: { active: boolean; plan: 'monthly' | 'yearly' | null; since: number };
  passportCover: PassportCover;
  offline: string[];

  setLocale: (l: Locale) => void;
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
  autoPlanTrip: (tripId: string) => number;
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
  startPlus: (plan: 'monthly' | 'yearly') => void;
  stopPlus: () => void;
  setPassportCover: (c: PassportCover) => void;
  markOffline: (destinationId: string) => void;
  reset: () => void;
}

const initial = () => ({
  locale: detectLocale(),
  onboarded: false,
  profile: {
    name: '',
    handle: 'traveler',
    avatar: avatarFromSeed(uid()),
    home: '',
    bio: '',
    citizenship: 'RU',
    interests: [] as string[],
  } as Profile,
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
  miles: 0,
  streak: { count: 0, best: 0, last: '' },
  vacation: { month: '', used: 0 },
  daily: { date: '', counts: {}, claimed: [] } as Daily,
  unlocked: [] as string[],
  mapStyle: 'satellite' as const,
  notificationsSeenAt: 0,
  plus: { active: false, plan: null, since: 0 } as State['plus'],
  passportCover: 'classic' as PassportCover,
  offline: [] as string[],
});

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
  const visa = d ? currentVisa(d.countryCode) : undefined;
  const items: ChecklistItem[] = [];
  if (visa && (visa.regime === 'required' || visa.regime === 'schengen' || visa.regime === 'evisa' || visa.regime === 'eta'))
    items.push({ id: uid(), done: false, apply: visa.regime });
  const keys: ChecklistKey[] = visa?.regime === 'domestic' ? ['tickets', 'booking', 'chargers', 'firstAid'] : ['passport', 'insurance', 'tickets', 'booking', 'chargers', 'firstAid'];
  for (const key of keys) items.push({ id: uid(), done: false, key });
  const covered: VisaDoc[] = ['passport', 'returnTicket', 'booking', 'insurance'];
  for (const doc of visa?.docs ?? []) if (!covered.includes(doc)) items.push({ id: uid(), done: false, doc });
  return items;
}

/** Spread a destination's places over the trip's days, nearest-neighbour by day, max four a day. */
function planRoute(destinationId: string, days: number): string[][] {
  const pool = placesIn(destinationId).filter((p) => p.category !== 'hotel');
  const plan: string[][] = Array.from({ length: days }, () => []);
  const remaining = [...pool];
  let day = 0;
  let cursor = destinationById(destinationId)!;
  let from: { lat: number; lng: number } = cursor;
  while (remaining.length && day < days) {
    remaining.sort((a, b) => distanceKm(from, a) - distanceKm(from, b));
    const next = remaining.shift()!;
    plan[day]!.push(next.id);
    from = next;
    if (plan[day]!.length >= Math.max(2, Math.ceil(pool.length / days)) || plan[day]!.length >= 4) {
      day++;
      from = cursor;
    }
  }
  return plan;
}

export const useApp = create<State>()(
  persist(
    (set, get) => {
      const t = (key: Parameters<typeof translate>[1], vars?: Record<string, string | number>) => translate(get().locale, key, vars);

      /** Grant miles, then surface any new status and newly earned patches. */
      const gain = (miles: number, labelKey: string, vars?: Record<string, string | number>) => {
        const before = statusFor(get().miles);
        set((s) => ({ miles: s.miles + miles }));
        if (miles > 0) useUI.getState().pushReward(miles, labelKey, vars);
        const fresh = earnedPatches(progressOf(get())).filter((id) => !get().unlocked.includes(id));
        if (fresh.length) {
          const bonus = fresh.reduce((sum, id) => sum + (patches.find((a) => a.id === id)?.miles ?? 0), 0);
          set((s) => ({ unlocked: [...s.unlocked, ...fresh], miles: s.miles + bonus }));
          for (const id of fresh) {
            const patch = patches.find((a) => a.id === id);
            if (patch) useUI.getState().celebrate({ kind: 'patch', patch });
          }
        }
        const after = statusFor(get().miles);
        if (after.index > before.index) useUI.getState().celebrate({ kind: 'status', level: after.level, key: after.key });
      };

      const bump = (key: QuestKey, by = 1) =>
        set((s) => {
          const daily = freshDaily(s.daily);
          return { daily: { ...daily, counts: { ...daily.counts, [key]: (daily.counts[key] ?? 0) + by } } };
        });

      return {
        ...initial(),

        setLocale: (locale) => set({ locale }),

        completeOnboarding: (p, visited) => {
          set((s) => ({
            onboarded: true,
            profile: { ...s.profile, ...p },
            visited: Array.from(new Set([...s.visited, ...visited])),
            collections: s.collections.length
              ? s.collections
              : [
                  { id: 'wishlist', name: '', nameKey: 'wishlist', emoji: '✨', itemIds: [], createdAt: Date.now() },
                  { id: 'foodies', name: '', nameKey: 'foodies', emoji: '🍜', itemIds: [], createdAt: Date.now() },
                ],
          }));
          gain(50 + visited.length * 10, 'gamify.reward.welcome');
        },

        updateProfile: (p) => set((s) => ({ profile: { ...s.profile, ...p } })),

        checkIn: () => {
          const today = todayKey();
          const { streak, plus, vacation } = get();
          if (streak.last === today) return;
          const gap = streak.last ? daysBetween(streak.last, today) : 99;
          const month = today.slice(0, 7);
          const usedThisMonth = vacation.month === month ? vacation.used : 0;
          const missed = gap - 1;
          let count = 1;
          if (gap === 1) count = streak.count + 1;
          else if (plus.active && missed > 0 && missed <= 2 - usedThisMonth) {
            // Vacation mode (Plus): up to two skipped days a month don't break the journey.
            count = streak.count + 1;
            set({ vacation: { month, used: usedThisMonth + missed } });
          }
          const best = Math.max(streak.best, count);
          set({ streak: { count, best, last: today }, daily: freshDaily(get().daily) });
          if (get().onboarded) {
            if (count > 1) useUI.getState().celebrate({ kind: 'day', count, best });
            gain(MILES.day * Math.min(count, 7), 'gamify.reward.day', { count });
          }
        },

        toggleSave: (id) => {
          if (get().savedIds.includes(id)) {
            set((s) => ({
              savedIds: s.savedIds.filter((x) => x !== id),
              collections: s.collections.map((c) => ({ ...c, itemIds: c.itemIds.filter((x) => x !== id) })),
            }));
            return false;
          }
          set((s) => ({ savedIds: [id, ...s.savedIds] }));
          bump('save');
          gain(MILES.save, 'gamify.reward.saved');
          return true;
        },

        createCollection: (name, emoji, itemId) => {
          const id = uid();
          set((s) => ({
            collections: [...s.collections, { id, name, emoji, itemIds: itemId ? [itemId] : [], createdAt: Date.now() }],
            savedIds: itemId && !s.savedIds.includes(itemId) ? [itemId, ...s.savedIds] : s.savedIds,
          }));
          gain(MILES.collection, 'gamify.reward.collection');
          return id;
        },

        toggleInCollection: (collectionId, itemId) =>
          set((s) => ({
            collections: s.collections.map((c) =>
              c.id !== collectionId ? c : { ...c, itemIds: c.itemIds.includes(itemId) ? c.itemIds.filter((x) => x !== itemId) : [itemId, ...c.itemIds] },
            ),
            savedIds: s.savedIds.includes(itemId) ? s.savedIds : [itemId, ...s.savedIds],
          })),

        deleteCollection: (id) => set((s) => ({ collections: s.collections.filter((c) => c.id !== id) })),

        toggleBeenHere: (id) => {
          if (get().beenHere.includes(id)) return set((s) => ({ beenHere: s.beenHere.filter((x) => x !== id) }));
          set((s) => ({ beenHere: [id, ...s.beenHere] }));
          const code = destinationById(id)?.countryCode ?? destinationById(placeById(id)?.destinationId ?? '')?.countryCode;
          if (code && !get().visited.includes(code)) {
            set((s) => ({ visited: [...s.visited, code] }));
            gain(MILES.been + MILES.visitCountry, 'gamify.reward.newCountry');
          } else gain(MILES.been, 'gamify.reward.been');
        },

        toggleVisited: (code) => {
          if (get().visited.includes(code)) return set((s) => ({ visited: s.visited.filter((c) => c !== code) }));
          set((s) => ({ visited: [...s.visited, code] }));
          gain(MILES.visitCountry, 'gamify.reward.stamp');
        },

        toggleJoin: (meetupId) => {
          if (get().joined.includes(meetupId)) return set((s) => ({ joined: s.joined.filter((x) => x !== meetupId) }));
          set((s) => ({ joined: [...s.joined, meetupId] }));
          bump('join');
          gain(MILES.join, 'gamify.reward.join');
          const m = [...seedMeetups, ...get().myMeetups].find((x) => x.id === meetupId);
          const host = m && userById(m.hostId);
          if (m && host) {
            const first = (get().profile.name || t('onboarding.defaultName')).split(' ')[0]!;
            setTimeout(() => get().sendMessage(meetupId, t('meetups.hostGreeting', { name: first }), host.id), 1600);
          }
        },

        createMeetup: (m) => {
          const id = `my-${uid()}`;
          set((s) => ({ myMeetups: [{ ...m, id, hostId: 'me', attendeeIds: [], createdByMe: true }, ...s.myMeetups], joined: [...s.joined, id] }));
          gain(MILES.host, 'gamify.reward.host');
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
          gain(MILES.trip, 'gamify.reward.trip');
          return id;
        },

        addToTrip: (tripId, placeId, day = 0) =>
          set((s) => ({
            trips: s.trips.map((tr) => (tr.id !== tripId || tr.items.some((i) => i.placeId === placeId) ? tr : { ...tr, items: [...tr.items, { id: uid(), placeId, day }] })),
          })),

        removeFromTrip: (tripId, itemId) =>
          set((s) => ({ trips: s.trips.map((tr) => (tr.id !== tripId ? tr : { ...tr, items: tr.items.filter((i) => i.id !== itemId) })) })),

        moveTripItem: (tripId, itemId, day) =>
          set((s) => ({ trips: s.trips.map((tr) => (tr.id !== tripId ? tr : { ...tr, items: tr.items.map((i) => (i.id === itemId ? { ...i, day } : i)) })) })),

        autoPlanTrip: (tripId) => {
          const trip = get().trips.find((x) => x.id === tripId);
          if (!trip) return 0;
          const days = Math.max(1, daysBetween(trip.start, trip.end) + 1);
          const plan = planRoute(trip.destinationId, days);
          const items = plan.flatMap((ids, day) => ids.map((placeId) => ({ id: uid(), placeId, day })));
          set((s) => ({ trips: s.trips.map((x) => (x.id === tripId ? { ...x, items } : x)) }));
          return items.length;
        },

        toggleChecklist: (tripId, itemId) =>
          set((s) => ({
            trips: s.trips.map((tr) => (tr.id !== tripId ? tr : { ...tr, checklist: tr.checklist.map((c) => (c.id === itemId ? { ...c, done: !c.done } : c)) })),
          })),

        addChecklist: (tripId, text) =>
          set((s) => ({ trips: s.trips.map((tr) => (tr.id !== tripId ? tr : { ...tr, checklist: [...tr.checklist, { id: uid(), text, done: false }] })) })),

        deleteTrip: (id) => set((s) => ({ trips: s.trips.filter((tr) => tr.id !== id) })),

        addReview: (targetId, rating, text) => {
          set((s) => ({ myReviews: [{ id: uid(), targetId, authorId: 'me', rating, text, daysAgo: 0, likes: 0 }, ...s.myReviews] }));
          gain(MILES.review, 'gamify.reward.review');
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
          gain(MILES.follow, 'gamify.reward.follow');
        },

        sendMessage: (meetupId, text, userId = 'me') =>
          set((s) => ({ chats: { ...s.chats, [meetupId]: [...(s.chats[meetupId] ?? []), { id: uid(), userId, text, at: Date.now() }] } })),

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
          gain(MILES.guide, 'gamify.reward.guide');
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
          gain(quest.miles, 'gamify.reward.quest');
        },

        setMapStyle: (mapStyle) => set({ mapStyle }),
        markNotificationsSeen: () => set({ notificationsSeenAt: Date.now() }),

        startPlus: (plan) => {
          set({ plus: { active: true, plan, since: Date.now() } });
          useUI.getState().celebrate({ kind: 'plus' });
        },
        stopPlus: () => set((s) => ({ plus: { active: false, plan: null, since: 0 }, passportCover: 'classic', profile: { ...s.profile, avatar: { ...s.profile.avatar, accessory: Math.min(s.profile.avatar.accessory, 5) } } })),
        setPassportCover: (passportCover) => set({ passportCover }),
        markOffline: (id) => set((s) => ({ offline: s.offline.includes(id) ? s.offline : [...s.offline, id] })),

        reset: () => set({ ...initial(), locale: get().locale }),
      };
    },
    {
      name: 'vylo-state-v2',
      storage: createJSONStorage(() => localStorage),
      version: 2,
    },
  ),
);

/** All meetups: curated plus the ones the user created. */
export function useAllMeetups() {
  const mine = useApp((s) => s.myMeetups);
  return [...mine, ...seedMeetups.filter((m) => !isHiddenMeetup(m.id))];
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
