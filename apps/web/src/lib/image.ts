import { UPLOAD_RULES } from '@mascot/shared';

/**
 * Client-side downscale + re-encode before upload: cuts upload size ~10x on modern phones
 * (12–48 MP photos), converts HEIC (decoded by the OS) to JPEG and strips EXIF/GPS.
 */
export async function prepareImage(file: File): Promise<File> {
  const max = UPLOAD_RULES.clientMaxDimension;
  let bitmap: ImageBitmap;
  try {
    bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
  } catch {
    return file; // let the server decide (and return a friendly error)
  }
  const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return file;
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.9));
  if (!blob) return file;
  return new File([blob], file.name.replace(/\.\w+$/, '') + '.jpg', { type: 'image/jpeg' });
}

export function objectUrl(file: File): string {
  return URL.createObjectURL(file);
}
