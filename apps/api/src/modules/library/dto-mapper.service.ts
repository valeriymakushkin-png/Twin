import { Injectable } from '@nestjs/common';
import type {
  Avatar,
  AvatarDna,
  AvatarRender,
  Meme,
  ProfilePicture,
  Sticker,
  StickerPack,
  Style,
  Video,
} from '@prisma/client';
import {
  MascotDnaSchema,
  type AvatarDto,
  type AvatarRenderDto,
  type MemeDto,
  type MemeFormat,
  type ProfilePictureDto,
  type StickerDto,
  type StickerEmotion,
  type StickerPackDto,
  type VideoAspectRatio,
  type VideoDto,
  type VideoTemplate,
} from '@mascot/shared';
import { AppConfig } from '../../config/app-config';
import { StorageService } from '../../infra/storage/storage.service';

export type AvatarWithRelations = Avatar & {
  style: Style;
  dna: AvatarDna | null;
  primaryRender: (AvatarRender & { style?: Style }) | null;
  renders: Array<AvatarRender & { style: Style }>;
  generations?: Array<{ id: string }>;
};

export type StickerPackWithRelations = StickerPack & { style: Style; stickers: Sticker[] };

/** Maps Prisma rows to the public API contract (no internal keys leak to clients). */
@Injectable()
export class DtoMapper {
  constructor(
    private readonly storage: StorageService,
    private readonly config: AppConfig,
  ) {}

  private url(key: string | null | undefined): string | null {
    return this.storage.publicUrl(key);
  }

  render(render: AvatarRender & { style: Style }, primaryId: string | null): AvatarRenderDto {
    return {
      id: render.id,
      styleSlug: render.style.slug,
      imageUrl: this.url(render.imageKey)!,
      thumbnailUrl: this.url(render.thumbKey)!,
      hdAvailable: true,
      outfitKey: render.outfitKey,
      poseKey: render.poseKey,
      accessoryKey: render.accessoryKey,
      isPrimary: render.id === primaryId,
      createdAt: render.createdAt.toISOString(),
    };
  }

  avatar(avatar: AvatarWithRelations): AvatarDto {
    const dna = avatar.dna
      ? MascotDnaSchema.safeParse({
          ...avatar.dna,
          proportions: avatar.dna.proportions ?? undefined,
        })
      : null;
    const primary = avatar.primaryRender;
    return {
      id: avatar.id,
      name: avatar.name,
      status: avatar.status,
      styleSlug: avatar.style.slug,
      imageUrl: primary ? this.url(primary.imageKey) : null,
      thumbnailUrl: primary ? this.url(primary.thumbKey) : null,
      cardUrl: this.url(avatar.cardKey),
      shareSlug: avatar.shareSlug,
      shareUrl: `${this.config.WEB_APP_URL}/m/${avatar.shareSlug}`,
      dna: dna?.success ? dna.data : null,
      renders: avatar.renders.map((r) => this.render(r, avatar.primaryRenderId)),
      latestGenerationId: avatar.generations?.[0]?.id ?? null,
      createdAt: avatar.createdAt.toISOString(),
    };
  }

  sticker(sticker: Sticker): StickerDto {
    return {
      id: sticker.id,
      emotion: sticker.emotion as StickerEmotion,
      emoji: sticker.emoji,
      imageUrl: this.url(sticker.imageKey),
      status: sticker.status,
    };
  }

  stickerPack(pack: StickerPackWithRelations): StickerPackDto {
    return {
      id: pack.id,
      avatarId: pack.avatarId,
      title: pack.title,
      styleSlug: pack.style.slug,
      status: pack.status,
      telegramSetName: pack.telegramSetName,
      addStickersUrl: pack.status === 'PUBLISHED' && pack.telegramSetName ? `https://t.me/addstickers/${pack.telegramSetName}` : null,
      stickers: [...pack.stickers].sort((a, b) => a.sortOrder - b.sortOrder).map((s) => this.sticker(s)),
      generationId: pack.generationId,
      createdAt: pack.createdAt.toISOString(),
    };
  }

  meme(meme: Meme): MemeDto {
    return {
      id: meme.id,
      avatarId: meme.avatarId,
      format: meme.format as MemeFormat,
      topText: meme.topText,
      bottomText: meme.bottomText,
      imageUrl: this.url(meme.imageKey),
      status: meme.status,
      generationId: meme.generationId,
      createdAt: meme.createdAt.toISOString(),
    };
  }

  pfp(pfp: ProfilePicture, hdUrl: string | null = null): ProfilePictureDto {
    return {
      id: pfp.id,
      avatarId: pfp.avatarId,
      backgroundKey: pfp.backgroundKey,
      mode: pfp.mode as 'composite' | 'ai',
      imageUrl: this.url(pfp.imageKey),
      hdUrl,
      status: pfp.status,
      generationId: pfp.generationId,
      createdAt: pfp.createdAt.toISOString(),
    };
  }

  video(video: Video): VideoDto {
    return {
      id: video.id,
      avatarId: video.avatarId,
      template: video.template as VideoTemplate,
      aspectRatio: video.aspectRatio as VideoAspectRatio,
      status: video.status,
      videoUrl: this.url(video.videoKey),
      thumbnailUrl: this.url(video.thumbnailKey),
      durationSec: video.durationSec,
      provider: video.provider,
      generationId: video.generationId,
      createdAt: video.createdAt.toISOString(),
    };
  }
}

export const AVATAR_INCLUDE = {
  style: true,
  dna: true,
  primaryRender: true,
  renders: { include: { style: true }, orderBy: { createdAt: 'desc' as const }, take: 30 },
  generations: { select: { id: true }, orderBy: { createdAt: 'desc' as const }, take: 1 },
} as const;
