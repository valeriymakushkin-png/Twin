import { ForbiddenException, Injectable, UnauthorizedException, type CanActivate, type ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import type { AppRequest, JwtPayload } from '../../common/auth-context';
import { ADMIN_ROLES, IS_PUBLIC } from '../../common/decorators';
import { RedisService } from '../../infra/redis/redis.service';
import { ActivityService } from '../users/activity.service';

export const BANNED_SET = 'banned_users';

/**
 * Global guard: verifies the Bearer JWT, enforces token audience (app vs admin),
 * checks the Redis ban set and records activity.
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwt: JwtService,
    private readonly redis: RedisService,
    private readonly activity: ActivityService,
  ) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    if (ctx.getType() !== 'http') return true;
    const targets = [ctx.getHandler(), ctx.getClass()];
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC, targets);
    const adminRoles = this.reflector.getAllAndOverride<string[] | undefined>(ADMIN_ROLES, targets);
    const req = ctx.switchToHttp().getRequest<AppRequest>();
    const header = req.header('authorization');
    const token = header?.startsWith('Bearer ') ? header.slice(7) : undefined;

    if (isPublic) return true;
    if (!token) throw new UnauthorizedException({ code: 'UNAUTHENTICATED', message: 'Missing access token' });

    let payload: JwtPayload;
    try {
      payload = await this.jwt.verifyAsync<JwtPayload>(token);
    } catch {
      throw new UnauthorizedException({ code: 'TOKEN_INVALID', message: 'Access token invalid or expired' });
    }

    if (adminRoles) {
      if (payload.aud !== 'admin' || !adminRoles.includes(payload.role)) {
        throw new ForbiddenException({ code: 'FORBIDDEN', message: 'Admin access required' });
      }
    } else if (payload.aud !== 'app') {
      throw new ForbiddenException({ code: 'WRONG_AUDIENCE', message: 'Token not valid for this API' });
    }

    if (await this.redis.client.sismember(BANNED_SET, payload.sub)) {
      throw new ForbiddenException({ code: 'BANNED', message: 'Account suspended. Contact support.' });
    }

    req.auth = { userId: payload.sub, telegramId: payload.tid, role: payload.role, aud: payload.aud };
    if (payload.aud === 'app') this.activity.touch(payload.sub);
    return true;
  }
}
