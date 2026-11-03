import { useEffect, useRef, useState } from 'react';
import { COUNTRIES } from '../../data/countries';
import { todayIso, addDays, daysBetween } from '../../core/dates';
import type { Trip, TripCity } from '../../core/db';
import { useObjectUrl } from '../../core/hooks';
import { ru } from '../../core/strings';
import { toast } from '../../core/toast';
import { Button, Field, Icon, Sheet } from '../../core/ui';
import { createTrip, updateTrip } from './tripRepo';

/** Форма создания и правки поездки (шторка). `trip` задан — правка, иначе создание. */
export function TripForm({ open, onClose, trip, currentCover, onSaved }: { open: boolean; onClose: () => void; trip?: Trip; currentCover?: Blob; onSaved?: (id: string) => void }) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [cities, setCities] = useState<TripCity[]>([]);
  const [cityDraft, setCityDraft] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [cover, setCover] = useState<File | null | undefined>(undefined); // undefined — не менять, null — убрать
  const [errors, setErrors] = useState<{ name?: string; dates?: string }>({});
  const [busy, setBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  // При каждом открытии форма заполняется заново (данные поездки или значения по умолчанию).
  useEffect(() => {
    if (!open) return;
    setName(trip?.name ?? '');
    setCountry(trip?.countryCode ?? 'PT');
    setCities(trip?.cities ?? []);
    setCityDraft('');
    setStart(trip?.startDate ?? todayIso());
    setEnd(trip?.endDate ?? addDays(todayIso(), 6));
    setCover(undefined);
    setErrors({});
  }, [open, trip]);

  const shownCover = cover === undefined ? currentCover : (cover ?? undefined);
  const coverUrl = useObjectUrl(shownCover);

  const addCity = () => {
    const parts = cityDraft.split(',').map((s) => s.trim()).filter(Boolean);
    if (!parts.length) return;
    setCities((list) => [...list, ...parts.filter((p) => !list.some((c) => c.name.toLowerCase() === p.toLowerCase())).map((name) => ({ name }))]);
    setCityDraft('');
  };

  const submit = async () => {
    const next: typeof errors = {};
    if (!name.trim()) next.name = ru.trips.needName;
    if (!start || !end || daysBetween(start, end) < 0) next.dates = ru.trips.badDates;
    setErrors(next);
    if (Object.keys(next).length) return;
    setBusy(true);
    try {
      // Город, введённый, но не добавленный клавишей Enter, не должен пропасть.
      const draft = cityDraft.trim();
      const allCities = draft && !cities.some((c) => c.name.toLowerCase() === draft.toLowerCase()) ? [...cities, { name: draft }] : cities;
      const input = { name: name.trim(), countryCode: country, cities: allCities, startDate: start, endDate: end };
      const id = trip ? (await updateTrip(trip.id, input, cover), trip.id) : await createTrip(input, cover ?? null);
      toast(ru.saved);
      onClose();
      onSaved?.(id);
    } catch {
      toast(ru.saveFailed, 'error');
    } finally {
      setBusy(false);
    }
  };

  return (
    <Sheet
      open={open}
      onClose={onClose}
      title={trip ? ru.trips.editTitle : ru.trips.create}
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            {ru.cancel}
          </Button>
          <Button onClick={submit} disabled={busy} style={{ flex: 1 }}>
            {ru.save}
          </Button>
        </>
      }
    >
      <Field label={ru.trips.name} error={errors.name}>
        <input className="input" value={name} placeholder={ru.trips.namePlaceholder} onChange={(e) => setName(e.target.value)} maxLength={80} />
      </Field>
      <Field label={ru.trips.country}>
        <select className="input" value={country} onChange={(e) => setCountry(e.target.value)}>
          {COUNTRIES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
      </Field>
      <Field label={ru.trips.cities} hint={ru.trips.citiesHint}>
        <input
          className="input"
          value={cityDraft}
          onChange={(e) => setCityDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              addCity();
            }
          }}
          onBlur={addCity}
          maxLength={60}
        />
        {cities.length > 0 && (
          <div className="chips">
            {cities.map((c) => (
              <span key={c.name} className="chip">
                {c.name}
                <button type="button" aria-label={ru.delete} onClick={() => setCities((l) => l.filter((x) => x.name !== c.name))}>
                  <Icon name="close" size={14} />
                </button>
              </span>
            ))}
          </div>
        )}
      </Field>
      <div className="row">
        <Field label={ru.trips.start}>
          <input
            className="input"
            type="date"
            value={start}
            onChange={(e) => {
              setStart(e.target.value);
              // Если конец оказался раньше нового начала — подтягиваем его, чтобы не получить «ошибку» на пустом месте.
              if (e.target.value && end && daysBetween(e.target.value, end) < 0) setEnd(e.target.value);
            }}
          />
        </Field>
        <Field label={ru.trips.end} error={errors.dates}>
          <input className="input" type="date" value={end} min={start} onChange={(e) => setEnd(e.target.value)} />
        </Field>
      </div>
      <Field label={ru.trips.cover}>
        <input ref={fileRef} type="file" accept="image/*" hidden onChange={(e) => e.target.files?.[0] && setCover(e.target.files[0])} />
        {coverUrl && <img src={coverUrl} alt="" style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 14 }} />}
        <div className="menu-row">
          <Button type="button" variant="secondary" onClick={() => fileRef.current?.click()}>
            <Icon name="image" /> {ru.trips.pickCover}
          </Button>
          {shownCover && (
            <Button type="button" variant="ghost" onClick={() => setCover(null)}>
              {ru.trips.removeCover}
            </Button>
          )}
        </div>
      </Field>
    </Sheet>
  );
}
