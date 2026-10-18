import { create } from 'zustand';
import type { Patch, StatusKey } from '@/lib/gamification';
import { uid } from '@/lib/utils';

export type Celebration =
  | { kind: 'patch'; patch: Patch }
  | { kind: 'status'; level: number; key: StatusKey }
  | { kind: 'day'; count: number; best: number }
  | { kind: 'plus' };

export type Sheet =
  | { type: 'create' }
  | { type: 'collect'; itemId: string }
  | { type: 'new-collection' }
  | { type: 'trip'; itemId?: string }
  | { type: 'review'; targetId: string }
  | { type: 'country'; code: string }
  | { type: 'story'; index: number }
  | { type: 'paywall'; feature?: string };

interface Reward {
  id: string;
  miles: number;
  labelKey: string;
  vars?: Record<string, string | number>;
}

interface UIState {
  rewards: Reward[];
  celebrations: Celebration[];
  sheet: Sheet | null;
  pushReward: (miles: number, labelKey: string, vars?: Record<string, string | number>) => void;
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
  pushReward: (miles, labelKey, vars) => set((s) => ({ rewards: [...s.rewards.slice(-2), { id: uid(), miles, labelKey, vars }] })),
  dropReward: (id) => set((s) => ({ rewards: s.rewards.filter((r) => r.id !== id) })),
  // A short beat first, so the action that earned it (a save, a join) visibly lands.
  celebrate: (c) => setTimeout(() => set((s) => ({ celebrations: [...s.celebrations, c] })), 700),
  nextCelebration: () => set((s) => ({ celebrations: s.celebrations.slice(1) })),
  openSheet: (sheet) => set({ sheet }),
  closeSheet: () => set({ sheet: null }),
}));
