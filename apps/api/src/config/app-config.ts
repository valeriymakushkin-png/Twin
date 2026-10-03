import { Injectable } from '@nestjs/common';
import { loadEnv, type Env } from './env';

/**
 * Typed, validated configuration. Declaration merging exposes every env key
 * as a readonly property: `config.TELEGRAM_BOT_TOKEN`.
 */
export interface AppConfig extends Readonly<Env> {}

@Injectable()
export class AppConfig {
  constructor() {
    Object.assign(this, loadEnv());
  }

  get isProduction(): boolean {
    return this.NODE_ENV === 'production';
  }

  get miniAppLink(): string {
    return `https://t.me/${this.TELEGRAM_BOT_USERNAME}/${this.TELEGRAM_MINI_APP_SHORT_NAME}`;
  }

  referralLink(code: string): string {
    return `${this.miniAppLink}?startapp=ref_${code}`;
  }

  deepLink(startParam: string): string {
    return `${this.miniAppLink}?startapp=${encodeURIComponent(startParam)}`;
  }
}
