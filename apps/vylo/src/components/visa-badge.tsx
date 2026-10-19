'use client';

import { CheckCircle2, ChevronRight, FileText, Plane, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import type { VisaInfo } from '@/data/types';
import { regimeTone, visaByCode } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { cn } from '@/lib/utils';

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
  return (v: VisaInfo) => `${tk(`visa.regime.${v.regime}`)}${v.pilot ? ` (${t('visa.pilot')})` : ''}`;
}

/** Compact visa status for Russian passport holders; links to the full visa page. */
export function VisaBadge({ code, className, link = true }: { code: string; className?: string; link?: boolean }) {
  const { t, f, country } = useI18n();
  const title = useVisaTitle();
  const visa = visaByCode(code);
  if (!visa) return null;
  const tone = regimeTone[visa.regime];
  const Icon = icons[tone];
  const body = (
    <>
      <Icon className="size-5 shrink-0" />
      <span className="min-w-0 flex-1">
        <span className="block text-[14px] font-semibold text-ink">
          {title(visa)}
          {visa.days ? ` · ${t('visa.stay', { count: visa.days })}` : ''}
        </span>
        <span className="block truncate text-[12px] text-muted">
          {country(code)} · {t('visa.forCitizens')} · {f.price(visa.cost)}
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
