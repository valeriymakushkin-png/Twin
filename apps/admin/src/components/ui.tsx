'use client';

import { AlertOctagon, AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/format';

export const RANGES = [7, 30, 90] as const;
export type RangeDays = (typeof RANGES)[number];

/** Date-range presets: one row, above everything it scopes. */
export function RangeFilter({ value, onChange }: { value: RangeDays; onChange: (v: RangeDays) => void }) {
  return (
    <div className="inline-flex rounded-xl border border-line bg-card p-1">
      {RANGES.map((d) => (
        <button
          key={d}
          onClick={() => onChange(d)}
          className={cn('rounded-lg px-3 py-1.5 text-[12px] font-medium', value === d ? 'bg-white/10 text-ink' : 'text-muted hover:text-ink-2')}
        >
          Last {d} days
        </button>
      ))}
    </div>
  );
}

const STATUS = {
  good: { icon: CheckCircle2, cls: 'text-good bg-good/10 border-good/25' },
  warning: { icon: Info, cls: 'text-warning bg-warning/10 border-warning/25' },
  serious: { icon: AlertTriangle, cls: 'text-serious bg-serious/10 border-serious/25' },
  critical: { icon: AlertOctagon, cls: 'text-critical bg-critical/10 border-critical/25' },
} as const;

/** Status always ships with icon + label, never color alone. */
export function StatusPill({ status, label }: { status: keyof typeof STATUS; label: string }) {
  const { icon: Icon, cls } = STATUS[status];
  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold', cls)}>
      <Icon className="size-3" />
      {label}
    </span>
  );
}

export function severityStatus(severity: string): keyof typeof STATUS {
  return severity === 'CRITICAL' ? 'critical' : severity === 'HIGH' ? 'serious' : severity === 'MEDIUM' ? 'warning' : 'good';
}

export function Btn({ className, variant = 'default', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'primary' | 'danger' }) {
  return (
    <button
      className={cn(
        'inline-flex h-8 items-center gap-1.5 rounded-lg px-3 text-[12px] font-semibold transition-colors disabled:opacity-50',
        variant === 'primary' && 'bg-accent text-white hover:brightness-110',
        variant === 'danger' && 'border border-critical/40 text-critical hover:bg-critical/10',
        variant === 'default' && 'border border-line bg-card-2 text-ink-2 hover:text-ink',
        className,
      )}
      {...props}
    />
  );
}

export function PageHeader({ title, subtitle, right }: { title: string; subtitle?: string; right?: ReactNode }) {
  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 className="text-[22px] font-semibold tracking-[-0.02em]">{title}</h1>
        {subtitle && <p className="mt-0.5 text-[13px] text-muted">{subtitle}</p>}
      </div>
      {right}
    </div>
  );
}

export function Panel({ title, children, right }: { title: string; children: ReactNode; right?: ReactNode }) {
  return (
    <section className="rounded-2xl border border-line bg-card">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <h3 className="text-[14px] font-semibold">{title}</h3>
        {right}
      </div>
      <div className="p-4">{children}</div>
    </section>
  );
}
