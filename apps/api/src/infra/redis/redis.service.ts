import { Injectable, Logger, type OnModuleDestroy } from '@nestjs/common';
import IORedis, { type Redis, type RedisOptions } from 'ioredis';
import { AppConfig } from '../../config/app-config';

export function redisOptionsFromUrl(url: string): RedisOptions {
  const u = new URL(url);
  return {
    host: u.hostname,
    port: Number(u.port || 6379),
    username: u.username ? decodeURIComponent(u.username) : undefined,
    password: u.password ? decodeURIComponent(u.password) : undefined,
    db: u.pathname && u.pathname !== '/' ? Number(u.pathname.slice(1)) : 0,
    tls: u.protocol === 'rediss:' ? {} : undefined,
  };
}

@Injectable()
export class RedisService implements OnModuleDestroy {
  private readonly logger = new Logger(RedisService.name);
  readonly client: Redis;

  constructor(config: AppConfig) {
    this.client = new IORedis({
      ...redisOptionsFromUrl(config.REDIS_URL),
      maxRetriesPerRequest: 3,
      enableReadyCheck: true,
      lazyConnect: false,
    });
    this.client.on('error', (err) => this.logger.error(`Redis error: ${err.message}`));
  }

  /** Fixed-window counter. Returns the count after increment. */
  async incrWindow(key: string, windowSec: number, by = 1): Promise<number> {
    const results = await this.client.multi().incrby(key, by).expire(key, windowSec, 'NX').exec();
    const value = results?.[0]?.[1];
    return typeof value === 'number' ? value : Number(value ?? 0);
  }

  async getJson<T>(key: string): Promise<T | null> {
    const raw = await this.client.get(key);
    return raw ? (JSON.parse(raw) as T) : null;
  }

  async setJson(key: string, value: unknown, ttlSec: number): Promise<void> {
    await this.client.set(key, JSON.stringify(value), 'EX', ttlSec);
  }

  /** Cache-aside helper. */
  async remember<T>(key: string, ttlSec: number, compute: () => Promise<T>): Promise<T> {
    const cached = await this.getJson<T>(key);
    if (cached !== null) return cached;
    const value = await compute();
    await this.setJson(key, value, ttlSec);
    return value;
  }

  async onModuleDestroy(): Promise<void> {
    await this.client.quit().catch(() => undefined);
  }
}
