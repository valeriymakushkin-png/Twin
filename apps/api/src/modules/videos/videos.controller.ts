import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GenerateVideoSchema } from '@mascot/shared';
import type { z } from 'zod';
import type { AuthContext } from '../../common/auth-context';
import { CurrentUser, IdempotencyKey, RateLimit } from '../../common/decorators';
import { ZodPipe } from '../../common/pipes/zod.pipe';
import { VideosService } from './videos.service';

@Controller()
export class VideosController {
  constructor(private readonly videos: VideosService) {}

  /** POST /generate-video — image-to-video (Kling / Runway / Veo) + optional TTS voice-over. */
  @Post('generate-video')
  @RateLimit({ key: 'generate-video', limit: 5, windowSec: 600 })
  generate(
    @CurrentUser() auth: AuthContext,
    @Body(new ZodPipe(GenerateVideoSchema)) body: z.output<typeof GenerateVideoSchema>,
    @IdempotencyKey() idem?: string,
  ) {
    return this.videos.generate(auth.userId, body, idem);
  }

  @Get('videos')
  list(@CurrentUser() auth: AuthContext, @Query('avatarId') avatarId?: string) {
    return this.videos.list(auth.userId, avatarId);
  }

  @Get('videos/:id')
  get(@CurrentUser() auth: AuthContext, @Param('id') id: string) {
    return this.videos.get(auth.userId, id);
  }
}
