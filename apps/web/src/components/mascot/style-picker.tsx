'use client';

import { motion } from 'framer-motion';
import { Check, Lock } from 'lucide-react';
import { SHOWCASE_DNA, type MascotDna, type StyleDto } from '@mascot/shared';
import { MascotArt } from '@/components/brand/mascot-art';
import { Skeleton } from '@/components/ui/misc';
import { cn } from '@/lib/cn';
import { haptic } from '@/lib/telegram';

/** Style engine picker. Locked (premium) styles stay tappable and open the paywall upstream. */
export function StylePicker({
  styles,
  value,
  onChange,
  previewDna,
}: {
  styles: StyleDto[] | undefined;
  value: string;
  onChange: (style: StyleDto) => void;
  previewDna?: MascotDna | null;
}) {
  if (!styles) {
    return (
      <div className="grid grid-cols-2 gap-2.5">
        {Array.from({ length: 6 }, (_, i) => (
          <Skeleton key={i} className="aspect-[4/5]" />
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {styles.map((s, i) => {
        const active = s.slug === value;
        const dna = previewDna ?? SHOWCASE_DNA[i % SHOWCASE_DNA.length]!.dna;
        return (
          <motion.button
            key={s.slug}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              haptic.select();
              onChange(s);
            }}
            className={cn(
              'relative overflow-hidden rounded-3xl border text-left transition-shadow',
              active ? 'border-white/70 shadow-glow' : 'border-white/10',
            )}
          >
            <div className="relative aspect-square" style={{ background: `linear-gradient(150deg, ${s.gradient[0]}, ${s.gradient[1]})` }}>
              {s.previewUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.previewUrl} alt={s.name} className="size-full object-cover" />
              ) : (
                <MascotArt dna={dna} className={cn('absolute inset-x-0 bottom-0 w-full', s.locked && 'opacity-80')} />
              )}
              {s.locked && (
                <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-semibold text-amber-300 backdrop-blur">
                  <Lock className="size-3" /> Premium
                </span>
              )}
              {active && (
                <span className="absolute left-2 top-2 grid size-6 place-items-center rounded-full bg-white text-black">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
              )}
            </div>
            <div className="bg-surface-2 px-3 py-2.5">
              <div className="text-[13px] font-semibold">{s.name}</div>
              <div className="truncate text-[11px] text-muted">{s.tagline}</div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
