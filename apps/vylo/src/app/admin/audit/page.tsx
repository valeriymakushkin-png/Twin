'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { AuditList } from '@/components/admin/audit-list';
import { Card, PageHeader, useAdminError, useConfirm } from '@/components/admin/ui';
import { useI18n } from '@/i18n/use';
import { adminRepo, token, useAdmin, type AuditEntry } from '@/lib/admin/repo';
import { can } from '@/lib/admin/roles';

export default function AdminAudit() {
  const { t, version } = useI18n();
  const role = useAdmin((s) => s.user?.role);
  const errorText = useAdminError();
  const confirm = useConfirm();
  const [entries, setEntries] = useState<AuditEntry[]>([]);

  useEffect(() => {
    adminRepo.audit(token()).then(setEntries, (e) => toast.error(errorText(e)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [version]);

  const undo = async (e: AuditEntry) => {
    if (!(await confirm({ title: t('admin.audit.undo'), text: e.entityId ?? '' }))) return;
    try {
      await adminRepo.undo(token(), e.id);
      toast.success(t('admin.audit.undone'));
    } catch (err) {
      toast.error(errorText(err));
    }
  };

  return (
    <>
      <PageHeader title={t('admin.nav.audit')} />
      <Card>
        <AuditList entries={entries} onUndo={can(role, 'audit.revert') ? undo : undefined} />
      </Card>
    </>
  );
}
