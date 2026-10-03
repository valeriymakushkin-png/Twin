'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Camera, ChevronsLeftRight } from 'lucide-react';
import { useRef } from 'react';
import { getStyleRecipe, type MascotDna } from '@mascot/shared';
import { MascotArt } from '@/components/brand/mascot-art';
import { useT } from '@/lib/i18n';
import { styleName } from '@/lib/i18n/catalog';

/**
 * Draggable before/after comparison. `beforeUrl`/`afterUrl` take real showcase images when
 * configured (NEXT_PUBLIC_SHOWCASE_*); otherwise a stylised "selfie" placeholder vs the
 * procedural mascot is shown.
 */
export function BeforeAfter({ dna, styleSlug, beforeUrl, afterUrl }: { dna: MascotDna; styleSlug: string; beforeUrl?: string; afterUrl?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useMotionValue(50);
  const clip = useTransform(pos, (v) => `inset(0 0 0 ${v}%)`);
  const left = useTransform(pos, (v) => `${v}%`);
  const style = getStyleRecipe(styleSlug)!;
  const tr = useT();
  const { t } = tr;

  const update = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    pos.set(Math.max(4, Math.min(96, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/5] w-full touch-none select-none overflow-hidden rounded-3xl border border-line"
      onPointerDown={(e) => {
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => e.buttons && update(e.clientX)}
    >
      {/* BEFORE */}
      <div className="absolute inset-0 bg-[#cdd3da]">
        {beforeUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={beforeUrl} alt="Selfie" className="size-full object-cover" />
        ) : (
          <div className="relative size-full bg-gradient-to-b from-[#d9dee5] to-[#9aa3ad]">
            <MascotArt dna={dna} emotion="neutral" className="absolute inset-0 size-full scale-110 opacity-70 blur-[6px] grayscale" />
            {['left-4 top-4 border-l-2 border-t-2', 'right-4 top-4 border-r-2 border-t-2', 'bottom-4 left-4 border-b-2 border-l-2', 'bottom-4 right-4 border-b-2 border-r-2'].map((c) => (
              <span key={c} className={`absolute size-6 rounded-[4px] border-white/80 ${c}`} />
            ))}
          </div>
        )}
        <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-semibold backdrop-blur">
          <Camera className="size-3.5" /> {t.landing.yourSelfies}
        </span>
      </div>

      {/* AFTER */}
      <motion.div className="absolute inset-0" style={{ clipPath: clip, background: `linear-gradient(160deg, ${style.gradient[0]}, ${style.gradient[1]})` }}>
        {afterUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={afterUrl} alt="Mascot" className="size-full object-cover" />
        ) : (
          <MascotArt dna={dna} className="absolute inset-x-0 bottom-0 w-full" />
        )}
        <span className="absolute bottom-4 right-4 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-semibold backdrop-blur">{styleName(tr, style.slug, style.name)}</span>
      </motion.div>

      <motion.div className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white/90" style={{ left }}>
        <span className="absolute left-1/2 top-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-black shadow-lg">
          <ChevronsLeftRight className="size-4" />
        </span>
      </motion.div>
    </div>
  );
}
