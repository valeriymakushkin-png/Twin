import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { User } from '@prisma/client';
import type { AuthResponseDto, TelegramLoginWidgetInput } from '@mascot/shared';
import { AppConfig } from '../../config/app-config';
import type { Audience, JwtPayload } from '../../common/auth-context';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { InitDataError, validateInitData, validateLoginWidget } from '../telegram/init-data';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly config: AppConfig,
    private readonly jwt: JwtService,
    private readonly users: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  private sign(user: Pick<User, 'id' | 'telegramId' | 'role'>, aud: Audience): { token: string; ttl: number } {
    const ttl = aud === 'admin' ? this.config.ADMIN_JWT_TTL_SECONDS : this.config.JWT_TTL_SECONDS;
    // `aud` is set through the audience option (jsonwebtoken rejects it in both places).
    const payload: Omit<JwtPayload, 'aud'> = { sub: user.id, tid: user.telegramId.toString(), role: user.role };
    return { token: this.jwt.sign(payload, { expiresIn: ttl, audience: aud }), ttl };
  }

  private assertActive(user: User): void {
    if (user.deletedAt) throw new ForbiddenException({ code: 'ACCOUNT_DELETED', message: 'This account is being deleted.' });
    if (user.isBanned) throw new ForbiddenException({ code: 'BANNED', message: 'Account suspended. Contact support.' });
  }

  /** Mini App sign-in: validates initData signature and freshness, upserts the user. */
  async loginWithInitData(initData: string): Promise<AuthResponseDto> {
    let validated;
    try {
      validated = validateInitData(initData, this.config.TELEGRAM_BOT_TOKEN, this.config.TELEGRAM_INIT_DATA_TTL_SECONDS);
    } catch (error) {
      throw new UnauthorizedException({
        code: 'INVALID_INIT_DATA',
        message: error instanceof InitDataError ? error.message : 'Invalid Telegram data',
      });
    }
    const { user, isNew } = await this.users.upsertFromTelegram(validated.user, validated.startParam);
    this.assertActive(user);
    const { token, ttl } = this.sign(user, 'app');
    return { accessToken: token, expiresIn: ttl, user: await this.users.getProfile(user.id), isNewUser: isNew };
  }

  /** Admin panel sign-in via the Telegram Login Widget. Only ADMIN / SUPPORT roles are accepted. */
  async loginAdmin(data: TelegramLoginWidgetInput) {
    try {
      validateLoginWidget(data, this.config.TELEGRAM_BOT_TOKEN, 24 * 3600);
    } catch (error) {
      throw new UnauthorizedException({ code: 'INVALID_LOGIN', message: (error as Error).message });
    }
    const telegramId = BigInt(data.id);
    let user = await this.prisma.user.findUnique({ where: { telegramId } });
    const bootstrapAdmin = this.config.TELEGRAM_ADMIN_IDS.includes(String(data.id));
    if (!user && bootstrapAdmin) {
      ({ user } = await this.users.upsertFromTelegram({ id: data.id, first_name: data.first_name ?? 'Admin', username: data.username }));
    }
    if (user && bootstrapAdmin && user.role !== 'ADMIN') {
      user = await this.prisma.user.update({ where: { id: user.id }, data: { role: 'ADMIN' } });
    }
    if (!user || (user.role !== 'ADMIN' && user.role !== 'SUPPORT')) {
      throw new ForbiddenException({ code: 'NOT_ADMIN', message: 'This Telegram account has no admin access.' });
    }
    this.assertActive(user);
    const { token, ttl } = this.sign(user, 'admin');
    await this.prisma.auditLog.create({ data: { actorId: user.id, action: 'admin.login', targetType: 'user', targetId: user.id } });
    return {
      accessToken: token,
      expiresIn: ttl,
      admin: { id: user.id, role: user.role, username: user.username, firstName: user.firstName, photoUrl: data.photo_url ?? user.photoUrl },
    };
  }

  /** Local development only (DEV_AUTH_ENABLED, never in production — enforced by env validation). */
  async devLogin(input: { telegramId?: number; username?: string; admin?: boolean }) {
    if (!this.config.DEV_AUTH_ENABLED || this.config.isProduction) {
      throw new ForbiddenException({ code: 'DEV_AUTH_DISABLED', message: 'Dev auth disabled' });
    }
    const telegramId = input.telegramId ?? 100000001;
    const { user, isNew } = await this.users.upsertFromTelegram({
      id: telegramId,
      first_name: input.username ?? 'Dev',
      username: input.username ?? `dev_${telegramId}`,
      language_code: 'en',
    });
    let current = user;
    if (input.admin && user.role !== 'ADMIN') {
      current = await this.prisma.user.update({ where: { id: user.id }, data: { role: 'ADMIN' } });
    }
    this.assertActive(current);
    const aud: Audience = input.admin ? 'admin' : 'app';
    const { token, ttl } = this.sign(current, aud);
    return { accessToken: token, expiresIn: ttl, user: await this.users.getProfile(current.id), isNewUser: isNew };
  }
}
