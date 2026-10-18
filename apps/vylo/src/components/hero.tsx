'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { MoreHorizontal, Share } from 'lucide-react';
import { useRef, type ReactNode } from 'react';
import { toast } from 'sonner';
import { Photo } from './photo';
import { SaveButton } from './save-button';
import { BackButton, IconButton } from './ui';

export async function shareLink(title: string, text: string) {
  const url = window.location.href;
  try {
    if (navigator.share) await navigator.share({ title, text, url });
    else {
      await navigator.clipboard.writeText(url);
      toast.success('Ссылка скопирована');
    }
  } catch {
    /* user dismissed the share sheet */
  }
}

/**
 * Detail-page scaffold: a full-bleed photo that parallaxes and fades under a rounded content
 * sheet, with a compact title bar that appears once the hero scrolls away.
 */
export function HeroPage({
  image,
  title,
  saveId,
  overlay,
  children,
  heroHeight = 400,
}: {
  image: string;
  title: string;
  saveId?: string;
  overlay: ReactNode;
  children: ReactNode;
  heroHeight?: number;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: scroller });
  const y = useTransform(scrollY, [0, heroHeight], [0, heroHeight * 0.45]);
  const scale = useTransform(scrollY, [-200, 0], [1.35, 1]);
  const barOpacity = useTransform(scrollY, [heroHeight - 160, heroHeight - 90], [0, 1]);

  return (
    <div className="absolute inset-0 bg-white">
      <div ref={scroller} className="scroll-area absolute inset-0">
        <div className="relative overflow-hidden" style={{ height: heroHeight }}>
          <motion.div className="absolute inset-0 origin-top" style={{ y, scale }}>
            <Photo id={image} alt={title} width={1000} priority className="absolute inset-0" />
            <div className="photo-scrim-top absolute inset-0" />
          </motion.div>
          <div className="absolute inset-x-5 bottom-12 text-white">{overlay}</div>
        </div>
        <div className="relative -mt-8 min-h-[60dvh] rounded-t-[32px] bg-white pb-16">{children}</div>
      </div>

      <motion.div className="pt-safe glass pointer-events-none absolute inset-x-0 top-0 z-20 border-b border-line-soft" style={{ opacity: barOpacity }}>
        <div className="flex h-14 items-center justify-center px-20">
          <p className="truncate text-[16px] font-bold tracking-[-0.01em]">{title}</p>
        </div>
      </motion.div>
      <div className="pt-safe absolute inset-x-0 top-0 z-30">
        <div className="flex h-14 items-center justify-between px-4">
          <BackButton tone="glass" />
          <div className="flex gap-2">
            <IconButton label="Поделиться" tone="glass" onClick={() => shareLink(title, `${title} в Vylo`)}>
              <Share className="size-[18px]" />
            </IconButton>
            {saveId && <SaveButton id={saveId} tone="glass" />}
            <IconButton label="Ещё" tone="glass" onClick={() => toast('Скоро: офлайн-карты и экспорт маршрута')}>
              <MoreHorizontal className="size-5" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
