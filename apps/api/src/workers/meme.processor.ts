import { Logger } from '@nestjs/common';
import { Processor } from '@nestjs/bullmq';
import type { Generation } from '@prisma/client';
import { MEME_EMOTION_KEYWORDS, MEME_FORMAT_CATALOG, userLocale, type MemeFormat, type StickerEmotion } from '@mascot/shared';
import { loadEnv } from '../config/env';
import { PrismaService } from '../infra/prisma/prisma.service';
import { QUEUES } from '../infra/queue/queue.constants';
import { StorageKeys, StorageService } from '../infra/storage/storage.service';
import { MascotEngine } from '../ai/mascot-engine.service';
import { composeMeme, memeLocale } from '../ai/render/image-ops';
import { GenerationsService } from '../modules/generations/generations.service';
import { QuotaService } from '../modules/quota/quota.service';
import { GenerationProcessor } from './shared/generation.processor';
import { ReactionImages } from './shared/reaction-images.service';

/** Keyword classifier for the reaction emotion (EN/RU). Falls back to "laughing". */
export function classifyMemeEmotion(text: string): StickerEmotion {
  const lower = text.toLowerCase();
  for (const { emotion, keywords } of MEME_EMOTION_KEYWORDS) {
    if (keywords.some((k) => lower.includes(k))) return emotion;
  }
  return 'laughing';
}

@Processor(QUEUES.MEME, { concurrency: loadEnv().WORKER_CONCURRENCY_MEME })
export class MemeProcessor extends GenerationProcessor {
  protected readonly logger = new Logger(MemeProcessor.name);

  constructor(
    generations: GenerationsService,
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly engine: MascotEngine,
    private readonly reactions: ReactionImages,
    private readonly quota: QuotaService,
  ) {
    super(generations);
  }

  protected async run(generation: Generation): Promise<void> {
    const { memeId } = generation.input as { memeId: string };
    const meme = await this.prisma.meme.findUniqueOrThrow({ where: { id: memeId } });
    const ctx = await this.engine.loadAvatarContext(meme.avatarId);
    const format = meme.format as MemeFormat;
    const text = [meme.topText, meme.bottomText].filter(Boolean).join(' ');
    const emotion = (meme.emotion as StickerEmotion | null) ?? classifyMemeEmotion(text);
    await this.generations.progress(generation.id, 'GENERATING', 20);

    const panels: Buffer[] = [];
    if (MEME_FORMAT_CATALOG[format].panels === 2) {
      const expectation = await this.reactions.get(ctx, 'cool', meme.topText ?? undefined);
      const reality = await this.reactions.get(ctx, emotion === 'cool' || emotion === 'happy' ? 'crying' : emotion, meme.bottomText ?? undefined);
      panels.push(expectation.image, reality.image);
      await this.generations.addCost(generation.id, expectation.costMicros + reality.costMicros);
    } else {
      const reaction = await this.reactions.get(ctx, emotion, text);
      panels.push(reaction.image);
      await this.generations.addCost(generation.id, reaction.costMicros);
    }
    await this.generations.progress(generation.id, 'POST_PROCESSING', 75);

    const user = await this.quota.loadUser(generation.userId);
    const image = await composeMeme(format, panels, { top: meme.topText, bottom: meme.bottomText }, {
      gradient: ctx.style.recipe.gradient,
      watermark: this.quota.entitlements(user).watermark,
      displayName: ctx.name,
      locale: memeLocale(text, userLocale(user)),
    });
    const imageKey = StorageKeys.meme(meme.id);
    await this.storage.putPublic(imageKey, image, 'image/jpeg');
    await this.prisma.meme.update({ where: { id: meme.id }, data: { status: 'READY', imageKey, emotion } });
    await this.generations.succeed(generation.id, { resultId: meme.id, outputKeys: [imageKey] });
  }

  protected override async onFinalFailure(generation: Generation): Promise<void> {
    const { memeId } = generation.input as { memeId: string };
    await this.prisma.meme.update({ where: { id: memeId }, data: { status: 'FAILED' } }).catch(() => undefined);
  }
}
