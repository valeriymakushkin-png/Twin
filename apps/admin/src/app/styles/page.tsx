'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'sonner';
import { Shell } from '@/components/shell';
import { Btn, PageHeader, StatusPill } from '@/components/ui';
import { adminApi, type AdminStyle } from '@/lib/api';
import { compact } from '@/lib/format';

/** Style engine controls: enable/disable, premium gating, order and live prompt overrides. */
export default function StylesPage() {
  const { data, refetch } = useQuery({ queryKey: ['styles'], queryFn: adminApi.styles });
  const [editing, setEditing] = useState<AdminStyle | null>(null);
  const [look, setLook] = useState('');

  async function update(id: string, patch: Parameters<typeof adminApi.updateStyle>[1], msg: string) {
    try {
      await adminApi.updateStyle(id, patch);
      toast.success(msg);
      void refetch();
    } catch (e) {
      toast.error((e as Error).message);
    }
  }

  return (
    <Shell>
      <PageHeader title="Styles" subtitle="Changes apply to new generations within ~60s (catalog cache TTL)." />
      <div className="overflow-x-auto rounded-2xl border border-line bg-card">
        <table className="w-full min-w-[820px] text-[12.5px]">
          <thead className="border-b border-line text-left text-muted">
            <tr>{['', 'Style', 'Status', 'Tier', 'Renders', 'Order', 'Prompt override', ''].map((h, i) => <th key={i} className="px-4 py-2.5 font-medium">{h}</th>)}</tr>
          </thead>
          <tbody>
            {(data ?? []).map((s) => (
              <tr key={s.id} className="border-t border-line">
                <td className="px-4 py-2.5"><span className="block size-6 rounded-lg" style={{ background: `linear-gradient(135deg, ${s.recipe.gradient[0]}, ${s.recipe.gradient[1]})` }} /></td>
                <td className="px-4 py-2.5"><div className="font-medium">{s.recipe.name}</div><div className="text-[11px] text-muted">{s.slug}</div></td>
                <td className="px-4 py-2.5">{s.isActive ? <StatusPill status="good" label="Active" /> : <StatusPill status="warning" label="Disabled" />}</td>
                <td className="px-4 py-2.5">{s.isPremium ? 'Premium' : 'Free'}</td>
                <td className="px-4 py-2.5 tabular">{compact(s.renders)}</td>
                <td className="px-4 py-2.5 tabular">{s.recipe.sortOrder}</td>
                <td className="px-4 py-2.5 text-muted">{s.promptOverrides && Object.keys(s.promptOverrides).length ? 'custom' : 'default'}</td>
                <td className="px-4 py-2.5 text-right">
                  <span className="inline-flex gap-1.5">
                    <Btn onClick={() => update(s.id, { isActive: !s.isActive }, s.isActive ? 'Disabled' : 'Enabled')}>{s.isActive ? 'Disable' : 'Enable'}</Btn>
                    <Btn onClick={() => update(s.id, { isPremium: !s.isPremium }, 'Tier updated')}>{s.isPremium ? 'Make free' : 'Make premium'}</Btn>
                    <Btn onClick={() => { setEditing(s); setLook(s.promptOverrides?.look ?? s.recipe.look); }}>Prompt</Btn>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editing && (
        <div className="mt-4 rounded-2xl border border-line bg-card p-4">
          <div className="mb-2 text-[14px] font-semibold">Look override · {editing.recipe.name}</div>
          <textarea value={look} onChange={(e) => setLook(e.target.value)} rows={4} className="w-full rounded-xl border border-line bg-card-2 p-3 text-[13px] outline-none" />
          <div className="mt-3 flex gap-2">
            <Btn variant="primary" onClick={() => update(editing.id, { promptOverrides: { ...(editing.promptOverrides ?? {}), look } }, 'Prompt override saved').then(() => setEditing(null))}>Save override</Btn>
            <Btn onClick={() => update(editing.id, { promptOverrides: null }, 'Reverted to default').then(() => setEditing(null))}>Revert to default</Btn>
            <Btn onClick={() => setEditing(null)}>Cancel</Btn>
          </div>
        </div>
      )}
    </Shell>
  );
}
