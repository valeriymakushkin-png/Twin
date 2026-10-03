'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HERO_DNA } from '@mascot/shared';
import { Logo } from '@/components/brand/logo';
import { Mascot3D } from '@/components/three/mascot-3d';
import { MascotShot } from '@/components/three/mascot-shot';
import { Button } from '@/components/ui/button';
import { useT } from '@/lib/i18n';

const TILES = [
  { emotion: 'laughing', className: 'left-0 top-[14%]', delay: 0 },
  { emotion: 'cool', className: 'right-0 top-[6%]', delay: 0.6 },
  { emotion: 'love', className: 'left-[2%] bottom-[16%]', delay: 1.2 },
  { emotion: 'shocked', className: 'right-[1%] bottom-[24%]', delay: 1.8 },
] as const;

export function Hero({ onCreate, ctaLabel }: { onCreate: () => void; ctaLabel?: string }) {
  const { t } = useT();
  return (
    <section className="relative -mx-4 overflow-hidden px-4 pb-6">
      <div className="py-4">
        <Logo tagline={t.landing.badge} />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-3 text-[32px] font-extrabold leading-[1.05] tracking-[-0.04em]"
      >
        {t.landing.h1a} <span className="text-brand-grad">{t.landing.h1b}</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="mt-3 max-w-[330px] text-[14.5px] leading-relaxed text-ink-2"
      >
        {t.landing.subtitle}
      </motion.p>

      <div className="relative mx-auto mt-2 h-[400px] w-full">
        <div className="glow-red absolute left-1/2 top-[46%] size-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl" />
        <Mascot3D dna={HERO_DNA} framing="bust" className="absolute inset-x-[-6%] -top-2 bottom-0" />
        {TILES.map((tile) => (
          <motion.div
            key={tile.emotion}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{ opacity: { delay: 0.4 + tile.delay * 0.2 }, scale: { delay: 0.4 + tile.delay * 0.2 }, y: { duration: 5, repeat: Infinity, delay: tile.delay, ease: 'easeInOut' } }}
            className={`absolute size-[68px] overflow-hidden rounded-2xl border border-brand/60 bg-[#140a0c]/80 shadow-[0_10px_30px_-10px_rgba(255,43,61,0.8)] backdrop-blur ${tile.className}`}
          >
            <MascotShot dna={HERO_DNA} emotion={tile.emotion} framing="head" className="size-full" />
          </motion.div>
        ))}
      </div>

      <Button size="lg" block onClick={onCreate} className="relative z-10 -mt-4">
        {ctaLabel ?? t.landing.cta}
        <ArrowRight className="size-[18px]" />
      </Button>
      <p className="mt-3 text-center text-[12px] text-muted">{t.landing.footnote}</p>
    </section>
  );
}
