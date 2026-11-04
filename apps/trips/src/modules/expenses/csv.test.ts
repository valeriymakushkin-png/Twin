import { describe, expect, it } from 'vitest';
import type { Expense } from '../../core/db';
import { summarize } from './calc';
import { CSV_BOM, csvCell, expensesToCsv } from './csv';

const e = (id: number, date: string, amount: number, currency: string, note?: string): Expense => ({ id: `e${id}`, tripId: 't', date, amount, currency, category: 'food', note, createdAt: id, updatedAt: id });

describe('CSV', () => {
  it('экранирует кавычки, точки с запятой и переводы строк', () => {
    expect(csvCell('кофе; круассан')).toBe('"кофе; круассан"');
    expect(csvCell('он сказал "дорого"')).toBe('"он сказал ""дорого"""');
    expect(csvCell('две\nстроки')).toBe('"две\nстроки"');
    expect(csvCell('обычный текст')).toBe('обычный текст');
  });
  it('защищает от формул в таблице', () => {
    expect(csvCell('=HYPERLINK("http://evil")')).toBe(`"'=HYPERLINK(""http://evil"")"`);
    expect(csvCell('+7 900 000')).toBe("'+7 900 000");
    expect(csvCell('-5 EUR')).toBe("'-5 EUR");
    expect(csvCell('@sum')).toBe("'@sum");
  });
  it('числа с запятой вместо точки (для русского Excel)', () => {
    expect(csvCell(12.5)).toBe('12,5');
    expect(csvCell(undefined)).toBe('');
  });
  it('собирает файл: BOM, заголовок, строки от старых к новым, сумма в валюте поездки', () => {
    const rates = { auto: { USD: 1, EUR: 0.9, THB: 36 }, manual: {} };
    const s = summarize([e(2, '2026-05-11', 10, 'EUR', 'ужин'), e(1, '2026-05-10', 360, 'THB'), e(3, '2026-05-10', 5, 'XYZ', '=1+1')], { startDate: '2026-05-10', endDate: '2026-05-12', currency: 'EUR' }, rates, '2026-05-11');
    const csv = expensesToCsv(s, (c) => (c === 'food' ? 'Еда' : c), ['Дата', 'Категория', 'Сумма', 'Валюта', 'В EUR', 'Валюта итога', 'Заметка']);
    expect(csv.startsWith(CSV_BOM)).toBe(true);
    const lines = csv.slice(1).trim().split('\r\n');
    expect(lines).toEqual([
      'Дата;Категория;Сумма;Валюта;В EUR;Валюта итога;Заметка',
      '2026-05-10;Еда;360;THB;9;EUR;',
      "2026-05-10;Еда;5;XYZ;;EUR;'=1+1", // курса нет — сумма в валюте итога пустая
      '2026-05-11;Еда;10;EUR;10;EUR;ужин',
    ]);
  });
});
