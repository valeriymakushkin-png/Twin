import { zip } from 'fflate';
import { db, type DiaryPage, type DiaryStyle } from '../../../core/db';
import { photoIdsOf } from '../useDiaryModel';
import { buildPdf } from '../pdf';
import { loadDiaryFonts } from './fonts';
import { renderDiaryPage } from './pages';
import { SIZES, type Aspect, type RenderData } from './types';

/** Всё, что нужно для выгрузки: страницы, стиль и данные для рисования. */
export interface ExportJob {
  pages: DiaryPage[];
  style: DiaryStyle;
  data: Omit<RenderData, 'images'>;
}

/** Читает из базы все фото, нужные страницам, и превращает их в картинки для холста. */
export async function loadImages(pages: DiaryPage[]): Promise<Map<string, ImageBitmap>> {
  const out = new Map<string, ImageBitmap>();
  for (const id of photoIdsOf(pages)) {
    const photo = await db.photos.get(id);
    if (!photo) continue;
    try {
      out.set(id, await createImageBitmap(photo.blob));
    } catch {
      /* повреждённое фото — на странице будет заглушка */
    }
  }
  return out;
}

const toBlob = (canvas: HTMLCanvasElement, type: string, quality?: number) =>
  new Promise<Blob>((res, rej) => canvas.toBlob((b) => (b ? res(b) : rej(new Error('encode'))), type, quality));

/** Рисует одну страницу в нужном формате и возвращает файл. */
export async function renderToBlob(job: ExportJob, images: Map<string, ImageBitmap>, page: DiaryPage, aspect: Aspect, type: 'image/png' | 'image/jpeg'): Promise<Blob> {
  await loadDiaryFonts();
  const canvas = document.createElement('canvas');
  renderDiaryPage(canvas, { page, style: job.style, aspect, scale: 1, data: { ...job.data, images } });
  return toBlob(canvas, type, type === 'image/jpeg' ? 0.9 : undefined);
}

export async function exportPdf(job: ExportJob, title: string, onProgress?: (done: number, total: number) => void): Promise<Uint8Array> {
  const pages = job.pages.filter((p) => !p.hidden);
  const images = await loadImages(pages);
  const { w, h } = SIZES.page;
  const out = [];
  for (const [i, page] of pages.entries()) {
    const blob = await renderToBlob({ ...job, data: { ...job.data, watermark: true } }, images, page, 'page', 'image/jpeg');
    out.push({ jpeg: new Uint8Array(await blob.arrayBuffer()), width: w, height: h });
    onProgress?.(i + 1, pages.length);
  }
  images.forEach((b) => b.close());
  return buildPdf(out, { title });
}

export const pageFileName = (page: DiaryPage, index: number, ext: string) => `${String(index + 1).padStart(2, '0')}-${page.key.replace(/[^a-z0-9]+/gi, '-')}.${ext}`;

export async function exportImages(job: ExportJob, aspect: Aspect, onProgress?: (done: number, total: number) => void): Promise<{ name: string; blob: Blob }[]> {
  const pages = job.pages.filter((p) => !p.hidden);
  const images = await loadImages(pages);
  const files: { name: string; blob: Blob }[] = [];
  for (const [i, page] of pages.entries()) {
    files.push({ name: pageFileName(page, i, 'png'), blob: await renderToBlob({ ...job, data: { ...job.data, watermark: true } }, images, page, aspect, 'image/png') });
    onProgress?.(i + 1, pages.length);
  }
  images.forEach((b) => b.close());
  return files;
}

export async function zipFiles(files: { name: string; blob: Blob }[]): Promise<Uint8Array> {
  const entries: Record<string, [Uint8Array, { level: 0 }]> = {};
  for (const f of files) entries[f.name] = [new Uint8Array(await f.blob.arrayBuffer()), { level: 0 }]; // PNG уже сжат
  return new Promise((res, rej) => zip(entries, (e, d) => (e ? rej(e) : res(d))));
}
