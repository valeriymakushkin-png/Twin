'use client';

import { Copy, Languages, Volume2, X } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { toast } from 'sonner';
import { Empty, TopBar } from '@/components/ui';
import { destinationById, overrides } from '@/data/catalog';
import { ReportButton } from '@/components/report';
import { phraseLanguages } from '@/data/phrases';
import { PHRASE_GROUPS, PHRASES, type PhraseId } from '@/data/phrases/types';
import { LOCALE_META } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { speak, useEditedPack } from '@/lib/phrasebook';
import { cn } from '@/lib/utils';
import { useApp } from '@/store/app';

const glossOf = (id: PhraseId) => (/^n\d+$/.test(id) ? id.slice(1) : undefined);

function Phrasebook() {
  const params = useSearchParams();
  const { t, tk, f, locale } = useI18n();
  const trips = useApp((s) => s.trips);
  const fromTrip = trips[0] ? destinationById(trips[0].destinationId)?.language : undefined;
  const initial = [params.get('lang'), fromTrip, 'en'].find((l) => l && (phraseLanguages as readonly string[]).includes(l)) ?? 'en';
  const [lang, setLang] = useState(initial);
  const { pack, missing } = useEditedPack(lang);
  const reviewed = overrides().settings.phrasesReviewed?.[lang];
  const [big, setBig] = useState<PhraseId | null>(null);
  const languages = [...phraseLanguages].sort((a, b) => f.language(a).localeCompare(f.language(b), locale));

  const say = (id: PhraseId) => {
    if (pack && !speak(pack.text[id], pack.speech)) toast(t('phrases.noVoice'));
  };
  const copy = (id: PhraseId) => {
    if (!pack) return;
    void navigator.clipboard?.writeText(pack.text[id]);
    toast.success(t('phrases.copied'));
  };

  return (
    <div className="pb-28">
      <TopBar title={t('phrases.title')} />
      <div className="px-5">
        <p className="text-[14px] leading-snug text-muted">{t('phrases.intro')}</p>
        <label htmlFor="phrase-lang" className="mt-4 block text-[13px] font-semibold text-muted">
          {t('phrases.language')}
        </label>
        <select id="phrase-lang" value={lang} onChange={(e) => setLang(e.target.value)} className="mt-1.5 h-12 w-full rounded-2xl bg-white px-4 text-[15px] font-semibold shadow-soft outline-none ring-1 ring-line-soft focus:ring-2 focus:ring-brand">
          {languages.map((l) => (
            <option key={l} value={l}>
              {f.language(l)}
            </option>
          ))}
        </select>

        {missing && <Empty icon={<Languages className="size-6" />} title={t('phrases.empty')} text="" />}
        {!pack && !missing && <p className="mt-6 text-center text-[14px] text-muted">{t('phrases.loading')}</p>}

        {pack && (
          <>
            <div className="mt-4 rounded-[20px] bg-amber-50 p-4">
              <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-amber">{t('phrases.note')}</p>
              <p className="mt-1 text-[13.5px] leading-snug text-ink-2">{pack.note[locale]}</p>
            </div>

            {PHRASE_GROUPS.map((g) => (
              <section key={g} className="mt-6">
                <h2 className="text-[17px] font-bold tracking-[-0.02em]">{tk(`phrases.group.${g}`)}</h2>
                <div className="mt-2 overflow-hidden rounded-[22px] bg-white shadow-soft ring-1 ring-line-soft">
                  {PHRASES[g].map((id) => (
                    <div key={id} className="border-b border-line-soft px-4 py-3 last:border-b-0">
                      <p className="text-[12.5px] text-muted">{glossOf(id) ?? tk(`phrases.gloss.${id}`)}</p>
                      <div className="mt-0.5 flex items-start gap-2">
                        <div className="min-w-0 flex-1" dir={pack.rtl ? 'rtl' : 'ltr'}>
                          <p lang={lang} className={cn('text-[19px] font-semibold leading-snug tracking-[-0.01em]', pack.rtl && 'text-right')}>
                            {pack.text[id]}
                          </p>
                          {pack.roman && <p className={cn('text-[13.5px] italic text-brand-600', pack.rtl && 'text-right')}>{pack.roman[id]}</p>}
                        </div>
                        <div className="flex shrink-0 items-center gap-0.5">
                          <button aria-label={t('phrases.speak')} onClick={() => say(id)} className="press grid size-9 place-items-center rounded-full bg-brand-50 text-brand-600">
                            <Volume2 className="size-[18px]" />
                          </button>
                          <button aria-label={t('phrases.copy')} onClick={() => copy(id)} className="press grid size-9 place-items-center rounded-full text-muted">
                            <Copy className="size-4" />
                          </button>
                          <button onClick={() => setBig(id)} className="press h-9 rounded-full px-3 text-[12.5px] font-semibold text-ink-2 ring-1 ring-line">
                            {t('phrases.show')}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
            {reviewed ? (
              <p className="mt-5 text-[11.5px] text-faint">{t('phrases.checked', { month: new Date(`${reviewed}T00:00:00`).toLocaleDateString(LOCALE_META[locale].bcp47, { month: 'long', year: 'numeric' }) })}</p>
            ) : (
              <p className="mt-5 rounded-2xl bg-surface-2 p-3.5 text-[12.5px] leading-snug text-ink-2">{t('phrases.unreviewed')}</p>
            )}
            <div className="mt-3">
              <ReportButton kind="phrase" target={lang} />
            </div>
          </>
        )}
      </div>

      {big && pack && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-white p-8 text-center" onClick={() => setBig(null)}>
          <button aria-label={t('phrases.close')} className="press absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-surface-2">
            <X className="size-5" />
          </button>
          <p lang={lang} dir={pack.rtl ? 'rtl' : 'ltr'} className="text-[44px] font-bold leading-tight tracking-[-0.02em]">
            {pack.text[big]}
          </p>
          {pack.roman && <p className="mt-4 text-[22px] italic text-brand-600">{pack.roman[big]}</p>}
          <p className="mt-6 text-[15px] text-muted">{glossOf(big) ?? tk(`phrases.gloss.${big}`)}</p>
        </div>
      )}
    </div>
  );
}

export default function PhrasesPage() {
  return (
    <Suspense>
      <Phrasebook />
    </Suspense>
  );
}
