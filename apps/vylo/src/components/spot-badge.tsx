'use client';

import { Camera, Gem } from 'lucide-react';
import { useI18n } from '@/i18n/use';
import { cn } from '@/lib/utils';

export const SPOT_STYLE = {
  insta: { icon: Camera, bg: 'linear-gradient(135deg,#f97316,#db2777 55%,#7c3aed)', color: '#db2777' },
  hidden: { icon: Gem, bg: 'linear-gradient(135deg,#0f766e,#14b8a6)', color: '#0f766e' },
} as const;

/** "Photo spot" / "Hidden gem" pill used on cards, pins and place pages. */
export function SpotBadge({ spot, className, compact }: { spot: 'insta' | 'hidden'; className?: string; compact?: boolean }) {
  const { t } = useI18n();
  const s = SPOT_STYLE[spot];
  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold text-white shadow-sm', className)} style={{ background: s.bg }}>
      <s.icon className="size-3" strokeWidth={2.6} />
      {!compact && t(spot === 'insta' ? 'spots.insta' : 'spots.hidden')}
    </span>
  );
}
