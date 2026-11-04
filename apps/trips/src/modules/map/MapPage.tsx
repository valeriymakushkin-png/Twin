import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { NetPill } from '../../App';
import { todayIso } from '../../core/dates';
import { db, type ItineraryItem } from '../../core/db';
import { fill, plural, pluralWord, ru } from '../../core/strings';
import { useLocator } from '../../core/useCities';
import { Button, Chip, Empty, Icon } from '../../core/ui';
import { countryFlag, countryName } from '../../data/countries';
import { computeTravel, tripYears } from './stats';
import { useHomeCity } from './home';
import { ShareCardSheet } from './ShareCardSheet';
import { WorldMapView } from './WorldMapView';
import { loadWorld, type World } from './world';

const nf = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 });

/** «Моя карта»: закрашенные посещённые страны, города и места значками и счётчики путешествий. */
export function MapPage() {
  const trips = useLiveQuery(() => db.trips.orderBy('startDate').reverse().toArray(), []);
  const items = useLiveQuery(() => db.items.toArray(), []);
  const locate = useLocator();
  const homeCity = useHomeCity();
  const [world, setWorld] = useState<World | null>(null);
  const [year, setYear] = useState<number | 'all'>('all');
  const [country, setCountry] = useState<string | null>(null);
  const [pinId, setPinId] = useState<string | null>(null);
  const [sharing, setSharing] = useState(false);
  useEffect(() => void loadWorld().then(setWorld), []);

  const byTrip = useMemo(() => {
    const m = new Map<string, ItineraryItem[]>();
    for (const i of items ?? []) m.set(i.tripId, [...(m.get(i.tripId) ?? []), i]);
    return m;
  }, [items]);

  const stats = useMemo(
    () => computeTravel(trips ?? [], (id) => byTrip.get(id) ?? [], locate ?? (() => undefined), todayIso(), { year: year === 'all' ? undefined : year, home: homeCity ?? undefined }),
    [trips, byTrip, locate, year, homeCity],
  );
  const years = useMemo(() => tripYears(trips ?? []), [trips]);
  const visited = useMemo(() => new Set(stats.countries), [stats.countries]);
  const planned = useMemo(() => new Set(stats.plannedCountries), [stats.plannedCountries]);
  const pin = stats.pins.find((p) => p.id === pinId);
  const inCountry = (trips ?? []).filter((t) => t.countryCode === country && (year === 'all' || t.startDate.startsWith(String(year))));
  const withoutPoint = stats.cities.filter((c) => !c.point).length;
  const shareData = useMemo(
    () =>
      world
        ? {
            world,
            visited,
            cities: stats.pins.filter((p) => p.kind === 'city' && !p.planned).map((p) => ({ lat: p.lat, lng: p.lng })),
            countries: stats.countries.length,
            cityCount: stats.cities.length,
            km: stats.km,
            period: year === 'all' ? ru.map.allTime : String(year),
            eyebrow: year === 'all' ? ru.map.eyebrowAll : ru.map.eyebrowYear,
          }
        : null,
    [world, visited, stats, year],
  );

  return (
    <>
      <header className="topbar">
        <h1>{ru.map.title}</h1>
        <NetPill />
      </header>
      <main className="content">
        {trips && trips.length === 0 ? (
          <Empty icon="globe" title={ru.map.empty} text={ru.map.emptyText} />
        ) : (
          <>
            {years.length > 1 && (
              <div className="cat-row" style={{ marginBottom: 10 }}>
                <Chip active={year === 'all'} onClick={() => setYear('all')}>
                  {ru.map.allTime}
                </Chip>
                {years.map((y) => (
                  <Chip key={y} active={year === y} onClick={() => setYear(y)}>
                    {y}
                  </Chip>
                ))}
              </div>
            )}

            {world ? (
              <WorldMapView world={world} visited={visited} planned={planned} pins={stats.pins} selected={country} onSelect={setCountry} selectedPin={pinId} onSelectPin={setPinId} />
            ) : (
              <div className="worldmap" style={{ aspectRatio: '1000 / 520', display: 'grid', placeItems: 'center' }}>
                <span className="muted">{ru.map.loading}</span>
              </div>
            )}
            <div className="legend">
              <span>
                <i style={{ background: 'var(--brand)' }} />
                {ru.map.visited}
              </span>
              <span>
                <i style={{ background: 'color-mix(in srgb, var(--brand) 35%, var(--surface-2))' }} />
                {ru.map.planned}
              </span>
              <span>
                <i style={{ background: '#fbbf24', borderRadius: '50%' }} />
                {ru.map.legendCities}
              </span>
            </div>

            {(country || pin) && (
              <section className="section" style={{ marginTop: 12 }} aria-live="polite">
                {pin && (
                  <p>
                    <b>{pin.label}</b>
                    {pin.kind === 'city' && pin.count > 0 && <span className="muted"> · {plural(pin.count, ru.map.places)}</span>}
                  </p>
                )}
                {country && (
                  <>
                    <h3>
                      {countryFlag(country)} {countryName(country)}
                    </h3>
                    {inCountry.length === 0 ? (
                      <p className="muted">—</p>
                    ) : (
                      inCountry.map((t) => (
                        <p key={t.id} style={{ marginTop: 6 }}>
                          <Link to={`/trip/${t.id}`}>{t.name}</Link>
                        </p>
                      ))
                    )}
                  </>
                )}
              </section>
            )}

            <div className="counters" role="group" aria-label={ru.map.title}>
              <div className="counter">
                <b>{stats.countries.length}</b>
                <span>{pluralWord(stats.countries.length, ru.map.countries)}</span>
              </div>
              <div className="counter">
                <b>{stats.cities.length}</b>
                <span>{pluralWord(stats.cities.length, ru.map.cities)}</span>
              </div>
              <div className="counter">
                <b>{nf.format(stats.km)}</b>
                <span>{ru.map.km}</span>
              </div>
            </div>
            <p className="muted" style={{ fontSize: 12.5 }}>
              {homeCity ? fill(ru.map.kmNoteHome, { city: homeCity.name, home: nf.format(stats.homeKm) }) : ru.map.kmNote}{' '}
              {homeCity === null && <Link to="/settings">{ru.map.homeLink}</Link>}
            </p>
            {withoutPoint > 0 && <p className="muted" style={{ fontSize: 12.5, marginTop: 6 }}>{fill(ru.map.noCoordsNote, {})}</p>}

            {stats.countries.length > 0 && world && (
              <Button className="btn-block" style={{ marginTop: 12 }} onClick={() => setSharing(true)}>
                <Icon name="share" /> {ru.map.share}
              </Button>
            )}

            {stats.countries.length > 0 && (
              <section className="section" style={{ marginTop: 14 }}>
                <h3 style={{ marginBottom: 8 }}>{ru.map.visited}</h3>
                <div className="chips">
                  {stats.countries.map((c) => (
                    <button key={c} type="button" className="chip" style={{ border: 0 }} onClick={() => setCountry(c === country ? null : c)}>
                      {countryFlag(c)} {countryName(c)}
                    </button>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>
      {shareData && (
        <ShareCardSheet
          open={sharing}
          onClose={() => setSharing(false)}
          fileTag={String(year)}
          data={shareData}
        />
      )}
    </>
  );
}
