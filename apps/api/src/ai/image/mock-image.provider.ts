import sharp from 'sharp';
import { renderMascotSvg } from '@mascot/shared';
import { sleep } from '../../common/utils/async';
import type { ImageGenerationRequest, ImageGenerationResult, ImageProvider } from './image-provider.types';

const INK_BY_STYLE: Record<string, number> = { cartoon: 6, anime: 3, 'gta-loading-screen': 7, arcane: 4, lego: 2 };

/**
 * Procedural provider: renders the DNA-driven SVG mascot. Lets the entire product
 * (pipeline, stickers, memes, PFPs, videos) run end-to-end with zero AI spend.
 */
export class MockImageProvider implements ImageProvider {
  readonly name = 'mock';
  readonly supportsTransparency = true;

  async generate(req: ImageGenerationRequest): Promise<ImageGenerationResult> {
    if (!req.mock) throw new Error('MockImageProvider requires mock hints (dna)');
    await sleep(150 + Math.random() * 350);
    const [w, h] = req.size.split('x').map(Number) as [number, number];
    const images: Buffer[] = [];
    for (let i = 0; i < req.n; i++) {
      const svg = renderMascotSvg(req.mock.dna, {
        size: 1024,
        emotion: req.mock.emotion ?? (req.operation === 'avatar' ? 'happy' : 'neutral'),
        background: req.transparent ? 'transparent' : (req.mock.background ?? req.mock.style?.gradient ?? ['#1e1b4b', '#7c3aed']),
        ink: req.mock.style ? (INK_BY_STYLE[req.mock.style.slug] ?? 0) : 0,
        outfitColor: req.mock.style?.gradient[1],
      });
      images.push(
        await sharp(Buffer.from(svg))
          .resize(w, h, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .png()
          .toBuffer(),
      );
    }
    return { images, provider: this.name, model: 'procedural-svg-v1', costMicros: 0, transparent: req.transparent };
  }
}
