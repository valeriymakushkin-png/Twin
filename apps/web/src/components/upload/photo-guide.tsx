'use client';

import { HERO_DNA, PHOTO_GUIDE, type PhotoPose } from '@mascot/shared';
import { MascotShot } from '@/components/three/mascot-shot';
import { CheckDot } from '@/components/ui/misc';
import { cn } from '@/lib/cn';
import { useT } from '@/lib/i18n';
import type { ShotOptions } from '@/lib/mascot3d';

/** Example shot for each guide pose: the demo character, turned and posed like the photo we want. */
const POSE_SHOT: Record<PhotoPose, ShotOptions> = {
  OTHER: { emotion: 'neutral', framing: 'head' },
  FRONT: { emotion: 'neutral', framing: 'head' },
  LEFT: { emotion: 'neutral', framing: 'head', yaw: -0.95 },
  RIGHT: { emotion: 'neutral', framing: 'head', yaw: 0.95 },
  SMILE: { emotion: 'happy', framing: 'head' },
  NEUTRAL: { emotion: 'neutral', framing: 'portrait' },
};

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
              'relative flex flex-col items-center rounded-2xl border p-1.5 pb-2 transition-colors',
              i < 3 ? 'col-span-2' : i === 3 ? 'col-span-2 col-start-2' : 'col-span-2',
              done ? 'selected bg-brand/[0.07]' : 'card',
            )}
          >
            <MascotShot
              dna={HERO_DNA}
              size={256}
              {...POSE_SHOT[pose]}
              className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-[radial-gradient(closest-side,#2a1114,#121215)]"
            />
            <div className="mt-1.5 text-center text-[10.5px] font-semibold leading-tight text-ink-2">{t.guide[pose].title}</div>
            {done && <CheckDot className="absolute right-1.5 top-1.5 size-4" />}
          </div>
        );
      })}
    </div>
  );
}
