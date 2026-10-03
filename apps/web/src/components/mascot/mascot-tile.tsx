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
      <Link href={href} className="card block overflow-hidden rounded-[22px]">
        <div className="relative aspect-square">
          <div className="glow-red absolute inset-[8%] rounded-full opacity-70 blur-lg" />
          {avatar.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatar.thumbnailUrl ?? avatar.imageUrl} alt={avatar.name} className="relative size-full object-contain" />
          ) : (
            <div className="grid size-full place-items-center">
              {avatar.status === 'FAILED' ? <AlertTriangle className="size-7 text-brand" /> : <Loader2 className="size-7 animate-spin text-brand" />}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between border-t border-white/5 px-3 py-2.5">
          <span className="truncate text-[13px] font-bold">{avatar.name}</span>
          <span className={cn('text-[10.5px] font-medium', avatar.status === 'READY' ? 'text-muted' : 'text-brand')}>
            {avatar.status === 'READY' ? styleName(tr, avatar.styleSlug, style?.name ?? avatar.styleSlug) : avatar.status === 'FAILED' ? t.tile.failed : t.tile.creating}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
