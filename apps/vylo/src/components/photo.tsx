'use client';

import { useState, type ReactNode } from 'react';
import { cn, hash, photoUrl } from '@/lib/utils';

const palettes: [string, string, string][] = [
  ['#38bdf8', '#6366f1', '#1e1b4b'],
  ['#34d399', '#0ea5e9', '#0c4a6e'],
  ['#fbbf24', '#f97316', '#7c2d12'],
  ['#c084fc', '#ec4899', '#500724'],
  ['#5eead4', '#0f766e', '#042f2e'],
  ['#fda4af', '#8b5cf6', '#2e1065'],
];

/**
 * A photo that fades in over a shimmer and, if the network can't deliver it, degrades into a
 * deterministic illustrated landscape — so a card never shows a broken image.
 */
export function Photo({
  id,
  alt,
  className,
  width = 800,
  priority = false,
  rounded,
  fallback,
}: {
  id: string;
  alt: string;
  className?: string;
  width?: number;
  priority?: boolean;
  rounded?: string;
  /** Custom content for when the photo can't load (e.g. initials for avatars) */
  fallback?: ReactNode;
}) {
  const [state, setState] = useState<'loading' | 'ok' | 'error'>(id ? 'loading' : 'error');
  const seed = hash(id || alt);
  const [a, b, c] = palettes[seed % palettes.length]!;
  const sunX = 25 + (seed % 50);

  return (
    <div className={cn('relative overflow-hidden bg-surface-2', rounded, className)}>
      {state !== 'ok' && (
        <div
          aria-hidden
          className={cn('absolute inset-0', state === 'loading' && 'skeleton')}
          style={state === 'error' && !fallback ? { background: `linear-gradient(160deg, ${a} 0%, ${b} 55%, ${c} 100%)` } : undefined}
        >
          {state === 'error' && fallback}
          {state === 'error' && !fallback && (
            <span className="absolute aspect-square w-[22%] rounded-full bg-white/35" style={{ left: `${sunX - 11}%`, top: '20%' }} />
          )}
          {state === 'error' && !fallback && (
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              <path d={`M0 70 L${18 + (seed % 10)} 48 L35 62 L${55 + (seed % 8)} 38 L75 58 L88 46 L100 56 L100 100 L0 100Z`} fill="white" opacity="0.16" />
              <path d="M0 80 Q25 70 50 78 T100 76 L100 100 L0 100Z" fill="white" opacity="0.18" />
              <path d="M0 90 Q30 84 60 90 T100 88 L100 100 L0 100Z" fill="black" opacity="0.12" />
            </svg>
          )}
        </div>
      )}
      {state !== 'error' && id && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photoUrl(id, width)}
          srcSet={`${photoUrl(id, width)} 1x, ${photoUrl(id, Math.min(width * 2, 2000))} 2x`}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          draggable={false}
          onLoad={() => setState('ok')}
          onError={() => setState('error')}
          className={cn('absolute inset-0 h-full w-full object-cover transition-opacity duration-500', state === 'ok' ? 'opacity-100' : 'opacity-0')}
        />
      )}
    </div>
  );
}
