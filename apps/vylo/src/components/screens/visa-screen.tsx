'use client';

import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowRightLeft,
  CalendarClock,
  CalendarRange,
  Check,
  ChevronDown,
  CircleDollarSign,
  ExternalLink,
  FileCheck2,
  Hourglass,
  Info,
  Laptop,
  Lightbulb,
  MapPin,
  Plane,
  Repeat,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  UserRound,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, type ReactNode } from 'react';
import { Photo } from '@/components/photo';
import { Button, TopBar } from '@/components/ui';
import { useVisaFormat, useVisaTitle } from '@/components/visa-badge';
import { useVisaText } from '@/content/visa';
import { destinationHref, destinations, regimeTone } from '@/data/catalog';
import { appliesTo, guideFacts, MATRIX_DATE, SCHENGEN, visaFor } from '@/data/visa/rules';
import { LOCALE_META } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { flag } from '@/lib/countries';
import { cn } from '@/lib/utils';
import { useApp } from '@/store/app';
import { useUI } from '@/store/ui';
import { usePassport, useSecondPassportEdge, useVisa, useVisaPrefs } from '@/store/visa';

const gradients = {
  mint: 'from-[#10b981] to-[#0d9488]',
  sky: 'from-[#0ea5e9] to-[#6366f1]',
  amber: 'from-[#f59e0b] to-[#f97316]',
  rose: 'from-[#f43f5e] to-[#e11d48]',
};

const runTone = { yes: 'bg-mint-50 text-mint', limited: 'bg-amber-50 text-amber', no: 'bg-rose-50 text-rose' };

function Section({ icon, title, right, children, className }: { icon: ReactNode; title: ReactNode; right?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={cn('mt-4 rounded-[24px] bg-white p-4 shadow-soft', className)}>
      <div className="flex items-center justify-between gap-3">
        <h2 className="flex min-w-0 items-center gap-2 text-[16px] font-bold">
          {icon} <span className="truncate">{title}</span>
        </h2>
        {right}
      </div>
      <div className="mt-2">{children}</div>
    </section>
  );
}

const Prose = ({ children }: { children: ReactNode }) => <p className="text-[14px] leading-relaxed text-ink-2">{children}</p>;

/** "2026-10" → "October 2026" in the UI language. */
const monthLabel = (ym: string, bcp47: string) => new Date(`${ym.slice(0, 7)}-15T12:00:00Z`).toLocaleDateString(bcp47, { month: 'long', year: 'numeric' });

export function VisaScreen({ code }: { code: string }) {
  const visa = useVisa(code);
  const passport = usePassport();
  const holdings = useVisaPrefs((s) => s.holdings);
  const second = useSecondPassportEdge(code);
  const markVisaChecked = useApp((s) => s.markVisaChecked);
  const visited = useApp((s) => s.visited.includes(code));
  const toggleVisited = useApp((s) => s.toggleVisited);
  const openSheet = useUI((s) => s.openSheet);
  const { t, tk, f, country, dest, locale } = useI18n();
  const bcp47 = LOCALE_META[locale].bcp47;
  const loadText = useVisaText((s) => s.load);
  const text = useVisaText((s) => s.texts[locale]?.[code]);
  const title = useVisaTitle();
  const fmt = useVisaFormat();
  const [checked, setChecked] = useState<string[]>([]);
  const g = guideFacts(code);
  const dests = destinations.filter((d) => d.countryCode === code);

  useEffect(() => {
    void loadText(locale);
  }, [loadText, locale]);

  useEffect(() => {
    markVisaChecked(code);
  }, [code, markVisaChecked]);

  useEffect(() => {
    document.title = `${t('visa.infoTitle')}: ${country(code)} — Vylo`;
  }, [code, country, t]);

  const header = (
    <div className="flex items-center gap-4 pt-2">
      <span className="text-[56px] leading-none">{flag(code)}</span>
      <div className="min-w-0 flex-1">
        <h1 className="text-[28px] font-bold leading-tight tracking-[-0.035em]">{country(code)}</h1>
        <button onClick={() => openSheet({ type: 'passport', slot: 'main' })} className="mt-0.5 flex items-center gap-1.5 text-[14px] text-muted">
          <UserRound className="size-4" />
          {flag(passport)} {country(passport)}
          <span className="font-semibold text-brand">{t('visa.change')}</span>
        </button>
      </div>
    </div>
  );

  if (!visa)
    return (
      <div className="scroll-area absolute inset-0 bg-canvas pb-16">
        <TopBar title={t('visa.infoTitle')} />
        <div className="px-5">
          {header}
          <p className="mt-8 text-center text-[15px] text-muted">{t('visa.noData')}</p>
        </div>
      </div>
    );

  const docs = visa.regime === 'domestic' || visa.regime === 'eu' ? visa.docs : ['passport', ...visa.docs.filter((x) => x !== 'passport')];
  const passportNote = text?.passports?.[passport];
  const tone = regimeTone[visa.regime];
  /** Applying (e-visa, ETA, visa on arrival, embassy) only matters for passports that cannot simply walk in. */
  const hacks = (text?.hacks ?? []).filter((_, i) => appliesTo(g?.hackScope?.[i], visa));
  const pitfalls = (text?.pitfalls ?? []).filter((_, i) => appliesTo(g?.pitfallScope?.[i], visa));
  const needsApplication = visa.regime === 'voa' || visa.regime === 'eta' || visa.regime === 'evisa' || visa.regime === 'required' || visa.regime === 'schengen';

  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-16">
      <TopBar title={t('visa.infoTitle')} />
      <div className="px-5">
        {header}

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className={cn('relative mt-5 overflow-hidden rounded-[28px] bg-gradient-to-br p-5 text-white shadow-float', gradients[tone])}>
          <div className="absolute -right-8 -top-8 size-36 rounded-full bg-white/10" />
          <div className="absolute -bottom-12 right-10 size-28 rounded-full bg-white/10" />
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-white/80">{tk(`visa.regimeShort.${visa.regime}`)}</p>
          <p className="mt-1 text-[26px] font-bold leading-tight tracking-[-0.03em]">{title(visa)}</p>
          {visa.waiver && (
            <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[12px] font-semibold backdrop-blur">
              <Sparkles className="size-3.5" /> {t('visa.waiverApplied')}
            </p>
          )}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/15 p-3 backdrop-blur">
              <CalendarClock className="size-5" />
              <p className="mt-1.5 text-[11px] text-white/75">{t('visa.stayLabel')}</p>
              <p className="text-[15px] font-bold">{fmt.stay(visa)}</p>
            </div>
            <div className="rounded-2xl bg-white/15 p-3 backdrop-blur">
              <CircleDollarSign className="size-5" />
              <p className="mt-1.5 text-[11px] text-white/75">{t('visa.costLabel')}</p>
              <p className="text-[15px] font-bold leading-snug">
                {fmt.cost(visa)}
                {visa.plusFee && <span className="block text-[11px] font-medium text-white/80">{t('visa.plusFee')}</span>}
              </p>
            </div>
          </div>
        </motion.div>

        {visa.waiver && (
          <div className="mt-4 rounded-[24px] bg-amber-50 p-4">
            <p className="flex items-center gap-2 text-[15px] font-bold">
              <Sparkles className="size-5 text-amber" /> {t('visa.waiverApplied')}
            </p>
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">
              {t('visa.waiverAppliedText', { holding: tk(`visa.holding.${visa.waiver.waiver.holds.find((h) => holdings.includes(h)) ?? visa.waiver.waiver.holds[0]}`), from: title({ regime: visa.baseRegime }) })}
            </p>
            {text?.waivers?.[visa.waiver.index] && <p className="mt-2 text-[13px] leading-relaxed text-muted">{text.waivers[visa.waiver.index]}</p>}
          </div>
        )}

        {second && (
          <button onClick={() => openSheet({ type: 'passport', slot: 'main' })} className="press mt-4 flex w-full items-center gap-3 rounded-[24px] bg-white p-4 text-left shadow-soft">
            <ArrowRightLeft className="size-5 shrink-0 text-brand" />
            <span className="min-w-0 flex-1">
              <span className="block text-[14px] font-semibold">{t('visa.secondEdge', { flag: flag(second.passport), country: country(second.passport) })}</span>
              <span className="block text-[13px] text-muted">
                {title(second)} · {fmt.stay(second)}
              </span>
            </span>
          </button>
        )}

        <Section icon={<Plane className="size-5 text-brand" />} title={t('visa.how')}>
          <Prose>{tk(`visa.howText.${visa.regime}`)}</Prose>
          <div className="mt-3 flex items-start gap-2 rounded-2xl bg-surface-2/70 p-3 text-[13px] text-ink-2">
            <Info className="mt-0.5 size-4 shrink-0 text-muted" />
            {t('visa.passportLabel')}: {tk(`visa.validity.${visa.validity}`)}
          </div>
        </Section>

        {passportNote && (
          <div className="mt-4 flex gap-3 rounded-[24px] bg-sky-50 p-4">
            <UserRound className="mt-0.5 size-5 shrink-0 text-sky" />
            <div>
              <p className="text-[13px] font-bold text-sky">
                {t('visa.forYourPassport')} {flag(passport)}
              </p>
              <p className="mt-1 text-[14px] leading-relaxed text-ink-2">{passportNote}</p>
            </div>
          </div>
        )}

        {visa.offers.length > 0 && (
          <Section icon={<Sparkles className="size-5 text-amber" />} title={t('visa.offersTitle')} className="ring-1 ring-amber/25">
            <p className="text-[13px] text-muted">{t('visa.offersHint')}</p>
            <div className="mt-3 grid gap-2.5">
              {visa.offers.map(({ waiver, index }) => (
                <div key={index} className="rounded-2xl bg-amber-50/70 p-3">
                  <p className="text-[14px] font-semibold">
                    {waiver.holds.map((h) => tk(`visa.holding.${h}`)).join(' · ')}
                  </p>
                  <p className="mt-0.5 text-[13px] font-semibold text-amber">
                    → {title({ regime: waiver.status })}
                    {waiver.days ? ` · ${t('visa.stay', { count: waiver.days })}` : ''}
                  </p>
                  {text?.waivers?.[index] && <p className="mt-1.5 text-[13px] leading-relaxed text-ink-2">{text.waivers[index]}</p>}
                </div>
              ))}
            </div>
            <Button variant="secondary" size="sm" className="mt-3 w-full" onClick={() => openSheet({ type: 'holdings' })}>
              {t('visa.markHoldings')}
            </Button>
          </Section>
        )}

        {(text?.apply || g?.links) && needsApplication && (
          <Section icon={<FileCheck2 className="size-5 text-brand" />} title={t('visa.applyTitle')}>
            {text?.apply && <Prose>{text.apply}</Prose>}
            {g?.links && (
              <div className="mt-3 grid gap-2">
                {(['evisa', 'eta', 'immigration'] as const).map(
                  (k) =>
                    g.links?.[k] && (
                      <a key={k} href={g.links[k]} target="_blank" rel="noopener noreferrer" className="press flex items-center gap-3 rounded-2xl bg-surface-2/70 px-3.5 py-3">
                        <ShieldCheck className="size-5 shrink-0 text-mint" />
                        <span className="min-w-0 flex-1">
                          <span className="block text-[14px] font-semibold">{t(`visa.link.${k}`)}</span>
                          <span className="block truncate text-[12px] text-muted">{g.links[k]!.replace(/^https:\/\//, '')}</span>
                        </span>
                        <ExternalLink className="size-4 shrink-0 text-faint" />
                      </a>
                    ),
                )}
              </div>
            )}
          </Section>
        )}

        {g?.forms && g.forms.length > 0 && visa.regime !== 'domestic' && (
          <Section icon={<FileCheck2 className="size-5 text-sky" />} title={t('visa.formsTitle')}>
            <div className="grid gap-2">
              {g.forms.map((form) => {
                const body = (
                  <>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[14px] font-semibold">{form.name}</span>
                      {form.fee && <span className="block text-[12px] text-muted">{f.price(form.fee)}</span>}
                    </span>
                    {form.url && <ExternalLink className="size-4 shrink-0 text-faint" />}
                  </>
                );
                return form.url ? (
                  <a key={form.name} href={form.url} target="_blank" rel="noopener noreferrer" className="press flex items-center gap-3 rounded-2xl bg-surface-2/70 px-3.5 py-3">
                    {body}
                  </a>
                ) : (
                  <div key={form.name} className="flex items-center gap-3 rounded-2xl bg-surface-2/70 px-3.5 py-3">
                    {body}
                  </div>
                );
              })}
            </div>
          </Section>
        )}

        {docs.length > 0 && (
          <Section
            icon={<FileCheck2 className="size-5 text-mint" />}
            title={t('visa.docs')}
            right={
              <span className="text-[12px] font-semibold text-muted">
                {checked.length}/{docs.length}
              </span>
            }
          >
            <div className="grid gap-1">
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
          </Section>
        )}

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

        {g?.rule && visa.regime !== 'eu' && visa.regime !== 'domestic' && (
          <Section icon={<CalendarRange className="size-5 text-sky" />} title={t('visa.ruleTitle', { days: g.rule.days, window: g.rule.window })}>
            <Prose>{t('visa.ruleText', { days: g.rule.days, window: g.rule.window })}</Prose>
            <Link href={`/visa/calc/?zone=${SCHENGEN.has(code) ? 'schengen' : code}`} className="mt-3 block">
              <Button variant="secondary" size="sm" className="w-full">
                {t('visa.calcOpen')}
              </Button>
            </Link>
          </Section>
        )}

        {text?.extend && g?.extend && (
          <Section
            icon={<Hourglass className="size-5 text-violet" />}
            title={t('visa.extendTitle')}
            right={g.extend.days ? <span className="text-[12px] font-semibold text-muted">+{t('visa.stay', { count: g.extend.days })}{g.extend.fee ? ` · ${f.price(g.extend.fee)}` : ''}</span> : undefined}
          >
            <Prose>{text.extend}</Prose>
          </Section>
        )}

        {text?.visaRun && g?.visaRun && (
          <Section icon={<Repeat className="size-5 text-brand" />} title={t('visa.runTitle')} right={<span className={cn('rounded-full px-2.5 py-1 text-[11px] font-bold', runTone[g.visaRun])}>{t(`visa.run.${g.visaRun}`)}</span>}>
            <Prose>{text.visaRun}</Prose>
            {g.borders && g.borders.length > 0 && (
              <>
                <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.06em] text-faint">{t('visa.bordersTitle')}</p>
                <div className="mt-1.5 grid gap-2">
                  {g.borders.map((b) => {
                    const there = visaFor(passport, b.to, holdings);
                    return (
                      <a
                        key={b.name}
                        href={`https://www.google.com/maps/search/?api=1&query=${b.lat},${b.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="press flex items-center gap-3 rounded-2xl bg-surface-2/70 px-3.5 py-3"
                        aria-label={`${b.name} — ${t('visa.openInMaps')}`}
                      >
                        <span className="text-[24px] leading-none">{flag(b.to)}</span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[14px] font-semibold">{b.name}</span>
                          <span className="block truncate text-[12px] text-muted">
                            {country(b.to)}
                            {there ? ` · ${title(there)}${there.days ? ` · ${t('visa.stay', { count: there.days })}` : ''}` : ''}
                          </span>
                        </span>
                        <MapPin className="size-4 shrink-0 text-faint" />
                      </a>
                    );
                  })}
                </div>
              </>
            )}
          </Section>
        )}

        {text?.transit && g?.transit && (
          <Section icon={<Plane className="size-5 text-sky" />} title={t('visa.transitTitle')} right={<span className="text-[12px] font-semibold text-muted">{t('visa.transitHours', { count: g.transit.hours })}</span>}>
            <Prose>{text.transit}</Prose>
          </Section>
        )}

        {hacks.length > 0 && (
          <Section icon={<Lightbulb className="size-5 text-amber" />} title={t('visa.hacksTitle')}>
            <ul className="grid gap-2.5">
              {hacks.map((h, i) => (
                <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-ink-2">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-amber-50 text-[11px] font-bold text-amber">{i + 1}</span>
                  {h}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {pitfalls.length > 0 && (
          <Section icon={<TriangleAlert className="size-5 text-rose" />} title={t('visa.pitfallsTitle')}>
            <ul className="grid gap-2.5">
              {pitfalls.map((p, i) => (
                <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-ink-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rose" />
                  {p}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {text?.nomad && g?.nomad && (
          <Section icon={<Laptop className="size-5 text-mint" />} title={t('visa.nomadTitle')}>
            <p className="text-[14px] font-semibold">
              {g.nomad.name} · {t('visa.nomadMonths', { count: g.nomad.months })}
              {g.nomad.income ? ` · ${t('visa.nomadIncome', { price: f.price(g.nomad.income) })}` : ''}
            </p>
            <div className="mt-1.5">
              <Prose>{text.nomad}</Prose>
            </div>
          </Section>
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

        {text?.summary && (
          <details className="group mt-6 rounded-[20px] bg-white/70 px-4 py-3 text-[13px] leading-relaxed text-muted">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-ink-2 [&::-webkit-details-marker]:hidden">
              {t('visa.othersTitle')}
              <ChevronDown className="size-4 shrink-0 text-faint transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-2">{text.summary}</p>
          </details>
        )}

        <div className="mt-8 grid gap-1 text-center text-[12px] leading-relaxed text-faint">
          {g?.checked && <p>{t('visa.checkedOn', { date: monthLabel(g.checked, bcp47) })}</p>}
          {!visa.curated && <p>{t('visa.matrixSource', { date: monthLabel(MATRIX_DATE, bcp47) })}</p>}
          <p>{t('visa.disclaimer')}</p>
        </div>
      </div>
    </div>
  );
}
