import { afterEach, describe, expect, it, vi } from 'vitest';
import { newId } from './id';

describe('идентификаторы', () => {
  afterEach(() => vi.unstubAllGlobals());
  it('16 символов hex, не повторяются', () => {
    const ids = new Set(Array.from({ length: 2000 }, newId));
    expect(ids.size).toBe(2000);
    for (const id of ids) expect(id).toMatch(/^[0-9a-f]{16}$/);
  });
  it('работает и там, где нет crypto.randomUUID (обычный http)', () => {
    vi.stubGlobal('crypto', { getRandomValues: globalThis.crypto.getRandomValues.bind(globalThis.crypto) });
    expect(newId()).toMatch(/^[0-9a-f]{16}$/);
  });
});
