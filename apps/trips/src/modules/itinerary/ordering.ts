/**
 * Порядок записей внутри дней — чистая логика без базы и экрана (поэтому её легко проверять тестами).
 * Правило: порядок на экране задаёт поле `order`, а время — просто подпись. Перетаскивание меняет `order`,
 * а при вводе времени запись сама встаёт на подходящее место среди записей со временем.
 */
export interface Orderable {
  id: string;
  date: string;
  order: number;
  time?: string;
}

export interface OrderUpdate {
  id: string;
  date: string;
  order: number;
}

/** День → записи по порядку. */
export function groupByDate<T extends Orderable>(items: T[]): Map<string, T[]> {
  const groups = new Map<string, T[]>();
  for (const it of [...items].sort((a, b) => a.order - b.order || a.id.localeCompare(b.id))) {
    const list = groups.get(it.date);
    if (list) list.push(it);
    else groups.set(it.date, [it]);
  }
  return groups;
}

/** Куда вставить запись со временем: перед первой записью, у которой время позже, иначе в конец дня. Без времени — в конец. */
export function insertIndexForTime(day: { time?: string }[], time?: string): number {
  if (!time) return day.length;
  const i = day.findIndex((x) => x.time && x.time > time);
  return i === -1 ? day.length : i;
}

/** Сравнивает желаемую раскладку с текущей и возвращает только то, что действительно изменилось. */
function diffLayout(layout: Map<string, string[]>, current: Map<string, { date: string; order: number }>): OrderUpdate[] {
  const updates: OrderUpdate[] = [];
  for (const [date, ids] of layout)
    ids.forEach((id, order) => {
      const c = current.get(id);
      if (!c || c.date !== date || c.order !== order) updates.push({ id, date, order });
    });
  return updates;
}

const currentOf = (items: Orderable[]) => new Map(items.map((i) => [i.id, { date: i.date, order: i.order }]));
const layoutOf = (items: Orderable[]) => new Map([...groupByDate(items)].map(([d, list]) => [d, list.map((i) => i.id)]));

/**
 * Переносит запись в день `toDate` на позицию `toIndex` (индекс считается уже БЕЗ переносимой записи).
 * Возвращает обновления для всех записей, чей день или номер изменился.
 */
export function planMove(items: Orderable[], itemId: string, toDate: string, toIndex: number): OrderUpdate[] {
  const layout = layoutOf(items);
  for (const ids of layout.values()) {
    const at = ids.indexOf(itemId);
    if (at !== -1) ids.splice(at, 1);
  }
  const target = layout.get(toDate) ?? [];
  target.splice(Math.max(0, Math.min(toIndex, target.length)), 0, itemId);
  layout.set(toDate, target);
  return diffLayout(layout, currentOf(items));
}

/** Вставляет НОВУЮ запись (её ещё нет в `existing`) в день по времени; возвращает её номер и сдвиги остальных. */
export function planInsert(existing: Orderable[], newId: string, date: string, time?: string): { order: number; updates: OrderUpdate[] } {
  const day = groupByDate(existing).get(date) ?? [];
  const index = insertIndexForTime(day, time);
  const updates = planMove(existing, newId, date, index);
  const own = updates.find((u) => u.id === newId);
  // Если новая запись встала в конец и никто не сдвинулся, planMove вернёт только её; номер — позиция в дне.
  return { order: own?.order ?? index, updates: updates.filter((u) => u.id !== newId) };
}

/**
 * Упорядочивает записи со временем по возрастанию времени. Записи без времени остаются на своих местах —
 * сортируются только «слоты», занятые записями со временем.
 */
export function planSortByTime(items: Orderable[], date: string): OrderUpdate[] {
  const day = groupByDate(items).get(date) ?? [];
  const slots = day.flatMap((it, i) => (it.time ? [i] : []));
  const sorted = day.filter((it) => it.time).sort((a, b) => (a.time! < b.time! ? -1 : a.time! > b.time! ? 1 : 0));
  const ids = day.map((it) => it.id);
  slots.forEach((slot, k) => {
    ids[slot] = sorted[k]!.id;
  });
  return diffLayout(new Map([[date, ids]]), currentOf(items));
}
