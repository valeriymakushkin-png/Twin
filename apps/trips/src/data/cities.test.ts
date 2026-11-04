import { describe, expect, it } from 'vitest';
import { buildIndex, findCity, loadCities, normalizeName, searchCities, type CityRow } from './cities';

const rows: CityRow[] = [
  ['Lisbon', 'Лисабон|Лиссабон', 'PT', 38.717, -9.133, 517802],
  ['Paris', 'Париж', 'FR', 48.853, 2.349, 2138551],
  ['Paris', 'Париж|Парис', 'US', 33.661, -95.556, 24782],
  ['New York City', 'Нью-Йорк', 'US', 40.714, -74.006, 8804190],
  ['Kazan', 'Казань|Казан', 'RU', 55.789, 49.122, 1243500],
  ['Kazan', 'Казан', 'TR', 40.232, 32.684, 23889],
  ['Istanbul', 'Стамбул|Истанбул', 'TR', 41.014, 28.95, 14804116],
  ['Saint Petersburg', 'Санкт-Петербург', 'RU', 59.894, 30.264, 5351935],
];
const index = buildIndex(rows);

describe('нормализация', () => {
  it('убирает регистр, ё, диакритику и знаки', () => {
    expect(normalizeName('  Санкт-Петербург ')).toBe('санкт петербург');
    expect(normalizeName('Ёлки')).toBe('елки');
    expect(normalizeName('São Paulo')).toBe('sao paulo');
    expect(normalizeName("Saint-Jean-d'Acre")).toBe('saint jean d acre');
  });
});

describe('поиск городов', () => {
  it('находит по-русски и латиницей, на языке запроса', () => {
    expect(searchCities(index, 'лисс')[0]).toMatchObject({ label: 'Лиссабон' });
    expect(searchCities(index, 'Лисабон')[0]!.city.name).toBe('Lisbon');
    expect(searchCities(index, 'lisb')[0]).toMatchObject({ label: 'Lisbon' });
    expect(searchCities(index, 'стамб')[0]!.label).toBe('Стамбул');
    expect(searchCities(index, 'ISTANBUL')[0]!.city.cc).toBe('TR');
  });
  it('находит по слову внутри названия и с дефисом', () => {
    expect(searchCities(index, 'york')[0]!.city.name).toBe('New York City');
    expect(searchCities(index, 'нью йорк')[0]!.label).toBe('Нью-Йорк');
    expect(searchCities(index, 'санкт-пет')[0]!.label).toBe('Санкт-Петербург');
  });
  it('одноимённые города: сначала самый людный, а с указанной страной — города этой страны', () => {
    expect(searchCities(index, 'Paris').map((h) => h.city.cc)).toEqual(['FR', 'US']);
    expect(searchCities(index, 'Paris', { country: 'US' })[0]!.city.cc).toBe('US');
    expect(searchCities(index, 'казан', { country: 'TR' })[0]!.city.cc).toBe('TR');
  });
  it('слишком короткий запрос и несуществующий город — пусто', () => {
    expect(searchCities(index, 'л')).toEqual([]);
    expect(searchCities(index, 'Атлантида')).toEqual([]);
  });
  it('точное совпадение для автоопределения координат', () => {
    expect(findCity(index, 'Лиссабон')!.name).toBe('Lisbon');
    expect(findCity(index, 'казань')!.cc).toBe('RU');
    expect(findCity(index, 'Paris', 'US')!.cc).toBe('US');
    expect(findCity(index, 'Paris')!.cc).toBe('FR');
    expect(findCity(index, 'Лисс')).toBeUndefined(); // только полное название
    expect(findCity(index, '')).toBeUndefined();
  });
});

describe('встроенный список (реальные данные)', () => {
  it('содержит города для типичной поездки и находит их по-русски и латиницей', async () => {
    const real = await loadCities();
    expect(real.cities.length).toBeGreaterThan(20000);
    const cases: [string, string][] = [['Лиссабон', 'PT'], ['Бангкок', 'TH'], ['Краби', 'TH'], ['Стамбул', 'TR'], ['Тбилиси', 'GE'], ['Токио', 'JP'], ['Barcelona', 'ES'], ['Hanoi', 'VN'], ['Москва', 'RU'], ['Санкт-Петербург', 'RU'], ['Ереван', 'AM']];
    for (const [q, cc] of cases) expect(findCity(real, q)?.cc, q).toBe(cc);
    const lisbon = findCity(real, 'Лиссабон')!;
    expect(lisbon.lat).toBeCloseTo(38.72, 1);
    expect(lisbon.lng).toBeCloseTo(-9.14, 1);
    expect(searchCities(real, 'Пхук')[0]!.city.cc).toBe('TH');
  });
});
