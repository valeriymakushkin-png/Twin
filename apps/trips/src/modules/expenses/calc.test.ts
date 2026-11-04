import { describe, expect, it } from 'vitest';
import type { Expense } from '../../core/db';
import { convert, displayRate, parseAmount, rateBetween, summarize, type Rates, type TripBasis } from './calc';

let n = 0;
const exp = (date: string, amount: number, currency: string, category: Expense['category'] = 'food', note?: string): Expense => ({
  id: `e${++n}`, tripId: 't', date, amount, currency, category, note, createdAt: n, updatedAt: n,
});

// Курсы для тестов: за 1 USD — 0.9 EUR, 35 THB, 25 000 VND, 90 RUB.
const auto = { USD: 1, EUR: 0.9, THB: 35, VND: 25000, RUB: 90 };
const rates: Rates = { auto, manual: {} };
const trip: TripBasis = { startDate: '2026-05-10', endDate: '2026-05-14', currency: 'EUR', budget: 1000 };

describe('курсы', () => {
  it('одна и та же валюта — курс 1', () => {
    expect(rateBetween('EUR', 'EUR', rates)).toEqual({ rate: 1, source: 'same' });
  });
  it('перекрёстный курс через доллар', () => {
    const r = rateBetween('THB', 'EUR', rates)!;
    expect(r.source).toBe('auto');
    expect(r.rate).toBeCloseTo(0.9 / 35, 10);
    expect(convert(350, 'THB', 'EUR', rates)).toBeCloseTo(9, 6);
    expect(convert(10, 'USD', 'RUB', rates)).toBeCloseTo(900, 6);
  });
  it('своя запись важнее автоматической — и прямая, и обратная', () => {
    expect(rateBetween('THB', 'EUR', { auto, manual: { 'THB>EUR': 0.03 } })).toEqual({ rate: 0.03, source: 'manual' });
    const inv = rateBetween('THB', 'EUR', { auto, manual: { 'EUR>THB': 40 } })!;
    expect(inv.source).toBe('manual');
    expect(inv.rate).toBeCloseTo(1 / 40, 10);
  });
  it('нет курса — undefined, плохие значения игнорируются', () => {
    expect(rateBetween('XYZ', 'EUR', rates)).toBeUndefined();
    expect(rateBetween('THB', 'EUR', { auto: {}, manual: {} })).toBeUndefined();
    expect(rateBetween('THB', 'EUR', { auto, manual: { 'THB>EUR': 0 } })?.source).toBe('auto');
    expect(rateBetween('THB', 'EUR', { auto, manual: { 'THB>EUR': NaN } })?.source).toBe('auto');
  });
  it('без автоматических курсов работает ручной', () => {
    expect(convert(100, 'THB', 'EUR', { auto: {}, manual: { 'THB>EUR': 0.026 } })).toBeCloseTo(2.6, 6);
  });
  it('курс показывается в удобную сторону', () => {
    expect(displayRate(0.000035)).toEqual({ inverted: true, value: 1 / 0.000035 });
    expect(displayRate(1.1)).toEqual({ inverted: false, value: 1.1 });
  });
});

describe('итоги по поездке', () => {
  const items = [
    exp('2026-05-10', 9, 'EUR', 'food'),
    exp('2026-05-10', 350, 'THB', 'transport'), // = 9 EUR
    exp('2026-05-11', 18, 'EUR', 'stay'),
    exp('2026-05-12', 2500000, 'VND', 'shopping'), // = 90 EUR
    exp('2026-05-01', 100, 'EUR', 'stay'), // бронь до поездки — в итог входит, в среднее нет
  ];

  it('считает общий итог в валюте поездки и по категориям', () => {
    const s = summarize(items, trip, rates, '2026-05-12');
    expect(s.total).toBeCloseTo(9 + 9 + 18 + 90 + 100, 6);
    expect(s.count).toBe(5);
    expect(s.byCategory[0]).toMatchObject({ category: 'stay' });
    expect(s.byCategory.find((c) => c.category === 'food')!.total).toBeCloseTo(9, 6);
    expect(s.byCategory.reduce((a, c) => a + c.share, 0)).toBeCloseTo(1, 6);
  });

  it('группирует по дням (новые сверху) и считает сумму дня', () => {
    const s = summarize(items, trip, rates, '2026-05-12');
    expect(s.byDay.map((d) => d.date)).toEqual(['2026-05-12', '2026-05-11', '2026-05-10', '2026-05-01']);
    expect(s.byDay.find((d) => d.date === '2026-05-10')!.total).toBeCloseTo(18, 6);
    expect(s.today).toBeCloseTo(90, 6);
  });

  it('средний расход: только траты внутри поездки ÷ прошедшие дни', () => {
    const s = summarize(items, trip, rates, '2026-05-12'); // прошло 3 дня (10, 11, 12)
    expect(s.averageDays).toBe(3);
    expect(s.averagePerDay).toBeCloseTo((9 + 9 + 18 + 90) / 3, 6);
  });

  it('после конца поездки делит на её длину, до начала — на дни с тратами', () => {
    expect(summarize(items, trip, rates, '2026-06-30').averageDays).toBe(5);
    const before = summarize([exp('2026-05-10', 10, 'EUR')], trip, rates, '2026-05-01');
    expect(before.averageDays).toBe(1);
    expect(before.averagePerDay).toBeCloseTo(10, 6);
    expect(summarize([exp('2026-05-01', 10, 'EUR')], trip, rates, '2026-05-01').averagePerDay).toBeUndefined();
  });

  it('бюджет: остаток и состояние ok / warn / over', () => {
    const state = (amount: number) => summarize([exp('2026-05-10', amount, 'EUR')], trip, rates, '2026-05-10').budget!;
    expect(state(500)).toMatchObject({ left: 500, state: 'ok' });
    expect(state(800).state).toBe('warn');
    expect(state(1000).state).toBe('warn');
    expect(state(1200)).toMatchObject({ state: 'over', left: -200 });
    expect(summarize([], { ...trip, budget: undefined }, rates, '2026-05-10').budget).toBeUndefined();
    expect(summarize([], { ...trip, budget: 0 }, rates, '2026-05-10').budget).toBeUndefined();
  });

  it('траты без курса не попадают в итог, а выделяются отдельно', () => {
    const s = summarize([exp('2026-05-10', 10, 'EUR'), exp('2026-05-10', 500, 'XYZ')], trip, rates, '2026-05-10');
    expect(s.total).toBeCloseTo(10, 6);
    expect(s.missing.map((e) => e.currency)).toEqual(['XYZ']);
    expect(s.byDay[0]!.items).toHaveLength(2);
  });

  it('пустой список не ломает расчёт', () => {
    const s = summarize([], trip, rates, '2026-05-10');
    expect(s).toMatchObject({ total: 0, count: 0, byCategory: [], byDay: [], today: 0 });
    expect(s.averagePerDay).toBeUndefined();
  });

  it('ручной курс меняет итог', () => {
    const s = summarize([exp('2026-05-10', 1000, 'THB')], trip, { auto, manual: { 'THB>EUR': 0.03 } }, '2026-05-10');
    expect(s.total).toBeCloseTo(30, 6);
  });
});

describe('разбор суммы', () => {
  it.each([
    ['1250', 1250],
    ['1 250,50', 1250.5],
    ['1 250,5', 1250.5],
    ['1,250.50', 1250.5],
    ['1.250,50', 1250.5],
    ['12.5', 12.5],
    ['12,5', 12.5],
    ['0,99', 0.99],
    ['1.250.000', 1250000],
    ['1,250,000', 1250000],
    ['1,250', 1.25], // один разделитель — десятичный
    ['.5', 0.5],
  ])('%s → %s', (input, expected) => expect(parseAmount(input)).toBe(expected));

  it.each(['', ' ', 'abc', '12abc', '-5', '0', '0,00', '1.2.3', '1,25,3', '12..5', '99999999999999', '€5'])('«%s» отклоняется', (input) => expect(parseAmount(input)).toBeNull());
});
