'use client';

import { Download, Trash2, Upload } from 'lucide-react';
import { useRef } from 'react';
import { toast } from 'sonner';
import { ChangePasswordForm } from '@/components/admin/shell';
import { AButton, Badge, Card, PageHeader, Row, useAdminError, useConfirm } from '@/components/admin/ui';
import { emptyOverrides, overrides, type CatalogOverrides } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { API_URL } from '@/lib/api';
import { adminRepo, token, useAdmin } from '@/lib/admin/repo';
import { can, ROLE_COLOR } from '@/lib/admin/roles';
import { useCatalog } from '@/store/catalog';

export default function AdminSettings() {
  const { t, tk } = useI18n();
  const user = useAdmin((s) => s.user)!;
  const revision = useCatalog((s) => s.revision);
  const errorText = useAdminError();
  const confirm = useConfirm();
  const file = useRef<HTMLInputElement>(null);
  const admin = can(user.role, 'settings.write');

  const exportAll = () => {
    const blob = new Blob([JSON.stringify(overrides(), null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `vylo-edits-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const importFile = async (f: File) => {
    try {
      const o = JSON.parse(await f.text()) as CatalogOverrides;
      if (!o || typeof o.places !== 'object' || typeof o.destinations !== 'object') throw new Error('format');
      await adminRepo.importAll(token(), { ...emptyOverrides(), ...o });
      toast.success(t('admin.settings.importDone'));
    } catch (e) {
      toast.error(errorText(e));
    }
  };

  return (
    <>
      <PageHeader title={t('admin.nav.settings')} />
      <div className="grid gap-8">
        <Card title={t('admin.settings.server')} footer={adminRepo.mode === 'local' ? t('admin.settings.howToText') : undefined}>
          <Row label={adminRepo.mode === 'remote' ? t('admin.mode.remote') : t('admin.mode.local')}>
            <p className="text-[14px] text-[#424245]">{adminRepo.mode === 'remote' ? API_URL : t('admin.mode.localText')}</p>
          </Row>
          {adminRepo.mode === 'remote' && (
            <Row label={t('admin.settings.revision', { n: revision })}>
              <span />
            </Row>
          )}
        </Card>

        <Card title={t('admin.nav.settings')}>
          <Row label={t('admin.settings.export')} hint={t('admin.settings.exportText')}>
            <AButton variant="secondary" onClick={exportAll}>
              <Download className="size-4" /> JSON
            </AButton>
          </Row>
          {admin && (
            <Row label={t('admin.settings.import')} hint={t('admin.settings.importText')}>
              <input ref={file} type="file" accept="application/json" hidden onChange={(e) => e.target.files?.[0] && importFile(e.target.files[0])} />
              <AButton variant="secondary" onClick={() => file.current?.click()}>
                <Upload className="size-4" /> JSON
              </AButton>
            </Row>
          )}
          {admin && (
            <Row label={t('admin.settings.resetAll')}>
              <AButton
                variant="danger"
                onClick={async () => {
                  if (!(await confirm({ title: t('admin.settings.resetAll'), text: t('admin.settings.resetConfirm'), danger: true, confirm: t('admin.common.delete') }))) return;
                  try {
                    await adminRepo.importAll(token(), emptyOverrides());
                    toast.success(t('admin.common.saved'));
                  } catch (e) {
                    toast.error(errorText(e));
                  }
                }}
              >
                <Trash2 className="size-4" /> {t('admin.settings.resetAll')}
              </AButton>
            </Row>
          )}
        </Card>

        <Card title={t('admin.settings.account')}>
          <Row label={user.name} hint={user.email}>
            <Badge color={ROLE_COLOR[user.role]}>{tk(`admin.roles.${user.role}`)}</Badge>
          </Row>
          <div className="p-4">
            <ChangePasswordForm />
          </div>
        </Card>
      </div>
    </>
  );
}
