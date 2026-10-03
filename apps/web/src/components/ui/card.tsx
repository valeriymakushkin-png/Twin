import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('glass rounded-3xl shadow-card', className)} {...props} />;
}

export function SectionTitle({ title, action, className }: { title: string; action?: React.ReactNode; className?: string }) {
  return (
    <div className={cn('mb-3 flex items-end justify-between px-1', className)}>
      <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{title}</h2>
      {action}
    </div>
  );
}
