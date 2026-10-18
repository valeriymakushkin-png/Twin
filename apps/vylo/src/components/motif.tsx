import { useId } from 'react';
import type { Motif } from '@/data/types';

/** One 40×40 tile per motif — each city gets its own ornament in its accent colour. */
const tiles: Record<Motif, (c: string) => React.ReactNode> = {
  waves: (c) => <path d="M0 20 Q10 12 20 20 T40 20 M0 34 Q10 26 20 34 T40 34" fill="none" stroke={c} strokeWidth="1.6" />,
  palms: (c) => (
    <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round">
      <path d="M20 36 Q22 26 20 18" />
      <path d="M20 18 Q12 14 7 18 M20 18 Q28 14 33 18 M20 18 Q14 10 10 9 M20 18 Q26 10 30 9" />
    </g>
  ),
  peaks: (c) => <path d="M2 34 L13 16 L20 26 L28 12 L38 34" fill="none" stroke={c} strokeWidth="1.6" strokeLinejoin="round" />,
  grid: (c) => <path d="M0 10 H40 M0 30 H40 M10 0 V40 M30 0 V40" stroke={c} strokeWidth="0.9" />,
  torii: (c) => (
    <g fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round">
      <path d="M9 13 H31 M11 18 H29 M14 13 V33 M26 13 V33" />
    </g>
  ),
  dunes: (c) => <path d="M0 30 Q10 18 20 26 T40 22 M0 38 Q14 30 24 36 T40 34" fill="none" stroke={c} strokeWidth="1.5" />,
  tiles: (c) => (
    <g fill="none" stroke={c} strokeWidth="1.3">
      <rect x="4" y="4" width="32" height="32" rx="2" />
      <path d="M20 8 L32 20 L20 32 L8 20 Z" />
      <circle cx="20" cy="20" r="4" />
    </g>
  ),
  aurora: (c) => <path d="M0 14 C10 4 16 24 26 12 S36 8 40 12 M0 28 C10 18 18 36 28 24 S38 22 40 26" fill="none" stroke={c} strokeWidth="1.6" />,
  sun: (c) => (
    <g fill="none" stroke={c} strokeWidth="1.4">
      <circle cx="20" cy="20" r="6" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
        <path key={r} d="M20 8 V4" transform={`rotate(${r} 20 20)`} strokeLinecap="round" />
      ))}
    </g>
  ),
  domes: (c) => <path d="M6 32 V24 Q6 14 14 12 Q14 8 16 6 Q18 8 18 12 Q26 14 26 24 V32 Z M28 32 V27 Q28 21 33 20 Q38 21 38 27 V32" fill="none" stroke={c} strokeWidth="1.4" />,
  balloons: (c) => (
    <g fill="none" stroke={c} strokeWidth="1.4">
      <path d="M20 6 C28 6 31 13 28 19 L23 25 H17 L12 19 C9 13 12 6 20 6 Z" />
      <rect x="17" y="29" width="6" height="4" rx="1" />
      <path d="M17 25 L17.5 29 M23 25 L22.5 29" />
    </g>
  ),
  mosaic: (c) => (
    <g fill={c} opacity="0.9">
      <path d="M4 6 L14 4 L12 14 Z" />
      <path d="M22 4 L34 8 L26 14 Z" />
      <path d="M6 22 L16 20 L14 32 Z" />
      <path d="M24 22 L36 24 L30 34 Z" />
    </g>
  ),
  snow: (c) => (
    <g stroke={c} strokeWidth="1.4" strokeLinecap="round">
      {[0, 60, 120].map((r) => (
        <path key={r} d="M20 10 V30 M16 13 L20 16 L24 13 M16 27 L20 24 L24 27" transform={`rotate(${r} 20 20)`} fill="none" />
      ))}
    </g>
  ),
  lanterns: (c) => (
    <g fill="none" stroke={c} strokeWidth="1.4">
      <path d="M20 4 V8" />
      <rect x="13" y="8" width="14" height="20" rx="6" />
      <path d="M13 14 H27 M13 22 H27 M20 28 V34" />
    </g>
  ),
};

export function MotifPattern({ motif, color, opacity = 0.14, className }: { motif: Motif; color: string; opacity?: number; className?: string }) {
  const id = `mo${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  return (
    <svg className={className} aria-hidden width="100%" height="100%" style={{ opacity }}>
      <defs>
        <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(-8)">
          {tiles[motif](color)}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
