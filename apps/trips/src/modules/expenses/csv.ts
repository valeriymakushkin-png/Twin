import type { Summary } from './calc';

/**
 * Экспорт в CSV для Excel/Google Таблиц на русском: разделитель «;», дробная часть через запятую, кодировка UTF-8 с BOM
 * (иначе кириллица в Excel превращается в «кракозябры»). Значения, которые таблица приняла бы за формулу
 * (начинаются с = + - @), экранируются апострофом — иначе чужая «заметка» могла бы выполниться в таблице.
 */
export const CSV_BOM = '﻿';
const SEPARATOR = ';';

export function csvCell(value: string | number | undefined): string {
  if (value === undefined) return '';
  let s = typeof value === 'number' ? String(value).replace('.', ',') : value;
  if (typeof value === 'string' && /^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return /[";\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export const csvLine = (cells: (string | number | undefined)[]) => cells.map(csvCell).join(SEPARATOR);

const round2 = (n: number) => Math.round(n * 100) / 100;

export function expensesToCsv(summary: Summary, categoryLabel: (c: string) => string, header: string[]): string {
  const rows: string[] = [csvLine(header)];
  // От старых трат к новым — так таблица читается как журнал поездки.
  const all = summary.byDay.flatMap((d) => d.items).sort((a, b) => (a.expense.date === b.expense.date ? a.expense.createdAt - b.expense.createdAt : a.expense.date < b.expense.date ? -1 : 1));
  for (const { expense: e, value } of all)
    rows.push(csvLine([e.date, categoryLabel(e.category), round2(e.amount), e.currency, value === undefined ? undefined : round2(value), summary.currency, e.note]));
  return CSV_BOM + rows.join('\r\n') + '\r\n';
}
