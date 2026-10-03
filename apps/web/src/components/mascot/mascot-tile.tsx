'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { getStyleRecipe, type AvatarDto } from '@mascot/shared';
import { cn } from '@/lib/cn';
import { useT } from '@/lib/i18n';
import { styleName } from '@/lib/i18n/catalog';

export function MascotTile({ avatar, className }: { avatar: AvatarDto; className?: string }) {
  const style = getStyleRecipe(avatar.styleSlug);
  const tr = useT();
  const { t } = tr;
  const href = avatar.status === 'PROCESSING' && avatar.latestGenerationId ? `/processing/${avatar.latestGenerationId}` : `/mascot/${avatar.id}`;
  return (
    <motion.div whileTap={{ scale: 0.97 }} className={className}>
      <Link href={href} className="block overflow-hidden rounded-3xl border border-white/10 shadow-card">
        <div className="relative aspect-square" style={{ background: style ? `linear-gradient(150deg, ${style.gradient[0]}, ${style.gradient[1]})` : '#16161e' }}>
          {avatar.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatar.thumbnailUrl ?? avatar.imageUrl} alt={avatar.name} className="size-full object-contain" />
          ) : (
            <div className="grid size-full place-items-center">
              {avatar.status === 'FAILED' ? <AlertTriangle className="size-7 text-white/80" /> : <Loader2 className="size-7 animate-spin text-white/80" />}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between bg-surface-2 px-3 py-2">
          <span className="truncate text-[13px] font-semibold">{avatar.name}</span>
          <span className={cn('text-[10px] font-medium', avatar.status === 'READY' ? 'text-muted' : 'text-amber-300')}>
            {avatar.status === 'READY' ? styleName(tr, avatar.styleSlug, style?.name ?? avatar.styleSlug) : avatar.status === 'FAILED' ? t.tile.failed : t.tile.creating}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
