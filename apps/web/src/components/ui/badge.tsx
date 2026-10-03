import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Tone = 'neutral' | 'premium' | 'success' | 'danger' | 'brand';

const tones: Record<Tone, string> = {
  neutral: 'bg-white/[0.06] text-ink-2 border-white/10',
  premium: 'bg-brand/15 text-[#ff8a94] border-brand/35',
  success: 'bg-emerald-400/12 text-emerald-300 border-emerald-400/25',
  danger: 'bg-danger/12 text-danger border-danger/25',
  brand: 'bg-brand-grad text-white border-transparent shadow-red',
};

export function Badge({ tone = 'neutral', children, className, icon }: { tone?: Tone; children: ReactNode; className?: string; icon?: ReactNode }) {
  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold tracking-wide', tones[tone], className)}>
      {icon}
      {children}
    </span>
  );
}
