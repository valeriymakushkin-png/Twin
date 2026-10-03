import { createHash, createHmac, randomBytes, timingSafeEqual } from 'node:crypto';

const BASE62 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

/** Cryptographically random base62 string (rejection sampling, no modulo bias). */
export function randomBase62(length: number): string {
  let out = '';
  while (out.length < length) {
    const bytes = randomBytes(length * 2);
    for (const b of bytes) {
      if (b < 248) out += BASE62[b % 62];
      if (out.length === length) break;
    }
  }
  return out;
}

/** Lowercase alphanumeric id — Telegram sticker set names only allow [a-z0-9_]. */
export function randomSlug(length: number): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let out = '';
  while (out.length < length) {
    for (const b of randomBytes(length * 2)) {
      if (b < 252) out += alphabet[b % 36];
      if (out.length === length) break;
    }
  }
  return out;
}

export function sha256Hex(data: Buffer | string): string {
  return createHash('sha256').update(data).digest('hex');
}

export function hmacSha256Hex(key: Buffer | string, data: string): string {
  return createHmac('sha256', key).update(data).digest('hex');
}

export function safeEqualHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  try {
    return timingSafeEqual(Buffer.from(a, 'hex'), Buffer.from(b, 'hex'));
  } catch {
    return false;
  }
}

export function safeEqualString(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

/** Minimal HS256 JWT signer (used for Kling API auth). */
export function signHs256Jwt(payload: Record<string, unknown>, secret: string): string {
  const enc = (obj: unknown) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const header = enc({ alg: 'HS256', typ: 'JWT' });
  const body = enc(payload);
  const sig = createHmac('sha256', secret).update(`${header}.${body}`).digest('base64url');
  return `${header}.${body}.${sig}`;
}
