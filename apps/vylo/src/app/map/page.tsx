'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Globe2, Hotel, Layers, LocateFixed, Mountain, Search, SlidersHorizontal, Sparkles, Users, UtensilsCrossed, Landmark } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';
import { MapCard } from '@/components/map/map-card';
import { SearchOverlay } from '@/components/map/search-overlay';
import { WorldMap, type MapMarker, type WorldMapHandle } from '@/components/map/world-map';
import { Flame } from '@/components/celebrations';
import { Sheet } from '@/components/sheet';
import { Chip } from '@/components/ui';
import { resolveItem } from '@/data';
import { destinations } from '@/data/destinations';
import { categoryMeta, places } from '@/data/places';
import { userById } from '@/data/social';
import type { MapFilter } from '@/data/types';
import { WORLD_COUNTRIES } from '@/lib/countries';
import { cn, distanceKm } from '@/lib/utils';
import { useAllMeetups, useApp } from '@/store/app';
import { useUI } from '@/store/ui';

const filters: { value: MapFilter; label: string; icon: typeof Landmark; color: string }[] = [
  { value: 'attraction', label: 'Места', icon: Landmark, color: '#6366f1' },
  { value: 'food', label: 'Еда', icon: UtensilsCrossed, color: '#f59e0b' },
  { value: 'hotel', label: 'Отели', icon: Hotel, color: '#0ea5e9' },
  { value: 'nature', label: 'Природа', icon: Mountain, color: '#10b981' },
  { value: 'meetups', label: 'Встречи', icon: Users, color: '#ec4899' },
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

  useEffect(() => {
    if (!sheetOpen) setCountry(null);
  }, [sheetOpen]);

  const markers = useMemo<MapMarker[]>(() => {
    if (filter === 'meetups')
      return allMeetups.map((m) => ({ id: m.id, lat: m.lat, lng: m.lng, image: m.hostId === 'me' ? m.image : (userById(m.hostId)?.avatar ?? m.image), kind: 'meetup', label: m.title }));
    const dest: MapMarker[] = destinations.map((d) => ({ id: d.id, lat: d.lat, lng: d.lng, image: d.image, kind: 'destination', label: d.name }));
    const pl: MapMarker[] = places
      .filter((p) => filter === 'all' || p.category === filter)
      .map((p) => ({ id: p.id, lat: p.lat, lng: p.lng, image: p.image, kind: 'place', label: p.name, badgeColor: categoryMeta[p.category].color }));
    return [...dest, ...pl];
  }, [filter, allMeetups]);

  const cards = useMemo(() => {
    const ids =
      filter === 'meetups'
        ? allMeetups.map((m) => m.id)
        : filter === 'all'
          ? destinations.map((d) => d.id)
          : places.filter((p) => p.category === filter).map((p) => p.id);
    const pos = (id: string) => {
      const m = allMeetups.find((x) => x.id === id);
      if (m) return m;
      return resolveItem(id)!;
    };
    return [...ids].sort((a, b) => distanceKm(center, pos(a)) - distanceKm(center, pos(b))).slice(0, 14);
  }, [filter, center, allMeetups]);

  const focus = useCallback(
    (id: string, fly = true) => {
      setActiveId(id);
      const m = allMeetups.find((x) => x.id === id);
      const item = m ?? resolveItem(id);
      if (!item) return;
      if (fly) {
        const zoom = m ? 11 : resolveItem(id)?.kind === 'place' ? 12 : (destinations.find((d) => d.id === id)?.zoom ?? 8);
        mapRef.current?.flyTo(item.lat, item.lng, Math.min(zoom, 10.5));
      }
      track('explore');
    },
    [allMeetups, track],
  );

  // Deep link: /map/?focus=<place or destination id>
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('focus');
    const item = id ? resolveItem(id) : undefined;
    if (!id || !item) return;
    setCenter({ lat: item.lat, lng: item.lng });
    const t = setTimeout(() => focus(id), 900);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll the carousel to a card when a pin is tapped.
  const scrollToCard = (id: string) => {
    const el = carousel.current?.querySelector<HTMLElement>(`[data-card="${id}"]`);
    if (!el || !carousel.current) return;
    scrollLock.current = true;
    carousel.current.scrollTo({ left: el.offsetLeft - 16, behavior: 'smooth' });
    setTimeout(() => (scrollLock.current = false), 600);
  };

  const onMarkerClick = (id: string) => {
    if (!cards.includes(id)) {
      const item = allMeetups.find((x) => x.id === id) ?? resolveItem(id);
      if (item) setCenter({ lat: item.lat, lng: item.lng });
    }
    focus(id);
    requestAnimationFrame(() => setTimeout(() => scrollToCard(id), 60));
  };

  // When the user swipes the carousel, follow the card that snaps into place.
  useEffect(() => {
    const el = carousel.current;
    if (!el) return;
    let t: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(t);
      t = setTimeout(() => {
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
      clearTimeout(t);
    };
  }, [activeId, focus]);

  const locate = () => {
    if (!navigator.geolocation) return toast.error('Геолокация недоступна');
    navigator.geolocation.getCurrentPosition(
      (p) => {
        mapRef.current?.showUser(p.coords.latitude, p.coords.longitude);
        mapRef.current?.flyTo(p.coords.latitude, p.coords.longitude, 9);
        setCenter({ lat: p.coords.latitude, lng: p.coords.longitude });
      },
      () => toast('Не удалось определить местоположение', { description: 'Разрешите доступ к геолокации в настройках браузера' }),
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

      {/* Top controls */}
      <div className="pt-safe pointer-events-none absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-black/30 to-transparent pb-8">
        <div className="pointer-events-auto flex items-center gap-2.5 px-4 pt-2">
          <button onClick={() => setSearchOpen(true)} className="press glass flex h-12 flex-1 items-center gap-2.5 rounded-full px-4 text-left shadow-float">
            <Search className="size-[18px] text-muted" strokeWidth={2.4} />
            <span className="text-[15px] text-muted">Места, города, страны</span>
          </button>
          <Link href="/profile/?tab=quests" aria-label={`Серия ${streak.count} дней`} className="press glass flex h-12 items-center gap-1 rounded-full pl-2 pr-3.5 shadow-float">
            <Flame size={26} />
            <span className="text-[15px] font-bold">{streak.count}</span>
          </Link>
          <button aria-label="Слои карты" onClick={() => setLayersOpen(true)} className="press glass grid size-12 place-items-center rounded-full shadow-float">
            <SlidersHorizontal className="size-[18px]" strokeWidth={2.4} />
          </button>
        </div>
        <div className="no-scrollbar pointer-events-auto mt-3 flex gap-2 overflow-x-auto px-4 pb-1">
          <Chip active={filter === 'all'} onClick={() => (setFilter('all'), setActiveId(null))} icon={<Sparkles className="size-4" />}>
            Всё
          </Chip>
          {filters.map((f) => (
            <Chip
              key={f.value}
              active={filter === f.value}
              onClick={() => {
                setFilter(f.value);
                setActiveId(null);
                carousel.current?.scrollTo({ left: 0 });
              }}
              icon={<f.icon className="size-4" style={{ color: filter === f.value ? undefined : f.color }} />}
            >
              {f.label}
            </Chip>
          ))}
        </div>
      </div>

      {/* Right rail */}
      <div className="absolute right-4 z-10 flex flex-col gap-2.5" style={{ bottom: `calc(var(--safe-bottom) + ${CARD_INSET}px)` }}>
        <button aria-label="Весь мир" onClick={() => mapRef.current?.zoomOut()} className="press glass grid size-11 place-items-center rounded-full shadow-float">
          <Globe2 className="size-5" />
        </button>
        <button aria-label="Моё местоположение" onClick={locate} className="press glass grid size-11 place-items-center rounded-full shadow-float">
          <LocateFixed className="size-5" />
        </button>
      </div>

      {/* Passport progress */}
      <Link
        href="/passport/"
        className="press glass absolute left-4 z-10 flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3.5 shadow-float"
        style={{ bottom: `calc(var(--safe-bottom) + ${CARD_INSET}px)` }}
      >
        <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-brand to-violet text-[12px] font-black text-white">{visited.length}</span>
        <span className="text-[12px] font-semibold leading-tight">
          Мир открыт
          <br />
          <span className="text-brand-600">{((visited.length / WORLD_COUNTRIES) * 100).toFixed(1)}%</span>
        </span>
      </Link>

      {/* Cards */}
      <div className="absolute inset-x-0 z-10" style={{ bottom: 'calc(var(--safe-bottom) + 88px)' }}>
        <div ref={carousel} className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 pb-2 pt-2">
          <AnimatePresence initial={false} mode="popLayout">
            {cards.map((id) => (
              <motion.div
                key={`${filter}-${id}`}
                data-card={id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="w-[calc(100%-40px)] shrink-0 snap-start"
              >
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
              const item = resolveItem(id);
              if (!item) return;
              setFilter('all');
              setCenter({ lat: item.lat, lng: item.lng });
              focus(id);
            }}
          />
        )}
      </AnimatePresence>

      <Sheet open={layersOpen} onClose={() => setLayersOpen(false)} title="Вид карты">
        <div className="grid grid-cols-2 gap-3 px-5 pb-4">
          {(
            [
              { v: 'satellite', label: 'Спутник', bg: 'bg-[linear-gradient(135deg,#14532d,#0c4a6e_60%,#1e293b)]' },
              { v: 'light', label: 'Схема', bg: 'bg-[linear-gradient(135deg,#f8fafc,#e0e7ff_60%,#cfe0f1)]' },
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
          Страны, где вы были, подсвечены на карте. Нажмите на страну, чтобы узнать про визу или отметить её.
        </div>
      </Sheet>
    </div>
  );
}
