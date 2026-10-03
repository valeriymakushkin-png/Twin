import { Injectable, Logger, type OnModuleInit } from '@nestjs/common';
import type { Style } from '@prisma/client';
import { getStyleRecipe, STYLE_CATALOG, type StyleRecipe } from '@mascot/shared';
import { AppException } from '../../common/errors';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { StorageService } from '../../infra/storage/storage.service';

export interface ResolvedStyle {
  id: string;
  slug: string;
  isActive: boolean;
  isPremium: boolean;
  previewUrl: string | null;
  recipe: StyleRecipe;
}

const OVERRIDABLE: Array<keyof StyleRecipe> = ['look', 'characterDesign', 'lighting', 'background', 'negative', 'identityStrength', 'tagline', 'name'];

/**
 * Style engine registry: code-defined recipes (packages/shared) merged with the DB row,
 * which carries admin-controlled flags (active, premium, order) and prompt overrides
 * for hot-fixing prompts without a deploy.
 */
@Injectable()
export class StyleCatalogService implements OnModuleInit {
  private readonly logger = new Logger(StyleCatalogService.name);
  private cache: { at: number; styles: ResolvedStyle[] } | null = null;

  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
  ) {}

  async onModuleInit(): Promise<void> {
    await this.ensureSeeded().catch((err: Error) => this.logger.error(`style seed failed: ${err.message}`));
  }

  /** Inserts catalog styles missing from the DB; never overwrites admin edits. */
  async ensureSeeded(): Promise<void> {
    for (const recipe of STYLE_CATALOG) {
      await this.prisma.style.upsert({
        where: { slug: recipe.slug },
        update: {},
        create: { slug: recipe.slug, name: recipe.name, tagline: recipe.tagline, isPremium: recipe.isPremium, sortOrder: recipe.sortOrder },
      });
    }
  }

  private resolve(row: Style): ResolvedStyle | null {
    const base = getStyleRecipe(row.slug);
    if (!base) return null;
    const overrides = (row.promptOverrides ?? {}) as Partial<Record<keyof StyleRecipe, unknown>>;
    const recipe: StyleRecipe = { ...base, isPremium: row.isPremium, sortOrder: row.sortOrder, name: row.name, tagline: row.tagline };
    for (const key of OVERRIDABLE) {
      if (overrides[key] !== undefined && overrides[key] !== null && overrides[key] !== '') {
        (recipe as unknown as Record<string, unknown>)[key] = overrides[key];
      }
    }
    return {
      id: row.id,
      slug: row.slug,
      isActive: row.isActive,
      isPremium: row.isPremium,
      previewUrl: this.storage.publicUrl(row.previewKey),
      recipe,
    };
  }

  async all(): Promise<ResolvedStyle[]> {
    if (this.cache && Date.now() - this.cache.at < 60_000) return this.cache.styles;
    const rows = await this.prisma.style.findMany({ orderBy: { sortOrder: 'asc' } });
    const styles = rows.map((r) => this.resolve(r)).filter((s): s is ResolvedStyle => Boolean(s));
    this.cache = { at: Date.now(), styles };
    return styles;
  }

  invalidate(): void {
    this.cache = null;
  }

  async active(): Promise<ResolvedStyle[]> {
    return (await this.all()).filter((s) => s.isActive);
  }

  async bySlug(slug: string, requireActive = true): Promise<ResolvedStyle> {
    const style = (await this.all()).find((s) => s.slug === slug);
    if (!style || (requireActive && !style.isActive)) throw new AppException('STYLE_UNAVAILABLE', `Style ${slug} is not available`);
    return style;
  }

  async byId(id: string): Promise<ResolvedStyle> {
    const style = (await this.all()).find((s) => s.id === id);
    if (!style) throw new AppException('STYLE_UNAVAILABLE', 'Style not found');
    return style;
  }
}
