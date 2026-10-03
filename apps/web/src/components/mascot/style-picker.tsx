'use client';

import { motion } from 'framer-motion';
import { SHOWCASE_DNA, type MascotDna, type StyleDto } from '@mascot/shared';
import { MascotShot } from '@/components/three/mascot-shot';
import { CheckDot, LockDot, Skeleton } from '@/components/ui/misc';
import { cn } from '@/lib/cn';
import { useT } from '@/lib/i18n';
import { styleName } from '@/lib/i18n/catalog';
import { haptic } from '@/lib/telegram';

/**
 * Style engine picker: every tile is the user's own character rendered live in that style
 * (DNA → 3D), so "same character, different styles" is literal. Locked styles stay tappable.
 */
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
  const tr = useT();
  if (!styles) {
    return (
      <div className="grid grid-cols-3 gap-2.5">
        {Array.from({ length: 9 }, (_, i) => (
          <Skeleton key={i} className="aspect-[3/4]" />
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {styles.map((s, i) => {
        const active = s.slug === value;
        const dna = previewDna ?? SHOWCASE_DNA[i % SHOWCASE_DNA.length]!.dna;
        return (
          <motion.button
            key={s.slug}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              haptic.select();
              onChange(s);
            }}
            className="text-left"
          >
            <div className={cn('relative aspect-square overflow-hidden rounded-2xl border bg-surface-2 transition-shadow', active ? 'selected' : 'border-white/10')}>
              <div className="absolute inset-0 opacity-50" style={{ background: `radial-gradient(circle at 50% 60%, ${s.gradient[0]}55, transparent 70%)` }} />
              {s.previewUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.previewUrl} alt={s.name} className="relative size-full object-cover" />
              ) : (
                <MascotShot dna={dna} style={s.slug} framing="portrait" className="relative size-full" />
              )}
              {s.locked && <LockDot className="absolute right-1.5 top-1.5" />}
              {active && <CheckDot className="absolute left-1.5 top-1.5" />}
            </div>
            <div className={cn('mt-1.5 truncate text-center text-[11.5px] font-semibold', active ? 'text-white' : 'text-ink-2')}>{styleName(tr, s.slug, s.name)}</div>
          </motion.button>
        );
      })}
    </div>
  );
}
