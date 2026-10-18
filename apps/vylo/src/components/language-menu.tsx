'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Check, Globe } from 'lucide-react';
import { useState } from 'react';
import { LOCALE_META, LOCALES } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { cn } from '@/lib/utils';
import { useApp } from '@/store/app';

/** Compact language switcher (pill + dropdown). */
export function LanguageMenu({ tone = 'light', className }: { tone?: 'light' | 'glass'; className?: string }) {
  const [open, setOpen] = useState(false);
  const locale = useApp((s) => s.locale);
  const setLocale = useApp((s) => s.setLocale);
  const { t } = useI18n();
  return (
    <div className={cn('relative', className)}>
      <button
        aria-label={t('common.language')}
        onClick={() => setOpen(!open)}
        className={cn('press flex h-9 items-center gap-1.5 rounded-full px-3 text-[13px] font-semibold', tone === 'glass' ? 'glass shadow-soft' : 'bg-white shadow-soft ring-1 ring-line-soft')}
      >
        <Globe className="size-4" />
        {locale.toUpperCase()}
      </button>
      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              className="absolute right-0 top-11 z-50 w-48 overflow-hidden rounded-2xl bg-white p-1 shadow-float ring-1 ring-black/5"
            >
              {LOCALES.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLocale(l);
                    setOpen(false);
                  }}
                  className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[14px] hover:bg-surface-2"
                >
                  <span className="text-[18px]">{LOCALE_META[l].flag}</span>
                  <span className="flex-1 font-medium">{LOCALE_META[l].native}</span>
                  {l === locale && <Check className="size-4 text-brand" />}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
