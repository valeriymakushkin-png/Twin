/**
 * Likeness evaluation harness — "does the mascot still look like the person?"
 *
 * Runs the production avatar pipeline (face analysis → Mascot DNA → prompt compiler →
 * image provider → best-of-N identity scoring) over a golden set of consenting testers,
 * for every requested style, without touching the database or queues. Then it measures:
 *
 *   identity      ArcFace cosine(mascot face, tester DNA embedding) — higher is better
 *   detection     share of mascots whose stylised face is still detectable at all
 *   rank-1        is the mascot closer to its own tester than to every other tester?
 *   margin        own similarity − best impostor similarity (separability)
 *   self-sim      leave-one-out cosine between the tester's own photos (ceiling reference)
 *
 * Outputs (in --out): results.json (machine-readable, used as the next --baseline),
 * results.csv (with an empty human_rating column for the 1–5 panel), report.md and an
 * index.html contact sheet. Gates (--min-*, --baseline) exit non-zero, so prompt/model
 * changes can be blocked in CI before they reach users.
 *
 * Golden set layout:   <dir>/<tester-id>/consent.json   {"consent": true, "signedAt": "…"}
 *                      <dir>/<tester-id>/*.jpg|png|webp  (5–15 selfies, like the app)
 *
 *   pnpm --filter @mascot/api eval:likeness --dir ./golden --styles all --out reports/likeness
 *   pnpm --filter @mascot/api eval:likeness --synthetic 4          # pipeline smoke test (mock providers)
 *
 * Uses the same env as the workers (AI_IMAGE_PROVIDER, FACE_ANALYSIS_PROVIDER, VISION_PROVIDER…).
 * With the mock face analyzer the scores are synthetic and only prove the harness runs.
 */
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
import sharp from 'sharp';
import {
  describeDna,
  FREE_STYLE_SLUGS,
  getStyleRecipe,
  renderMascotSvg,
  SHOWCASE_DNA,
  STYLE_SLUGS,
  UPLOAD_RULES,
  type MascotDna,
  type StyleRecipe,
} from '@mascot/shared';
import { AppConfig } from '../src/config/app-config';
import { mapLimit } from '../src/common/utils/async';
import { buildDna, cosine, DNA_EXTRACTOR_VERSION, findIdentityOutliers, rankReferencePhotos } from '../src/ai/dna/dna-builder';
import { MockVisionExtractor } from '../src/ai/dna/mock-vision.extractor';
import { OpenAiVisionExtractor } from '../src/ai/dna/openai-vision.extractor';
import type { VisionExtractor } from '../src/ai/dna/vision.types';
import { FaceServiceAnalyzer } from '../src/ai/face/face-service.analyzer';
import type { FaceAnalysis, FaceAnalyzer } from '../src/ai/face/face.types';
import { MockFaceAnalyzer } from '../src/ai/face/mock.analyzer';
import { FluxImageProvider } from '../src/ai/image/flux-image.provider';
import type { ImageProvider } from '../src/ai/image/image-provider.types';
import { MockImageProvider } from '../src/ai/image/mock-image.provider';
import { OpenAiImageProvider } from '../src/ai/image/openai-image.provider';
import { compileAvatarPrompt, PROMPT_VERSION } from '../src/ai/prompts/prompt-compiler';
import { fitMaster, hasTransparentBackground, normalizeUpload, removeUniformBackground } from '../src/ai/render/image-ops';

/* ----------------------------- CLI ----------------------------- */

interface Options {
  dir: string | null;
  synthetic: number;
  styles: string[];
  candidates: number | null;
  out: string;
  concurrency: number;
  requireConsent: boolean;
  baseline: string | null;
  maxRegression: number;
  minMean: number | null;
  minRank1: number | null;
  minDetect: number | null;
}

function parseArgs(argv: string[]): Options {
  const get = (name: string) => {
    const i = argv.indexOf(`--${name}`);
    return i >= 0 ? argv[i + 1] : undefined;
  };
  const num = (name: string) => (get(name) !== undefined ? Number(get(name)) : null);
  const stylesArg = get('styles') ?? 'free';
  const styles = stylesArg === 'all' ? [...STYLE_SLUGS] : stylesArg === 'free' ? [...FREE_STYLE_SLUGS] : stylesArg.split(',').map((s) => s.trim());
  for (const s of styles) if (!getStyleRecipe(s)) throw new Error(`Unknown style "${s}". Known: ${STYLE_SLUGS.join(', ')}`);
  const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  return {
    dir: get('dir') ?? null,
    synthetic: num('synthetic') ?? 0,
    styles,
    candidates: num('candidates'),
    out: resolve(get('out') ?? `reports/likeness/${stamp}`),
    concurrency: num('concurrency') ?? 2,
    requireConsent: !argv.includes('--no-consent-check'),
    baseline: get('baseline') ?? null,
    maxRegression: num('max-regression') ?? 0.02,
    minMean: num('min-mean'),
    minRank1: num('min-rank1'),
    minDetect: num('min-detect'),
  };
}

/* ----------------------------- providers (same selection as AiModule) ----------------------------- */

function providers(config: AppConfig): { faces: FaceAnalyzer; vision: VisionExtractor; images: ImageProvider } {
  const faces = config.FACE_ANALYSIS_PROVIDER === 'service' ? new FaceServiceAnalyzer(config) : new MockFaceAnalyzer();
  const vision = config.VISION_PROVIDER === 'openai' ? new OpenAiVisionExtractor(config) : new MockVisionExtractor();
  const images =
    config.AI_IMAGE_PROVIDER === 'openai'
      ? new OpenAiImageProvider(config)
      : config.AI_IMAGE_PROVIDER === 'flux'
        ? new FluxImageProvider(config)
        : new MockImageProvider();
  return { faces, vision, images };
}

/* ----------------------------- golden set ----------------------------- */

interface Tester {
  id: string;
  photos: Buffer[];
}

const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

async function loadGoldenSet(dir: string, requireConsent: boolean): Promise<Tester[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const testers: Tester[] = [];
  for (const entry of entries.filter((e) => e.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
    const folder = join(dir, entry.name);
    if (requireConsent) {
      const consent = await readFile(join(folder, 'consent.json'), 'utf8').then((raw) => JSON.parse(raw) as { consent?: boolean }).catch(() => null);
      if (!consent?.consent) {
        console.warn(`  ↷ skipping ${entry.name}: no consent.json with "consent": true`);
        continue;
      }
    }
    const files = (await readdir(folder)).filter((f) => IMAGE_EXT.test(f)).sort();
    const photos = await Promise.all(files.map(async (f) => (await normalizeUpload(await readFile(join(folder, f)), UPLOAD_RULES.minDimension)).jpeg));
    if (photos.length < UPLOAD_RULES.minPhotos) {
      console.warn(`  ↷ skipping ${entry.name}: ${photos.length} photos (< ${UPLOAD_RULES.minPhotos})`);
      continue;
    }
    testers.push({ id: entry.name, photos });
  }
  return testers;
}

/** Procedural "selfies" for a pipeline smoke test without real people. */
async function syntheticTesters(count: number): Promise<Tester[]> {
  const backgrounds: Array<[string, string]> = [['#c9d6df', '#52616b'], ['#dfd6c9', '#6b5b52'], ['#c9dfd0', '#526b5b'], ['#d6c9df', '#5b526b']];
  return Promise.all(
    Array.from({ length: count }, async (_, i) => {
      const base = SHOWCASE_DNA[i % SHOWCASE_DNA.length]!;
      const photos = await Promise.all(
        Array.from({ length: 6 }, async (_, j) => {
          const svg = renderMascotSvg(base.dna, { size: 800, emotion: j % 2 ? 'happy' : 'neutral', background: backgrounds[(i + j) % backgrounds.length]! });
          return sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toBuffer();
        }),
      );
      return { id: `synthetic-${i + 1}-${base.name.toLowerCase()}`, photos };
    }),
  );
}

/* ----------------------------- pipeline ----------------------------- */

interface Identity {
  tester: string;
  dna: MascotDna;
  embedding: number[];
  usablePhotos: number;
  outliers: number;
  selfSimilarity: number | null;
  reference: Buffer;
}

interface Sample {
  tester: string;
  style: string;
  detected: boolean;
  identity: number | null;
  candidateScores: Array<number | null>;
  embedding: number[] | null;
  rank1: boolean | null;
  margin: number | null;
  latencyMs: number;
  costMicros: number;
  provider: string;
  model: string;
  render: string;
  error?: string;
}

async function extractIdentity(tester: Tester, faces: FaceAnalyzer, vision: VisionExtractor): Promise<Identity> {
  const analyses = await faces.analyze(tester.photos.map((data, i) => ({ id: String(i), data, subject: tester.id })));
  const analyzed = tester.photos
    .map((buffer, i) => ({ id: String(i), buffer, analysis: analyses.get(String(i)) as FaceAnalysis }))
    .filter((p) => p.analysis && p.analysis.faceCount === 1 && p.analysis.embedding?.length);
  if (analyzed.length < 3) throw new Error(`only ${analyzed.length} usable faces`);
  const outliers = findIdentityOutliers(analyzed.map((p) => ({ id: p.id, embedding: p.analysis.embedding! })));
  const inliers = analyzed.filter((p) => !outliers.has(p.id));
  const ranked = rankReferencePhotos(inliers);
  let attributes = null;
  try {
    attributes = (await vision.extract(ranked.slice(0, 4).map((p) => p.buffer), { seed: tester.id })).attributes;
  } catch (error) {
    console.warn(`  ! vision extraction failed for ${tester.id}: ${(error as Error).message}`);
  }
  const { dna, embedding } = buildDna({ analyses: inliers.map((p) => p.analysis), vision: attributes });

  // Leave-one-out self-similarity: the realistic ceiling for "looks like the same person".
  let selfSimilarity: number | null = null;
  if (inliers.length >= 2) {
    const sims = inliers.map((p) => {
      const others = inliers.filter((o) => o !== p).map((o) => o.analysis.embedding!);
      const mean = others[0]!.map((_, k) => others.reduce((s, e) => s + e[k]!, 0) / others.length);
      return cosine(p.analysis.embedding!, mean);
    });
    selfSimilarity = sims.reduce((a, b) => a + b, 0) / sims.length;
  }
  return { tester: tester.id, dna, embedding, usablePhotos: inliers.length, outliers: outliers.size, selfSimilarity, reference: ranked[0]!.buffer };
}

async function generateSample(
  id: Identity,
  references: Buffer[],
  style: StyleRecipe,
  candidates: number,
  deps: { faces: FaceAnalyzer; images: ImageProvider; useRembg: boolean },
  outDir: string,
): Promise<Sample> {
  const started = Date.now();
  const compiled = compileAvatarPrompt({ dna: id.dna, identity: describeDna(id.dna), style, opaqueOutput: !deps.images.supportsTransparency });
  const result = await deps.images.generate({
    operation: 'avatar',
    prompt: compiled.prompt,
    negative: compiled.negative,
    references,
    size: '1024x1024',
    transparent: true,
    n: candidates,
    seed: 1337,
    mock: { dna: id.dna, style, emotion: 'happy' },
  });
  const masters = await Promise.all(
    result.images.map(async (img) => {
      let png = img;
      if (!(result.transparent && (await hasTransparentBackground(img)))) {
        png = deps.useRembg && deps.faces.removeBackground ? await deps.faces.removeBackground(img).catch(() => removeUniformBackground(img)) : await removeUniformBackground(img);
      }
      return fitMaster(png);
    }),
  );
  // No `subject`: generated faces must earn their identity from pixels alone.
  const analyses = await deps.faces.analyze(masters.map((data, i) => ({ id: String(i), data })));
  const scored = masters.map((_, i) => {
    const emb = analyses.get(String(i))?.embedding ?? null;
    return { emb, score: emb ? cosine(emb, id.embedding) : null };
  });
  let best = 0;
  scored.forEach((s, i) => {
    if (s.score !== null && (scored[best]!.score === null || s.score > scored[best]!.score!)) best = i;
  });
  const file = join(outDir, 'renders', id.tester, `${style.slug}.png`);
  await mkdir(join(outDir, 'renders', id.tester), { recursive: true });
  await writeFile(file, masters[best]!);
  return {
    tester: id.tester,
    style: style.slug,
    detected: scored[best]!.emb !== null,
    identity: scored[best]!.score,
    candidateScores: scored.map((s) => s.score),
    embedding: scored[best]!.emb,
    rank1: null,
    margin: null,
    latencyMs: Date.now() - started,
    costMicros: result.costMicros,
    provider: result.provider,
    model: result.model,
    render: relative(outDir, file),
  };
}

/* ----------------------------- statistics ----------------------------- */

const mean = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);
function quantile(xs: number[], q: number): number | null {
  if (!xs.length) return null;
  const s = [...xs].sort((a, b) => a - b);
  const pos = (s.length - 1) * q;
  const lo = Math.floor(pos);
  return s[lo]! + (s[Math.min(lo + 1, s.length - 1)]! - s[lo]!) * (pos - lo);
}

interface Aggregate {
  n: number;
  detectionRate: number;
  meanIdentity: number | null;
  p10Identity: number | null;
  rank1: number | null;
  meanMargin: number | null;
  meanLatencyMs: number;
  costPerSampleUsd: number;
}

function aggregate(samples: Sample[]): Aggregate {
  const ok = samples.filter((s) => !s.error);
  const ids = ok.map((s) => s.identity).filter((v): v is number => v !== null);
  const ranks = ok.map((s) => s.rank1).filter((v): v is boolean => v !== null);
  return {
    n: ok.length,
    detectionRate: ok.length ? ok.filter((s) => s.detected).length / ok.length : 0,
    meanIdentity: mean(ids),
    p10Identity: quantile(ids, 0.1),
    rank1: ranks.length ? ranks.filter(Boolean).length / ranks.length : null,
    meanMargin: mean(ok.map((s) => s.margin).filter((v): v is number => v !== null)),
    meanLatencyMs: mean(ok.map((s) => s.latencyMs)) ?? 0,
    costPerSampleUsd: (mean(ok.map((s) => s.costMicros)) ?? 0) / 1e6,
  };
}

const fmt = (v: number | null, digits = 3) => (v === null || Number.isNaN(v) ? '—' : v.toFixed(digits));
const pct = (v: number | null) => (v === null ? '—' : `${(v * 100).toFixed(0)}%`);

/* ----------------------------- main ----------------------------- */

async function main(): Promise<void> {
  const opts = parseArgs(process.argv.slice(2));
  const config = new AppConfig();
  const deps = providers(config);
  const candidates = opts.candidates ?? config.AVATAR_CANDIDATES;
  const synthetic = deps.faces.name === 'mock';

  console.log(`Likeness eval · faces=${deps.faces.name} vision=${deps.vision.name} images=${deps.images.name} · candidates=${candidates}`);
  console.log(`prompt ${PROMPT_VERSION} · dna ${DNA_EXTRACTOR_VERSION} · styles: ${opts.styles.join(', ')}\n`);
  if (synthetic) console.warn('⚠ Mock face analyzer: identity scores are synthetic. Use FACE_ANALYSIS_PROVIDER=service for real numbers.\n');

  const testers = opts.synthetic > 0 ? await syntheticTesters(opts.synthetic) : opts.dir ? await loadGoldenSet(resolve(opts.dir), opts.requireConsent) : [];
  if (!testers.length) throw new Error('No testers. Pass --dir <golden-set> (with consent.json per tester) or --synthetic N.');
  await mkdir(opts.out, { recursive: true });

  console.log(`1. Mascot DNA for ${testers.length} testers`);
  const identities: Identity[] = [];
  const skipped: Array<{ tester: string; reason: string }> = [];
  const refsByTester = new Map<string, Buffer[]>();
  for (const tester of testers) {
    try {
      const id = await extractIdentity(tester, deps.faces, deps.vision);
      identities.push(id);
      refsByTester.set(tester.id, tester.photos.slice(0, 3));
      await mkdir(join(opts.out, 'renders', tester.id), { recursive: true });
      await sharp(id.reference).resize(256, 256, { fit: 'cover' }).jpeg({ quality: 80 }).toFile(join(opts.out, 'renders', tester.id, 'reference.jpg'));
      console.log(`  ✔ ${tester.id}: ${id.usablePhotos} usable photos, ${id.outliers} outliers, self-sim ${fmt(id.selfSimilarity)}`);
    } catch (error) {
      skipped.push({ tester: tester.id, reason: (error as Error).message });
      console.warn(`  ✘ ${tester.id}: ${(error as Error).message}`);
    }
  }

  if (!identities.length) {
    throw new Error(
      opts.synthetic > 0 && !synthetic
        ? 'No usable testers. Procedural --synthetic selfies are cartoons, so a real face analyzer cannot detect them — use a real golden set (--dir) or FACE_ANALYSIS_PROVIDER=mock.'
        : 'No usable testers: every photo set failed face analysis.',
    );
  }

  console.log(`\n2. Generating ${identities.length * opts.styles.length} mascots`);
  const jobs = identities.flatMap((id) => opts.styles.map((slug) => ({ id, style: getStyleRecipe(slug)! })));
  const samples = await mapLimit(jobs, opts.concurrency, async ({ id, style }) => {
    try {
      const sample = await generateSample(id, refsByTester.get(id.tester)!, style, candidates, { ...deps, useRembg: config.BACKGROUND_REMOVAL === 'face-service' }, opts.out);
      console.log(`  ${sample.detected ? '✔' : '○'} ${id.tester} × ${style.slug}: identity ${fmt(sample.identity)} (${sample.latencyMs} ms)`);
      return sample;
    } catch (error) {
      console.warn(`  ✘ ${id.tester} × ${style.slug}: ${(error as Error).message}`);
      return { tester: id.tester, style: style.slug, detected: false, identity: null, candidateScores: [], embedding: null, rank1: null, margin: null, latencyMs: 0, costMicros: 0, provider: deps.images.name, model: '', render: '', error: (error as Error).message } satisfies Sample;
    }
  });

  // Impostor analysis: closed-set identification among all testers in the run.
  if (identities.length >= 2) {
    for (const s of samples) {
      if (!s.embedding) continue;
      const own = cosine(s.embedding, identities.find((i) => i.tester === s.tester)!.embedding);
      const impostor = Math.max(...identities.filter((i) => i.tester !== s.tester).map((i) => cosine(s.embedding!, i.embedding)));
      s.rank1 = own > impostor;
      s.margin = own - impostor;
    }
  }

  const byStyle = Object.fromEntries(opts.styles.map((slug) => [slug, aggregate(samples.filter((s) => s.style === slug))]));
  const overall = aggregate(samples);

  /* ----------------------------- gates ----------------------------- */
  const failures: string[] = [];
  if (opts.minMean !== null && (overall.meanIdentity ?? -1) < opts.minMean) failures.push(`mean identity ${fmt(overall.meanIdentity)} < ${opts.minMean}`);
  if (opts.minRank1 !== null && (overall.rank1 ?? 0) < opts.minRank1) failures.push(`rank-1 ${pct(overall.rank1)} < ${pct(opts.minRank1)}`);
  if (opts.minDetect !== null && overall.detectionRate < opts.minDetect) failures.push(`detection ${pct(overall.detectionRate)} < ${pct(opts.minDetect)}`);
  let baselineRows: Array<{ style: string; before: number | null; after: number | null; delta: number | null }> = [];
  if (opts.baseline) {
    const base = JSON.parse(await readFile(resolve(opts.baseline), 'utf8')) as { byStyle: Record<string, Aggregate> };
    baselineRows = opts.styles.map((slug) => {
      const before = base.byStyle[slug]?.meanIdentity ?? null;
      const after = byStyle[slug]!.meanIdentity;
      const delta = before !== null && after !== null ? after - before : null;
      if (delta !== null && delta < -opts.maxRegression) failures.push(`${slug}: identity regressed ${fmt(delta)} (> ${opts.maxRegression})`);
      return { style: slug, before, after, delta };
    });
  }

  /* ----------------------------- outputs ----------------------------- */
  const meta = {
    createdAt: new Date().toISOString(),
    promptVersion: PROMPT_VERSION,
    dnaExtractorVersion: DNA_EXTRACTOR_VERSION,
    providers: { faces: deps.faces.name, vision: deps.vision.name, images: deps.images.name },
    candidates,
    synthetic,
    testers: identities.map(({ tester, usablePhotos, outliers, selfSimilarity }) => ({ tester, usablePhotos, outliers, selfSimilarity })),
    skipped,
  };
  await writeFile(
    join(opts.out, 'results.json'),
    JSON.stringify({ meta, overall, byStyle, samples: samples.map(({ embedding: _e, ...rest }) => rest), gates: { failures } }, null, 2),
  );

  const csvHeader = 'tester,style,detected,identity,margin,rank1,candidate_scores,latency_ms,cost_usd,render,error,human_rating_1_5,notes';
  const csv = [
    csvHeader,
    ...samples.map((s) =>
      [s.tester, s.style, s.detected, fmt(s.identity, 4), fmt(s.margin, 4), s.rank1 ?? '', s.candidateScores.map((v) => fmt(v, 3)).join(' '), s.latencyMs, (s.costMicros / 1e6).toFixed(4), s.render, (s.error ?? '').replace(/[,\n]/g, ' '), '', '']
        .map(String)
        .join(','),
    ),
  ].join('\n');
  await writeFile(join(opts.out, 'results.csv'), `${csv}\n`);

  const md = [
    `# Likeness evaluation — ${meta.createdAt.slice(0, 16).replace('T', ' ')} UTC`,
    '',
    synthetic ? '> ⚠️ Mock face analyzer — scores are synthetic (pipeline smoke test only).\n' : '',
    `Providers: faces **${meta.providers.faces}**, vision **${meta.providers.vision}**, images **${meta.providers.images}** · candidates per mascot: **${candidates}**  `,
    `Prompt \`${PROMPT_VERSION}\` · DNA extractor \`${DNA_EXTRACTOR_VERSION}\` · testers: **${identities.length}** (${skipped.length} skipped)`,
    '',
    '| Style | n | Detected | Identity (mean) | Identity (p10) | Rank-1 | Margin | Latency | Cost / mascot |',
    '|---|---:|---:|---:|---:|---:|---:|---:|---:|',
    ...opts.styles.map((slug) => {
      const a = byStyle[slug]!;
      return `| ${getStyleRecipe(slug)!.name} | ${a.n} | ${pct(a.detectionRate)} | ${fmt(a.meanIdentity)} | ${fmt(a.p10Identity)} | ${pct(a.rank1)} | ${fmt(a.meanMargin)} | ${(a.meanLatencyMs / 1000).toFixed(1)} s | $${a.costPerSampleUsd.toFixed(3)} |`;
    }),
    `| **All** | ${overall.n} | ${pct(overall.detectionRate)} | ${fmt(overall.meanIdentity)} | ${fmt(overall.p10Identity)} | ${pct(overall.rank1)} | ${fmt(overall.meanMargin)} | ${(overall.meanLatencyMs / 1000).toFixed(1)} s | $${overall.costPerSampleUsd.toFixed(3)} |`,
    '',
    `Reference ceiling (photo ↔ own photos, leave-one-out): **${fmt(mean(identities.map((i) => i.selfSimilarity).filter((v): v is number => v !== null)))}**`,
    '',
    ...(baselineRows.length
      ? ['## Versus baseline', '', '| Style | Before | After | Δ |', '|---|---:|---:|---:|', ...baselineRows.map((r) => `| ${r.style} | ${fmt(r.before)} | ${fmt(r.after)} | ${r.delta === null ? '—' : (r.delta >= 0 ? '+' : '') + r.delta.toFixed(3)} |`), '']
      : []),
    '## Gates',
    '',
    failures.length ? failures.map((f) => `- ❌ ${f}`).join('\n') : '- ✅ all gates passed',
    '',
    '## Human rating',
    '',
    'Open `index.html` next to the panel, fill `human_rating_1_5` in `results.csv` ("looks like me": 1 = not at all, 5 = instantly recognisable). Target: mean ≥ 4.0 per style.',
    '',
  ].join('\n');
  await writeFile(join(opts.out, 'report.md'), md);

  const cell = (s: Sample | undefined) =>
    !s || s.error
      ? `<td class="err">${s?.error ?? '—'}</td>`
      : `<td><img src="${s.render}" loading="lazy"><div class="${s.detected ? '' : 'muted'}">${s.detected ? fmt(s.identity) : 'no face'}${s.rank1 === false ? ' · <b>✗ rank-1</b>' : ''}</div></td>`;
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Likeness eval</title>
<style>:root{color-scheme:dark}body{margin:0;padding:16px;background:#0b0b10;color:#e8e8ef;font:13px/1.4 system-ui,sans-serif}table{border-collapse:collapse}th,td{padding:6px;text-align:center;vertical-align:top;border-bottom:1px solid #22222c}th{position:sticky;top:0;background:#0b0b10}img{width:150px;height:150px;object-fit:contain;border-radius:12px;background:repeating-conic-gradient(#1b1b24 0 25%,#14141b 0 50%) 0 0/16px 16px}.ref img{object-fit:cover}.muted{color:#8b8b9a}.err{color:#f87171;max-width:150px}h1{font-size:18px}</style></head>
<body><h1>Likeness eval · ${PROMPT_VERSION} · ${meta.providers.images}${synthetic ? ' · synthetic scores' : ''}</h1><table><thead><tr><th>Tester</th><th>Reference</th>${opts.styles.map((s) => `<th>${getStyleRecipe(s)!.name}</th>`).join('')}</tr></thead><tbody>
${identities.map((id) => `<tr><td>${id.tester}</td><td class="ref"><img src="renders/${id.tester}/reference.jpg"></td>${opts.styles.map((slug) => cell(samples.find((s) => s.tester === id.tester && s.style === slug))).join('')}</tr>`).join('\n')}
</tbody></table></body></html>`;
  await writeFile(join(opts.out, 'index.html'), html);

  console.log(`\n${md.split('\n').filter((l) => l.startsWith('|')).join('\n')}\n`);
  console.log(`Report: ${join(opts.out, 'report.md')}`);
  if (failures.length) {
    console.error(`\n❌ Gates failed:\n  ${failures.join('\n  ')}`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
