import { Inject, Injectable, Logger } from '@nestjs/common';
import { describeDna, type MascotDna, MascotDnaSchema } from '@mascot/shared';
import { AppConfig } from '../config/app-config';
import { PipelineError } from '../common/errors';
import { MetricsService } from '../infra/metrics/metrics.service';
import { PrismaService } from '../infra/prisma/prisma.service';
import { StorageService } from '../infra/storage/storage.service';
import { StyleCatalogService, type ResolvedStyle } from '../modules/styles/style-catalog.service';
import { cosine } from './dna/dna-builder';
import { FACE_ANALYZER, type FaceAnalyzer } from './face/face.types';
import { IMAGE_PROVIDER, type ImageGenerationRequest, type ImageProvider } from './image/image-provider.types';
import type { PromptContext } from './prompts/prompt-compiler';
import { ProviderRateLimiter } from './provider-rate-limiter';
import { fitMaster, hasTransparentBackground, removeUniformBackground } from './render/image-ops';

export interface GeneratedMaster {
  master: Buffer;
  identityScore: number | null;
  provider: string;
  model: string;
  costMicros: number;
}

export interface AvatarContext {
  avatarId: string;
  userId: string;
  name: string;
  seed: number;
  dna: MascotDna;
  identity: string;
  embedding: number[];
  referencePhotoKeys: string[];
  style: ResolvedStyle;
  primaryMasterKey: string | null;
}

/**
 * Shared generation primitives used by every worker:
 *  - DNA-backed prompt context loading
 *  - best-of-N generation with identity scoring (ArcFace cosine vs DNA embedding)
 *  - transparency guarantee (native alpha → rembg → uniform-background flood fill)
 */
@Injectable()
export class MascotEngine {
  private readonly logger = new Logger(MascotEngine.name);

  constructor(
    @Inject(IMAGE_PROVIDER) readonly images: ImageProvider,
    @Inject(FACE_ANALYZER) readonly faces: FaceAnalyzer,
    private readonly config: AppConfig,
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly styles: StyleCatalogService,
    private readonly metrics: MetricsService,
    private readonly limiter: ProviderRateLimiter,
  ) {}

  async loadAvatarContext(avatarId: string, styleId?: string): Promise<AvatarContext> {
    const avatar = await this.prisma.avatar.findUnique({
      where: { id: avatarId },
      include: { dna: true, primaryRender: true },
    });
    if (!avatar || avatar.deletedAt) throw new PipelineError('AVATAR_NOT_FOUND', `Avatar ${avatarId} not found`);
    if (!avatar.dna) throw new PipelineError('DNA_MISSING', `Avatar ${avatarId} has no DNA yet`);
    const d = avatar.dna;
    const dna = MascotDnaSchema.parse({
      faceShape: d.faceShape,
      eyeShape: d.eyeShape,
      eyeColor: d.eyeColor,
      hairStyle: d.hairStyle,
      hairColor: d.hairColor,
      noseShape: d.noseShape,
      mouthShape: d.mouthShape,
      skinTone: d.skinTone,
      eyebrows: d.eyebrows,
      ageGroup: d.ageGroup,
      facialHair: d.facialHair,
      glasses: d.glasses,
      presentation: d.presentation,
      freckles: d.freckles,
      dimples: d.dimples,
      distinguishingFeatures: d.distinguishingFeatures,
      proportions: d.proportions ?? undefined,
    });
    return {
      avatarId: avatar.id,
      userId: avatar.userId,
      name: avatar.name,
      seed: avatar.seed,
      dna,
      identity: d.promptFragment || describeDna(dna),
      embedding: d.faceEmbedding,
      referencePhotoKeys: d.referencePhotoKeys,
      style: await this.styles.byId(styleId ?? avatar.styleId),
      primaryMasterKey: avatar.primaryRender?.masterKey ?? null,
    };
  }

  promptContext(ctx: AvatarContext, extra: Partial<PromptContext> = {}): PromptContext {
    return {
      dna: ctx.dna,
      identity: ctx.identity,
      style: ctx.style.recipe,
      opaqueOutput: !this.images.supportsTransparency,
      ...extra,
    };
  }

  /** Master render first (style anchor), then up to two real photos (likeness anchor). */
  async characterReferences(ctx: AvatarContext, photoCount = 2): Promise<Buffer[]> {
    const refs: Buffer[] = [];
    if (ctx.primaryMasterKey) refs.push(await this.storage.get('private', ctx.primaryMasterKey));
    for (const key of ctx.referencePhotoKeys.slice(0, photoCount)) {
      try {
        refs.push(await this.storage.get('private', key));
      } catch {
        // Source photos are purged after the retention window; the master render remains the anchor.
      }
    }
    return refs;
  }

  async ensureTransparent(image: Buffer, alreadyTransparent: boolean): Promise<Buffer> {
    if (alreadyTransparent && (await hasTransparentBackground(image))) return image;
    if (this.config.BACKGROUND_REMOVAL === 'face-service' && this.faces.removeBackground) {
      try {
        return await this.faces.removeBackground(image);
      } catch (error) {
        this.logger.warn(`rembg failed, falling back to flood fill: ${(error as Error).message}`);
      }
    }
    return removeUniformBackground(image);
  }

  /**
   * Generates `n` candidates and returns the most identity-faithful one as a fitted,
   * transparent 1024² master. Identity scoring is best-effort: stylised faces are not
   * always detectable, in which case the first candidate wins.
   */
  async generateMaster(req: ImageGenerationRequest, scoreAgainst?: number[], opts: { raw?: boolean } = {}): Promise<GeneratedMaster> {
    const started = Date.now();
    let result;
    if (this.images.name !== 'mock') await this.limiter.acquire(`image:${this.images.name}`, this.config.IMAGE_PROVIDER_RPM);
    try {
      result = await this.images.generate(req);
      this.metrics.providerRequests.inc({ provider: result.provider, operation: req.operation, outcome: 'ok' });
      this.metrics.providerCostMicros.inc({ provider: result.provider, operation: req.operation }, result.costMicros);
    } catch (error) {
      this.metrics.providerRequests.inc({ provider: this.images.name, operation: req.operation, outcome: 'error' });
      throw error;
    }
    if (!result.images.length) throw new PipelineError('EMPTY_RESULT', 'Provider returned no images', true);
    if (opts.raw) {
      return { master: result.images[0]!, identityScore: null, provider: result.provider, model: result.model, costMicros: result.costMicros };
    }

    const candidates = await Promise.all(
      result.images.map(async (img) => fitMaster(await this.ensureTransparent(img, result.transparent))),
    );

    let best = 0;
    let bestScore: number | null = null;
    if (scoreAgainst?.length && candidates.length > 1) {
      try {
        const analyses = await this.faces.analyze(candidates.map((data, i) => ({ id: String(i), data })));
        candidates.forEach((_, i) => {
          const emb = analyses.get(String(i))?.embedding;
          if (!emb) return;
          const score = cosine(emb, scoreAgainst);
          if (bestScore === null || score > bestScore) {
            bestScore = score;
            best = i;
          }
        });
      } catch (error) {
        this.logger.warn(`identity scoring skipped: ${(error as Error).message}`);
      }
    }
    this.logger.debug(`${req.operation} generated ${candidates.length} candidates in ${Date.now() - started}ms (score=${bestScore})`);
    return {
      master: candidates[best]!,
      identityScore: bestScore,
      provider: result.provider,
      model: result.model,
      costMicros: result.costMicros,
    };
  }
}
