'use client';

import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import { AVATAR_STAGES } from '@mascot/shared';
import { cn } from '@/lib/cn';
import { useT } from '@/lib/i18n';

export function StageTimeline({ stage, done }: { stage: string | null; done: boolean }) {
  const { t } = useT();
  const current = done ? AVATAR_STAGES.length : Math.max(0, AVATAR_STAGES.findIndex((s) => s.key === stage));
  return (
    <ol className="space-y-1">
      {AVATAR_STAGES.map((s, i) => {
        const state = i < current ? 'done' : i === current ? 'active' : 'todo';
        return (
          <motion.li
            key={s.key}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={cn('flex items-center gap-3 rounded-2xl px-3 py-2.5', state === 'active' && 'bg-white/[0.05]')}
          >
            <span
              className={cn(
                'grid size-7 shrink-0 place-items-center rounded-full border text-[11px] font-semibold',
                state === 'done' && 'border-emerald-400/40 bg-emerald-400/15 text-emerald-300',
                state === 'active' && 'border-violet-400/50 bg-violet-500/20 text-violet-200',
                state === 'todo' && 'border-line text-faint',
              )}
            >
              {state === 'done' ? <Check className="size-3.5" strokeWidth={3} /> : state === 'active' ? <Loader2 className="size-3.5 animate-spin" /> : i + 1}
            </span>
            <div className="min-w-0">
              <div className={cn('text-[14px] font-semibold', state === 'todo' && 'text-faint')}>{t.stages[s.key].label}</div>
              {state === 'active' && <div className="text-[12px] text-muted">{t.stages[s.key].description}</div>}
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
