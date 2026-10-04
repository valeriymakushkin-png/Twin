'use client';

import { useEffect, useRef, useState } from 'react';
import type { MascotDna } from '@mascot/shared';
import { MascotArt } from '@/components/brand/mascot-art';
import { cn } from '@/lib/cn';
import { useShot, webglSupported, type ShotOptions } from '@/lib/mascot3d';

/** Static 3D snapshot of a DNA (thumbnails). Falls back to the SVG renderer without WebGL. */
export function MascotShot({ dna, className, imgClassName, ...opts }: ShotOptions & { dna: MascotDna; className?: string; imgClassName?: string }) {
  const url = useShot(dna, opts);
  if (typeof window !== 'undefined' && !webglSupported()) {
    return <MascotArt dna={dna} emotion={(opts.emotion as never) ?? 'happy'} className={cn(className, imgClassName)} />;
  }
  return (
    <div className={cn('relative', className)}>
      {url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt="" draggable={false} className={cn('size-full select-none object-contain', imgClassName)} />
      ) : (
        <div className="absolute inset-[14%] animate-pulse-soft rounded-full bg-white/[0.05]" />
      )}
    </div>
  );
}

/** MascotShot that only starts rendering once scrolled near the viewport (long grids). */
export function LazyMascotShot({ placeholder, ...props }: Parameters<typeof MascotShot>[0] & { placeholder?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    if (typeof IntersectionObserver === 'undefined') return setVisible(true);
    const io = new IntersectionObserver((entries) => entries.some((e) => e.isIntersecting) && setVisible(true), { rootMargin: '240px' });
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);
  if (visible) return <MascotShot {...props} />;
  return (
    <div ref={ref} className={cn('relative grid place-items-center', props.className)}>
      {placeholder}
    </div>
  );
}
