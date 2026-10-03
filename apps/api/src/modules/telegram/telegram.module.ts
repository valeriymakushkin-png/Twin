import { Global, Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { TelegramBotService } from './telegram-bot.service';
import { TelegramUpdateHandler } from './telegram-update.handler';
import { TelegramWebhookController } from './telegram-webhook.controller';

@Global()
@Module({
  imports: [UsersModule],
  controllers: [TelegramWebhookController],
  providers: [TelegramBotService, TelegramUpdateHandler],
  exports: [TelegramBotService],
})
export class TelegramModule {}
