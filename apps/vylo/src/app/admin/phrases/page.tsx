'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { AButton, Card, PageHeader, Row, Select, TextInput, Toggle, useAdminError } from '@/components/admin/ui';
import { overrides, type CatalogSettings } from '@/data/catalog';
import { phraseLanguages } from '@/data/phrases';
import { PHRASE_GROUPS, PHRASES, type PhraseId } from '@/data/phrases/types';
import { useI18n } from '@/i18n/use';
import { adminRepo, token, useAdmin } from '@/lib/admin/repo';
import { can } from '@/lib/admin/roles';
import { usePack } from '@/lib/phrasebook';

type Edits = NonNullable<CatalogSettings['phrases']>;

/** Corrections to the bundled phrasebook; only what differs from the bundled wording is stored. */
export default function AdminPhrases() {
  const { t, tk, f, locale, version } = useI18n();
  const role = useAdmin((s) => s.user?.role);
  const errorText = useAdminError();
  const canEdit = can(role, 'content.write');
  const [lang, setLang] = useState<string>(phraseLanguages[0] ?? 'en');
  const { pack } = usePack(lang);
  const [edits, setEdits] = useState<Edits>(() => overrides().settings.phrases ?? {});
  const [reviewed, setReviewed] = useState<Record<string, string>>(() => overrides().settings.phrasesReviewed ?? {});
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    setEdits(overrides().settings.phrases ?? {});
    setReviewed(overrides().settings.phrasesReviewed ?? {});
  }, [version]);
  const dirty = JSON.stringify(edits) !== JSON.stringify(overrides().settings.phrases ?? {}) || JSON.stringify(reviewed) !== JSON.stringify(overrides().settings.phrasesReviewed ?? {});
  const languages = [...phraseLanguages].sort((a, b) => f.language(a).localeCompare(f.language(b), locale)).map((l) => ({ value: l, label: `${f.language(l)} (${l})` }));

  const set = (id: PhraseId, key: 'text' | 'roman', value: string) => {
    const base = pack?.[key === 'text' ? 'text' : 'roman']?.[id] ?? '';
    const mine = { ...edits[lang], [id]: { ...edits[lang]?.[id] } };
    if (value === base || value === '') delete mine[id]![key];
    else mine[id]![key] = value;
    if (!mine[id]!.text && !mine[id]!.roman) delete mine[id];
    const next = { ...edits };
    if (Object.keys(mine).length) next[lang] = mine;
    else delete next[lang];
    setEdits(next);
  };

  const save = async () => {
    setBusy(true);
    try {
      const settings = { ...overrides().settings, phrases: Object.keys(edits).length ? edits : undefined, phrasesReviewed: Object.keys(reviewed).length ? reviewed : undefined };
      await adminRepo.saveSettings(token(), settings);
      toast.success(t('admin.common.saved'));
    } catch (e) {
      toast.error(errorText(e));
    } finally {
      setBusy(false);
    }
  };
  const changed = Object.keys(edits[lang] ?? {}).length;

  return (
    <>
      <PageHeader title={t('phrases.title')} subtitle={t('adminPhrases.hint')} actions={canEdit && <AButton onClick={save} loading={busy} disabled={!dirty}>{t('admin.common.save')}</AButton>} />
      <div className="grid gap-8">
        <Card>
          <Row label={t('phrases.language')} hint={changed ? t('adminPhrases.changed', { count: changed }) : undefined}>
            <div className="flex items-center gap-2">
              <Select value={lang} onChange={setLang} options={languages} className="w-64" />
            </div>
          </Row>
          <Row label={t('phrases.markReviewed')}>
            <div className="flex items-center gap-3">
              <Toggle
                checked={!!reviewed[lang]}
                onChange={(on) => {
                  if (!canEdit) return;
                  const next = { ...reviewed };
                  if (on) next[lang] = new Date().toISOString().slice(0, 10);
                  else delete next[lang];
                  setReviewed(next);
                }}
              />
              {reviewed[lang] && <TextInput disabled={!canEdit} type="date" value={reviewed[lang]} onChange={(e) => e.target.value && setReviewed({ ...reviewed, [lang]: e.target.value })} className="w-44" />}
            </div>
          </Row>
        </Card>
        {pack &&
          PHRASE_GROUPS.map((g) => (
            <Card key={g} title={tk(`phrases.group.${g}`)}>
              {PHRASES[g].map((id) => (
                <Row key={id} label={/^n\d+$/.test(id) ? id.slice(1) : tk(`phrases.gloss.${id}`)}>
                  <div className="grid w-full gap-1.5 sm:grid-cols-2">
                    <TextInput disabled={!canEdit} lang={lang} dir={pack.rtl ? 'rtl' : 'ltr'} value={edits[lang]?.[id]?.text ?? pack.text[id]} onChange={(e) => set(id, 'text', e.target.value)} />
                    {pack.roman && <TextInput disabled={!canEdit} value={edits[lang]?.[id]?.roman ?? pack.roman[id] ?? ''} onChange={(e) => set(id, 'roman', e.target.value)} />}
                  </div>
                </Row>
              ))}
            </Card>
          ))}
      </div>
    </>
  );
}
