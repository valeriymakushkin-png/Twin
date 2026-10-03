'use client';

import { useEffect, useRef, useState } from 'react';
import type { ScanViewer } from '@mascot/mascot-3d';
import { webglSupported } from '@/lib/mascot3d';

/** Wireframe head inside red scanner brackets with a sweeping scan line. */
export function ScanHead() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!webglSupported()) return;
    let viewer: ScanViewer | null = null;
    let alive = true;
    import('@mascot/mascot-3d').then(({ ScanViewer }) => {
      if (!alive || !canvas.current) return;
      viewer = new ScanViewer(canvas.current);
      setReady(true);
    });
    return () => {
      alive = false;
      viewer?.dispose();
    };
  }, []);
  return (
    <div className="relative mx-auto aspect-square w-[78%] max-w-[290px]">
      <div className="glow-red absolute inset-[10%] rounded-full opacity-40 blur-2xl" />
      <canvas ref={canvas} className={`relative size-full transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`} />
      {['left-0 top-0 border-l-2 border-t-2 rounded-tl-xl', 'right-0 top-0 border-r-2 border-t-2 rounded-tr-xl', 'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl', 'bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl'].map((c) => (
        <span key={c} className={`absolute size-9 border-brand shadow-[0_0_14px_rgba(255,43,61,0.6)] ${c}`} />
      ))}
      <span className="absolute inset-x-[6%] h-[2px] animate-scan rounded-full bg-gradient-to-r from-transparent via-brand to-transparent shadow-[0_0_18px_4px_rgba(255,43,61,0.55)]" />
    </div>
  );
}
