import { describe, expect, it } from 'vitest';
import type { DiaryPage, ItineraryItem, Trip } from '../../core/db';
import { plural } from '../../core/strings';
import type { TripFacts } from '../map/stats';
import { fingerprint, formatKm, generateDiary, type DiaryInput } from './generate';
import { DAYS, PLACES } from './phrases';
import { mergeDiary } from './merge';
import { Picker, rng } from './random';

let n = 0;
const item = (date: string, order: number, title: string, extra: Partial<ItineraryItem> = {}): ItineraryItem => ({ id: `i${++n}`, tripId: 't', date, order, kind: 'place', title, createdAt: 1, updatedAt: 1, ...extra });
const trip: Trip = { id: 't', name: 'Осень в Лиссабоне', countryCode: 'PT', cities: [{ name: 'Лиссабон' }, { name: 'Порту' }, { name: 'Синтра' }], startDate: '2026-05-01', endDate: '2026-05-05', createdAt: 1, updatedAt: 1 };
const items = [
  item('2026-05-01', 0, 'Башня Белен', { city: 'Лиссабон', time: '09:30' }),
  item('2026-05-01', 1, 'Алфама', { city: 'Лиссабон', time: '12:00' }),
  item('2026-05-01', 2, 'Ужин у реки', { city: 'Лиссабон', time: '20:30' }),
  item('2026-05-01', 3, 'Фаду', { city: 'Лиссабон' }),
  item('2026-05-03', 0, 'Рибейра', { city: 'Порту' }),
  item('2026-05-04', 0, 'Дворец Пена', { city: 'Синтра', time: '10:00' }),
  item('2026-05-04', 1, 'Мыс Рока', { city: 'Синтра' }),
];
const facts: TripFacts = {
  days: 5, items: 7, places: 7, events: 0, cities: ['Лиссабон', 'Порту', 'Синтра'], km: 412.6,
  farthest: { title: 'Рибейра', km: 274.2 }, busiestDay: { date: '2026-05-01', count: 4 }, quietestDay: { date: '2026-05-03', count: 1 },
  earliest: { time: '09:30', title: 'Башня Белен' }, latest: { time: '20:30', title: 'Ужин у реки' }, photos: 3,
};
const input: DiaryInput = {
  trip, items, facts,
  photosByItem: new Map([[items[0]!.id, ['p1', 'p2']], [items[4]!.id, ['p3']]]),
  spend: { currency: 'EUR', byDay: new Map([['2026-05-01', 86.5], ['2026-05-03', 40]]), average: 25.3, topCategory: { category: 'food', label: 'Еда', total: 90 }, mostExpensiveDay: { date: '2026-05-01', total: 86.5 } },
  money: (a, c) => `${a.toFixed(2).replace('.', ',')} ${c === 'EUR' ? '€' : c}`,
};
const texts = (pages: DiaryPage[]) => pages.flatMap((p) => ('text' in p ? [p.text] : []).concat('lines' in p ? p.lines : [], 'heading' in p ? [p.heading] : [], 'title' in p ? [p.title, p.subtitle] : []));

describe('склонение числительных', () => {
  it('дни и места', () => {
    expect([1, 2, 5, 11, 21, 22, 25].map((x) => plural(x, DAYS))).toEqual(['1 день', '2 дня', '5 дней', '11 дней', '21 день', '22 дня', '25 дней']);
    expect([1, 3, 7, 12, 31].map((x) => plural(x, PLACES))).toEqual(['1 место', '3 места', '7 мест', '12 мест', '31 место']);
  });
  it('километры', () => {
    expect(formatKm(412.6)).toBe('410 км');
    expect(formatKm(12.4)).toBe('12 км');
    expect(formatKm(12450)).toBe('12 450 км');
  });
});

describe('генератор дневника', () => {
  it('собирает страницы по порядку: обложка, обзор, дни с записями, факты, карта, финал', () => {
    const pages = generateDiary(input, 1);
    expect(pages.map((p) => p.key)).toEqual(['cover', 'overview', 'day:2026-05-01', 'day:2026-05-03', 'day:2026-05-04', 'stats', 'map', 'closing']);
    const cover = pages[0]!;
    expect(cover.kind === 'cover' && cover.title).toBe('Осень в Лиссабоне');
    expect(cover.kind === 'cover' && cover.subtitle).toContain('Португалия');
    expect(pages.every((p, i, all) => all.findIndex((q) => q.id === p.id) === i)).toBe(true); // id уникальны
  });

  it('один и тот же вход и зерно дают тот же дневник, другое зерно — другие формулировки', () => {
    expect(generateDiary(input, 42)).toEqual(generateDiary(input, 42));
    const variants = new Set([1, 2, 3, 4, 5, 6, 7, 8].map((s) => texts(generateDiary(input, s)).join('\n')));
    expect(variants.size).toBeGreaterThan(5);
  });

  it('в текстах нет незаполненных подстановок и мусора', () => {
    for (let seed = 0; seed < 60; seed++) for (const t of texts(generateDiary(input, seed))) expect(t, `seed ${seed}`).not.toMatch(/[{}]|undefined|NaN|null|\bnull\b|\s{2,}|\s[.,:;]/);
  });

  it('названия городов и мест не склоняются: нет «в Лиссабон», «из Порту» и т. п.', () => {
    const names = ['Лиссабон', 'Порту', 'Синтра', 'Белен', 'Алфама', 'Рибейра'];
    const prep = new RegExp(`(?:^|\\s)(?:в|во|на|из|от|до|для|с|по|к|у)\\s+(?:города\\s+)?(?:${names.join('|')})`, 'i');
    // Название поездки задаёт пользователь («Осень в Лиссабоне») — его не проверяем, только сгенерированные тексты.
    for (let seed = 0; seed < 80; seed++) for (const t of texts(generateDiary(input, seed))) if (t !== trip.name) expect(t.replace(/«[^»]*»/g, ''), `seed ${seed}: ${t}`).not.toMatch(prep);
  });

  it('нет глаголов прошедшего времени от первого лица (пол автора неизвестен)', () => {
    const bad = /\b(побывал[а-я]*|приехал[а-я]*|посетил[а-я]*|сходил[а-я]*|гуляла|гулял|увидел[а-я]*|вернул[а-я]*сь)\b/i;
    for (let seed = 0; seed < 80; seed++) for (const t of texts(generateDiary(input, seed))) expect(t).not.toMatch(bad);
  });

  it('в одном дневнике соседние страницы не повторяют формулировки', () => {
    const many = generateDiary({ ...input, items: [...items, item('2026-05-02', 0, 'Музей плитки'), item('2026-05-05', 0, 'Аэропорт', { kind: 'event' })] }, 3).filter((p) => p.kind === 'day');
    const texts_ = many.map((p) => p.kind === 'day' && p.text);
    expect(new Set(texts_).size).toBe(texts_.length);
  });

  it('содержит факты и числа из данных', () => {
    const all = texts(generateDiary(input, 5)).join('\n');
    expect(all).toContain('7 мест');
    expect(all).toMatch(/Лиссабон → Порту → Синтра/);
    expect(all).toContain('410 км');
    expect(all).toMatch(/Рибейра/);
    expect(all).toMatch(/86,50 €|25,30 €/);
    expect(all).toMatch(/Еда/);
  });

  it('без расходов, координат и записей не придумывает лишнего', () => {
    const bare = generateDiary({ trip: { ...trip, cities: [] }, items: [], photosByItem: new Map(), facts: { days: 5, items: 0, places: 0, events: 0, cities: [], km: 0, photos: 0 }, money: input.money }, 2);
    expect(bare.map((p) => p.key)).toEqual(['cover', 'overview', 'closing']);
    const all = texts(bare).join('\n');
    expect(all).not.toMatch(/€|км|Маршрут/);
    expect(all).toContain('5 дней');
  });

  it('одна запись и один город: корректные формы', () => {
    const one = generateDiary({ trip: { ...trip, cities: [{ name: 'Лиссабон' }] }, items: [items[0]!], photosByItem: new Map(), facts: { days: 1, items: 1, places: 1, events: 0, cities: ['Лиссабон'], km: 0, photos: 0 }, money: input.money }, 9);
    const all = texts(one).join('\n');
    expect(all).toContain('1 день');
    expect(all).toContain('1 место');
  });

  it('фото: у обложки — обложка поездки или первое фото маршрута; у дня — до трёх фото его записей', () => {
    const pages = generateDiary(input, 1);
    const cover = pages[0]!;
    expect(cover.kind === 'cover' && cover.photo?.source).toBe('p1');
    const withCover = generateDiary({ ...input, trip: { ...trip, coverPhotoId: 'cv' } }, 1)[0]!;
    expect(withCover.kind === 'cover' && withCover.photo?.source).toBe('cv');
    const day1 = pages.find((p) => p.key === 'day:2026-05-01')!;
    expect(day1.kind === 'day' && day1.photos.map((s) => s.source)).toEqual(['p1', 'p2']);
    const many = generateDiary({ ...input, photosByItem: new Map([[items[0]!.id, ['a', 'b', 'c', 'd', 'e']]]) }, 1).find((p) => p.key === 'day:2026-05-01')!;
    expect(many.kind === 'day' && many.photos).toHaveLength(3);
  });

  it('отпечаток меняется при изменении поездки', () => {
    const base = fingerprint(input);
    expect(fingerprint(input)).toBe(base);
    expect(fingerprint({ ...input, items: [...items, item('2026-05-02', 0, 'Новое место')], facts: { ...facts, items: 8, places: 8 } })).not.toBe(base);
    expect(fingerprint({ ...input, trip: { ...trip, name: 'Другое' } })).not.toBe(base);
  });
});

describe('выбор фраз без повторов', () => {
  it('пока есть неиспользованные варианты, повторов нет; потом допускаются', () => {
    const p = new Picker(rng(5));
    const v = ['a', 'b', 'c'];
    const first = [p.pick('x', v), p.pick('x', v), p.pick('x', v)];
    expect(new Set(first).size).toBe(3);
    expect(v).toContain(p.pick('x', v));
  });
  it('случайные числа детерминированы и лежат в [0,1)', () => {
    const a = rng(1);
    const b = rng(1);
    for (let i = 0; i < 50; i++) {
      const x = a();
      expect(x).toBe(b());
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThan(1);
    }
  });
});

describe('пересборка с сохранением правок', () => {
  const fresh = () => generateDiary(input, 1);

  it('сохраняет порядок, скрытие, правленый текст и замену фото; неправленый текст обновляется', () => {
    const first = fresh();
    const edited = first.map((p) => {
      if (p.key === 'day:2026-05-01' && p.kind === 'day') return { ...p, text: 'Мой текст', edited: true, photos: [{ ...p.photos[0]!, override: 'mine', fx: 0.2, fy: 0.8, zoom: 2 }, p.photos[1]!] };
      if (p.key === 'stats') return { ...p, hidden: true };
      return p;
    });
    // пользователь переставил: карта сразу после обзора
    const map = edited.find((p) => p.key === 'map')!;
    const reordered = [edited[0]!, edited[1]!, map, ...edited.filter((p) => !['cover', 'overview', 'map'].includes(p.key))];
    const merged = mergeDiary(reordered, generateDiary(input, 99));
    expect(merged.map((p) => p.key)).toEqual(reordered.map((p) => p.key));
    const day1 = merged.find((p) => p.key === 'day:2026-05-01')!;
    expect(day1.kind === 'day' && day1.text).toBe('Мой текст');
    expect(day1.kind === 'day' && day1.photos[0]).toMatchObject({ override: 'mine', fx: 0.2, zoom: 2 });
    expect(merged.find((p) => p.key === 'stats')!.hidden).toBe(true);
    const day3 = merged.find((p) => p.key === 'day:2026-05-03')!;
    const day3Fresh = generateDiary(input, 99).find((p) => p.key === 'day:2026-05-03')!;
    expect(day3.kind === 'day' && day3.text).toBe(day3Fresh.kind === 'day' && day3Fresh.text); // не правился — взят новый текст
  });

  it('новый день встаёт рядом с соседями, удалённый — пропадает, id сохраняются', () => {
    const first = fresh();
    const moreItems = [...items, item('2026-05-02', 0, 'Музей плитки')];
    const withNew = generateDiary({ ...input, items: moreItems, facts: { ...facts, items: 8, places: 8 } }, 1);
    const merged = mergeDiary(first, withNew);
    expect(merged.map((p) => p.key)).toEqual(['cover', 'overview', 'day:2026-05-01', 'day:2026-05-02', 'day:2026-05-03', 'day:2026-05-04', 'stats', 'map', 'closing']);
    const without = mergeDiary(merged, generateDiary({ ...input, items: items.filter((i) => i.date !== '2026-05-03') }, 1));
    expect(without.some((p) => p.key === 'day:2026-05-03')).toBe(false);
    expect(merged.find((p) => p.key === 'cover')!.id).toBe(first[0]!.id);
  });

  it('сохраняет фото, добавленные пользователем, и не теряет замену, если исходного фото больше нет', () => {
    const first = fresh().map((p) => (p.kind === 'day' && p.key === 'day:2026-05-01' ? { ...p, photos: [{ source: 'p1', override: 'mine', fx: 0.5, fy: 0.5, zoom: 1 }, { override: 'extra', fx: 0.5, fy: 0.5, zoom: 1 }] } : p));
    const noPhotos = generateDiary({ ...input, photosByItem: new Map() }, 1);
    const merged = mergeDiary(first, noPhotos).find((p) => p.key === 'day:2026-05-01')!;
    expect(merged.kind === 'day' && merged.photos.map((s) => s.override)).toEqual(['mine', 'extra']);
  });

  it('первая сборка возвращает свежие страницы как есть', () => {
    const f = fresh();
    expect(mergeDiary(undefined, f)).toBe(f);
    expect(mergeDiary([], f)).toBe(f);
  });
});
