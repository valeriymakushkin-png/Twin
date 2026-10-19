import assert from 'node:assert/strict';
import { mkdtempSync } from 'node:fs';
import type { AddressInfo } from 'node:net';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, before, describe, it } from 'node:test';
import { createApp } from '../src/app.ts';

let base = '';
let close: () => void;

before(async () => {
  const { server } = createApp({
    dbFile: ':memory:',
    uploadDir: mkdtempSync(join(tmpdir(), 'vylo-uploads-')),
    secret: 'test-secret-0123456789abcdefghijklmnopqrstuvwxyz',
    setupToken: 'setup-123',
    allowedOrigins: ['http://app.test'],
  });
  await new Promise<void>((r) => server.listen(0, r));
  base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  close = () => server.close();
});
after(() => close());

async function call<T = Record<string, unknown>>(method: string, path: string, body?: unknown, token?: string, headers: Record<string, string> = {}) {
  const res = await fetch(base + path, {
    method,
    headers: { ...(body !== undefined && !(body instanceof Uint8Array) ? { 'content-type': 'application/json' } : {}), ...(token ? { authorization: `Bearer ${token}` } : {}), ...headers },
    body: body === undefined ? undefined : body instanceof Uint8Array ? body : JSON.stringify(body),
  });
  return { status: res.status, data: (await res.json()) as T };
}

describe('Vylo API', () => {
  let owner = '';
  let editorId = '';
  let editor = '';
  let moderator = '';

  it('needs the setup token for the first account', async () => {
    assert.equal((await call('POST', '/auth/setup', { email: 'boss@vylo.app', name: 'Boss', password: 'correct-horse', setupToken: 'nope' })).status, 403);
    const r = await call<{ token: string; user: { role: string } }>('POST', '/auth/setup', { email: 'boss@vylo.app', name: 'Boss', password: 'correct-horse', setupToken: 'setup-123' });
    assert.equal(r.status, 200);
    assert.equal(r.data.user.role, 'owner');
    owner = r.data.token;
    assert.equal((await call('POST', '/auth/setup', { email: 'x@vylo.app', name: 'X', password: 'correct-horse', setupToken: 'setup-123' })).status, 409);
  });

  it('rejects wrong passwords and accepts the right one', async () => {
    assert.equal((await call('POST', '/auth/login', { email: 'boss@vylo.app', password: 'wrong-password' })).status, 401);
    const r = await call<{ token: string }>('POST', '/auth/login', { email: 'BOSS@vylo.app', password: 'correct-horse' });
    assert.equal(r.status, 200);
    assert.equal((await call('GET', '/auth/me', undefined, r.data.token)).status, 200);
  });

  it('lets the owner invite a team with roles', async () => {
    const e = await call<{ user: { id: string }; tempPassword: string }>('POST', '/users', { email: 'ed@vylo.app', name: 'Ed', role: 'editor' }, owner);
    assert.equal(e.status, 200);
    editorId = e.data.user.id;
    editor = (await call<{ token: string }>('POST', '/auth/login', { email: 'ed@vylo.app', password: e.data.tempPassword })).data.token;
    const m = await call<{ tempPassword: string }>('POST', '/users', { email: 'mo@vylo.app', name: 'Mo', role: 'moderator' }, owner);
    moderator = (await call<{ token: string }>('POST', '/auth/login', { email: 'mo@vylo.app', password: m.data.tempPassword })).data.token;
    assert.equal((await call('POST', '/users', { email: 'o2@vylo.app', name: 'O2', role: 'owner' }, owner)).status, 403);
    assert.equal((await call('POST', '/users', { email: 'a2@vylo.app', name: 'A2', role: 'admin' }, editor)).status, 403);
    assert.equal((await call('GET', '/users', undefined, editor)).status, 403);
  });

  it('publishes catalogue edits that everyone can read', async () => {
    const r = await call<{ revision: number; overrides: { places: Record<string, { lat: number }> } }>('PUT', '/content/places/berlin-tv-tower', { lat: 52.5208, lng: 13.4094 }, editor);
    assert.equal(r.status, 200);
    const pub = await call<{ revision: number; overrides: { places: Record<string, { lat: number; updatedBy: string }> } }>('GET', '/content');
    assert.equal(pub.data.overrides.places['berlin-tv-tower']!.lat, 52.5208);
    assert.equal(pub.data.overrides.places['berlin-tv-tower']!.updatedBy, 'Ed');
    assert.equal((await call('PUT', '/content/places/x', { lat: 1 }, moderator)).status, 403);
    assert.equal((await call('PUT', '/content/places/x', { lat: 1 })).status, 401);
  });

  it('lets moderators hide reviews but not change settings', async () => {
    assert.equal((await call('PUT', '/content/settings', { hiddenReviews: ['r3'] }, moderator)).status, 200);
    assert.equal((await call('PUT', '/content/settings', { hiddenReviews: ['r3'], placeOfDay: 'bali' }, moderator)).status, 403);
    assert.equal((await call('PUT', '/content/settings', { hiddenReviews: ['r3'], placeOfDay: 'bali' }, owner)).status, 200);
  });

  it('keeps an audit log and can undo a change', async () => {
    const log = await call<{ entries: { id: number; action: string; entityId: string }[] }>('GET', '/audit', undefined, owner);
    const save = log.data.entries.find((e) => e.action === 'content.save' && e.entityId === 'berlin-tv-tower')!;
    assert.ok(save);
    await call('POST', `/audit/${save.id}/revert`, undefined, owner);
    const pub = await call<{ overrides: { places: Record<string, unknown> } }>('GET', '/content');
    assert.equal(pub.data.overrides.places['berlin-tv-tower'], undefined);
  });

  it('stores uploaded photos', async () => {
    const png = Uint8Array.from(Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64'));
    const r = await call<{ url: string }>('POST', '/uploads', png, editor, { 'content-type': 'image/png' });
    assert.equal(r.status, 200);
    const img = await fetch(r.data.url.replace(/^http:\/\/[^/]+/, base));
    assert.equal(img.headers.get('content-type'), 'image/png');
    assert.equal((await call('POST', '/uploads', png, editor, { 'content-type': 'text/html' })).status, 415);
  });

  it('revokes sessions when a role changes and transfers ownership', async () => {
    assert.equal((await call('PATCH', `/users/${editorId}`, { role: 'admin' }, owner)).status, 200);
    assert.equal((await call('GET', '/auth/me', undefined, editor)).status, 401);
    assert.equal((await call('POST', '/owner/transfer', { userId: editorId, password: 'wrong-password' }, owner)).status, 401);
    assert.equal((await call('POST', '/owner/transfer', { userId: editorId, password: 'correct-horse' }, owner)).status, 200);
    const me = await call<{ token: string; user: { role: string } }>('POST', '/auth/login', { email: 'boss@vylo.app', password: 'correct-horse' });
    assert.equal(me.data.user.role, 'admin');
  });
});
