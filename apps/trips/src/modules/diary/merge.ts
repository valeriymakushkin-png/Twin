import type { DiaryPage, PhotoSlot } from '../../core/db';

/**
 * Пересборка дневника с сохранением работы пользователя. Страницы узнаются по `key`:
 *  - у страницы, которая была и осталась, сохраняются id, «скрыта», выбранные пользователем фото и кадрирование;
 *    текст — если пользователь его правил (`edited`), иначе обновляется;
 *  - порядок берётся из старого дневника; новые страницы встают после своей предыдущей соседки из новой сборки;
 *  - страницы, которых больше нет (например, день без записей), пропадают.
 */
export function mergeDiary(existing: DiaryPage[] | undefined, fresh: DiaryPage[]): DiaryPage[] {
  if (!existing || existing.length === 0) return fresh;
  const old = new Map(existing.map((p) => [p.key, p]));
  const merged = new Map<string, DiaryPage>();

  for (const page of fresh) {
    const prev = old.get(page.key);
    if (!prev || prev.kind !== page.kind) merged.set(page.key, page);
    else merged.set(page.key, mergePage(prev, page));
  }

  // Порядок: сначала страницы, которые уже были (в прежнем порядке), затем новые рядом с соседками.
  const result: DiaryPage[] = existing.flatMap((p) => (merged.has(p.key) ? [merged.get(p.key)!] : []));
  const present = new Set(result.map((p) => p.key));
  fresh.forEach((page, i) => {
    if (present.has(page.key)) return;
    const before = fresh.slice(0, i).reverse().find((p) => present.has(p.key));
    const at = before ? result.findIndex((p) => p.key === before.key) + 1 : 0;
    result.splice(at, 0, merged.get(page.key)!);
    present.add(page.key);
  });
  return result;
}

/** Слоты фото: свои замены и кадрирование сохраняются для тех же исходных фото; новые исходные фото добавляются. */
function mergeSlots(prev: PhotoSlot[], fresh: PhotoSlot[]): PhotoSlot[] {
  const bySource = new Map(prev.filter((s) => s.source).map((s) => [s.source!, s]));
  const fromFresh = fresh.map((f) => bySource.get(f.source!) ?? f);
  // Фото, добавленные пользователем вручную, и замены, исходное фото которых пропало, остаются на странице.
  const extras = prev.filter((s) => !s.source || (!fresh.some((f) => f.source === s.source) && s.override));
  return [...fromFresh, ...extras];
}

function mergePage(prev: DiaryPage, fresh: DiaryPage): DiaryPage {
  const base = { id: prev.id, hidden: prev.hidden, edited: prev.edited };
  if (prev.kind === 'cover' && fresh.kind === 'cover') {
    const photo = prev.photo && (prev.photo.override || !fresh.photo || prev.photo.source === fresh.photo.source) ? prev.photo : fresh.photo;
    return prev.edited ? { ...fresh, ...base, title: prev.title, subtitle: prev.subtitle, photo } : { ...fresh, ...base, photo };
  }
  if (prev.kind === 'day' && fresh.kind === 'day') {
    const photos = mergeSlots(prev.photos, fresh.photos);
    return prev.edited ? { ...fresh, ...base, heading: prev.heading, text: prev.text, photos } : { ...fresh, ...base, photos };
  }
  if (prev.kind === 'stats' && fresh.kind === 'stats') return prev.edited ? { ...fresh, ...base, text: prev.text, lines: prev.lines } : { ...fresh, ...base };
  if ('text' in prev && 'text' in fresh) return prev.edited ? ({ ...fresh, ...base, text: prev.text } as DiaryPage) : ({ ...fresh, ...base } as DiaryPage);
  return { ...fresh, ...base } as DiaryPage;
}
