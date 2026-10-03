import { Logger } from '@nestjs/common';
import { Processor } from '@nestjs/bullmq';
import type { Generation } from '@prisma/client';
import sharp from 'sharp';
import { getOutfit, getPfpBackground, getPose } from '@mascot/shared';
import { loadEnv } from '../config/env';
import { PipelineError } from '../common/errors';
import { PrismaService } from '../infra/prisma/prisma.service';
import { QUEUES } from '../infra/queue/queue.constants';
import { StorageKeys, StorageService } from '../infra/storage/storage.service';
import { MascotEngine } from '../ai/mascot-engine.service';
import { compilePfpScenePrompt, compileStyleVariantPrompt } from '../ai/prompts/prompt-compiler';
import { applyWatermark, composeProfilePicture } from '../ai/render/image-ops';
import { GenerationsService } from '../modules/generations/generations.service';
import { QuotaService } from '../modules/quota/quota.service';
import { GenerationProcessor } from './shared/generation.processor';

/**
 * Profile pictures.
 *  composite: master render over a Sharp-rendered gradient/pattern (instant, no AI cost)
 *  ai:        new pose/outfit render (transparent) or a full AI scene for "scene" backgrounds
 * Output: 1024² display PNG (public) + 2048² HD PNG (private, Premium download).
 */
@Processor(QUEUES.PFP, { concurrency: loadEnv().WORKER_CONCURRENCY_PFP })
export class PfpProcessor extends GenerationProcessor {
  protected readonly logger = new Logger(PfpProcessor.name);

  constructor(
    generations: GenerationsService,
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly engine: MascotEngine,
    private readonly quota: QuotaService,
  ) {
    super(generations);
  }

  protected async run(generation: Generation): Promise<void> {
    const { pfpId } = generation.input as { pfpId: string };
    const pfp = await this.prisma.profilePicture.findUniqueOrThrow({ where: { id: pfpId } });
    const background = getPfpBackground(pfp.backgroundKey);
    if (!background) throw new PipelineError('UNKNOWN_BACKGROUND', pfp.backgroundKey);
    const ctx = await this.engine.loadAvatarContext(pfp.avatarId);
    if (!ctx.primaryMasterKey) throw new PipelineError('NO_RENDER', 'avatar has no primary render');
    await this.generations.progress(generation.id, 'GENERATING', 15);

    let hd: Buffer;
    if (pfp.mode === 'composite') {
      const master = await this.storage.get('private', ctx.primaryMasterKey);
      hd = await composeProfilePicture(master, background, 2048);
    } else {
      const promptCtx = this.engine.promptContext(ctx, { outfit: getOutfit(pfp.outfitKey), pose: getPose(pfp.poseKey) });
      const references = await this.engine.characterReferences(ctx, 1);
      if (background.kind === 'scene') {
        const compiled = compilePfpScenePrompt(promptCtx, background);
        const generated = await this.engine.generateMaster(
          {
            operation: 'pfp',
            prompt: compiled.prompt,
            references,
            size: '1024x1024',
            transparent: false,
            n: 1,
            seed: ctx.seed,
            mock: { dna: ctx.dna, style: ctx.style.recipe, emotion: 'happy', background: [background.colors[0]!, background.colors[1] ?? background.colors[0]!] },
          },
          undefined,
          { raw: true },
        );
        await this.generations.addCost(generation.id, generated.costMicros, generated.provider, generated.model);
        hd = await sharp(generated.master).resize(2048, 2048, { fit: 'cover', kernel: 'lanczos3' }).png().toBuffer();
      } else {
        const compiled = compileStyleVariantPrompt(promptCtx);
        const generated = await this.engine.generateMaster({
          operation: 'pfp',
          prompt: compiled.prompt,
          references,
          size: '1024x1024',
          transparent: true,
          n: 1,
          seed: ctx.seed,
          mock: { dna: ctx.dna, style: ctx.style.recipe, emotion: 'happy' },
        });
        await this.generations.addCost(generation.id, generated.costMicros, generated.provider, generated.model);
        hd = await composeProfilePicture(generated.master, background, 2048);
      }
    }
    await this.generations.progress(generation.id, 'POST_PROCESSING', 80);

    const user = await this.quota.loadUser(generation.userId);
    let display = await sharp(hd).resize(1024, 1024).png().toBuffer();
    if (this.quota.entitlements(user).watermark) display = await applyWatermark(display);
    const imageKey = StorageKeys.pfp(pfp.id);
    const hdKey = StorageKeys.pfpHd(pfp.id);
    await Promise.all([this.storage.putPublic(imageKey, display, 'image/png'), this.storage.putPrivate(hdKey, hd, 'image/png')]);
    await this.prisma.profilePicture.update({ where: { id: pfp.id }, data: { status: 'READY', imageKey, hdKey } });
    await this.generations.succeed(generation.id, { resultId: pfp.id, outputKeys: [imageKey] });
  }

  protected override async onFinalFailure(generation: Generation): Promise<void> {
    const { pfpId } = generation.input as { pfpId: string };
    await this.prisma.profilePicture.update({ where: { id: pfpId }, data: { status: 'FAILED' } }).catch(() => undefined);
  }
}
