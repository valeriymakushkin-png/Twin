import { Injectable, Logger, type OnModuleDestroy, type OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({
      log: [
        { emit: 'event', level: 'warn' },
        { emit: 'event', level: 'error' },
      ],
    });
  }

  async onModuleInit(): Promise<void> {
    (this as unknown as { $on: (e: string, cb: (ev: { message: string }) => void) => void }).$on('warn', (e) =>
      this.logger.warn(e.message),
    );
    (this as unknown as { $on: (e: string, cb: (ev: { message: string }) => void) => void }).$on('error', (e) =>
      this.logger.error(e.message),
    );
    await this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
