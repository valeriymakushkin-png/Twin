import { useLiveQuery } from 'dexie-react-hooks';
import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NetPill } from '../../App';
import { countryFlag, countryName } from '../../data/countries';
import { formatRange, daysBetween } from '../../core/dates';
import { db, type Trip } from '../../core/db';
import { useObjectUrl } from '../../core/hooks';
import { plural, ru } from '../../core/strings';
import { Button, Empty, Icon } from '../../core/ui';
import { TripForm } from './TripForm';

function TripCard({ trip, places }: { trip: Trip; places: number }) {
  const cover = useLiveQuery(() => (trip.coverPhotoId ? db.photos.get(trip.coverPhotoId) : undefined), [trip.coverPhotoId]);
  const url = useObjectUrl(cover?.blob);
  const days = daysBetween(trip.startDate, trip.endDate) + 1;
  return (
    <Link to={`/trip/${trip.id}`} className="trip-card">
      {url && <img src={url} alt="" />}
      <span className="flag" aria-hidden="true">
        {countryFlag(trip.countryCode)}
      </span>
      <div className="trip-card-body">
        <h2>{trip.name}</h2>
        <p>
          {countryName(trip.countryCode)} · {formatRange(trip.startDate, trip.endDate)}
        </p>
        <p>
          {plural(days, ru.trips.days)} · {plural(places, ru.trips.places)}
        </p>
      </div>
    </Link>
  );
}

export function TripsPage() {
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);
  const trips = useLiveQuery(() => db.trips.orderBy('startDate').reverse().toArray(), []);
  const items = useLiveQuery(() => db.items.toArray(), []);
  const counts = useMemo(() => {
    const m = new Map<string, number>();
    for (const i of items ?? []) m.set(i.tripId, (m.get(i.tripId) ?? 0) + 1);
    return m;
  }, [items]);

  return (
    <>
      <header className="topbar">
        <h1>{ru.trips.title}</h1>
        <NetPill />
      </header>
      <main className="content">
        {trips && trips.length === 0 && (
          <Empty
            icon="suitcase"
            title={ru.trips.empty}
            text={ru.trips.emptyText}
            action={
              <Button onClick={() => setCreating(true)}>
                <Icon name="plus" /> {ru.trips.create}
              </Button>
            }
          />
        )}
        <div className="trip-list">
          {trips?.map((t) => (
            <TripCard key={t.id} trip={t} places={counts.get(t.id) ?? 0} />
          ))}
        </div>
      </main>
      {trips && trips.length > 0 && (
        <button className="fab" onClick={() => setCreating(true)} aria-label={ru.trips.create}>
          <Icon name="plus" size={26} />
        </button>
      )}
      <TripForm open={creating} onClose={() => setCreating(false)} onSaved={(id) => navigate(`/trip/${id}`)} />
    </>
  );
}
