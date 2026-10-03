import { Injectable } from '@nestjs/common';
import { VIDEO_TEMPLATE_CATALOG, type GenerateVideoInput, type GenerationDto, type VideoDto } from '@mascot/shared';
import { AppException, NotFound } from '../../common/errors';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { GenerationsService } from '../generations/generations.service';
import { DtoMapper } from '../library/dto-mapper.service';
import { AbuseService } from '../moderation/abuse.service';
import { ModerationService } from '../moderation/moderation.service';
import { QuotaService } from '../quota/quota.service';

@Injectable()
export class VideosService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly generations: GenerationsService,
    private readonly quota: QuotaService,
    private readonly mapper: DtoMapper,
    private readonly moderation: ModerationService,
    private readonly abuse: AbuseService,
  ) {}

  /** POST /generate-video (Premium). */
  async generate(
    userId: string,
    input: GenerateVideoInput & { aspectRatio: NonNullable<GenerateVideoInput['aspectRatio']> },
    idempotencyKey?: string,
  ): Promise<{ video: VideoDto; generation: GenerationDto }> {
    const avatar = await this.prisma.avatar.findFirst({ where: { id: input.avatarId, userId, deletedAt: null, status: 'READY' } });
    if (!avatar) throw new NotFound('Mascot');
    const template = VIDEO_TEMPLATE_CATALOG[input.template];
    const script = input.script?.trim() || undefined;
    if (template.scriptMode === 'required' && !script) {
      throw new AppException('SCRIPT_REQUIRED', `The ${template.label} template needs a script for your mascot to say.`);
    }
    if (template.scriptMode === 'none' && script) throw new AppException('SCRIPT_NOT_SUPPORTED', `${template.label} videos have no voice-over.`);
    if (script && script.length > template.maxScriptChars) {
      throw new AppException('SCRIPT_TOO_LONG', `Script must be at most ${template.maxScriptChars} characters.`);
    }
    const text = [input.prompt, script].filter(Boolean).join('\n');
    if (text) {
      const verdict = await this.moderation.checkText(text);
      if (verdict.flagged) {
        await this.abuse.record('TEXT_POLICY', verdict.critical ? 'HIGH' : 'MEDIUM', userId, { categories: verdict.categories, kind: 'video' });
        throw new AppException('TEXT_POLICY', 'This prompt cannot be used. Please keep it friendly.');
      }
    }

    return this.generations.launch({
      userId,
      type: 'VIDEO',
      idempotencyKey,
      authorize: () => this.quota.authorizeVideo(userId, template.cost),
      persist: async (tx, charge, priority) => {
        const video = await tx.video.create({
          data: {
            userId,
            avatarId: avatar.id,
            template: template.key,
            aspectRatio: input.aspectRatio,
            prompt: input.prompt ?? null,
            script: script ?? null,
            voice: script ? (input.voice ?? 'nova') : null,
            costUnits: template.cost,
          },
        });
        const generation = await tx.generation.create({
          data: {
            userId,
            avatarId: avatar.id,
            styleId: avatar.styleId,
            type: 'VIDEO',
            stage: 'QUEUED',
            priority,
            idempotencyKey,
            resultId: video.id,
            input: { videoId: video.id, template: template.key, aspectRatio: input.aspectRatio, charge: { ...charge } },
          },
        });
        const updated = await tx.video.update({ where: { id: video.id }, data: { generationId: generation.id } });
        return { generation, result: { video: this.mapper.video(updated), generation: await this.generations.toDto(generation) } };
      },
      replay: async (generation) => ({
        video: this.mapper.video(await this.prisma.video.findUniqueOrThrow({ where: { id: generation.resultId! } })),
        generation: await this.generations.toDto(generation),
      }),
    });
  }

  async list(userId: string, avatarId?: string): Promise<VideoDto[]> {
    const rows = await this.prisma.video.findMany({ where: { userId, ...(avatarId ? { avatarId } : {}) }, orderBy: { createdAt: 'desc' }, take: 50 });
    return rows.map((v) => this.mapper.video(v));
  }

  async get(userId: string, id: string): Promise<VideoDto> {
    const video = await this.prisma.video.findFirst({ where: { id, userId } });
    if (!video) throw new NotFound('Video');
    return this.mapper.video(video);
  }
}
