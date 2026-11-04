import { useEffect, useRef } from 'react';
import type { DiaryPage, DiaryStyle } from '../../core/db';
import { renderDiaryPage } from './render/pages';
import { SIZES, type Aspect, type RenderData } from './render/types';

/** Страница дневника как картинка на холсте. Перерисовывается при любом изменении страницы, стиля или данных. */
export function PageCanvas({ page, style, aspect = 'page', width, data, label, onClick, ready = true }: { page: DiaryPage; style: DiaryStyle; aspect?: Aspect; width: number; data: RenderData; label: string; onClick?: () => void; ready?: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const { w, h } = SIZES[aspect];
  // Масштаб считаем по ширине на экране с запасом для плотных экранов, но не больше натурального размера.
  const scale = Math.min(1, (width * Math.min(2, window.devicePixelRatio || 1)) / w);
  useEffect(() => {
    if (ref.current && ready) renderDiaryPage(ref.current, { page, style, aspect, scale, data });
  }, [page, style, aspect, scale, data, ready]);
  return (
    <canvas
      ref={ref}
      role="img"
      aria-label={label}
      className="page-canvas"
      style={{ width, height: (width * h) / w, cursor: onClick ? 'pointer' : undefined }}
      onClick={onClick}
    />
  );
}
