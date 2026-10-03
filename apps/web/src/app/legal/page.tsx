'use client';

import { AppShell, TopBar } from '@/components/layout/app-shell';
import { Card } from '@/components/ui/card';
import { useT } from '@/lib/i18n';

export default function LegalPage() {
  const { t } = useT();
  return (
    <AppShell tabs={false}>
      <TopBar title={t.legal.title} subtitle={t.legal.subtitle} />
      <div className="space-y-2.5">
        {t.legal.sections.map((s) => (
          <Card key={s.title} className="p-4">
            <h2 className="text-[14px] font-semibold">{s.title}</h2>
            <p className="mt-1 text-[13px] leading-relaxed text-muted">{s.body}</p>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
