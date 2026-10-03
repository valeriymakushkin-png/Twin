'use client';

import { useEffect, useRef, useState } from 'react';
import type { MascotDna } from '@mascot/shared';
import type { Framing, MascotViewer } from '@mascot/mascot-3d';
import { MascotArt } from '@/components/brand/mascot-art';
import { cn } from '@/lib/cn';
import { webglSupported } from '@/lib/mascot3d';

export interface Mascot3DProps {
  dna: MascotDna;
  style?: string;
  emotion?: string;
  outfit?: string;
  outfitColor?: string;
  accessory?: string | null;
  framing?: Framing;
  autoRotate?: boolean;
  interactive?: boolean;
  /** Increment to trigger a full 360° turn. */
  spin?: number;
  className?: string;
}

/** Live, DNA-driven 3D character: drag to rotate, idle breathing and blinking. */
export function Mascot3D({ dna, style, emotion, outfit, outfitColor, accessory, framing = 'bust', autoRotate = true, interactive = true, spin = 0, className }: Mascot3DProps) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const viewer = useRef<MascotViewer | null>(null);
  const [ready, setReady] = useState(false);
  const [fallback, setFallback] = useState(false);
  const opts = { style, emotion: emotion as never, outfit, outfitColor, accessory: accessory ?? null, framing, autoRotate, interactive };
  const key = JSON.stringify([dna, style, emotion, outfit, outfitColor, accessory, framing]);

  useEffect(() => {
    if (!webglSupported()) {
      setFallback(true);
      return;
    }
    let alive = true;
    import('@mascot/mascot-3d')
      .then(({ MascotViewer }) => {
        if (!alive || !canvas.current) return;
        viewer.current = new MascotViewer(canvas.current, dna, opts);
        requestAnimationFrame(() => alive && setReady(true));
      })
      .catch(() => setFallback(true));
    return () => {
      alive = false;
      viewer.current?.dispose();
      viewer.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (viewer.current) viewer.current.update(dna, opts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    if (spin) viewer.current?.spin();
  }, [spin]);

  if (fallback) return <MascotArt dna={dna} emotion={(emotion as never) ?? 'happy'} className={className} />;
  return (
    <div className={cn('relative', className)}>
      <canvas ref={canvas} className={cn('size-full transition-opacity duration-500', ready ? 'opacity-100' : 'opacity-0')} />
      {!ready && <div className="absolute inset-[18%] animate-pulse-soft rounded-full bg-brand/10 blur-2xl" />}
    </div>
  );
}
