import { Inject, Logger } from '@nestjs/common';
import { Processor } from '@nestjs/bullmq';
import type { Job } from 'bullmq';
import type { Generation, Photo, Prisma } from '@prisma/client';
import { describeDna, dnaHighlights, getOutfit, getPose } from '@mascot/shared';
import { loadEnv } from '../config/env';
import { AppConfig } from '../config/app-config';
import { PipelineError } from '../common/errors';
import { mapLimit } from '../common/utils/async';
import { PrismaService } from '../infra/prisma/prisma.service';
import { QUEUES, type GenerationJobData } from '../infra/queue/queue.constants';
import { QueueService } from '../infra/queue/queue.service';
import { StorageKeys, StorageService } from '../infra/storage/storage.service';
import { buildDna, DNA_EXTRACTOR_VERSION, findIdentityOutliers, rankReferencePhotos } from '../ai/dna/dna-builder';
import { VISION_EXTRACTOR, type VisionExtractor } from '../ai/dna/vision.types';
import { classifyPose, FACE_ANALYZER, type FaceAnalysis, type FaceAnalyzer } from '../ai/face/face.types';
import { MascotEngine } from '../ai/mascot-engine.service';
import { compileAvatarPrompt, compileStyleVariantPrompt, PROMPT_VERSION } from '../ai/prompts/prompt-compiler';
import { characterCard } from '../ai/render/image-ops';
import { GenerationsService } from '../modules/generations/generations.service';
import { AbuseService } from '../modules/moderation/abuse.service';
import { QuotaService } from '../modules/quota/quota.service';
import { StyleCatalogService } from '../modules/styles/style-catalog.service';
import { UsersService } from '../modules/users/users.service';
import { AssetWriter } from './shared/asset-writer.service';
import { GenerationProcessor } from './shared/generation.processor';

interface AvatarInput {
  photoIds: string[];
  styleSlug: string;
  outfitKey: string | null;
  poseKey: string | null;
}

type AnalyzedPhoto = Omit<Photo, 'analysis'> & { analysis: FaceAnalysis; buffer: Buffer };

/**
 * The core avatar pipeline (5 stages, progress persisted for the processing screen):
 *  UPLOADING → FACE_ANALYSIS → FEATURE_EXTRACTION → CHARACTER_GENERATION → RENDERING
 * Also handles STYLE_VARIANT jobs, which reuse the stored DNA and skip stages 1-3.
 */
@Processor(QUEUES.AVATAR, { concurrency: loadEnv().WORKER_CONCURRENCY_AVATAR, lockDuration: 120_000 })
export class AvatarProcessor extends GenerationProcessor {
  protected readonly logger = new Logger(AvatarProcessor.name);

  constructor(
    generations: GenerationsService,
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly engine: MascotEngine,
    private readonly styles: StyleCatalogService,
    private readonly quota: QuotaService,
    private readonly users: UsersService,
    private readonly abuse: AbuseService,
    private readonly assets: AssetWriter,
    private readonly queues: QueueService,
    private readonly config: AppConfig,
    @Inject(FACE_ANALYZER) private readonly faces: FaceAnalyzer,
    @Inject(VISION_EXTRACTOR) private readonly vision: VisionExtractor,
  ) {
    super(generations);
  }

  protected async run(generation: Generation, job: Job<GenerationJobData>): Promise<void> {
    if (generation.type === 'STYLE_VARIANT') return this.runStyleVariant(generation);
    return this.runAvatar(generation, job);
  }

  private async runAvatar(generation: Generation, _job: Job<GenerationJobData>): Promise<void> {
    const input = generation.input as unknown as AvatarInput;
    const avatarId = generation.avatarId!;
    const userId = generation.userId;
    const stage = (key: string, pct: number) => this.generations.progress(generation.id, key, pct);

    /* 1. UPLOADING — fetch the photo set from the private bucket */
    await stage('UPLOADING', 3);
    const photos = await this.prisma.photo.findMany({ where: { id: { in: input.photoIds }, userId } });
    const buffers = await mapLimit(photos, 6, (p) => this.storage.get('private', p.storageKey));
    await stage('UPLOADING', 10);

    /* 2. FACE_ANALYSIS — detection, pose, quality, age, identity embeddings */
    await stage('FACE_ANALYSIS', 12);
    const needsAnalysis = photos.filter((p) => !(p.analysis as unknown as FaceAnalysis | null)?.embedding);
    if (needsAnalysis.length) {
      const fresh = await this.faces.analyze(
        needsAnalysis.map((p) => ({ id: p.id, data: buffers[photos.indexOf(p)], subject: userId })),
      );
      for (const p of needsAnalysis) {
        const a = fresh.get(p.id);
        if (!a) continue;
        p.analysis = a as unknown as Prisma.JsonValue;
        await this.prisma.photo.update({
          where: { id: p.id },
          data: { analysis: a as unknown as Prisma.InputJsonObject, faceCount: a.faceCount, pose: classifyPose(a) },
        });
      }
    }
    const analyzed: AnalyzedPhoto[] = photos
      .map((p, i) => ({ ...p, analysis: p.analysis as unknown as FaceAnalysis, buffer: buffers[i]! }))
      .filter((p) => p.analysis && p.analysis.faceCount === 1 && p.analysis.embedding?.length && p.status !== 'REJECTED');
    if (analyzed.length < 3) {
      throw new PipelineError('NOT_ENOUGH_FACES', `only ${analyzed.length} usable faces`, false,
        'We could not clearly see your face in enough photos. Upload at least 5 sharp selfies with only you in frame.');
    }

    const ages = analyzed.map((p) => p.analysis.age).filter((a): a is number => typeof a === 'number').sort((a, b) => a - b);
    const medianAge = ages.length ? ages[ages.length >> 1]! : null;
    if (medianAge !== null && medianAge < 13) {
      await this.abuse.record('MINOR_DETECTED', 'HIGH', userId, { medianAge, avatarId });
      throw new PipelineError('AGE_RESTRICTED', `median age ${medianAge}`, false, 'Mascot AI is available for ages 16+.');
    }

    const outliers = findIdentityOutliers(analyzed.map((p) => ({ id: p.id, embedding: p.analysis.embedding! })));
    if (outliers.size > analyzed.length * 0.34) {
      await this.abuse.record('MULTIPLE_IDENTITIES', 'MEDIUM', userId, { avatarId, outliers: outliers.size, total: analyzed.length });
      throw new PipelineError('PHOTOS_INCONSISTENT', `${outliers.size}/${analyzed.length} identity outliers`, false,
        'Your photos seem to show different people. Please upload photos of only yourself.');
    }
    if (outliers.size) {
      await this.prisma.photo.updateMany({
        where: { id: { in: [...outliers] } },
        data: { status: 'REJECTED', rejectReason: 'Looks like a different person.' },
      });
    }
    const inliers = analyzed.filter((p) => !outliers.has(p.id));
    await stage('FACE_ANALYSIS', 30);

    /* 3. FEATURE_EXTRACTION — Mascot DNA (geometry + colorimetry + vision attributes) */
    await stage('FEATURE_EXTRACTION', 33);
    const ranked = rankReferencePhotos(inliers);
    let vision = null;
    try {
      const extracted = await this.vision.extract(ranked.slice(0, 4).map((p) => p.buffer), { seed: userId });
      vision = extracted.attributes;
      await this.generations.addCost(generation.id, extracted.costMicros);
    } catch (error) {
      if (error instanceof PipelineError && error.retryable) throw error;
      this.logger.warn(`vision extraction unavailable, geometry-only DNA: ${(error as Error).message}`);
    }
    const { dna, confidence, embedding } = buildDna({ analyses: inliers.map((p) => p.analysis), vision });
    const dnaData = {
      faceShape: dna.faceShape,
      eyeShape: dna.eyeShape,
      eyeColor: dna.eyeColor,
      hairStyle: dna.hairStyle,
      hairColor: dna.hairColor,
      noseShape: dna.noseShape,
      mouthShape: dna.mouthShape,
      skinTone: dna.skinTone,
      eyebrows: dna.eyebrows,
      ageGroup: dna.ageGroup,
      facialHair: dna.facialHair,
      glasses: dna.glasses,
      presentation: dna.presentation,
      freckles: dna.freckles,
      dimples: dna.dimples,
      distinguishingFeatures: dna.distinguishingFeatures,
      proportions: (dna.proportions ?? undefined) as Prisma.InputJsonObject | undefined,
      confidence: confidence as Prisma.InputJsonObject,
      faceEmbedding: embedding,
      promptFragment: describeDna(dna),
      referencePhotoKeys: ranked.slice(0, 4).map((p) => p.storageKey),
      extractorVersion: DNA_EXTRACTOR_VERSION,
    };
    await this.prisma.avatarDna.upsert({
      where: { avatarId },
      create: { avatarId, ...dnaData },
      update: { ...dnaData, version: { increment: 1 } },
    });
    await stage('FEATURE_EXTRACTION', 50);

    /* 4. CHARACTER_GENERATION — best-of-N with identity scoring */
    await stage('CHARACTER_GENERATION', 53);
    const style = await this.styles.byId(generation.styleId!);
    const avatar = await this.prisma.avatar.findUniqueOrThrow({ where: { id: avatarId } });
    const promptCtx = {
      dna,
      identity: dnaData.promptFragment,
      style: style.recipe,
      outfit: getOutfit(input.outfitKey),
      pose: getPose(input.poseKey),
      opaqueOutput: !this.engine.images.supportsTransparency,
    };
    const compiled = compileAvatarPrompt(promptCtx);
    const user = await this.quota.loadUser(userId);
    const ent = this.quota.entitlements(user);
    // Cost lever: best-of-N identity scoring for Premium, a single high-quality candidate for FREE.
    const candidates = ent.priorityQueue ? this.config.AVATAR_CANDIDATES : 1;
    const generated = await this.engine.generateMaster(
      {
        operation: 'avatar',
        prompt: compiled.prompt,
        negative: compiled.negative,
        references: ranked.slice(0, 3).map((p) => p.buffer),
        size: '1024x1024',
        transparent: true,
        n: candidates,
        seed: avatar.seed,
        mock: { dna, style: style.recipe, emotion: 'happy' },
      },
      embedding,
    );
    await this.generations.addCost(generation.id, generated.costMicros, generated.provider, generated.model);
    await stage('CHARACTER_GENERATION', 85);

    /* 5. RENDERING — variants, share image, character card */
    await stage('RENDERING', 88);
    const watermark = ent.watermark;
    const stored = await this.assets.storeRender(avatarId, generated.master, { watermark, gradient: style.recipe.gradient });
    const card = await characterCard({
      render: generated.master,
      name: avatar.name,
      styleName: style.recipe.name,
      gradient: style.recipe.gradient,
      highlights: dnaHighlights(dna),
      watermark,
    });
    const cardKey = StorageKeys.avatarCard(avatarId, stored.renderId);
    await this.storage.putPublic(cardKey, card, 'image/png');

    await this.prisma.$transaction(async (tx) => {
      await tx.avatarRender.create({
        data: {
          id: stored.renderId,
          avatarId,
          styleId: style.id,
          generationId: generation.id,
          outfitKey: input.outfitKey,
          poseKey: input.poseKey,
          masterKey: stored.masterKey,
          imageKey: stored.imageKey,
          thumbKey: stored.thumbKey,
          identityScore: generated.identityScore,
        },
      });
      await tx.avatar.update({ where: { id: avatarId }, data: { status: 'READY', primaryRenderId: stored.renderId, cardKey, failureReason: null } });
      await tx.user.update({ where: { id: userId }, data: { avatarsCreated: { increment: 1 } } });
    });
    await this.generations.succeed(generation.id, {
      resultId: stored.renderId,
      outputKeys: [stored.imageKey, cardKey],
      prompt: `[${PROMPT_VERSION}]\n${compiled.prompt}`,
      provider: generated.provider,
      model: generated.model,
    });

    await this.users.rewardReferrerOnFirstMascot(userId).catch((e: Error) => this.logger.warn(`referral reward failed: ${e.message}`));
    await this.queues.notify({
      userId,
      text: `✨ ${avatar.name} is ready! Your personal mascot just came to life.`,
      path: `/mascot/${avatarId}`,
      buttonText: 'See my mascot',
      photoUrl: this.storage.publicUrl(stored.shareKey) ?? undefined,
    });
  }

  private async runStyleVariant(generation: Generation): Promise<void> {
    const input = generation.input as unknown as Omit<AvatarInput, 'photoIds'>;
    const started = Date.now();
    await this.generations.progress(generation.id, 'GENERATING', 10);
    const ctx = await this.engine.loadAvatarContext(generation.avatarId!, generation.styleId!);
    const promptCtx = this.engine.promptContext(ctx, { outfit: getOutfit(input.outfitKey), pose: getPose(input.poseKey) });
    const compiled = compileStyleVariantPrompt(promptCtx);
    const references = await this.engine.characterReferences(ctx, 2);
    await this.generations.progress(generation.id, 'GENERATING', 25);
    const user = await this.quota.loadUser(generation.userId);
    const ent = this.quota.entitlements(user);
    const generated = await this.engine.generateMaster(
      {
        operation: 'style',
        prompt: compiled.prompt,
        negative: compiled.negative,
        references,
        size: '1024x1024',
        transparent: true,
        n: ent.priorityQueue ? Math.min(2, this.config.AVATAR_CANDIDATES) : 1,
        seed: ctx.seed,
        mock: { dna: ctx.dna, style: ctx.style.recipe, emotion: 'happy' },
      },
      ctx.embedding,
    );
    await this.generations.addCost(generation.id, generated.costMicros, generated.provider, generated.model);
    await this.generations.progress(generation.id, 'POST_PROCESSING', 80);

    const stored = await this.assets.storeRender(ctx.avatarId, generated.master, { watermark: ent.watermark, gradient: ctx.style.recipe.gradient });
    const card = await characterCard({
      render: generated.master,
      name: ctx.name,
      styleName: ctx.style.recipe.name,
      gradient: ctx.style.recipe.gradient,
      highlights: dnaHighlights(ctx.dna),
      watermark: ent.watermark,
    });
    const cardKey = StorageKeys.avatarCard(ctx.avatarId, stored.renderId);
    await this.storage.putPublic(cardKey, card, 'image/png');
    await this.prisma.$transaction([
      this.prisma.avatarRender.create({
        data: {
          id: stored.renderId,
          avatarId: ctx.avatarId,
          styleId: ctx.style.id,
          generationId: generation.id,
          outfitKey: input.outfitKey,
          poseKey: input.poseKey,
          masterKey: stored.masterKey,
          imageKey: stored.imageKey,
          thumbKey: stored.thumbKey,
          identityScore: generated.identityScore,
        },
      }),
      this.prisma.avatar.update({ where: { id: ctx.avatarId }, data: { primaryRenderId: stored.renderId, styleId: ctx.style.id, cardKey } }),
    ]);
    await this.generations.succeed(generation.id, {
      resultId: stored.renderId,
      outputKeys: [stored.imageKey, cardKey],
      prompt: `[${PROMPT_VERSION}]\n${compiled.prompt}`,
      provider: generated.provider,
      model: generated.model,
    });
    if (Date.now() - started > 45_000) {
      await this.queues.notify({
        userId: generation.userId,
        text: `🎨 Your ${ctx.style.recipe.name} look is ready!`,
        path: `/mascot/${ctx.avatarId}`,
        buttonText: 'Open',
        photoUrl: this.storage.publicUrl(stored.shareKey) ?? undefined,
      });
    }
  }

  protected override async onFinalFailure(generation: Generation, error: unknown): Promise<void> {
    if (generation.type !== 'AVATAR' || !generation.avatarId) return;
    await this.prisma.avatar.update({
      where: { id: generation.avatarId },
      data: { status: 'FAILED', failureReason: error instanceof PipelineError ? error.code : 'INTERNAL' },
    });
    // Release photos so the user can retry with the same set.
    await this.prisma.photo.updateMany({ where: { avatarId: generation.avatarId }, data: { avatarId: null } });
  }
}
