'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { MoreHorizontal, Share } from 'lucide-react';
import { useRef, type ReactNode } from 'react';
import { toast } from 'sonner';
import type { Theme } from '@/data/types';
import { translate } from '@/i18n';
import { useI18n } from '@/i18n/use';
import { useApp } from '@/store/app';
import { MotifPattern } from './motif';
import { Photo, PhotoCredit } from './photo';
import { SaveButton } from './save-button';
import { BackButton, IconButton } from './ui';

export async function shareLink(title: string, text: string) {
  const url = window.location.href;
  try {
    if (navigator.share) await navigator.share({ title, text, url });
    else {
      await navigator.clipboard.writeText(url);
      toast.success(translate(useApp.getState().locale, 'common.linkCopied'));
    }
  } catch {
    /* user dismissed the share sheet */
  }
}

/**
 * Detail-page scaffold: a full-bleed photo that parallaxes under a rounded content sheet. With a
 * theme, the sheet's top carries the destination's own ornament and colours.
 */
export function HeroPage({
  image,
  title,
  saveId,
  overlay,
  children,
  heroHeight = 400,
  theme,
  menu,
}: {
  image: string;
  title: string;
  saveId?: string;
  overlay: ReactNode;
  children: ReactNode;
  heroHeight?: number;
  theme?: Theme;
  menu?: () => void;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: scroller });
  const y = useTransform(scrollY, [0, heroHeight], [0, heroHeight * 0.45]);
  const scale = useTransform(scrollY, [-200, 0], [1.35, 1]);
  const barOpacity = useTransform(scrollY, [heroHeight - 160, heroHeight - 90], [0, 1]);
  const { t } = useI18n();

  return (
    <div className="absolute inset-0 bg-white" style={theme ? ({ '--accent': theme.accent, '--accent-2': theme.accent2 } as React.CSSProperties) : undefined}>
      <div ref={scroller} className="scroll-area absolute inset-0">
        <div className="relative overflow-hidden" style={{ height: heroHeight }}>
          <motion.div className="absolute inset-0 origin-top" style={{ y, scale }}>
            <Photo id={image} alt={title} width={1000} priority className="absolute inset-0" tint={theme?.accent} />
            <div className="photo-scrim-top absolute inset-0" />
            {theme && <div className="absolute inset-0 mix-blend-soft-light" style={{ background: `linear-gradient(180deg, transparent 40%, ${theme.accent} 120%)` }} />}
          </motion.div>
          <div className="absolute inset-x-5 bottom-12 text-white">{overlay}</div>
          <PhotoCredit id={image} className="absolute bottom-10 right-4" />
        </div>
        <div className="relative -mt-8 min-h-[60dvh] overflow-hidden rounded-t-[32px] bg-white pb-16">
          {theme && (
            <>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-40" style={{ background: `linear-gradient(180deg, ${theme.accent}14, transparent)` }} />
              <MotifPattern motif={theme.motif} color={theme.accent} className="pointer-events-none absolute inset-x-0 top-0 h-40 [mask-image:linear-gradient(180deg,black,transparent)]" />
              <div className="absolute left-1/2 top-2.5 h-1 w-10 -translate-x-1/2 rounded-full" style={{ background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})` }} />
            </>
          )}
          <div className="relative">{children}</div>
        </div>
      </div>

      <motion.div className="pt-safe glass pointer-events-none absolute inset-x-0 top-0 z-20 border-b border-line-soft" style={{ opacity: barOpacity }}>
        <div className="flex h-14 items-center justify-center px-24">
          <p className="truncate text-[16px] font-bold tracking-[-0.01em]">{title}</p>
        </div>
      </motion.div>
      <div className="pt-safe absolute inset-x-0 top-0 z-30">
        <div className="flex h-14 items-center justify-between px-4">
          <BackButton tone="glass" />
          <div className="flex gap-2">
            <IconButton label={t('common.share')} tone="glass" onClick={() => shareLink(title, `${title} — Vylo`)}>
              <Share className="size-[18px]" />
            </IconButton>
            {saveId && <SaveButton id={saveId} tone="glass" />}
            {menu && (
              <IconButton label={t('common.more')} tone="glass" onClick={menu}>
                <MoreHorizontal className="size-5" />
              </IconButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
