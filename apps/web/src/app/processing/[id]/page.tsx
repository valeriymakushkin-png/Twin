'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { AlertTriangle, RotateCcw } from 'lucide-react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useCallback, useEffect, useState } from 'react';
import type { GenerationDto } from '@mascot/shared';
import { AppShell } from '@/components/layout/app-shell';
import { Orbit } from '@/components/processing/orbit';
import { StageTimeline } from '@/components/processing/stage-timeline';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/misc';
import { qk, useGeneration, useInvalidate } from '@/lib/queries';
import { codedMessage } from '@/lib/api';
import { useT } from '@/lib/i18n';

function ProcessingInner() {
  const { id } = useParams<{ id: string }>();
  const search = useSearchParams();
  const router = useRouter();
  const invalidate = useInvalidate();
  const [tip, setTip] = useState(0);
  const { t, f } = useT();
  const tips = t.processing.tips;

  const onDone = useCallback(
    (g: GenerationDto) => {
      if (g.status !== 'SUCCEEDED') return;
      void invalidate(qk.avatars, qk.profile);
      const avatarId = g.avatarId ?? search.get('avatar');
      setTimeout(() => router.replace(`/mascot/${avatarId}?new=1`), 900);
    },
    [invalidate, router, search],
  );
  const { data: generation } = useGeneration(id, onDone);

  useEffect(() => {
    const timer = setInterval(() => setTip((n) => (n + 1) % tips.length), 3800);
    return () => clearInterval(timer);
  }, [tips.length]);

  const progress = generation?.progress ?? 0;
  const failed = generation?.status === 'FAILED' || generation?.status === 'CANCELED';

  return (
    <AppShell tabs={false}>
      <div className="pt-6 text-center">
        <h1 className="text-[22px] font-semibold tracking-[-0.025em]">{failed ? t.processing.failed : generation?.status === 'SUCCEEDED' ? t.processing.ready : t.processing.creating}</h1>
        <p className="mt-1 text-[13px] text-muted">
          {generation?.status === 'QUEUED' && generation.queuePosition ? f(t.processing.queue, { position: generation.queuePosition }) : t.processing.keepOpen}
        </p>
      </div>

      {failed ? (
        <Card className="mt-8 p-5 text-center">
          <AlertTriangle className="mx-auto size-8 text-amber-300" />
          <p className="mt-3 text-[14px] text-ink-2">{codedMessage(generation?.error, t.processing.genericError)}</p>
          <p className="mt-1 text-[12px] text-muted">{t.processing.refunded}</p>
          <Button className="mt-5" block icon={<RotateCcw className="size-4" />} onClick={() => router.replace('/create')}>
            {t.common.retry}
          </Button>
        </Card>
      ) : (
        <>
          <div className="mt-6">
            <Orbit progress={progress} />
          </div>
          <Progress value={progress} className="mt-6" />
          <AnimatePresence mode="wait">
            <motion.p key={tip} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="mt-3 h-5 text-center text-[12px] text-muted">
              {tips[tip]}
            </motion.p>
          </AnimatePresence>
          <Card className="mt-6 p-2">
            <StageTimeline stage={generation?.stage ?? 'UPLOADING'} done={generation?.status === 'SUCCEEDED'} />
          </Card>
        </>
      )}
    </AppShell>
  );
}

export default function ProcessingPage() {
  return (
    <Suspense>
      <ProcessingInner />
    </Suspense>
  );
}
