'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, CalendarClock, Check, CircleDollarSign, FileCheck2, Info, Plane } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Photo } from '@/components/photo';
import { Button, TopBar } from '@/components/ui';
import { useVisaTitle } from '@/components/visa-badge';
import { destinationHref, destinations, regimeTone, visaByCode } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { flag } from '@/lib/countries';
import { cn } from '@/lib/utils';
import { useApp } from '@/store/app';
import { useUI } from '@/store/ui';

const gradients = {
  mint: 'from-[#10b981] to-[#0d9488]',
  sky: 'from-[#0ea5e9] to-[#6366f1]',
  amber: 'from-[#f59e0b] to-[#f97316]',
  rose: 'from-[#f43f5e] to-[#e11d48]',
};

export function VisaScreen({ code }: { code: string }) {
  const visa = visaByCode(code)!;
  const markVisaChecked = useApp((s) => s.markVisaChecked);
  const visited = useApp((s) => s.visited.includes(code));
  const toggleVisited = useApp((s) => s.toggleVisited);
  const openSheet = useUI((s) => s.openSheet);
  const { t, tk, f, country, dest } = useI18n();
  const title = useVisaTitle();
  const [checked, setChecked] = useState<string[]>([]);
  const dests = destinations.filter((d) => d.countryCode === code);
  const docs = visa.regime === 'domestic' ? visa.docs : (['passport', ...visa.docs.filter((x) => x !== 'passport')] as const);

  useEffect(() => {
    markVisaChecked(code);
  }, [code, markVisaChecked]);

  useEffect(() => {
    document.title = `${t('visa.infoTitle')}: ${country(code)} — Vylo`;
  }, [code, country, t]);

  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-16">
      <TopBar title={t('visa.infoTitle')} />
      <div className="px-5">
        <div className="flex items-center gap-4 pt-2">
          <span className="text-[56px] leading-none">{flag(code)}</span>
          <div className="min-w-0">
            <h1 className="text-[28px] font-bold leading-tight tracking-[-0.035em]">{country(code)}</h1>
            <p className="text-[14px] text-muted">{t('visa.forCitizens')}</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn('relative mt-5 overflow-hidden rounded-[28px] bg-gradient-to-br p-5 text-white shadow-float', gradients[regimeTone[visa.regime]])}
        >
          <div className="absolute -right-8 -top-8 size-36 rounded-full bg-white/10" />
          <div className="absolute -bottom-12 right-10 size-28 rounded-full bg-white/10" />
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-white/80">{tk(`visa.regimeShort.${visa.regime}`)}</p>
          <p className="mt-1 text-[26px] font-bold leading-tight tracking-[-0.03em]">{title(visa)}</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/15 p-3 backdrop-blur">
              <CalendarClock className="size-5" />
              <p className="mt-1.5 text-[11px] text-white/75">{t('visa.stayLabel')}</p>
              <p className="text-[15px] font-bold">{visa.days ? t('visa.stay', { count: visa.days }) : t('visa.stayVisa')}</p>
            </div>
            <div className="rounded-2xl bg-white/15 p-3 backdrop-blur">
              <CircleDollarSign className="size-5" />
              <p className="mt-1.5 text-[11px] text-white/75">{t('visa.costLabel')}</p>
              <p className="text-[15px] font-bold leading-snug">
                {f.price(visa.cost)}
                {visa.plusFee && <span className="block text-[11px] font-medium text-white/80">{t('visa.plusFee')}</span>}
              </p>
            </div>
          </div>
        </motion.div>

        <section className="mt-6 rounded-[24px] bg-white p-4 shadow-soft">
          <h2 className="flex items-center gap-2 text-[16px] font-bold">
            <Plane className="size-5 text-brand" /> {t('visa.how')}
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{tk(`visa.howText.${visa.regime}`)}</p>
          <div className="mt-3 flex items-start gap-2 rounded-2xl bg-surface-2/70 p-3 text-[13px] text-ink-2">
            <Info className="mt-0.5 size-4 shrink-0 text-muted" />
            {t('visa.passportLabel')}: {tk(`visa.validity.${visa.validity}`)}
          </div>
        </section>

        <section className="mt-4 rounded-[24px] bg-white p-4 shadow-soft">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-[16px] font-bold">
              <FileCheck2 className="size-5 text-mint" /> {t('visa.docs')}
            </h2>
            <span className="text-[12px] font-semibold text-muted">
              {checked.length}/{docs.length}
            </span>
          </div>
          <div className="mt-3 grid gap-1">
            {docs.map((doc) => {
              const on = checked.includes(doc);
              return (
                <button key={doc} onClick={() => setChecked(on ? checked.filter((x) => x !== doc) : [...checked, doc])} className="flex items-center gap-3 rounded-xl py-2 text-left">
                  <span className={cn('grid size-6 shrink-0 place-items-center rounded-lg border-2 transition-all', on ? 'border-mint bg-mint text-white' : 'border-line')}>
                    {on && <Check className="size-3.5" strokeWidth={3.5} />}
                  </span>
                  <span className={cn('text-[14px] transition-colors', on ? 'text-faint line-through' : 'text-ink')}>{tk(`visa.doc.${doc}`)}</span>
                </button>
              );
            })}
          </div>
        </section>

        {visa.notes.length > 0 && (
          <section className="mt-4 grid gap-2">
            {visa.notes.map((n) => (
              <div key={n} className="flex gap-3 rounded-[20px] bg-amber-50 p-4 text-[13px] leading-relaxed text-ink-2">
                <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber" />
                {tk(`visa.note.${n}`)}
              </div>
            ))}
          </section>
        )}

        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <Button variant="primary" onClick={() => openSheet({ type: 'trip' })}>
            {t('visa.plan')}
          </Button>
          <Button variant={visited ? 'soft' : 'secondary'} onClick={() => toggleVisited(code)}>
            {visited ? `✓ ${t('actions.beenDone')}` : t('visa.beenThere')}
          </Button>
        </div>

        {dests.length > 0 && (
          <section className="mt-7">
            <h2 className="text-[17px] font-bold">{t('visa.whereToGo')}</h2>
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              {dests.map((d) => (
                <Link key={d.id} href={destinationHref(d.id)} className="press relative h-32 overflow-hidden rounded-[22px]">
                  <Photo id={d.image} alt={dest(d.id).name} width={400} className="absolute inset-0" tint={d.theme.accent} />
                  <div className="photo-scrim absolute inset-0" />
                  <p className="absolute bottom-3 left-3 right-3 truncate text-[16px] font-bold text-white">{dest(d.id).name}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <p className="mt-8 text-center text-[12px] leading-relaxed text-faint">{t('visa.disclaimer')}</p>
      </div>
    </div>
  );
}
