'use client';

import { PHOTO_GUIDE, type PhotoPose } from '@mascot/shared';
import { CheckDot } from '@/components/ui/misc';
import { cn } from '@/lib/cn';
import { useT } from '@/lib/i18n';

/** Head-and-shoulders glyph turned towards the guide pose. */
function PoseGlyph({ pose }: { pose: PhotoPose }) {
  const turn = pose === 'LEFT' ? -1 : pose === 'RIGHT' ? 1 : 0;
  const smile = pose === 'SMILE';
  return (
    <svg viewBox="0 0 48 48" className="size-11" aria-hidden>
      <defs>
        <linearGradient id={`pg-${pose}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2f2f4" />
          <stop offset="1" stopColor="#9a9aa2" />
        </linearGradient>
      </defs>
      <path d="M9 46c1.5-8 7.5-12 15-12s13.5 4 15 12Z" fill="#2a2a30" />
      <ellipse cx={24 + turn * 1.5} cy="21" rx={turn ? 9.6 : 10.5} ry="12" fill={`url(#pg-${pose})`} />
      <path d={`M${13.5 + turn * 2} 16c2-8 19-9 21 0-3-3-7-4-10.5-4S16 13 ${13.5 + turn * 2} 16Z`} fill="#1a1a1e" />
      {turn === 0 ? (
        <>
          <circle cx="20" cy="21" r="1.4" fill="#1a1a1e" />
          <circle cx="28" cy="21" r="1.4" fill="#1a1a1e" />
          {smile ? <path d="M19.5 26.5c2.6 3 6.4 3 9 0" stroke="#1a1a1e" strokeWidth="1.6" fill="none" strokeLinecap="round" /> : <path d="M20.5 27.5h7" stroke="#1a1a1e" strokeWidth="1.6" strokeLinecap="round" />}
        </>
      ) : (
        <>
          <circle cx={24 + turn * 5} cy="21" r="1.4" fill="#1a1a1e" />
          <path d={`M${24 + turn * 9} 22l${turn * 2.2} 3.2-${turn * 2.2} .6`} stroke="#1a1a1e" strokeWidth="1.3" fill="none" />
          <path d={`M${23 + turn * 5} 27.5h${turn * 4}`} stroke="#1a1a1e" strokeWidth="1.6" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

/** The five guide poses; each lights up once a matching photo is detected by face analysis. */
export function PhotoGuide({ covered }: { covered: Set<PhotoPose> }) {
  const { t } = useT();
  return (
    <div className="grid grid-cols-6 gap-2">
      {PHOTO_GUIDE.map(({ pose }, i) => {
        const done = covered.has(pose) || (pose === 'FRONT' && (covered.has('SMILE') || covered.has('NEUTRAL')));
        return (
          <div
            key={pose}
            className={cn(
              'relative flex flex-col items-center rounded-2xl border px-1 pb-2 pt-2.5 transition-colors',
              i < 3 ? 'col-span-2' : i === 3 ? 'col-span-2 col-start-2' : 'col-span-2',
              done ? 'selected bg-brand/[0.07]' : 'card',
            )}
          >
            <PoseGlyph pose={pose} />
            <div className="mt-1 text-center text-[10.5px] font-semibold leading-tight text-ink-2">{t.guide[pose].title}</div>
            {done && <CheckDot className="absolute right-1.5 top-1.5 size-4" />}
          </div>
        );
      })}
    </div>
  );
}
