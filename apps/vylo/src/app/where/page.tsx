'use client';

import { Check, Clock, Wallet } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Photo } from '@/components/photo';
import { Chip, Empty, Segmented, TopBar } from '@/components/ui';
import { useVisaFormat, useVisaTitle } from '@/components/visa-badge';
import { destinationHref } from '@/data/catalog';
import type { TagKey } from '@/data/types';
import { RANK } from '@/data/visa/rules';
import { useI18n } from '@/i18n/use';
import { flag } from '@/lib/countries';
import { suggest, type VisaLevel } from '@/lib/where';
import { cn } from '@/lib/utils';
import { useUI } from '@/store/ui';
import { usePassport, useVisaLookup } from '@/store/visa';

const TAGS: TagKey[] = ['beaches', 'islands', 'diving', 'city', 'culture', 'history', 'food', 'nightlife', 'nature', 'mountains', 'hiking', 'wildlife', 'adventure', 'romance', 'ski'];
const BUDGETS = [0, 40, 70, 120, 200];
const PAGE = 24;

export default function WherePage() {
  const { t, tk, f, dest, country } = useI18n();
  const passport = usePassport();
  const visaOf = useVisaLookup();
  const title = useVisaTitle();
  const fmt = useVisaFormat();
  const openSheet = useUI((s) => s.openSheet);
  const [month, setMonth] = useState(() => new Date().getMonth() + 1);
  const [budget, setBudget] = useState(0);
  const [visa, setVisa] = useState<VisaLevel>('easy');
  const [tags, setTags] = useState<TagKey[]>([]);
  const [shown, setShown] = useState(PAGE);

  const hits = useMemo(() => suggest({ month, budget, tags, visa }, visaOf), [month, budget, tags, visa, visaOf]);
  const toggle = (tag: TagKey) => {
    setShown(PAGE);
    setTags((l) => (l.includes(tag) ? l.filter((x) => x !== tag) : [...l, tag]));
  };

  return (
    <div className="pb-28">
      <TopBar title={t('where.title')} />
      <div className="px-5">
        <p className="text-[14px] leading-snug text-muted">{t('where.intro')}</p>
        <button onClick={() => openSheet({ type: 'passport', slot: 'main' })} className="press mt-3 inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 text-[14px] font-semibold shadow-soft ring-1 ring-line-soft">
          <span className="text-[18px] leading-none">{flag(passport)}</span>
          {t('where.passport', { country: country(passport) })}
        </button>

        <p className="mt-5 text-[13px] font-semibold text-muted">{t('where.month')}</p>
        <div className="no-scrollbar -mx-5 mt-2 flex gap-2 overflow-x-auto px-5 pb-1">
          <Chip active={month === 0} onClick={() => (setMonth(0), setShown(PAGE))}>
            {t('where.anyMonth')}
          </Chip>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
            <Chip key={m} active={month === m} onClick={() => (setMonth(m), setShown(PAGE))}>
              {f.month(m)}
            </Chip>
          ))}
        </div>

        <p className="mt-4 text-[13px] font-semibold text-muted">{t('where.budget')}</p>
        <div className="no-scrollbar -mx-5 mt-2 flex gap-2 overflow-x-auto px-5 pb-1">
          {BUDGETS.map((b) => (
            <Chip key={b} active={budget === b} onClick={() => (setBudget(b), setShown(PAGE))}>
              {b ? t('where.upTo', { amount: f.money(b, 'USD') }) : t('where.anyBudget')}
            </Chip>
          ))}
        </div>

        <p className="mt-4 text-[13px] font-semibold text-muted">{t('where.visa')}</p>
        <Segmented
          className="mt-2"
          layoutId="where-visa"
          value={visa}
          onChange={(v) => (setVisa(v), setShown(PAGE))}
          options={[
            { value: 'free', label: t('where.visaFree') },
            { value: 'easy', label: t('where.visaEasy') },
            { value: 'any', label: t('where.visaAny') },
          ]}
        />

        <p className="mt-4 text-[13px] font-semibold text-muted">{t('where.interests')}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <Chip key={tag} active={tags.includes(tag)} onClick={() => toggle(tag)}>
              {tk(`tags.${tag}`)}
            </Chip>
          ))}
        </div>

        <p className="mt-6 text-[15px] font-bold tracking-[-0.01em]">{t('where.found', { count: hits.length })}</p>
        {hits.length === 0 && <Empty icon={<Wallet className="size-6" />} title={t('where.emptyTitle')} text={t('where.emptyText')} />}

        <div className="mt-3 grid gap-3">
          {hits.slice(0, shown).map(({ d, visa: v, season, stretch, matched }) => (
            <Link key={d.id} href={destinationHref(d.id)} className="press flex gap-3 rounded-[22px] bg-white p-2.5 shadow-soft ring-1 ring-line-soft">
              <Photo id={d.image} alt={dest(d.id).name} width={360} className="size-[92px] shrink-0 rounded-[16px]" tint={d.theme.accent} />
              <div className="min-w-0 flex-1 py-0.5">
                <p className="truncate text-[16px] font-bold tracking-[-0.02em]">{dest(d.id).name}</p>
                <p className="truncate text-[12px] text-muted">
                  {flag(d.countryCode)} {country(d.countryCode)}
                </p>
                <p className={cn('mt-1.5 flex items-center gap-1 text-[12.5px] font-semibold', RANK[v.regime] <= RANK.free ? 'text-mint' : RANK[v.regime] <= RANK.evisa ? 'text-sky' : 'text-rose')}>
                  <Check className="size-3.5 shrink-0" />
                  <span className="truncate">
                    {title(v)} · {fmt.stay(v)}
                  </span>
                </p>
                <p className="mt-0.5 flex flex-wrap items-center gap-x-3 text-[12px] text-ink-2">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3.5 text-muted" />
                    {season === 'any' ? f.months(d.months) : season === 'best' ? t('where.bestNow') : t('where.shoulder')}
                  </span>
                  <span className={cn('inline-flex items-center gap-1', stretch && 'text-amber')}>
                    <Wallet className="size-3.5 text-muted" />~{f.money(d.budgetPerDay, 'USD')}
                    {t('where.perDay')}
                  </span>
                </p>
                {matched.length > 0 && <p className="mt-1 truncate text-[11.5px] text-brand-600">{matched.map((m) => tk(`tags.${m}`)).join(' · ')}</p>}
              </div>
            </Link>
          ))}
        </div>
        {hits.length > shown && (
          <button onClick={() => setShown((n) => n + PAGE)} className="press mt-4 h-11 w-full rounded-full bg-white text-[14px] font-semibold text-brand-600 shadow-soft ring-1 ring-line-soft">
            {t('where.more')}
          </button>
        )}
        <p className="mt-5 text-[11.5px] leading-snug text-faint">{t('where.disclaimer')}</p>
      </div>
    </div>
  );
}
