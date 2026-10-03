import { Injectable } from '@nestjs/common';
import { createId } from '../../common/utils/id';
import { StorageKeys, StorageService } from '../../infra/storage/storage.service';
import { applyWatermark, composeProfilePicture, renderVariants, toJpeg } from '../../ai/render/image-ops';

export interface StoredRender {
  renderId: string;
  masterKey: string;
  imageKey: string;
  thumbKey: string;
  shareKey: string;
}

/** Writes render variants to R2: HD master (private) + display/thumb/share (public CDN). */
@Injectable()
export class AssetWriter {
  constructor(private readonly storage: StorageService) {}

  async storeRender(avatarId: string, master: Buffer, opts: { watermark: boolean; gradient: [string, string] }): Promise<StoredRender> {
    const renderId = createId();
    const { display, thumb } = await renderVariants(master, { watermark: opts.watermark });
    let share = await toJpeg(await composeProfilePicture(master, { key: 'aurora', kind: 'gradient', colors: opts.gradient }, 1080), 88);
    if (opts.watermark) share = await applyWatermark(share);
    const keys = {
      masterKey: StorageKeys.renderMaster(avatarId, renderId),
      imageKey: StorageKeys.renderDisplay(avatarId, renderId),
      thumbKey: StorageKeys.renderThumb(avatarId, renderId),
      shareKey: StorageKeys.renderShare(avatarId, renderId),
    };
    await Promise.all([
      this.storage.putPrivate(keys.masterKey, master, 'image/png'),
      this.storage.putPublic(keys.imageKey, display, 'image/webp'),
      this.storage.putPublic(keys.thumbKey, thumb, 'image/webp'),
      this.storage.putPublic(keys.shareKey, share, 'image/jpeg'),
    ]);
    return { renderId, ...keys };
  }
}
