import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { z } from 'zod';
import { GenerateAvatarSchema, StyleVariantSchema, UpdateLookSchema, type GenerateAvatarInput, type StyleVariantInput, type UpdateLookInput } from '@mascot/shared';
import type { AuthContext } from '../../common/auth-context';
import { CurrentUser, IdempotencyKey, Public, RateLimit } from '../../common/decorators';
import { ZodPipe } from '../../common/pipes/zod.pipe';
import { AvatarsService } from './avatars.service';

const UpdateAvatarSchema = z.object({
  name: z.string().trim().min(1).max(40).optional(),
  isPublic: z.boolean().optional(),
});

@Controller()
export class AvatarsController {
  constructor(private readonly avatars: AvatarsService) {}

  /** POST /generate-avatar — starts the full pipeline; returns the draft avatar + generation to poll. */
  @Post('generate-avatar')
  @RateLimit({ key: 'generate-avatar', limit: 6, windowSec: 600 })
  generate(
    @CurrentUser() auth: AuthContext,
    @Body(new ZodPipe(GenerateAvatarSchema)) body: GenerateAvatarInput,
    @IdempotencyKey() idem?: string,
  ) {
    return this.avatars.generate(auth.userId, body, idem);
  }

  /** GET /avatars */
  @Get('avatars')
  list(@CurrentUser() auth: AuthContext) {
    return this.avatars.list(auth.userId);
  }

  @Get('avatars/:id')
  get(@CurrentUser() auth: AuthContext, @Param('id') id: string) {
    return this.avatars.get(auth.userId, id);
  }

  @Patch('avatars/:id')
  update(@CurrentUser() auth: AuthContext, @Param('id') id: string, @Body(new ZodPipe(UpdateAvatarSchema)) body: z.infer<typeof UpdateAvatarSchema>) {
    return this.avatars.update(auth.userId, id, body);
  }

  /** Hairstyle / eyewear picks (free; stored on the Mascot DNA). */
  @Patch('avatars/:id/look')
  @RateLimit({ key: 'update-look', limit: 60, windowSec: 600 })
  updateLook(@CurrentUser() auth: AuthContext, @Param('id') id: string, @Body(new ZodPipe(UpdateLookSchema)) body: UpdateLookInput) {
    return this.avatars.updateLook(auth.userId, id, body);
  }

  @Delete('avatars/:id')
  @HttpCode(204)
  async remove(@CurrentUser() auth: AuthContext, @Param('id') id: string) {
    await this.avatars.remove(auth.userId, id);
  }

  /** Change style / outfit / pose — reuses the stored Mascot DNA. */
  @Post('avatars/:id/styles')
  @RateLimit({ key: 'style-variant', limit: 20, windowSec: 600 })
  styleVariant(
    @CurrentUser() auth: AuthContext,
    @Param('id') id: string,
    @Body(new ZodPipe(StyleVariantSchema)) body: StyleVariantInput,
    @IdempotencyKey() idem?: string,
  ) {
    return this.avatars.createStyleVariant(auth.userId, id, body, idem);
  }

  @Post('avatars/:id/renders/:renderId/primary')
  setPrimary(@CurrentUser() auth: AuthContext, @Param('id') id: string, @Param('renderId') renderId: string) {
    return this.avatars.setPrimary(auth.userId, id, renderId);
  }

  @Get('avatars/:id/renders/:renderId/hd')
  hd(@CurrentUser() auth: AuthContext, @Param('id') id: string, @Param('renderId') renderId: string) {
    return this.avatars.hdDownload(auth.userId, id, renderId);
  }

  /** Public share page payload (used by the SSR /m/[slug] page for OG previews). */
  @Public()
  @Get('public/avatars/:slug')
  publicAvatar(@Param('slug') slug: string) {
    return this.avatars.publicBySlug(slug);
  }
}
