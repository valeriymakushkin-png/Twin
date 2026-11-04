import { useEffect, useRef, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import type { DiaryPage, DiaryStyle, PhotoSlot } from '../../core/db';
import { db } from '../../core/db';
import { ru } from '../../core/strings';
import { toast } from '../../core/toast';
import { Button, Field, Icon, Sheet } from '../../core/ui';
import { CropSheet } from './CropSheet';
import { PageCanvas } from './PageCanvas';
import { addUserPhoto } from './diaryRepo';
import { drawCover } from './render/draw';
import type { RenderData } from './render/types';
import { useBitmaps } from './useDiaryModel';

/** Миниатюра фото в списке мест страницы. */
function SlotThumb({ image }: { image?: ImageBitmap }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    c.width = 160;
    c.height = 160;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = '#e5e7ef';
    ctx.fillRect(0, 0, 160, 160);
    if (image) drawCover(ctx, image, { x: 0, y: 0, w: 160, h: 160 });
  }, [image]);
  return <canvas ref={ref} className="slot-thumb" aria-hidden="true" />;
}

const slotIds = (s: PhotoSlot) => [s.source, s.override].filter((x): x is string => !!x);

/**
 * Редактор страницы: живой предпросмотр, тексты и места под фото. Фото можно заменить своим (из галереи или камеры), вернуть
 * оригинал, подвинуть кадр или добавить ещё одно.
 */
export function PageEditor({ page, style, data, tripId, onChange, onClose }: { page: DiaryPage | null; style: DiaryStyle; data: RenderData; tripId: string; onChange: (p: DiaryPage) => void; onClose: () => void }) {
  const [draft, setDraft] = useState<DiaryPage | null>(page);
  const [crop, setCrop] = useState<number | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const target = useRef<number | 'new'>('new');
  useEffect(() => setDraft(page), [page]);

  const slots: PhotoSlot[] = draft?.kind === 'cover' ? (draft.photo ? [draft.photo] : []) : draft?.kind === 'day' ? draft.photos : [];
  const all = useLiveQuery(() => db.photos.where('tripId').equals(tripId).count(), [tripId]); // обновляет эскизы после добавления фото
  const bitmaps = useBitmaps(draft ? slots.flatMap(slotIds) : []);
  void all;

  if (!draft) return null;

  const edit = (patch: Partial<DiaryPage>) => {
    const next = { ...draft, ...patch, edited: true } as DiaryPage;
    setDraft(next);
    onChange(next);
  };
  const setSlots = (next: PhotoSlot[]) => {
    const updated = draft.kind === 'cover' ? ({ ...draft, photo: next[0] ?? null } as DiaryPage) : draft.kind === 'day' ? ({ ...draft, photos: next } as DiaryPage) : draft;
    setDraft(updated);
    onChange(updated); // выбор фото — не правка текста, поэтому `edited` не ставим
  };

  const pick = async (files: FileList | null) => {
    const file = files?.[0];
    if (!file) return;
    try {
      const id = await addUserPhoto(tripId, file);
      const t = target.current;
      if (t === 'new') setSlots([...slots, { override: id, fx: 0.5, fy: 0.5, zoom: 1 }]);
      else setSlots(slots.map((s, i) => (i === t ? { ...s, override: id, fx: 0.5, fy: 0.5, zoom: 1 } : s)));
    } catch {
      toast(ru.diary.photoFailed, 'error');
    }
  };

  const hasPhotos = draft.kind === 'cover' || draft.kind === 'day';
  const canAdd = draft.kind === 'cover' ? slots.length === 0 : draft.kind === 'day' && slots.length < 6;

  return (
    <>
      <Sheet open onClose={onClose} title={ru.diary.editPage} footer={<Button className="btn-block" onClick={onClose}>{ru.diary.done}</Button>}>
        <div style={{ display: 'grid', placeItems: 'center', marginBottom: 14 }}>
          <PageCanvas page={draft} style={style} width={300} data={data} label={ru.diary.editPage} />
        </div>

        {draft.kind === 'cover' && (
          <>
            <Field label={ru.diary.fieldTitle}>
              <input className="input" value={draft.title} maxLength={80} onChange={(e) => edit({ title: e.target.value })} />
            </Field>
            <Field label={ru.diary.fieldSubtitle}>
              <input className="input" value={draft.subtitle} maxLength={100} onChange={(e) => edit({ subtitle: e.target.value })} />
            </Field>
          </>
        )}
        {draft.kind === 'day' && (
          <Field label={ru.diary.fieldHeading}>
            <input className="input" value={draft.heading} maxLength={80} onChange={(e) => edit({ heading: e.target.value })} />
          </Field>
        )}
        {'text' in draft && (
          <Field label={ru.diary.fieldText}>
            <textarea className="input" rows={5} value={draft.text} maxLength={900} onChange={(e) => edit({ text: e.target.value } as Partial<DiaryPage>)} />
          </Field>
        )}
        {draft.kind === 'stats' && (
          <Field label={ru.diary.fieldFacts}>
            <textarea className="input" rows={7} value={draft.lines.join('\n')} onChange={(e) => edit({ lines: e.target.value.split('\n').filter((l) => l.trim()) } as Partial<DiaryPage>)} />
          </Field>
        )}

        {hasPhotos && (
          <>
            <h3 style={{ fontSize: 15, margin: '6px 0 8px' }}>{ru.diary.photos}</h3>
            <input ref={fileRef} type="file" accept="image/*" hidden onChange={(e) => void pick(e.target.files).then(() => (e.target.value = ''))} />
            <div className="slot-list">
              {slots.map((s, i) => {
                const shown = s.override ?? s.source;
                return (
                  <div key={i} className="slot">
                    <SlotThumb image={shown ? bitmaps.get(shown) : undefined} />
                    <div className="slot-main">
                      <b>{s.override ? ru.diary.yours : ru.diary.original}</b>
                      <div className="slot-actions">
                        <button type="button" onClick={() => ((target.current = i), fileRef.current?.click())}>{ru.diary.replacePhoto}</button>
                        {shown && <button type="button" onClick={() => setCrop(i)}>{ru.diary.cropPhoto}</button>}
                        {s.override && s.source && <button type="button" onClick={() => setSlots(slots.map((x, k) => (k === i ? { source: x.source, fx: 0.5, fy: 0.5, zoom: 1 } : x)))}>{ru.diary.revertPhoto}</button>}
                        {!s.source && <button type="button" onClick={() => setSlots(slots.filter((_, k) => k !== i))}>{ru.diary.removePhoto}</button>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {canAdd && (
              <Button variant="secondary" className="btn-block" style={{ marginTop: 8 }} onClick={() => ((target.current = 'new'), fileRef.current?.click())}>
                <Icon name="camera" /> {ru.diary.addPhoto}
              </Button>
            )}
          </>
        )}
      </Sheet>
      <CropSheet
        image={crop !== null && slots[crop] ? (bitmaps.get(slots[crop]!.override ?? slots[crop]!.source ?? '') ?? null) : null}
        slot={crop !== null ? (slots[crop] ?? null) : null}
        onClose={() => setCrop(null)}
        onSave={(v) => crop !== null && setSlots(slots.map((s, i) => (i === crop ? { ...s, ...v } : s)))}
      />
    </>
  );
}
