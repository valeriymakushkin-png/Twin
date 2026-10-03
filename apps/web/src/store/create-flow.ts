'use client';

import { create } from 'zustand';
import type { PhotoDto, StyleSlug } from '@mascot/shared';

export interface LocalPhoto {
  key: string;
  previewUrl: string;
  status: 'uploading' | 'accepted' | 'rejected' | 'error';
  remote?: PhotoDto;
  reason?: string;
  /** Stable reject code for localized text (falls back to `reason`). */
  code?: string;
}

interface CreateFlowState {
  photos: LocalPhoto[];
  styleSlug: StyleSlug;
  name: string;
  addPhotos: (photos: LocalPhoto[]) => void;
  updatePhoto: (key: string, patch: Partial<LocalPhoto>) => void;
  removePhoto: (key: string) => void;
  setStyle: (slug: StyleSlug) => void;
  setName: (name: string) => void;
  reset: () => void;
}

export const useCreateFlow = create<CreateFlowState>((set) => ({
  photos: [],
  styleSlug: 'pixar',
  name: '',
  addPhotos: (photos) => set((s) => ({ photos: [...s.photos, ...photos] })),
  updatePhoto: (key, patch) => set((s) => ({ photos: s.photos.map((p) => (p.key === key ? { ...p, ...patch } : p)) })),
  removePhoto: (key) =>
    set((s) => {
      const photo = s.photos.find((p) => p.key === key);
      if (photo) URL.revokeObjectURL(photo.previewUrl);
      return { photos: s.photos.filter((p) => p.key !== key) };
    }),
  setStyle: (styleSlug) => set({ styleSlug }),
  setName: (name) => set({ name }),
  reset: () =>
    set((s) => {
      s.photos.forEach((p) => URL.revokeObjectURL(p.previewUrl));
      return { photos: [], name: '', styleSlug: 'pixar' };
    }),
}));
