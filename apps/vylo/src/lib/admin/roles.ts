/**
 * Team roles — mirrors apps/vylo-api/src/roles.ts (the server is the authority; the UI only uses
 * this to hide what a member can't do).
 */
export const ROLES = ['owner', 'admin', 'editor', 'moderator'] as const;
export type Role = (typeof ROLES)[number];

const RANK: Record<Role, number> = { owner: 4, admin: 3, editor: 2, moderator: 1 };

export type Action = 'content.write' | 'moderate' | 'settings.write' | 'users.read' | 'audit.read' | 'audit.revert' | 'owner.transfer' | 'upload';

const MIN: Record<Action, Role> = {
  'content.write': 'editor',
  upload: 'editor',
  moderate: 'moderator',
  'settings.write': 'admin',
  'users.read': 'admin',
  'audit.read': 'admin',
  'audit.revert': 'admin',
  'owner.transfer': 'owner',
};

export const can = (role: Role | undefined, action: Action) => !!role && RANK[role] >= RANK[MIN[action]];
export const canManage = (actor: Role, target: Role) => target !== 'owner' && (actor === 'owner' || (actor === 'admin' && RANK[target] < RANK.admin));
export const ROLE_COLOR: Record<Role, string> = { owner: '#b45309', admin: '#4f46e5', editor: '#0f766e', moderator: '#be185d' };
