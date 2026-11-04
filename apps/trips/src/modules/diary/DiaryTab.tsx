import { useLiveQuery } from 'dexie-react-hooks';
import { useMemo, useState } from 'react';
import { db, type DiaryPage, type DiaryStyle, type Trip } from '../../core/db';
import { fill, ru } from '../../core/strings';
import { toast } from '../../core/toast';
import { Button, Icon, IconButton } from '../../core/ui';
import { ExportSheet } from './ExportSheet';
import { PageCanvas } from './PageCanvas';
import { PageEditor } from './PageEditor';
import { createDiary, dropUnusedUserPhotos, updateDiary } from './diaryRepo';
import { generateDiary } from './generate';
import { mergeDiary } from './merge';
import type { RenderData } from './render/types';
import { useBitmaps, useDiaryModel, useFontsReady, photoIdsOf } from './useDiaryModel';

const STYLES: DiaryStyle[] = ['minimal', 'magazine', 'postcard'];

const pageName = (p: DiaryPage, startDate: string): string =>
  p.kind === 'day' ? fill(ru.diary.day, { n: Math.round((Date.parse(`${p.date}T00:00:00Z`) - Date.parse(`${startDate}T00:00:00Z`)) / 86_400_000) + 1 }) : ru.diary.pageNames[p.kind];
const randomSeed = () => Math.floor(Math.random() * 2 ** 31);

/** Вкладка «Дневник»: сборка по данным поездки, три стиля, правка текста и порядка, замена фото, экспорт. */
export function DiaryTab({ trip }: { trip: Trip }) {
  const model = useDiaryModel(trip);
  const diary = useLiveQuery(async () => (await db.diaries.get(trip.id)) ?? null, [trip.id]);
  const fontsReady = useFontsReady();
  const images = useBitmaps(photoIdsOf(diary?.pages ?? []));
  const [styleChoice, setStyleChoice] = useState<DiaryStyle>('magazine');
  const [editing, setEditing] = useState<string | null>(null);
  const [exporting, setExporting] = useState<{ only?: DiaryPage } | null>(null);

  const base = model.base;
  const data: RenderData | null = useMemo(() => (base ? { ...base, images, seed: diary?.seed ?? 1, watermark: true } : null), [base, images, diary?.seed]);
  const style = diary?.style ?? styleChoice;
  const preview = useMemo(() => (model.input ? generateDiary(model.input, 1)[0] : null), [model.input]);
  const previewData: RenderData | null = useMemo(() => (base && preview?.kind === 'cover' && preview.photo ? { ...base, images: new Map(), seed: 1, watermark: true } : base ? { ...base, images: new Map(), seed: 1, watermark: true } : null), [base, preview]);

  if (diary === undefined || !model.input || !data) return <p className="muted" style={{ textAlign: 'center', padding: 30 }}>{ru.loading}</p>;
  const input = model.input;

  const build = async () => {
    await createDiary(trip.id, styleChoice, generateDiary(input, randomSeed()), randomSeed(), model.fp);
  };

  // --- Нет дневника: выбор стиля и сборка ---
  if (!diary) {
    return (
      <>
        <section className="section">
          <h3>{ru.diary.title}</h3>
          <p className="muted" style={{ marginTop: 6 }}>{ru.diary.intro}</p>
          {input.facts.items === 0 && <p className="notice" style={{ marginTop: 10 }}>{ru.diary.emptyTrip}</p>}
          <p style={{ fontWeight: 650, margin: '16px 0 8px' }}>{ru.diary.chooseStyle}</p>
          <div className="style-grid">
            {STYLES.map((s) => (
              <button key={s} type="button" className="style-card" aria-pressed={styleChoice === s} onClick={() => setStyleChoice(s)}>
                {preview && previewData && fontsReady && <PageCanvas page={preview} style={s} width={96} data={previewData} label={ru.diary.styles[s]} />}
                <b>{ru.diary.styles[s]}</b>
                <small>{ru.diary.styleHints[s]}</small>
              </button>
            ))}
          </div>
          <Button className="btn-block" style={{ marginTop: 16 }} onClick={() => void build()}>
            <Icon name="book" /> {ru.diary.build}
          </Button>
        </section>
      </>
    );
  }

  const stale = diary.fingerprint !== model.fp;
  const move = (index: number, by: -1 | 1) =>
    updateDiary(trip.id, (d) => {
      const pages = [...d.pages];
      const j = index + by;
      if (j < 0 || j >= pages.length) return d;
      [pages[index], pages[j]] = [pages[j]!, pages[index]!];
      return { ...d, pages };
    });
  const patchPage = (id: string, change: (p: DiaryPage) => DiaryPage) => updateDiary(trip.id, (d) => ({ ...d, pages: d.pages.map((p) => (p.id === id ? change(p) : p)) }));

  const rebuild = async () => {
    await updateDiary(trip.id, (d) => ({ ...d, pages: mergeDiary(d.pages, generateDiary(input, d.seed)), fingerprint: model.fp }));
    await dropUnusedUserPhotos(trip.id);
    toast(ru.diary.rebuilt);
  };
  const rewrite = async () => {
    const seed = randomSeed();
    await updateDiary(trip.id, (d) => ({ ...d, seed, pages: mergeDiary(d.pages, generateDiary(input, seed)), fingerprint: model.fp }));
    toast(ru.diary.rewritten);
  };

  const editingPage = diary.pages.find((p) => p.id === editing) ?? null;

  return (
    <>
      <div className="segmented" role="group" aria-label={ru.diary.chooseStyle}>
        {STYLES.map((s) => (
          <button key={s} type="button" aria-pressed={diary.style === s} onClick={() => void updateDiary(trip.id, (d) => ({ ...d, style: s }))}>
            {ru.diary.styles[s]}
          </button>
        ))}
      </div>

      {stale && (
        <button type="button" className="notice" onClick={() => void rebuild()}>
          {ru.diary.stale} — <u>{ru.diary.rebuild}</u>
        </button>
      )}

      <div className="menu-row" style={{ margin: '12px 0' }}>
        <Button variant="secondary" style={{ flex: 1 }} onClick={() => void rewrite()}>
          <Icon name="refresh" /> {ru.diary.rewrite}
        </Button>
        <Button style={{ flex: 1 }} onClick={() => setExporting({})}>
          <Icon name="share" /> {ru.diary.export}
        </Button>
      </div>

      <h3 style={{ margin: '4px 4px 8px' }}>{ru.diary.pages}</h3>
      <div className="page-grid">
        {diary.pages.map((p, i) => (
          <div key={p.id} className={`page-card ${p.hidden ? 'is-hidden' : ''}`}>
            <PageCanvas page={p} style={diary.style} width={160} data={data} label={pageName(p, trip.startDate)} ready={fontsReady} onClick={() => setEditing(p.id)} />
            <div className="page-card-head">
              <b>{pageName(p, trip.startDate)}</b>
              {p.hidden && <small>{ru.diary.hidden}</small>}
            </div>
            <div className="page-card-actions">
              <IconButton icon="up" label={ru.diary.up} disabled={i === 0} onClick={() => void move(i, -1)} />
              <IconButton icon="down" label={ru.diary.down} disabled={i === diary.pages.length - 1} onClick={() => void move(i, 1)} />
              <IconButton icon="edit" label={ru.diary.edit} onClick={() => setEditing(p.id)} />
              <IconButton icon={p.hidden ? 'check' : 'close'} label={p.hidden ? ru.diary.show : ru.diary.hide} onClick={() => void patchPage(p.id, (x) => ({ ...x, hidden: !x.hidden }))} />
              <IconButton icon="share" label={ru.diary.shareOne} onClick={() => setExporting({ only: p })} />
            </div>
          </div>
        ))}
      </div>
      <p className="muted" style={{ marginTop: 14, fontSize: 12.5 }}>{ru.diary.rebuildHint}</p>
      <Button variant="ghost" className="btn-block" onClick={() => void rebuild()}>
        {ru.diary.rebuild}
      </Button>

      <PageEditor
        page={editingPage}
        style={diary.style}
        data={data}
        tripId={trip.id}
        onChange={(p) => void patchPage(p.id, () => p)}
        onClose={() => {
          setEditing(null);
          void dropUnusedUserPhotos(trip.id);
        }}
      />
      <ExportSheet
        open={!!exporting}
        onClose={() => setExporting(null)}
        trip={trip}
        pages={diary.pages}
        style={diary.style}
        data={{ ...data }}
        only={exporting?.only}
        key={exporting?.only?.id ?? 'all'}
      />
    </>
  );
}
