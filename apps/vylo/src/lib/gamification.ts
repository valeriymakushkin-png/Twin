import { hash } from './utils';

/**
 * Vylo's progression is framed as a frequent-flyer journey: actions earn *miles*, miles raise your
 * traveller *status*, consecutive days are *days on the road*, daily goals are *today's route*, and
 * milestones are embroidered *patches* for your backpack.
 */
export const MILES = {
  save: 10,
  been: 25,
  visitCountry: 50,
  join: 30,
  host: 60,
  review: 40,
  trip: 30,
  collection: 15,
  day: 10,
  follow: 5,
  guide: 5,
} as const;

export const STATUS_THRESHOLDS = [0, 100, 300, 600, 1000, 1600, 2500, 4000] as const;
export type StatusKey = 's1' | 's2' | 's3' | 's4' | 's5' | 's6' | 's7' | 's8';

/** Card colours for each status, from paper ticket to black card. */
export const STATUS_STYLE: { from: string; to: string; ink: string }[] = [
  { from: '#e2e8f0', to: '#cbd5e1', ink: '#334155' },
  { from: '#bae6fd', to: '#7dd3fc', ink: '#075985' },
  { from: '#a7f3d0', to: '#34d399', ink: '#065f46' },
  { from: '#c7d2fe', to: '#818cf8', ink: '#312e81' },
  { from: '#fde68a', to: '#f59e0b', ink: '#78350f' },
  { from: '#fecdd3', to: '#fb7185', ink: '#881337' },
  { from: '#ddd6fe', to: '#8b5cf6', ink: '#2e1065' },
  { from: '#334155', to: '#0f172a', ink: '#fde68a' },
];

export function statusFor(miles: number) {
  let index = 0;
  STATUS_THRESHOLDS.forEach((t, i) => {
    if (miles >= t) index = i;
  });
  const next = STATUS_THRESHOLDS[index + 1];
  const current = STATUS_THRESHOLDS[index]!;
  return {
    index,
    level: index + 1,
    key: `s${index + 1}` as StatusKey,
    nextKey: next !== undefined ? (`s${index + 2}` as StatusKey) : undefined,
    progress: next !== undefined ? (miles - current) / (next - current) : 1,
    toNext: next !== undefined ? next - miles : 0,
    style: STATUS_STYLE[index]!,
  };
}

/** Snapshot of the counters patches and route steps read. */
export interface Progress {
  saved: number;
  collections: number;
  visited: number;
  beenHere: number;
  joined: number;
  hosted: number;
  reviews: number;
  trips: number;
  streak: number;
  visaChecks: number;
  guidesRead: number;
  following: number;
}

export type PatchIcon = 'bookmark' | 'library' | 'globe' | 'plane' | 'users' | 'megaphone' | 'pen' | 'map' | 'compass' | 'passport' | 'flag' | 'book';
export type PatchKey = 'firstSave' | 'firstStep' | 'planner' | 'social' | 'streak3' | 'visaPro' | 'collector' | 'critic' | 'host' | 'explorer5' | 'reader' | 'streak7' | 'explorer15';

export interface Patch {
  id: PatchKey;
  icon: PatchIcon;
  color: string;
  metric: keyof Progress;
  target: number;
  miles: number;
}

export const patches: Patch[] = [
  { id: 'firstSave', icon: 'bookmark', color: '#6366f1', metric: 'saved', target: 1, miles: 20 },
  { id: 'firstStep', icon: 'flag', color: '#10b981', metric: 'beenHere', target: 1, miles: 20 },
  { id: 'planner', icon: 'map', color: '#0ea5e9', metric: 'trips', target: 1, miles: 40 },
  { id: 'social', icon: 'users', color: '#ec4899', metric: 'joined', target: 3, miles: 60 },
  { id: 'streak3', icon: 'compass', color: '#0d9488', metric: 'streak', target: 3, miles: 30 },
  { id: 'visaPro', icon: 'passport', color: '#8b5cf6', metric: 'visaChecks', target: 5, miles: 40 },
  { id: 'collector', icon: 'library', color: '#f59e0b', metric: 'saved', target: 10, miles: 60 },
  { id: 'critic', icon: 'pen', color: '#14b8a6', metric: 'reviews', target: 3, miles: 80 },
  { id: 'host', icon: 'megaphone', color: '#ef4444', metric: 'hosted', target: 1, miles: 80 },
  { id: 'explorer5', icon: 'plane', color: '#0284c7', metric: 'visited', target: 5, miles: 100 },
  { id: 'reader', icon: 'book', color: '#64748b', metric: 'guidesRead', target: 3, miles: 30 },
  { id: 'streak7', icon: 'compass', color: '#c2410c', metric: 'streak', target: 7, miles: 100 },
  { id: 'explorer15', icon: 'globe', color: '#16a34a', metric: 'visited', target: 15, miles: 250 },
];

export function earnedPatches(p: Progress) {
  return patches.filter((a) => p[a.metric] >= a.target).map((a) => a.id);
}

export type QuestKey = 'save' | 'view' | 'visa' | 'like' | 'guide' | 'explore' | 'join' | 'follow';

export interface Quest {
  id: string;
  key: QuestKey;
  target: number;
  miles: number;
  href: string;
}

const questPool: Quest[] = [
  { id: 'q-save', key: 'save', target: 2, miles: 30, href: '/discover/' },
  { id: 'q-view', key: 'view', target: 3, miles: 25, href: '/discover/' },
  { id: 'q-visa', key: 'visa', target: 1, miles: 20, href: '/visa/' },
  { id: 'q-like', key: 'like', target: 3, miles: 15, href: '/discover/' },
  { id: 'q-guide', key: 'guide', target: 1, miles: 25, href: '/discover/' },
  { id: 'q-explore', key: 'explore', target: 2, miles: 20, href: '/map/' },
  { id: 'q-join', key: 'join', target: 1, miles: 40, href: '/meetups/' },
  { id: 'q-follow', key: 'follow', target: 1, miles: 15, href: '/discover/' },
];

/** Three route steps per day, the same for everyone on that date. */
export function questsFor(date: string): Quest[] {
  const pool = [...questPool];
  const out: Quest[] = [];
  let seed = hash(date);
  while (out.length < 3 && pool.length) {
    out.push(pool.splice(seed % pool.length, 1)[0]!);
    seed = hash(`${seed}`);
  }
  return out;
}
