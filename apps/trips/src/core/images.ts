/**
 * Фото уменьшаются сразу при добавлении: так база и резервная копия остаются небольшими, а на экране
 * ничего не теряется (длинная сторона 1600 px — это с запасом для телефона и для экспорта дневника).
 */
export interface ScaledImage {
  blob: Blob;
  width: number;
  height: number;
}

export async function downscaleImage(file: Blob, maxSide = 1600, quality = 0.82): Promise<ScaledImage> {
  // imageOrientation: 'from-image' — учитывает поворот из камеры телефона, чтобы фото не оказалось «на боку».
  const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
  const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('canvas');
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();
  const blob = await new Promise<Blob>((res, rej) => canvas.toBlob((b) => (b ? res(b) : rej(new Error('encode'))), 'image/jpeg', quality));
  return { blob, width, height };
}
