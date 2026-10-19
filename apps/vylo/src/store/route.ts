'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { optimizeOrder, type RoutePoint, type TravelMode } from '@/lib/routing';

interface RouteState {
  stops: RoutePoint[];
  mode: TravelMode;
  /** The route panel is showing on the map */
  open: boolean;
  setStops: (stops: RoutePoint[]) => void;
  add: (p: RoutePoint) => void;
  remove: (index: number) => void;
  move: (index: number, by: -1 | 1) => void;
  optimize: () => void;
  setMode: (m: TravelMode) => void;
  setOpen: (open: boolean) => void;
  clear: () => void;
}

export const MY_LOCATION = 'me';

export const useRoute = create<RouteState>()(
  persist(
    (set, get) => ({
      stops: [],
      mode: 'walk',
      open: false,
      setStops: (stops) => set({ stops, open: true }),
      add: (p) => {
        if (p.id && get().stops.some((s) => s.id === p.id)) return;
        set((s) => ({ stops: [...s.stops, p], open: true }));
      },
      remove: (index) => set((s) => ({ stops: s.stops.filter((_, i) => i !== index) })),
      move: (index, by) =>
        set((s) => {
          const j = index + by;
          if (j < 0 || j >= s.stops.length) return s;
          const stops = [...s.stops];
          [stops[index], stops[j]] = [stops[j]!, stops[index]!];
          return { stops };
        }),
      optimize: () => set((s) => ({ stops: optimizeOrder(s.stops) })),
      setMode: (mode) => set({ mode }),
      setOpen: (open) => set({ open }),
      clear: () => set({ stops: [], open: false }),
    }),
    { name: 'vylo-route-v1', storage: createJSONStorage(() => localStorage), partialize: (s) => ({ stops: s.stops, mode: s.mode }) },
  ),
);
