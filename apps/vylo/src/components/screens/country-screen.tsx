'use client';

import { motion } from 'framer-motion';
import { BookOpen, CalendarDays, ChevronRight, Coins, Languages, Lightbulb, Map as MapIcon, Plane, Route, Wallet } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo } from 'react';
import { DestinationCard } from '@/components/cards';
import { HeroPage } from '@/components/hero';
import { Photo } from '@/components/photo';
import { useRouteActions } from '@/components/route-actions';
import { SpotBadge } from '@/components/spot-badge';
import { Button, Rating, SectionHeader } from '@/components/ui';
import { VisaBadge } from '@/components/visa-badge';
import { citiesIn, countryByCode, placeHref, placesInCountry, visaByCode } from '@/data/catalog';
import type { Place, Theme } from '@/data/types';
import { useI18n } from '@/i18n/use';
import { flag } from '@/lib/countries';
import { useUI } from '@/store/ui';

/** "≈ 3 h 40 min" */
export function useFlightTime() {
  const { t } = useI18n();
  return (hours: number) => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return m ? t('country.hoursMin', { h, m }) : t('country.hours', { h });
  };
}

/** Horizontal strip of place cards with a spot badge — used for photo spots and hidden gems. */
export function SpotStrip({ items, accent }: { items: Place[]; accent: string }) {
  const { place, dest } = useI18n();
  return (
    <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto px-5 pb-2">
      {items.map((p) => (
        <Link key={p.id} href={placeHref(p.id)} className="press relative h-[210px] w-[160px] shrink-0 overflow-hidden rounded-[24px] shadow-card">
          <Photo id={p.image} alt={place(p.id).name} width={420} className="absolute inset-0" tint={accent} />
          <div className="photo-scrim absolute inset-0" />
          {p.spot && <SpotBadge spot={p.spot} className="absolute left-2.5 top-2.5" compact />}
          <div className="absolute inset-x-3 bottom-3 text-white">
            <p className="line-clamp-2 text-[14px] font-bold leading-tight">{place(p.id).name}</p>
            <p className="mt-0.5 truncate text-[11px] text-white/80">{dest(p.destinationId).name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function CountryScreen({ code }: { code: string }) {
  const c = countryByCode(code);
  const { t, tk, f, country, countryText } = useI18n();
  const openSheet = useUI((s) => s.openSheet);
  const flight = useFlightTime();
  const { routeThrough } = useRouteActions();
  const cities = citiesIn(code);
  const all = placesInCountry(code);
  const visa = visaByCode(code);
  const text = countryText(code);
  const name = country(code);

  const { insta, hidden, top, months, budget } = useMemo(() => {
    const byRating = [...all].sort((a, b) => b.rating * Math.log10(b.reviews + 10) - a.rating * Math.log10(a.reviews + 10));
    return {
      insta: all.filter((p) => p.spot === 'insta'),
      hidden: all.filter((p) => p.spot === 'hidden'),
      top: byRating.filter((p) => !p.spot && p.category !== 'hotel').slice(0, 6),
      months: [...new Set(cities.flatMap((x) => x.months))].sort((a, b) => a - b),
      budget: cities.length ? Math.round(cities.reduce((s, x) => s + x.budgetPerDay, 0) / cities.length) : 0,
    };
  }, [all, cities]);

  useEffect(() => {
    document.title = `${name} — Vylo`;
  }, [name]);

  if (!c) return <div className="grid h-full place-items-center text-muted">{t('country.notFound')}</div>;
  const theme: Theme = c.theme;
  const accent = theme.accent;
  const first = cities[0];

  const facts = [
    ...(c.fromMoscow.hours ? [{ icon: Plane, label: t('country.flight'), value: `${flight(c.fromMoscow.hours)} · ${c.fromMoscow.direct ? t('country.direct') : t('country.transfer')}` }] : []),
    ...(months.length ? [{ icon: CalendarDays, label: t('country.bestTime'), value: f.months(months) }] : []),
    ...(budget ? [{ icon: Wallet, label: t('country.budget'), value: `~${f.money(budget, 'USD')}` }] : []),
    ...(first ? [{ icon: Coins, label: t('country.currency'), value: f.currencyName(first.currency) }] : []),
    ...(first ? [{ icon: Languages, label: t('country.language'), value: f.language(first.language) }] : []),
  ];

  return (
    <HeroPage
      image={c.image}
      title={name}
      theme={theme}
      overlay={
        <>
          <span className="glass-dark inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-white/20">{tk(`country.region.${c.region}`)}</span>
          <h1 className="mt-2 text-[40px] font-bold leading-none tracking-[-0.04em]">
            <span className="mr-2">{flag(code)}</span>
            {name}
          </h1>
          {text && <p className="mt-2 text-[16px] font-medium text-white/90">{text.tagline}</p>}
          <p className="mt-1.5 text-[13px] text-white/75">
            {t('country.citiesCount', { count: cities.length })} · {t('common.places', { count: all.length })}
          </p>
        </>
      }
    >
      <div className="grid gap-7 pb-10 pt-6">
        {text && (
          <div className="px-5">
            <p className="text-[16px] leading-relaxed text-ink-2">{text.description}</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-2.5 px-5">
          {facts.map((fact, i) => (
            <div key={fact.label} className={i === 0 && facts.length % 2 ? 'col-span-2 rounded-[20px] p-3.5' : 'rounded-[20px] p-3.5'} style={{ background: `${accent}0d` }}>
              <fact.icon className="size-[18px]" style={{ color: accent }} />
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-faint">{fact.label}</p>
              <p className="mt-0.5 text-[14px] font-semibold leading-snug">{fact.value}</p>
            </div>
          ))}
        </div>

        {visa && (
          <div className="px-5">
            <VisaBadge code={code} />
          </div>
        )}

        <section>
          <SectionHeader title={t('country.cities')} />
          <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto px-5 pb-2">
            {cities.map((d) => (
              <DestinationCard key={d.id} d={d} />
            ))}
          </div>
        </section>

        {text && (
          <Link href={`/c/${code.toLowerCase()}/guide/`} className="press mx-5 flex items-center gap-4 overflow-hidden rounded-[26px] p-4 text-white shadow-float" style={{ background: `linear-gradient(135deg, ${accent}, ${theme.accent2})` }}>
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/20">
              <BookOpen className="size-6" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-white/75">{t('country.guide')}</span>
              <span className="block truncate text-[17px] font-bold">{text.guide.title}</span>
            </span>
            <ChevronRight className="size-5 shrink-0 text-white/80" />
          </Link>
        )}

        {insta.length > 0 && (
          <section>
            <SectionHeader title={t('country.insta')} />
            <p className="px-5 text-[13px] text-muted">{t('country.instaText')}</p>
            <SpotStrip items={insta} accent={accent} />
          </section>
        )}

        {top.length > 0 && (
          <section className="px-5">
            <h2 className="text-[19px] font-bold tracking-[-0.02em]">{t('country.topSights')}</h2>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {top.map((p) => (
                <TopSight key={p.id} p={p} accent={accent} />
              ))}
            </div>
          </section>
        )}

        {hidden.length > 0 && (
          <section>
            <SectionHeader title={t('country.hidden')} />
            <p className="px-5 text-[13px] text-muted">{t('country.hiddenText')}</p>
            <SpotStrip items={hidden} accent={accent} />
          </section>
        )}

        {text && (
          <section className="px-5">
            <h2 className="flex items-center gap-2 text-[19px] font-bold tracking-[-0.02em]">
              <Plane className="size-5" style={{ color: accent }} /> {t('country.howToGet')}
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{text.howToGet}</p>
          </section>
        )}

        {text && (
          <section className="grid gap-2.5 px-5">
            <h2 className="text-[19px] font-bold tracking-[-0.02em]">{t('country.tips')}</h2>
            {text.tips.map((tip) => (
              <div key={tip} className="flex gap-3 rounded-[20px] p-4" style={{ background: `${accent}10` }}>
                <Lightbulb className="mt-0.5 size-5 shrink-0" style={{ color: accent }} />
                <p className="text-[14px] leading-relaxed text-ink-2">{tip}</p>
              </div>
            ))}
          </section>
        )}

        <div className="grid grid-cols-2 gap-2.5 px-5">
          <Link href={`/map/?country=${code}`} className="press flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-[14px] font-semibold text-white">
            <MapIcon className="size-4" /> {t('country.onMap')}
          </Link>
          <Button variant="soft" onClick={() => openSheet({ type: 'trip', itemId: first?.id })}>
            {t('country.planTrip')}
          </Button>
        </div>
        {insta.length > 1 && (
          <button onClick={() => routeThrough(insta.filter((p) => p.destinationId === insta[0]!.destinationId).map((p) => p.id))} className="press mx-5 -mt-4 flex items-center justify-center gap-2 text-[14px] font-semibold" style={{ color: accent }}>
            <Route className="size-4" /> {t('spots.cityRoute')}
          </button>
        )}
      </div>
    </HeroPage>
  );
}

function TopSight({ p, accent }: { p: Place; accent: string }) {
  const { place, dest } = useI18n();
  return (
    <motion.div whileTap={{ scale: 0.97 }}>
      <Link href={placeHref(p.id)} className="block">
        <Photo id={p.image} alt={place(p.id).name} width={420} className="h-[120px] w-full" rounded="rounded-[20px]" tint={accent} />
        <p className="mt-2 line-clamp-2 text-[14px] font-semibold leading-tight">{place(p.id).name}</p>
        <p className="flex items-center gap-1.5 text-[12px] text-muted">
          <Rating value={p.rating} className="text-[12px]" /> · <span className="truncate">{dest(p.destinationId).name}</span>
        </p>
      </Link>
    </motion.div>
  );
}
