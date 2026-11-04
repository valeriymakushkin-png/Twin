import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect, useRef, useState } from 'react';
import { eachDay, formatDayLong } from '../../core/dates';
import { db, type ItemKind, type ItineraryItem, type Photo, type Trip } from '../../core/db';
import { useObjectUrl } from '../../core/hooks';
import { fill, ru } from '../../core/strings';
import { toast } from '../../core/toast';
import { Button, Field, Icon, Sheet } from '../../core/ui';
import { formatCoordinates, parseCoordinates } from '../map/geo';
import { addItem, addItemPhoto, deleteItem, deletePhoto, updateItem } from './itemRepo';

function PhotoTile({ blob, onOpen, onRemove }: { blob: Blob; onOpen: () => void; onRemove: () => void }) {
  const url = useObjectUrl(blob);
  return (
    <div className="photo-tile">
      {url && (
        <button type="button" style={{ all: 'unset', display: 'block', width: '100%', height: '100%', cursor: 'zoom-in' }} onClick={onOpen} aria-label="Открыть фото">
          <img src={url} alt="" />
        </button>
      )}
      <button type="button" onClick={onRemove} aria-label={ru.itinerary.removePhoto}>
        <Icon name="close" size={16} />
      </button>
    </div>
  );
}

export function Lightbox({ blob, onClose }: { blob: Blob; onClose: () => void }) {
  const url = useObjectUrl(blob);
  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      {url && <img src={url} alt="" />}
      <button className="icon-btn" aria-label={ru.close} onClick={onClose}>
        <Icon name="close" />
      </button>
    </div>
  );
}

/**
 * Редактор записи маршрута: место или событие, день, время, город, заметки и фото.
 * `item` задан — правка существующей, иначе создание в `defaultDate`.
 */
export function ItemEditor({ open, onClose, trip, item, defaultDate }: { open: boolean; onClose: () => void; trip: Trip; item?: ItineraryItem; defaultDate: string }) {
  const [kind, setKind] = useState<ItemKind>('place');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(defaultDate);
  const [time, setTime] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [coords, setCoords] = useState('');
  const [coordsError, setCoordsError] = useState('');
  const [error, setError] = useState('');
  const [pending, setPending] = useState<File[]>([]); // фото, выбранные до первого сохранения новой записи
  const [lightbox, setLightbox] = useState<Blob | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setKind(item?.kind ?? 'place');
    setTitle(item?.title ?? '');
    setDate(item?.date ?? defaultDate);
    setTime(item?.time ?? '');
    setCity(item?.city ?? '');
    setNotes(item?.notes ?? '');
    setCoords(item?.lat !== undefined && item.lng !== undefined ? formatCoordinates({ lat: item.lat, lng: item.lng }) : '');
    setError('');
    setCoordsError('');
    setPending([]);
  }, [open, item, defaultDate]);

  const photos = useLiveQuery(async (): Promise<Photo[]> => (item ? db.photos.where('itemId').equals(item.id).sortBy('createdAt') : []), [item?.id]);
  const days = eachDay(trip.startDate, trip.endDate);
  // Запись могла остаться в дне, который теперь вне дат поездки, — оставляем эту дату в списке, чтобы не потерять.
  const dayOptions = item && !days.includes(item.date) ? [item.date, ...days] : days;

  const save = async () => {
    if (!title.trim()) return setError(ru.itinerary.needTitle);
    const point = coords.trim() ? parseCoordinates(coords) : undefined;
    if (point === null) return setCoordsError(ru.itinerary.badCoords);
    const input = { date, time: time || undefined, kind, title: title.trim(), notes: notes.trim() || undefined, city: city || undefined, lat: point?.lat, lng: point?.lng };
    try {
      if (item) await updateItem(item.id, input);
      else {
        const id = await addItem(trip.id, input);
        for (const f of pending) await addItemPhoto(trip.id, id, f);
      }
      toast(ru.saved);
      onClose();
    } catch {
      toast(ru.saveFailed, 'error');
    }
  };

  const remove = async () => {
    if (!item || !window.confirm(fill(ru.itinerary.deleteConfirm, { title: item.title }))) return;
    await deleteItem(item.id);
    onClose();
  };

  const pickFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    try {
      if (item) for (const f of Array.from(files)) await addItemPhoto(trip.id, item.id, f);
      else setPending((p) => [...p, ...Array.from(files)]);
    } catch {
      toast('Не удалось добавить фото', 'error');
    }
  };

  return (
    <>
      <Sheet
        open={open}
        onClose={onClose}
        title={item ? ru.itinerary.editItem : ru.itinerary.newItem}
        footer={
          <>
            {item && (
              <Button variant="danger" onClick={remove} aria-label={ru.delete}>
                <Icon name="trash" />
              </Button>
            )}
            <Button onClick={save} style={{ flex: 1 }}>
              {ru.save}
            </Button>
          </>
        }
      >
        <div className="segmented" role="group" aria-label={ru.itinerary.kind} style={{ marginBottom: 14 }}>
          <button type="button" aria-pressed={kind === 'place'} onClick={() => setKind('place')}>
            {ru.itinerary.place}
          </button>
          <button type="button" aria-pressed={kind === 'event'} onClick={() => setKind('event')}>
            {ru.itinerary.event}
          </button>
        </div>
        <Field label={ru.itinerary.title} error={error}>
          <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder={kind === 'place' ? ru.itinerary.titlePlaceholderPlace : ru.itinerary.titlePlaceholderEvent} maxLength={120} autoFocus={!item} />
        </Field>
        <div className="row">
          <Field label={ru.itinerary.date}>
            <select className="input" value={date} onChange={(e) => setDate(e.target.value)}>
              {dayOptions.map((d) => (
                <option key={d} value={d}>
                  {formatDayLong(d)}
                </option>
              ))}
            </select>
          </Field>
          <Field label={ru.itinerary.time}>
            <input className="input" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </Field>
        </div>
        {trip.cities.length > 0 && (
          <Field label={ru.itinerary.city}>
            <select className="input" value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">{ru.itinerary.anyCity}</option>
              {trip.cities.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </Field>
        )}
        <Field label={ru.itinerary.notes}>
          <textarea className="input" value={notes} onChange={(e) => setNotes(e.target.value)} maxLength={2000} />
        </Field>
        <Field label={ru.itinerary.coords} error={coordsError} hint={coords.trim() && parseCoordinates(coords) ? `✓ ${formatCoordinates(parseCoordinates(coords)!)}` : ru.itinerary.coordsHint}>
          <input className="input" value={coords} onChange={(e) => (setCoords(e.target.value), setCoordsError(''))} placeholder="38.6916, -9.2160" inputMode="text" autoComplete="off" />
        </Field>
        <Field label={ru.itinerary.photos}>
          <input ref={fileRef} type="file" accept="image/*" multiple hidden onChange={(e) => void pickFiles(e.target.files).then(() => (e.target.value = ''))} />
          <div className="photo-grid">
            {photos?.map((p) => (
              <PhotoTile key={p.id} blob={p.blob} onOpen={() => setLightbox(p.blob)} onRemove={() => void deletePhoto(p.id)} />
            ))}
            {pending.map((f, i) => (
              <PhotoTile key={`${f.name}-${i}`} blob={f} onOpen={() => setLightbox(f)} onRemove={() => setPending((l) => l.filter((_, k) => k !== i))} />
            ))}
            <button type="button" className="photo-add" onClick={() => fileRef.current?.click()} aria-label={ru.itinerary.addPhoto}>
              <Icon name="camera" size={26} />
            </button>
          </div>
        </Field>
      </Sheet>
      {lightbox && <Lightbox blob={lightbox} onClose={() => setLightbox(null)} />}
    </>
  );
}
