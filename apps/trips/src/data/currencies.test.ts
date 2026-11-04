import { describe, expect, it } from 'vitest';
import { COUNTRIES } from './countries';
import { currencyForCountry } from './currencies';

/**
 * Справочник «страна → валюта» устаревает вместе с реформами. Эти проверки фиксируют, что он соответствует положению дел
 * на ноябрь 2026: Болгария перешла на евро с 1 января 2026, Хорватия — с 2023, Кюрасао и Синт-Мартен — на карибский гульден
 * (XCG) с 2025, Зимбабве — на ZiG (ZWG) с 2024, Сьерра-Леоне — на новый леоне (SLE) с 2022.
 */
describe('валюты стран', () => {
  it('еврозона 2026 (21 страна) и страны, использующие евро', () => {
    const euro = 'AT BE BG HR CY EE FI FR DE GR IE IT LV LT LU MT NL PT SK SI ES'.split(' ');
    for (const c of euro) expect(currencyForCountry(c), c).toBe('EUR');
    for (const c of ['AD', 'MC', 'SM', 'VA', 'ME', 'XK']) expect(currencyForCountry(c), c).toBe('EUR');
  });
  it('недавние реформы', () => {
    expect(currencyForCountry('CW')).toBe('XCG');
    expect(currencyForCountry('SX')).toBe('XCG');
    expect(currencyForCountry('ZW')).toBe('ZWG');
    expect(currencyForCountry('SL')).toBe('SLE');
  });
  it('у каждой страны из списка приложения есть валюта', () => {
    const missing = COUNTRIES.filter((c) => !currencyForCountry(c.code)).map((c) => c.code);
    expect(missing).toEqual([]);
  });
});
