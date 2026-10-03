'use client';

import { motion } from 'framer-motion';
import { Cake, Check, ImageIcon, Mic, Sparkles, Upload, Wand2 } from 'lucide-react';
import { DEFAULT_STICKER_ORDER, HERO_DNA, STAR_PRODUCTS, STYLE_CATALOG } from '@mascot/shared';
import { LogoMark } from '@/components/brand/logo';
import { PLATFORM_STYLES } from '@/components/brand/platforms';
import { MascotShot } from '@/components/three/mascot-shot';
import { Button } from '@/components/ui/button';
import { Card, SectionTitle } from '@/components/ui/card';
import { useT } from '@/lib/i18n';
import { styleName } from '@/lib/i18n/catalog';

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
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand/12 text-brand ring-1 ring-brand/30">
                  <Icon className="size-5" />
                </span>
                <div>
                  <div className="text-[14.5px] font-bold">
                    <span className="mr-1.5 font-mono text-brand">0{i + 1}</span>
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

const SHOW_STYLES = ['pixar', 'cartoon', 'anime', 'cyberpunk', 'fortnite', 'funko-pop', 'lego', 'arcane'];

export function StylesStrip() {
  const tr = useT();
  const { t, f } = tr;
  return (
    <section className="mt-10">
      <SectionTitle title={f(t.landing.stylesTitle, { count: STYLE_CATALOG.length })} action={<span className="text-[12px] text-muted">{t.landing.stylesSub}</span>} />
      <div className="-mx-4 flex gap-2.5 overflow-x-auto px-4 pb-1">
        {SHOW_STYLES.map((slug) => {
          const s = STYLE_CATALOG.find((x) => x.slug === slug)!;
          return (
            <div key={slug} className="w-[112px] shrink-0">
              <div className="card overflow-hidden rounded-2xl">
                <MascotShot dna={HERO_DNA} style={slug} framing="portrait" className="aspect-square w-full" />
              </div>
              <div className="mt-1.5 truncate text-center text-[11.5px] font-semibold text-ink-2">{styleName(tr, slug, s.name)}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function StickersShowcase() {
  const { t } = useT();
  return (
    <section className="mt-10">
      <SectionTitle title={t.landing.stickersTitle} />
      <p className="-mt-2 mb-3 px-0.5 text-[13px] text-muted">{t.landing.stickersSub}</p>
      <div className="grid grid-cols-3 gap-2">
        {DEFAULT_STICKER_ORDER.slice(0, 9).map((emotion) => (
          <div key={emotion} className="card overflow-hidden rounded-2xl">
            <MascotShot dna={HERO_DNA} emotion={emotion} framing="sticker" className="aspect-square w-full" />
            <div className="pb-2 text-center text-[11.5px] font-semibold text-ink-2">{t.emotions[emotion]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const MORE_ICONS = [ImageIcon, Cake, Mic, Sparkles];

export function UseEverywhere() {
  const { t } = useT();
  const platforms = Object.entries(PLATFORM_STYLES) as Array<[keyof typeof PLATFORM_STYLES, (typeof PLATFORM_STYLES)[keyof typeof PLATFORM_STYLES]]>;
  return (
    <section className="mt-10">
      <Card className="relative overflow-hidden p-5">
        <div className="glow-red absolute -right-16 top-6 size-[240px] rounded-full opacity-70 blur-xl" />
        <div className="relative max-w-[62%]">
          <h3 className="text-[19px] font-bold leading-tight tracking-[-0.02em]">{t.landing.everywhereTitle}</h3>
          <p className="mt-1 text-[12.5px] text-muted">{t.landing.everywhereSub}</p>
        </div>
        <MascotShot dna={HERO_DNA} emotion="cool" framing="portrait" className="absolute -right-4 top-2 h-[170px] w-[170px]" />
        <div className="relative mt-[70px] grid grid-cols-5 gap-2">
          {platforms.map(([key, { bg, Icon }]) => (
            <div key={key} className="flex flex-col items-center gap-1.5 text-center">
              <span className={`grid size-11 place-items-center rounded-2xl text-white shadow-lg ${bg}`}>
                <Icon className="size-[22px]" />
              </span>
              <span className="text-[10.5px] font-semibold capitalize leading-tight">{key === 'tiktok' ? 'TikTok' : key === 'youtube' ? 'YouTube' : key[0]!.toUpperCase() + key.slice(1)}</span>
              <span className="-mt-1 text-[9.5px] leading-tight text-muted">{t.landing.platforms[key]}</span>
            </div>
          ))}
        </div>
        <div className="relative mt-5 border-t border-line pt-4">
          <div className="mb-2.5 text-[12.5px] font-bold">{t.landing.moreTitle}</div>
          <div className="grid grid-cols-4 gap-2">
            {t.landing.more.map((label, i) => {
              const Icon = MORE_ICONS[i] ?? Sparkles;
              return (
                <div key={label} className="flex flex-col items-center gap-1.5 rounded-2xl border border-line bg-white/[0.02] py-3">
                  <Icon className="size-5 text-brand" />
                  <span className="text-[10.5px] font-semibold">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </section>
  );
}

export function PricingCards({ onFree, onPremium }: { onFree: () => void; onPremium: () => void }) {
  const { t } = useT();
  const monthly = STAR_PRODUCTS.premium_monthly;
  return (
    <div className="grid grid-cols-2 gap-2.5">
      <Card className="flex flex-col p-4">
        <div className="text-[15px] font-bold">{t.premium.freeTitle}</div>
        <div className="mt-1 text-[22px] font-extrabold tracking-tight">0 ⭐</div>
        <ul className="mt-3 flex-1 space-y-2">
          {t.premium.freePoints.map((p) => (
            <li key={p} className="flex items-start gap-2 text-[12px] text-ink-2">
              <Check className="mt-0.5 size-3.5 shrink-0 text-muted" strokeWidth={3} />
              {p}
            </li>
          ))}
        </ul>
        <Button variant="secondary" size="sm" block className="mt-4" onClick={onFree}>
          {t.premium.start}
        </Button>
      </Card>
      <div className="relative flex flex-col rounded-[22px] border border-brand bg-[linear-gradient(180deg,rgba(255,43,61,0.16),rgba(255,43,61,0.04))] p-4 shadow-glow">
        <span className="absolute -top-2.5 right-3 rounded-full bg-brand-grad px-2.5 py-0.5 text-[10px] font-bold text-white shadow-red">★ {t.premium.mostPopular}</span>
        <div className="flex items-center gap-1.5 text-[15px] font-bold">
          <LogoMark className="size-4 drop-shadow-none" /> {t.common.premium}
        </div>
        <div className="mt-1 text-[22px] font-extrabold tracking-tight">
          {monthly.stars} ⭐<span className="ml-1 text-[11px] font-semibold text-muted">{t.premium.perMonthShort}</span>
        </div>
        <ul className="mt-3 flex-1 space-y-2">
          {t.premium.proPoints.map((p) => (
            <li key={p} className="flex items-start gap-2 text-[12px] text-ink">
              <Check className="mt-0.5 size-3.5 shrink-0 text-brand" strokeWidth={3} />
              {p}
            </li>
          ))}
        </ul>
        <Button size="sm" block className="mt-4" onClick={onPremium}>
          {t.premium.subscribe}
        </Button>
      </div>
    </div>
  );
}

export function Slogan() {
  const { t } = useT();
  return (
    <section className="mb-4 mt-12 flex flex-col items-center text-center">
      <LogoMark className="size-12" />
      <div className="mt-3 text-[22px] font-extrabold tracking-[-0.03em] text-brand-grad">Mascot AI</div>
      <div className="mt-1 text-[12.5px] text-muted">{t.landing.badge}</div>
      <div className="mt-5 -rotate-3 font-serif text-[22px] italic text-ink">
        {t.landing.slogan1} <span className="text-brand">{t.landing.slogan2}</span>
      </div>
      <svg viewBox="0 0 160 14" className="mt-1 w-40 -rotate-3 text-brand" aria-hidden>
        <path d="M2 10 C 40 2, 90 2, 158 8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </section>
  );
}
