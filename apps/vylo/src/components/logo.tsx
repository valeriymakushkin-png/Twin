'use client';

import { useId } from 'react';

export function Spark({ size = 32, className }: { size?: number; className?: string }) {
  const id = `spark${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b8df8" />
          <stop offset="0.55" stopColor="#6366f1" />
          <stop offset="1" stopColor="#4338ca" />
        </linearGradient>
      </defs>
      <path d="M32 2C34 20 44 30 62 32 44 34 34 44 32 62 30 44 20 34 2 32 20 30 30 20 32 2Z" fill={`url(#${id})`} />
    </svg>
  );
}

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-[0.18em] font-bold tracking-[-0.045em] text-ink" style={{ fontSize: size }}>
      <Spark size={size * 0.92} />
      Vylo
    </span>
  );
}
