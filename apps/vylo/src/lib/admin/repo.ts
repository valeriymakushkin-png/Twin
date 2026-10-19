'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { emptyOverrides, overrides as currentOverrides, type CatalogOverrides, type CatalogSettings } from '@/data/catalog';
import { api, hasApi } from '@/lib/api';
import { useCatalog } from '@/store/catalog';
import { can, canManage, type Role } from './roles';

/**
 * The admin console talks to a repository. With NEXT_PUBLIC_VYLO_API it is the Vylo API (accounts,
 * roles and published edits for every traveller). Without it, a local repository keeps the team and
 * the edits in this browser — handy for trying things out, and exportable as a file.
 */

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: Role;
  disabled: boolean;
  mustChangePassword: boolean;
  createdAt: number;
  lastLoginAt: number | null;
}

export interface AuditEntry {
  id: number;
  at: number;
  userId?: string | null;
  userName?: string | null;
  action: string;
  kind?: string | null;
  entityId?: string | null;
  before?: unknown;
  after?: unknown;
}

export type EntityKind = 'destinations' | 'places' | 'countries';
export interface Session {
  token: string;
  user: AdminUser;
}

export interface AdminRepo {
  mode: 'local' | 'remote';
  needsSetup(): Promise<boolean>;
  setup(i: { email: string; name: string; password: string; setupToken?: string }): Promise<Session>;
  login(email: string, password: string): Promise<Session>;
  me(token: string): Promise<AdminUser>;
  changePassword(token: string, current: string, next: string): Promise<Session>;
  saveEntity(token: string, kind: EntityKind, id: string, patch: Record<string, unknown>): Promise<void>;
  revertEntity(token: string, kind: EntityKind, id: string): Promise<void>;
  saveSettings(token: string, settings: CatalogSettings): Promise<void>;
  importAll(token: string, o: CatalogOverrides): Promise<void>;
  users(token: string): Promise<AdminUser[]>;
  createUser(token: string, u: { email: string; name: string; role: Role }): Promise<{ user: AdminUser; tempPassword: string }>;
  updateUser(token: string, id: string, patch: Partial<Pick<AdminUser, 'role' | 'name' | 'disabled'>>): Promise<void>;
  deleteUser(token: string, id: string): Promise<void>;
  resetPassword(token: string, id: string): Promise<string>;
  transferOwnership(token: string, userId: string, password: string): Promise<void>;
  audit(token: string): Promise<AuditEntry[]>;
  undo(token: string, id: number): Promise<void>;
  upload(token: string, file: Blob): Promise<string>;
}

export class AdminError extends Error {}

// ---------------------------------------------------------------------------------------------
// Remote: the Vylo API

const applyRemote = (r: { revision: number; overrides: CatalogOverrides }) => useCatalog.getState().setOverrides({ ...emptyOverrides(), ...r.overrides }, 'remote', r.revision);

const remote: AdminRepo = {
  mode: 'remote',
  needsSetup: async () => !(await api<{ users: boolean }>('/health')).users,
  setup: (i) => api<Session>('/auth/setup', { method: 'POST', body: JSON.stringify(i) }),
  login: (email, password) => api<Session>('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
  me: async (token) => (await api<{ user: AdminUser }>('/auth/me', { token })).user,
  changePassword: (token, current, next) => api<Session>('/auth/password', { method: 'POST', token, body: JSON.stringify({ current, next }) }),
  saveEntity: async (token, kind, id, patch) => applyRemote(await api(`/content/${kind}/${encodeURIComponent(id)}`, { method: 'PUT', token, body: JSON.stringify(patch) })),
  revertEntity: async (token, kind, id) => applyRemote(await api(`/content/${kind}/${encodeURIComponent(id)}`, { method: 'DELETE', token })),
  saveSettings: async (token, settings) => applyRemote(await api('/content/settings', { method: 'PUT', token, body: JSON.stringify(settings) })),
  importAll: async (token, o) => applyRemote(await api('/content', { method: 'PUT', token, body: JSON.stringify(o) })),
  users: async (token) => (await api<{ users: AdminUser[] }>('/users', { token })).users,
  createUser: (token, u) => api('/users', { method: 'POST', token, body: JSON.stringify(u) }),
  updateUser: async (token, id, patch) => void (await api(`/users/${id}`, { method: 'PATCH', token, body: JSON.stringify(patch) })),
  deleteUser: async (token, id) => void (await api(`/users/${id}`, { method: 'DELETE', token })),
  resetPassword: async (token, id) => (await api<{ tempPassword: string }>(`/users/${id}/reset-password`, { method: 'POST', token })).tempPassword,
  transferOwnership: async (token, userId, password) => void (await api('/owner/transfer', { method: 'POST', token, body: JSON.stringify({ userId, password }) })),
  audit: async (token) => (await api<{ entries: AuditEntry[] }>('/audit?limit=200', { token })).entries,
  undo: async (token, id) => applyRemote(await api(`/audit/${id}/revert`, { method: 'POST', token })),
  upload: async (token, file) => (await api<{ url: string }>('/uploads', { method: 'POST', token, body: file, headers: { 'content-type': file.type } })).url,
};

// ---------------------------------------------------------------------------------------------
// Local: this browser only

interface LocalUser extends AdminUser {
  passHash: string;
  salt: string;
  tokenVersion: number;
}
interface LocalDb {
  users: LocalUser[];
  audit: AuditEntry[];
  nextId: number;
}
const DB_KEY = 'vylo-admin-v1';

const loadDb = (): LocalDb => {
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (raw) return JSON.parse(raw) as LocalDb;
  } catch {
    /* storage unavailable */
  }
  return { users: [], audit: [], nextId: 1 };
};
const saveDb = (db: LocalDb) => localStorage.setItem(DB_KEY, JSON.stringify(db));

const hex = (b: ArrayBuffer) => Array.from(new Uint8Array(b), (x) => x.toString(16).padStart(2, '0')).join('');
async function derive(password: string, salt: string) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
  return hex(await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: new TextEncoder().encode(salt), iterations: 120_000 }, key, 256));
}
const randomId = () => hex(crypto.getRandomValues(new Uint8Array(12)).buffer);
const tempPassword = () => btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(9)))).replace(/[+/=]/g, '').slice(0, 12);
const strip = ({ passHash: _p, salt: _s, tokenVersion: _t, ...u }: LocalUser): AdminUser => u;

function check(password: string) {
  if (password.length < 8) throw new AdminError('weak_password');
}

function sessionOf(db: LocalDb, token: string) {
  const [id, ver] = token.split('.');
  const u = db.users.find((x) => x.id === id);
  if (!u || u.disabled || String(u.tokenVersion) !== ver) throw new AdminError('unauthorized');
  return u;
}
function requireRole(u: LocalUser, action: Parameters<typeof can>[1]) {
  if (!can(u.role, action)) throw new AdminError('forbidden');
}
function log(db: LocalDb, u: LocalUser | null, action: string, kind: string | null, entityId: string | null, before: unknown, after: unknown) {
  db.audit.unshift({ id: db.nextId++, at: Date.now(), userId: u?.id, userName: u?.name, action, kind, entityId, before, after });
  db.audit = db.audit.slice(0, 500);
}

function setLocalOverrides(mut: (o: CatalogOverrides) => void) {
  const next = structuredClone(currentOverrides());
  mut(next);
  useCatalog.getState().setOverrides(next, 'local');
}

/** Downscale a photo in the browser so it fits in local storage. */
async function toDataUrl(file: Blob) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 1280 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext('2d')!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/webp', 0.8);
}

const local: AdminRepo = {
  mode: 'local',
  needsSetup: async () => loadDb().users.length === 0,
  setup: async ({ email, name, password }) => {
    const db = loadDb();
    if (db.users.length) throw new AdminError('already_set_up');
    check(password);
    const salt = randomId();
    const u: LocalUser = { id: randomId(), email: email.trim().toLowerCase(), name: name.trim(), role: 'owner', disabled: false, mustChangePassword: false, createdAt: Date.now(), lastLoginAt: Date.now(), salt, passHash: await derive(password, salt), tokenVersion: 0 };
    db.users.push(u);
    log(db, u, 'owner.setup', 'users', u.id, undefined, strip(u));
    saveDb(db);
    return { token: `${u.id}.0`, user: strip(u) };
  },
  login: async (email, password) => {
    const db = loadDb();
    const u = db.users.find((x) => x.email === email.trim().toLowerCase());
    if (!u || u.disabled || (await derive(password, u.salt)) !== u.passHash) throw new AdminError('invalid_credentials');
    u.lastLoginAt = Date.now();
    saveDb(db);
    return { token: `${u.id}.${u.tokenVersion}`, user: strip(u) };
  },
  me: async (token) => strip(sessionOf(loadDb(), token)),
  changePassword: async (token, current, next) => {
    const db = loadDb();
    const u = sessionOf(db, token);
    if ((await derive(current, u.salt)) !== u.passHash) throw new AdminError('invalid_credentials');
    check(next);
    u.salt = randomId();
    u.passHash = await derive(next, u.salt);
    u.tokenVersion++;
    u.mustChangePassword = false;
    saveDb(db);
    return { token: `${u.id}.${u.tokenVersion}`, user: strip(u) };
  },
  saveEntity: async (token, kind, id, patch) => {
    const db = loadDb();
    const u = sessionOf(db, token);
    requireRole(u, 'content.write');
    const before = currentOverrides()[kind][id];
    const after = { ...patch, updatedAt: Date.now(), updatedBy: u.name };
    setLocalOverrides((o) => void (o[kind][id] = after as never));
    log(db, u, 'content.save', kind, id, before, after);
    saveDb(db);
  },
  revertEntity: async (token, kind, id) => {
    const db = loadDb();
    const u = sessionOf(db, token);
    requireRole(u, 'content.write');
    const before = currentOverrides()[kind][id];
    setLocalOverrides((o) => void delete o[kind][id]);
    log(db, u, 'content.revert', kind, id, before, undefined);
    saveDb(db);
  },
  saveSettings: async (token, settings) => {
    const db = loadDb();
    const u = sessionOf(db, token);
    const before = currentOverrides().settings;
    const changed = Object.keys({ ...before, ...settings }).filter((k) => JSON.stringify(before[k as keyof CatalogSettings]) !== JSON.stringify(settings[k as keyof CatalogSettings]));
    const moderationOnly = changed.every((k) => k === 'hiddenReviews' || k === 'hiddenMeetups');
    requireRole(u, moderationOnly ? 'moderate' : 'settings.write');
    setLocalOverrides((o) => void (o.settings = settings));
    log(db, u, moderationOnly ? 'moderation' : 'settings.save', 'settings', null, before, settings);
    saveDb(db);
  },
  importAll: async (token, o) => {
    const db = loadDb();
    const u = sessionOf(db, token);
    requireRole(u, 'settings.write');
    useCatalog.getState().setOverrides({ ...emptyOverrides(), ...o }, 'local');
    log(db, u, 'content.import', null, null, undefined, undefined);
    saveDb(db);
  },
  users: async (token) => {
    const db = loadDb();
    requireRole(sessionOf(db, token), 'users.read');
    return db.users.map(strip);
  },
  createUser: async (token, { email, name, role }) => {
    const db = loadDb();
    const actor = sessionOf(db, token);
    if (!canManage(actor.role, role)) throw new AdminError('forbidden');
    const mail = email.trim().toLowerCase();
    if (db.users.some((x) => x.email === mail)) throw new AdminError('email_taken');
    const temp = tempPassword();
    const salt = randomId();
    const u: LocalUser = { id: randomId(), email: mail, name: name.trim(), role, disabled: false, mustChangePassword: true, createdAt: Date.now(), lastLoginAt: null, salt, passHash: await derive(temp, salt), tokenVersion: 0 };
    db.users.push(u);
    log(db, actor, 'user.create', 'users', u.id, undefined, strip(u));
    saveDb(db);
    return { user: strip(u), tempPassword: temp };
  },
  updateUser: async (token, id, patch) => {
    const db = loadDb();
    const actor = sessionOf(db, token);
    const u = db.users.find((x) => x.id === id);
    if (!u || u.id === actor.id || !canManage(actor.role, u.role) || (patch.role && !canManage(actor.role, patch.role))) throw new AdminError('forbidden');
    const before = strip(u);
    if (patch.role && patch.role !== u.role) u.tokenVersion++;
    if (patch.disabled !== undefined && patch.disabled !== u.disabled) u.tokenVersion++;
    Object.assign(u, patch);
    log(db, actor, 'user.update', 'users', u.id, before, strip(u));
    saveDb(db);
  },
  deleteUser: async (token, id) => {
    const db = loadDb();
    const actor = sessionOf(db, token);
    const u = db.users.find((x) => x.id === id);
    if (!u || u.id === actor.id || !canManage(actor.role, u.role)) throw new AdminError('forbidden');
    db.users = db.users.filter((x) => x.id !== id);
    log(db, actor, 'user.delete', 'users', id, strip(u), undefined);
    saveDb(db);
  },
  resetPassword: async (token, id) => {
    const db = loadDb();
    const actor = sessionOf(db, token);
    const u = db.users.find((x) => x.id === id);
    if (!u || !canManage(actor.role, u.role)) throw new AdminError('forbidden');
    const temp = tempPassword();
    u.salt = randomId();
    u.passHash = await derive(temp, u.salt);
    u.tokenVersion++;
    u.mustChangePassword = true;
    log(db, actor, 'user.reset_password', 'users', id, undefined, undefined);
    saveDb(db);
    return temp;
  },
  transferOwnership: async (token, userId, password) => {
    const db = loadDb();
    const actor = sessionOf(db, token);
    requireRole(actor, 'owner.transfer');
    if ((await derive(password, actor.salt)) !== actor.passHash) throw new AdminError('invalid_credentials');
    const target = db.users.find((x) => x.id === userId && !x.disabled && x.id !== actor.id);
    if (!target) throw new AdminError('invalid_target');
    target.role = 'owner';
    target.tokenVersion++;
    actor.role = 'admin';
    actor.tokenVersion++;
    log(db, actor, 'owner.transfer', 'users', target.id, { owner: actor.id }, { owner: target.id });
    saveDb(db);
  },
  audit: async (token) => {
    const db = loadDb();
    requireRole(sessionOf(db, token), 'audit.read');
    return db.audit;
  },
  undo: async (token, id) => {
    const db = loadDb();
    const u = sessionOf(db, token);
    requireRole(u, 'audit.revert');
    const e = db.audit.find((x) => x.id === id);
    const kind = e?.kind as EntityKind | undefined;
    if (!e || !kind || !['destinations', 'places', 'countries'].includes(kind) || !e.entityId) throw new AdminError('not_revertible');
    const current = currentOverrides()[kind][e.entityId];
    setLocalOverrides((o) => {
      if (e.before) o[kind][e.entityId!] = e.before as never;
      else delete o[kind][e.entityId!];
    });
    log(db, u, 'content.undo', kind, e.entityId, current, e.before);
    saveDb(db);
  },
  upload: async (token, file) => {
    requireRole(sessionOf(loadDb(), token), 'upload');
    return toDataUrl(file);
  },
};

export const adminRepo: AdminRepo = hasApi() ? remote : local;

// ---------------------------------------------------------------------------------------------
// Session

interface AdminState {
  token: string | null;
  user: AdminUser | null;
  setSession: (s: Session | null) => void;
  refresh: () => Promise<void>;
}

export const useAdmin = create<AdminState>()(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      setSession: (s) => set({ token: s?.token ?? null, user: s?.user ?? null }),
      refresh: async () => {
        const token = get().token;
        if (!token) return;
        try {
          set({ user: await adminRepo.me(token) });
        } catch {
          set({ token: null, user: null });
        }
      },
    }),
    { name: 'vylo-admin-session', storage: createJSONStorage(() => localStorage) },
  ),
);

/** Current member's token, or an error the UI turns into "please sign in again". */
export function token() {
  const t = useAdmin.getState().token;
  if (!t) throw new AdminError('unauthorized');
  return t;
}
