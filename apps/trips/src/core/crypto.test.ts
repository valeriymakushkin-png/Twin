import { describe, expect, it } from 'vitest';
import { changeVaultPin, createVault, decryptWithPassword, encryptWithPassword, isPasswordEncrypted, open, openJson, seal, sealJson, unlockVault } from './crypto';

// В тестах итераций мало, чтобы они шли быстро; в приложении по умолчанию 600 000.
const FAST = 1000;

describe('сейф с PIN-кодом', () => {
  it('открывается верным PIN и шифрует/расшифровывает данные', async () => {
    const { params, dek } = await createVault('482915', FAST);
    const sealed = await seal(dek, new TextEncoder().encode('паспорт'));
    const again = await unlockVault(params, '482915');
    expect(again).not.toBeNull();
    expect(new TextDecoder().decode(await open(again!, sealed))).toBe('паспорт');
  });

  it('неверный PIN не открывает сейф', async () => {
    const { params } = await createVault('482915', FAST);
    expect(await unlockVault(params, '000000')).toBeNull();
    expect(await unlockVault(params, '')).toBeNull();
  });

  it('шифртекст не содержит исходных данных и каждый раз разный', async () => {
    const { dek } = await createVault('482915', FAST);
    const data = new TextEncoder().encode('SECRET-SECRET-SECRET');
    const a = await seal(dek, data);
    const b = await seal(dek, data);
    expect(Buffer.from(a.ct).includes(Buffer.from('SECRET'))).toBe(false);
    expect(Buffer.from(a.ct).equals(Buffer.from(b.ct))).toBe(false);
  });

  it('подделанный шифртекст не расшифровывается', async () => {
    const { dek } = await createVault('482915', FAST);
    const sealed = await seal(dek, new Uint8Array([1, 2, 3, 4]));
    sealed.ct[0] = sealed.ct[0]! ^ 0xff;
    await expect(open(dek, sealed)).rejects.toThrow();
  });

  it('смена PIN сохраняет доступ к старым данным и закрывает старый PIN', async () => {
    const { params, dek } = await createVault('482915', FAST);
    const sealed = await sealJson(dek, { name: 'Билет' });
    const next = await changeVaultPin(params, '482915', 'новый-пароль', FAST);
    expect(next).not.toBeNull();
    expect(await unlockVault(next!, '482915')).toBeNull();
    const dek2 = await unlockVault(next!, 'новый-пароль');
    expect(await openJson(dek2!, sealed)).toEqual({ name: 'Билет' });
    expect(await changeVaultPin(params, 'неверный', 'x'.repeat(8), FAST)).toBeNull();
  });
});

describe('пароль на файл копии', () => {
  it('шифрует и расшифровывает, неверный пароль даёт null', async () => {
    const data = new Uint8Array([10, 20, 30, 40, 50]);
    const enc = await encryptWithPassword(data, 'пароль', FAST);
    expect(isPasswordEncrypted(enc)).toBe(true);
    expect(isPasswordEncrypted(data)).toBe(false);
    expect(Array.from((await decryptWithPassword(enc, 'пароль'))!)).toEqual([10, 20, 30, 40, 50]);
    expect(await decryptWithPassword(enc, 'другой')).toBeNull();
    expect(await decryptWithPassword(enc.slice(0, 20), 'пароль')).toBeNull();
  });
});
