import { create } from 'zustand';
import type { Achievement } from '@/lib/gamification';
import { uid } from '@/lib/utils';

export type Celebration =
  | { kind: 'achievement'; achievement: Achievement }
  | { kind: 'level'; level: number; name: string }
  | { kind: 'streak'; count: number; best: number };

export type Sheet =
  | { type: 'create' }
  | { type: 'collect'; itemId: string }
  | { type: 'new-collection' }
  | { type: 'trip'; itemId?: string }
  | { type: 'review'; targetId: string }
  | { type: 'country'; code: string }
  | { type: 'story'; index: number };

interface Reward {
  id: string;
  xp: number;
  label: string;
}

interface UIState {
  rewards: Reward[];
  celebrations: Celebration[];
  sheet: Sheet | null;
  pushReward: (xp: number, label: string) => void;
  dropReward: (id: string) => void;
  celebrate: (c: Celebration) => void;
  nextCelebration: () => void;
  openSheet: (s: Sheet) => void;
  closeSheet: () => void;
}

export const useUI = create<UIState>((set) => ({
  rewards: [],
  celebrations: [],
  sheet: null,
  pushReward: (xp, label) => set((s) => ({ rewards: [...s.rewards.slice(-2), { id: uid(), xp, label }] })),
  dropReward: (id) => set((s) => ({ rewards: s.rewards.filter((r) => r.id !== id) })),
  // A short beat first, so the action that earned it (a save, a join) visibly lands.
  celebrate: (c) => setTimeout(() => set((s) => ({ celebrations: [...s.celebrations, c] })), 700),
  nextCelebration: () => set((s) => ({ celebrations: s.celebrations.slice(1) })),
  openSheet: (sheet) => set({ sheet }),
  closeSheet: () => set({ sheet: null }),
}));
