import { useEffect, useMemo, useRef, useState } from 'react';
import { useCityIndex } from '../../core/useCities';
import { cityCountryName, findCity, searchCities } from '../../data/cities';
import { COUNTRIES, countryName } from '../../data/countries';
import { todayIso, addDays, daysBetween } from '../../core/dates';
import type { Trip, TripCity } from '../../core/db';
import { useObjectUrl } from '../../core/hooks';
import { ru } from '../../core/strings';
import { toast } from '../../core/toast';
import { Button, Field, Icon, Sheet } from '../../core/ui';
import { currencyForCountry } from '../../data/currencies';
import { CurrencySelect } from '../expenses/CurrencySelect';
import { parseAmount } from '../expenses/calc';
import { setHomeCurrency } from '../expenses/expenseRepo';
import { useHomeCurrency } from '../expenses/useRates';
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
  const home = useHomeCurrency();
  const [currency, setCurrency] = useState('');
  const [budget, setBudget] = useState('');
  const [errors, setErrors] = useState<{ name?: string; dates?: string; budget?: string }>({});
  const [busy, setBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [countryTouched, setCountryTouched] = useState(false);
  const index = useCityIndex(open);

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
    setCountryTouched(!!trip);
    setCurrency(trip?.currency ?? home);
    setBudget(trip?.budget ? String(trip.budget).replace('.', ',') : '');
    setErrors({});
    // home читаем только при открытии формы: если он подгрузится позже, уже введённое не затираем
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, trip]);

  const shownCover = cover === undefined ? currentCover : (cover ?? undefined);
  const coverUrl = useObjectUrl(shownCover);

  /** Подсказки: города из встроенного списка (русские и латинские названия), города выбранной страны — первыми. */
  const hits = useMemo(() => (index && cityDraft.trim().length >= 2 ? searchCities(index, cityDraft, { country, limit: 6 }) : []), [index, cityDraft, country]);

  const addNamed = (name: string, point?: { lat: number; lng: number }, cc?: string) => {
    setCities((list) => (list.some((c) => c.name.toLowerCase() === name.toLowerCase()) ? list : [...list, { name, ...point }]));
    // Первый город новой поездки подсказывает страну, если пользователь сам её ещё не выбирал.
    if (cc && !countryTouched && cities.length === 0 && COUNTRIES.some((c) => c.code === cc)) setCountry(cc);
    setCityDraft('');
  };

  /** Ввод вручную: если название точно совпало с городом из списка — координаты подставляются сами. */
  const addTyped = () => {
    const parts = cityDraft.split(',').map((s) => s.trim()).filter(Boolean);
    if (!parts.length) return;
    for (const name of parts) {
      const found = index ? findCity(index, name, country) : undefined;
      addNamed(name, found ? { lat: found.lat, lng: found.lng } : undefined, found?.cc);
    }
    setCityDraft('');
  };

  const submit = async () => {
    const next: typeof errors = {};
    if (!name.trim()) next.name = ru.trips.needName;
    if (!start || !end || daysBetween(start, end) < 0) next.dates = ru.trips.badDates;
    const budgetValue = budget.trim() ? parseAmount(budget) : undefined;
    if (budgetValue === null) next.budget = ru.trips.badBudget;
    setErrors(next);
    if (Object.keys(next).length) return;
    setBusy(true);
    try {
      // Город, введённый, но не добавленный клавишей Enter, не должен пропасть.
      const draft = cityDraft.trim();
      const typed = draft && !cities.some((c) => c.name.toLowerCase() === draft.toLowerCase()) ? (() => { const f = index ? findCity(index, draft, country) : undefined; return [{ name: draft, ...(f ? { lat: f.lat, lng: f.lng } : {}) }]; })() : [];
      const allCities = [...cities, ...typed];
      const input = { name: name.trim(), countryCode: country, cities: allCities, startDate: start, endDate: end, currency, budget: budgetValue ?? undefined };
      await setHomeCurrency(currency); // следующая поездка по умолчанию — в той же валюте отчётов
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
        <select className="input" value={country} onChange={(e) => (setCountry(e.target.value), setCountryTouched(true))}>
          {COUNTRIES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
      </Field>
      <Field label={ru.trips.cities} hint={ru.trips.citiesHint}>
        <div ref={listRef} className="city-box">
          <input
            className="input"
            value={cityDraft}
            onChange={(e) => setCityDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addTyped();
              }
            }}
            onBlur={(e) => {
              // Тап по подсказке не должен «добавлять» недописанный текст раньше самой подсказки.
              if (!listRef.current?.contains(e.relatedTarget as Node | null)) addTyped();
            }}
            maxLength={60}
            autoComplete="off"
          />
          {hits.length > 0 && (
            <ul className="suggest" role="listbox">
              {hits.map(({ city, label }) => (
                <li key={`${city.cc}${city.lat}${city.lng}`}>
                  <button type="button" role="option" onMouseDown={(e) => e.preventDefault()} onClick={() => addNamed(label, { lat: city.lat, lng: city.lng }, city.cc)}>
                    <b>{label}</b>
                    <small>{cityCountryName(city)}</small>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {cities.length > 0 && (
          <div className="chips">
            {cities.map((c) => (
              <span key={c.name} className="chip" title={c.lat === undefined ? ru.trips.noCoords : undefined}>
                {c.lat !== undefined ? '📍 ' : ''}
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
      <div className="row">
        <Field label={ru.trips.currency} hint={ru.trips.currencyHint}>
          <CurrencySelect value={currency} onChange={setCurrency} pinned={[home, currencyForCountry(country) ?? '', 'USD', 'EUR']} label={ru.trips.currency} />
        </Field>
        <Field label={ru.trips.budget} error={errors.budget}>
          <input className="input" inputMode="decimal" value={budget} placeholder={ru.trips.budgetPlaceholder} onChange={(e) => setBudget(e.target.value)} />
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
