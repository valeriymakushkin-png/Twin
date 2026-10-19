'use client';

import { RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { useI18n } from '@/i18n/use';
import type { AuditEntry } from '@/lib/admin/repo';
import { AButton, Empty } from './ui';

export function entityLink(kind?: string | null, id?: string | null) {
  if (!id) return null;
  if (kind === 'places') return `/admin/place/?id=${id}`;
  if (kind === 'destinations') return `/admin/city/?id=${id}`;
  if (kind === 'countries') return `/admin/country/?code=${id}`;
  return null;
}

/** Timeline rows shared by the dashboard and the activity log. */
export function AuditList({ entries, onUndo }: { entries: AuditEntry[]; onUndo?: (e: AuditEntry) => void }) {
  const { tk, f, item, country } = useI18n();
  if (!entries.length) return <Empty>{tk('admin.audit.empty')}</Empty>;
  const name = (e: AuditEntry) => (e.kind === 'countries' ? country(e.entityId ?? '') : e.kind === 'places' || e.kind === 'destinations' ? item(e.entityId ?? '').name : '');
  return (
    <ul>
      {entries.map((e) => {
        const href = entityLink(e.kind, e.entityId);
        const undoable = onUndo && ['places', 'destinations', 'countries'].includes(e.kind ?? '') && e.action.startsWith('content.');
        return (
          <li key={e.id} className="flex items-center gap-3 border-b border-[#e5e5ea] px-4 py-3 last:border-b-0">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#f5f5f7] text-[12px] font-bold text-[#6e6e73]">{(e.userName ?? '?').slice(0, 1).toUpperCase()}</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[14px] font-medium">
                {tk(`admin.audit.action.${e.action.replace(/\./g, '_')}`)}
                {e.kind && <span className="text-[#86868b]"> · {tk(`admin.audit.kind.${e.kind}`)}</span>}
                {e.entityId && href && (
                  <>
                    {' · '}
                    <Link href={href} className="text-[#0071e3] hover:underline">
                      {name(e) || e.entityId}
                    </Link>
                  </>
                )}
              </p>
              <p className="text-[12px] text-[#86868b]">
                {e.userName ?? '—'} · {f.agoMs(Date.now() - e.at)}
              </p>
            </div>
            {undoable && (
              <AButton size="sm" variant="secondary" onClick={() => onUndo!(e)}>
                <RotateCcw className="size-3.5" /> {tk('admin.audit.undo')}
              </AButton>
            )}
          </li>
        );
      })}
    </ul>
  );
}
