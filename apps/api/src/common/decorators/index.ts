import { createParamDecorator, SetMetadata, type ExecutionContext } from '@nestjs/common';
import type { AppRequest, AuthContext } from '../auth-context';

export const IS_PUBLIC = 'isPublic';
/** Skip JWT authentication for this route. */
export const Public = () => SetMetadata(IS_PUBLIC, true);

export const ADMIN_ROLES = 'adminRoles';
/** Requires an admin-audience token and one of the given roles. */
export const AdminOnly = (...roles: Array<'SUPPORT' | 'ADMIN'>) =>
  SetMetadata(ADMIN_ROLES, roles.length ? roles : ['ADMIN']);

export interface RateLimitOptions {
  /** Logical bucket name, e.g. "upload". */
  key: string;
  limit: number;
  windowSec: number;
  by?: 'user' | 'ip';
}
export const RATE_LIMIT = 'rateLimit';
export const RateLimit = (options: RateLimitOptions) => SetMetadata(RATE_LIMIT, options);

export const CurrentUser = createParamDecorator((_: unknown, ctx: ExecutionContext): AuthContext => {
  const req = ctx.switchToHttp().getRequest<AppRequest>();
  if (!req.auth) throw new Error('CurrentUser used on an unauthenticated route');
  return req.auth;
});

export const IdempotencyKey = createParamDecorator((_: unknown, ctx: ExecutionContext): string | undefined => {
  const req = ctx.switchToHttp().getRequest<AppRequest>();
  const value = req.header('idempotency-key');
  return value && /^[A-Za-z0-9_\-:.]{8,80}$/.test(value) ? value : undefined;
});

export const ClientIp = createParamDecorator((_: unknown, ctx: ExecutionContext): string => {
  const req = ctx.switchToHttp().getRequest<AppRequest>();
  return req.ip ?? 'unknown';
});
