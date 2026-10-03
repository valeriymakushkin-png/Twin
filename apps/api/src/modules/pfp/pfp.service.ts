import { Injectable } from '@nestjs/common';
import { getOutfit, getPfpBackground, getPose, type GeneratePfpInput, type GenerationDto, type ProfilePictureDto } from '@mascot/shared';
import { AppException, NotFound, PaywallException } from '../../common/errors';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { StorageService } from '../../infra/storage/storage.service';
import { GenerationsService } from '../generations/generations.service';
import { DtoMapper } from '../library/dto-mapper.service';
import { QuotaService } from '../quota/quota.service';

@Injectable()
export class PfpService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly generations: GenerationsService,
    private readonly quota: QuotaService,
    private readonly mapper: DtoMapper,
    private readonly storage: StorageService,
  ) {}

  /** POST /generate-pfp — "composite" is instant (Sharp), "ai" renders a new scene/pose (Premium). */
  async generate(
    userId: string,
    input: GeneratePfpInput & { mode: 'composite' | 'ai' },
    idempotencyKey?: string,
  ): Promise<{ pfp: ProfilePictureDto; generation: GenerationDto }> {
    const avatar = await this.prisma.avatar.findFirst({ where: { id: input.avatarId, userId, deletedAt: null, status: 'READY' } });
    if (!avatar) throw new NotFound('Mascot');
    const background = getPfpBackground(input.backgroundKey);
    if (!background) throw new AppException('UNKNOWN_BACKGROUND', `Unknown background ${input.backgroundKey}`);
    const outfit = getOutfit(input.outfitKey);
    const pose = getPose(input.poseKey);
    const mode = background.kind === 'scene' || outfit || pose ? 'ai' : input.mode;

    return this.generations.launch({
      userId,
      type: 'PROFILE_PICTURE',
      idempotencyKey,
      authorize: () =>
        this.quota.authorizePfp(userId, {
          ai: mode === 'ai',
          premiumBackground: background.isPremium,
          premiumWardrobe: Boolean(outfit?.isPremium || pose?.isPremium),
        }),
      persist: async (tx, charge, priority) => {
        const pfp = await tx.profilePicture.create({
          data: { userId, avatarId: avatar.id, backgroundKey: background.key, mode, outfitKey: outfit?.key, poseKey: pose?.key },
        });
        const generation = await tx.generation.create({
          data: {
            userId,
            avatarId: avatar.id,
            styleId: avatar.styleId,
            type: 'PROFILE_PICTURE',
            stage: 'QUEUED',
            priority: mode === 'composite' ? 0 : priority,
            idempotencyKey,
            resultId: pfp.id,
            input: { pfpId: pfp.id, backgroundKey: background.key, mode, outfitKey: outfit?.key ?? null, poseKey: pose?.key ?? null, charge: { ...charge } },
          },
        });
        const updated = await tx.profilePicture.update({ where: { id: pfp.id }, data: { generationId: generation.id } });
        return { generation, result: { pfp: this.mapper.pfp(updated), generation: await this.generations.toDto(generation) } };
      },
      replay: async (generation) => ({
        pfp: this.mapper.pfp(await this.prisma.profilePicture.findUniqueOrThrow({ where: { id: generation.resultId! } })),
        generation: await this.generations.toDto(generation),
      }),
    });
  }

  async list(userId: string, avatarId?: string): Promise<ProfilePictureDto[]> {
    const rows = await this.prisma.profilePicture.findMany({
      where: { userId, ...(avatarId ? { avatarId } : {}) },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    return rows.map((r) => this.mapper.pfp(r));
  }

  async hd(userId: string, id: string): Promise<{ url: string; expiresIn: number }> {
    const pfp = await this.prisma.profilePicture.findFirst({ where: { id, userId, status: 'READY' } });
    if (!pfp?.hdKey) throw new NotFound('Profile picture');
    const user = await this.quota.loadUser(userId);
    if (!this.quota.entitlements(user).hdExport) throw new PaywallException('HD_EXPORT', 'HD export is a Premium feature.');
    return { url: await this.storage.signedUrl(pfp.hdKey, 600), expiresIn: 600 };
  }
}
