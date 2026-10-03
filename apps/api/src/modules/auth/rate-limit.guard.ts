import { HttpException, HttpStatus, Injectable, type CanActivate, type ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { Response } from 'express';
import type { AppRequest } from '../../common/auth-context';
import { RATE_LIMIT, type RateLimitOptions } from '../../common/decorators';
import { RedisService } from '../../infra/redis/redis.service';

/** Redis fixed-window rate limiter shared by all API replicas. */
@Injectable()
export class RateLimitGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly redis: RedisService,
  ) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    if (ctx.getType() !== 'http') return true;
    const opts = this.reflector.getAllAndOverride<RateLimitOptions | undefined>(RATE_LIMIT, [ctx.getHandler(), ctx.getClass()]);
    if (!opts) return true;
    const req = ctx.switchToHttp().getRequest<AppRequest>();
    const subject = opts.by === 'ip' || !req.auth ? `ip:${req.ip}` : `u:${req.auth.userId}`;
    const window = Math.floor(Date.now() / 1000 / opts.windowSec);
    const key = `rl:${opts.key}:${subject}:${window}`;
    const count = await this.redis.incrWindow(key, opts.windowSec + 1);
    const res = ctx.switchToHttp().getResponse<Response>();
    res.setHeader('X-RateLimit-Limit', opts.limit);
    res.setHeader('X-RateLimit-Remaining', Math.max(0, opts.limit - count));
    if (count > opts.limit) {
      const retryAfter = opts.windowSec - (Math.floor(Date.now() / 1000) % opts.windowSec);
      res.setHeader('Retry-After', retryAfter);
      throw new HttpException({ code: 'RATE_LIMITED', message: 'Too many requests, slow down a little.' }, HttpStatus.TOO_MANY_REQUESTS);
    }
    return true;
  }
}
