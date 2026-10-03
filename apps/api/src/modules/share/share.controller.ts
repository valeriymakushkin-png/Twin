import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { PrepareShareSchema, type PrepareShareInput } from '@mascot/shared';
import type { AuthContext } from '../../common/auth-context';
import { CurrentUser, RateLimit } from '../../common/decorators';
import { ZodPipe } from '../../common/pipes/zod.pipe';
import { ShareService } from './share.service';

@Controller('share')
export class ShareController {
  constructor(private readonly share: ShareService) {}

  /** Prepares a Telegram inline message for WebApp.shareMessage() plus a referral deep link. */
  @Post('prepare')
  @HttpCode(200)
  @RateLimit({ key: 'share', limit: 60, windowSec: 600 })
  prepare(@CurrentUser() auth: AuthContext, @Body(new ZodPipe(PrepareShareSchema)) body: PrepareShareInput) {
    return this.share.prepare(auth.userId, body);
  }
}
