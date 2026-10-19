/** Team roles, from most to least powerful. */
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

export const isRole = (r: unknown): r is Role => typeof r === 'string' && (ROLES as readonly string[]).includes(r);
export const can = (role: Role, action: Action) => RANK[role] >= RANK[MIN[action]];

/** The owner manages admins; admins manage editors and moderators; nobody hands out "owner" except by transfer. */
export const canManage = (actor: Role, target: Role) => target !== 'owner' && (actor === 'owner' || (actor === 'admin' && RANK[target] < RANK.admin));
