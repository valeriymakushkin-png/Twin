import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GenerateStickersSchema, type GenerateStickersInput } from '@mascot/shared';
import type { AuthContext } from '../../common/auth-context';
import { CurrentUser, IdempotencyKey, RateLimit } from '../../common/decorators';
import { ZodPipe } from '../../common/pipes/zod.pipe';
import { StickersService } from './stickers.service';

@Controller()
export class StickersController {
  constructor(private readonly stickers: StickersService) {}

  /** POST /generate-stickers — one sticker per emotion, reusing the mascot DNA + master render. */
  @Post('generate-stickers')
  @RateLimit({ key: 'generate-stickers', limit: 10, windowSec: 600 })
  generate(
    @CurrentUser() auth: AuthContext,
    @Body(new ZodPipe(GenerateStickersSchema)) body: GenerateStickersInput,
    @IdempotencyKey() idem?: string,
  ) {
    return this.stickers.generate(auth.userId, body, idem);
  }

  @Get('sticker-packs')
  list(@CurrentUser() auth: AuthContext, @Query('avatarId') avatarId?: string) {
    return this.stickers.list(auth.userId, avatarId);
  }

  @Get('sticker-packs/:id')
  get(@CurrentUser() auth: AuthContext, @Param('id') id: string) {
    return this.stickers.get(auth.userId, id);
  }

  /** Export as a Telegram sticker set (createNewStickerSet / addStickerToSet). */
  @Post('sticker-packs/:id/publish')
  @RateLimit({ key: 'publish-stickers', limit: 10, windowSec: 3600 })
  publish(@CurrentUser() auth: AuthContext, @Param('id') id: string) {
    return this.stickers.publish(auth.userId, id);
  }
}
