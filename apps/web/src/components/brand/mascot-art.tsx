'use client';

import { useMemo } from 'react';
import { renderMascotSvg, type MascotDna, type StickerEmotion } from '@mascot/shared';
import { cn } from '@/lib/cn';

/** Procedural DNA-driven mascot illustration (landing showcase, placeholders, empty states). */
export function MascotArt({
  dna,
  emotion = 'happy',
  background,
  className,
  sticker,
}: {
  dna: MascotDna;
  emotion?: StickerEmotion | 'neutral';
  background?: [string, string] | 'transparent';
  className?: string;
  sticker?: boolean;
}) {
  const src = useMemo(
    () => `data:image/svg+xml;utf8,${encodeURIComponent(renderMascotSvg(dna, { emotion, background: background ?? 'transparent', stickerOutline: sticker }))}`,
    [dna, emotion, background, sticker],
  );
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" draggable={false} className={cn('select-none', className)} />;
}
