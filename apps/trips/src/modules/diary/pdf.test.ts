import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { buildPdf } from './pdf';

const jpeg = (b64: string) => Uint8Array.from(Buffer.from(b64, 'base64'));
// Две настоящие JPEG 48×68 (красная и синяя)
const RED = jpeg('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABEADADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDEooorwD9bCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9k=');
const BLUE = jpeg('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABEADADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDAooor70+JCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9k=');

const pages = [{ jpeg: RED, width: 48, height: 68 }, { jpeg: BLUE, width: 48, height: 68 }];
const text = (u: Uint8Array) => Buffer.from(u).toString('latin1');

describe('PDF', () => {
  it('имеет правильную структуру: заголовок, страницы, таблица смещений указывает на объекты', () => {
    const pdf = buildPdf(pages, { title: 'Осень в Лиссабоне', created: new Date('2026-11-04T10:00:00Z') });
    const s = text(pdf);
    expect(s.startsWith('%PDF-1.4')).toBe(true);
    expect(s.trimEnd().endsWith('%%EOF')).toBe(true);
    expect(s).toContain('/Count 2');
    expect(s).toContain('/Title <FEFF');
    expect(s).toContain('D:20261104100000Z');
    const start = Number(/startxref\n(\d+)/.exec(s)![1]);
    expect(s.slice(start, start + 4)).toBe('xref');
    const entries = [...s.slice(start).matchAll(/^(\d{10}) 00000 n $/gm)].map((m) => Number(m[1]));
    expect(entries.length).toBe(9); // каталог, список страниц, 2 × (страница, содержимое, картинка), сведения
    entries.forEach((off, i) => expect(s.slice(off, off + 12), `объект ${i + 1}`).toMatch(new RegExp('^' + (i + 1) + ' 0 obj')));
    // JPEG лежат внутри без изменений
    expect(Buffer.from(pdf).includes(Buffer.from(RED))).toBe(true);
    expect(Buffer.from(pdf).includes(Buffer.from(BLUE))).toBe(true);
  });

  it('без страниц файл не создаётся', () => {
    expect(() => buildPdf([], { title: 'x' })).toThrow();
  });

  it('читается настоящим просмотрщиком PDF (pdfinfo, если установлен)', () => {
    const probe = spawnSync('pdfinfo', ['-v']);
    if (probe.error) return; // на машине нет poppler — остальные проверки выше уже покрывают структуру
    const dir = mkdtempSync(join(tmpdir(), 'vylo-pdf-'));
    const file = join(dir, 'test.pdf');
    writeFileSync(file, buildPdf(pages, { title: 'Осень в Лиссабоне' }));
    const info = spawnSync('pdfinfo', [file], { encoding: 'utf8' });
    expect(info.status, info.stderr).toBe(0);
    expect(info.stdout).toMatch(/Pages:\s+2/);
    expect(info.stdout).toMatch(/Title:\s+Осень в Лиссабоне/);
    expect(info.stdout).toMatch(/Page size:\s+419\.53 x 595\.28 pts/);
    const render = spawnSync('pdftoppm', ['-r', '20', '-png', file, join(dir, 'p')], { encoding: 'utf8' });
    expect(render.status, render.stderr).toBe(0);
  });
});
