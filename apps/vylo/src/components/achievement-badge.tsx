import { BookOpen, Bookmark, Flag, Flame, Globe2, Library, Lock, Map, Megaphone, PenLine, Plane, Stamp, Users, type LucideIcon } from 'lucide-react';
import type { Achievement, AchievementIcon } from '@/lib/gamification';

const icons: Record<AchievementIcon, LucideIcon> = {
  bookmark: Bookmark,
  library: Library,
  globe: Globe2,
  plane: Plane,
  users: Users,
  megaphone: Megaphone,
  pen: PenLine,
  map: Map,
  flame: Flame,
  passport: Stamp,
  flag: Flag,
  book: BookOpen,
};

/** Embossed hexagon medal; greyed out with a lock until earned. */
export function AchievementBadge({ achievement, unlocked, size = 64 }: { achievement: Achievement; unlocked: boolean; size?: number }) {
  const Icon = icons[achievement.icon];
  const id = `ab-${achievement.id}-${size}`;
  return (
    <div className="relative" style={{ width: size, height: size * 1.08 }}>
      <svg viewBox="0 0 100 108" className="absolute inset-0 h-full w-full" style={unlocked ? { filter: `drop-shadow(0 8px 14px ${achievement.color}55)` } : undefined}>
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={unlocked ? achievement.color : '#e2e8f0'} stopOpacity={unlocked ? 0.75 : 1} />
            <stop offset="1" stopColor={unlocked ? achievement.color : '#cbd5e1'} />
          </linearGradient>
        </defs>
        <path d="M50 3 L93 28 L93 80 L50 105 L7 80 L7 28 Z" fill={`url(#${id})`} />
        <path d="M50 12 L85 32.5 L85 75.5 L50 96 L15 75.5 L15 32.5 Z" fill="white" opacity={unlocked ? 0.18 : 0.5} />
        <path d="M50 3 L93 28 L50 52 L7 28 Z" fill="white" opacity="0.14" />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        {unlocked ? (
          <Icon className="text-white drop-shadow-sm" style={{ width: size * 0.38, height: size * 0.38 }} strokeWidth={2.2} />
        ) : (
          <Lock className="text-faint" style={{ width: size * 0.3, height: size * 0.3 }} strokeWidth={2.2} />
        )}
      </div>
    </div>
  );
}
