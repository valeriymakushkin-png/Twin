import { useEffect, useRef, useState } from 'react';
import type { PhotoSlot } from '../../core/db';
import { ru } from '../../core/strings';
import { Button, Sheet } from '../../core/ui';
import { drawCover } from './render/draw';

/**
 * Кадрирование: фото показано в рамке 4:3 так, как оно ляжет на страницу; перетаскиванием выбирается видимая часть,
 * ползунком — приближение. Точка кадра и приближение применяются к любому формату страницы.
 */
export function CropSheet({ image, slot, onClose, onSave }: { image: ImageBitmap | null; slot: PhotoSlot | null; onClose: () => void; onSave: (s: Pick<PhotoSlot, 'fx' | 'fy' | 'zoom'>) => void }) {
  const [view, setView] = useState({ fx: 0.5, fy: 0.5, zoom: 1 });
  const canvas = useRef<HTMLCanvasElement>(null);
  const drag = useRef<{ x: number; y: number } | null>(null);
  const BOX = { w: 520, h: 390 };

  useEffect(() => {
    if (slot) setView({ fx: slot.fx, fy: slot.fy, zoom: slot.zoom });
  }, [slot]);

  useEffect(() => {
    const c = canvas.current;
    if (!c || !image || !slot) return;
    c.width = BOX.w;
    c.height = BOX.h;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = '#ddd';
    ctx.fillRect(0, 0, BOX.w, BOX.h);
    drawCover(ctx, image, { x: 0, y: 0, ...BOX }, view);
  }, [image, slot, view]);

  if (!slot || !image) return null;

  const move = (e: React.PointerEvent) => {
    if (!drag.current) return;
    const r = canvas.current!.getBoundingClientRect();
    const dx = ((e.clientX - drag.current.x) * BOX.w) / r.width;
    const dy = ((e.clientY - drag.current.y) * BOX.h) / r.height;
    drag.current = { x: e.clientX, y: e.clientY };
    // На сколько пикселей картинка реально растянута в рамке — столько пикселей экрана = сдвиг в картинке.
    const scale = Math.max(BOX.w / image.width, BOX.h / image.height) * view.zoom;
    setView((v) => ({ ...v, fx: Math.min(1, Math.max(0, v.fx - dx / (image.width * scale))), fy: Math.min(1, Math.max(0, v.fy - dy / (image.height * scale))) }));
  };

  return (
    <Sheet
      open
      onClose={onClose}
      title={ru.diary.cropTitle}
      footer={
        <>
          <Button variant="secondary" onClick={() => setView({ fx: 0.5, fy: 0.5, zoom: 1 })}>
            {ru.diary.reset}
          </Button>
          <Button style={{ flex: 1 }} onClick={() => (onSave(view), onClose())}>
            {ru.diary.done}
          </Button>
        </>
      }
    >
      <p className="muted" style={{ marginBottom: 10 }}>{ru.diary.cropHint}</p>
      <canvas
        ref={canvas}
        className="crop-canvas"
        onPointerDown={(e) => {
          drag.current = { x: e.clientX, y: e.clientY };
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={move}
        onPointerUp={() => (drag.current = null)}
        onPointerCancel={() => (drag.current = null)}
      />
      <label className="field" style={{ marginTop: 14 }}>
        <span className="field-label">{ru.diary.zoom}</span>
        <input type="range" min={1} max={3} step={0.05} value={view.zoom} onChange={(e) => setView((v) => ({ ...v, zoom: Number(e.target.value) }))} />
      </label>
    </Sheet>
  );
}
