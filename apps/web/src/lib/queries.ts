'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import type { GenerationDto } from '@mascot/shared';
import { api } from './api';
import { haptic } from './telegram';

export const qk = {
  profile: ['profile'] as const,
  styles: ['styles'] as const,
  avatars: ['avatars'] as const,
  avatar: (id: string) => ['avatar', id] as const,
  generation: (id: string) => ['generation', id] as const,
  stickerPacks: (avatarId?: string) => ['sticker-packs', avatarId ?? 'all'] as const,
  memes: (avatarId?: string) => ['memes', avatarId ?? 'all'] as const,
  pfps: (avatarId?: string) => ['pfps', avatarId ?? 'all'] as const,
  videos: (avatarId?: string) => ['videos', avatarId ?? 'all'] as const,
  library: ['library'] as const,
  products: ['products'] as const,
};

export function useProfile(enabled = true) {
  return useQuery({ queryKey: qk.profile, queryFn: api.profile.get, enabled, staleTime: 15_000 });
}

export function useStyles() {
  return useQuery({ queryKey: qk.styles, queryFn: api.styles, staleTime: 5 * 60_000 });
}

export function useAvatars(enabled = true) {
  return useQuery({ queryKey: qk.avatars, queryFn: api.avatars.list, enabled });
}

export function useAvatar(id: string) {
  return useQuery({
    queryKey: qk.avatar(id),
    queryFn: () => api.avatars.get(id),
    refetchInterval: (q) => (q.state.data?.status === 'PROCESSING' ? 2500 : false),
  });
}

const TERMINAL = new Set(['SUCCEEDED', 'FAILED', 'CANCELED']);

/**
 * Polls a generation until it reaches a terminal state. Polling (not SSE/WebSockets) is
 * deliberate: it is the most reliable transport inside Telegram's in-app webviews.
 */
export function useGeneration(id: string | null | undefined, onDone?: (g: GenerationDto) => void) {
  const notified = useRef<string | null>(null);
  const query = useQuery({
    queryKey: qk.generation(id ?? 'none'),
    queryFn: () => api.generations.get(id!),
    enabled: Boolean(id),
    refetchInterval: (q) => (q.state.data && TERMINAL.has(q.state.data.status) ? false : 1200),
  });
  useEffect(() => {
    const g = query.data;
    if (g && TERMINAL.has(g.status) && notified.current !== g.id) {
      notified.current = g.id;
      if (g.status === 'SUCCEEDED') haptic.success();
      else haptic.error();
      onDone?.(g);
    }
  }, [query.data, onDone]);
  return query;
}

export function useStickerPacks(avatarId?: string) {
  return useQuery({
    queryKey: qk.stickerPacks(avatarId),
    queryFn: () => api.stickers.list(avatarId),
    refetchInterval: (q) => (q.state.data?.some((p) => p.status === 'GENERATING' || p.status === 'PUBLISHING') ? 2000 : false),
  });
}

export function useMemes(avatarId?: string) {
  return useQuery({
    queryKey: qk.memes(avatarId),
    queryFn: () => api.memes.list(avatarId),
    refetchInterval: (q) => (q.state.data?.some((m) => m.status === 'PENDING') ? 1500 : false),
  });
}

export function usePfps(avatarId?: string) {
  return useQuery({
    queryKey: qk.pfps(avatarId),
    queryFn: () => api.pfp.list(avatarId),
    refetchInterval: (q) => (q.state.data?.some((m) => m.status === 'PENDING') ? 1500 : false),
  });
}

export function useVideos(avatarId?: string) {
  return useQuery({
    queryKey: qk.videos(avatarId),
    queryFn: () => api.videos.list(avatarId),
    refetchInterval: (q) => (q.state.data?.some((v) => v.status === 'QUEUED' || v.status === 'PROCESSING') ? 3000 : false),
  });
}

export function useLibrary() {
  return useQuery({ queryKey: qk.library, queryFn: api.library });
}

export function useProducts() {
  return useQuery({ queryKey: qk.products, queryFn: api.payments.products, staleTime: 10 * 60_000 });
}

export function useInvalidate() {
  const client = useQueryClient();
  return (...keys: ReadonlyArray<readonly unknown[]>) => Promise.all(keys.map((queryKey) => client.invalidateQueries({ queryKey })));
}

export { useMutation, useQueryClient };
