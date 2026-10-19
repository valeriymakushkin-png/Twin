'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { applyOverrides, emptyOverrides, type CatalogOverrides } from '@/data/catalog';
import { api, hasApi } from '@/lib/api';

interface CatalogState {
  overrides: CatalogOverrides;
  /** Where the current edits came from: this device or the published server copy */
  source: 'local' | 'remote';
  revision: number;
  setOverrides: (o: CatalogOverrides, source?: 'local' | 'remote', revision?: number) => void;
  /** Pull the published catalogue from the API (no-op without one). */
  sync: () => Promise<void>;
}

export const useCatalog = create<CatalogState>()(
  persist(
    (set, get) => ({
      overrides: emptyOverrides(),
      source: 'local',
      revision: 0,
      setOverrides: (overrides, source = get().source, revision = get().revision) => {
        applyOverrides(overrides);
        set({ overrides, source, revision });
      },
      sync: async () => {
        if (!hasApi()) return;
        try {
          const r = await api<{ revision: number; overrides: CatalogOverrides }>('/content');
          if (r.revision !== get().revision || get().source !== 'remote') get().setOverrides({ ...emptyOverrides(), ...r.overrides }, 'remote', r.revision);
        } catch {
          /* offline: keep the cached copy */
        }
      },
    }),
    {
      name: 'vylo-catalog-v1',
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ overrides: s.overrides, source: s.source, revision: s.revision }),
      onRehydrateStorage: () => (s) => {
        if (s) applyOverrides(s.overrides);
      },
    },
  ),
);
