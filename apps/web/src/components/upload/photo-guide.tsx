'use client';

import { Check } from 'lucide-react';
import { PHOTO_GUIDE, type PhotoPose } from '@mascot/shared';
import { cn } from '@/lib/cn';
import { useT } from '@/lib/i18n';

const ROTATE: Record<string, number> = { FRONT: 0, LEFT: -28, RIGHT: 28, SMILE: 0, NEUTRAL: 0 };

function FaceGlyph({ pose }: { pose: PhotoPose }) {
  const smile = pose === 'SMILE';
  return (
    <svg viewBox="0 0 40 40" className="size-9" style={{ transform: `perspective(80px) rotateY(${ROTATE[pose] ?? 0}deg)` }}>
      <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="14.5" cy="17" r="1.8" fill="currentColor" />
      <circle cx="25.5" cy="17" r="1.8" fill="currentColor" />
      {smile ? (
        <path d="M13 23c2 3.5 4.5 5 7 5s5-1.5 7-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      ) : (
        <path d="M14.5 25h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      )}
    </svg>
  );
}

/** The five guide poses; each lights up once a matching photo is detected by face analysis. */
export function PhotoGuide({ covered }: { covered: Set<PhotoPose> }) {
  const { t } = useT();
  return (
    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
      {PHOTO_GUIDE.map(({ pose }) => {
        const { title, hint } = t.guide[pose];
        const done = covered.has(pose) || (pose === 'FRONT' && (covered.has('SMILE') || covered.has('NEUTRAL')));
        return (
          <div
            key={pose}
            className={cn(
              'relative w-[118px] shrink-0 rounded-2xl border p-3 transition-colors',
              done ? 'border-emerald-400/40 bg-emerald-400/[0.07]' : 'border-line bg-white/[0.03]',
            )}
          >
            <div className={cn('mb-2', done ? 'text-emerald-300' : 'text-ink-2')}>
              <FaceGlyph pose={pose} />
            </div>
            <div className="text-[12px] font-semibold">{title}</div>
            <div className="mt-0.5 text-[10.5px] leading-snug text-muted">{hint}</div>
            {done && (
              <span className="absolute right-2.5 top-2.5 grid size-5 place-items-center rounded-full bg-emerald-400 text-black">
                <Check className="size-3" strokeWidth={3.2} />
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
