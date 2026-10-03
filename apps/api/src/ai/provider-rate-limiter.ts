import { Injectable } from '@nestjs/common';
import { sleep } from '../common/utils/async';
import { RedisService } from '../infra/redis/redis.service';

/**
 * Cluster-wide fixed-window limiter for AI provider calls. Every worker replica shares
 * the Redis counter, so scaling workers horizontally never exceeds the vendor's RPM quota
 * (jobs simply wait instead of failing with 429s).
 */
@Injectable()
export class ProviderRateLimiter {
  constructor(private readonly redis: RedisService) {}

  async acquire(bucket: string, perMinute: number, maxWaitMs = 120_000): Promise<void> {
    const deadline = Date.now() + maxWaitMs;
    for (;;) {
      const window = Math.floor(Date.now() / 60_000);
      const count = await this.redis.incrWindow(`prl:${bucket}:${window}`, 61);
      if (count <= perMinute) return;
      if (Date.now() > deadline) throw new Error(`rate limiter wait exceeded for ${bucket}`);
      const untilNextWindow = 60_000 - (Date.now() % 60_000);
      await sleep(Math.min(untilNextWindow + Math.random() * 300, 5_000));
    }
  }
}
