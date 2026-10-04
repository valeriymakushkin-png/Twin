'use client';

import { useEffect, useState } from 'react';
import type { MascotDna } from '@mascot/shared';
import type { Framing, MascotStage, PoseKey } from '@mascot/mascot-3d';

export interface ShotOptions {
  style?: string;
  emotion?: string;
  outfit?: string;
  outfitColor?: string;
  accessory?: string | null;
  framing?: Framing;
  yaw?: number;
  size?: number;
  pose?: PoseKey;
  /** Hairstyle / eyewear catalog keys (previews in the customizer). */
  hair?: string;
  glasses?: string;
}

let stage: MascotStage | null = null;
let queue: Promise<unknown> = Promise.resolve();
const cache = new Map<string, Promise<string>>();
let supported: boolean | null = null;

export function webglSupported(): boolean {
  if (supported !== null) return supported;
  try {
    const c = document.createElement('canvas');
    supported = Boolean(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    supported = false;
  }
  return supported;
}

const idle = () => new Promise<void>((r) => (typeof requestIdleCallback !== 'undefined' ? requestIdleCallback(() => r(), { timeout: 120 }) : setTimeout(r, 16)));

/* Off-main-thread rendering (OffscreenCanvas + Web Worker) with a main-thread fallback. */
let worker: Worker | null = null;
let workerBroken = false;
let jobId = 0;
const pending = new Map<number, { resolve: (url: string) => void; reject: (e: Error) => void }>();

function getWorker(): Worker | null {
  if (workerBroken || typeof Worker === 'undefined' || typeof OffscreenCanvas === 'undefined') return null;
  if (worker) return worker;
  try {
    worker = new Worker('/mascot3d-worker.js');
    worker.onmessage = (e: MessageEvent<{ id: number; blob?: Blob; error?: string }>) => {
      const job = pending.get(e.data.id);
      if (!job) return;
      pending.delete(e.data.id);
      if (e.data.blob) job.resolve(URL.createObjectURL(e.data.blob));
      else job.reject(new Error(e.data.error ?? 'worker render failed'));
    };
    worker.onerror = () => {
      workerBroken = true;
      for (const job of pending.values()) job.reject(new Error('worker crashed'));
      pending.clear();
    };
    return worker;
  } catch {
    workerBroken = true;
    return null;
  }
}

function renderInWorker(w: Worker, dna: MascotDna, opts: ShotOptions): Promise<string> {
  return new Promise((resolve, reject) => {
    const id = ++jobId;
    pending.set(id, { resolve, reject });
    w.postMessage({ id, dna, opts });
  });
}

function renderOnMainThread(dna: MascotDna, opts: ShotOptions): Promise<string> {
  const job = queue.then(async () => {
    const mod = await import('@mascot/mascot-3d');
    const size = opts.size ?? 512;
    if (!stage) stage = new mod.MascotStage({ width: size, height: size, pixelRatio: 1, preserveDrawingBuffer: true });
    stage.setSize(size, size);
    await idle();
    return stage.snapshot(dna, {
      style: opts.style,
      emotion: opts.emotion as never,
      outfit: opts.outfit,
      outfitColor: opts.outfitColor,
      accessory: opts.accessory ?? null,
      framing: opts.framing,
      yaw: opts.yaw,
      pose: opts.pose,
      hair: opts.hair,
      glasses: opts.glasses,
    });
  });
  queue = job.catch(() => undefined);
  return job;
}

/**
 * Renders DNA-driven 3D snapshots (thumbnails for styles, outfits, emotions…), memoised per
 * DNA + options. Runs in a Web Worker when OffscreenCanvas WebGL is available.
 */
export function renderShot(dna: MascotDna, opts: ShotOptions = {}): Promise<string> {
  const key = JSON.stringify([dna, opts]);
  const hit = cache.get(key);
  if (hit) return hit;
  const w = getWorker();
  const job = w
    ? renderInWorker(w, dna, opts).catch(() => {
        // WebGL in workers unsupported here: fall back for this and every later shot.
        workerBroken = true;
        return renderOnMainThread(dna, opts);
      })
    : renderOnMainThread(dna, opts);
  cache.set(key, job);
  job.catch(() => cache.delete(key));
  return job;
}

export function useShot(dna: MascotDna | null | undefined, opts: ShotOptions = {}, enabled = true): string | null {
  const [url, setUrl] = useState<string | null>(null);
  const key = dna ? JSON.stringify([dna, opts]) : '';
  useEffect(() => {
    if (!dna || !enabled || !webglSupported()) return;
    let alive = true;
    renderShot(dna, opts)
      .then((u) => alive && setUrl(u))
      .catch(() => undefined);
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, enabled]);
  return url;
}
