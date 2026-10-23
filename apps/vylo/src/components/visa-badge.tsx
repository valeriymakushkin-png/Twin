'use client';

import { CheckCircle2, ChevronRight, FileText, Plane, ShieldAlert, Sparkles } from 'lucide-react';
import Link from 'next/link';
import type { VisaRegime } from '@/data/types';
import { regimeTone } from '@/data/catalog';
import type { VisaResult } from '@/data/visa/rules';
import { useI18n } from '@/i18n/use';
import { flag } from '@/lib/countries';
import { cn } from '@/lib/utils';
import { usePassport, useVisa } from '@/store/visa';

const tones = {
  mint: 'bg-mint-50 text-mint ring-mint/20',
  sky: 'bg-sky-50 text-sky ring-sky/20',
  amber: 'bg-amber-50 text-amber ring-amber/20',
  rose: 'bg-rose-50 text-rose ring-rose/20',
};

const icons = { mint: CheckCircle2, sky: Plane, amber: FileText, rose: ShieldAlert };

/** "Visa-free (pilot scheme)" — the regime title used everywhere. */
export function useVisaTitle() {
  const { t, tk } = useI18n();
  return (v: { regime: VisaRegime; pilot?: boolean }) => `${tk(`visa.regime.${v.regime}`)}${v.pilot ? ` (${t('visa.pilot')})` : ''}`;
}

/** Stay and cost lines, shared by badges, lists and the visa page. */
export function useVisaFormat() {
  const { t, f } = useI18n();
  return {
    stay: (v: VisaResult) => (v.regime === 'banned' ? '—' : v.regime === 'eu' || v.regime === 'domestic' ? t('visa.stayUnlimited') : v.days ? t('visa.stay', { count: v.days }) : t('visa.stayVisa')),
    cost: (v: VisaResult) => (v.regime === 'banned' ? '—' : v.cost ? f.price(v.cost) : t('visa.costUnknown')),
  };
}

/** Compact visa status for the traveller's passport; links to the full visa page. */
export function VisaBadge({ code, className, link = true }: { code: string; className?: string; link?: boolean }) {
  const { t, country } = useI18n();
  const title = useVisaTitle();
  const fmt = useVisaFormat();
  const passport = usePassport();
  const visa = useVisa(code);
  if (!visa) return null;
  const tone = regimeTone[visa.regime];
  const Icon = icons[tone];
  const hack = !!visa.waiver || visa.offers.length > 0;
  const body = (
    <>
      <Icon className="size-5 shrink-0" />
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5 text-[14px] font-semibold text-ink">
          <span className="truncate">
            {title(visa)}
            {visa.days ? ` · ${t('visa.stay', { count: visa.days })}` : ''}
          </span>
          {hack && <Sparkles className="size-3.5 shrink-0 text-amber" aria-label={t('visa.hackBadge')} />}
        </span>
        <span className="block truncate text-[12px] text-muted">
          {country(code)} · {t('visa.withPassport', { flag: flag(passport) })} · {fmt.cost(visa)}
        </span>
      </span>
      {link && <ChevronRight className="size-4 shrink-0 text-faint" />}
    </>
  );
  const cls = cn('flex items-center gap-3 rounded-2xl px-3.5 py-3 ring-1', tones[tone], className);
  return link ? (
    <Link href={`/visa/${code.toLowerCase()}/`} className={cn('press', cls)}>
      {body}
    </Link>
  ) : (
    <div className={cls}>{body}</div>
  );
}
