import { useEffect, useState } from 'react';
import { db, type Trip } from '../../core/db';
import { ru } from '../../core/strings';
import { toast } from '../../core/toast';
import { Field, Sheet } from '../../core/ui';
import { normalizeName } from '../../data/cities';
import { useCityCandidates, type CityCandidate } from './useCityCandidates';

/** Уточнение города поездки: выбрать из списка (и интернета) нужный — с верной страной и координатами. */
export function CityPickerSheet({ trip, city, onClose }: { trip: Trip; city: string | null; onClose: () => void }) {
  const [query, setQuery] = useState('');
  useEffect(() => setQuery(city ?? ''), [city]);
  const cand = useCityCandidates(query, { enabled: city !== null, country: trip.countryCode, limit: 8, alwaysOnline: true });

  const pick = async (c: CityCandidate) => {
    if (!city) return;
    const fresh = await db.trips.get(trip.id);
    if (!fresh) return;
    const same = (x: { name: string }) => normalizeName(x.name) === normalizeName(city);
    const entry = { name: fresh.cities.find(same)?.name ?? city, lat: c.lat, lng: c.lng, cc: c.cc };
    const cities = fresh.cities.some(same) ? fresh.cities.map((x) => (same(x) ? entry : x)) : [...fresh.cities, entry];
    await db.trips.update(trip.id, { cities, updatedAt: Date.now() });
    toast(ru.trips.check.cityUpdated);
    onClose();
  };

  return (
    <Sheet open={city !== null} onClose={onClose} title={ru.trips.check.pickTitle}>
      <p className="muted" style={{ marginBottom: 12 }}>{ru.trips.check.pickHint}</p>
      <Field label={ru.trips.cities}>
        <input className="input" value={query} onChange={(e) => setQuery(e.target.value)} maxLength={60} autoComplete="off" />
      </Field>
      <ul className="suggest static" role="listbox" aria-label={ru.trips.check.pickTitle}>
        {cand.items.map((c) => (
          <li key={c.key}>
            <button type="button" role="option" onClick={() => void pick(c)}>
              <b>{c.label}</b>
              <small>
                {c.sub}
                {c.source === 'web' ? ` · ${ru.trips.fromWeb}` : ''}
              </small>
            </button>
          </li>
        ))}
        {cand.searching && <li className="suggest-note">{ru.trips.searchingWeb}</li>}
        {!cand.searching && cand.items.length === 0 && query.trim().length >= 2 && <li className="suggest-note">{ru.trips.check.nothing}</li>}
      </ul>
    </Sheet>
  );
}
