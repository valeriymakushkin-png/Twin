'use client';

import { motion } from 'framer-motion';
import { Clapperboard, Image as ImageIcon, Laugh, Smile, Sparkles, Upload, Wand2 } from 'lucide-react';
import { SHOWCASE_DNA, STYLE_CATALOG, getStyleRecipe } from '@mascot/shared';
import { MascotArt } from '@/components/brand/mascot-art';
import { Card, SectionTitle } from '@/components/ui/card';
import { useT } from '@/lib/i18n';
import { styleName } from '@/lib/i18n/catalog';

export function ShowcaseMarquee() {
  const tr = useT();
  const items = [...SHOWCASE_DNA, ...SHOWCASE_DNA];
  return (
    <div className="relative -mx-4 overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-3 px-4">
        {items.map((item, i) => {
          const style = getStyleRecipe(item.style)!;
          return (
            <div key={i} className="w-[124px] shrink-0 overflow-hidden rounded-2xl border border-white/10" style={{ background: `linear-gradient(150deg, ${style.gradient[0]}, ${style.gradient[1]})` }}>
              <MascotArt dna={item.dna} emotion={(['happy', 'cool', 'love', 'laughing', 'sigma', 'shocked'] as const)[i % 6]} className="aspect-square w-full" />
              <div className="bg-black/35 px-2.5 py-1.5 text-[11px] font-semibold">{styleName(tr, style.slug, style.name)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const STEP_ICONS = [Upload, Wand2, Sparkles];

export function HowItWorks() {
  const { t } = useT();
  return (
    <section className="mt-10">
      <SectionTitle title={t.landing.howItWorks} />
      <div className="space-y-2.5">
        {t.landing.steps.map(({ title, body }, i) => {
          const Icon = STEP_ICONS[i] ?? Sparkles;
          return (
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
          );
        })}
      </div>
    </section>
  );
}

const OUTPUTS = [
  { key: 'stickers', icon: Smile, emotion: 'love' as const },
  { key: 'memes', icon: Laugh, emotion: 'laughing' as const },
  { key: 'pfp', icon: ImageIcon, emotion: 'cool' as const },
  { key: 'videos', icon: Clapperboard, emotion: 'shocked' as const },
] as const;

export function WhatYouGet() {
  const dna = SHOWCASE_DNA[3]!.dna;
  const { t } = useT();
  return (
    <section className="mt-10">
      <SectionTitle title={t.landing.outputsTitle} />
      <div className="grid grid-cols-2 gap-2.5">
        {OUTPUTS.map(({ key, icon: Icon, emotion }) => {
          const { title, body } = t.landing.outputs[key];
          return (
          <Card key={key} className="overflow-hidden p-3.5">
            <div className="flex items-center gap-2 text-[13px] font-semibold">
              <Icon className="size-4 text-fuchsia-300" />
              {title}
            </div>
            <p className="mt-0.5 text-[12px] text-muted">{body}</p>
            <MascotArt dna={dna} emotion={emotion} sticker className="mx-auto -mb-6 mt-2 w-[120px]" />
          </Card>
          );
        })}
      </div>
    </section>
  );
}

export function StylesStrip() {
  const tr = useT();
  const { t, f } = tr;
  return (
    <section className="mt-10">
      <SectionTitle title={f(t.landing.stylesTitle, { count: STYLE_CATALOG.length })} />
      <div className="flex flex-wrap gap-2">
        {STYLE_CATALOG.map((s) => (
          <span key={s.slug} className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] py-1 pl-1 pr-3 text-[12px] font-medium text-ink-2">
            <span className="size-5 rounded-full" style={{ background: `linear-gradient(135deg, ${s.gradient[0]}, ${s.gradient[1]})` }} />
            {styleName(tr, s.slug, s.name)}
            {s.isPremium && <span className="text-[10px] text-amber-300">★</span>}
          </span>
        ))}
      </div>
    </section>
  );
}
