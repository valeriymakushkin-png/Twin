'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { hasPhotoApi, photoMeta, photoUrl, resolvePhoto } from '@/lib/photos';
import { cn, hash } from '@/lib/utils';

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
  tint,
}: {
  id: string;
  alt: string;
  className?: string;
  width?: number;
  priority?: boolean;
  rounded?: string;
  /** Custom content for when the photo can't load */
  fallback?: ReactNode;
  /** Accent colour for the illustrated fallback */
  tint?: string;
}) {
  const [state, setState] = useState<'loading' | 'ok' | 'error'>(id ? 'loading' : 'error');
  const [, setResolved] = useState(0);
  const seed = hash(id || alt);
  const [a, b, c] = palettes[seed % palettes.length]!;
  const sunX = 25 + (seed % 50);

  useEffect(() => {
    if (!hasPhotoApi || !id || photoMeta(id)) return;
    let alive = true;
    resolvePhoto(id).then((m) => alive && m && setResolved((n) => n + 1));
    return () => {
      alive = false;
    };
  }, [id]);

  const waiting = hasPhotoApi && id && !photoMeta(id);

  return (
    <div className={cn('relative overflow-hidden bg-surface-2', rounded, className)}>
      {state !== 'ok' && (
        <div
          aria-hidden
          className={cn('absolute inset-0', state === 'loading' && 'skeleton')}
          style={state === 'error' && !fallback ? { background: `linear-gradient(160deg, ${tint ?? a} 0%, ${b} 55%, ${c} 100%)` } : undefined}
        >
          {state === 'error' && fallback}
          {state === 'error' && !fallback && (
            <>
              <span className="absolute aspect-square w-[22%] rounded-full bg-white/35" style={{ left: `${sunX - 11}%`, top: '20%' }} />
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                <path d={`M0 70 L${18 + (seed % 10)} 48 L35 62 L${55 + (seed % 8)} 38 L75 58 L88 46 L100 56 L100 100 L0 100Z`} fill="white" opacity="0.16" />
                <path d="M0 80 Q25 70 50 78 T100 76 L100 100 L0 100Z" fill="white" opacity="0.18" />
                <path d="M0 90 Q30 84 60 90 T100 88 L100 100 L0 100Z" fill="black" opacity="0.12" />
              </svg>
            </>
          )}
        </div>
      )}
      {state !== 'error' && id && !waiting && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photoUrl(id, width)}
          srcSet={`${photoUrl(id, width)} 1x, ${photoUrl(id, Math.min(width * 2, 2000))} 2x`}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          draggable={false}
          referrerPolicy="no-referrer"
          onLoad={() => setState('ok')}
          onError={() => setState('error')}
          className={cn('absolute inset-0 h-full w-full object-cover transition-opacity duration-500', state === 'ok' ? 'opacity-100' : 'opacity-0')}
        />
      )}
    </div>
  );
}

/** Small "Photo: author / Unsplash" credit, linked when the API supplied the photographer. */
export function PhotoCredit({ id, className }: { id: string; className?: string }) {
  const meta = photoMeta(id);
  return (
    <a
      href={meta?.page ?? `https://unsplash.com/photos/${id}`}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={cn('text-[10px] font-medium text-white/75 underline-offset-2 hover:underline', className)}
    >
      © {meta?.author ? `${meta.author} / ` : ''}Unsplash
    </a>
  );
}
