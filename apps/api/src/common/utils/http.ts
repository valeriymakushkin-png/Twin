import { ProviderError } from '../errors';
import { sleep } from './async';

export interface FetchJsonOptions extends RequestInit {
  timeoutMs?: number;
  provider: string;
}

/**
 * fetch wrapper with timeout and normalised provider errors.
 * 408/409/425/429/5xx are retryable; other 4xx are permanent (bad request, policy).
 */
export async function fetchWithTimeout(url: string, opts: FetchJsonOptions): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), opts.timeoutMs ?? 60_000);
  try {
    return await fetch(url, { ...opts, signal: controller.signal });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new ProviderError(opts.provider, `network error: ${message}`, undefined, true);
  } finally {
    clearTimeout(timer);
  }
}

export function isRetryableStatus(status: number): boolean {
  return status === 408 || status === 409 || status === 425 || status === 429 || status >= 500;
}

export async function fetchJson<T>(url: string, opts: FetchJsonOptions): Promise<T> {
  const res = await fetchWithTimeout(url, opts);
  const text = await res.text();
  if (!res.ok) {
    throw new ProviderError(opts.provider, `HTTP ${res.status}: ${text.slice(0, 500)}`, res.status, isRetryableStatus(res.status));
  }
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new ProviderError(opts.provider, `invalid JSON response: ${text.slice(0, 200)}`, res.status, true);
  }
}

export async function downloadBuffer(url: string, provider: string, timeoutMs = 120_000): Promise<Buffer> {
  for (let attempt = 1; ; attempt++) {
    const res = await fetchWithTimeout(url, { provider, timeoutMs });
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    if (attempt >= 3 || !isRetryableStatus(res.status)) {
      throw new ProviderError(provider, `download failed: HTTP ${res.status}`, res.status, isRetryableStatus(res.status));
    }
    await sleep(500 * attempt);
  }
}
