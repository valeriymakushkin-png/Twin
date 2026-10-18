'use client';

import { Check } from 'lucide-react';
import { Paywall } from '@/components/paywall';
import { TopBar } from '@/components/ui';
import { useI18n } from '@/i18n/use';

export default function PlusPage() {
  const { t } = useI18n();
  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-16">
      <TopBar title={t('plus.pageTitle')} />
      <Paywall />
      <section className="mx-5 rounded-[24px] bg-white p-4 shadow-soft">
        <h2 className="text-[15px] font-bold">{t('plus.freeTitle')}</h2>
        <ul className="mt-2 grid gap-2">
          {(['plus.free1', 'plus.free2', 'plus.free3', 'plus.free4'] as const).map((k) => (
            <li key={k} className="flex items-center gap-2.5 text-[14px] text-ink-2">
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-mint-50 text-mint">
                <Check className="size-3" strokeWidth={3.5} />
              </span>
              {t(k)}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
