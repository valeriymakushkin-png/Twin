'use client';

import { AlertTriangle, ArrowDown, ArrowUp, Check, FileText, Minus, Plane, Plus, Route, Trash2, TrainFront } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';
import { Button, TopBar } from '@/components/ui';
import { useVisaFormat, useVisaTitle } from '@/components/visa-badge';
import { countries } from '@/data/catalog';
import { guideFacts, RANK, SCHENGEN, visaFor, type VisaResult } from '@/data/visa/rules';
import { LOCALE_META } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { schedule, validUntil } from '@/lib/chain';
import { flag } from '@/lib/countries';
import { addDays, cn, todayKey, uid } from '@/lib/utils';
import { usePassport, useVisaPrefs } from '@/store/visa';

type Issue = { tone: 'bad' | 'warn' | 'ok'; text: string };

export default function ChainPage() {
  const { t, tk, f, locale, country } = useI18n();
  const passport = usePassport();
  const holdings = useVisaPrefs((s) => s.holdings);
  const { chain, setChain } = useVisaPrefs();
  const title = useVisaTitle();
  const fmt = useVisaFormat();
  const bcp47 = LOCALE_META[locale].bcp47;
  const start = chain.start ?? addDays(todayKey(), 30);
  const legs = chain.legs;
  const date = (iso: string) => new Date(`${iso}T00:00:00`).toLocaleDateString(bcp47, { day: 'numeric', month: 'short' });
  const longDate = (iso: string) => new Date(`${iso}T00:00:00`).toLocaleDateString(bcp47, { day: 'numeric', month: 'long', year: 'numeric' });

  const options = useMemo(() => countries.filter((c) => c.code !== passport).map((c) => ({ code: c.code, name: country(c.code) })).sort((a, b) => a.name.localeCompare(b.name, locale)), [country, locale, passport]);
  const dates = schedule(start, legs);

  const results = legs.map((leg, i) => {
    const visa = visaFor(passport, leg.country, holdings);
    const g = guideFacts(leg.country);
    const { arrival, departure } = dates[i]!;
    const issues: Issue[] = [];
    if (visa) {
      if (visa.regime === 'banned') issues.push({ tone: 'bad', text: t('chain.banned') });
      else if (visa.days && leg.nights + 1 > visa.days) issues.push({ tone: 'bad', text: t('chain.tooLong', { days: visa.days, nights: leg.nights }) });
      if (visa.regime === 'evisa' || visa.regime === 'eta' || visa.regime === 'required' || visa.regime === 'schengen') issues.push({ tone: 'warn', text: t('chain.applyBefore', { visa: tk(`visa.regime.${visa.regime}`) }) });
      else if (visa.regime === 'voa') issues.push({ tone: 'warn', text: t('chain.onArrival') });
      if (chain.passportExpires) {
        const need = validUntil(visa.validity, arrival, departure);
        if (need && chain.passportExpires < need) issues.push({ tone: 'bad', text: t('chain.passportShort', { date: longDate(need) }) });
      }
    }
    return { leg, visa, g, arrival, departure, issues };
  });

  // Rolling-window rule (Schengen 90 in 180 and similar), counted over the legs of the same zone.
  const zoneDays = new Map<string, { days: number; limit: number; window: number }>();
  for (const r of results) {
    const zone = SCHENGEN.has(r.leg.country) ? 'schengen' : r.g?.rule ? r.leg.country : undefined;
    if (!zone || !r.visa || RANK[r.visa.regime] === 0) continue;
    const base = r.g?.rule ?? { days: 90, window: 180 };
    const cur = zoneDays.get(zone) ?? { days: 0, limit: base.days, window: base.window };
    cur.days += r.leg.nights + 1;
    zoneDays.set(zone, cur);
  }
  const zoneIssues = [...zoneDays].filter(([, z]) => z.days > z.limit);

  const docs = new Set<string>();
  for (const r of results) for (const d of r.visa?.docs ?? []) if (d !== 'passport') docs.add(d);

  const problems = results.reduce((n, r) => n + r.issues.filter((i) => i.tone === 'bad').length, 0) + zoneIssues.length;
  const todo = results.reduce((n, r) => n + (r.issues.some((i) => i.tone === 'warn') ? 1 : 0), 0);

  const setLegs = (next: typeof legs) => setChain({ legs: next });
  const move = (i: number, by: -1 | 1) => {
    const j = i + by;
    if (j < 0 || j >= legs.length) return;
    const next = [...legs];
    [next[i], next[j]] = [next[j]!, next[i]!];
    setLegs(next);
  };
  const crossing = (a: string, b: string) => {
    const names = [...(guideFacts(a)?.borders?.filter((x) => x.to === b) ?? []), ...(guideFacts(b)?.borders?.filter((x) => x.to === a) ?? [])].map((x) => x.name);
    return [...new Set(names)];
  };

  return (
    <div className="pb-28">
      <TopBar title={t('chain.title')} />
      <div className="px-5">
        <p className="text-[14px] leading-snug text-muted">{t('chain.intro')}</p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="chain-start" className="text-[12.5px] font-semibold text-muted">
              {t('chain.start')}
            </label>
            <input id="chain-start" type="date" value={start} onChange={(e) => e.target.value && setChain({ start: e.target.value })} className="mt-1.5 h-11 w-full rounded-xl bg-white px-3 text-[14px] font-semibold shadow-soft outline-none ring-1 ring-line-soft focus:ring-2 focus:ring-brand" />
          </div>
          <div>
            <label htmlFor="chain-exp" className="text-[12.5px] font-semibold text-muted">
              {t('chain.expires')}
            </label>
            <input id="chain-exp" type="date" value={chain.passportExpires ?? ''} onChange={(e) => setChain({ passportExpires: e.target.value || null })} className="mt-1.5 h-11 w-full rounded-xl bg-white px-3 text-[14px] font-semibold shadow-soft outline-none ring-1 ring-line-soft focus:ring-2 focus:ring-brand" />
          </div>
        </div>

        {legs.length > 0 && (
          <div className={cn('mt-4 flex items-start gap-3 rounded-[20px] p-3.5 text-[13.5px] leading-snug', problems ? 'bg-rose/10 text-rose' : todo ? 'bg-amber-50 text-ink-2' : 'bg-mint/10 text-mint')}>
            {problems ? <AlertTriangle className="mt-0.5 size-5 shrink-0" /> : <Check className="mt-0.5 size-5 shrink-0" />}
            <span className="font-semibold">{problems ? t('chain.problems', { count: problems }) : todo ? t('chain.todo', { count: todo }) : t('chain.allGood')}</span>
          </div>
        )}

        <div className="mt-4 grid gap-3">
          {results.map((r, i) => {
            const prev = results[i - 1];
            const land = prev ? crossing(prev.leg.country, r.leg.country) : [];
            return (
              <div key={legs[i]!.id}>
                {prev && (
                  <p className="mb-2 flex items-center gap-2 pl-2 text-[12.5px] text-muted">
                    {land.length ? <TrainFront className="size-4 text-mint" /> : <Plane className="size-4" />}
                    {land.length ? t('chain.byLand', { names: land.slice(0, 2).join(', ') }) : t('chain.byAir')}
                  </p>
                )}
                <div className="rounded-[24px] bg-white p-4 shadow-soft ring-1 ring-line-soft">
                  <div className="flex items-center gap-2">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand text-[12px] font-bold text-white">{i + 1}</span>
                    <select
                      aria-label={t('chain.country')}
                      value={r.leg.country}
                      onChange={(e) => setLegs(legs.map((l, k) => (k === i ? { ...l, country: e.target.value } : l)))}
                      className="h-10 min-w-0 flex-1 rounded-xl bg-surface-2 px-2.5 text-[15px] font-semibold outline-none focus:ring-2 focus:ring-brand/40"
                    >
                      {options.map((o) => (
                        <option key={o.code} value={o.code}>
                          {flag(o.code)} {o.name}
                        </option>
                      ))}
                    </select>
                    <button aria-label={t('chain.up')} disabled={i === 0} onClick={() => move(i, -1)} className="press grid size-8 place-items-center rounded-full text-muted disabled:opacity-30">
                      <ArrowUp className="size-4" />
                    </button>
                    <button aria-label={t('chain.down')} disabled={i === legs.length - 1} onClick={() => move(i, 1)} className="press grid size-8 place-items-center rounded-full text-muted disabled:opacity-30">
                      <ArrowDown className="size-4" />
                    </button>
                    <button aria-label={t('stay.remove')} onClick={() => setLegs(legs.filter((_, k) => k !== i))} className="press grid size-8 place-items-center rounded-full text-muted">
                      <Trash2 className="size-4" />
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="flex h-10 items-center gap-1 rounded-xl bg-surface-2 px-1">
                      <button aria-label="−" onClick={() => setLegs(legs.map((l, k) => (k === i ? { ...l, nights: Math.max(1, l.nights - 1) } : l)))} className="press grid size-8 place-items-center rounded-lg">
                        <Minus className="size-4" />
                      </button>
                      <span className="min-w-[88px] text-center text-[14px] font-bold tabular-nums">{t('chain.nights', { count: r.leg.nights })}</span>
                      <button aria-label="+" onClick={() => setLegs(legs.map((l, k) => (k === i ? { ...l, nights: Math.min(365, l.nights + 1) } : l)))} className="press grid size-8 place-items-center rounded-lg">
                        <Plus className="size-4" />
                      </button>
                    </div>
                    <p className="text-right text-[13px] font-semibold text-ink-2">
                      {date(r.arrival)} → {date(r.departure)}
                    </p>
                  </div>

                  {r.visa && (
                    <Link href={`/visa/${r.leg.country}/`} className="press mt-3 flex items-center justify-between gap-3 rounded-2xl bg-surface-2/70 px-3.5 py-2.5">
                      <span className="min-w-0">
                        <span className="block truncate text-[14px] font-semibold">{title(r.visa)}</span>
                        <span className="block truncate text-[12px] text-muted">
                          {fmt.stay(r.visa)} · {fmt.cost(r.visa)}
                        </span>
                      </span>
                      <FileText className="size-4 shrink-0 text-faint" />
                    </Link>
                  )}
                  {r.issues.length > 0 && (
                    <ul className="mt-2.5 grid gap-1.5">
                      {r.issues.map((x, k) => (
                        <li key={k} className={cn('flex items-start gap-2 text-[13px] leading-snug', x.tone === 'bad' ? 'text-rose' : 'text-ink-2')}>
                          {x.tone === 'bad' ? <AlertTriangle className="mt-0.5 size-4 shrink-0" /> : <Check className="mt-0.5 size-4 shrink-0 text-amber" />}
                          {x.text}
                        </li>
                      ))}
                    </ul>
                  )}
                  {r.g?.forms && r.g.forms.length > 0 && (
                    <p className="mt-2.5 text-[12.5px] text-muted">
                      {t('chain.forms')}: <b className="text-ink-2">{r.g.forms.map((x) => x.name).join(', ')}</b>
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {zoneIssues.map(([zone, z]) => (
          <div key={zone} className="mt-3 flex items-start gap-3 rounded-[20px] bg-rose/10 p-3.5 text-[13.5px] leading-snug text-rose">
            <AlertTriangle className="mt-0.5 size-5 shrink-0" />
            <span>
              {t('chain.windowExceeded', { zone: zone === 'schengen' ? t('visa.calc.schengen') : country(zone), days: z.days, limit: z.limit, window: z.window })}{' '}
              <Link href={`/visa/calc/?zone=${zone}`} className="font-bold underline">
                {t('chain.calc')}
              </Link>
            </span>
          </div>
        ))}

        <Button variant="secondary" className="mt-4 w-full" onClick={() => setLegs([...legs, { id: uid(), country: options.find((o) => !legs.some((l) => l.country === o.code))?.code ?? 'TH', nights: 7 }])}>
          <Plus className="size-4" /> {t('chain.add')}
        </Button>

        {docs.size > 0 && (
          <div className="mt-5 rounded-[22px] bg-white p-4 shadow-soft ring-1 ring-line-soft">
            <p className="flex items-center gap-2 text-[15px] font-bold">
              <Route className="size-4 text-brand" /> {t('chain.docs')}
            </p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink-2">{[...docs].map((d) => tk(`visa.doc.${d}`)).join(' · ')}</p>
          </div>
        )}
        <p className="mt-5 text-[11.5px] leading-snug text-faint">{t('chain.disclaimer')}</p>
      </div>
    </div>
  );
}
