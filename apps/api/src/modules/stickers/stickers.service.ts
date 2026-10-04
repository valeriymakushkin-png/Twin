import { Injectable } from '@nestjs/common';
import {
  DEFAULT_PACK_SIZE,
  DEFAULT_STICKER_ORDER,
  EMOTION_CATALOG,
  type GenerateStickersInput,
  type GenerationDto,
  type StickerPackDto,
} from '@mascot/shared';
import { AppException, NotFound, PaywallException } from '../../common/errors';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { QueueService } from '../../infra/queue/queue.service';
import { GenerationsService } from '../generations/generations.service';
import { DtoMapper } from '../library/dto-mapper.service';
import { QuotaService } from '../quota/quota.service';
import { StyleCatalogService } from '../styles/style-catalog.service';

const PACK_INCLUDE = { style: true, stickers: true } as const;

@Injectable()
export class StickersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly generations: GenerationsService,
    private readonly quota: QuotaService,
    private readonly styles: StyleCatalogService,
    private readonly mapper: DtoMapper,
    private readonly queues: QueueService,
  ) {}

  /** POST /generate-stickers */
  async generate(userId: string, input: GenerateStickersInput, idempotencyKey?: string): Promise<{ pack: StickerPackDto; generation: GenerationDto }> {
    const avatar = await this.prisma.avatar.findFirst({ where: { id: input.avatarId, userId, deletedAt: null } });
    if (!avatar) throw new NotFound('Mascot');
    if (avatar.status !== 'READY') throw new AppException('AVATAR_NOT_READY', 'Your mascot is still being created.');

    const user = await this.quota.loadUser(userId);
    const ent = this.quota.entitlements(user);
    const style = input.styleSlug ? await this.styles.bySlug(input.styleSlug) : await this.styles.byId(avatar.styleId);
    if (style.isPremium && !ent.allStyles) {
      throw new PaywallException('PREMIUM_STYLE', 'Stickers in this style are part of Premium.');
    }

    let emotions = input.emotions ? [...new Set(input.emotions)] : DEFAULT_STICKER_ORDER.slice(0, DEFAULT_PACK_SIZE);
    if (!input.emotions && ent.stickerAllowance !== null) {
      const remaining = Math.max(0, ent.stickerAllowance - user.stickersGenerated);
      if (remaining > 0) emotions = emotions.slice(0, remaining);
    }

    return this.generations.launch({
      userId,
      type: 'STICKER_PACK',
      idempotencyKey,
      authorize: () => this.quota.authorizeStickers(userId, emotions.length),
      persist: async (tx, charge, priority) => {
        const pack = await tx.stickerPack.create({
          data: {
            userId,
            avatarId: avatar.id,
            styleId: style.id,
            title: input.title ?? `${avatar.name} • Mascot AI`,
            status: 'GENERATING',
            stickers: {
              create: emotions.map((emotion, i) => ({ emotion, emoji: EMOTION_CATALOG[emotion].emoji, sortOrder: i })),
            },
          },
        });
        const generation = await tx.generation.create({
          data: {
            userId,
            avatarId: avatar.id,
            styleId: style.id,
            type: 'STICKER_PACK',
            stage: 'QUEUED',
            priority,
            idempotencyKey,
            resultId: pack.id,
            input: { packId: pack.id, emotions, styleSlug: style.slug, charge: { ...charge } },
          },
        });
        await tx.stickerPack.update({ where: { id: pack.id }, data: { generationId: generation.id } });
        const full = await tx.stickerPack.findUniqueOrThrow({ where: { id: pack.id }, include: PACK_INCLUDE });
        return { generation, result: { pack: this.mapper.stickerPack(full), generation: await this.generations.toDto(generation) } };
      },
      replay: async (generation) => ({
        pack: await this.get(userId, generation.resultId!),
        generation: await this.generations.toDto(generation),
      }),
    });
  }

  async list(userId: string, avatarId?: string): Promise<StickerPackDto[]> {
    const packs = await this.prisma.stickerPack.findMany({
      where: { userId, ...(avatarId ? { avatarId } : {}) },
      include: PACK_INCLUDE,
      orderBy: { createdAt: 'desc' },
      take: 30,
    });
    return packs.map((p) => this.mapper.stickerPack(p));
  }

  async get(userId: string, packId: string): Promise<StickerPackDto> {
    const pack = await this.prisma.stickerPack.findFirst({ where: { id: packId, userId }, include: PACK_INCLUDE });
    if (!pack) throw new NotFound('Sticker pack');
    return this.mapper.stickerPack(pack);
  }

  /** Creates (or updates) the Telegram sticker set owned by the user. */
  async publish(userId: string, packId: string): Promise<StickerPackDto> {
    const pack = await this.prisma.stickerPack.findFirst({ where: { id: packId, userId }, include: PACK_INCLUDE });
    if (!pack) throw new NotFound('Sticker pack');
    if (pack.status === 'PUBLISHING') return this.mapper.stickerPack(pack);
    if (pack.status !== 'READY' && pack.status !== 'PUBLISHED') {
      throw new AppException('PACK_NOT_READY', 'Stickers are still being generated.');
    }
    const unpublished = pack.stickers.filter((s) => s.status === 'READY' && !s.telegramFileId);
    if (pack.status === 'PUBLISHED' && unpublished.length === 0) return this.mapper.stickerPack(pack);
    await this.prisma.stickerPack.update({ where: { id: pack.id }, data: { status: 'PUBLISHING', publishError: null } });
    await this.queues.enqueueTelegram({ kind: 'publish-sticker-pack', packId: pack.id });
    return this.get(userId, packId);
  }
}
