import { Injectable, Logger } from '@nestjs/common';
import type { StickerEmotion } from '@mascot/shared';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { StorageService } from '../../infra/storage/storage.service';
import { MascotEngine, type AvatarContext } from '../../ai/mascot-engine.service';
import { compileMemeReactionPrompt } from '../../ai/prompts/prompt-compiler';

/**
 * Emotion renders of a mascot, reused across features: memes first look for an existing
 * sticker master with the same emotion (zero AI cost) before generating a new reaction.
 */
@Injectable()
export class ReactionImages {
  private readonly logger = new Logger(ReactionImages.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly engine: MascotEngine,
  ) {}

  async get(ctx: AvatarContext, emotion: StickerEmotion, situation?: string): Promise<{ image: Buffer; costMicros: number; reused: boolean }> {
    const sticker = await this.prisma.sticker.findFirst({
      where: { emotion, status: 'READY', masterKey: { not: null }, pack: { avatarId: ctx.avatarId } },
      orderBy: { createdAt: 'desc' },
    });
    if (sticker?.masterKey) {
      try {
        return { image: await this.storage.get('private', sticker.masterKey), costMicros: 0, reused: true };
      } catch (error) {
        this.logger.warn(`sticker master missing (${sticker.masterKey}): ${(error as Error).message}`);
      }
    }
    const compiled = compileMemeReactionPrompt(this.engine.promptContext(ctx), emotion, situation);
    const generated = await this.engine.generateMaster({
      operation: 'meme',
        // 512px outputs: medium quality is visually identical and ~4x cheaper than high.
        quality: 'medium',
      prompt: compiled.prompt,
      negative: compiled.negative,
      references: await this.engine.characterReferences(ctx, 1),
      size: '1024x1024',
      transparent: true,
      n: 1,
      seed: ctx.seed,
      mock: { dna: ctx.dna, style: ctx.style.recipe, emotion },
    });
    return { image: generated.master, costMicros: generated.costMicros, reused: false };
  }
}
