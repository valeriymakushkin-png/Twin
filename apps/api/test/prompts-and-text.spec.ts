import { describeDna, getStyleRecipe, SHOWCASE_DNA, VIDEO_TEMPLATES } from '@mascot/shared';
import {
  compileAvatarPrompt,
  compileStickerPrompt,
  compileStyleVariantPrompt,
  compileVideoPrompt,
} from '../src/ai/prompts/prompt-compiler';
import { fitText, wrapText } from '../src/ai/render/svg-text';
import { splitMemeText } from '../src/modules/memes/memes.service';
import { parseStartParam } from '../src/modules/users/users.service';
import { classifyMemeEmotion } from '../src/workers/meme.processor';

const dna = SHOWCASE_DNA[0]!.dna;
const ctx = { dna, identity: describeDna(dna), style: getStyleRecipe('pixar')! };

describe('prompt compiler', () => {
  it('puts identity before style and keeps constraints', () => {
    const { prompt } = compileAvatarPrompt(ctx);
    expect(prompt.indexOf('IDENTITY')).toBeLessThan(prompt.indexOf('STYLE'));
    expect(prompt).toContain(ctx.identity);
    expect(prompt).toContain('transparent background');
    expect(prompt).toContain('no watermark');
  });

  it('asks for a keyable background when the provider has no alpha', () => {
    expect(compileAvatarPrompt({ ...ctx, opaqueOutput: true }).prompt).toContain('pure-white background');
  });

  it('is deterministic', () => {
    expect(compileStickerPrompt(ctx, 'laughing').prompt).toBe(compileStickerPrompt(ctx, 'laughing').prompt);
    expect(compileStickerPrompt(ctx, 'love').prompt).toContain('heart');
    expect(compileStyleVariantPrompt(ctx).prompt).toContain('reference image');
  });

  it('compiles every video template', () => {
    for (const t of VIDEO_TEMPLATES) expect(compileVideoPrompt(ctx, t, 'at the beach').prompt).toContain('MOTION');
  });
});

describe('text helpers', () => {
  it('wraps and fits text into boxes', () => {
    expect(wrapText('one two three four five six', 200, 40).length).toBeGreaterThan(1);
    const fitted = fitText('When the code works on the first try', { width: 1000, height: 200 }, { max: 100, min: 40 });
    expect(fitted.fontSize).toBeLessThanOrEqual(100);
    expect(fitted.lines.length).toBeGreaterThan(0);
  });

  it('splits meme text for dual-text formats', () => {
    expect(splitMemeText('classic', { text: 'me at 9am | me at 9pm' })).toEqual({ top: 'me at 9am', bottom: 'me at 9pm' });
    expect(splitMemeText('pov', { text: 'you deployed on friday' })).toEqual({ top: 'you deployed on friday', bottom: null });
    expect(splitMemeText('classic', { topText: 'a', bottomText: 'b' })).toEqual({ top: 'a', bottom: 'b' });
  });

  it('classifies meme emotions (EN/RU)', () => {
    expect(classifyMemeEmotion('Monday again...')).toBe('facepalm');
    expect(classifyMemeEmotion('опять понедельник')).toBe('facepalm');
    expect(classifyMemeEmotion('I love pizza')).toBe('love');
    expect(classifyMemeEmotion('random text')).toBe('laughing');
  });

  it('parses start params', () => {
    expect(parseStartParam('ref_ab12CD34__src_TikTok')).toEqual({ referralCode: 'ab12CD34', source: 'tiktok' });
    expect(parseStartParam('m_slug123')).toEqual({ shareSlug: 'slug123' });
    expect(parseStartParam('ref_<script>')).toEqual({});
    expect(parseStartParam(undefined)).toEqual({});
  });
});
