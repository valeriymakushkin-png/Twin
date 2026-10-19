import { createHash, randomUUID } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { extname, join } from 'node:path';
import { hashPassword, readToken, signToken, tempPassword, verifyPassword } from './auth.ts';
import { openDb } from './db.ts';
import { can, canManage, isRole, type Action, type Role } from './roles.ts';

export interface Config {
  /** SQLite file, or ':memory:' in tests */
  dbFile: string;
  uploadDir: string;
  /** HMAC secret for session tokens (≥ 32 chars in production) */
  secret: string;
  /** Required to create the first (owner) account; leave empty only for local development */
  setupToken: string;
  /** Comma-separated origins allowed to call the admin endpoints; "*" allows any */
  allowedOrigins: string[];
  /** Public base URL used in upload links, e.g. https://api.vylo.app */
  publicUrl?: string;
}

const KINDS = ['destinations', 'places', 'countries'] as const;
type Kind = (typeof KINDS)[number];
type Overrides = Record<Kind, Record<string, unknown>> & { settings: Record<string, unknown> };

const ID = /^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$/;
const TOKEN_TTL = 30 * 24 * 3600 * 1000;
const MAX_JSON = 512 * 1024;
const MAX_UPLOAD = 8 * 1024 * 1024;
const IMAGE_TYPES: Record<string, string> = { 'image/jpeg': '.jpg', 'image/png': '.png', 'image/webp': '.webp', 'image/avif': '.avif' };

class HttpError extends Error {
  status: number;
  code: string;
  constructor(status: number, code: string) {
    super(code);
    this.status = status;
    this.code = code;
  }
}

interface UserRow {
  id: string;
  email: string;
  name: string;
  role: Role;
  pass_hash: string;
  token_version: number;
  disabled: number;
  must_change_password: number;
  created_at: number;
  last_login_at: number | null;
}

const publicUser = (u: UserRow) => ({
  id: u.id,
  email: u.email,
  name: u.name,
  role: u.role,
  disabled: !!u.disabled,
  mustChangePassword: !!u.must_change_password,
  createdAt: u.created_at,
  lastLoginAt: u.last_login_at,
});

export function createApp(config: Config) {
  const db = openDb(config.dbFile);
  mkdirSync(config.uploadDir, { recursive: true });
  const attempts = new Map<string, number[]>();

  const userById = (id: string) => db.prepare('SELECT * FROM users WHERE id = ?').get(id) as UserRow | undefined;
  const userCount = () => (db.prepare('SELECT COUNT(*) AS n FROM users').get() as { n: number }).n;
  const readContent = () => {
    const row = db.prepare('SELECT revision, overrides, updated_at FROM content WHERE id = 1').get() as { revision: number; overrides: string; updated_at: number };
    return { revision: row.revision, overrides: JSON.parse(row.overrides) as Overrides, updatedAt: row.updated_at };
  };
  const writeContent = (o: Overrides, by: UserRow) =>
    db.prepare('UPDATE content SET revision = revision + 1, overrides = ?, updated_at = ?, updated_by = ? WHERE id = 1').run(JSON.stringify(o), Date.now(), by.id);
  const audit = (by: UserRow | null, action: string, kind: string | null, entityId: string | null, before: unknown, after: unknown) =>
    db
      .prepare('INSERT INTO audit (at, user_id, user_name, action, kind, entity_id, before, after) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
      .run(Date.now(), by?.id ?? null, by?.name ?? null, action, kind, entityId, before === undefined ? null : JSON.stringify(before), after === undefined ? null : JSON.stringify(after));

  const issue = (u: UserRow) => signToken({ sub: u.id, ver: u.token_version, exp: Date.now() + TOKEN_TTL }, config.secret);

  function authenticate(req: IncomingMessage): UserRow {
    const header = req.headers.authorization ?? '';
    const p = header.startsWith('Bearer ') ? readToken(header.slice(7), config.secret) : null;
    const u = p ? userById(p.sub) : undefined;
    if (!p || !u || u.disabled || u.token_version !== p.ver) throw new HttpError(401, 'unauthorized');
    return u;
  }
  const require = (req: IncomingMessage, action?: Action) => {
    const u = authenticate(req);
    if (action && !can(u.role, action)) throw new HttpError(403, 'forbidden');
    return u;
  };

  function throttle(ip: string) {
    const now = Date.now();
    const recent = (attempts.get(ip) ?? []).filter((t) => now - t < 60_000);
    if (recent.length >= 10) throw new HttpError(429, 'too_many_attempts');
    recent.push(now);
    attempts.set(ip, recent);
  }

  const password = (v: unknown) => {
    if (typeof v !== 'string' || v.length < 8 || v.length > 200) throw new HttpError(400, 'weak_password');
    return v;
  };
  const email = (v: unknown) => {
    if (typeof v !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || v.length > 200) throw new HttpError(400, 'invalid_email');
    return v.trim().toLowerCase();
  };
  const name = (v: unknown) => {
    if (typeof v !== 'string' || !v.trim() || v.length > 80) throw new HttpError(400, 'invalid_name');
    return v.trim();
  };

  type Handler = (ctx: { req: IncomingMessage; body: () => Promise<unknown>; raw: () => Promise<Buffer>; params: string[]; query: URLSearchParams }) => unknown | Promise<unknown>;
  const routes: { method: string; pattern: RegExp; handler: Handler }[] = [];
  const route = (method: string, path: string, handler: Handler) =>
    routes.push({ method, pattern: new RegExp(`^${path.replace(/:[a-z]+/g, '([^/]+)')}$`), handler });

  route('GET', '/health', () => ({ ok: true, users: userCount() > 0 }));

  // --- Accounts -------------------------------------------------------------------------------
  route('POST', '/auth/setup', async ({ body }) => {
    const b = (await body()) as Record<string, unknown>;
    if (userCount() > 0) throw new HttpError(409, 'already_set_up');
    if (config.setupToken && b.setupToken !== config.setupToken) throw new HttpError(403, 'invalid_setup_token');
    const u: UserRow = { id: randomUUID(), email: email(b.email), name: name(b.name), role: 'owner', pass_hash: hashPassword(password(b.password)), token_version: 0, disabled: 0, must_change_password: 0, created_at: Date.now(), last_login_at: Date.now() };
    db.prepare('INSERT INTO users (id, email, name, role, pass_hash, created_at, last_login_at) VALUES (?, ?, ?, ?, ?, ?, ?)').run(u.id, u.email, u.name, u.role, u.pass_hash, u.created_at, u.last_login_at);
    audit(u, 'owner.setup', 'users', u.id, undefined, publicUser(u));
    return { token: issue(u), user: publicUser(u) };
  });

  route('POST', '/auth/login', async ({ req, body }) => {
    throttle(req.socket.remoteAddress ?? '?');
    const b = (await body()) as Record<string, unknown>;
    const u = db.prepare('SELECT * FROM users WHERE email = ?').get(typeof b.email === 'string' ? b.email.trim() : '') as UserRow | undefined;
    if (!u || u.disabled || typeof b.password !== 'string' || !verifyPassword(b.password, u.pass_hash)) throw new HttpError(401, 'invalid_credentials');
    db.prepare('UPDATE users SET last_login_at = ? WHERE id = ?').run(Date.now(), u.id);
    return { token: issue(u), user: publicUser(u) };
  });

  route('GET', '/auth/me', ({ req }) => ({ user: publicUser(require(req)) }));

  route('POST', '/auth/password', async ({ req, body }) => {
    const u = require(req);
    const b = (await body()) as Record<string, unknown>;
    if (typeof b.current !== 'string' || !verifyPassword(b.current, u.pass_hash)) throw new HttpError(401, 'invalid_credentials');
    db.prepare('UPDATE users SET pass_hash = ?, token_version = token_version + 1, must_change_password = 0 WHERE id = ?').run(hashPassword(password(b.next)), u.id);
    const fresh = userById(u.id)!;
    return { token: issue(fresh), user: publicUser(fresh) };
  });

  /** Sign out of every device. */
  route('POST', '/auth/logout-all', ({ req }) => {
    const u = require(req);
    db.prepare('UPDATE users SET token_version = token_version + 1 WHERE id = ?').run(u.id);
    return { ok: true };
  });

  // --- Team -----------------------------------------------------------------------------------
  route('GET', '/users', ({ req }) => {
    require(req, 'users.read');
    return { users: (db.prepare('SELECT * FROM users ORDER BY created_at').all() as unknown as UserRow[]).map(publicUser) };
  });

  route('POST', '/users', async ({ req, body }) => {
    const actor = require(req, 'users.read');
    const b = (await body()) as Record<string, unknown>;
    if (!isRole(b.role) || !canManage(actor.role, b.role)) throw new HttpError(403, 'forbidden');
    const mail = email(b.email);
    if (db.prepare('SELECT 1 FROM users WHERE email = ?').get(mail)) throw new HttpError(409, 'email_taken');
    const temp = tempPassword();
    const u: UserRow = { id: randomUUID(), email: mail, name: name(b.name), role: b.role, pass_hash: hashPassword(temp), token_version: 0, disabled: 0, must_change_password: 1, created_at: Date.now(), last_login_at: null };
    db.prepare('INSERT INTO users (id, email, name, role, pass_hash, must_change_password, created_at) VALUES (?, ?, ?, ?, ?, 1, ?)').run(u.id, u.email, u.name, u.role, u.pass_hash, u.created_at);
    audit(actor, 'user.create', 'users', u.id, undefined, publicUser(u));
    return { user: publicUser(u), tempPassword: temp };
  });

  route('PATCH', '/users/:id', async ({ req, body, params }) => {
    const actor = require(req, 'users.read');
    const target = userById(params[0]!);
    if (!target) throw new HttpError(404, 'not_found');
    if (target.id === actor.id || !canManage(actor.role, target.role)) throw new HttpError(403, 'forbidden');
    const b = (await body()) as Record<string, unknown>;
    const role = b.role === undefined ? target.role : b.role;
    if (!isRole(role) || !canManage(actor.role, role)) throw new HttpError(403, 'forbidden');
    const nextName = b.name === undefined ? target.name : name(b.name);
    const disabled = b.disabled === undefined ? target.disabled : b.disabled ? 1 : 0;
    db.prepare('UPDATE users SET role = ?, name = ?, disabled = ?, token_version = token_version + ? WHERE id = ?').run(role, nextName, disabled, role !== target.role || disabled !== target.disabled ? 1 : 0, target.id);
    const after = userById(target.id)!;
    audit(actor, 'user.update', 'users', target.id, publicUser(target), publicUser(after));
    return { user: publicUser(after) };
  });

  route('POST', '/users/:id/reset-password', ({ req, params }) => {
    const actor = require(req, 'users.read');
    const target = userById(params[0]!);
    if (!target) throw new HttpError(404, 'not_found');
    if (!canManage(actor.role, target.role)) throw new HttpError(403, 'forbidden');
    const temp = tempPassword();
    db.prepare('UPDATE users SET pass_hash = ?, must_change_password = 1, token_version = token_version + 1 WHERE id = ?').run(hashPassword(temp), target.id);
    audit(actor, 'user.reset_password', 'users', target.id, undefined, undefined);
    return { tempPassword: temp };
  });

  route('DELETE', '/users/:id', ({ req, params }) => {
    const actor = require(req, 'users.read');
    const target = userById(params[0]!);
    if (!target) throw new HttpError(404, 'not_found');
    if (target.id === actor.id || !canManage(actor.role, target.role)) throw new HttpError(403, 'forbidden');
    db.prepare('DELETE FROM users WHERE id = ?').run(target.id);
    audit(actor, 'user.delete', 'users', target.id, publicUser(target), undefined);
    return { ok: true };
  });

  /** The owner hands the keys to another member and becomes an admin. */
  route('POST', '/owner/transfer', async ({ req, body }) => {
    const actor = require(req, 'owner.transfer');
    const b = (await body()) as Record<string, unknown>;
    if (typeof b.password !== 'string' || !verifyPassword(b.password, actor.pass_hash)) throw new HttpError(401, 'invalid_credentials');
    const target = typeof b.userId === 'string' ? userById(b.userId) : undefined;
    if (!target || target.id === actor.id || target.disabled) throw new HttpError(400, 'invalid_target');
    db.exec('BEGIN');
    db.prepare("UPDATE users SET role = 'owner', token_version = token_version + 1 WHERE id = ?").run(target.id);
    db.prepare("UPDATE users SET role = 'admin', token_version = token_version + 1 WHERE id = ?").run(actor.id);
    db.exec('COMMIT');
    audit(actor, 'owner.transfer', 'users', target.id, { owner: actor.id }, { owner: target.id });
    return { ok: true };
  });

  // --- Catalogue ------------------------------------------------------------------------------
  route('GET', '/content', () => readContent());

  route('PUT', '/content/:kind/:id', async ({ req, body, params }) => {
    const u = require(req, 'content.write');
    const [kind, id] = params as [string, string];
    if (!(KINDS as readonly string[]).includes(kind) || !ID.test(id)) throw new HttpError(400, 'invalid_entity');
    const patch = await body();
    if (!patch || typeof patch !== 'object' || Array.isArray(patch)) throw new HttpError(400, 'invalid_patch');
    const c = readContent();
    const before = c.overrides[kind as Kind][id];
    c.overrides[kind as Kind][id] = { ...(patch as object), updatedAt: Date.now(), updatedBy: u.name };
    writeContent(c.overrides, u);
    audit(u, 'content.save', kind, id, before, c.overrides[kind as Kind][id]);
    return readContent();
  });

  route('DELETE', '/content/:kind/:id', ({ req, params }) => {
    const u = require(req, 'content.write');
    const [kind, id] = params as [string, string];
    if (!(KINDS as readonly string[]).includes(kind)) throw new HttpError(400, 'invalid_entity');
    const c = readContent();
    const before = c.overrides[kind as Kind][id];
    if (before === undefined) return c;
    delete c.overrides[kind as Kind][id];
    writeContent(c.overrides, u);
    audit(u, 'content.revert', kind, id, before, undefined);
    return readContent();
  });

  route('PUT', '/content/settings', async ({ req, body }) => {
    const u = require(req);
    const next = (await body()) as Record<string, unknown>;
    if (!next || typeof next !== 'object') throw new HttpError(400, 'invalid_patch');
    const c = readContent();
    const before = c.overrides.settings ?? {};
    // Moderators may only hide or show reviews and meetups; everything else needs an admin.
    const changed = Object.keys({ ...before, ...next }).filter((k) => JSON.stringify(before[k]) !== JSON.stringify(next[k]));
    const moderationOnly = changed.every((k) => k === 'hiddenReviews' || k === 'hiddenMeetups');
    if (!can(u.role, moderationOnly ? 'moderate' : 'settings.write')) throw new HttpError(403, 'forbidden');
    c.overrides.settings = next;
    writeContent(c.overrides, u);
    audit(u, moderationOnly ? 'moderation' : 'settings.save', 'settings', null, before, next);
    return readContent();
  });

  /** Replace the whole catalogue patch set (import from a file). */
  route('PUT', '/content', async ({ req, body }) => {
    const u = require(req, 'settings.write');
    const o = (await body()) as Overrides;
    if (!o || typeof o !== 'object' || KINDS.some((k) => typeof o[k] !== 'object')) throw new HttpError(400, 'invalid_patch');
    const before = readContent().overrides;
    writeContent({ destinations: o.destinations, places: o.places, countries: o.countries, settings: o.settings ?? {} }, u);
    audit(u, 'content.import', null, null, { size: JSON.stringify(before).length }, { size: JSON.stringify(o).length });
    return readContent();
  });

  // --- Audit log ------------------------------------------------------------------------------
  route('GET', '/audit', ({ req, query }) => {
    require(req, 'audit.read');
    const limit = Math.min(200, Number(query.get('limit')) || 50);
    const before = Number(query.get('before')) || Number.MAX_SAFE_INTEGER;
    const rows = db.prepare('SELECT * FROM audit WHERE id < ? ORDER BY id DESC LIMIT ?').all(before, limit) as Record<string, unknown>[];
    return {
      entries: rows.map((r) => ({
        id: r.id,
        at: r.at,
        userId: r.user_id,
        userName: r.user_name,
        action: r.action,
        kind: r.kind,
        entityId: r.entity_id,
        before: r.before ? JSON.parse(String(r.before)) : undefined,
        after: r.after ? JSON.parse(String(r.after)) : undefined,
      })),
    };
  });

  /** Undo one catalogue change by restoring the entity as it was before it. */
  route('POST', '/audit/:id/revert', ({ req, params }) => {
    const u = require(req, 'audit.revert');
    const row = db.prepare('SELECT * FROM audit WHERE id = ?').get(Number(params[0])) as Record<string, unknown> | undefined;
    if (!row || !(KINDS as readonly string[]).includes(String(row.kind)) || !row.entity_id) throw new HttpError(400, 'not_revertible');
    const kind = row.kind as Kind;
    const id = String(row.entity_id);
    const c = readContent();
    const current = c.overrides[kind][id];
    if (row.before) c.overrides[kind][id] = JSON.parse(String(row.before));
    else delete c.overrides[kind][id];
    writeContent(c.overrides, u);
    audit(u, 'content.undo', kind, id, current, c.overrides[kind][id]);
    return readContent();
  });

  // --- Photos ---------------------------------------------------------------------------------
  route('POST', '/uploads', async ({ req, raw }) => {
    const u = require(req, 'upload');
    const type = (req.headers['content-type'] ?? '').split(';')[0]!.trim();
    const ext = IMAGE_TYPES[type];
    if (!ext) throw new HttpError(415, 'unsupported_type');
    const data = await raw();
    if (!data.length) throw new HttpError(400, 'empty');
    const file = `${createHash('sha256').update(data).digest('hex').slice(0, 24)}${ext}`;
    writeFileSync(join(config.uploadDir, file), data);
    db.prepare('INSERT OR REPLACE INTO uploads (file, mime, size, user_id, at) VALUES (?, ?, ?, ?, ?)').run(file, type, data.length, u.id, Date.now());
    const base = config.publicUrl ?? `http://${req.headers.host}`;
    return { url: `${base.replace(/\/$/, '')}/uploads/${file}` };
  });

  // --- HTTP plumbing --------------------------------------------------------------------------
  const readBody = (req: IncomingMessage, limit: number) =>
    new Promise<Buffer>((resolve, reject) => {
      const chunks: Buffer[] = [];
      let size = 0;
      req.on('data', (c: Buffer) => {
        size += c.length;
        if (size > limit) {
          reject(new HttpError(413, 'too_large'));
          req.destroy();
        } else chunks.push(c);
      });
      req.on('end', () => resolve(Buffer.concat(chunks)));
      req.on('error', reject);
    });

  function cors(req: IncomingMessage, res: ServerResponse) {
    const origin = req.headers.origin;
    if (!origin) return;
    if (config.allowedOrigins.includes('*') || config.allowedOrigins.includes(origin)) {
      res.setHeader('access-control-allow-origin', origin);
      res.setHeader('vary', 'origin');
      res.setHeader('access-control-allow-headers', 'authorization, content-type');
      res.setHeader('access-control-allow-methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
      res.setHeader('access-control-max-age', '600');
    } else if (req.method === 'GET' && req.url?.startsWith('/content')) {
      // The published catalogue is public: any copy of the app may read it.
      res.setHeader('access-control-allow-origin', '*');
    }
  }

  const send = (res: ServerResponse, status: number, data: unknown) => {
    res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' });
    res.end(JSON.stringify(data));
  };

  const server = createServer(async (req, res) => {
    cors(req, res);
    if (req.method === 'OPTIONS') return void res.writeHead(204).end();
    const url = new URL(req.url ?? '/', 'http://local');
    try {
      if (req.method === 'GET' && url.pathname.startsWith('/uploads/')) {
        const file = url.pathname.slice('/uploads/'.length);
        if (!/^[a-f0-9]{24}\.(jpg|png|webp|avif)$/.test(file)) throw new HttpError(404, 'not_found');
        const type = Object.entries(IMAGE_TYPES).find(([, e]) => e === extname(file))![0];
        const data = readFileSync(join(config.uploadDir, file));
        res.writeHead(200, { 'content-type': type, 'cache-control': 'public, max-age=31536000, immutable', 'access-control-allow-origin': '*' });
        return void res.end(data);
      }
      for (const r of routes) {
        if (r.method !== req.method) continue;
        const m = url.pathname.match(r.pattern);
        if (!m) continue;
        let cached: Buffer | undefined;
        const raw = async () => (cached ??= await readBody(req, r.method === 'POST' && url.pathname === '/uploads' ? MAX_UPLOAD : MAX_JSON));
        const body = async () => {
          const b = await raw();
          try {
            return b.length ? JSON.parse(b.toString('utf8')) : {};
          } catch {
            throw new HttpError(400, 'invalid_json');
          }
        };
        return send(res, 200, await r.handler({ req, body, raw, params: m.slice(1).map(decodeURIComponent), query: url.searchParams }));
      }
      throw new HttpError(404, 'not_found');
    } catch (e) {
      if (e instanceof HttpError) return send(res, e.status, { error: e.code });
      if ((e as NodeJS.ErrnoException).code === 'ENOENT') return send(res, 404, { error: 'not_found' });
      console.error(e);
      send(res, 500, { error: 'internal' });
    }
  });

  return { server, db };
}
