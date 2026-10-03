import { spawn } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

/** Thin promise wrapper over the ffmpeg / ffprobe binaries (installed in the worker image). */
export function run(bin: 'ffmpeg' | 'ffprobe', args: string[], timeoutMs = 120_000): Promise<string> {
  return new Promise((resolve, reject) => {
    const child = spawn(bin, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';
    const timer = setTimeout(() => {
      child.kill('SIGKILL');
      reject(new Error(`${bin} timed out after ${timeoutMs}ms`));
    }, timeoutMs);
    child.stdout.on('data', (d: Buffer) => (stdout += d.toString()));
    child.stderr.on('data', (d: Buffer) => (stderr = (stderr + d.toString()).slice(-4000)));
    child.on('error', (err) => {
      clearTimeout(timer);
      reject(err);
    });
    child.on('close', (code) => {
      clearTimeout(timer);
      if (code === 0) resolve(stdout);
      else reject(new Error(`${bin} exited with ${code}: ${stderr}`));
    });
  });
}

export async function withTempDir<T>(fn: (dir: string) => Promise<T>): Promise<T> {
  const dir = await mkdtemp(join(tmpdir(), 'mascot-'));
  try {
    return await fn(dir);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

export async function probeDuration(video: Buffer): Promise<number> {
  return withTempDir(async (dir) => {
    const path = join(dir, 'in.mp4');
    await writeFile(path, video);
    const out = await run('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', path], 30_000);
    return Number.parseFloat(out.trim()) || 0;
  });
}

export async function extractThumbnail(video: Buffer): Promise<Buffer> {
  return withTempDir(async (dir) => {
    const input = join(dir, 'in.mp4');
    const output = join(dir, 'thumb.jpg');
    await writeFile(input, video);
    await run('ffmpeg', ['-y', '-ss', '0.6', '-i', input, '-frames:v', '1', '-vf', 'scale=540:-2', '-q:v', '3', output], 30_000);
    return readFile(output);
  });
}

/**
 * Muxes a voice-over onto the clip. The video is looped if the speech is longer
 * (capped at 30 s) and re-encoded to H.264/AAC with faststart for instant playback in Telegram.
 */
export async function muxVoiceOver(video: Buffer, audio: Buffer): Promise<Buffer> {
  return withTempDir(async (dir) => {
    const v = join(dir, 'v.mp4');
    const a = join(dir, 'a.mp3');
    const out = join(dir, 'out.mp4');
    await writeFile(v, video);
    await writeFile(a, audio);
    await run('ffmpeg', [
      '-y', '-stream_loop', '-1', '-i', v, '-i', a,
      '-map', '0:v:0', '-map', '1:a:0',
      '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '21', '-pix_fmt', 'yuv420p',
      '-c:a', 'aac', '-b:a', '128k',
      '-shortest', '-t', '30', '-movflags', '+faststart', out,
    ], 180_000);
    return readFile(out);
  });
}

/** Normalises any provider output to H.264 MP4 (yuv420p, faststart) for broad playback support. */
export async function normalizeVideo(video: Buffer): Promise<Buffer> {
  return withTempDir(async (dir) => {
    const input = join(dir, 'in.bin');
    const out = join(dir, 'out.mp4');
    await writeFile(input, video);
    await run('ffmpeg', ['-y', '-i', input, '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '20', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-movflags', '+faststart', out], 180_000);
    return readFile(out);
  });
}

/** Local "video model": slow push-in + gentle bob over a still frame (used by the mock provider). */
export async function stillToVideo(frame: Buffer, seconds: number, width: number, height: number): Promise<Buffer> {
  return withTempDir(async (dir) => {
    const input = join(dir, 'frame.png');
    const out = join(dir, 'out.mp4');
    await writeFile(input, frame);
    const fps = 24;
    const frames = Math.round(seconds * fps);
    await run('ffmpeg', [
      '-y', '-loop', '1', '-i', input,
      '-vf', `scale=${width * 2}:${height * 2},zoompan=z='min(1.0+0.0018*on,1.25)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)+sin(on/6)*6':d=${frames}:s=${width}x${height}:fps=${fps},format=yuv420p`,
      '-frames:v', String(frames), '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '23', '-movflags', '+faststart', out,
    ], 180_000);
    return readFile(out);
  });
}

export async function silentSpeech(seconds: number): Promise<Buffer> {
  return withTempDir(async (dir) => {
    const out = join(dir, 'a.mp3');
    await run('ffmpeg', ['-y', '-f', 'lavfi', '-i', `sine=frequency=220:duration=${seconds.toFixed(2)}`, '-af', 'volume=0.05', '-c:a', 'libmp3lame', '-b:a', '96k', out], 30_000);
    return readFile(out);
  });
}
