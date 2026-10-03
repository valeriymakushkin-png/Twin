import { cn } from '@/lib/cn';

/** Red atmospheric glow behind hero content. Pure CSS, GPU-friendly. */
export function Aurora({ className, intensity = 1 }: { className?: string; intensity?: number }) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      <div className="absolute left-1/2 top-[38%] size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full glow-red blur-2xl" style={{ opacity: 0.75 * intensity }} />
      <div className="absolute -right-24 -top-16 size-[260px] rounded-full bg-brand blur-[120px] animate-pulse-soft" style={{ opacity: 0.18 * intensity }} />
      <div className="absolute -left-28 top-1/2 size-[240px] rounded-full bg-brand-2 blur-[120px] animate-pulse-soft [animation-delay:1200ms]" style={{ opacity: 0.12 * intensity }} />
    </div>
  );
}
