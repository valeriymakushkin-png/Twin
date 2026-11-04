import { useState } from 'react';
import type { DiaryPage, DiaryStyle, Trip } from '../../core/db';
import { saveFile, safeFileName } from '../../core/files';
import { ru } from '../../core/strings';
import { toast } from '../../core/toast';
import { Button, Icon, Sheet } from '../../core/ui';
import { exportImages, exportPdf, loadImages, pageFileName, renderToBlob, zipFiles, type ExportJob } from './render/exports';
import type { Aspect, RenderData } from './render/types';

type Kind = 'pdf' | 'stories' | 'square';

/** Выбор формата выгрузки дневника: PDF-файл или картинки для соцсетей (одна страница или все архивом). */
export function ExportSheet({ open, onClose, trip, pages, style, data, only }: { open: boolean; onClose: () => void; trip: Trip; pages: DiaryPage[]; style: DiaryStyle; data: Omit<RenderData, 'images'>; only?: DiaryPage }) {
  const [kind, setKind] = useState<Kind>(only ? 'stories' : 'pdf');
  const [scope, setScope] = useState<'one' | 'all'>(only ? 'one' : 'all');
  const [busy, setBusy] = useState<string | null>(null);
  const visible = pages.filter((p) => !p.hidden);

  const run = async () => {
    const job: ExportJob = { pages: only && scope === 'one' ? [only] : pages, style, data: { ...data, watermark: true } };
    const base = `vylo-${safeFileName(trip.name)}`;
    try {
      setBusy(ru.diary.working);
      if (kind === 'pdf') {
        const bytes = await exportPdf({ ...job, pages: visible }, trip.name, (d, t) => setBusy(`${ru.diary.working} ${d}/${t}`));
        await saveFile(bytes, `${base}.pdf`, 'application/pdf');
      } else {
        const aspect: Aspect = kind === 'stories' ? 'story' : 'square';
        if (only && scope === 'one') {
          const images = await loadImages([only]);
          const blob = await renderToBlob({ ...job, pages: [only], data: { ...data, watermark: true } }, images, only, aspect, 'image/png');
          images.forEach((b) => b.close());
          const idx = Math.max(0, pages.findIndex((p) => p.id === only.id));
          await saveFile(new Uint8Array(await blob.arrayBuffer()), `${base}-${pageFileName(only, idx, 'png')}`, 'image/png');
        } else {
          const files = await exportImages({ ...job, pages: visible }, aspect, (d, t) => setBusy(`${ru.diary.working} ${d}/${t}`));
          await saveFile(await zipFiles(files), `${base}-${kind}.zip`, 'application/zip');
        }
      }
      toast(ru.diary.saved);
      onClose();
    } catch {
      toast(ru.diary.exportFailed, 'error');
    } finally {
      setBusy(null);
    }
  };

  const option = (value: Kind, title: string, hint?: string) => (
    <button type="button" className="choice" aria-pressed={kind === value} onClick={() => setKind(value)}>
      <b>{title}</b>
      {hint && <small>{hint}</small>}
    </button>
  );

  return (
    <Sheet
      open={open}
      onClose={onClose}
      title={ru.diary.exportTitle}
      footer={
        <Button className="btn-block" disabled={!!busy || (!only && visible.length === 0)} onClick={() => void run()}>
          <Icon name="download" /> {busy ?? ru.diary.export}
        </Button>
      }
    >
      {option('pdf', ru.diary.pdf, ru.diary.pdfHint)}
      {option('stories', `${ru.diary.images}: ${ru.diary.stories}`)}
      {option('square', `${ru.diary.images}: ${ru.diary.square}`)}
      {kind !== 'pdf' && only && (
        <div className="segmented" style={{ marginTop: 12 }} role="group">
          <button type="button" aria-pressed={scope === 'one'} onClick={() => setScope('one')}>
            {ru.diary.onePage}
          </button>
          <button type="button" aria-pressed={scope === 'all'} onClick={() => setScope('all')}>
            {ru.diary.allPages}
          </button>
        </div>
      )}
      {!only && kind !== 'pdf' && <p className="muted" style={{ marginTop: 10 }}>{ru.diary.allPages}</p>}
      <p className="muted" style={{ marginTop: 12, fontSize: 12.5 }}>{ru.diary.watermarkNote}</p>
      {!only && visible.length === 0 && <p className="field-error">{ru.diary.noPages}</p>}
    </Sheet>
  );
}
