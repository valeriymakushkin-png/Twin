'use client';

import { motion } from 'framer-motion';
import {
  Bookmark,
  CalendarDays,
  Check,
  Clock,
  CloudDownload,
  CloudOff,
  Coins,
  Languages,
  Lightbulb,
  Loader2,
  MapPin,
  PenLine,
  Plane,
  Plus,
  Route,
  Share2,
  Wallet,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { MeetupRow, ReviewCard } from '@/components/cards';
import { HeroPage, shareLink } from '@/components/hero';
import { usePlus } from '@/components/paywall';
import { Photo } from '@/components/photo';
import { EatList, topFood } from '@/components/eat-section';
import { cityRouteIds, useRouteActions } from '@/components/route-actions';
import { SpotBadge } from '@/components/spot-badge';
import { Button, Chip, Rating, SectionHeader, Tag, UnderlineTabs } from '@/components/ui';
import { VisaBadge } from '@/components/visa-badge';
import { categoryColor, countryHref, destinationById, isHiddenReview, placeHref, placesIn } from '@/data/catalog';
import { useVisa } from '@/store/visa';
import { reviews } from '@/data/social';
import type { Theme } from '@/data/types';
import { useI18n } from '@/i18n/use';
import { flag } from '@/lib/countries';
import { downloadDestination, offlineSupported } from '@/lib/offline';
import { cn } from '@/lib/utils';
import { useAllMeetups, useApp } from '@/store/app';
import { useUI } from '@/store/ui';
import { SpotStrip } from './country-screen';

type Tab = 'overview' | 'places' | 'visa' | 'tips' | 'meetups';
type PlaceFilter = 'all' | 'sights' | 'insta' | 'hidden' | 'food' | 'nature';

export function ActionRow({ id, theme }: { id: string; theme?: Theme }) {
  const saved = useApp((s) => s.savedIds.includes(id));
  const been = useApp((s) => s.beenHere.includes(id));
  const { toggleSave, toggleBeenHere } = useApp();
  const openSheet = useUI((s) => s.openSheet);
  const { t } = useI18n();
  const actions = [
    {
      label: saved ? t('actions.saved') : t('actions.save'),
      icon: Bookmark,
      on: saved,
      onClick: () => toggleSave(id),
    },
    {
      label: been ? t('actions.beenDone') : t('actions.been'),
      icon: Check,
      on: been,
      onClick: () => toggleBeenHere(id),
    },
    {
      label: t('actions.toTrip'),
      icon: Plus,
      on: false,
      onClick: () => openSheet({ type: 'trip', itemId: id }),
    },
    {
      label: t('actions.share'),
      icon: Share2,
      on: false,
      onClick: () => shareLink(document.title, ''),
    },
  ];
  const accent = theme?.accent ?? '#6366f1';
  return (
    <div className="grid grid-cols-4 gap-2.5">
      {actions.map((a) => (
        <motion.button
          key={a.label}
          whileTap={{ scale: 0.92 }}
          onClick={a.onClick}
          className={cn(
            'flex min-w-0 flex-col items-center gap-1.5 rounded-[20px] px-1 py-3 text-[11px] font-semibold ring-1 transition-colors',
            !a.on && 'bg-white text-ink-2 shadow-soft ring-line',
          )}
          style={
            a.on
              ? {
                  background: `${accent}14`,
                  color: accent,
                  boxShadow: `inset 0 0 0 1.5px ${accent}55`,
                }
              : undefined
          }
        >
          <a.icon
            className="size-5"
            style={a.on && a.icon === Bookmark ? { fill: accent } : undefined}
            strokeWidth={2.2}
          />
          <span className="line-clamp-2 w-full text-center leading-tight">{a.label}</span>
        </motion.button>
      ))}
    </div>
  );
}

function OfflineButton({ id, accent }: { id: string; accent: string }) {
  const { t } = useI18n();
  const { gate } = usePlus();
  const offline = useApp((s) => s.offline.includes(id));
  const markOffline = useApp((s) => s.markOffline);
  const [busy, setBusy] = useState(false);
  return (
    <button
      disabled={busy || offline}
      onClick={() =>
        gate(async () => {
          if (!offlineSupported()) return toast.error(t('offline.unsupported'));
          setBusy(true);
          const ok = await downloadDestination(id);
          setBusy(false);
          if (ok) {
            markOffline(id);
            toast.success(t('offline.ready'));
          } else toast.error(t('offline.failed'));
        })
      }
      className="press flex h-11 w-full items-center justify-center gap-2 rounded-full text-[14px] font-semibold ring-1 ring-line disabled:opacity-80"
      style={offline ? { color: accent, background: `${accent}12` } : undefined}
    >
      {busy ? (
        <Loader2 className="size-4 animate-spin" />
      ) : offline ? (
        <CloudOff className="size-4" />
      ) : (
        <CloudDownload className="size-4" />
      )}
      {busy ? t('offline.downloading') : offline ? t('offline.ready') : t('offline.download')}
      {!offline && !busy && (
        <span className="rounded-full bg-gradient-to-r from-[#fcd34d] to-[#f59e0b] px-1.5 text-[9px] font-black text-[#451a03]">
          PLUS
        </span>
      )}
    </button>
  );
}

export function DestinationScreen({ id }: { id: string }) {
  const d = destinationById(id)!;
  const [tab, setTab] = useState<Tab>('overview');
  const [placeFilter, setPlaceFilter] = useState<PlaceFilter>('all');
  const { routeCity } = useRouteActions();
  const cityRouteCount = cityRouteIds(id).length;
  const { markViewed, myReviews, markVisaChecked } = useApp();
  const openSheet = useUI((s) => s.openSheet);
  const { t, tk, f, dest, place, country } = useI18n();
  const text = dest(id);
  const meetups = useAllMeetups().filter((m) => m.destinationId === id);
  const placeList = placesIn(id);
  const allReviews = [
    ...myReviews.filter((r) => r.targetId === id),
    ...reviews.filter((r) => !isHiddenReview(r.id) && (r.targetId === id || placeList.some((p) => p.id === r.targetId))),
  ];
  const visa = useVisa(d.countryCode);
  const accent = d.theme.accent;

  useEffect(() => {
    markViewed(id);
  }, [id, markViewed]);

  useEffect(() => {
    document.title = `${text.name} — Vylo`;
  }, [text.name]);

  useEffect(() => {
    if (tab === 'visa') markVisaChecked(d.countryCode);
  }, [tab, d.countryCode, markVisaChecked]);

  const facts = [
    { icon: CalendarDays, label: t('destination.bestTime'), value: f.months(d.months) },
    { icon: Wallet, label: t('destination.budget'), value: `~${f.money(d.budgetPerDay, 'USD')}` },
    { icon: Coins, label: t('destination.currency'), value: f.currencyName(d.currency) },
    { icon: Languages, label: t('destination.language'), value: f.language(d.language) },
    { icon: Clock, label: t('destination.timezone'), value: d.timezone },
    { icon: MapPin, label: t('destination.inGuide'), value: String(placeList.length) },
  ];

  return (
    <HeroPage
      image={d.image}
      title={text.name}
      saveId={d.id}
      theme={d.theme}
      overlay={
        <>
          <span
            className="mb-2 inline-block h-1.5 w-12 rounded-full"
            style={{ background: `linear-gradient(90deg, ${d.theme.accent}, ${d.theme.accent2})` }}
          />
          <h1 className="text-[40px] font-bold leading-none tracking-[-0.04em]">{text.name}</h1>
          <Link
            href={countryHref(d.countryCode)}
            className="mt-1.5 block w-fit text-[16px] font-medium text-white/90"
          >
            {flag(d.countryCode)} {country(d.countryCode)} ›
          </Link>
          <Rating value={d.rating} count={d.reviews} light className="mt-2 text-[14px]" />
        </>
      }
    >
      <UnderlineTabs
        layoutId="dest-tab"
        className="pt-6"
        accent={accent}
        value={tab}
        onChange={setTab}
        options={[
          { value: 'overview', label: t('destination.tabOverview') },
          { value: 'places', label: `${t('destination.tabPlaces')} · ${placeList.length}` },
          { value: 'visa', label: t('destination.tabVisa') },
          { value: 'tips', label: t('destination.tabTips') },
          { value: 'meetups', label: `${t('destination.tabMeetups')} · ${meetups.length}` },
        ]}
      />

      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {tab === 'overview' && (
          <div className="grid gap-7 pt-5">
            <div className="px-5">
              <p
                className="text-[19px] font-semibold leading-snug tracking-[-0.02em]"
                style={{ color: accent }}
              >
                {text.tagline}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{text.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {d.tags.map((tag) => (
                  <Tag key={tag} style={{ background: `${accent}14`, color: accent }}>
                    {tk(`tags.${tag}`)}
                  </Tag>
                ))}
              </div>
              <div className="mt-5">
                <ActionRow id={d.id} theme={d.theme} />
              </div>
              <div className="mt-2.5">
                <OfflineButton id={d.id} accent={accent} />
              </div>
            </div>

            {visa && (
              <div className="px-5" onClick={() => markVisaChecked(d.countryCode)}>
                <VisaBadge code={d.countryCode} />
              </div>
            )}

            <section>
              <SectionHeader title={t('destination.topPlaces')} onAction={() => setTab('places')} />
              <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto px-5 pb-2">
                {placeList.map((p) => (
                  <Link key={p.id} href={placeHref(p.id)} className="press w-[150px] shrink-0">
                    <Photo
                      id={p.image}
                      alt={place(p.id).name}
                      width={360}
                      className="h-[120px] w-full"
                      rounded="rounded-[20px]"
                      tint={accent}
                    />
                    <p className="mt-2 truncate text-[14px] font-semibold">{place(p.id).name}</p>
                    <Rating value={p.rating} className="text-[12px]" />
                  </Link>
                ))}
              </div>
            </section>

            {cityRouteCount > 1 && (
              <button
                onClick={() => routeCity(id)}
                className="press mx-5 -mt-3 flex items-center gap-3 rounded-[22px] p-3.5 text-left ring-1"
                style={{ background: `${accent}0d`, borderColor: `${accent}33` }}
              >
                <span
                  className="grid size-11 shrink-0 place-items-center rounded-2xl text-white"
                  style={{ background: `linear-gradient(135deg, ${accent}, ${d.theme.accent2})` }}
                >
                  <Route className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-bold">{t('spots.cityRoute')}</span>
                  <span className="block text-[12px] text-muted">
                    {t('spots.cityRouteText', { count: cityRouteCount })}
                  </span>
                </span>
              </button>
            )}

            {placeList.some((p) => p.spot === 'insta') && (
              <section>
                <SectionHeader title={t('country.insta')} />
                <SpotStrip items={placeList.filter((p) => p.spot === 'insta')} accent={accent} />
              </section>
            )}

            {placeList.some((p) => p.category === 'food') && (
              <section>
                <SectionHeader
                  title={t('eat.title')}
                  action={t('eat.all')}
                  onAction={() => {
                    setPlaceFilter('food');
                    setTab('places');
                  }}
                />
                <EatList items={topFood(placeList, 4)} accent={accent} />
              </section>
            )}

            {placeList.some((p) => p.spot === 'hidden') && (
              <section>
                <SectionHeader title={t('country.hidden')} />
                <SpotStrip items={placeList.filter((p) => p.spot === 'hidden')} accent={accent} />
              </section>
            )}

            {text.gettingThere && (
              <section className="px-5">
                <h2 className="flex items-center gap-2 text-[19px] font-bold tracking-[-0.02em]">
                  <Plane className="size-5" style={{ color: accent }} /> {t('spots.gettingThere')}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{text.gettingThere}</p>
              </section>
            )}

            <section className="px-5">
              <h2 className="text-[19px] font-bold tracking-[-0.02em]">
                {t('destination.glance')}
              </h2>
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-[20px] p-3.5"
                    style={{ background: `${accent}0d` }}
                  >
                    <fact.icon className="size-[18px]" style={{ color: accent }} />
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-faint">
                      {fact.label}
                    </p>
                    <p className="mt-0.5 text-[14px] font-semibold leading-snug">{fact.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionHeader title={t('destination.gallery')} />
              <div className="mt-3 grid grid-cols-3 gap-1.5 px-5">
                {[d.image, ...d.gallery].slice(0, 5).map((g, i) => (
                  <Photo
                    key={g + i}
                    id={g}
                    alt={text.name}
                    width={i === 0 ? 700 : 400}
                    className={cn('h-28', i === 0 && 'col-span-2 row-span-2 h-auto')}
                    rounded="rounded-[18px]"
                    tint={accent}
                  />
                ))}
              </div>
              <p className="mt-2 px-5 text-[11px] text-faint">{t('destination.photoCredit')}</p>
            </section>

            <section className="px-5">
              <div className="flex items-center justify-between">
                <h2 className="text-[19px] font-bold tracking-[-0.02em]">
                  {t('destination.reviews')}
                </h2>
                <button
                  onClick={() => openSheet({ type: 'review', targetId: d.id })}
                  className="flex items-center gap-1 text-[13px] font-semibold"
                  style={{ color: accent }}
                >
                  <PenLine className="size-4" /> {t('destination.write')}
                </button>
              </div>
              <div className="mt-3 grid gap-3">
                {allReviews.length ? (
                  allReviews.map((r) => (
                    <ReviewCard key={r.id} r={r} showTarget={r.targetId !== d.id} />
                  ))
                ) : (
                  <p className="text-[14px] text-muted">{t('destination.beFirst')}</p>
                )}
              </div>
            </section>
          </div>
        )}

        {tab === 'places' && (
          <div className="grid gap-3 px-5 pt-4">
            <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1">
              {(['all', 'sights', 'insta', 'hidden', 'food', 'nature'] as const).map((k) => (
                <Chip key={k} active={placeFilter === k} onClick={() => setPlaceFilter(k)}>
                  {k === 'insta'
                    ? t('country.insta')
                    : k === 'hidden'
                      ? t('country.hidden')
                      : t(`spots.${k}`)}
                </Chip>
              ))}
            </div>
            {placeList
              .filter((p) =>
                placeFilter === 'all'
                  ? true
                  : placeFilter === 'insta' || placeFilter === 'hidden'
                    ? p.spot === placeFilter
                    : placeFilter === 'sights'
                      ? p.category === 'attraction'
                      : p.category === placeFilter,
              )
              .map((p) => (
                <Link
                  key={p.id}
                  href={placeHref(p.id)}
                  className="press relative overflow-hidden rounded-[24px] bg-white shadow-card ring-1 ring-line-soft"
                >
                  {p.spot && <SpotBadge spot={p.spot} className="absolute left-3 top-3 z-10" />}
                  <Photo
                    id={p.image}
                    alt={place(p.id).name}
                    width={800}
                    className="h-40 w-full"
                    tint={accent}
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-[16px] font-bold">{place(p.id).name}</p>
                      <Rating value={p.rating} count={p.reviews} />
                    </div>
                    <p
                      className="mt-0.5 text-[12px] font-semibold"
                      style={{ color: categoryColor[p.category] }}
                    >
                      {tk(`categories.${p.category}`)}
                      {p.price ? ` · ${f.price(p.price)}` : ''}
                    </p>
                    <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted">
                      {place(p.id).description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        )}

        {tab === 'visa' && (
          <div className="px-5 pt-5">
            {visa ? (
              <>
                <VisaBadge code={d.countryCode} link={false} />
                <div className="mt-3 grid gap-2 rounded-[22px] bg-surface-2/70 p-4 text-[14px]">
                  <p className="text-ink-2">{tk(`visa.howText.${visa.regime}`)}</p>
                  <p className="text-muted">
                    {t('destination.passport', { rule: tk(`visa.validity.${visa.validity}`) })}
                  </p>
                </div>
                <Link href={`/visa/${d.countryCode.toLowerCase()}/`} className="mt-4 block">
                  <Button variant="secondary" className="w-full">
                    {t('destination.visaMore')}
                  </Button>
                </Link>
              </>
            ) : (
              <p className="text-[14px] text-muted">{t('destination.noVisaData')}</p>
            )}
          </div>
        )}

        {tab === 'tips' && (
          <div className="grid gap-3 px-5 pt-5">
            {[...text.tips, ...placeList.map((p) => place(p.id).tip).filter(Boolean)].map((tip) => (
              <div
                key={tip}
                className="flex gap-3 rounded-[22px] p-4"
                style={{ background: `${accent}10` }}
              >
                <Lightbulb className="mt-0.5 size-5 shrink-0" style={{ color: accent }} />
                <p className="text-[14px] leading-relaxed text-ink-2">{tip}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 'meetups' && (
          <div className="grid gap-2.5 px-5 pt-5">
            {meetups.map((m) => (
              <MeetupRow key={m.id} m={m} />
            ))}
            <Link href={`/meetups/new/?d=${d.id}`}>
              <Button variant="soft" className="mt-1 w-full">
                <Plus className="size-4" /> {t('destination.createMeetupHere')}
              </Button>
            </Link>
          </div>
        )}
      </motion.div>
    </HeroPage>
  );
}
