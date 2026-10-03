import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { z } from 'zod';
import { TelegramAuthSchema, TelegramLoginWidgetSchema, type TelegramAuthInput, type TelegramLoginWidgetInput } from '@mascot/shared';
import { Public, RateLimit } from '../../common/decorators';
import { ZodPipe } from '../../common/pipes/zod.pipe';
import { AuthService } from './auth.service';

const DevLoginSchema = z.object({
  telegramId: z.number().int().positive().optional(),
  username: z.string().max(32).optional(),
  admin: z.boolean().optional(),
});

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  /** Exchange Telegram Mini App initData for an API access token. */
  @Public()
  @Post('telegram')
  @HttpCode(200)
  @RateLimit({ key: 'auth', limit: 30, windowSec: 60, by: 'ip' })
  telegram(@Body(new ZodPipe(TelegramAuthSchema)) body: TelegramAuthInput) {
    return this.auth.loginWithInitData(body.initData);
  }

  /** Admin panel login with the Telegram Login Widget payload. */
  @Public()
  @Post('admin/telegram-login')
  @HttpCode(200)
  @RateLimit({ key: 'auth-admin', limit: 10, windowSec: 60, by: 'ip' })
  adminLogin(@Body(new ZodPipe(TelegramLoginWidgetSchema)) body: TelegramLoginWidgetInput) {
    return this.auth.loginAdmin(body);
  }

  @Public()
  @Post('dev')
  @HttpCode(200)
  devLogin(@Body(new ZodPipe(DevLoginSchema)) body: z.infer<typeof DevLoginSchema>) {
    return this.auth.devLogin(body);
  }
}
