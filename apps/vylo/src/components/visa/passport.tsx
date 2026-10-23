'use client';

import { Check, ChevronRight, Search, ShieldCheck } from 'lucide-react';
import { useMemo, useState } from 'react';
import { PASSPORTS } from '@/data/visa/rules';
import { HOLDINGS, type Holding } from '@/data/visa/types';
import { useI18n } from '@/i18n/use';
import { flag } from '@/lib/countries';
import { cn } from '@/lib/utils';
import { useUI } from '@/store/ui';
import { usePassport, useVisaPrefs } from '@/store/visa';

/** Passports most Vylo travellers carry, shown first in the picker. */
const POPULAR = ['RU', 'BY', 'KZ', 'UA', 'UZ', 'AM', 'GE', 'AZ', 'KG', 'US', 'GB', 'CA', 'AU', 'DE', 'FR', 'IT', 'ES', 'NL', 'PL', 'IL', 'TR', 'AE', 'IN', 'CN', 'BR', 'MX', 'JP', 'KR'];

const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

function PassportRow({ code, active, onPick }: { code: string; active: boolean; onPick: () => void }) {
  const { country } = useI18n();
  return (
    <button onClick={onPick} className="flex w-full items-center gap-3 px-5 py-2.5 text-left active:bg-surface-2/70" aria-pressed={active}>
      <span className="text-[26px] leading-none">{flag(code)}</span>
      <span className="min-w-0 flex-1 truncate text-[15px] font-medium">{country(code)}</span>
      {active && <Check className="size-5 text-brand" strokeWidth={2.6} />}
    </button>
  );
}

/** Searchable list of all 199 passports. `slot: 'second'` picks the optional second passport. */
export function PassportSheet({ slot }: { slot: 'main' | 'second' }) {
  const { t, country, locale } = useI18n();
  const close = useUI((s) => s.closeSheet);
  const main = usePassport();
  const second = useVisaPrefs((s) => s.second);
  const setPassport = useVisaPrefs((s) => s.setPassport);
  const setSecond = useVisaPrefs((s) => s.setSecond);
  const [q, setQ] = useState('');
  const current = slot === 'main' ? main : second;
  const pick = (code: string | null) => {
    if (slot === 'main' && code) setPassport(code);
    else setSecond(code);
    close();
  };

  const all = useMemo(() => [...PASSPORTS].sort((a, b) => country(a).localeCompare(country(b), locale)), [country, locale]);
  const s = fold(q.trim());
  const found = s ? all.filter((c) => fold(country(c)).includes(s) || c.toLowerCase() === s) : null;
  const options = (list: string[]) => list.filter((c) => slot === 'main' || c !== main);

  return (
    <div className="pb-6">
      <p className="px-5 text-[13px] leading-snug text-muted">{slot === 'main' ? t('visa.pickHint') : t('visa.pickSecondHint')}</p>
      <div className="sticky top-0 z-10 bg-white px-5 pb-2 pt-3">
        <label className="flex h-11 items-center gap-2.5 rounded-full bg-surface-2 px-4">
          <Search className="size-[18px] text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('visa.searchPassport')} className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-faint" />
        </label>
      </div>
      {slot === 'second' && !found && (
        <button onClick={() => pick(null)} className="flex w-full items-center gap-3 px-5 py-2.5 text-left">
          <span className="grid size-[26px] place-items-center rounded-full bg-surface-2 text-[13px] text-muted">—</span>
          <span className="flex-1 text-[15px] font-medium">{t('visa.secondNone')}</span>
          {!second && <Check className="size-5 text-brand" strokeWidth={2.6} />}
        </button>
      )}
      {found ? (
        options(found).map((c) => <PassportRow key={c} code={c} active={c === current} onPick={() => pick(c)} />)
      ) : (
        <>
          <p className="px-5 pb-1 pt-3 text-[12px] font-semibold uppercase tracking-[0.06em] text-faint">{t('visa.popular')}</p>
          {options(POPULAR).map((c) => (
            <PassportRow key={c} code={c} active={c === current} onPick={() => pick(c)} />
          ))}
          <p className="px-5 pb-1 pt-4 text-[12px] font-semibold uppercase tracking-[0.06em] text-faint">{t('visa.allPassports')}</p>
          {options(all).map((c) => (
            <PassportRow key={c} code={c} active={c === current} onPick={() => pick(c)} />
          ))}
        </>
      )}
    </div>
  );
}

const VISAS = HOLDINGS.filter((h) => h.startsWith('visa'));
const PERMITS = HOLDINGS.filter((h) => h.startsWith('res'));

/** Visa and residence-permit holder flags — the switches that unlock waivers. */
export function HoldingsSheet() {
  const { t, tk } = useI18n();
  const holdings = useVisaPrefs((s) => s.holdings);
  const toggle = useVisaPrefs((s) => s.toggleHolding);
  const group = (title: string, list: readonly Holding[]) => (
    <section className="mt-4">
      <p className="px-5 pb-1.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-faint">{title}</p>
      <div className="mx-5 overflow-hidden rounded-[20px] bg-surface-2/60">
        {list.map((h, i) => {
          const on = holdings.includes(h);
          return (
            <button key={h} onClick={() => toggle(h)} role="switch" aria-checked={on} className={cn('flex w-full items-center gap-3 px-4 py-3 text-left', i > 0 && 'border-t border-line-soft')}>
              <span className="flex-1 text-[15px] font-medium">{tk(`visa.holding.${h}`)}</span>
              <span className={cn('relative h-[28px] w-[46px] shrink-0 rounded-full transition-colors', on ? 'bg-mint' : 'bg-line')}>
                <span className={cn('absolute top-[2px] size-6 rounded-full bg-white shadow transition-all', on ? 'left-[20px]' : 'left-[2px]')} />
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
  return (
    <div className="pb-6">
      <p className="flex gap-2 px-5 text-[13px] leading-snug text-muted">
        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-mint" />
        {t('visa.holdingsHint')}
      </p>
      {group(t('visa.holdingsVisas'), VISAS)}
      {group(t('visa.holdingsResidence'), PERMITS)}
    </div>
  );
}

/** Settings-style rows: passport, second passport, held visas. */
export function PassportSettings({ className }: { className?: string }) {
  const { t, country } = useI18n();
  const openSheet = useUI((s) => s.openSheet);
  const passport = usePassport();
  const second = useVisaPrefs((s) => s.second);
  const holdings = useVisaPrefs((s) => s.holdings);
  const row = (label: string, value: string, onClick: () => void, first = false) => (
    <button onClick={onClick} className={cn('flex w-full items-center gap-3 px-4 py-3.5 text-left', !first && 'border-t border-line-soft')}>
      <span className="flex-1 text-[15px] font-medium">{label}</span>
      <span className="max-w-[55%] truncate text-[14px] text-muted">{value}</span>
      <ChevronRight className="size-4 shrink-0 text-faint" />
    </button>
  );
  return (
    <div className={cn('overflow-hidden rounded-[22px] bg-white shadow-soft', className)}>
      {row(t('visa.pickTitle'), `${flag(passport)} ${country(passport)}`, () => openSheet({ type: 'passport', slot: 'main' }), true)}
      {row(t('visa.pickSecondTitle'), second ? `${flag(second)} ${country(second)}` : t('visa.secondNone'), () => openSheet({ type: 'passport', slot: 'second' }))}
      {row(t('visa.holdingsTitle'), holdings.length ? t('visa.holdingsCount', { count: holdings.length }) : t('visa.holdingsNone'), () => openSheet({ type: 'holdings' }))}
    </div>
  );
}
