export type Bucket = 'private' | 'public';

export interface PutOptions {
  contentType: string;
  cacheControl?: string;
}

export interface StorageDriver {
  put(bucket: Bucket, key: string, body: Buffer, opts: PutOptions): Promise<void>;
  get(bucket: Bucket, key: string): Promise<Buffer>;
  exists(bucket: Bucket, key: string): Promise<boolean>;
  delete(bucket: Bucket, keys: string[]): Promise<void>;
  signedUrl(bucket: Bucket, key: string, ttlSec: number): Promise<string>;
  publicUrl(key: string): string;
}

/** Long-lived immutable caching for content-addressed / unique keys. */
export const IMMUTABLE_CACHE = 'public, max-age=31536000, immutable';
export const PRIVATE_CACHE = 'private, max-age=0, no-store';
