import { Controller, Get } from '@nestjs/common';
import type { StyleDto } from '@mascot/shared';
import type { AuthContext } from '../../common/auth-context';
import { CurrentUser } from '../../common/decorators';
import { QuotaService } from '../quota/quota.service';
import { StyleCatalogService } from './style-catalog.service';

@Controller('styles')
export class StylesController {
  constructor(
    private readonly styles: StyleCatalogService,
    private readonly quota: QuotaService,
  ) {}

  @Get()
  async list(@CurrentUser() auth: AuthContext): Promise<StyleDto[]> {
    const [styles, user] = await Promise.all([this.styles.active(), this.quota.loadUser(auth.userId)]);
    const ent = this.quota.entitlements(user);
    return styles.map((s) => ({
      id: s.id,
      slug: s.slug,
      name: s.recipe.name,
      tagline: s.recipe.tagline,
      isPremium: s.isPremium,
      previewUrl: s.previewUrl,
      gradient: s.recipe.gradient,
      locked: s.isPremium && !ent.allStyles,
    }));
  }
}
