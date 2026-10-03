import { Body, Controller, Delete, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { GenerateMemeSchema } from '@mascot/shared';
import type { z } from 'zod';
import type { AuthContext } from '../../common/auth-context';
import { CurrentUser, IdempotencyKey, RateLimit } from '../../common/decorators';
import { ZodPipe } from '../../common/pipes/zod.pipe';
import { MemesService } from './memes.service';

@Controller()
export class MemesController {
  constructor(private readonly memes: MemesService) {}

  @Post('generate-meme')
  @RateLimit({ key: 'generate-meme', limit: 20, windowSec: 600 })
  generate(
    @CurrentUser() auth: AuthContext,
    @Body(new ZodPipe(GenerateMemeSchema)) body: z.output<typeof GenerateMemeSchema>,
    @IdempotencyKey() idem?: string,
  ) {
    return this.memes.generate(auth.userId, body, idem);
  }

  @Get('memes')
  list(@CurrentUser() auth: AuthContext, @Query('avatarId') avatarId?: string) {
    return this.memes.list(auth.userId, avatarId);
  }

  @Delete('memes/:id')
  @HttpCode(204)
  async remove(@CurrentUser() auth: AuthContext, @Param('id') id: string) {
    await this.memes.remove(auth.userId, id);
  }
}
