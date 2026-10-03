/**
 * Headless render entry, bundled to dist/headless.js (IIFE) and loaded into a blank
 * Chromium page by the API's dev image provider: `window.renderMascot(job)` returns a
 * transparent PNG data URL of the character.
 */
import type { MascotDna } from '@mascot/shared';
import { MascotStage, type Framing } from '../src/index';

export interface HeadlessJob {
  dna: MascotDna;
  size: number;
  style?: string;
  emotion?: string;
  outfit?: string;
  outfitColor?: string;
  accessory?: string | null;
  framing?: Framing;
  /** Turntable angle in radians (slight variety between candidates). */
  yaw?: number;
}

declare global {
  interface Window {
    renderMascot: (job: HeadlessJob) => string;
  }
}

let stage: MascotStage | null = null;
let stageSize = 0;

window.renderMascot = (job) => {
  if (!stage || stageSize !== job.size) {
    stage?.dispose();
    stage = new MascotStage({ width: job.size, height: job.size, pixelRatio: 1, preserveDrawingBuffer: true });
    stageSize = job.size;
  }
  return stage.snapshot(job.dna, {
    style: job.style,
    emotion: job.emotion as never,
    outfit: job.outfit,
    outfitColor: job.outfitColor,
    accessory: job.accessory ?? null,
    framing: job.framing ?? 'bust',
    yaw: job.yaw ?? 0,
  });
};
