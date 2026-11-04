import { useEffect, useRef, useState } from 'react';
import type { DiaryStyle } from '../../core/db';
import { saveFile } from '../../core/files';
import { ru } from '../../core/strings';
import { toast } from '../../core/toast';
import { Button, Icon, Sheet } from '../../core/ui';
import { loadDiaryFonts } from '../diary/render/fonts';
import { renderYearCard, type YearCardData } from '../diary/render/yearCard';
import { SIZES } from '../diary/render/types';

const STYLES: DiaryStyle[] = ['minimal', 'magazine', 'postcard'];

/** Итоговая карточка «N стран, N городов, N км»: выбор стиля и формата, предпросмотр, сохранение в картинку. */
export function ShareCardSheet({ open, onClose, data, fileTag }: { open: boolean; onClose: () => void; data: Omit<YearCardData, 'watermark'>; fileTag: string }) {
  const [style, setStyle] = useState<DiaryStyle>('magazine');
  const [aspect, setAspect] = useState<'story' | 'square'>('story');
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => void loadDiaryFonts().then(() => setReady(true), () => setReady(true)), []);

  const { w, h } = SIZES[aspect];
  const width = aspect === 'story' ? 210 : 300;
  useEffect(() => {
    if (!open || !ready || !ref.current) return;
    const scale = Math.min(1, (width * Math.min(2, window.devicePixelRatio || 1)) / w);
    renderYearCard(ref.current, { style, aspect, scale, data: { ...data, watermark: true } });
  }, [open, ready, style, aspect, data, w, width]);

  const save = async () => {
    setBusy(true);
    try {
      await loadDiaryFonts();
      const canvas = document.createElement('canvas');
      renderYearCard(canvas, { style, aspect, scale: 1, data: { ...data, watermark: true } });
      const blob = await new Promise<Blob>((res, rej) => canvas.toBlob((b) => (b ? res(b) : rej(new Error('encode'))), 'image/png'));
      await saveFile(new Uint8Array(await blob.arrayBuffer()), `vylo-map-${fileTag}-${aspect}.png`, 'image/png');
      toast(ru.map.cardSaved);
    } catch {
      toast(ru.map.cardFailed, 'error');
    } finally {
      setBusy(false);
    }
  };

  return (
    <Sheet
      open={open}
      onClose={onClose}
      title={ru.map.shareTitle}
      footer={
        <Button className="btn-block" disabled={busy || !ready} onClick={() => void save()}>
          <Icon name="download" /> {busy ? ru.diary.working : ru.map.saveImage}
        </Button>
      }
    >
      <p className="muted" style={{ marginBottom: 12 }}>{ru.map.shareHint}</p>
      <div className="segmented" role="group" aria-label={ru.diary.chooseStyle}>
        {STYLES.map((s) => (
          <button key={s} type="button" aria-pressed={style === s} onClick={() => setStyle(s)}>
            {ru.diary.styles[s]}
          </button>
        ))}
      </div>
      <div className="segmented" role="group" style={{ marginTop: 8 }}>
        <button type="button" aria-pressed={aspect === 'story'} onClick={() => setAspect('story')}>
          {ru.diary.stories}
        </button>
        <button type="button" aria-pressed={aspect === 'square'} onClick={() => setAspect('square')}>
          {ru.diary.square}
        </button>
      </div>
      <div style={{ display: 'grid', placeItems: 'center', marginTop: 14 }}>
        <canvas ref={ref} className="page-canvas" role="img" aria-label={ru.map.shareTitle} style={{ width, height: (width * h) / w }} />
      </div>
    </Sheet>
  );
}
