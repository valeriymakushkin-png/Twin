import { hash } from './utils';

export const XP = {
  save: 10,
  beenHere: 25,
  visitCountry: 50,
  join: 30,
  hostMeetup: 60,
  review: 40,
  trip: 30,
  collection: 15,
  checkIn: 10,
  follow: 5,
  chat: 5,
} as const;

export const levels = [
  { name: 'Новичок', xp: 0 },
  { name: 'Турист', xp: 100 },
  { name: 'Путешественник', xp: 300 },
  { name: 'Исследователь', xp: 600 },
  { name: 'Странник', xp: 1000 },
  { name: 'Кочевник', xp: 1600 },
  { name: 'Первооткрыватель', xp: 2500 },
  { name: 'Легенда', xp: 4000 },
] as const;

export function levelFor(xp: number) {
  let index = 0;
  for (let i = 0; i < levels.length; i++) if (xp >= levels[i]!.xp) index = i;
  const current = levels[index]!;
  const next = levels[index + 1];
  const progress = next ? (xp - current.xp) / (next.xp - current.xp) : 1;
  return { index, level: index + 1, name: current.name, next, progress, toNext: next ? next.xp - xp : 0 };
}

/** Snapshot of the counters achievements and quests read. */
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

export type AchievementIcon = 'bookmark' | 'library' | 'globe' | 'plane' | 'users' | 'megaphone' | 'pen' | 'map' | 'flame' | 'passport' | 'flag' | 'book';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: AchievementIcon;
  color: string;
  metric: keyof Progress;
  target: number;
  xp: number;
}

export const achievements: Achievement[] = [
  { id: 'first-save', title: 'Первая искра', description: 'Сохраните первое место', icon: 'bookmark', color: '#6366f1', metric: 'saved', target: 1, xp: 20 },
  { id: 'first-step', title: 'Я здесь был', description: 'Отметьте место, где побывали', icon: 'flag', color: '#10b981', metric: 'beenHere', target: 1, xp: 20 },
  { id: 'planner', title: 'Планировщик', description: 'Создайте первую поездку', icon: 'map', color: '#0ea5e9', metric: 'trips', target: 1, xp: 40 },
  { id: 'social', title: 'Душа компании', description: 'Присоединитесь к 3 встречам', icon: 'users', color: '#ec4899', metric: 'joined', target: 3, xp: 60 },
  { id: 'streak-3', title: 'В ритме', description: 'Заходите 3 дня подряд', icon: 'flame', color: '#f97316', metric: 'streak', target: 3, xp: 30 },
  { id: 'visa-pro', title: 'Визовый эксперт', description: 'Проверьте визы в 5 странах', icon: 'passport', color: '#8b5cf6', metric: 'visaChecks', target: 5, xp: 40 },
  { id: 'collector', title: 'Коллекционер', description: 'Сохраните 10 мест', icon: 'library', color: '#f59e0b', metric: 'saved', target: 10, xp: 60 },
  { id: 'critic', title: 'Голос сообщества', description: 'Напишите 3 отзыва', icon: 'pen', color: '#14b8a6', metric: 'reviews', target: 3, xp: 80 },
  { id: 'host', title: 'Организатор', description: 'Создайте свою встречу', icon: 'megaphone', color: '#ef4444', metric: 'hosted', target: 1, xp: 80 },
  { id: 'explorer-5', title: 'Покоритель границ', description: 'Побывайте в 5 странах', icon: 'plane', color: '#0ea5e9', metric: 'visited', target: 5, xp: 100 },
  { id: 'reader', title: 'Книжный червь', description: 'Прочитайте 3 гида', icon: 'book', color: '#64748b', metric: 'guidesRead', target: 3, xp: 30 },
  { id: 'streak-7', title: 'Неделя огня', description: 'Серия 7 дней подряд', icon: 'flame', color: '#ef4444', metric: 'streak', target: 7, xp: 100 },
  { id: 'explorer-15', title: 'Гражданин мира', description: 'Побывайте в 15 странах', icon: 'globe', color: '#10b981', metric: 'visited', target: 15, xp: 250 },
];

export function unlockedAchievements(p: Progress) {
  return achievements.filter((a) => p[a.metric] >= a.target).map((a) => a.id);
}

export type QuestKey = 'save' | 'view' | 'visa' | 'like' | 'guide' | 'explore' | 'join' | 'follow';

export interface Quest {
  id: string;
  key: QuestKey;
  title: string;
  target: number;
  xp: number;
  href: string;
}

const questPool: Quest[] = [
  { id: 'q-save', key: 'save', title: 'Сохраните 2 новых места', target: 2, xp: 30, href: '/discover/' },
  { id: 'q-view', key: 'view', title: 'Откройте 3 направления', target: 3, xp: 25, href: '/discover/' },
  { id: 'q-visa', key: 'visa', title: 'Проверьте визу для поездки', target: 1, xp: 20, href: '/visa/' },
  { id: 'q-like', key: 'like', title: 'Поставьте лайк 3 отзывам', target: 3, xp: 15, href: '/discover/' },
  { id: 'q-guide', key: 'guide', title: 'Прочитайте гид путешественника', target: 1, xp: 25, href: '/discover/' },
  { id: 'q-explore', key: 'explore', title: 'Исследуйте 2 места на карте', target: 2, xp: 20, href: '/map/' },
  { id: 'q-join', key: 'join', title: 'Присоединитесь к встрече', target: 1, xp: 40, href: '/meetups/' },
  { id: 'q-follow', key: 'follow', title: 'Подпишитесь на путешественника', target: 1, xp: 15, href: '/discover/' },
];

/** Three quests per day, the same for everyone on that date. */
export function questsFor(date: string): Quest[] {
  const pool = [...questPool];
  const out: Quest[] = [];
  let seed = hash(date);
  while (out.length < 3 && pool.length) {
    const i = seed % pool.length;
    out.push(pool.splice(i, 1)[0]!);
    seed = hash(`${seed}`);
  }
  return out;
}
