'use client';

import { Crown, KeyRound, Plus, Power, Trash2 } from 'lucide-react';
import { useCallback, useEffect, useState, type FormEvent } from 'react';
import { toast } from 'sonner';
import { CopyText } from '@/components/admin/fields';
import { AButton, Badge, Card, Modal, PageHeader, Select, TextInput, useAdminError, useConfirm } from '@/components/admin/ui';
import { useI18n } from '@/i18n/use';
import { adminRepo, token, useAdmin, type AdminUser } from '@/lib/admin/repo';
import { canManage, ROLE_COLOR, ROLES, type Role } from '@/lib/admin/roles';
import { cn } from '@/lib/utils';

export default function AdminTeam() {
  const { t, tk, f } = useI18n();
  const me = useAdmin((s) => s.user)!;
  const setSession = useAdmin((s) => s.setSession);
  const errorText = useAdminError();
  const confirm = useConfirm();
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [invite, setInvite] = useState(false);
  const [form, setForm] = useState<{ name: string; email: string; role: Role }>({ name: '', email: '', role: 'editor' });
  const [temp, setTemp] = useState<{ name: string; email: string; password: string } | null>(null);
  const [transfer, setTransfer] = useState<AdminUser | null>(null);
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const assignable = ROLES.filter((r) => canManage(me.role, r));

  const load = useCallback(() => adminRepo.users(token()).then(setUsers, (e) => toast.error(errorText(e))), [errorText]);
  useEffect(() => {
    void load();
  }, [load]);

  const run = async (fn: () => Promise<unknown>, done?: string) => {
    try {
      await fn();
      if (done) toast.success(done);
      await load();
    } catch (e) {
      toast.error(errorText(e));
    }
  };

  const submitInvite = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      const r = await adminRepo.createUser(token(), form);
      setInvite(false);
      setTemp({ name: r.user.name, email: r.user.email, password: r.tempPassword });
      setForm({ name: '', email: '', role: 'editor' });
      await load();
    } catch (err) {
      toast.error(errorText(err));
    } finally {
      setBusy(false);
    }
  };

  const submitTransfer = async (e: FormEvent) => {
    e.preventDefault();
    if (!transfer) return;
    setBusy(true);
    try {
      await adminRepo.transferOwnership(token(), transfer.id, password);
      toast.success(t('admin.team.transferDone'));
      setTransfer(null);
      // Roles changed, so this session is no longer valid: sign in again as an admin.
      setSession(null);
    } catch (err) {
      toast.error(errorText(err));
    } finally {
      setBusy(false);
      setPassword('');
    }
  };

  return (
    <>
      <PageHeader
        title={t('admin.nav.team')}
        subtitle={`${users.length}`}
        actions={
          assignable.length > 0 && (
            <AButton onClick={() => setInvite(true)}>
              <Plus className="size-4" /> {t('admin.team.invite')}
            </AButton>
          )
        }
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <Card>
          <ul>
            {users.map((u) => {
              const self = u.id === me.id;
              const manage = !self && canManage(me.role, u.role);
              return (
                <li key={u.id} className={cn('flex flex-wrap items-center gap-3 border-b border-[#e5e5ea] px-4 py-3 last:border-b-0', u.disabled && 'opacity-60')}>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full text-[15px] font-bold text-white" style={{ background: ROLE_COLOR[u.role] }}>
                    {u.name.slice(0, 1).toUpperCase()}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-1.5 truncate text-[14px] font-semibold">
                      {u.name} {self && <Badge color="#0071e3">{t('admin.team.you')}</Badge>} {u.disabled && <Badge>{t('admin.team.disabled')}</Badge>}
                    </p>
                    <p className="truncate text-[12px] text-[#86868b]">
                      {u.email} · {t('admin.team.lastLogin')}: {u.lastLoginAt ? f.agoMs(Date.now() - u.lastLoginAt) : t('admin.team.never')}
                    </p>
                  </div>
                  {manage ? (
                    <Select value={u.role} onChange={(role) => run(() => adminRepo.updateUser(token(), u.id, { role }), t('admin.common.saved'))} options={assignable.map((r) => ({ value: r, label: tk(`admin.roles.${r}`) }))} className="w-40" />
                  ) : (
                    <Badge color={ROLE_COLOR[u.role]}>
                      {u.role === 'owner' && <Crown className="mr-1 size-3" />}
                      {tk(`admin.roles.${u.role}`)}
                    </Badge>
                  )}
                  {manage && (
                    <div className="flex gap-1">
                      <button title={t('admin.team.resetPassword')} onClick={() => run(async () => setTemp({ name: u.name, email: u.email, password: await adminRepo.resetPassword(token(), u.id) }))} className="grid size-8 place-items-center rounded-full text-[#6e6e73] hover:bg-[#f5f5f7]">
                        <KeyRound className="size-4" />
                      </button>
                      <button title={u.disabled ? t('admin.team.enable') : t('admin.team.disable')} onClick={() => run(() => adminRepo.updateUser(token(), u.id, { disabled: !u.disabled }), t('admin.common.saved'))} className="grid size-8 place-items-center rounded-full text-[#6e6e73] hover:bg-[#f5f5f7]">
                        <Power className="size-4" />
                      </button>
                      <button
                        title={t('admin.team.remove')}
                        onClick={async () => (await confirm({ title: t('admin.team.remove'), text: u.email, danger: true, confirm: t('admin.common.delete') })) && run(() => adminRepo.deleteUser(token(), u.id))}
                        className="grid size-8 place-items-center rounded-full text-[#ff3b30] hover:bg-[#ff3b30]/10"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  )}
                  {me.role === 'owner' && !self && !u.disabled && (
                    <AButton size="sm" variant="plain" onClick={() => setTransfer(u)}>
                      <Crown className="size-3.5" /> {t('admin.team.transfer')}
                    </AButton>
                  )}
                </li>
              );
            })}
          </ul>
        </Card>
        <Card title={t('admin.team.rolesTitle')}>
          {ROLES.map((r) => (
            <div key={r} className="border-b border-[#e5e5ea] px-4 py-3 last:border-b-0">
              <Badge color={ROLE_COLOR[r]}>{tk(`admin.roles.${r}`)}</Badge>
              <p className="mt-1.5 text-[13px] leading-snug text-[#424245]">{tk(`admin.roleText.${r}`)}</p>
            </div>
          ))}
        </Card>
      </div>

      <Modal open={invite} onClose={() => setInvite(false)} title={t('admin.team.inviteTitle')}>
        <form onSubmit={submitInvite} className="grid gap-3">
          <TextInput required placeholder={t('admin.auth.name')} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <TextInput required type="email" placeholder={t('admin.auth.email')} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <Select value={form.role} onChange={(role) => setForm({ ...form, role })} options={assignable.map((r) => ({ value: r, label: `${tk(`admin.roles.${r}`)} — ${tk(`admin.roleText.${r}`)}` }))} />
          <div className="mt-2 flex justify-end gap-2">
            <AButton type="button" variant="secondary" onClick={() => setInvite(false)}>
              {t('admin.common.cancel')}
            </AButton>
            <AButton type="submit" loading={busy}>
              {t('admin.team.invite')}
            </AButton>
          </div>
        </form>
      </Modal>

      <Modal open={!!temp} onClose={() => setTemp(null)} title={t('admin.team.inviteDone')}>
        {temp && (
          <div className="grid gap-3">
            <p className="text-[14px]">
              <b>{temp.name}</b> · {temp.email}
            </p>
            <div>
              <p className="mb-1 text-[13px] text-[#6e6e73]">{t('admin.team.tempPassword')}</p>
              <CopyText text={temp.password} />
            </div>
            <p className="text-[13px] leading-relaxed text-[#6e6e73]">{t('admin.team.tempHint')}</p>
            <div className="flex justify-end">
              <AButton onClick={() => setTemp(null)}>{t('admin.common.done')}</AButton>
            </div>
          </div>
        )}
      </Modal>

      <Modal open={!!transfer} onClose={() => setTransfer(null)} title={t('admin.team.transfer')}>
        {transfer && (
          <form onSubmit={submitTransfer} className="grid gap-3">
            <p className="text-[14px] leading-relaxed text-[#424245]">{t('admin.team.transferText', { name: transfer.name })}</p>
            <TextInput required type="password" placeholder={t('admin.auth.password')} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
            <div className="mt-2 flex justify-end gap-2">
              <AButton type="button" variant="secondary" onClick={() => setTransfer(null)}>
                {t('admin.common.cancel')}
              </AButton>
              <AButton type="submit" variant="danger" loading={busy}>
                <Crown className="size-4" /> {t('admin.team.transfer')}
              </AButton>
            </div>
          </form>
        )}
      </Modal>
    </>
  );
}
