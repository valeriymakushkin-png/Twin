import { describe, expect, it } from 'vitest';
import { dedupeConsecutive, haversineKm, parseCoordinates, routeLengthKm } from './geo';

const near = (a: { lat: number; lng: number } | null, lat: number, lng: number, eps = 1e-4) => {
  expect(a).not.toBeNull();
  expect(a!.lat).toBeCloseTo(lat, 3);
  expect(a!.lng).toBeCloseTo(lng, 3);
  void eps;
};

describe('расстояния', () => {
  // Эталоны: Москва — Санкт-Петербург ≈ 634 км по прямой; Лиссабон — Мадрид ≈ 503 км; Париж — Нью-Йорк ≈ 5837 км.
  const moscow = { lat: 55.7558, lng: 37.6173 };
  const spb = { lat: 59.9343, lng: 30.3351 };
  const lisbon = { lat: 38.7223, lng: -9.1393 };
  const madrid = { lat: 40.4168, lng: -3.7038 };
  const paris = { lat: 48.8566, lng: 2.3522 };
  const nyc = { lat: 40.7128, lng: -74.006 };
  it('совпадает с известными расстояниями с точностью до нескольких километров', () => {
    expect(haversineKm(moscow, spb)).toBeGreaterThan(630);
    expect(haversineKm(moscow, spb)).toBeLessThan(638);
    expect(haversineKm(lisbon, madrid)).toBeGreaterThan(499);
    expect(haversineKm(lisbon, madrid)).toBeLessThan(507);
    expect(haversineKm(paris, nyc)).toBeGreaterThan(5820);
    expect(haversineKm(paris, nyc)).toBeLessThan(5855);
  });
  it('симметрично, нуль для одной точки, через 180-й меридиан считает кратчайший путь', () => {
    expect(haversineKm(paris, nyc)).toBeCloseTo(haversineKm(nyc, paris), 6);
    expect(haversineKm(paris, paris)).toBe(0);
    expect(haversineKm({ lat: 0, lng: 179 }, { lat: 0, lng: -179 })).toBeCloseTo(222.4, 0);
  });
  it('длина маршрута — сумма отрезков; одинаковые подряд точки не считаются', () => {
    expect(routeLengthKm([lisbon])).toBe(0);
    expect(routeLengthKm([lisbon, madrid, lisbon])).toBeCloseTo(2 * haversineKm(lisbon, madrid), 6);
    expect(dedupeConsecutive([lisbon, { lat: lisbon.lat + 0.0001, lng: lisbon.lng }, madrid]).length).toBe(2);
  });
});

describe('разбор координат', () => {
  it.each([
    ['38.6916, -9.2160', 38.6916, -9.216],
    ['38.6916 -9.2160', 38.6916, -9.216],
    ['38.6916,-9.2160', 38.6916, -9.216],
    ['(38.6916, -9.2160)', 38.6916, -9.216],
    ['38,6916; -9,2160', 38.6916, -9.216],
    ['-33.8688, 151.2093', -33.8688, 151.2093],
    ['N 38.6916 W 9.2160', 38.6916, -9.216],
    ['38.6916 N, 9.2160 W', 38.6916, -9.216],
    ['38°41\'29.8"N 9°12\'57.6"W', 38.69161, -9.21600],
    ['38°41′29.8″N 9°12′57.6″W', 38.69161, -9.216],
    ['35°39\'10"N 139°44\'43"E', 35.65278, 139.74528],
    ['33°52\'S 151°12\'E', -33.86667, 151.2],
    ['https://www.google.com/maps/place/Bel%C3%A9m+Tower/@38.6916,-9.216,17z/data=!3m1!4b1', 38.6916, -9.216],
    ['https://www.google.com/maps/place/X/data=!3d38.6916!4d-9.2160', 38.6916, -9.216],
    ['https://www.google.com/maps?q=38.6916,-9.2160', 38.6916, -9.216],
    ['https://maps.google.com/?ll=38.6916,-9.2160&z=15', 38.6916, -9.216],
    ['https://maps.apple.com/?ll=38.6916,-9.2160&q=Belem', 38.6916, -9.216],
    ['geo:38.6916,-9.2160', 38.6916, -9.216],
    ['https://yandex.ru/maps/?ll=37.617,55.755&z=12', 55.755, 37.617], // у Яндекса сначала долгота
  ])('%s', (input, lat, lng) => near(parseCoordinates(input), lat, lng));

  it.each(['', '   ', 'Лиссабон', '38.69', '91, 10', '10, 181', '1,2,3', 'https://example.com/page', 'N 38.69 N 9.21', '38°41\'N 9°12\'N'])('«%s» не принимается', (input) => expect(parseCoordinates(input)).toBeNull());
});
