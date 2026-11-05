'use client';

import { Camera, Gem, Hotel, Landmark, MapPinned, Mountain, Users, UtensilsCrossed, type LucideIcon } from 'lucide-react';
import { useI18n } from '@/i18n/use';
import { cn } from '@/lib/utils';
import { KIND, tint, type PinKind } from './kinds';

export const KIND_ICON: Record<PinKind, LucideIcon> = {
  city: MapPinned,
  sight: Landmark,
  insta: Camera,
  hidden: Gem,
  food: UtensilsCrossed,
  nature: Mountain,
  hotel: Hotel,
  meetup: Users,
};

/** Short names ("Sight", "Hidden gem", "Food"…) in the current language — short enough for a pill on a card. */
export function useKindLabel() {
  const { t } = useI18n();
  return (kind: PinKind) => t(`mapx.kind.${kind}`);
}

/** Round glyph chip filled with the kind's gradient. */
export function KindDot({ kind, size = 28, className }: { kind: PinKind; size?: number; className?: string }) {
  const Icon = KIND_ICON[kind];
  return (
    <span
      className={cn('grid shrink-0 place-items-center rounded-full text-white ring-2 ring-white', className)}
      style={{ width: size, height: size, background: KIND[kind].gradient, boxShadow: `0 4px 10px -2px color-mix(in srgb, ${KIND[kind].color} 65%, transparent)` }}
    >
      <Icon style={{ width: size * 0.5, height: size * 0.5 }} strokeWidth={2.4} />
    </span>
  );
}

/** Tinted pill: glyph + kind name, in the kind's colour. */
export function KindPill({ kind, className }: { kind: PinKind; className?: string }) {
  const label = useKindLabel();
  const Icon = KIND_ICON[kind];
  const k = KIND[kind];
  return (
    <span className={cn('inline-flex h-6 min-w-0 items-center gap-1 rounded-full px-2 text-[11px] font-bold', className)} style={{ background: tint(k.color, 14), color: k.dark }}>
      <Icon className="size-3 shrink-0" strokeWidth={2.6} style={{ color: k.color }} />
      <span className="truncate">{label(kind)}</span>
    </span>
  );
}
