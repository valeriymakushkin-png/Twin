'use client';

import { Check, ChevronRight, FileText, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { PlusBadge, TopBar } from '@/components/ui';
import { PassportSettings } from '@/components/visa/passport';
import { LOCALE_META, LOCALES } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { cn } from '@/lib/utils';
import { useApp } from '@/store/app';

export default function SettingsPage() {
  const { t } = useI18n();
  const locale = useApp((s) => s.locale);
  const setLocale = useApp((s) => s.setLocale);
  const plus = useApp((s) => s.plus.active);

  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-16">
      <TopBar title={t('settings.title')} />
      <div className="grid gap-6 px-5">
        <section>
          <h2 className="mb-2 text-[13px] font-semibold text-muted">{t('settings.language')}</h2>
          <div className="overflow-hidden rounded-[22px] bg-white shadow-soft">
            {LOCALES.map((l, i) => (
              <button key={l} onClick={() => setLocale(l)} className={cn('flex w-full items-center gap-3 px-4 py-3.5 text-left', i > 0 && 'border-t border-line-soft')} aria-pressed={l === locale}>
                <span className="text-[22px] leading-none">{LOCALE_META[l].flag}</span>
                <span className="flex-1 text-[15px] font-medium" lang={l}>
                  {LOCALE_META[l].native}
                </span>
                {l === locale && <Check className="size-5 text-brand" strokeWidth={2.6} />}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-[13px] font-semibold text-muted">{t('settings.passport')}</h2>
          <PassportSettings />
        </section>

        <section>
          <h2 className="mb-2 text-[13px] font-semibold text-muted">{t('settings.plus')}</h2>
          <Link href="/plus/" className="press flex items-center gap-3 rounded-[22px] bg-white px-4 py-3.5 shadow-soft">
            <Sparkles className="size-5 text-amber" />
            <span className="flex-1 text-[15px] font-medium">{plus ? t('plus.active') : t('plus.name')}</span>
            {!plus && <PlusBadge />}
            <ChevronRight className="size-4 text-faint" />
          </Link>
        </section>

        <section>
          <h2 className="mb-2 text-[13px] font-semibold text-muted">{t('settings.about')}</h2>
          <Link href="/licenses/" className="press flex items-center gap-3 rounded-[22px] bg-white px-4 py-3.5 shadow-soft">
            <FileText className="size-5 text-ink-2" />
            <span className="flex-1 text-[15px] font-medium">{t('licenses.title')}</span>
            <ChevronRight className="size-4 text-faint" />
          </Link>
          <p className="mt-4 text-center text-[12px] text-faint">Vylo · 2.0</p>
        </section>
      </div>
    </div>
  );
}
