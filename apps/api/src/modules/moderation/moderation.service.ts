import { Injectable, Logger } from '@nestjs/common';
import sharp from 'sharp';
import { AppConfig } from '../../config/app-config';
import { fetchJson } from '../../common/utils/http';

export interface ModerationVerdict {
  flagged: boolean;
  categories: string[];
  /** Hard block regardless of user intent (e.g. sexual content involving minors). */
  critical: boolean;
}

interface OpenAiModerationResponse {
  results: Array<{ flagged: boolean; categories: Record<string, boolean>; category_scores: Record<string, number> }>;
}

const CLEAN: ModerationVerdict = { flagged: false, categories: [], critical: false };

/** Patterns blocked in user text regardless of the ML verdict (spam / doxxing vectors). */
const TEXT_RULES: Array<{ category: string; pattern: RegExp }> = [
  { category: 'spam/link', pattern: /(https?:\/\/|www\.|t\.me\/|\b[a-z0-9-]+\.(com|ru|io|xyz|top|app)\b)/i },
  { category: 'spam/mention', pattern: /(^|\s)@[a-z0-9_]{4,}/i },
  { category: 'privacy/phone', pattern: /(\+?\d[\s-]?){10,}/ },
];

/**
 * Content moderation for uploads and user text.
 * OpenAI omni-moderation handles both images and text in one model; rule-based checks
 * always run (cheap, deterministic) and the ML check is skipped when MODERATION_PROVIDER=none.
 */
@Injectable()
export class ModerationService {
  private readonly logger = new Logger(ModerationService.name);

  constructor(private readonly config: AppConfig) {}

  private get enabled(): boolean {
    return this.config.MODERATION_PROVIDER === 'openai' && Boolean(this.config.OPENAI_API_KEY);
  }

  private async callOpenAi(input: unknown[]): Promise<ModerationVerdict> {
    try {
      const res = await fetchJson<OpenAiModerationResponse>(`${this.config.OPENAI_BASE_URL}/moderations`, {
        provider: 'openai-moderation',
        method: 'POST',
        timeoutMs: 15_000,
        headers: { Authorization: `Bearer ${this.config.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: this.config.OPENAI_MODERATION_MODEL, input }),
      });
      const result = res.results[0];
      if (!result) return CLEAN;
      const categories = Object.entries(result.categories).filter(([, v]) => v).map(([k]) => k);
      return { flagged: result.flagged, categories, critical: categories.includes('sexual/minors') };
    } catch (error) {
      // Fail open on provider outage for uploads (face pipeline + age checks still apply),
      // but log loudly so on-call can see moderation is degraded.
      this.logger.error(`moderation call failed: ${(error as Error).message}`);
      return CLEAN;
    }
  }

  async checkText(text: string): Promise<ModerationVerdict> {
    const ruleHits = TEXT_RULES.filter((r) => r.pattern.test(text)).map((r) => r.category);
    if (ruleHits.length) return { flagged: true, categories: ruleHits, critical: false };
    if (!this.enabled || !text.trim()) return CLEAN;
    return this.callOpenAi([{ type: 'text', text: text.slice(0, 2000) }]);
  }

  async checkImage(image: Buffer): Promise<ModerationVerdict> {
    if (!this.enabled) return CLEAN;
    const jpeg = await sharp(image).resize(512, 512, { fit: 'inside' }).jpeg({ quality: 80 }).toBuffer();
    return this.callOpenAi([{ type: 'image_url', image_url: { url: `data:image/jpeg;base64,${jpeg.toString('base64')}` } }]);
  }
}
