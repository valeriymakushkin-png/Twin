import { Injectable } from '@nestjs/common';
import { AppConfig } from '../../config/app-config';
import { LocalStorageDriver } from './local.driver';
import { S3StorageDriver } from './s3.driver';
import { IMMUTABLE_CACHE, PRIVATE_CACHE, type Bucket, type StorageDriver } from './storage.types';

@Injectable()
export class StorageService {
  readonly driver: StorageDriver;

  constructor(private readonly config: AppConfig) {
    this.driver = config.STORAGE_DRIVER === 's3' ? new S3StorageDriver(config) : new LocalStorageDriver(config);
  }

  get local(): LocalStorageDriver | null {
    return this.driver instanceof LocalStorageDriver ? this.driver : null;
  }

  putPublic(key: string, body: Buffer, contentType: string): Promise<void> {
    return this.driver.put('public', key, body, { contentType, cacheControl: IMMUTABLE_CACHE });
  }

  putPrivate(key: string, body: Buffer, contentType: string): Promise<void> {
    return this.driver.put('private', key, body, { contentType, cacheControl: PRIVATE_CACHE });
  }

  get(bucket: Bucket, key: string): Promise<Buffer> {
    return this.driver.get(bucket, key);
  }

  exists(bucket: Bucket, key: string): Promise<boolean> {
    return this.driver.exists(bucket, key);
  }

  delete(bucket: Bucket, keys: Array<string | null | undefined>): Promise<void> {
    const clean = keys.filter((k): k is string => Boolean(k));
    return clean.length ? this.driver.delete(bucket, clean) : Promise.resolve();
  }

  publicUrl(key: string | null | undefined): string | null {
    return key ? this.driver.publicUrl(key) : null;
  }

  signedUrl(key: string, ttlSec = this.config.SIGNED_URL_TTL_SECONDS): Promise<string> {
    return this.driver.signedUrl('private', key, ttlSec);
  }
}

/** Centralised object key layout. Every key embeds an unguessable cuid. */
export const StorageKeys = {
  photo: (userId: string, photoId: string) => `photos/${userId}/${photoId}.jpg`,
  renderMaster: (avatarId: string, renderId: string) => `avatars/${avatarId}/renders/${renderId}/master.png`,
  renderDisplay: (avatarId: string, renderId: string) => `avatars/${avatarId}/renders/${renderId}/display.webp`,
  renderThumb: (avatarId: string, renderId: string) => `avatars/${avatarId}/renders/${renderId}/thumb.webp`,
  /** 1080² JPEG on the style gradient — Telegram inline results and stories require JPEG/photo media. */
  renderShare: (avatarId: string, renderId: string) => `avatars/${avatarId}/renders/${renderId}/share.jpg`,
  avatarCard: (avatarId: string, renderId: string) => `avatars/${avatarId}/cards/${renderId}.png`,
  stickerWebp: (packId: string, emotion: string) => `stickers/${packId}/${emotion}.webp`,
  stickerMaster: (packId: string, emotion: string) => `stickers/${packId}/${emotion}.png`,
  meme: (memeId: string) => `memes/${memeId}.jpg`,
  pfp: (pfpId: string) => `pfp/${pfpId}.png`,
  pfpHd: (pfpId: string) => `pfp/${pfpId}-hd.png`,
  video: (videoId: string) => `videos/${videoId}.mp4`,
  videoThumb: (videoId: string) => `videos/${videoId}.jpg`,
  stylePreview: (slug: string) => `styles/${slug}.webp`,
};
