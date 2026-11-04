import { describe, expect, it } from 'vitest';
import { countryAnchor, loadWorld, routeProjection, worldProjection } from './world';

describe('мировая карта', () => {
  it('границы стран загружаются и привязаны к кодам ISO', async () => {
    const w = await loadWorld();
    expect(w.countries.length).toBeGreaterThan(230);
    const code = (name: string) => w.countries.find((c) => c.name === name)?.code;
    expect(code('Portugal')).toBe('PT');
    expect(code('Thailand')).toBe('TH');
    expect(code('Russia')).toBe('RU');
    expect(code('United States of America')).toBe('US');
    expect(code('Kosovo')).toBe('XK');
    // все страны из списка приложения, у которых есть код, имеют границы на карте
    const have = new Set(w.countries.map((c) => c.code));
    for (const c of ['PT', 'TH', 'VN', 'JP', 'FR', 'TR', 'GE', 'AM', 'ID', 'AE', 'EG', 'MA', 'BR', 'AR', 'AU', 'NZ', 'CA', 'MX', 'IN', 'CN', 'KR', 'ES', 'IT', 'DE', 'GR', 'CZ', 'KZ', 'UZ']) expect(have.has(c), c).toBe(true);
  });

  it('опорная точка Франции — в Европе, а не в Атлантике; у островов — внутри страны', async () => {
    const w = await loadWorld();
    const anchor = (code: string) => countryAnchor(w.countries.find((c) => c.code === code)!.feature)!;
    const fr = anchor('FR');
    expect(fr.lat).toBeGreaterThan(42);
    expect(fr.lat).toBeLessThan(51);
    expect(fr.lng).toBeGreaterThan(-5);
    expect(fr.lng).toBeLessThan(8);
    const th = anchor('TH');
    expect(th.lat).toBeGreaterThan(5);
    expect(th.lat).toBeLessThan(21);
    expect(th.lng).toBeGreaterThan(97);
    expect(th.lng).toBeLessThan(106);
  });

  it('проекция мира помещает точки внутрь прямоугольника', () => {
    const p = worldProjection(1000, 520);
    for (const [lng, lat] of [[0, 0], [-179, 0], [179, 0], [0, 84], [0, -84]] as [number, number][]) {
      const [x, y] = p([lng, lat])!;
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThanOrEqual(1000);
      expect(y).toBeGreaterThanOrEqual(0);
      expect(y).toBeLessThanOrEqual(520);
    }
  });

  it('проекция маршрута вмещает все точки с отступом и сохраняет пропорции', () => {
    const pts = [{ lat: 38.72, lng: -9.14 }, { lat: 41.16, lng: -8.63 }, { lat: 37.02, lng: -7.93 }];
    const p = routeProjection(pts, 800, 500, 40);
    for (const pt of pts) {
      const [x, y] = p([pt.lng, pt.lat])!;
      expect(x).toBeGreaterThanOrEqual(39);
      expect(x).toBeLessThanOrEqual(761);
      expect(y).toBeGreaterThanOrEqual(39);
      expect(y).toBeLessThanOrEqual(461);
    }
    // одна точка: помещается в центр, окно не «схлопывается»
    const one = routeProjection([{ lat: 38.72, lng: -9.14 }], 800, 500, 40)([-9.14, 38.72])!;
    expect(one[0]).toBeCloseTo(400, 0);
    expect(one[1]).toBeCloseTo(250, 0);
    const spread = routeProjection([{ lat: 38.72, lng: -9.14 }], 800, 500, 40);
    const [x2] = spread([-9.14 + 1, 38.72])!;
    expect(x2 - 400).toBeLessThan(150); // 1° долготы — небольшой шаг в окне ~4°
  });
});
