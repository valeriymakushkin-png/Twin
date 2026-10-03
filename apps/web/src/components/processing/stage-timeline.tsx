'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { AVATAR_STAGES } from '@mascot/shared';
import { CheckDot } from '@/components/ui/misc';
import { cn } from '@/lib/cn';
import { useT } from '@/lib/i18n';

export function StageTimeline({ stage, done, photos }: { stage: string | null; done: boolean; photos?: number }) {
  const { t } = useT();
  const current = done ? AVATAR_STAGES.length : Math.max(0, AVATAR_STAGES.findIndex((s) => s.key === stage));
  return (
    <ol className="space-y-3">
      {AVATAR_STAGES.map((s, i) => {
        const state = i < current ? 'done' : i === current ? 'active' : 'todo';
        return (
          <motion.li key={s.key} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="flex items-center gap-3">
            {state === 'done' ? (
              <CheckDot />
            ) : state === 'active' ? (
              <span className="grid size-5 place-items-center rounded-full border border-brand/60 text-brand">
                <Loader2 className="size-3 animate-spin" />
              </span>
            ) : (
              <CheckDot done={false} />
            )}
            <span className={cn('flex-1 text-[14px] font-semibold', state === 'todo' ? 'text-faint' : 'text-ink')}>{t.stages[s.key].label}</span>
            {i === 0 && photos ? <span className="font-mono text-[12px] text-muted">{photos}/{photos}</span> : null}
          </motion.li>
        );
      })}
    </ol>
  );
}
