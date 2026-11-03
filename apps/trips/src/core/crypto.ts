import type { Sealed } from './db';

/**
 * Защита документов. Схема простыми словами:
 *  1. При создании «сейфа» генерируется случайный ключ документов (DEK, 256 бит). Им шифруются все файлы.
 *  2. Сам DEK хранится только в «запечатанном» виде: он зашифрован ключом, выведенным из PIN-кода пользователя
 *     (PBKDF2-SHA256, много итераций — перебор PIN замедляется).
 *  3. Смена PIN перешифровывает только DEK, а не все файлы.
 *  4. PIN нигде не хранится. Забытый PIN восстановить нельзя — спасает только резервная копия.
 * Всё делает встроенный в браузер Web Crypto, сторонних библиотек нет.
 */

export interface VaultParams {
  v: 1;
  salt: Uint8Array;
  iterations: number;
  /** DEK, зашифрованный ключом из PIN */
  wrappedKey: Sealed;
}

export const DEFAULT_ITERATIONS = 600_000;
const enc = new TextEncoder();
const dec = new TextDecoder();

/** Web Crypto принимает только «чистые» буферы; копия снимает типовые придирки TypeScript к SharedArrayBuffer. */
const buf = (u: Uint8Array): ArrayBuffer => u.slice().buffer as ArrayBuffer;

const randomBytes = (n: number) => crypto.getRandomValues(new Uint8Array(n));

async function keyFromPin(pin: string, salt: Uint8Array, iterations: number): Promise<CryptoKey> {
  const base = await crypto.subtle.importKey('raw', enc.encode(pin), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt: buf(salt), iterations }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}

const importDek = (raw: Uint8Array) => crypto.subtle.importKey('raw', buf(raw), 'AES-GCM', false, ['encrypt', 'decrypt']);

export async function seal(key: CryptoKey, bytes: Uint8Array): Promise<Sealed> {
  const iv = randomBytes(12);
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv: buf(iv) }, key, buf(bytes)));
  return { iv, ct };
}

/** Бросает ошибку, если ключ неверный или данные повреждены (AES-GCM проверяет подлинность). */
export async function open(key: CryptoKey, sealed: Sealed): Promise<Uint8Array> {
  return new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: buf(sealed.iv) }, key, buf(sealed.ct)));
}

export const sealJson = (key: CryptoKey, value: unknown) => seal(key, enc.encode(JSON.stringify(value)));
export async function openJson<T>(key: CryptoKey, sealed: Sealed): Promise<T> {
  return JSON.parse(dec.decode(await open(key, sealed))) as T;
}

/** Создаёт сейф с новым PIN. Возвращает параметры для сохранения и ключ для работы прямо сейчас. */
export async function createVault(pin: string, iterations = DEFAULT_ITERATIONS): Promise<{ params: VaultParams; dek: CryptoKey }> {
  const salt = randomBytes(16);
  const raw = randomBytes(32);
  const kek = await keyFromPin(pin, salt, iterations);
  return { params: { v: 1, salt, iterations, wrappedKey: await seal(kek, raw) }, dek: await importDek(raw) };
}

/** Проверяет PIN. Неверный PIN → null (без подсказок, что именно не так). */
export async function unlockVault(params: VaultParams, pin: string): Promise<CryptoKey | null> {
  try {
    const kek = await keyFromPin(pin, params.salt, params.iterations);
    return await importDek(await open(kek, params.wrappedKey));
  } catch {
    return null;
  }
}

/** Новый PIN при известном старом: файлы не трогаем, меняется только обёртка DEK. */
export async function changeVaultPin(params: VaultParams, oldPin: string, newPin: string, iterations = params.iterations): Promise<VaultParams | null> {
  try {
    const raw = await open(await keyFromPin(oldPin, params.salt, params.iterations), params.wrappedKey);
    const salt = randomBytes(16);
    return { v: 1, salt, iterations, wrappedKey: await seal(await keyFromPin(newPin, salt, iterations), raw) };
  } catch {
    return null;
  }
}

// --- Пароль для файла резервной копии -------------------------------------------------------------------------------

const MAGIC = enc.encode('VYLOENC1');

/** Шифрует произвольные байты паролем: [метка 8][соль 16][iv 12][шифртекст]. */
export async function encryptWithPassword(bytes: Uint8Array, password: string, iterations = DEFAULT_ITERATIONS): Promise<Uint8Array> {
  const salt = randomBytes(16);
  const { iv, ct } = await seal(await keyFromPin(password, salt, iterations), bytes);
  const out = new Uint8Array(MAGIC.length + 4 + 16 + 12 + ct.length);
  out.set(MAGIC, 0);
  new DataView(out.buffer).setUint32(MAGIC.length, iterations);
  out.set(salt, MAGIC.length + 4);
  out.set(iv, MAGIC.length + 20);
  out.set(ct, MAGIC.length + 32);
  return out;
}

export function isPasswordEncrypted(bytes: Uint8Array): boolean {
  return bytes.length > MAGIC.length && MAGIC.every((b, i) => bytes[i] === b);
}

/** Неверный пароль или повреждённый файл → null. */
export async function decryptWithPassword(bytes: Uint8Array, password: string): Promise<Uint8Array | null> {
  try {
    const iterations = new DataView(bytes.buffer, bytes.byteOffset).getUint32(MAGIC.length);
    if (iterations < 1 || iterations > 5_000_000) return null;
    const salt = bytes.slice(MAGIC.length + 4, MAGIC.length + 20);
    const iv = bytes.slice(MAGIC.length + 20, MAGIC.length + 32);
    return await open(await keyFromPin(password, salt, iterations), { iv, ct: bytes.slice(MAGIC.length + 32) });
  } catch {
    return null;
  }
}
