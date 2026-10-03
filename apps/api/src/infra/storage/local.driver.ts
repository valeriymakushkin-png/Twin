import { mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { dirname, join, normalize, resolve } from 'node:path';
import type { AppConfig } from '../../config/app-config';
import { hmacSha256Hex } from '../../common/utils/crypto';
import type { Bucket, PutOptions, StorageDriver } from './storage.types';

/**
 * Filesystem driver for local development and CI. Files are served by
 * LocalFilesController; private files require an HMAC-signed, expiring URL.
 */
export class LocalStorageDriver implements StorageDriver {
  private readonly root: string;

  constructor(private readonly config: AppConfig) {
    this.root = resolve(config.LOCAL_STORAGE_DIR);
  }

  resolvePath(bucket: Bucket, key: string): string {
    const base = join(this.root, bucket);
    const full = normalize(join(base, key));
    if (!full.startsWith(base)) throw new Error('Path traversal detected');
    return full;
  }

  async put(bucket: Bucket, key: string, body: Buffer, opts: PutOptions): Promise<void> {
    const path = this.resolvePath(bucket, key);
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, body);
    await writeFile(`${path}.meta.json`, JSON.stringify({ contentType: opts.contentType }));
  }

  async get(bucket: Bucket, key: string): Promise<Buffer> {
    return readFile(this.resolvePath(bucket, key));
  }

  async exists(bucket: Bucket, key: string): Promise<boolean> {
    try {
      await stat(this.resolvePath(bucket, key));
      return true;
    } catch {
      return false;
    }
  }

  async delete(bucket: Bucket, keys: string[]): Promise<void> {
    await Promise.all(
      keys.flatMap((key) => {
        const path = this.resolvePath(bucket, key);
        return [rm(path, { force: true }), rm(`${path}.meta.json`, { force: true })];
      }),
    );
  }

  async contentType(bucket: Bucket, key: string): Promise<string> {
    try {
      const meta = JSON.parse(await readFile(`${this.resolvePath(bucket, key)}.meta.json`, 'utf8'));
      return meta.contentType ?? 'application/octet-stream';
    } catch {
      return 'application/octet-stream';
    }
  }

  sign(key: string, exp: number): string {
    return hmacSha256Hex(this.config.JWT_SECRET, `private:${key}:${exp}`);
  }

  async signedUrl(_bucket: Bucket, key: string, ttlSec: number): Promise<string> {
    const exp = Math.floor(Date.now() / 1000) + ttlSec;
    return `${this.config.PUBLIC_API_URL}/v1/files/private/${key}?exp=${exp}&sig=${this.sign(key, exp)}`;
  }

  publicUrl(key: string): string {
    return `${this.config.PUBLIC_API_URL}/v1/files/public/${key}`;
  }
}
