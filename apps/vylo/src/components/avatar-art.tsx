import { useId } from 'react';
import { ACCESSORIES, BACKGROUNDS, HAIR_COLORS, SHIRTS, SKINS, type AvatarConfig } from '@/lib/avatar';

/** Back-of-head hair, drawn before the face. */
function HairBack({ style, color }: { style: number; color: string }) {
  switch (style) {
    case 1: // long
      return <path d="M24 44c0-18 12-28 26-28s26 10 26 28v26c-6 4-14 5-18 3V50H42v23c-4 2-12 1-18-3z" fill={color} />;
    case 4: // ponytail
      return <path d="M70 34c10 4 13 16 8 28-2 5-7 7-10 5 4-8 4-20 2-33z" fill={color} />;
    case 6: // bob
      return <path d="M25 46c0-17 11-28 25-28s25 11 25 28v14c-4 3-9 3-11 1V48H36v13c-2 2-7 2-11-1z" fill={color} />;
    default:
      return null;
  }
}

/** Top-of-head hair, drawn over the face. */
function HairFront({ style, color }: { style: number; color: string }) {
  switch (style) {
    case 0: // short crop
      return <path d="M27 42c0-14 10-22 23-22s23 8 23 22c-6-6-14-9-23-9s-17 3-23 9z" fill={color} />;
    case 1:
      return <path d="M27 44c1-15 11-24 23-24 13 0 22 9 23 24-8-4-12-10-14-14-6 8-17 12-32 14z" fill={color} />;
    case 2: // curly
      return (
        <g fill={color}>
          {[30, 38, 46, 54, 62, 70].map((x, i) => (
            <circle key={x} cx={x} cy={i % 2 ? 27 : 31} r={7.5} />
          ))}
          <circle cx="27" cy="38" r="6" />
          <circle cx="73" cy="38" r="6" />
        </g>
      );
    case 3: // bun
      return (
        <g fill={color}>
          <circle cx="50" cy="16" r="8" />
          <path d="M27 42c0-13 10-21 23-21s23 8 23 21c-5-5-13-8-23-8s-18 3-23 8z" />
        </g>
      );
    case 4:
      return <path d="M27 42c0-13 10-21 23-21s23 8 23 21c-7-4-15-6-23-6s-16 2-23 6z" fill={color} />;
    case 5: // side part
      return <path d="M27 44c0-15 10-24 24-24 12 0 22 8 22 20-10 0-20-3-26-9-4 6-11 10-20 13z" fill={color} />;
    case 6:
      return <path d="M27 42c0-13 10-22 23-22s23 9 23 22c-4-4-8-6-12-6l-4-6-4 6H38c-4 0-8 2-11 6z" fill={color} />;
    default: // 7 buzz
      return <path d="M28 40c1-12 10-19 22-19s21 7 22 19c-6-4-14-6-22-6s-16 2-22 6z" fill={color} opacity="0.55" />;
  }
}

function Accessory({ kind, plusExtra }: { kind: (typeof ACCESSORIES)[number]; plusExtra?: boolean }) {
  switch (kind) {
    case 'glasses':
      return (
        <g fill="none" stroke="#1f2937" strokeWidth="2">
          <circle cx="41" cy="48" r="6" />
          <circle cx="59" cy="48" r="6" />
          <path d="M47 48h6" />
        </g>
      );
    case 'sunglasses':
      return (
        <g fill="#0f172a">
          <rect x="33" y="43" width="15" height="10" rx="4" />
          <rect x="52" y="43" width="15" height="10" rx="4" />
          <rect x="47" y="45" width="6" height="2" />
        </g>
      );
    case 'cap':
      return (
        <g>
          <path d="M26 38c0-12 11-20 24-20s24 8 24 20z" fill="#ef4444" />
          <path d="M50 37h30c0 3-3 5-6 5H50z" fill="#b91c1c" />
        </g>
      );
    case 'beanie':
      return (
        <g>
          <path d="M26 40c0-14 11-23 24-23s24 9 24 23z" fill="#0ea5e9" />
          <rect x="25" y="36" width="50" height="7" rx="3.5" fill="#0369a1" />
          <circle cx="50" cy="15" r="4" fill="#e0f2fe" />
        </g>
      );
    case 'headphones':
      return (
        <g>
          <path d="M24 48c0-17 12-28 26-28s26 11 26 28" fill="none" stroke="#111827" strokeWidth="4" />
          <rect x="19" y="44" width="9" height="15" rx="4" fill="#6366f1" />
          <rect x="72" y="44" width="9" height="15" rx="4" fill="#6366f1" />
        </g>
      );
    case 'explorer': // safari hat
      return (
        <g>
          <ellipse cx="50" cy="36" rx="32" ry="6" fill="#a16207" />
          <path d="M33 36c0-11 7-18 17-18s17 7 17 18z" fill="#ca8a04" />
          <rect x="33" y="31" width="34" height="4" fill="#78350f" />
        </g>
      );
    case 'flower':
      return (
        <g transform="translate(68 30)">
          {[0, 72, 144, 216, 288].map((r) => (
            <ellipse key={r} rx="3.5" ry="6" fill="#f472b6" transform={`rotate(${r}) translate(0 -5)`} />
          ))}
          <circle r="3" fill="#fde047" />
        </g>
      );
    case 'aviator':
      return (
        <g>
          <path d="M33 47c0-4 3-6 7-6h6c2 0 3 2 2 4l-2 6c-1 3-3 4-6 4h-1c-4 0-6-4-6-8zM67 47c0-4-3-6-7-6h-6c-2 0-3 2-2 4l2 6c1 3 3 4 6 4h1c4 0 6-4 6-8z" fill={plusExtra ? '#f59e0b' : '#0f172a'} opacity="0.92" />
          <path d="M46 44h8" stroke="#a16207" strokeWidth="1.5" />
        </g>
      );
    default:
      return null;
  }
}

export function AvatarArt({ config, size = 40, className }: { config: AvatarConfig; size?: number; className?: string }) {
  const gid = `av${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const [b1, b2] = BACKGROUNDS[config.bg % BACKGROUNDS.length]!;
  const skin = SKINS[config.skin % SKINS.length]!;
  const hair = HAIR_COLORS[config.hairColor % HAIR_COLORS.length]!;
  const shirt = SHIRTS[config.shirt % SHIRTS.length]!;
  const acc = ACCESSORIES[config.accessory % ACCESSORIES.length]!;
  const hidesHair = acc === 'cap' || acc === 'beanie' || acc === 'explorer';
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={b1} />
          <stop offset="1" stopColor={b2} />
        </linearGradient>
        <clipPath id={`${gid}c`}>
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${gid}c)`}>
        <rect width="100" height="100" fill={`url(#${gid})`} />
        {!hidesHair && <HairBack style={config.hair} color={hair} />}
        <path d="M18 100c2-18 15-27 32-27s30 9 32 27z" fill={shirt} />
        <rect x="43" y="62" width="14" height="14" rx="6" fill={skin} />
        <circle cx="27" cy="49" r="4.5" fill={skin} />
        <circle cx="73" cy="49" r="4.5" fill={skin} />
        <ellipse cx="50" cy="48" rx="23" ry="25" fill={skin} />
        <circle cx="38" cy="57" r="4" fill="#fb7185" opacity="0.25" />
        <circle cx="62" cy="57" r="4" fill="#fb7185" opacity="0.25" />
        <ellipse cx="41" cy="49" rx="2.4" ry="3" fill="#1f2937" />
        <ellipse cx="59" cy="49" rx="2.4" ry="3" fill="#1f2937" />
        <path d="M43 59c4 4 10 4 14 0" fill="none" stroke="#7c2d12" strokeWidth="2.2" strokeLinecap="round" />
        {!hidesHair && <HairFront style={config.hair} color={hair} />}
        <Accessory kind={acc} plusExtra={config.accessory >= 6} />
      </g>
    </svg>
  );
}
