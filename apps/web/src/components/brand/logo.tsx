import { cn } from '@/lib/cn';

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn('size-7', className)} aria-hidden>
      <defs>
        <linearGradient id="lm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b5cf6" />
          <stop offset="0.55" stopColor="#d946ef" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="10" fill="url(#lm)" />
      <circle cx="11.5" cy="14" r="2.6" fill="#0b0b10" />
      <circle cx="20.5" cy="14" r="2.6" fill="#0b0b10" />
      <circle cx="12.3" cy="13.1" r="0.9" fill="#fff" />
      <circle cx="21.3" cy="13.1" r="0.9" fill="#fff" />
      <path d="M10.5 20c1.6 2.2 3.4 3.2 5.5 3.2s3.9-1 5.5-3.2" stroke="#0b0b10" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <LogoMark />
      <span className="text-[15px] font-semibold tracking-[-0.02em]">
        Mascot<span className="text-aurora"> AI</span>
      </span>
    </div>
  );
}
