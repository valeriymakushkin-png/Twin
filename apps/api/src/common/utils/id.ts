import { randomBytes } from 'node:crypto';

let counter = randomBytes(2).readUInt16BE(0);

/**
 * Collision-resistant, roughly time-sortable id compatible with Prisma's cuid column
 * format (lowercase alphanumeric, starts with "c", 25 chars). Used when an id must be
 * known before the row is inserted (e.g. to build storage keys).
 */
export function createId(): string {
  counter = (counter + 1) % 1679616;
  const time = Date.now().toString(36).padStart(9, '0');
  const count = counter.toString(36).padStart(4, '0');
  const rand = BigInt(`0x${randomBytes(8).toString('hex')}`).toString(36).padStart(11, '0').slice(-11);
  return `c${time}${count}${rand}`;
}
