import sharp from 'sharp';
import { MEME_FORMATS, renderMascotSvg, SHOWCASE_DNA } from '@mascot/shared';
import {
  characterCard,
  composeMeme,
  composeProfilePicture,
  dHash,
  fitMaster,
  hammingDistanceHex,
  hasTransparentBackground,
  imageQuality,
  normalizeUpload,
  removeUniformBackground,
  stickerize,
  videoStartFrame,
} from '../src/ai/render/image-ops';

jest.setTimeout(60_000);

const dna = SHOWCASE_DNA[1]!.dna;
let master: Buffer;

beforeAll(async () => {
  master = await fitMaster(await sharp(Buffer.from(renderMascotSvg(dna, { size: 1024, background: 'transparent' }))).png().toBuffer());
});

describe('image ops', () => {
  it('produces a transparent 1024² master', async () => {
    const meta = await sharp(master).metadata();
    expect([meta.width, meta.height]).toEqual([1024, 1024]);
    expect(await hasTransparentBackground(master)).toBe(true);
  });

  it('normalises uploads (EXIF stripped, jpeg, capped size) and scores quality', async () => {
    const big = await sharp({ create: { width: 3000, height: 2000, channels: 3, background: '#88aacc' } }).png().toBuffer();
    const out = await normalizeUpload(big, 384);
    expect(Math.max(out.width, out.height)).toBe(1600);
    const meta = await sharp(out.jpeg).metadata();
    expect(meta.format).toBe('jpeg');
    expect(meta.exif).toBeUndefined();
    const quality = await imageQuality(out.jpeg);
    expect(quality.sharpness).toBeLessThan(5); // flat colour = blurry
  });

  it('rejects tiny images', async () => {
    const tiny = await sharp({ create: { width: 100, height: 100, channels: 3, background: '#fff' } }).png().toBuffer();
    await expect(normalizeUpload(tiny, 384)).rejects.toThrow();
  });

  it('builds Telegram-compliant stickers (512², webp, <512KB)', async () => {
    const webp = await stickerize(master);
    const meta = await sharp(webp).metadata();
    expect(meta.format).toBe('webp');
    expect([meta.width, meta.height]).toEqual([512, 512]);
    expect(webp.length).toBeLessThan(512 * 1024);
  });

  it('removes a uniform background while keeping interior whites', async () => {
    const opaque = await sharp(Buffer.from(renderMascotSvg(dna, { size: 512, background: ['#ffffff', '#ffffff'] }))).png().toBuffer();
    const keyed = await removeUniformBackground(opaque);
    expect(await hasTransparentBackground(keyed)).toBe(true);
    const { data, info } = await sharp(keyed).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const center = ((info.height / 2) * info.width + info.width / 2) * 4;
    expect(data[center + 3]).toBe(255);
  });

  it('computes perceptual hashes', async () => {
    const a = await dHash(master);
    const b = await dHash(await sharp(master).resize(800).png().toBuffer());
    expect(hammingDistanceHex(a, b)).toBeLessThan(6);
  });

  it('composes every meme format', async () => {
    for (const format of MEME_FORMATS) {
      const meme = await composeMeme(format, [master, master], { top: 'When the build passes', bottom: 'on the first try' }, {
        gradient: ['#7c3aed', '#db2777'],
        watermark: true,
        displayName: 'Maya',
      });
      expect((await sharp(meme).metadata()).format).toBe('jpeg');
    }
  });

  it('composes profile pictures, character cards and video frames', async () => {
    const pfp = await composeProfilePicture(master, { key: 'grid', kind: 'pattern', colors: ['#0f0326', '#ff2bd6', '#22d3ee'] }, 1024);
    expect((await sharp(pfp).metadata()).width).toBe(1024);
    const card = await characterCard({ render: master, name: 'Maya', styleName: 'Anime', gradient: ['#7f7cff', '#ff8bd1'], highlights: [{ label: 'Face', value: 'heart' }], watermark: false });
    expect((await sharp(card).metadata()).height).toBe(1440);
    const frame = await videoStartFrame(master, '9:16', ['#000000', '#ffffff']);
    expect((await sharp(frame).metadata()).height).toBe(1280);
  });
});
