import { Body, Controller, Delete, Get, HttpCode, Patch } from '@nestjs/common';
import { UpdateProfileSchema, type UpdateProfileInput } from '@mascot/shared';
import type { AuthContext } from '../../common/auth-context';
import { CurrentUser } from '../../common/decorators';
import { ZodPipe } from '../../common/pipes/zod.pipe';
import { UsersService } from './users.service';

@Controller('profile')
export class UsersController {
  constructor(private readonly users: UsersService) {}

  /** GET /profile — current user, plan, entitlements and usage. */
  @Get()
  profile(@CurrentUser() auth: AuthContext) {
    return this.users.getProfile(auth.userId);
  }

  @Patch()
  update(@CurrentUser() auth: AuthContext, @Body(new ZodPipe(UpdateProfileSchema)) body: UpdateProfileInput) {
    return this.users.updateProfile(auth.userId, body);
  }

  @Get('referrals')
  referrals(@CurrentUser() auth: AuthContext) {
    return this.users.referralStats(auth.userId);
  }

  /** GDPR right to erasure. */
  @Delete()
  @HttpCode(202)
  async delete(@CurrentUser() auth: AuthContext) {
    await this.users.requestDeletion(auth.userId);
    return { status: 'scheduled' };
  }
}
