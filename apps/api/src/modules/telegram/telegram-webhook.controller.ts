import { Body, Controller, ForbiddenException, Headers, HttpCode, Logger, Post } from '@nestjs/common';
import { AppConfig } from '../../config/app-config';
import { Public } from '../../common/decorators';
import { safeEqualString } from '../../common/utils/crypto';
import { RedisService } from '../../infra/redis/redis.service';
import { TelegramUpdateHandler } from './telegram-update.handler';
import type { TgUpdate } from './telegram.types';

@Controller('telegram')
export class TelegramWebhookController {
  private readonly logger = new Logger(TelegramWebhookController.name);

  constructor(
    private readonly config: AppConfig,
    private readonly handler: TelegramUpdateHandler,
    private readonly redis: RedisService,
  ) {}

  /**
   * Telegram webhook. Authenticated with the secret_token passed to setWebhook
   * (X-Telegram-Bot-Api-Secret-Token). Updates are de-duplicated by update_id because
   * Telegram retries deliveries that do not get a 2xx quickly.
   */
  @Public()
  @Post('webhook')
  @HttpCode(200)
  async webhook(@Headers('x-telegram-bot-api-secret-token') secret: string | undefined, @Body() update: TgUpdate) {
    if (!secret || !safeEqualString(secret, this.config.TELEGRAM_WEBHOOK_SECRET)) throw new ForbiddenException();
    if (typeof update?.update_id !== 'number') return { ok: true };
    const fresh = await this.redis.client.set(`tg:update:${update.update_id}`, '1', 'EX', 86_400, 'NX');
    if (fresh !== 'OK') return { ok: true };
    try {
      await this.handler.handle(update);
    } catch (error) {
      // Payment updates must not be lost: let Telegram redeliver them.
      if (update.message?.successful_payment || update.message?.refunded_payment) {
        await this.redis.client.del(`tg:update:${update.update_id}`);
        throw error;
      }
      this.logger.error(`update ${update.update_id} failed: ${(error as Error).message}`);
    }
    return { ok: true };
  }
}
