'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Globe2, Hotel, Landmark, Layers, LocateFixed, Mountain, Search, SlidersHorizontal, Sparkles, Users, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';
import { CompassMark } from '@/components/journey';
import { MapCard } from '@/components/map/map-card';
import { SearchOverlay } from '@/components/map/search-overlay';
import { WorldMap, type MapMarker, type WorldMapHandle } from '@/components/map/world-map';
import { Sheet } from '@/components/sheet';
import { Chip } from '@/components/ui';
import { resolveItem } from '@/data';
import { destinations } from '@/data/destinations';
import { categoryColor, places } from '@/data/places';
import type { MapFilter } from '@/data/types';
import { useI18n } from '@/i18n/use';
import { WORLD_COUNTRIES } from '@/lib/countries';
import { cn, distanceKm } from '@/lib/utils';
import { useAllMeetups, useApp } from '@/store/app';
import { useUI } from '@/store/ui';

const filters: { value: Exclude<MapFilter, 'all'>; icon: typeof Landmark; color: string }[] = [
  { value: 'attraction', icon: Landmark, color: categoryColor.attraction },
  { value: 'food', icon: UtensilsCrossed, color: categoryColor.food },
  { value: 'hotel', icon: Hotel, color: categoryColor.hotel },
  { value: 'nature', icon: Mountain, color: categoryColor.nature },
  { value: 'meetups', icon: Users, color: '#ec4899' },
];

const CARD_INSET = 300;

export default function MapPage() {
  const mapRef = useRef<WorldMapHandle>(null);
  const carousel = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<MapFilter>('all');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [center, setCenter] = useState({ lat: 12, lng: 105 });
  const [searchOpen, setSearchOpen] = useState(false);
  const [layersOpen, setLayersOpen] = useState(false);
  const [country, setCountry] = useState<string | null>(null);
  const { visited, mapStyle, setMapStyle, streak, track } = useApp();
  const openSheet = useUI((s) => s.openSheet);
  const sheetOpen = useUI((s) => s.sheet !== null);
  const allMeetups = useAllMeetups();
  const scrollLock = useRef(false);
  const { t, tk, f, dest, place, meetupText } = useI18n();

  useEffect(() => {
    if (!sheetOpen) setCountry(null);
  }, [sheetOpen]);

  const markers = useMemo<MapMarker[]>(() => {
    if (filter === 'meetups')
      return allMeetups.map((m) => ({ id: m.id, lat: m.lat, lng: m.lng, image: m.image, kind: 'meetup', label: meetupText(m).title }));
    const dest_: MapMarker[] = destinations.map((d) => ({ id: d.id, lat: d.lat, lng: d.lng, image: d.image, kind: 'destination', label: dest(d.id).name, badgeColor: d.theme.accent }));
    const pl: MapMarker[] = places
      .filter((p) => filter === 'all' || p.category === filter)
      .map((p) => ({ id: p.id, lat: p.lat, lng: p.lng, image: p.image, kind: 'place', label: place(p.id).name, badgeColor: categoryColor[p.category] }));
    return [...dest_, ...pl];
  }, [filter, allMeetups, dest, place, meetupText]);

  const cards = useMemo(() => {
    const ids = filter === 'meetups' ? allMeetups.map((m) => m.id) : filter === 'all' ? destinations.map((d) => d.id) : places.filter((p) => p.category === filter).map((p) => p.id);
    const pos = (id: string) => allMeetups.find((x) => x.id === id) ?? resolveItem(id)!;
    return [...ids].sort((a, b) => distanceKm(center, pos(a)) - distanceKm(center, pos(b))).slice(0, 14);
  }, [filter, center, allMeetups]);

  const focus = useCallback(
    (id: string, fly = true) => {
      setActiveId(id);
      const m = allMeetups.find((x) => x.id === id);
      const target = m ?? resolveItem(id);
      if (!target) return;
      if (fly) {
        const zoom = m ? 11 : resolveItem(id)?.kind === 'place' ? 12 : (destinations.find((d) => d.id === id)?.zoom ?? 8);
        mapRef.current?.flyTo(target.lat, target.lng, Math.min(zoom, 10.5));
      }
      track('explore');
    },
    [allMeetups, track],
  );

  // Deep link: /map/?focus=<place or destination id>
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('focus');
    const target = id ? resolveItem(id) : undefined;
    if (!id || !target) return;
    setCenter({ lat: target.lat, lng: target.lng });
    const timer = setTimeout(() => focus(id), 900);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToCard = (id: string) => {
    const el = carousel.current?.querySelector<HTMLElement>(`[data-card="${id}"]`);
    if (!el || !carousel.current) return;
    scrollLock.current = true;
    carousel.current.scrollTo({ left: el.offsetLeft - 16, behavior: 'smooth' });
    setTimeout(() => (scrollLock.current = false), 600);
  };

  const onMarkerClick = (id: string) => {
    if (!cards.includes(id)) {
      const target = allMeetups.find((x) => x.id === id) ?? resolveItem(id);
      if (target) setCenter({ lat: target.lat, lng: target.lng });
    }
    focus(id);
    requestAnimationFrame(() => setTimeout(() => scrollToCard(id), 60));
  };

  // When the user swipes the carousel, follow the card that snaps into place.
  useEffect(() => {
    const el = carousel.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (scrollLock.current) return;
        const children = Array.from(el.querySelectorAll<HTMLElement>('[data-card]'));
        const mid = el.scrollLeft + 16;
        const closest = children.reduce((best, c) => (Math.abs(c.offsetLeft - mid) < Math.abs(best.offsetLeft - mid) ? c : best), children[0]!);
        const id = closest?.dataset.card;
        if (id && id !== activeId) focus(id);
      }, 140);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, [activeId, focus]);

  const locate = () => {
    if (!navigator.geolocation) return toast.error(t('map.locateUnavailable'));
    navigator.geolocation.getCurrentPosition(
      (p) => {
        mapRef.current?.showUser(p.coords.latitude, p.coords.longitude);
        mapRef.current?.flyTo(p.coords.latitude, p.coords.longitude, 9);
        setCenter({ lat: p.coords.latitude, lng: p.coords.longitude });
      },
      () => toast(t('map.locateFailed'), { description: t('map.locateFailedHint') }),
      { enableHighAccuracy: false, timeout: 8000 },
    );
  };

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0b1026]" style={{ ['--map-bottom-inset' as string]: `${CARD_INSET - 40}px` }}>
      <WorldMap
        ref={mapRef}
        markers={markers}
        activeId={activeId}
        visited={visited}
        mapStyle={mapStyle}
        selectedCountry={country}
        bottomInset={CARD_INSET}
        onMarkerClick={onMarkerClick}
        onCountryClick={(iso) => {
          setCountry(iso);
          openSheet({ type: 'country', code: iso });
        }}
        onUserMove={(c) => setCenter({ lat: c.lat, lng: c.lng })}
      />

      <div className="pt-safe pointer-events-none absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-black/30 to-transparent pb-8">
        <div className="pointer-events-auto flex items-center gap-2.5 px-4 pt-2">
          <button onClick={() => setSearchOpen(true)} className="press glass flex h-12 min-w-0 flex-1 items-center gap-2.5 rounded-full px-4 text-left shadow-float">
            <Search className="size-[18px] shrink-0 text-muted" strokeWidth={2.4} />
            <span className="truncate text-[15px] text-muted">{t('map.searchPlaceholder')}</span>
          </button>
          <Link href="/profile/?tab=route" aria-label={t('map.streak', { count: streak.count })} className="press glass flex h-12 shrink-0 items-center gap-1.5 rounded-full pl-1.5 pr-3.5 shadow-float">
            <CompassMark size={34} />
            <span className="text-[15px] font-bold">{streak.count}</span>
          </Link>
          <button aria-label={t('map.layers')} onClick={() => setLayersOpen(true)} className="press glass grid size-12 shrink-0 place-items-center rounded-full shadow-float">
            <SlidersHorizontal className="size-[18px]" strokeWidth={2.4} />
          </button>
        </div>
        <div className="no-scrollbar pointer-events-auto mt-3 flex gap-2 overflow-x-auto px-4 pb-1">
          <Chip active={filter === 'all'} onClick={() => (setFilter('all'), setActiveId(null))} icon={<Sparkles className="size-4" />}>
            {t('map.all')}
          </Chip>
          {filters.map((fl) => (
            <Chip
              key={fl.value}
              active={filter === fl.value}
              onClick={() => {
                setFilter(fl.value);
                setActiveId(null);
                carousel.current?.scrollTo({ left: 0 });
              }}
              icon={<fl.icon className="size-4" style={{ color: filter === fl.value ? undefined : fl.color }} />}
            >
              {fl.value === 'meetups' ? t('categories.meetups') : tk(`categories.${fl.value}Short`)}
            </Chip>
          ))}
        </div>
      </div>

      <div className="absolute right-4 z-10 flex flex-col gap-2.5" style={{ bottom: `calc(var(--safe-bottom) + ${CARD_INSET}px)` }}>
        <button aria-label={t('map.wholeWorld')} onClick={() => mapRef.current?.zoomOut()} className="press glass grid size-11 place-items-center rounded-full shadow-float">
          <Globe2 className="size-5" />
        </button>
        <button aria-label={t('map.myLocation')} onClick={locate} className="press glass grid size-11 place-items-center rounded-full shadow-float">
          <LocateFixed className="size-5" />
        </button>
      </div>

      <Link href="/passport/" className="press glass absolute left-4 z-10 flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3.5 shadow-float" style={{ bottom: `calc(var(--safe-bottom) + ${CARD_INSET}px)` }}>
        <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-brand to-violet text-[12px] font-black text-white">{visited.length}</span>
        <span className="text-[12px] font-semibold leading-tight">
          {t('map.worldOpened')}
          <br />
          <span className="text-brand-600">{f.percent(visited.length / WORLD_COUNTRIES)}</span>
        </span>
      </Link>

      <div className="absolute inset-x-0 z-10" style={{ bottom: 'calc(var(--safe-bottom) + 88px)' }}>
        <div ref={carousel} className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 pb-2 pt-2">
          <AnimatePresence initial={false} mode="popLayout">
            {cards.map((id) => (
              <motion.div key={`${filter}-${id}`} data-card={id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="w-[calc(100%-40px)] shrink-0 snap-start">
                <MapCard id={id} active={activeId === id} onFocus={() => focus(id)} />
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="w-1 shrink-0" />
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <SearchOverlay
            onClose={() => setSearchOpen(false)}
            onPick={(id, kind) => {
              setSearchOpen(false);
              if (kind === 'country') {
                setCountry(id);
                const d = destinations.find((x) => x.countryCode === id);
                if (d) mapRef.current?.flyTo(d.lat, d.lng, 5);
                openSheet({ type: 'country', code: id });
                return;
              }
              const target = resolveItem(id);
              if (!target) return;
              setFilter('all');
              setCenter({ lat: target.lat, lng: target.lng });
              focus(id);
            }}
          />
        )}
      </AnimatePresence>

      <Sheet open={layersOpen} onClose={() => setLayersOpen(false)} title={t('map.layersTitle')}>
        <div className="grid grid-cols-2 gap-3 px-5 pb-4">
          {(
            [
              { v: 'satellite', label: t('map.satellite'), bg: 'bg-[linear-gradient(135deg,#14532d,#0c4a6e_60%,#1e293b)]' },
              { v: 'light', label: t('map.scheme'), bg: 'bg-[linear-gradient(135deg,#f8fafc,#e0e7ff_60%,#cfe0f1)]' },
            ] as const
          ).map((o) => (
            <button key={o.v} onClick={() => setMapStyle(o.v)} className={cn('press overflow-hidden rounded-3xl text-left ring-1 ring-line', mapStyle === o.v && 'ring-[3px] ring-brand')}>
              <div className={cn('grid h-24 place-items-center', o.bg)}>
                <Layers className={cn('size-7', o.v === 'satellite' ? 'text-white/80' : 'text-brand')} />
              </div>
              <p className="px-4 py-3 text-[15px] font-semibold">{o.label}</p>
            </button>
          ))}
        </div>
        <div className="mx-5 mb-6 flex items-center gap-3 rounded-2xl bg-brand-50 p-3.5 text-[13px] text-brand-700">
          <span className="size-3 shrink-0 rounded-sm bg-brand/60" />
          {t('map.layersHint')}
        </div>
      </Sheet>
    </div>
  );
}
