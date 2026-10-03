import { Injectable, Logger } from '@nestjs/common';
import { dayKey } from '../../common/utils/time';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { RedisService } from '../../infra/redis/redis.service';

/**
 * Activity tracking for analytics.
 *  - DAU/WAU/MAU: Redis HyperLogLog per UTC day (12 KB per day regardless of user count).
 *  - users.last_seen_at: written at most once per 5 minutes per user.
 */
@Injectable()
export class ActivityService {
  private readonly logger = new Logger(ActivityService.name);

  constructor(
    private readonly redis: RedisService,
    private readonly prisma: PrismaService,
  ) {}

  static hllKey(day: string): string {
    return `hll:dau:${day}`;
  }

  touch(userId: string): void {
    const key = ActivityService.hllKey(dayKey());
    this.redis.client
      .multi()
      .pfadd(key, userId)
      .expire(key, 120 * 86400)
      .set(`seen:${userId}`, '1', 'EX', 300, 'NX')
      .exec()
      .then((res) => {
        if (res?.[2]?.[1] === 'OK') {
          return this.prisma.user.update({ where: { id: userId }, data: { lastSeenAt: new Date() } }).then(() => undefined);
        }
        return undefined;
      })
      .catch((err: Error) => this.logger.warn(`activity touch failed: ${err.message}`));
  }
}
