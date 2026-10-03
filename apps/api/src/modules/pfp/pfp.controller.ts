import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GeneratePfpSchema } from '@mascot/shared';
import type { z } from 'zod';
import type { AuthContext } from '../../common/auth-context';
import { CurrentUser, IdempotencyKey, RateLimit } from '../../common/decorators';
import { ZodPipe } from '../../common/pipes/zod.pipe';
import { PfpService } from './pfp.service';

@Controller()
export class PfpController {
  constructor(private readonly pfp: PfpService) {}

  @Post('generate-pfp')
  @RateLimit({ key: 'generate-pfp', limit: 30, windowSec: 600 })
  generate(
    @CurrentUser() auth: AuthContext,
    @Body(new ZodPipe(GeneratePfpSchema)) body: z.output<typeof GeneratePfpSchema>,
    @IdempotencyKey() idem?: string,
  ) {
    return this.pfp.generate(auth.userId, body, idem);
  }

  @Get('pfps')
  list(@CurrentUser() auth: AuthContext, @Query('avatarId') avatarId?: string) {
    return this.pfp.list(auth.userId, avatarId);
  }

  @Get('pfps/:id/hd')
  hd(@CurrentUser() auth: AuthContext, @Param('id') id: string) {
    return this.pfp.hd(auth.userId, id);
  }
}
