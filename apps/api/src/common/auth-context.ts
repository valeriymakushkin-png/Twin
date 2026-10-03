import type { Request } from 'express';

export type Audience = 'app' | 'admin';

export interface AuthContext {
  userId: string;
  telegramId: string;
  role: 'USER' | 'SUPPORT' | 'ADMIN';
  aud: Audience;
}

export interface JwtPayload {
  sub: string;
  tid: string;
  role: AuthContext['role'];
  aud: Audience;
}

export interface AppRequest extends Request {
  auth?: AuthContext;
  requestId?: string;
}
