/** Сохранение файла: на телефоне открывается системное меню «Поделиться / Сохранить в Файлы», на компьютере — обычная загрузка. */
export async function saveFile(bytes: Uint8Array | string, name: string, type = 'application/octet-stream'): Promise<void> {
  const file = new File([bytes as BlobPart], name, { type });
  if (navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: name });
      return;
    } catch (e) {
      if ((e as Error).name === 'AbortError') return; // пользователь закрыл меню — это не ошибка
    }
  }
  const url = URL.createObjectURL(file);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

const TRANSLIT: Record<string, string> = Object.fromEntries(
  'а:a б:b в:v г:g д:d е:e ё:e ж:zh з:z и:i й:y к:k л:l м:m н:n о:o п:p р:r с:s т:t у:u ф:f х:kh ц:ts ч:ch ш:sh щ:shch ъ: ы:y ь: э:e ю:yu я:ya'.split(' ').map((p) => p.split(':') as [string, string]),
);

/**
 * Имя файла только из латиницы, цифр, точки, дефиса и подчёркивания. Русские названия транслитерируются: так имя
 * одинаково надёжно работает на любом телефоне и в любом браузере (с кириллицей в именах загрузок бывают сбои).
 */
export function safeFileName(name: string): string {
  const latin = [...name.toLowerCase()].map((c) => TRANSLIT[c] ?? c).join('');
  return latin.replace(/[^a-z0-9._-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'file';
}
