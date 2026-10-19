'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { placeById } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { optimizeOrder, type RoutePoint } from '@/lib/routing';
import { MY_LOCATION, useRoute } from '@/store/route';

const here = (): Promise<RoutePoint | null> =>
  new Promise((resolve) => {
    if (!navigator.geolocation) return resolve(null);
    navigator.geolocation.getCurrentPosition(
      (p) => resolve({ id: MY_LOCATION, lat: p.coords.latitude, lng: p.coords.longitude, label: '' }),
      () => resolve(null),
      { enableHighAccuracy: true, timeout: 6000, maximumAge: 60_000 },
    );
  });

/** Entry points into the route planner from anywhere in the app. */
export function useRouteActions() {
  const router = useRouter();
  const { t, place } = useI18n();
  const { add, setStops, stops } = useRoute();
  const point = (id: string): RoutePoint | null => {
    const p = placeById(id);
    return p ? { id, lat: p.lat, lng: p.lng, label: place(id).name } : null;
  };

  return {
    inRoute: (id: string) => stops.some((s) => s.id === id),
    /** Append a place to the current route without leaving the screen. */
    addToRoute: (id: string) => {
      const p = point(id);
      if (!p) return;
      add(p);
      toast.success(t('route.added'), { action: { label: t('route.title'), onClick: () => router.push('/map/?route=1') } });
    },
    /** Directions from the traveller's position (or straight to the place if location is unavailable). */
    routeHere: async (id: string) => {
      const p = point(id);
      if (!p) return;
      toast(t('route.locating'));
      const me = await here();
      setStops(me ? [me, p] : [p]);
      router.push(`/map/?route=1&focus=${id}`);
    },
    /** A walk through a set of places in a sensible order. */
    routeThrough: (ids: string[]) => {
      const pts = ids.map(point).filter((x): x is RoutePoint => !!x);
      if (!pts.length) return;
      setStops(optimizeOrder(pts));
      router.push('/map/?route=1');
    },
  };
}
