'use client';

import { Clock, Lightbulb, Map as MapIcon, Navigation, PenLine, Ticket } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { PlaceRow, ReviewCard } from '@/components/cards';
import { HeroPage } from '@/components/hero';
import { Photo } from '@/components/photo';
import { Rating, Tag } from '@/components/ui';
import { categoryColor, destinationById, destinationHref, placeById, placesIn } from '@/data/catalog';
import { reviews } from '@/data/social';
import { useI18n } from '@/i18n/use';
import { distanceKm } from '@/lib/utils';
import { useApp } from '@/store/app';
import { useUI } from '@/store/ui';
import { ActionRow } from './destination-screen';

export function PlaceScreen({ id }: { id: string }) {
  const p = placeById(id)!;
  const d = destinationById(p.destinationId)!;
  const myReviews = useApp((s) => s.myReviews);
  const markViewed = useApp((s) => s.markViewed);
  const openSheet = useUI((s) => s.openSheet);
  const { t, tk, f, place, dest, country } = useI18n();
  const text = place(id);
  const accent = d.theme.accent;
  const list = [...myReviews.filter((r) => r.targetId === id), ...reviews.filter((r) => r.targetId === id)];
  const nearby = placesIn(p.destinationId)
    .filter((x) => x.id !== id)
    .sort((a, b) => distanceKm(p, a) - distanceKm(p, b))
    .slice(0, 4);

  useEffect(() => {
    markViewed(id);
  }, [id, markViewed]);

  useEffect(() => {
    document.title = `${text.name} — Vylo`;
  }, [text.name]);

  return (
    <HeroPage
      image={p.image}
      title={text.name}
      saveId={p.id}
      heroHeight={380}
      theme={d.theme}
      overlay={
        <>
          <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold text-white" style={{ background: categoryColor[p.category] }}>
            {tk(`categories.${p.category}`)}
          </span>
          <h1 className="mt-2 text-[32px] font-bold leading-[1.05] tracking-[-0.035em]">{text.name}</h1>
          <p className="mt-1 text-[15px] text-white/90">
            {dest(d.id).name}, {country(d.countryCode)}
          </p>
          <Rating value={p.rating} count={p.reviews} light className="mt-2 text-[14px]" />
        </>
      }
    >
      <div className="grid gap-6 px-5 pt-7">
        {(p.hours || p.price) && (
          <div className="grid grid-cols-2 gap-2.5">
            {p.hours && (
              <div className="flex items-center gap-2.5 rounded-[18px] p-3" style={{ background: `${accent}0d` }}>
                <Clock className="size-5 shrink-0" style={{ color: accent }} />
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-faint">{t('place.hours')}</p>
                  <p className="truncate text-[13px] font-semibold">{f.hours(p.hours)}</p>
                </div>
              </div>
            )}
            {p.price && (
              <div className="flex items-center gap-2.5 rounded-[18px] p-3" style={{ background: `${accent}0d` }}>
                <Ticket className="size-5 shrink-0" style={{ color: accent }} />
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-faint">{t('place.price')}</p>
                  <p className="truncate text-[13px] font-semibold">{f.price(p.price)}</p>
                </div>
              </div>
            )}
          </div>
        )}

        <div>
          <p className="text-[15px] leading-relaxed text-ink-2">{text.description}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.tags.map((tag) => (
              <Tag key={tag} style={{ background: `${accent}14`, color: accent }}>
                {tk(`tags.${tag}`)}
              </Tag>
            ))}
          </div>
        </div>

        <ActionRow id={p.id} theme={d.theme} />

        <div className="grid grid-cols-2 gap-2.5">
          <Link href={`/map/?focus=${p.id}`} className="press flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-[14px] font-semibold text-white">
            <MapIcon className="size-4" /> {t('place.onMap')}
          </Link>
          <a href={`https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`} target="_blank" rel="noreferrer" className="press flex h-12 items-center justify-center gap-2 rounded-full text-[14px] font-semibold" style={{ background: `${accent}14`, color: accent }}>
            <Navigation className="size-4" /> {t('place.route')}
          </a>
        </div>

        {text.tip && (
          <section>
            <h2 className="text-[19px] font-bold tracking-[-0.02em]">{t('place.tips')}</h2>
            <div className="mt-3 flex gap-3 rounded-[20px] p-4" style={{ background: `${accent}10` }}>
              <Lightbulb className="mt-0.5 size-5 shrink-0" style={{ color: accent }} />
              <p className="text-[14px] leading-relaxed text-ink-2">{text.tip}</p>
            </div>
          </section>
        )}

        <Link href={destinationHref(d.id)} className="press relative block h-28 overflow-hidden rounded-[24px]">
          <Photo id={d.image} alt={dest(d.id).name} width={800} className="absolute inset-0" tint={accent} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${accent}ee, transparent)` }} />
          <div className="absolute inset-y-0 left-5 right-16 flex flex-col justify-center text-white">
            <p className="text-[12px] text-white/80">{t('place.destination')}</p>
            <p className="text-[22px] font-bold tracking-[-0.03em]">{dest(d.id).name}</p>
            <p className="truncate text-[12px] text-white/90">{dest(d.id).tagline}</p>
          </div>
        </Link>

        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-[19px] font-bold tracking-[-0.02em]">{t('destination.reviews')}</h2>
            <button onClick={() => openSheet({ type: 'review', targetId: p.id })} className="flex items-center gap-1 text-[13px] font-semibold" style={{ color: accent }}>
              <PenLine className="size-4" /> {t('destination.write')}
            </button>
          </div>
          <div className="mt-3 grid gap-3">
            {list.length ? (
              list.map((r) => <ReviewCard key={r.id} r={r} showTarget={false} />)
            ) : (
              <button onClick={() => openSheet({ type: 'review', targetId: p.id })} className="rounded-[22px] border-2 border-dashed border-line p-5 text-center text-[14px] text-muted">
                {t('place.noReviews', { count: 40 })}
              </button>
            )}
          </div>
        </section>

        {nearby.length > 0 && (
          <section>
            <h2 className="text-[19px] font-bold tracking-[-0.02em]">{t('place.nearby')}</h2>
            <div className="mt-3 grid gap-2.5">
              {nearby.map((x) => (
                <PlaceRow key={x.id} id={x.id} />
              ))}
            </div>
          </section>
        )}
      </div>
    </HeroPage>
  );
}
