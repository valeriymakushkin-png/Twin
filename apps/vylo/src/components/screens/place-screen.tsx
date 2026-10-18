'use client';

import { Clock, Lightbulb, Map as MapIcon, Navigation, PenLine, Ticket } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { PlaceRow, ReviewCard } from '@/components/cards';
import { HeroPage } from '@/components/hero';
import { Photo } from '@/components/photo';
import { Rating, Tag } from '@/components/ui';
import { destinationById } from '@/data/destinations';
import { categoryMeta, placeById, placesIn } from '@/data/places';
import { reviews } from '@/data/social';
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
  const meta = categoryMeta[p.category];
  const list = [...myReviews.filter((r) => r.targetId === id), ...reviews.filter((r) => r.targetId === id)];
  const nearby = placesIn(p.destinationId)
    .filter((x) => x.id !== id)
    .sort((a, b) => distanceKm(p, a) - distanceKm(p, b))
    .slice(0, 4);

  useEffect(() => {
    markViewed(id);
    document.title = `${p.name} — Vylo`;
  }, [id, p.name, markViewed]);

  return (
    <HeroPage
      image={p.image}
      title={p.name}
      saveId={p.id}
      heroHeight={380}
      overlay={
        <>
          <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold text-white" style={{ background: meta.color }}>
            {meta.label}
          </span>
          <h1 className="mt-2 text-[32px] font-bold leading-[1.05] tracking-[-0.035em]">{p.name}</h1>
          <p className="mt-1 text-[15px] text-white/90">
            {d.name}, {d.country}
          </p>
          <Rating value={p.rating} count={p.reviews} light className="mt-2 text-[14px]" />
        </>
      }
    >
      <div className="grid gap-6 px-5 pt-6">
        <div className="grid grid-cols-2 gap-2.5">
          {p.hours && (
            <div className="flex items-center gap-2.5 rounded-[18px] bg-surface-2/70 p-3">
              <Clock className="size-5 text-brand" />
              <div>
                <p className="text-[11px] font-semibold text-faint">Часы работы</p>
                <p className="text-[13px] font-semibold">{p.hours}</p>
              </div>
            </div>
          )}
          {p.price && (
            <div className="flex items-center gap-2.5 rounded-[18px] bg-surface-2/70 p-3">
              <Ticket className="size-5 text-brand" />
              <div>
                <p className="text-[11px] font-semibold text-faint">Цена</p>
                <p className="text-[13px] font-semibold">{p.price}</p>
              </div>
            </div>
          )}
        </div>

        <div>
          <p className="text-[15px] leading-relaxed text-ink-2">{p.description}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>

        <ActionRow id={p.id} />

        <div className="grid grid-cols-2 gap-2.5">
          <Link href={`/map/?focus=${p.id}`} className="press flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-[14px] font-semibold text-white">
            <MapIcon className="size-4" /> На карте
          </Link>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`}
            target="_blank"
            rel="noreferrer"
            className="press flex h-12 items-center justify-center gap-2 rounded-full bg-brand-50 text-[14px] font-semibold text-brand-600"
          >
            <Navigation className="size-4" /> Маршрут
          </a>
        </div>

        {p.tips.length > 0 && (
          <section>
            <h2 className="text-[19px] font-bold tracking-[-0.02em]">Советы путешественников</h2>
            <div className="mt-3 grid gap-2.5">
              {p.tips.map((t) => (
                <div key={t} className="flex gap-3 rounded-[20px] bg-amber-50/70 p-4">
                  <Lightbulb className="mt-0.5 size-5 shrink-0 text-amber" />
                  <p className="text-[14px] leading-relaxed text-ink-2">{t}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <Link href={`/d/${d.id}/`} className="press relative block h-28 overflow-hidden rounded-[24px]">
          <Photo id={d.image} alt={d.name} width={800} className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          <div className="absolute inset-y-0 left-5 flex flex-col justify-center text-white">
            <p className="text-[12px] text-white/75">Направление</p>
            <p className="text-[22px] font-bold tracking-[-0.03em]">{d.name}</p>
            <p className="text-[12px] text-white/85">{d.tagline}</p>
          </div>
        </Link>

        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-[19px] font-bold tracking-[-0.02em]">Отзывы</h2>
            <button onClick={() => openSheet({ type: 'review', targetId: p.id })} className="flex items-center gap-1 text-[13px] font-semibold text-brand-600">
              <PenLine className="size-4" /> Написать
            </button>
          </div>
          <div className="mt-3 grid gap-3">
            {list.length ? list.map((r) => <ReviewCard key={r.id} r={r} showTarget={false} />) : (
              <button onClick={() => openSheet({ type: 'review', targetId: p.id })} className="rounded-[22px] border-2 border-dashed border-line p-5 text-center text-[14px] text-muted">
                Пока нет отзывов. Будьте первым — <span className="font-semibold text-brand-600">+40 XP</span>
              </button>
            )}
          </div>
        </section>

        {nearby.length > 0 && (
          <section>
            <h2 className="text-[19px] font-bold tracking-[-0.02em]">Рядом</h2>
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
