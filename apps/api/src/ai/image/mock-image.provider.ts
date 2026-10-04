import { Logger, type OnModuleDestroy } from '@nestjs/common';
import sharp from 'sharp';
import { renderMascotSvg } from '@mascot/shared';
import { sleep } from '../../common/utils/async';
import type { ImageGenerationRequest, ImageGenerationResult, ImageOperation, ImageProvider } from './image-provider.types';
import { Mascot3dRenderer, type Mascot3dJob } from './mascot-3d.renderer';

const INK_BY_STYLE: Record<string, number> = { cartoon: 6, anime: 3, 'gta-loading-screen': 7, arcane: 4, lego: 2 };
const FRAMING: Record<ImageOperation, NonNullable<Mascot3dJob['framing']>> = {
  avatar: 'bust',
  style: 'bust',
  sticker: 'sticker',
  meme: 'bust',
  pfp: 'portrait',
  keyframe: 'bust',
};
// Default opaque backdrop: the app's black studio with a red glow.
const STUDIO: [string, string] = ['#1a0709', '#050506'];

export type MockRenderer = '3d' | 'svg';

/**
 * Zero-cost provider for development, demos and CI. Renders the DNA-driven mascot with the
 * same three.js renderer the Mini App uses (headless Chromium), falling back to the
 * procedural SVG when Chromium is unavailable — so the whole product (pipeline, stickers,
 * memes, PFPs, videos) runs end-to-end with no AI spend.
 */
export class MockImageProvider implements ImageProvider, OnModuleDestroy {
  readonly name = 'mock';
  readonly supportsTransparency = true;
  private readonly logger = new Logger(MockImageProvider.name);
  private renderer: Promise<Mascot3dRenderer | null> | null = null;

  constructor(private readonly mode: MockRenderer = '3d') {}

  async generate(req: ImageGenerationRequest): Promise<ImageGenerationResult> {
    if (!req.mock) throw new Error('MockImageProvider requires mock hints (dna)');
    const [w, h] = req.size.split('x').map(Number) as [number, number];
    const renderer = await this.get3d();
    if (renderer) {
      try {
        const images: Buffer[] = [];
        for (let i = 0; i < req.n; i++) images.push(await this.render3d(renderer, req, i, w, h));
        return { images, provider: this.name, model: 'procedural-3d-v1', costMicros: 0, transparent: req.transparent };
      } catch (error) {
        this.logger.warn(`3D render failed, using SVG: ${(error as Error).message}`);
      }
    }
    await sleep(150 + Math.random() * 350);
    const images: Buffer[] = [];
    for (let i = 0; i < req.n; i++) images.push(await this.renderSvg(req, w, h));
    return { images, provider: this.name, model: 'procedural-svg-v1', costMicros: 0, transparent: req.transparent };
  }

  async onModuleDestroy(): Promise<void> {
    const renderer = await this.renderer;
    await renderer?.close();
  }

  private get3d(): Promise<Mascot3dRenderer | null> {
    if (this.mode !== '3d') return Promise.resolve(null);
    this.renderer ??= Mascot3dRenderer.create();
    return this.renderer;
  }

  private async render3d(renderer: Mascot3dRenderer, req: ImageGenerationRequest, index: number, w: number, h: number): Promise<Buffer> {
    const mock = req.mock!;
    const side = Math.min(w, h);
    const png = await renderer.render({
      dna: mock.dna,
      // Software GL on GPU-less dev machines is per-pixel bound: render at 768 and upscale.
      size: Math.min(768, side),
      style: mock.style?.slug,
      emotion: mock.emotion ?? (req.operation === 'avatar' ? 'happy' : 'neutral'),
      outfit: mock.outfit,
      accessory: mock.accessory ?? null,
      framing: FRAMING[req.operation],
      // Candidates differ by a slight turn, like separate takes.
      yaw: index === 0 ? 0 : (index % 2 ? -1 : 1) * 0.14 * Math.ceil(index / 2),
    });
    const character = await sharp(png).resize(side, side, { kernel: 'lanczos3' }).png().toBuffer();
    const canvas = req.transparent
      ? sharp({ create: { width: w, height: h, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
      : sharp(Buffer.from(backdropSvg(w, h, mock.background ?? STUDIO)));
    return canvas
      .composite([{ input: character, left: Math.round((w - side) / 2), top: Math.round((h - side) / 2) }])
      .png()
      .toBuffer();
  }

  private async renderSvg(req: ImageGenerationRequest, w: number, h: number): Promise<Buffer> {
    const mock = req.mock!;
    const svg = renderMascotSvg(mock.dna, {
      size: 1024,
      emotion: mock.emotion ?? (req.operation === 'avatar' ? 'happy' : 'neutral'),
      background: req.transparent ? 'transparent' : (mock.background ?? mock.style?.gradient ?? STUDIO),
      ink: mock.style ? (INK_BY_STYLE[mock.style.slug] ?? 0) : 0,
      outfitColor: mock.style?.gradient[1],
    });
    return sharp(Buffer.from(svg))
      .resize(w, h, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
  }
}

/** Soft radial studio backdrop between two colours (centre glow → edge). */
function backdropSvg(w: number, h: number, [from, to]: [string, string]): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs><radialGradient id="g" cx="50%" cy="42%" r="70%"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></radialGradient></defs>
  <rect width="100%" height="100%" fill="url(#g)"/></svg>`;
}
