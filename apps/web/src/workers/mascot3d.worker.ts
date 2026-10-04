/// <reference lib="webworker" />
/**
 * Off-main-thread 3D snapshots: builds and renders characters on an OffscreenCanvas so the UI
 * never stalls while thumbnails (styles, stickers, poses) are generated.
 */
import type { MascotDna } from '@mascot/shared';
import { MascotStage, type Framing, type PoseKey } from '@mascot/mascot-3d';

interface Job {
  id: number;
  dna: MascotDna;
  opts: { style?: string; emotion?: string; outfit?: string; outfitColor?: string; accessory?: string | null; framing?: Framing; yaw?: number; size?: number; pose?: PoseKey };
}

let stage: MascotStage | null = null;
let queue: Promise<unknown> = Promise.resolve();

self.onmessage = (event: MessageEvent<Job>) => {
  const { id, dna, opts } = event.data;
  queue = queue.then(async () => {
    try {
      const size = opts.size ?? 512;
      if (!stage) stage = new MascotStage({ canvas: new OffscreenCanvas(size, size), width: size, height: size, pixelRatio: 1, preserveDrawingBuffer: true });
      stage.setSize(size, size);
      const blob = await stage.snapshotBlob(dna, {
        style: opts.style,
        emotion: opts.emotion as never,
        outfit: opts.outfit,
        outfitColor: opts.outfitColor,
        accessory: opts.accessory ?? null,
        framing: opts.framing,
        yaw: opts.yaw,
        pose: opts.pose,
      });
      (self as unknown as DedicatedWorkerGlobalScope).postMessage({ id, blob });
    } catch (error) {
      (self as unknown as DedicatedWorkerGlobalScope).postMessage({ id, error: error instanceof Error ? error.message : String(error) });
    }
  });
};
