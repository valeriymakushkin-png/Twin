'use client';

import { ArrowLeft, Eye, EyeOff, ExternalLink, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { toast } from 'sonner';
import { overrides } from '@/data/catalog';
import type { Locale } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { diff, statusOf } from '@/lib/admin/entities';
import { adminRepo, token, useAdmin, type EntityKind } from '@/lib/admin/repo';
import { can } from '@/lib/admin/roles';
import { StatusBadge } from './status-badge';
import { AButton, useAdminError, useConfirm } from './ui';

type Localized = Partial<Record<Locale, Record<string, unknown>>>;

/** Drop empty strings, empty lists and languages with nothing left, so "empty" means "use bundled text". */
function pruneText(text: Localized): Localized | undefined {
  const out: Localized = {};
  for (const [l, fields] of Object.entries(text) as [Locale, Record<string, unknown>][]) {
    const kept = Object.fromEntries(
      Object.entries(fields ?? {}).filter(([, v]) => {
        if (typeof v === 'string') return v.trim() !== '';
        if (Array.isArray(v)) return v.some((x) => typeof x === 'string' && x.trim());
        if (v && typeof v === 'object') return JSON.stringify(v).replace(/"[^"]*":""|[{}[\],]|"title"|"sections"|"body"/g, '').length > 0;
        return v !== undefined;
      }),
    );
    if (Object.keys(kept).length) out[l] = kept;
  }
  return Object.keys(out).length ? out : undefined;
}

/**
 * Shared state for every editor: a draft of the facts and the per-language texts, saved as a patch
 * against the bundled version (or as a complete record for entries created in the console).
 */
export function useEntityEditor<T extends object>({ kind, id, bundled, initial }: { kind: EntityKind; id: string; bundled: T | undefined; initial: () => T }) {
  const errorText = useAdminError();
  const { t, version } = useI18n();
  const role = useAdmin((s) => s.user?.role);
  const patch = overrides()[kind][id] as (Record<string, unknown> & { text?: Localized; deleted?: boolean; custom?: boolean }) | undefined;
  const start = useMemo(() => ({ facts: initial(), text: (patch?.text ?? {}) as Localized }), [id, version]); // eslint-disable-line react-hooks/exhaustive-deps
  const [facts, setFacts] = useState<T>(start.facts);
  const [text, setText] = useState<Localized>(start.text);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setFacts(start.facts);
    setText(start.text);
  }, [start]);

  const dirty = JSON.stringify(facts) !== JSON.stringify(start.facts) || JSON.stringify(pruneText(text) ?? {}) !== JSON.stringify(pruneText(start.text) ?? {});
  const canEdit = can(role, 'content.write');
  const isCustom = !bundled;

  const save = async (extra: Record<string, unknown> = {}, saveId = id) => {
    setBusy(true);
    try {
      const body = isCustom ? { ...facts, custom: true } : diff(bundled, facts);
      await adminRepo.saveEntity(token(), kind, saveId, { ...body, ...(pruneText(text) ? { text: pruneText(text) } : {}), ...(patch?.deleted ? { deleted: true } : {}), ...extra });
      toast.success(t('admin.common.saved'));
      return true;
    } catch (e) {
      toast.error(errorText(e));
      return false;
    } finally {
      setBusy(false);
    }
  };

  const revert = async () => {
    setBusy(true);
    try {
      await adminRepo.revertEntity(token(), kind, id);
      toast.success(t('admin.common.reverted'));
    } catch (e) {
      toast.error(errorText(e));
    } finally {
      setBusy(false);
    }
  };

  const setHidden = (hidden: boolean) => save({ deleted: hidden || undefined });

  return { facts, setFacts, text, setText, dirty, busy, canEdit, isCustom, status: statusOf(kind, id), hidden: !!patch?.deleted, hasPatch: !!patch, save, revert, setHidden };
}

/** Page frame for an editor: back link, title, status, sticky action bar and a preview column. */
export function EditorFrame({
  back,
  title,
  subtitle,
  preview,
  children,
  editor,
  viewHref,
  name,
  onSave,
}: {
  back: { href: string; label: string };
  title: ReactNode;
  subtitle?: ReactNode;
  preview?: ReactNode;
  children: ReactNode;
  editor: Pick<ReturnType<typeof useEntityEditor>, 'status' | 'hidden' | 'canEdit' | 'hasPatch' | 'isCustom' | 'busy' | 'dirty' | 'revert' | 'setHidden'>;
  viewHref?: string;
  name: string;
  onSave: () => void;
}) {
  const { t } = useI18n();
  const confirm = useConfirm();
  return (
    <>
      <Link href={back.href} className="mb-3 inline-flex items-center gap-1 text-[14px] font-medium text-[#0071e3]">
        <ArrowLeft className="size-4" /> {back.label}
      </Link>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <h1 className="flex flex-wrap items-center gap-2 text-[28px] font-bold leading-tight tracking-[-0.02em] md:text-[32px]">
            {title} <StatusBadge status={editor.status} />
          </h1>
          {subtitle && <p className="mt-1 text-[14px] text-[#6e6e73]">{subtitle}</p>}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {viewHref && !editor.hidden && (
            <Link href={viewHref} target="_blank" className="inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-[14px] font-semibold text-[#0071e3] hover:bg-[#0071e3]/8">
              <ExternalLink className="size-4" /> {t('admin.common.open')}
            </Link>
          )}
          {editor.canEdit && editor.hasPatch && !editor.isCustom && (
            <AButton
              variant="secondary"
              disabled={editor.busy}
              onClick={async () => (await confirm({ title: t('admin.common.revert'), text: name })) && editor.revert()}
            >
              <RotateCcw className="size-4" /> {t('admin.common.revert')}
            </AButton>
          )}
          {editor.canEdit && (editor.hasPatch || !editor.isCustom) && (
            <AButton
              variant={editor.hidden ? 'secondary' : 'danger'}
              disabled={editor.busy}
              onClick={async () => {
                if (editor.hidden) return void editor.setHidden(false);
                if (await confirm({ title: t('admin.common.hide'), text: t('admin.common.confirmHide', { name }), danger: true, confirm: t('admin.common.hide') })) void editor.setHidden(true);
              }}
            >
              {editor.hidden ? <Eye className="size-4" /> : <EyeOff className="size-4" />} {editor.hidden ? t('admin.common.show') : t('admin.common.hide')}
            </AButton>
          )}
          {editor.canEdit && (
            <AButton onClick={onSave} loading={editor.busy} disabled={!editor.dirty && editor.hasPatch}>
              {t('admin.common.save')}
            </AButton>
          )}
        </div>
      </div>
      {!editor.canEdit && <p className="mb-4 rounded-[10px] bg-[#ff9500]/10 px-3 py-2 text-[13px] text-[#8a4b00]">{t('admin.common.readOnly')}</p>}
      {editor.dirty && <p className="mb-4 rounded-[10px] bg-[#0071e3]/8 px-3 py-2 text-[13px] text-[#0058b0]">{t('admin.common.unsaved')}</p>}
      <div className="grid gap-8 xl:grid-cols-[1fr_300px]">
        <div className="grid min-w-0 content-start gap-8">{children}</div>
        {preview && <aside className="xl:sticky xl:top-6 xl:self-start">{preview}</aside>}
      </div>
    </>
  );
}
