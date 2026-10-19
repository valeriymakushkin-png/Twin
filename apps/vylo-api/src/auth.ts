import { createHmac, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';

const N = 16384;

export function hashPassword(password: string) {
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, 32, { N });
  return `scrypt$${N}$${salt.toString('base64url')}$${hash.toString('base64url')}`;
}

export function verifyPassword(password: string, stored: string) {
  const [scheme, n, salt, hash] = stored.split('$');
  if (scheme !== 'scrypt' || !salt || !hash) return false;
  const expected = Buffer.from(hash, 'base64url');
  const actual = scryptSync(password, Buffer.from(salt, 'base64url'), expected.length, { N: Number(n) });
  return timingSafeEqual(actual, expected);
}

/** Readable one-time password for invitations and resets. */
export const tempPassword = () => randomBytes(9).toString('base64url');

export interface TokenPayload {
  sub: string;
  /** Bumped on logout-everywhere, password change or role change, which invalidates old tokens */
  ver: number;
  exp: number;
}

export function signToken(p: TokenPayload, secret: string) {
  const body = Buffer.from(JSON.stringify(p)).toString('base64url');
  const sig = createHmac('sha256', secret).update(body).digest('base64url');
  return `${body}.${sig}`;
}

export function readToken(token: string, secret: string): TokenPayload | null {
  const [body, sig] = token.split('.');
  if (!body || !sig) return null;
  const expected = createHmac('sha256', secret).update(body).digest();
  const got = Buffer.from(sig, 'base64url');
  if (got.length !== expected.length || !timingSafeEqual(got, expected)) return null;
  try {
    const p = JSON.parse(Buffer.from(body, 'base64url').toString()) as TokenPayload;
    return p.exp > Date.now() ? p : null;
  } catch {
    return null;
  }
}
