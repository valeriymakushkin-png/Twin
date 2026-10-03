'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getStyleRecipe, SHOWCASE_DNA } from '@mascot/shared';
import { Aurora } from '@/components/brand/aurora';
import { Logo } from '@/components/brand/logo';
import { MascotArt } from '@/components/brand/mascot-art';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const STACK = [SHOWCASE_DNA[1]!, SHOWCASE_DNA[0]!, SHOWCASE_DNA[2]!];

export function Hero({ onCreate, ctaLabel = 'Create My Mascot' }: { onCreate: () => void; ctaLabel?: string }) {
  return (
    <section className="relative -mx-4 overflow-hidden px-4 pb-8">
      <Aurora />
      <div className="flex items-center justify-between py-4">
        <Logo />
        <Badge tone="violet" icon={<Sparkles className="size-3" />}>
          Video mascots
        </Badge>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 text-[44px] font-semibold leading-[0.98] tracking-[-0.045em]"
      >
        Your face.
        <br />
        <span className="text-aurora">Your mascot.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="mt-4 max-w-[330px] text-[15px] leading-relaxed text-ink-2"
      >
        Upload a few selfies. Get a 3D character that’s unmistakably you — then turn it into stickers, memes, profile pics and videos.
      </motion.p>

      <div className="relative mx-auto mt-8 h-[300px] w-full">
        {STACK.map((item, i) => {
          const style = getStyleRecipe(item.style)!;
          const rotate = [-9, 0, 9][i]!;
          const x = [-92, 0, 92][i]!;
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              animate={{ opacity: 1, y: i === 1 ? -6 : 14, rotate, x }}
              transition={{ type: 'spring', stiffness: 120, damping: 16, delay: 0.15 + i * 0.08 }}
              className="absolute left-1/2 top-0 -ml-[86px] w-[172px]"
              style={{ zIndex: i === 1 ? 3 : 1 }}
            >
              <div className="overflow-hidden rounded-[26px] border border-white/10 shadow-glow" style={{ background: `linear-gradient(150deg, ${style.gradient[0]}, ${style.gradient[1]})` }}>
                <MascotArt dna={item.dna} className="aspect-square w-full animate-float" />
                <div className="flex items-center justify-between bg-black/35 px-3 py-2 backdrop-blur">
                  <span className="text-[12px] font-semibold">{item.name}</span>
                  <span className="text-[10px] font-medium text-white/70">{style.name}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <Button size="lg" block onClick={onCreate} icon={<Sparkles className="size-[18px]" />} className="mt-2">
        {ctaLabel}
        <ArrowRight className="size-4 opacity-70" />
      </Button>
      <p className="mt-3 text-center text-[12px] text-muted">Free · about 60 seconds · photos auto-deleted after 30 days</p>
    </section>
  );
}
