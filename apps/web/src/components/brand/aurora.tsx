import { cn } from '@/lib/cn';

/** Soft animated gradient blobs behind hero content. Pure CSS, GPU-friendly. */
export function Aurora({ className, intensity = 1 }: { className?: string; intensity?: number }) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      <div
        className="absolute -left-24 -top-24 size-[340px] rounded-full bg-violet-600 blur-[110px] animate-pulse-soft"
        style={{ opacity: 0.35 * intensity }}
      />
      <div
        className="absolute -right-28 top-10 size-[300px] rounded-full bg-fuchsia-600 blur-[110px] animate-pulse-soft [animation-delay:800ms]"
        style={{ opacity: 0.28 * intensity }}
      />
      <div
        className="absolute left-1/3 top-64 size-[260px] rounded-full bg-amber-500 blur-[120px] animate-pulse-soft [animation-delay:1600ms]"
        style={{ opacity: 0.16 * intensity }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#07070a_75%)]" />
    </div>
  );
}
