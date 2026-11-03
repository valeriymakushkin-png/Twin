import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  pointerWithin,
  rectIntersection,
  useDroppable,
  useSensor,
  useSensors,
  type CollisionDetection,
  type DragEndEvent,
  type DragOverEvent,
  type DragStartEvent,
} from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useLiveQuery } from 'dexie-react-hooks';
import { useMemo, useState } from 'react';
import { eachDay, formatDayLong, formatDayShort } from '../../core/dates';
import { db, type ItineraryItem, type Photo, type Trip } from '../../core/db';
import { useObjectUrl } from '../../core/hooks';
import { fill, ru } from '../../core/strings';
import { Icon, IconButton } from '../../core/ui';
import { ItemEditor } from './ItemEditor';
import { moveItem, sortDayByTime } from './itemRepo';
import { groupByDate } from './ordering';

const DAY_PREFIX = 'day:';

/** Под курсором может оказаться и запись, и сам день: запись важнее, день — запасной вариант (пустой день тоже принимает записи). */
const collision: CollisionDetection = (args) => {
  const hits = pointerWithin(args);
  const list = hits.length ? hits : rectIntersection(args);
  const item = list.find((c) => !String(c.id).startsWith(DAY_PREFIX));
  return item ? [item] : list;
};

function Thumb({ photo }: { photo: Photo }) {
  const url = useObjectUrl(photo.blob);
  return url ? <img src={url} alt="" /> : null;
}

function ItemBody({ item, photos }: { item: ItineraryItem; photos: Photo[] }) {
  return (
    <>
      <div className={`item-time ${item.time ? '' : 'none'}`}>{item.time ?? '—'}</div>
      <div className="item-main" style={{ display: 'block' }}>
        <div className="item-title">
          {item.kind === 'event' ? <span className="badge-event">{ru.itinerary.event}</span> : <Icon name="pin" size={16} />}
          <span>{item.title}</span>
        </div>
        {(item.city || item.notes) && <div className="item-meta">{[item.city, item.notes].filter(Boolean).join(' · ')}</div>}
        {photos.length > 0 && (
          <div className="item-thumbs">
            {photos.slice(0, 4).map((p) => (
              <Thumb key={p.id} photo={p} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function SortableItem({ item, photos, onOpen }: { item: ItineraryItem; photos: Photo[]; onOpen: () => void }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item.id });
  return (
    <div ref={setNodeRef} className={`item ${isDragging ? 'dragging' : ''}`} style={{ transform: CSS.Transform.toString(transform), transition }}>
      <button type="button" onClick={onOpen} style={{ all: 'unset', display: 'flex', flex: 1, minWidth: 0, cursor: 'pointer' }} aria-label={`${ru.itinerary.editItem}: ${item.title}`}>
        <ItemBody item={item} photos={photos} />
      </button>
      {/* Тянуть можно только за «ручку»: так обычная прокрутка пальцем не превращается в перетаскивание. */}
      <button type="button" className="grip" aria-label={ru.itinerary.drag} {...attributes} {...listeners}>
        <Icon name="grip" />
      </button>
    </div>
  );
}

function DayZone({
  date,
  label,
  sub,
  items,
  photosByItem,
  isOver,
  canAdd,
  onAdd,
  onOpen,
  onSort,
}: {
  date: string;
  label: string;
  sub: string;
  items: ItineraryItem[];
  photosByItem: Map<string, Photo[]>;
  isOver: boolean;
  canAdd: boolean;
  onAdd: () => void;
  onOpen: (item: ItineraryItem) => void;
  onSort: () => void;
}) {
  const { setNodeRef } = useDroppable({ id: DAY_PREFIX + date });
  const timed = items.filter((i) => i.time).length;
  return (
    <section ref={setNodeRef} className={`day ${isOver ? 'over' : ''}`} aria-label={label}>
      <div className="day-head">
        <h3>
          {label}
          <small>{sub}</small>
        </h3>
        {timed > 1 && <IconButton icon="sort" label={ru.itinerary.sortByTime} onClick={onSort} />}
        {canAdd && <IconButton icon="plus" label={ru.itinerary.addToDay} onClick={onAdd} />}
      </div>
      <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <SortableItem key={item.id} item={item} photos={photosByItem.get(item.id) ?? []} onOpen={() => onOpen(item)} />
        ))}
      </SortableContext>
      {items.length === 0 && <div className="day-empty">{ru.itinerary.emptyDay}</div>}
    </section>
  );
}

/** Маршрут по дням: записи на временной шкале, перетаскивание между днями, редактор записи. */
export function ItineraryTab({ trip }: { trip: Trip }) {
  const items = useLiveQuery(() => db.items.where('tripId').equals(trip.id).toArray(), [trip.id]) ?? [];
  const photos = useLiveQuery(() => db.photos.where('tripId').equals(trip.id).filter((p) => !!p.itemId).sortBy('createdAt'), [trip.id]) ?? [];
  const [editor, setEditor] = useState<{ item?: ItineraryItem; date: string } | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [overDate, setOverDate] = useState<string | null>(null);

  const tripDays = useMemo(() => eachDay(trip.startDate, trip.endDate), [trip.startDate, trip.endDate]);
  const groups = useMemo(() => groupByDate(items), [items]);
  const outOfRange = useMemo(() => [...groups.keys()].filter((d) => !tripDays.includes(d)).sort(), [groups, tripDays]);
  const photosByItem = useMemo(() => {
    const m = new Map<string, Photo[]>();
    for (const p of photos) if (p.itemId) m.set(p.itemId, [...(m.get(p.itemId) ?? []), p]);
    return m;
  }, [photos]);

  // Палец или мышь начинают перетаскивание после небольшого сдвига; клавиатура — через ручку (пробел, стрелки).
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }));

  const dateOf = (overId: string): string | undefined => (overId.startsWith(DAY_PREFIX) ? overId.slice(DAY_PREFIX.length) : items.find((i) => i.id === overId)?.date);

  const onDragStart = (e: DragStartEvent) => setActiveId(String(e.active.id));
  const onDragOver = (e: DragOverEvent) => setOverDate(e.over ? (dateOf(String(e.over.id)) ?? null) : null);
  const onDragEnd = async (e: DragEndEvent) => {
    setActiveId(null);
    setOverDate(null);
    const active = items.find((i) => i.id === e.active.id);
    if (!active || !e.over) return;
    const overId = String(e.over.id);
    const toDate = dateOf(overId);
    if (!toDate) return;
    // В день вне дат поездки переносить нельзя (из него — можно).
    if (!tripDays.includes(toDate) && toDate !== active.date) return;

    const target = groups.get(toDate) ?? [];
    let toIndex: number;
    if (overId.startsWith(DAY_PREFIX)) toIndex = target.filter((i) => i.id !== active.id).length; // на сам день → в конец
    else toIndex = target.findIndex((i) => i.id === overId); // на запись → на её место
    if (toIndex < 0) return;
    await moveItem(trip.id, active.id, toDate, toIndex);
  };

  const activeItem = items.find((i) => i.id === activeId);

  return (
    <>
      <DndContext sensors={sensors} collisionDetection={collision} onDragStart={onDragStart} onDragOver={onDragOver} onDragEnd={onDragEnd} onDragCancel={() => (setActiveId(null), setOverDate(null))}>
        {tripDays.map((date, i) => (
          <DayZone
            key={date}
            date={date}
            label={fill(ru.itinerary.day, { n: i + 1 })}
            sub={formatDayLong(date)}
            items={groups.get(date) ?? []}
            photosByItem={photosByItem}
            isOver={overDate === date && !!activeId}
            canAdd
            onAdd={() => setEditor({ date })}
            onOpen={(item) => setEditor({ item, date: item.date })}
            onSort={() => void sortDayByTime(trip.id, date)}
          />
        ))}
        {outOfRange.map((date) => (
          <DayZone
            key={date}
            date={date}
            label={ru.trips.outOfRange}
            sub={formatDayShort(date)}
            items={groups.get(date) ?? []}
            photosByItem={photosByItem}
            isOver={false}
            canAdd={false}
            onAdd={() => undefined}
            onOpen={(item) => setEditor({ item, date: item.date })}
            onSort={() => void sortDayByTime(trip.id, date)}
          />
        ))}
        <DragOverlay>
          {activeItem ? (
            <div className="item" style={{ boxShadow: '0 12px 30px rgba(0,0,0,.25)' }}>
              <ItemBody item={activeItem} photos={[]} />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
      <ItemEditor open={!!editor} onClose={() => setEditor(null)} trip={trip} item={editor?.item} defaultDate={editor?.date ?? trip.startDate} />
    </>
  );
}
