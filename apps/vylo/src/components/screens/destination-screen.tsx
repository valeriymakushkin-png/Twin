'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Check, Clock, Coins, Languages, Lightbulb, MapPin, PenLine, Plus, Share2, Bookmark, Wallet } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MeetupRow, ReviewCard } from '@/components/cards';
import { HeroPage, shareLink } from '@/components/hero';
import { Photo } from '@/components/photo';
import { Button, Rating, SectionHeader, Tag, UnderlineTabs } from '@/components/ui';
import { VisaBadge } from '@/components/visa-badge';
import { destinationById } from '@/data/destinations';
import { categoryMeta, placesIn } from '@/data/places';
import { reviews } from '@/data/social';
import { visaByCode } from '@/data/visa';
import { flag } from '@/lib/countries';
import { cn } from '@/lib/utils';
import { useAllMeetups, useApp } from '@/store/app';
import { useUI } from '@/store/ui';

type Tab = 'overview' | 'places' | 'visa' | 'tips' | 'meetups';

export function ActionRow({ id }: { id: string }) {
  const saved = useApp((s) => s.savedIds.includes(id));
  const been = useApp((s) => s.beenHere.includes(id));
  const { toggleSave, toggleBeenHere } = useApp();
  const openSheet = useUI((s) => s.openSheet);
  const actions = [
    { label: saved ? 'Сохранено' : 'Сохранить', icon: Bookmark, on: saved, onClick: () => toggleSave(id) },
    { label: been ? 'Я был здесь' : 'Был здесь', icon: Check, on: been, onClick: () => toggleBeenHere(id) },
    { label: 'В поездку', icon: Plus, on: false, onClick: () => openSheet({ type: 'trip', itemId: id }) },
    { label: 'Поделиться', icon: Share2, on: false, onClick: () => shareLink(document.title, '') },
  ];
  return (
    <div className="grid grid-cols-4 gap-2.5">
      {actions.map((a) => (
        <motion.button
          key={a.label}
          whileTap={{ scale: 0.92 }}
          onClick={a.onClick}
          className={cn('flex flex-col items-center gap-1.5 rounded-[20px] py-3 text-[11px] font-semibold ring-1 transition-colors', a.on ? 'bg-brand-50 text-brand-600 ring-brand/30' : 'bg-white text-ink-2 ring-line shadow-soft')}
        >
          <a.icon className={cn('size-5', a.on && a.icon === Bookmark && 'fill-brand')} strokeWidth={2.2} />
          {a.label}
        </motion.button>
      ))}
    </div>
  );
}

export function DestinationScreen({ id }: { id: string }) {
  const d = destinationById(id)!;
  const [tab, setTab] = useState<Tab>('overview');
  const { markViewed, myReviews, markVisaChecked } = useApp();
  const openSheet = useUI((s) => s.openSheet);
  const meetups = useAllMeetups().filter((m) => m.destinationId === id);
  const placeList = placesIn(id);
  const allReviews = [...myReviews.filter((r) => r.targetId === id), ...reviews.filter((r) => r.targetId === id || placeList.some((p) => p.id === r.targetId))];
  const visa = visaByCode(d.countryCode);

  useEffect(() => {
    markViewed(id);
    document.title = `${d.name} — Vylo`;
  }, [id, d.name, markViewed]);

  useEffect(() => {
    if (tab === 'visa') markVisaChecked(d.countryCode);
  }, [tab, d.countryCode, markVisaChecked]);

  const facts = [
    { icon: CalendarDays, label: 'Лучшее время', value: d.bestTime },
    { icon: Wallet, label: 'Бюджет в день', value: `~$${d.budgetPerDay}` },
    { icon: Coins, label: 'Валюта', value: d.currency },
    { icon: Languages, label: 'Язык', value: d.language },
    { icon: Clock, label: 'Часовой пояс', value: d.timezone },
    { icon: MapPin, label: 'Мест в гиде', value: String(placeList.length) },
  ];

  return (
    <HeroPage
      image={d.image}
      title={d.name}
      saveId={d.id}
      overlay={
        <>
          <h1 className="text-[40px] font-bold leading-none tracking-[-0.04em]">{d.name}</h1>
          <p className="mt-1.5 text-[16px] font-medium text-white/90">
            {flag(d.countryCode)} {d.country}
          </p>
          <Rating value={d.rating} count={d.reviews} light className="mt-2 text-[14px]" />
        </>
      }
    >
      <UnderlineTabs
        layoutId="dest-tab"
        className="pt-5"
        value={tab}
        onChange={setTab}
        options={[
          { value: 'overview', label: 'Обзор' },
          { value: 'places', label: `Места · ${placeList.length}` },
          { value: 'visa', label: 'Виза' },
          { value: 'tips', label: 'Советы' },
          { value: 'meetups', label: `Встречи · ${meetups.length}` },
        ]}
      />

      <motion.div key={tab} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
        {tab === 'overview' && (
          <div className="grid gap-7 pt-5">
            <div className="px-5">
              <p className="text-[15px] leading-relaxed text-ink-2">{d.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {d.tags.map((t) => (
                  <Tag key={t} className="bg-brand-50 text-brand-700">
                    {t}
                  </Tag>
                ))}
              </div>
              <div className="mt-5">
                <ActionRow id={d.id} />
              </div>
            </div>

            {visa && (
              <div className="px-5" onClick={() => markVisaChecked(d.countryCode)}>
                <VisaBadge code={d.countryCode} />
              </div>
            )}

            <section>
              <SectionHeader title="Топ-места" onAction={() => setTab('places')} />
              <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto px-5 pb-2">
                {placeList.map((p) => (
                  <Link key={p.id} href={`/p/${p.id}/`} className="press w-[150px] shrink-0">
                    <Photo id={p.image} alt={p.name} width={360} className="h-[120px] w-full" rounded="rounded-[20px]" />
                    <p className="mt-2 truncate text-[14px] font-semibold">{p.name}</p>
                    <Rating value={p.rating} className="text-[12px]" />
                  </Link>
                ))}
              </div>
            </section>

            <section className="px-5">
              <h2 className="text-[19px] font-bold tracking-[-0.02em]">Коротко о главном</h2>
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                {facts.map((f) => (
                  <div key={f.label} className="rounded-[20px] bg-surface-2/70 p-3.5">
                    <f.icon className="size-[18px] text-brand" />
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-faint">{f.label}</p>
                    <p className="mt-0.5 text-[14px] font-semibold leading-snug">{f.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionHeader title="Фотогалерея" />
              <div className="mt-3 grid grid-cols-3 gap-1.5 px-5">
                {[d.image, ...d.gallery].slice(0, 6).map((g, i) => (
                  <Photo key={g + i} id={g} alt={d.name} width={400} className={cn('h-28', i === 0 && 'col-span-2 row-span-2 h-auto')} rounded="rounded-[18px]" />
                ))}
              </div>
            </section>

            <section className="px-5">
              <div className="flex items-center justify-between">
                <h2 className="text-[19px] font-bold tracking-[-0.02em]">Отзывы</h2>
                <button onClick={() => openSheet({ type: 'review', targetId: d.id })} className="flex items-center gap-1 text-[13px] font-semibold text-brand-600">
                  <PenLine className="size-4" /> Написать
                </button>
              </div>
              <div className="mt-3 grid gap-3">
                {allReviews.length ? allReviews.map((r) => <ReviewCard key={r.id} r={r} showTarget={r.targetId !== d.id} />) : <p className="text-[14px] text-muted">Будьте первым, кто оставит отзыв.</p>}
              </div>
            </section>
          </div>
        )}

        {tab === 'places' && (
          <div className="grid gap-3 px-5 pt-5">
            {placeList.map((p) => (
              <Link key={p.id} href={`/p/${p.id}/`} className="press overflow-hidden rounded-[24px] bg-white shadow-card ring-1 ring-line-soft">
                <Photo id={p.image} alt={p.name} width={800} className="h-40 w-full" />
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-[16px] font-bold">{p.name}</p>
                    <Rating value={p.rating} count={p.reviews} />
                  </div>
                  <p className="mt-0.5 text-[12px] font-semibold" style={{ color: categoryMeta[p.category].color }}>
                    {categoryMeta[p.category].label}
                    {p.price ? ` · ${p.price}` : ''}
                  </p>
                  <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted">{p.description}</p>
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
                  <p className="text-ink-2">{visa.how}</p>
                  <p className="text-muted">Паспорт: {visa.validity.toLowerCase()}</p>
                </div>
                <Link href={`/visa/${d.countryCode.toLowerCase()}/`} className="mt-4 block">
                  <Button variant="secondary" className="w-full">
                    Подробнее и чек-лист документов
                  </Button>
                </Link>
              </>
            ) : (
              <p className="text-[14px] text-muted">Для этой страны пока нет данных.</p>
            )}
          </div>
        )}

        {tab === 'tips' && (
          <div className="grid gap-3 px-5 pt-5">
            {[...d.tips, ...placeList.flatMap((p) => p.tips)].map((t) => (
              <div key={t} className="flex gap-3 rounded-[22px] bg-amber-50/70 p-4">
                <Lightbulb className="mt-0.5 size-5 shrink-0 text-amber" />
                <p className="text-[14px] leading-relaxed text-ink-2">{t}</p>
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
                <Plus className="size-4" /> Создать встречу здесь
              </Button>
            </Link>
          </div>
        )}
      </motion.div>
    </HeroPage>
  );
}
