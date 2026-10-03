import { Injectable } from '@nestjs/common';
import { MEME_FORMAT_CATALOG, type GenerateMemeInput, type GenerationDto, type MemeDto, type MemeFormat } from '@mascot/shared';
import { AppException, NotFound } from '../../common/errors';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { StorageService } from '../../infra/storage/storage.service';
import { GenerationsService } from '../generations/generations.service';
import { DtoMapper } from '../library/dto-mapper.service';
import { AbuseService } from '../moderation/abuse.service';
import { ModerationService } from '../moderation/moderation.service';
import { QuotaService } from '../quota/quota.service';

/** Splits free text into top/bottom for dual-text formats ("top | bottom" or two lines). */
export function splitMemeText(format: MemeFormat, input: { text?: string; topText?: string; bottomText?: string }) {
  if (input.topText || input.bottomText) return { top: input.topText ?? null, bottom: input.bottomText ?? null };
  const text = (input.text ?? '').trim();
  if (!MEME_FORMAT_CATALOG[format].dualText) return { top: text, bottom: null };
  const parts = text.split(/\s*(?:\||\n)\s*/).filter(Boolean);
  if (parts.length >= 2) return { top: parts[0]!, bottom: parts.slice(1).join(' ') };
  const words = text.split(/\s+/);
  if (words.length < 4) return { top: null, bottom: text };
  const mid = Math.ceil(words.length / 2);
  return { top: words.slice(0, mid).join(' '), bottom: words.slice(mid).join(' ') };
}

@Injectable()
export class MemesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly generations: GenerationsService,
    private readonly quota: QuotaService,
    private readonly mapper: DtoMapper,
    private readonly moderation: ModerationService,
    private readonly abuse: AbuseService,
    private readonly storage: StorageService,
  ) {}

  /** POST /generate-meme */
  async generate(userId: string, input: GenerateMemeInput & { format: MemeFormat }, idempotencyKey?: string): Promise<{ meme: MemeDto; generation: GenerationDto }> {
    const avatar = await this.prisma.avatar.findFirst({ where: { id: input.avatarId, userId, deletedAt: null, status: 'READY' } });
    if (!avatar) throw new NotFound('Mascot');
    const { top, bottom } = splitMemeText(input.format, input);
    const verdict = await this.moderation.checkText([top, bottom].filter(Boolean).join('\n'));
    if (verdict.flagged) {
      await this.abuse.record('TEXT_POLICY', verdict.critical ? 'HIGH' : 'LOW', userId, { categories: verdict.categories, kind: 'meme' });
      throw new AppException('TEXT_POLICY', 'This text cannot be used. Please keep it friendly and avoid links or personal data.');
    }

    return this.generations.launch({
      userId,
      type: 'MEME',
      idempotencyKey,
      authorize: () => this.quota.authorizeMeme(userId),
      persist: async (tx, charge, priority) => {
        const meme = await tx.meme.create({
          data: { userId, avatarId: avatar.id, format: input.format, topText: top, bottomText: bottom, emotion: input.emotion ?? null },
        });
        const generation = await tx.generation.create({
          data: {
            userId,
            avatarId: avatar.id,
            styleId: avatar.styleId,
            type: 'MEME',
            stage: 'QUEUED',
            priority,
            idempotencyKey,
            resultId: meme.id,
            input: { memeId: meme.id, format: input.format, topText: top, bottomText: bottom, emotion: input.emotion ?? null, charge: { ...charge } },
          },
        });
        const updated = await tx.meme.update({ where: { id: meme.id }, data: { generationId: generation.id } });
        return { generation, result: { meme: this.mapper.meme(updated), generation: await this.generations.toDto(generation) } };
      },
      replay: async (generation) => ({
        meme: this.mapper.meme(await this.prisma.meme.findUniqueOrThrow({ where: { id: generation.resultId! } })),
        generation: await this.generations.toDto(generation),
      }),
    });
  }

  async list(userId: string, avatarId?: string): Promise<MemeDto[]> {
    const memes = await this.prisma.meme.findMany({
      where: { userId, ...(avatarId ? { avatarId } : {}) },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    return memes.map((m) => this.mapper.meme(m));
  }

  async remove(userId: string, memeId: string): Promise<void> {
    const meme = await this.prisma.meme.findFirst({ where: { id: memeId, userId } });
    if (!meme) return;
    await this.storage.delete('public', [meme.imageKey]);
    await this.prisma.meme.delete({ where: { id: meme.id } });
  }
}
