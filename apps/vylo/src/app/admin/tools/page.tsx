'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { AButton, Card, NumberInput, PageHeader, Row, useAdminError } from '@/components/admin/ui';
import { overrides, type CatalogSettings } from '@/data/catalog';
import { useI18n } from '@/i18n/use';
import { adminRepo, token, useAdmin } from '@/lib/admin/repo';
import { can } from '@/lib/admin/roles';
import { DEFAULT_PER_DAY, PACES } from '@/lib/planner';

/** Settings of the traveller tools (planner, rates, phrasebook…). Everything lives in the catalogue settings. */
export default function AdminTools() {
  const { t, tk, version } = useI18n();
  const role = useAdmin((s) => s.user?.role);
  const errorText = useAdminError();
  const canEdit = can(role, 'settings.write');
  const [s, setS] = useState<CatalogSettings>(() => overrides().settings);
  const [busy, setBusy] = useState(false);
  useEffect(() => setS(overrides().settings), [version]);
  const dirty = JSON.stringify(s) !== JSON.stringify(overrides().settings);

  const save = async () => {
    setBusy(true);
    try {
      await adminRepo.saveSettings(token(), s);
      toast.success(t('admin.common.saved'));
    } catch (e) {
      toast.error(errorText(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <PageHeader title={t('adminTools.title')} actions={canEdit && <AButton onClick={save} loading={busy} disabled={!dirty}>{t('admin.common.save')}</AButton>} />
      <div className="grid gap-8">
        <Card title={t('adminTools.planner')} footer={t('adminTools.plannerHint')}>
          {PACES.map((pace) => (
            <Row key={pace} label={tk(`plan.pace.${pace}`)} hint={t('adminTools.default', { n: DEFAULT_PER_DAY[pace] })}>
              <NumberInput
                disabled={!canEdit}
                min={2}
                max={12}
                step={1}
                value={s.planner?.perDay?.[pace] ?? DEFAULT_PER_DAY[pace]}
                onChange={(v) => {
                  const perDay = { ...s.planner?.perDay };
                  if (v === undefined || v === DEFAULT_PER_DAY[pace]) delete perDay[pace];
                  else perDay[pace] = Math.min(12, Math.max(2, Math.round(v)));
                  setS({ ...s, planner: Object.keys(perDay).length ? { perDay } : undefined });
                }}
                className="w-24"
              />
            </Row>
          ))}
        </Card>
      </div>
    </>
  );
}
