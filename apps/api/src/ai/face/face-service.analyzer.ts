import { Logger } from '@nestjs/common';
import type { AppConfig } from '../../config/app-config';
import { ProviderError } from '../../common/errors';
import { fetchJson, fetchWithTimeout } from '../../common/utils/http';
import type { FaceAnalysis, FaceAnalyzer, FaceImageInput } from './face.types';

interface ServiceResponse {
  results: Array<{ id: string; ok: boolean; error?: string; analysis?: FaceAnalysis }>;
}

/**
 * HTTP client for apps/face-service (FastAPI + InsightFace + MediaPipe + rembg).
 * Images are sent inline (base64) when we hold the bytes, otherwise as signed URLs.
 */
export class FaceServiceAnalyzer implements FaceAnalyzer {
  readonly name = 'face-service';
  private readonly logger = new Logger(FaceServiceAnalyzer.name);

  constructor(private readonly config: AppConfig) {}

  async analyze(images: FaceImageInput[]): Promise<Map<string, FaceAnalysis>> {
    const out = new Map<string, FaceAnalysis>();
    // Batches of 6 keep request bodies < ~3 MB and parallelise across face-service replicas.
    for (let i = 0; i < images.length; i += 6) {
      const batch = images.slice(i, i + 6);
      const body = {
        images: batch.map((img) => ({
          id: img.id,
          ...(img.data ? { image_b64: img.data.toString('base64') } : { url: img.url }),
        })),
      };
      const res = await fetchJson<ServiceResponse>(`${this.config.FACE_SERVICE_URL}/v1/analyze`, {
        provider: this.name,
        method: 'POST',
        timeoutMs: this.config.FACE_SERVICE_TIMEOUT_MS,
        headers: { 'Content-Type': 'application/json', 'X-Service-Token': this.config.FACE_SERVICE_TOKEN },
        body: JSON.stringify(body),
      });
      for (const r of res.results) {
        if (r.ok && r.analysis) out.set(r.id, r.analysis);
        else this.logger.warn(`face analysis failed for ${r.id}: ${r.error}`);
      }
    }
    return out;
  }

  async removeBackground(image: Buffer): Promise<Buffer> {
    const res = await fetchWithTimeout(`${this.config.FACE_SERVICE_URL}/v1/remove-background`, {
      provider: this.name,
      method: 'POST',
      timeoutMs: 60_000,
      headers: { 'Content-Type': 'application/octet-stream', 'X-Service-Token': this.config.FACE_SERVICE_TOKEN },
      body: new Uint8Array(image),
    });
    if (!res.ok) throw new ProviderError(this.name, `remove-background HTTP ${res.status}`, res.status);
    return Buffer.from(await res.arrayBuffer());
  }
}
