import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('card rounded-[22px] shadow-card', className)} {...props} />;
}

export function SectionTitle({ title, action, className }: { title: string; action?: ReactNode; className?: string }) {
  return (
    <div className={cn('mb-3 flex items-end justify-between px-0.5', className)}>
      <h2 className="text-[16px] font-bold tracking-[-0.015em] text-ink">{title}</h2>
      {action}
    </div>
  );
}

/** Screen header in the reference style: bold title + muted subtitle. */
export function ScreenTitle({ title, subtitle, right, className }: { title: ReactNode; subtitle?: ReactNode; right?: ReactNode; className?: string }) {
  return (
    <header className={cn('flex items-start justify-between gap-3 pb-4 pt-5', className)}>
      <div className="min-w-0">
        <h1 className="text-[24px] font-bold leading-tight tracking-[-0.03em]">{title}</h1>
        {subtitle && <p className="mt-1.5 max-w-[320px] text-[13.5px] leading-snug text-muted">{subtitle}</p>}
      </div>
      {right}
    </header>
  );
}
