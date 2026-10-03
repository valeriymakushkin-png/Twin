'use client';

import type {
  AbuseEventDto,
  AdminOverviewDto,
  AdminUserRowDto,
  TelegramLoginWidgetInput,
  TimePoint,
} from '@mascot/shared';

export const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000').replace(/\/$/, '');
const TOKEN_KEY = 'mascot.admin.token';

export class AdminApiError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(TOKEN_KEY);
    if (!raw) return null;
    const { token, exp } = JSON.parse(raw) as { token: string; exp: number };
    return exp > Date.now() ? token : null;
  } catch {
    return null;
  }
}

export function setToken(token: string, expiresIn: number): void {
  localStorage.setItem(TOKEN_KEY, JSON.stringify({ token, exp: Date.now() + expiresIn * 1000 }));
}

export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

async function request<T>(method: string, path: string, body?: unknown): Promise<T> {
  const token = getToken();
  const res = await fetch(`${API_URL}/v1${path}`, {
    method,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) {
    if (res.status === 401 || res.status === 403) {
      clearToken();
      if (typeof window !== 'undefined' && !window.location.pathname.startsWith('/login')) window.location.href = '/login';
    }
    throw new AdminApiError(res.status, data?.message ?? res.statusText);
  }
  return data as T;
}

export interface UsersAnalytics {
  signups: TimePoint[];
  active: TimePoint[];
  newPremium: TimePoint[];
  sources: Array<{ source: string; count: number }>;
  retention: { d1: number; d7: number };
}

export interface RevenueAnalytics {
  daily: TimePoint[];
  refunds: TimePoint[];
  byProduct: Array<{ productId: string; stars: number; count: number }>;
  subscriptions: { active: number; canceling: number; mrrStars: number };
  estimatedUsd: number;
}

export interface GenerationsAnalytics {
  daily: Array<Record<string, string | number>>;
  latency: Array<{ type: string; p50Sec: number; p95Sec: number; count: number }>;
  failures: Array<{ code: string; count: number }>;
  byType: Array<{ type: string; status: string; count: number; costUsd: number }>;
  providers: Array<{ provider: string | null; status: string; count: number }>;
}

export interface AbuseSummary {
  byType: Array<{ type: string; severity: string; count: number }>;
  riskiestUsers: Array<{ id: string; username: string | null; riskScore: number; isBanned: boolean }>;
  highVelocityUsers: Array<{ userId: string; generations24h: number }>;
}

export interface AdminStyle {
  id: string;
  slug: string;
  isActive: boolean;
  isPremium: boolean;
  renders: number;
  recipe: { name: string; tagline: string; sortOrder: number; gradient: [string, string]; look: string };
  promptOverrides: Record<string, string> | null;
}

export interface AdminPayment {
  id: string;
  userId: string | null;
  username: string | null;
  telegramId: string | null;
  productId: string;
  amount: number;
  status: string;
  isRecurring: boolean;
  paidAt: string | null;
  refundedAt: string | null;
  createdAt: string;
}

export const adminApi = {
  login: (data: TelegramLoginWidgetInput) =>
    request<{ accessToken: string; expiresIn: number; admin: { id: string; role: string; firstName: string | null } }>('POST', '/auth/admin/telegram-login', data),
  devLogin: () => request<{ accessToken: string; expiresIn: number }>('POST', '/auth/dev', { telegramId: 900000001, username: 'ops', admin: true }),
  me: () => request<{ id: string; username: string | null; firstName: string | null; role: string; photoUrl: string | null }>('GET', '/admin/me'),
  overview: (days: number) => request<AdminOverviewDto>('GET', `/admin/analytics/overview?days=${days}`),
  usersAnalytics: (days: number) => request<UsersAnalytics>('GET', `/admin/analytics/users?days=${days}`),
  revenue: (days: number) => request<RevenueAnalytics>('GET', `/admin/analytics/revenue?days=${days}`),
  generations: (days: number) => request<GenerationsAnalytics>('GET', `/admin/analytics/generations?days=${days}`),
  users: (params: { q?: string; plan?: string; banned?: boolean; sort?: string; cursor?: string }) => {
    const qs = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => v !== undefined && v !== '' && qs.set(k, String(v)));
    return request<{ items: AdminUserRowDto[]; nextCursor: string | null }>('GET', `/admin/users?${qs}`);
  },
  user: (id: string) => request<Record<string, any>>('GET', `/admin/users/${id}`),
  ban: (id: string, reason: string) => request('POST', `/admin/users/${id}/ban`, { reason }),
  unban: (id: string) => request('POST', `/admin/users/${id}/unban`),
  grantPremium: (id: string, days: number) => request('POST', `/admin/users/${id}/grant-premium`, { days }),
  grantCredits: (id: string, amount: number) => request('POST', `/admin/users/${id}/grant-credits`, { amount }),
  abuse: (status: string, severity?: string) => request<AbuseEventDto[]>('GET', `/admin/abuse?status=${status}${severity ? `&severity=${severity}` : ''}`),
  abuseSummary: (days: number) => request<AbuseSummary>('GET', `/admin/abuse/summary?days=${days}`),
  resolveAbuse: (id: string, action: 'resolve' | 'dismiss') => request('POST', `/admin/abuse/${id}/resolve`, { action }),
  styles: () => request<AdminStyle[]>('GET', '/admin/styles'),
  updateStyle: (id: string, data: Partial<{ isActive: boolean; isPremium: boolean; sortOrder: number; promptOverrides: Record<string, string> | null }>) =>
    request('PATCH', `/admin/styles/${id}`, data),
  payments: (status?: string) => request<AdminPayment[]>('GET', `/admin/payments${status ? `?status=${status}` : ''}`),
  refund: (id: string) => request('POST', `/admin/payments/${id}/refund`),
  queues: () => request<Array<{ name: string; paused: boolean; counts: Record<string, number> }>>('GET', '/admin/queues'),
  retryFailed: (name: string) => request('POST', `/admin/queues/${name}/retry-failed`),
};
