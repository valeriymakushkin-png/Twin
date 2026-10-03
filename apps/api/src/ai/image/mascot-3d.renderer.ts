import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { Logger } from '@nestjs/common';
import type { MascotDna } from '@mascot/shared';

/** Minimal slice of playwright-core used here (kept local so the dependency stays optional). */
interface PwPage {
  setContent(html: string): Promise<void>;
  evaluate<R, A>(fn: (arg: A) => R, arg: A): Promise<R>;
  isClosed(): boolean;
}
interface PwBrowser {
  newPage(opts: { viewport: { width: number; height: number } }): Promise<PwPage>;
  close(): Promise<void>;
  on(event: 'disconnected', cb: () => void): void;
}

export interface Mascot3dJob {
  dna: MascotDna;
  size: number;
  style?: string;
  emotion?: string;
  outfit?: string;
  outfitColor?: string;
  accessory?: string | null;
  framing?: 'bust' | 'portrait' | 'head' | 'sticker';
  yaw?: number;
}

const CHROMIUM_CANDIDATES = ['/opt/pw-browsers/chromium', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/google-chrome'];
// Software GL keeps it working on GPU-less servers and CI.
const CHROMIUM_ARGS = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox'];

/**
 * Renders the same three.js character the Mini App shows, server-side, by driving a
 * headless Chromium page that hosts the @mascot/mascot-3d bundle. Used by the dev image
 * provider so pipeline outputs (avatars, stickers, PFPs) match the in-app 3D look.
 * Every dependency is optional: `create()` resolves to null when Chromium,
 * playwright-core or the bundle are unavailable, and callers fall back to SVG.
 */
export class Mascot3dRenderer {
  private static readonly logger = new Logger(Mascot3dRenderer.name);
  private queue: Promise<unknown> = Promise.resolve();

  private constructor(
    private readonly browser: PwBrowser,
    private page: PwPage,
    private readonly html: string,
  ) {}

  static async create(env: NodeJS.ProcessEnv = process.env): Promise<Mascot3dRenderer | null> {
    try {
      const executablePath = env.CHROMIUM_PATH || CHROMIUM_CANDIDATES.find((p) => existsSync(p));
      if (!executablePath) {
        Mascot3dRenderer.logger.log('3D mock renders disabled: no Chromium found (set CHROMIUM_PATH)');
        return null;
      }
      const bundle = await loadBundle();
      if (!bundle) {
        Mascot3dRenderer.logger.log('3D mock renders disabled: @mascot/mascot-3d bundle unavailable');
        return null;
      }
      const { chromium } = (await import('playwright-core')) as unknown as {
        chromium: { launch(o: { executablePath: string; args: string[]; headless: boolean }): Promise<PwBrowser> };
      };
      const browser = await chromium.launch({ executablePath, args: CHROMIUM_ARGS, headless: true });
      const html = `<!doctype html><html><body style="margin:0;background:transparent"><script>${bundle.replace(/<\/script/gi, '<\\/script')}</script></body></html>`;
      const page = await browser.newPage({ viewport: { width: 64, height: 64 } });
      await page.setContent(html);
      Mascot3dRenderer.logger.log(`3D mock renders enabled (${executablePath})`);
      return new Mascot3dRenderer(browser, page, html);
    } catch (error) {
      Mascot3dRenderer.logger.warn(`3D mock renders disabled: ${(error as Error).message}`);
      return null;
    }
  }

  /** Renders one transparent PNG. Jobs are serialised: one WebGL context, one page. */
  render(job: Mascot3dJob): Promise<Buffer> {
    const run = this.queue.then(async () => {
      if (this.page.isClosed()) {
        this.page = await this.browser.newPage({ viewport: { width: 64, height: 64 } });
        await this.page.setContent(this.html);
      }
      const dataUrl = await this.page.evaluate((j: Mascot3dJob) => (window as unknown as { renderMascot: (x: Mascot3dJob) => string }).renderMascot(j), job);
      return Buffer.from(dataUrl.slice(dataUrl.indexOf(',') + 1), 'base64');
    });
    this.queue = run.catch(() => undefined);
    return run;
  }

  async close(): Promise<void> {
    await this.browser.close().catch(() => undefined);
  }
}

/** Prebuilt dist/headless.js, or an on-the-fly esbuild bundle in a dev checkout. */
async function loadBundle(): Promise<string | null> {
  let pkgDir: string;
  try {
    pkgDir = dirname(require.resolve('@mascot/mascot-3d/package.json'));
  } catch {
    return null;
  }
  const built = join(pkgDir, 'dist', 'headless.js');
  if (existsSync(built)) return readFileSync(built, 'utf8');
  try {
    const esbuild = createRequire(join(pkgDir, 'package.json'))('esbuild') as {
      build(o: Record<string, unknown>): Promise<{ outputFiles: Array<{ text: string }> }>;
    };
    const out = await esbuild.build({
      entryPoints: [join(pkgDir, 'headless', 'entry.ts')],
      bundle: true,
      format: 'iife',
      target: 'es2022',
      minify: true,
      write: false,
    });
    return out.outputFiles[0]?.text ?? null;
  } catch {
    return null;
  }
}
