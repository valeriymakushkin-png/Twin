import { describe, expect, it } from 'vitest';
import { groupByDate, insertIndexForTime, planInsert, planMove, planSortByTime, type Orderable } from './ordering';

const it_ = (id: string, date: string, order: number, time?: string): Orderable => ({ id, date, order, time });
/** Применяет обновления и возвращает порядок id по дням — так тесты читаются как «что увидит пользователь». */
const apply = (items: Orderable[], updates: { id: string; date: string; order: number }[]) => {
  const map = new Map(items.map((i) => [i.id, { ...i }]));
  for (const u of updates) Object.assign(map.get(u.id)!, { date: u.date, order: u.order });
  return Object.fromEntries([...groupByDate([...map.values()])].map(([d, l]) => [d, l.map((i) => i.id)]));
};

const base = [it_('a', 'D1', 0), it_('b', 'D1', 1), it_('c', 'D1', 2), it_('x', 'D2', 0)];

describe('планировщик порядка', () => {
  it('переставляет запись внутри дня', () => {
    expect(apply(base, planMove(base, 'a', 'D1', 2))).toEqual({ D1: ['b', 'c', 'a'], D2: ['x'] });
    expect(apply(base, planMove(base, 'c', 'D1', 0))).toEqual({ D1: ['c', 'a', 'b'], D2: ['x'] });
  });

  it('переносит запись в другой день на нужную позицию', () => {
    expect(apply(base, planMove(base, 'b', 'D2', 0))).toEqual({ D1: ['a', 'c'], D2: ['b', 'x'] });
    expect(apply(base, planMove(base, 'b', 'D2', 1))).toEqual({ D1: ['a', 'c'], D2: ['x', 'b'] });
  });

  it('переносит в пустой день и не падает при индексе за пределами', () => {
    expect(apply(base, planMove(base, 'a', 'D3', 99))).toEqual({ D1: ['b', 'c'], D2: ['x'], D3: ['a'] });
  });

  it('возвращает пустой список, если ничего не изменилось', () => {
    expect(planMove(base, 'a', 'D1', 0)).toEqual([]);
  });

  it('вставляет запись со временем между записями со временем', () => {
    const day = [it_('a', 'D1', 0, '09:00'), it_('b', 'D1', 1, '13:00'), it_('c', 'D1', 2, '19:00')];
    expect(insertIndexForTime(day, '12:00')).toBe(1);
    expect(insertIndexForTime(day, '08:00')).toBe(0);
    expect(insertIndexForTime(day, '23:00')).toBe(3);
    expect(insertIndexForTime(day, undefined)).toBe(3);
    const { order, updates } = planInsert(day, 'n', 'D1', '12:00');
    expect(order).toBe(1);
    expect(apply(day, updates)).toEqual({ D1: ['a', 'b', 'c'] }); // старые пока не сдвинуты...
    expect(updates.map((u) => [u.id, u.order])).toEqual([['b', 2], ['c', 3]]); // ...но обновления освобождают место
  });

  it('новая запись без времени встаёт в конец дня и не двигает остальных', () => {
    const { order, updates } = planInsert(base, 'n', 'D1');
    expect(order).toBe(3);
    expect(updates).toEqual([]);
  });

  it('сортирует по времени, не трогая записи без времени', () => {
    const day = [it_('a', 'D1', 0, '18:00'), it_('note', 'D1', 1), it_('b', 'D1', 2, '09:00'), it_('c', 'D1', 3, '12:00')];
    expect(apply(day, planSortByTime(day, 'D1'))).toEqual({ D1: ['b', 'note', 'c', 'a'] });
  });
});
