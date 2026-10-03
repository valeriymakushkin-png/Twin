import { Module } from '@nestjs/common';
import { AvatarProcessor } from './avatar.processor';
import { MaintenanceProcessor } from './maintenance.processor';
import { MemeProcessor } from './meme.processor';
import { NotifyProcessor } from './notify.processor';
import { PfpProcessor } from './pfp.processor';
import { AssetWriter } from './shared/asset-writer.service';
import { ReactionImages } from './shared/reaction-images.service';
import { StickerProcessor } from './sticker.processor';
import { TelegramProcessor } from './telegram.processor';
import { VideoProcessor } from './video.processor';

/** Workers can be split per deployment with WORKER_QUEUES (e.g. "video" on a dedicated pool). */
const enabled = (process.env.WORKER_QUEUES ?? 'all').split(',').map((s) => s.trim());
const on = (queue: string) => enabled.includes('all') || enabled.includes(queue);

@Module({
  providers: [
    AssetWriter,
    ReactionImages,
    ...(on('avatar') ? [AvatarProcessor] : []),
    ...(on('sticker') ? [StickerProcessor] : []),
    ...(on('meme') ? [MemeProcessor] : []),
    ...(on('pfp') ? [PfpProcessor] : []),
    ...(on('video') ? [VideoProcessor] : []),
    ...(on('telegram') ? [TelegramProcessor] : []),
    ...(on('notify') ? [NotifyProcessor] : []),
    ...(on('maintenance') ? [MaintenanceProcessor] : []),
  ],
})
export class WorkersModule {}
