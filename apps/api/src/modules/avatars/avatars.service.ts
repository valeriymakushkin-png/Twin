import { Injectable } from '@nestjs/common';
import {
  getOutfit,
  getPose,
  type AvatarDto,
  type GenerateAvatarInput,
  type GenerationDto,
  type StyleVariantInput,
} from '@mascot/shared';
import { AppException, NotFound, PaywallException } from '../../common/errors';
import { randomBase62 } from '../../common/utils/crypto';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { QueueService } from '../../infra/queue/queue.service';
import { StorageService } from '../../infra/storage/storage.service';
import { GenerationsService } from '../generations/generations.service';
import { AVATAR_INCLUDE, DtoMapper } from '../library/dto-mapper.service';
import { QuotaService } from '../quota/quota.service';
import { StyleCatalogService } from '../styles/style-catalog.service';

export interface AvatarLaunchResult {
  avatar: AvatarDto;
  generation: GenerationDto;
}

function validateWardrobe(outfitKey?: string, poseKey?: string) {
  const outfit = getOutfit(outfitKey);
  const pose = getPose(poseKey);
  if (outfitKey && !outfit) throw new AppException('UNKNOWN_OUTFIT', `Unknown outfit ${outfitKey}`);
  if (poseKey && !pose) throw new AppException('UNKNOWN_POSE', `Unknown pose ${poseKey}`);
  return { outfit, pose, premium: Boolean(outfit?.isPremium || pose?.isPremium) };
}

@Injectable()
export class AvatarsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly generations: GenerationsService,
    private readonly quota: QuotaService,
    private readonly styles: StyleCatalogService,
    private readonly mapper: DtoMapper,
    private readonly storage: StorageService,
    private readonly queues: QueueService,
  ) {}

  private async loadOwned(userId: string, avatarId: string) {
    const avatar = await this.prisma.avatar.findFirst({ where: { id: avatarId, userId, deletedAt: null }, include: AVATAR_INCLUDE });
    if (!avatar) throw new NotFound('Mascot');
    return avatar;
  }

  /** POST /generate-avatar */
  async generate(userId: string, input: GenerateAvatarInput, idempotencyKey?: string): Promise<AvatarLaunchResult> {
    if (idempotencyKey) {
      const existing = await this.generations.findIdempotent(userId, idempotencyKey);
      if (existing?.avatarId) {
        return { avatar: this.mapper.avatar(await this.loadOwned(userId, existing.avatarId)), generation: await this.generations.toDto(existing) };
      }
    }
    const style = await this.styles.bySlug(input.styleSlug);
    const wardrobe = validateWardrobe(input.outfitKey, input.poseKey);
    const user = await this.quota.loadUser(userId);
    this.quota.assertStyleAllowed(user, style, wardrobe.premium);
    await this.quota.assertCanCreateAvatar(user);

    // Photos can be reused across a user's mascots, except while another pipeline is using them.
    const photos = await this.prisma.photo.findMany({
      where: {
        id: { in: input.photoIds },
        userId,
        status: { in: ['ACCEPTED', 'UPLOADED'] },
        OR: [{ avatarId: null }, { avatar: { status: { not: 'PROCESSING' } } }],
      },
      select: { id: true },
    });
    if (photos.length < 5) {
      throw new AppException('NOT_ENOUGH_PHOTOS', `At least 5 usable photos are required (got ${photos.length}).`);
    }
    const profile = await this.prisma.user.findUniqueOrThrow({ where: { id: userId }, select: { firstName: true } });
    const defaultName = profile.firstName ? `${profile.firstName.slice(0, 24)}` : 'My Mascot';

    return this.generations.launch<AvatarLaunchResult>({
      userId,
      type: 'AVATAR',
      idempotencyKey,
      authorize: () => this.quota.authorizeAvatar(userId),
      persist: async (tx, charge, priority) => {
        const avatar = await tx.avatar.create({
          data: {
            userId,
            name: input.name ?? defaultName,
            status: 'PROCESSING',
            styleId: style.id,
            seed: Math.floor(Math.random() * 2 ** 31),
            shareSlug: randomBase62(10),
          },
        });
        await tx.photo.updateMany({ where: { id: { in: photos.map((p) => p.id) } }, data: { avatarId: avatar.id } });
        const generation = await tx.generation.create({
          data: {
            userId,
            avatarId: avatar.id,
            styleId: style.id,
            type: 'AVATAR',
            stage: 'UPLOADING',
            priority,
            idempotencyKey,
            input: {
              photoIds: photos.map((p) => p.id),
              styleSlug: style.slug,
              outfitKey: input.outfitKey ?? null,
              poseKey: input.poseKey ?? null,
              charge: { ...charge },
            },
          },
        });
        const full = await tx.avatar.findUniqueOrThrow({ where: { id: avatar.id }, include: AVATAR_INCLUDE });
        return { generation, result: { avatar: this.mapper.avatar(full), generation: await this.generations.toDto(generation) } };
      },
      replay: async (generation) => ({
        avatar: this.mapper.avatar(await this.loadOwned(userId, generation.avatarId!)),
        generation: await this.generations.toDto(generation),
      }),
    });
  }

  /** POST /avatars/:id/styles — re-render with another style / outfit / pose (DNA reused). */
  async createStyleVariant(userId: string, avatarId: string, input: StyleVariantInput, idempotencyKey?: string): Promise<GenerationDto> {
    const avatar = await this.loadOwned(userId, avatarId);
    if (avatar.status !== 'READY') throw new AppException('AVATAR_NOT_READY', 'Your mascot is still being created.');
    const style = await this.styles.bySlug(input.styleSlug);
    const wardrobe = validateWardrobe(input.outfitKey, input.poseKey);
    return this.generations.launch<GenerationDto>({
      userId,
      type: 'STYLE_VARIANT',
      idempotencyKey,
      authorize: () => this.quota.authorizeStyleRender(userId, style, wardrobe.premium),
      persist: async (tx, charge, priority) => {
        const generation = await tx.generation.create({
          data: {
            userId,
            avatarId,
            styleId: style.id,
            type: 'STYLE_VARIANT',
            stage: 'QUEUED',
            priority,
            idempotencyKey,
            input: { styleSlug: style.slug, outfitKey: input.outfitKey ?? null, poseKey: input.poseKey ?? null, charge: { ...charge } },
          },
        });
        return { generation, result: await this.generations.toDto(generation) };
      },
      replay: (generation) => this.generations.toDto(generation),
    });
  }

  /** GET /avatars */
  async list(userId: string): Promise<AvatarDto[]> {
    const avatars = await this.prisma.avatar.findMany({
      where: { userId, deletedAt: null },
      include: AVATAR_INCLUDE,
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    return avatars.map((a) => this.mapper.avatar(a));
  }

  async get(userId: string, avatarId: string): Promise<AvatarDto> {
    return this.mapper.avatar(await this.loadOwned(userId, avatarId));
  }

  async update(userId: string, avatarId: string, data: { name?: string; isPublic?: boolean }): Promise<AvatarDto> {
    await this.loadOwned(userId, avatarId);
    await this.prisma.avatar.update({ where: { id: avatarId }, data });
    return this.get(userId, avatarId);
  }

  async setPrimary(userId: string, avatarId: string, renderId: string): Promise<AvatarDto> {
    const avatar = await this.loadOwned(userId, avatarId);
    const render = await this.prisma.avatarRender.findFirst({ where: { id: renderId, avatarId: avatar.id } });
    if (!render) throw new NotFound('Render');
    await this.prisma.avatar.update({ where: { id: avatarId }, data: { primaryRenderId: render.id, styleId: render.styleId } });
    return this.get(userId, avatarId);
  }

  /** Signed URL to the transparent HD master (Premium). */
  async hdDownload(userId: string, avatarId: string, renderId: string): Promise<{ url: string; expiresIn: number }> {
    const avatar = await this.loadOwned(userId, avatarId);
    const render = await this.prisma.avatarRender.findFirst({ where: { id: renderId, avatarId: avatar.id } });
    if (!render) throw new NotFound('Render');
    const user = await this.quota.loadUser(userId);
    if (!this.quota.entitlements(user).hdExport) {
      throw new PaywallException('HD_EXPORT', 'HD transparent export is a Premium feature.');
    }
    return { url: await this.storage.signedUrl(render.masterKey, 600), expiresIn: 600 };
  }

  async remove(userId: string, avatarId: string): Promise<void> {
    await this.loadOwned(userId, avatarId);
    await this.prisma.avatar.update({ where: { id: avatarId }, data: { deletedAt: new Date(), isPublic: false } });
    await this.queues.maintenance({ task: 'delete-avatar', avatarId });
  }

  /** Public share page data (no auth). */
  async publicBySlug(slug: string) {
    const avatar = await this.prisma.avatar.findFirst({
      where: { shareSlug: slug, isPublic: true, status: 'READY', deletedAt: null },
      include: { style: true, primaryRender: true, user: { select: { referralCode: true } } },
    });
    if (!avatar) throw new NotFound('Mascot');
    return {
      name: avatar.name,
      styleSlug: avatar.style.slug,
      styleName: avatar.style.name,
      imageUrl: this.storage.publicUrl(avatar.primaryRender?.imageKey),
      cardUrl: this.storage.publicUrl(avatar.cardKey),
      referralCode: avatar.user.referralCode,
      createdAt: avatar.createdAt.toISOString(),
    };
  }
}
