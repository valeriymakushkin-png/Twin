'use client';

import { motion } from 'framer-motion';
import { BookOpen, Bookmark, Compass, Flag, Globe2, Library, Map, Megaphone, PenLine, Plane, Stamp, Users, type LucideIcon } from 'lucide-react';
import { useId } from 'react';
import type { Patch, PatchIcon } from '@/lib/gamification';

/** The "days on the road" mark: a compass rose whose needle swings gently. */
export function CompassMark({ size = 32, active = true }: { size?: number; active?: boolean }) {
  const id = `cm${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
      <defs>
        <linearGradient id={`${id}r`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={active ? '#2dd4bf' : '#cbd5e1'} />
          <stop offset="1" stopColor={active ? '#0f766e' : '#94a3b8'} />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="29" fill={`url(#${id}r)`} />
      <circle cx="32" cy="32" r="23" fill="white" opacity="0.18" />
      {[0, 90, 180, 270].map((r) => (
        <rect key={r} x="31" y="6" width="2" height="6" rx="1" fill="white" opacity="0.8" transform={`rotate(${r} 32 32)`} />
      ))}
      <motion.g
        style={{ originX: '32px', originY: '32px' }}
        animate={active ? { rotate: [-14, 10, -6, 4, -10] } : { rotate: 0 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M32 12 L38 32 L32 32 Z" fill="#fef3c7" />
        <path d="M32 12 L26 32 L32 32 Z" fill="#fde68a" />
        <path d="M32 52 L26 32 L32 32 Z" fill="#ffffff" opacity="0.9" />
        <path d="M32 52 L38 32 L32 32 Z" fill="#e2e8f0" />
      </motion.g>
      <circle cx="32" cy="32" r="3.5" fill="#0f172a" />
    </svg>
  );
}

const icons: Record<PatchIcon, LucideIcon> = {
  bookmark: Bookmark,
  library: Library,
  globe: Globe2,
  plane: Plane,
  users: Users,
  megaphone: Megaphone,
  pen: PenLine,
  map: Map,
  compass: Compass,
  passport: Stamp,
  flag: Flag,
  book: BookOpen,
};

/** An embroidered travel patch with a stitched border; greyed and dashed until earned. */
export function PatchBadge({ patch, earned, size = 68 }: { patch: Patch; earned: boolean; size?: number }) {
  const Icon = icons[patch.icon];
  const color = earned ? patch.color : '#cbd5e1';
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" style={earned ? { filter: `drop-shadow(0 6px 10px ${patch.color}55)` } : undefined}>
        <circle cx="50" cy="50" r="47" fill={color} />
        <circle cx="50" cy="50" r="47" fill="none" stroke="#000" strokeOpacity="0.12" strokeWidth="2" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeOpacity={earned ? 0.85 : 0.6} strokeWidth="2.5" strokeDasharray="5 4" />
        <circle cx="50" cy="50" r="33" fill="white" opacity={earned ? 0.14 : 0.35} />
        <path d="M14 38 Q50 22 86 38" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="10" />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <Icon className={earned ? 'text-white drop-shadow-sm' : 'text-white/80'} style={{ width: size * 0.36, height: size * 0.36 }} strokeWidth={2.3} />
      </div>
    </div>
  );
}
