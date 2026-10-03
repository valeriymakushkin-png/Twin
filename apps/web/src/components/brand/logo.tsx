import { cn } from '@/lib/cn';

/** Brand mark: a glossy red rounded star. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={cn('size-8 drop-shadow-[0_4px_14px_rgba(255,43,61,0.65)]', className)} aria-hidden>
      <defs>
        <linearGradient id="lm-fill" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#ff6170" />
          <stop offset="0.55" stopColor="#ff2b3d" />
          <stop offset="1" stopColor="#c50d22" />
        </linearGradient>
        <linearGradient id="lm-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M24 4.5c1.3 0 2.4.8 3 2l4.2 8.6 9.4 1.4c2.7.4 3.8 3.7 1.8 5.6l-6.8 6.6 1.6 9.4c.5 2.7-2.3 4.7-4.7 3.4L24 37.1l-8.5 4.4c-2.4 1.3-5.2-.7-4.7-3.4l1.6-9.4-6.8-6.6c-2-1.9-.9-5.2 1.8-5.6l9.4-1.4 4.2-8.6c.6-1.2 1.7-2 3-2Z"
        fill="url(#lm-fill)"
      />
      <path d="M24 8.5c.7 0 1.2.4 1.5 1l3.8 7.7 8.5 1.2c-6 1.2-15.3 4.5-21.6 9.9l-4.6-4.5c-1-.9-.5-2.6.9-2.8l8.5-1.2 3.8-7.7c.3-.6.8-1 1.5-1Z" fill="url(#lm-shine)" />
    </svg>
  );
}

export function Logo({ className, tagline }: { className?: string; tagline?: string }) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <LogoMark />
      <div className="leading-none">
        <div className="text-[17px] font-bold tracking-[-0.02em]">Mascot AI</div>
        {tagline && <div className="mt-1 text-[10.5px] font-medium text-muted">{tagline}</div>}
      </div>
    </div>
  );
}
