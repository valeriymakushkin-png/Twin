import { Logger } from '@nestjs/common';
import { Processor } from '@nestjs/bullmq';
import type { Job } from 'bullmq';
import type { Generation } from '@prisma/client';
import type { StickerEmotion } from '@mascot/shared';
import { loadEnv } from '../config/env';
import { PipelineError, ProviderError } from '../common/errors';
import { mapLimitSettled } from '../common/utils/async';
import { PrismaService } from '../infra/prisma/prisma.service';
import { QUEUES, type GenerationJobData } from '../infra/queue/queue.constants';
import { QueueService } from '../infra/queue/queue.service';
import { StorageKeys, StorageService } from '../infra/storage/storage.service';
import { MascotEngine } from '../ai/mascot-engine.service';
import { compileStickerPrompt, PROMPT_VERSION } from '../ai/prompts/prompt-compiler';
import { stickerize } from '../ai/render/image-ops';
import { GenerationsService } from '../modules/generations/generations.service';
import { GenerationProcessor } from './shared/generation.processor';

/**
 * Generates one sticker per emotion (bounded parallelism), anchored on the master render
 * so every sticker is the same character. Resumable: READY stickers are skipped on retry.
 */
@Processor(QUEUES.STICKER, { concurrency: loadEnv().WORKER_CONCURRENCY_STICKER, lockDuration: 120_000 })
export class StickerProcessor extends GenerationProcessor {
  protected readonly logger = new Logger(StickerProcessor.name);

  constructor(
    generations: GenerationsService,
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly engine: MascotEngine,
    private readonly queues: QueueService,
  ) {
    super(generations);
  }

  protected async run(generation: Generation, job: Job<GenerationJobData>): Promise<void> {
    const { packId } = generation.input as { packId: string };
    const pack = await this.prisma.stickerPack.findUniqueOrThrow({ where: { id: packId }, include: { stickers: true } });
    const ctx = await this.engine.loadAvatarContext(pack.avatarId, pack.styleId);
    const references = await this.engine.characterReferences(ctx, 1);
    const total = pack.stickers.length;
    const pending = pack.stickers.filter((s) => s.status !== 'READY');
    let done = total - pending.length;
    let lastPrompt = '';
    await this.generations.progress(generation.id, 'GENERATING', Math.round((done / total) * 90) + 5);

    const results = await mapLimitSettled(pending, 3, async (sticker) => {
      const compiled = compileStickerPrompt(this.engine.promptContext(ctx), sticker.emotion as StickerEmotion);
      lastPrompt = compiled.prompt;
      const generated = await this.engine.generateMaster({
        operation: 'sticker',
        // 512px outputs: medium quality is visually identical and ~4x cheaper than high.
        quality: 'medium',
        prompt: compiled.prompt,
        negative: compiled.negative,
        references,
        size: '1024x1024',
        transparent: true,
        n: 1,
        seed: ctx.seed,
        mock: { dna: ctx.dna, style: ctx.style.recipe, emotion: sticker.emotion as StickerEmotion },
      });
      const webp = await stickerize(generated.master);
      const imageKey = StorageKeys.stickerWebp(pack.id, sticker.emotion);
      const masterKey = StorageKeys.stickerMaster(pack.id, sticker.emotion);
      await Promise.all([this.storage.putPublic(imageKey, webp, 'image/webp'), this.storage.putPrivate(masterKey, generated.master, 'image/png')]);
      await this.prisma.sticker.update({ where: { id: sticker.id }, data: { status: 'READY', imageKey, masterKey, errorMessage: null } });
      await this.generations.addCost(generation.id, generated.costMicros, generated.provider, generated.model);
      done += 1;
      await this.generations.progress(generation.id, 'GENERATING', Math.round((done / total) * 90) + 5);
    });

    const failures = results
      .map((r, i) => ({ r, sticker: pending[i]! }))
      .filter((x): x is { r: PromiseRejectedResult; sticker: (typeof pending)[number] } => x.r.status === 'rejected');
    const isFinal = job.attemptsMade + 1 >= (job.opts.attempts ?? 1);
    const retryable = failures.some((f) => !(f.r.reason instanceof PipelineError) || f.r.reason.retryable);

    if (failures.length && retryable && !isFinal) {
      throw new ProviderError(this.engine.images.name, `${failures.length}/${total} stickers failed: ${(failures[0]!.r.reason as Error).message}`);
    }
    for (const f of failures) {
      await this.prisma.sticker.update({ where: { id: f.sticker.id }, data: { status: 'FAILED', errorMessage: String((f.r.reason as Error).message).slice(0, 300) } });
    }
    const ready = await this.prisma.sticker.findMany({ where: { packId: pack.id, status: 'READY' }, orderBy: { sortOrder: 'asc' } });
    if (!ready.length) {
      throw new PipelineError('STICKERS_FAILED', 'no sticker could be generated', false, 'We could not generate your stickers. You were refunded.');
    }
    await this.prisma.stickerPack.update({ where: { id: pack.id }, data: { status: 'READY' } });
    await this.generations.succeed(generation.id, {
      resultId: pack.id,
      outputKeys: ready.map((s) => s.imageKey!).filter(Boolean),
      prompt: `[${PROMPT_VERSION}]\n${lastPrompt}`,
    });
    if (failures.length) await this.generations.refundPartial(generation.id, failures.length / total);
    await this.queues.notify({
      userId: generation.userId,
      text: `🎉 Your ${ready.length}-sticker pack is ready! Add it to Telegram in one tap.`,
      path: `/mascot/${pack.avatarId}/stickers?pack=${pack.id}`,
      buttonText: 'Open sticker pack',
    });
  }

  protected override async onFinalFailure(generation: Generation): Promise<void> {
    const { packId } = generation.input as { packId: string };
    await this.prisma.stickerPack.update({ where: { id: packId }, data: { status: 'FAILED' } }).catch(() => undefined);
  }
}
