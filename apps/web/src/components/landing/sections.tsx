'use client';

import { motion } from 'framer-motion';
import { Clapperboard, Image as ImageIcon, Laugh, Smile, Sparkles, Upload, Wand2 } from 'lucide-react';
import { SHOWCASE_DNA, STYLE_CATALOG, getStyleRecipe } from '@mascot/shared';
import { MascotArt } from '@/components/brand/mascot-art';
import { Card, SectionTitle } from '@/components/ui/card';

export function ShowcaseMarquee() {
  const items = [...SHOWCASE_DNA, ...SHOWCASE_DNA];
  return (
    <div className="relative -mx-4 overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-3 px-4">
        {items.map((item, i) => {
          const style = getStyleRecipe(item.style)!;
          return (
            <div key={i} className="w-[124px] shrink-0 overflow-hidden rounded-2xl border border-white/10" style={{ background: `linear-gradient(150deg, ${style.gradient[0]}, ${style.gradient[1]})` }}>
              <MascotArt dna={item.dna} emotion={(['happy', 'cool', 'love', 'laughing', 'sigma', 'shocked'] as const)[i % 6]} className="aspect-square w-full" />
              <div className="bg-black/35 px-2.5 py-1.5 text-[11px] font-semibold">{style.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const STEPS = [
  { icon: Upload, title: 'Upload 5–15 selfies', body: 'Front, left, right, smile, neutral. We guide you.' },
  { icon: Wand2, title: 'We build your Mascot DNA', body: 'Face shape, eyes, hair, skin tone and proportions — captured once.' },
  { icon: Sparkles, title: 'Your character comes alive', body: 'Pick a style. Change it anytime — it stays you.' },
];

export function HowItWorks() {
  return (
    <section className="mt-10">
      <SectionTitle title="How it works" />
      <div className="space-y-2.5">
        {STEPS.map(({ icon: Icon, title, body }, i) => (
          <motion.div key={title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
            <Card className="flex items-start gap-3.5 p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-violet-200">
                <Icon className="size-5" />
              </span>
              <div>
                <div className="text-[14px] font-semibold">
                  <span className="mr-1.5 font-mono text-faint">0{i + 1}</span>
                  {title}
                </div>
                <p className="mt-0.5 text-[13px] leading-relaxed text-muted">{body}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const OUTPUTS = [
  { icon: Smile, title: 'Sticker packs', body: '10 emotions, one tap to Telegram', emotion: 'love' as const },
  { icon: Laugh, title: 'Memes', body: 'Type it, we meme it', emotion: 'laughing' as const },
  { icon: ImageIcon, title: 'Profile pics', body: 'Backgrounds, outfits, poses', emotion: 'cool' as const },
  { icon: Clapperboard, title: 'Videos', body: 'Dance, talk, walk, promo', emotion: 'shocked' as const },
];

export function WhatYouGet() {
  const dna = SHOWCASE_DNA[3]!.dna;
  return (
    <section className="mt-10">
      <SectionTitle title="One mascot, endless content" />
      <div className="grid grid-cols-2 gap-2.5">
        {OUTPUTS.map(({ icon: Icon, title, body, emotion }) => (
          <Card key={title} className="overflow-hidden p-3.5">
            <div className="flex items-center gap-2 text-[13px] font-semibold">
              <Icon className="size-4 text-fuchsia-300" />
              {title}
            </div>
            <p className="mt-0.5 text-[12px] text-muted">{body}</p>
            <MascotArt dna={dna} emotion={emotion} sticker className="mx-auto -mb-6 mt-2 w-[120px]" />
          </Card>
        ))}
      </div>
    </section>
  );
}

export function StylesStrip() {
  return (
    <section className="mt-10">
      <SectionTitle title={`${STYLE_CATALOG.length} styles, one identity`} />
      <div className="flex flex-wrap gap-2">
        {STYLE_CATALOG.map((s) => (
          <span key={s.slug} className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] py-1 pl-1 pr-3 text-[12px] font-medium text-ink-2">
            <span className="size-5 rounded-full" style={{ background: `linear-gradient(135deg, ${s.gradient[0]}, ${s.gradient[1]})` }} />
            {s.name}
            {s.isPremium && <span className="text-[10px] text-amber-300">★</span>}
          </span>
        ))}
      </div>
    </section>
  );
}
