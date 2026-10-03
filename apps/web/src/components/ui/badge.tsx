import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Tone = 'neutral' | 'premium' | 'success' | 'danger' | 'violet';

const tones: Record<Tone, string> = {
  neutral: 'bg-white/[0.06] text-ink-2 border-line',
  premium: 'bg-amber-400/12 text-amber-300 border-amber-400/25',
  success: 'bg-emerald-400/12 text-emerald-300 border-emerald-400/25',
  danger: 'bg-rose-500/12 text-rose-300 border-rose-500/25',
  violet: 'bg-violet-500/15 text-violet-200 border-violet-400/25',
};

export function Badge({ tone = 'neutral', children, className, icon }: { tone?: Tone; children: ReactNode; className?: string; icon?: ReactNode }) {
  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold tracking-wide', tones[tone], className)}>
      {icon}
      {children}
    </span>
  );
}
