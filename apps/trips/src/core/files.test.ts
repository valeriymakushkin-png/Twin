import { describe, expect, it } from 'vitest';
import { safeFileName } from './files';

describe('имя файла', () => {
  it('транслитерирует русские названия и чистит лишнее', () => {
    expect(safeFileName('Таиланд')).toBe('tailand');
    expect(safeFileName('Осень в Лиссабоне!')).toBe('osen-v-lissabone');
    expect(safeFileName('Щука/Ёж: «тест»')).toBe('shchuka-ezh-test');
    expect(safeFileName('Trip 2026_05.v2')).toBe('trip-2026_05.v2');
  });
  it('не бывает пустым и не бывает слишком длинным', () => {
    expect(safeFileName('???')).toBe('file');
    expect(safeFileName('a'.repeat(200)).length).toBe(60);
  });
});
