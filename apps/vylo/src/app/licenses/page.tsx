'use client';

import { Camera, Code2, ExternalLink, Map as MapIcon, Smile, Sparkles, Stamp } from 'lucide-react';
import { TopBar } from '@/components/ui';
import { destinations } from '@/data/catalog';
import { useI18n } from '@/i18n/use';

export default function LicensesPage() {
  const { t, dest } = useI18n();
  const sections = [
    { icon: Camera, title: t('licenses.photos'), text: t('licenses.photosText') },
    { icon: MapIcon, title: t('licenses.map'), text: t('licenses.mapText') },
    { icon: Stamp, title: t('licenses.visa'), text: t('licenses.visaText') },
    { icon: Code2, title: t('licenses.libs'), text: t('licenses.libsText') },
    { icon: Smile, title: t('licenses.avatars'), text: t('licenses.avatarsText') },
    { icon: Sparkles, title: t('licenses.content'), text: t('licenses.contentText') },
  ];

  return (
    <div className="scroll-area absolute inset-0 bg-canvas pb-16">
      <TopBar title={t('licenses.title')} />
      <div className="grid gap-3 px-5">
        <p className="text-[14px] leading-relaxed text-ink-2">{t('licenses.intro')}</p>
        {sections.map((s) => (
          <section key={s.title} className="rounded-[22px] bg-white p-4 shadow-soft">
            <h2 className="flex items-center gap-2 text-[15px] font-bold">
              <s.icon className="size-[18px] text-brand" /> {s.title}
            </h2>
            <p className="mt-1.5 text-[13px] leading-relaxed text-ink-2">{s.text}</p>
          </section>
        ))}
        <section className="rounded-[22px] bg-white p-2 shadow-soft">
          {destinations.map((d) => (
            <a key={d.id} href={`https://unsplash.com/photos/${d.image}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl px-2 py-2 text-[14px] hover:bg-surface-2">
              <span className="size-2.5 shrink-0 rounded-full" style={{ background: d.theme.accent }} />
              <span className="flex-1">{dest(d.id).name}</span>
              <span className="flex items-center gap-1 text-[12px] text-muted">
                {t('licenses.viewPhoto')} <ExternalLink className="size-3" />
              </span>
            </a>
          ))}
        </section>
      </div>
    </div>
  );
}
