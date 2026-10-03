import {
  DeleteObjectsCommand,
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import type { AppConfig } from '../../config/app-config';
import type { Bucket, PutOptions, StorageDriver } from './storage.types';

/**
 * S3-compatible driver. Production target is Cloudflare R2:
 *   S3_ENDPOINT=https://<account_id>.r2.cloudflarestorage.com, S3_REGION=auto
 * The public bucket is bound to a custom domain (PUBLIC_CDN_URL) behind Cloudflare's CDN.
 */
export class S3StorageDriver implements StorageDriver {
  private readonly client: S3Client;

  constructor(private readonly config: AppConfig) {
    this.client = new S3Client({
      region: config.S3_REGION,
      endpoint: config.S3_ENDPOINT,
      forcePathStyle: config.S3_FORCE_PATH_STYLE,
      credentials:
        config.S3_ACCESS_KEY_ID && config.S3_SECRET_ACCESS_KEY
          ? { accessKeyId: config.S3_ACCESS_KEY_ID, secretAccessKey: config.S3_SECRET_ACCESS_KEY }
          : undefined,
    });
  }

  private bucketName(bucket: Bucket): string {
    return bucket === 'public' ? this.config.S3_PUBLIC_BUCKET : this.config.S3_PRIVATE_BUCKET;
  }

  async put(bucket: Bucket, key: string, body: Buffer, opts: PutOptions): Promise<void> {
    await this.client.send(
      new PutObjectCommand({
        Bucket: this.bucketName(bucket),
        Key: key,
        Body: body,
        ContentType: opts.contentType,
        CacheControl: opts.cacheControl,
      }),
    );
  }

  async get(bucket: Bucket, key: string): Promise<Buffer> {
    const res = await this.client.send(new GetObjectCommand({ Bucket: this.bucketName(bucket), Key: key }));
    if (!res.Body) throw new Error(`Empty object body for ${key}`);
    return Buffer.from(await res.Body.transformToByteArray());
  }

  async exists(bucket: Bucket, key: string): Promise<boolean> {
    try {
      await this.client.send(new HeadObjectCommand({ Bucket: this.bucketName(bucket), Key: key }));
      return true;
    } catch (error) {
      const status = (error as { $metadata?: { httpStatusCode?: number } }).$metadata?.httpStatusCode;
      if (status === 404) return false;
      throw error;
    }
  }

  async delete(bucket: Bucket, keys: string[]): Promise<void> {
    for (let i = 0; i < keys.length; i += 1000) {
      const chunk = keys.slice(i, i + 1000);
      if (!chunk.length) continue;
      await this.client.send(
        new DeleteObjectsCommand({
          Bucket: this.bucketName(bucket),
          Delete: { Objects: chunk.map((Key) => ({ Key })), Quiet: true },
        }),
      );
    }
  }

  async signedUrl(bucket: Bucket, key: string, ttlSec: number): Promise<string> {
    return getSignedUrl(this.client, new GetObjectCommand({ Bucket: this.bucketName(bucket), Key: key }), {
      expiresIn: ttlSec,
    });
  }

  publicUrl(key: string): string {
    return `${(this.config.PUBLIC_CDN_URL ?? '').replace(/\/$/, '')}/${key}`;
  }
}
