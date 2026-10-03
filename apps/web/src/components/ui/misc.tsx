'use client';

import { motion } from 'framer-motion';
import { Check, Lock } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { haptic } from '@/lib/telegram';

export function Progress({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn('h-2 w-full overflow-hidden rounded-full bg-white/[0.07]', className)}>
      <motion.div
        className="h-full rounded-full bg-brand-grad shadow-[0_0_16px_rgba(255,43,61,0.8)]"
        initial={false}
        animate={{ width: `${Math.max(2, Math.min(100, value))}%` }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      />
    </div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn('skeleton rounded-2xl', className)} />;
}

/** Round red check used on selected / completed items. */
export function CheckDot({ className, done = true }: { className?: string; done?: boolean }) {
  return (
    <span
      className={cn(
        'grid size-5 shrink-0 place-items-center rounded-full',
        done ? 'bg-brand-grad text-white shadow-[0_0_12px_rgba(255,43,61,0.7)]' : 'border border-white/15 text-transparent',
        className,
      )}
    >
      <Check className="size-3" strokeWidth={3.4} />
    </span>
  );
}

export function LockDot({ className }: { className?: string }) {
  return (
    <span className={cn('grid size-6 place-items-center rounded-full bg-black/60 text-white backdrop-blur', className)}>
      <Lock className="size-3" />
    </span>
  );
}

export function Chip({
  active,
  onClick,
  children,
  locked,
  className,
}: {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
  locked?: boolean;
  className?: string;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        haptic.select();
        onClick?.();
      }}
      className={cn(
        'relative inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-full border px-4 text-[13px] font-semibold transition-colors',
        active ? 'border-brand bg-brand/15 text-white shadow-[0_0_18px_-6px_rgba(255,43,61,0.9)]' : 'border-white/10 bg-white/[0.035] text-muted hover:text-ink-2',
        className,
      )}
    >
      {children}
      {locked && <Lock className="size-3 text-[#ff8a94]" />}
    </motion.button>
  );
}

export function Segmented<T extends string>({
  value,
  options,
  onChange,
  className,
}: {
  value: T;
  options: Array<{ value: T; label: ReactNode }>;
  onChange: (v: T) => void;
  className?: string;
}) {
  return (
    <div className={cn('relative flex rounded-2xl border border-white/10 bg-white/[0.03] p-1', className)}>
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => {
            haptic.select();
            onChange(o.value);
          }}
          className={cn('relative z-10 flex-1 rounded-xl px-3 py-2 text-[13px] font-semibold transition-colors', value === o.value ? 'text-white' : 'text-muted')}
        >
          {value === o.value && (
            <motion.span
              layoutId={`seg-${options.map((x) => x.value).join('-')}`}
              className="absolute inset-0 -z-10 rounded-xl border border-brand/70 bg-brand/15"
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            />
          )}
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function EmptyState({ icon, title, body, action }: { icon: ReactNode; title: string; body?: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center px-6 py-12 text-center">
      <div className="mb-4 grid size-14 place-items-center rounded-2xl border border-brand/30 bg-brand/10 text-brand">{icon}</div>
      <div className="text-[15px] font-semibold">{title}</div>
      {body && <p className="mt-1.5 max-w-[260px] text-[13px] leading-relaxed text-muted">{body}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function Stat({ label, value, hint }: { label: string; value: ReactNode; hint?: string }) {
  return (
    <div className="card rounded-2xl p-3.5">
      <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">{label}</div>
      <div className="mt-1 font-mono text-xl font-semibold tabular-nums">{value}</div>
      {hint && <div className="mt-0.5 text-[11px] text-faint">{hint}</div>}
    </div>
  );
}
