import { DatabaseSync } from 'node:sqlite';

export type Db = DatabaseSync;

export function openDb(file: string): Db {
  const db = new DatabaseSync(file);
  db.exec(`
    PRAGMA journal_mode = WAL;
    PRAGMA foreign_keys = ON;
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE COLLATE NOCASE,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      pass_hash TEXT NOT NULL,
      token_version INTEGER NOT NULL DEFAULT 0,
      disabled INTEGER NOT NULL DEFAULT 0,
      must_change_password INTEGER NOT NULL DEFAULT 0,
      created_at INTEGER NOT NULL,
      last_login_at INTEGER
    );
    CREATE TABLE IF NOT EXISTS content (
      id INTEGER PRIMARY KEY CHECK (id = 1),
      revision INTEGER NOT NULL,
      overrides TEXT NOT NULL,
      updated_at INTEGER NOT NULL,
      updated_by TEXT
    );
    INSERT OR IGNORE INTO content (id, revision, overrides, updated_at) VALUES (1, 0, '{"destinations":{},"places":{},"countries":{},"settings":{}}', 0);
    CREATE TABLE IF NOT EXISTS audit (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      at INTEGER NOT NULL,
      user_id TEXT,
      user_name TEXT,
      action TEXT NOT NULL,
      kind TEXT,
      entity_id TEXT,
      before TEXT,
      after TEXT
    );
    CREATE INDEX IF NOT EXISTS audit_at ON audit (at DESC);
    CREATE TABLE IF NOT EXISTS uploads (
      file TEXT PRIMARY KEY,
      mime TEXT NOT NULL,
      size INTEGER NOT NULL,
      user_id TEXT,
      at INTEGER NOT NULL
    );
  `);
  return db;
}
