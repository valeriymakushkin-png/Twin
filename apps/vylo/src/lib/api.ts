/**
 * Optional Vylo API (apps/vylo-api). Without it the app is fully static and admin edits stay on the
 * device that made them; with it every traveller receives the published catalogue edits.
 */
export const API_URL = (process.env.NEXT_PUBLIC_VYLO_API ?? '').replace(/\/$/, '');
export const hasApi = () => API_URL.length > 0;

export class ApiError extends Error {
  constructor(
    public status: number,
    public code: string,
  ) {
    super(code);
  }
}

export async function api<T>(path: string, init: RequestInit & { token?: string | null } = {}): Promise<T> {
  const { token, headers, ...rest } = init;
  const res = await fetch(`${API_URL}${path}`, {
    ...rest,
    headers: {
      ...(rest.body && !(rest.body instanceof Blob) ? { 'content-type': 'application/json' } : {}),
      ...(token ? { authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });
  const data = res.headers.get('content-type')?.includes('json') ? await res.json() : null;
  if (!res.ok) throw new ApiError(res.status, (data as { error?: string } | null)?.error ?? `http_${res.status}`);
  return data as T;
}
