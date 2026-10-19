'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Box, Camera, Gem, Globe2, Hotel, Landmark, Layers, LocateFixed, MapPinned, Minus, Mountain, Navigation2, Plus, Route, Search, SlidersHorizontal, Sparkles, Users, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';
import { CompassMark } from '@/components/journey';
import { MapCard } from '@/components/map/map-card';
import { RoutePanel, useRouteResult } from '@/components/map/route-panel';
import { SearchOverlay } from '@/components/map/search-overlay';
import { WorldMap, type MapDot, type MapMarker, type MapView, type WorldMapHandle } from '@/components/map/world-map';
import { Sheet } from '@/components/sheet';
import { SPOT_STYLE } from '@/components/spot-badge';
import { Chip } from '@/components/ui';
import { resolveItem } from '@/data';
import { categoryColor, citiesIn, destinationById, destinations, places } from '@/data/catalog';
import type { Destination, Place } from '@/data/types';
import { useI18n } from '@/i18n/use';
import { WORLD_COUNTRIES } from '@/lib/countries';
import { cn, distanceKm } from '@/lib/utils';
import { useAllMeetups, useApp } from '@/store/app';
import { useRoute } from '@/store/route';
import { useUI } from '@/store/ui';

type Filter = 'all' | 'cities' | 'sights' | 'insta' | 'hidden' | 'food' | 'nature' | 'hotels' | 'meetups';

const FILTERS: { value: Exclude<Filter, 'all'>; icon: typeof Landmark; color: string }[] = [
  { value: 'cities', icon: MapPinned, color: '#4f46e5' },
  { value: 'sights', icon: Landmark, color: categoryColor.attraction },
  { value: 'insta', icon: Camera, color: SPOT_STYLE.insta.color },
  { value: 'hidden', icon: Gem, color: SPOT_STYLE.hidden.color },
  { value: 'food', icon: UtensilsCrossed, color: categoryColor.food },
  { value: 'nature', icon: Mountain, color: categoryColor.nature },
  { value: 'hotels', icon: Hotel, color: categoryColor.hotel },
  { value: 'meetups', icon: Users, color: '#ec4899' },
];

const CARD_INSET = 300;
/** Photo pins are DOM nodes: keep them to what fits on screen, the rest are GPU dots. */
const MAX_PINS = 40;

const matches = (p: Place, f: Filter) =>
  f === 'all'
    ? true
    : f === 'sights'
      ? p.category === 'attraction' && !p.spot
      : f === 'insta' || f === 'hidden'
        ? p.spot === f
        : f === 'food'
          ? p.category === 'food'
          : f === 'nature'
            ? p.category === 'nature'
            : f === 'hotels'
              ? p.category === 'hotel'
              : false;

const placeColor = (p: Place) => (p.spot ? SPOT_STYLE[p.spot].color : categoryColor[p.category]);
const score = (x: { rating: number; reviews: number }) => x.rating * Math.log10(x.reviews + 10);

function inBounds(p: { lat: number; lng: number }, [w, s, e, n]: MapView['bounds']) {
  if (p.lat < s || p.lat > n) return false;
  return w <= e ? p.lng >= w && p.lng <= e : p.lng >= w || p.lng <= e;
}

export default function MapPage() {
  const mapRef = useRef<WorldMapHandle>(null);
  const carousel = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<Filter>('all');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [center, setCenter] = useState({ lat: 12, lng: 105 });
  const [view, setView] = useState<MapView | null>(null);
  const [bearing, setBearing] = useState({ bearing: 0, pitch: 0 });
  const [searchOpen, setSearchOpen] = useState(false);
  const [layersOpen, setLayersOpen] = useState(false);
  const [country, setCountry] = useState<string | null>(null);
  const { visited, mapStyle, setMapStyle, streak, track } = useApp();
  const openSheet = useUI((s) => s.openSheet);
  const sheetOpen = useUI((s) => s.sheet !== null);
  const allMeetups = useAllMeetups();
  const scrollLock = useRef(false);
  const route = useRoute();
  const { result, loading } = useRouteResult();
  const { t, f, dest, place, meetupText, version } = useI18n();

  useEffect(() => {
    if (!sheetOpen) setCountry(null);
  }, [sheetOpen]);

  const filteredPlaces = useMemo(() => (filter === 'cities' || filter === 'meetups' ? [] : places.filter((p) => matches(p, filter))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filter, version]);
  const showCities = filter === 'all' || filter === 'cities';

  // What gets a photo pin: the best-rated things inside the viewport, cities first when zoomed out.
  const { markers, dots } = useMemo(() => {
    if (filter === 'meetups') {
      return { markers: allMeetups.map((m): MapMarker => ({ id: m.id, lat: m.lat, lng: m.lng, image: m.image, kind: 'meetup', label: meetupText(m).title })), dots: [] as MapDot[] };
    }
    const zoom = view?.zoom ?? 2;
    const visible = <T extends { lat: number; lng: number }>(list: T[]) => (view ? list.filter((x) => inBounds(x, view.bounds)) : list);
    const cityPins: Destination[] = showCities ? [...visible(destinations)].sort((a, b) => score(b) - score(a)).slice(0, zoom < 5 ? MAX_PINS : 12) : [];
    const placePins: Place[] = zoom >= 5 || filter !== 'all' ? [...visible(filteredPlaces)].sort((a, b) => score(b) - score(a)).slice(0, MAX_PINS - cityPins.length / 2) : [];
    const pinned = new Set([...cityPins.map((d) => d.id), ...placePins.map((p) => p.id)]);
    if (activeId && !pinned.has(activeId)) {
      const d = destinationById(activeId);
      const p = places.find((x) => x.id === activeId);
      if (d) cityPins.push(d);
      else if (p) placePins.push(p);
      pinned.add(activeId);
    }
    const markers: MapMarker[] = [
      ...cityPins.map((d): MapMarker => ({ id: d.id, lat: d.lat, lng: d.lng, image: d.image, kind: 'destination', label: dest(d.id).name, badgeColor: d.theme.accent })),
      ...placePins.map((p): MapMarker => ({ id: p.id, lat: p.lat, lng: p.lng, image: p.image, kind: 'place', label: place(p.id).name, badgeColor: placeColor(p), spot: p.spot })),
    ];
    const dots: MapDot[] = [
      ...(showCities ? destinations.filter((d) => !pinned.has(d.id)).map((d) => ({ id: d.id, lat: d.lat, lng: d.lng, color: d.theme.accent })) : []),
      ...filteredPlaces.filter((p) => !pinned.has(p.id)).map((p) => ({ id: p.id, lat: p.lat, lng: p.lng, color: placeColor(p) })),
    ];
    return { markers, dots };
  }, [filter, view, filteredPlaces, showCities, allMeetups, activeId, dest, place, meetupText]);

  const cards = useMemo(() => {
    const pool: { id: string; lat: number; lng: number }[] =
      filter === 'meetups' ? allMeetups : [...(filter === 'all' || filter === 'cities' ? destinations : []), ...(filter === 'cities' ? [] : filteredPlaces)];
    return [...pool].sort((a, b) => distanceKm(center, a) - distanceKm(center, b)).slice(0, 14).map((x) => x.id);
  }, [filter, center, allMeetups, filteredPlaces]);

  const focus = useCallback(
    (id: string, fly = true) => {
      setActiveId(id);
      const m = allMeetups.find((x) => x.id === id);
      const target = m ?? resolveItem(id);
      if (!target) return;
      if (fly) {
        const zoom = m ? 13 : resolveItem(id)?.kind === 'place' ? 14 : (destinationById(id)?.zoom ?? 9);
        mapRef.current?.flyTo(target.lat, target.lng, zoom);
      }
      track('explore');
    },
    [allMeetups, track],
  );

  // Deep links: ?focus=<id>, ?country=<ISO>, ?route=1
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (q.get('route')) route.setOpen(true);
    const code = q.get('country');
    if (code) {
      const cities = citiesIn(code);
      setCountry(code);
      if (cities[0]) setCenter({ lat: cities[0].lat, lng: cities[0].lng });
      const timer = setTimeout(() => mapRef.current?.fitPoints(cities, 7), 900);
      return () => clearTimeout(timer);
    }
    const id = q.get('focus');
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
    if (route.open) route.setOpen(false);
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
  }, [activeId, focus, route.open]);

  const locate = () => {
    if (!navigator.geolocation) return toast.error(t('map.locateUnavailable'));
    navigator.geolocation.getCurrentPosition(
      (p) => {
        mapRef.current?.showUser(p.coords.latitude, p.coords.longitude);
        mapRef.current?.flyTo(p.coords.latitude, p.coords.longitude, 14);
        setCenter({ lat: p.coords.latitude, lng: p.coords.longitude });
      },
      () => toast(t('map.locateFailed'), { description: t('map.locateFailedHint') }),
      { enableHighAccuracy: true, timeout: 8000 },
    );
  };

  const routeOverlay = useMemo(
    () => (route.stops.length ? { line: result?.geometry ?? [], stops: route.stops.map((s) => ({ lat: s.lat, lng: s.lng, label: s.label })), approximate: result?.approximate } : null),
    [route.stops, result],
  );
  const fitRoute = useCallback(() => mapRef.current?.fitPoints(useRoute.getState().stops, 15), []);
  const rotated = Math.abs(bearing.bearing) > 1 || bearing.pitch > 5;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0b1026]" style={{ ['--map-bottom-inset' as string]: `${CARD_INSET - 40}px` }}>
      <WorldMap
        ref={mapRef}
        markers={markers}
        dots={dots}
        route={routeOverlay}
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
        onViewChange={setView}
        onBearing={(b, p) => setBearing({ bearing: b, pitch: p })}
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
          {FILTERS.map((fl) => (
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
              {t(`mapx.${fl.value}`)}
            </Chip>
          ))}
        </div>
      </div>

      <div className="absolute right-4 z-10 flex flex-col gap-2" style={{ bottom: `calc(var(--safe-bottom) + ${CARD_INSET}px)` }}>
        <AnimatePresence>
          {rotated && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              aria-label={t('mapx.north')}
              onClick={() => mapRef.current?.resetNorth()}
              className="press glass grid size-11 place-items-center rounded-full shadow-float"
            >
              <Navigation2 className="size-5 fill-rose text-rose" style={{ transform: `rotate(${-bearing.bearing}deg)` }} />
            </motion.button>
          )}
        </AnimatePresence>
        <div className="glass flex flex-col overflow-hidden rounded-full shadow-float">
          <button aria-label={t('mapx.zoomIn')} onClick={() => mapRef.current?.zoomBy(1)} className="press grid size-11 place-items-center">
            <Plus className="size-5" />
          </button>
          <span className="mx-2.5 h-px bg-line" />
          <button aria-label={t('mapx.zoomOut')} onClick={() => mapRef.current?.zoomBy(-1)} className="press grid size-11 place-items-center">
            <Minus className="size-5" />
          </button>
        </div>
        <button aria-label={t('mapx.tilt')} onClick={() => mapRef.current?.toggleTilt()} className={cn('press glass grid size-11 place-items-center rounded-full shadow-float', bearing.pitch > 5 && 'text-brand')}>
          <Box className="size-5" />
        </button>
        <button aria-label={t('map.wholeWorld')} onClick={() => mapRef.current?.zoomOut()} className="press glass grid size-11 place-items-center rounded-full shadow-float">
          <Globe2 className="size-5" />
        </button>
        <button aria-label={t('map.myLocation')} onClick={locate} className="press glass grid size-11 place-items-center rounded-full shadow-float">
          <LocateFixed className="size-5" />
        </button>
      </div>

      <div className="absolute left-4 z-10 flex flex-col items-start gap-2" style={{ bottom: `calc(var(--safe-bottom) + ${CARD_INSET}px)` }}>
        <button
          onClick={() => route.setOpen(!route.open)}
          className={cn('press glass flex h-11 items-center gap-2 rounded-full pl-3 pr-4 text-[13px] font-semibold shadow-float', route.open && 'text-[#2563eb]')}
        >
          <Route className="size-[18px]" /> {t('mapx.route')}
          {route.stops.length > 0 && <span className="grid size-5 place-items-center rounded-full bg-[#2563eb] text-[11px] font-black text-white">{route.stops.length}</span>}
        </button>
        <Link href="/passport/" className="press glass flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3.5 shadow-float">
          <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-brand to-violet text-[12px] font-black text-white">{visited.length}</span>
          <span className="text-[12px] font-semibold leading-tight">
            {t('map.worldOpened')}
            <br />
            <span className="text-brand-600">{f.percent(visited.length / WORLD_COUNTRIES)}</span>
          </span>
        </Link>
      </div>

      <div className="absolute inset-x-0 z-10" style={{ bottom: 'calc(var(--safe-bottom) + 88px)' }}>
        <AnimatePresence mode="wait">
          {route.open ? (
            <RoutePanel key="route" result={result} loading={loading} onFit={fitRoute} />
          ) : (
            <motion.div key="cards" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <SearchOverlay
            onClose={() => setSearchOpen(false)}
            onPick={(id, kind) => {
              setSearchOpen(false);
              if (kind === 'country') {
                setCountry(id);
                mapRef.current?.fitPoints(citiesIn(id), 7);
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
              { v: 'satellite', label: t('map.satellite'), hint: t('mapx.labels'), bg: 'bg-[linear-gradient(135deg,#14532d,#0c4a6e_60%,#1e293b)]' },
              { v: 'light', label: t('map.scheme'), hint: t('mapx.streets'), bg: 'bg-[linear-gradient(135deg,#f8fafc,#e0e7ff_60%,#cfe0f1)]' },
            ] as const
          ).map((o) => (
            <button key={o.v} onClick={() => setMapStyle(o.v)} className={cn('press overflow-hidden rounded-3xl text-left ring-1 ring-line', mapStyle === o.v && 'ring-[3px] ring-brand')}>
              <div className={cn('grid h-24 place-items-center', o.bg)}>
                <Layers className={cn('size-7', o.v === 'satellite' ? 'text-white/80' : 'text-brand')} />
              </div>
              <p className="px-4 pt-3 text-[15px] font-semibold">{o.label}</p>
              <p className="px-4 pb-3 text-[11px] leading-snug text-muted">{o.hint}</p>
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
