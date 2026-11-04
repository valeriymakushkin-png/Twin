/**
 * Минимальный PDF: каждая страница — одна JPEG-картинка на весь лист. Так страницы дневника выглядят в PDF ровно так, как
 * на экране (шрифты, рамки, карта), а библиотека для PDF не нужна: файл собирается вручную, это несколько десятков строк.
 * Текст в таком PDF не выделяется — это картинки страниц (по сути «открытка», а не документ для копирования).
 */
export interface PdfPage {
  jpeg: Uint8Array;
  /** Размер картинки, пиксели */
  width: number;
  height: number;
}

export interface PdfOptions {
  title: string;
  /** Размер листа в пунктах (1 пт = 1/72 дюйма). А5 — 419.53 × 595.28 */
  pageWidth?: number;
  pageHeight?: number;
  created?: Date;
}

const enc = new TextEncoder();

/** Строка PDF в UTF-16BE (так хранятся названия с кириллицей). */
const pdfText = (s: string): string => {
  let hex = 'FEFF';
  for (const ch of s) {
    const cp = ch.codePointAt(0)!;
    if (cp > 0xffff) {
      const v = cp - 0x10000;
      hex += (0xd800 + (v >> 10)).toString(16).padStart(4, '0') + (0xdc00 + (v & 0x3ff)).toString(16).padStart(4, '0');
    } else hex += cp.toString(16).padStart(4, '0');
  }
  return `<${hex.toUpperCase()}>`;
};

const pad = (n: number, w = 2) => String(n).padStart(w, '0');
const pdfDate = (d: Date) => `D:${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
const num = (n: number) => String(Math.round(n * 100) / 100);

export function buildPdf(pages: PdfPage[], options: PdfOptions): Uint8Array {
  if (!pages.length) throw new Error('no pages');
  const pw = options.pageWidth ?? 419.53;
  const ph = options.pageHeight ?? 595.28;
  const chunks: Uint8Array[] = [];
  const offsets: number[] = [];
  let length = 0;
  const push = (data: Uint8Array | string) => {
    const b = typeof data === 'string' ? enc.encode(data) : data;
    chunks.push(b);
    length += b.length;
  };
  const object = (id: number, body: string, stream?: Uint8Array) => {
    offsets[id] = length;
    push(`${id} 0 obj\n${body}`);
    if (stream) {
      push('\nstream\n');
      push(stream);
      push('\nendstream');
    }
    push('\nendobj\n');
  };

  push('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');
  const kids = pages.map((_, i) => `${3 + i * 3} 0 R`).join(' ');
  const infoId = 3 + pages.length * 3;
  object(1, '<< /Type /Catalog /Pages 2 0 R >>');
  object(2, `<< /Type /Pages /Kids [${kids}] /Count ${pages.length} >>`);
  pages.forEach((p, i) => {
    const pageId = 3 + i * 3;
    const contentId = pageId + 1;
    const imageId = pageId + 2;
    // Картинка растягивается на весь лист; пропорции страниц дневника совпадают с А5, поэтому искажений нет.
    const content = enc.encode(`q ${num(pw)} 0 0 ${num(ph)} 0 0 cm /Im0 Do Q`);
    object(pageId, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${num(pw)} ${num(ph)}] /Resources << /XObject << /Im0 ${imageId} 0 R >> /ProcSet [/PDF /ImageC] >> /Contents ${contentId} 0 R >>`);
    object(contentId, `<< /Length ${content.length} >>`, content);
    object(imageId, `<< /Type /XObject /Subtype /Image /Width ${p.width} /Height ${p.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${p.jpeg.length} >>`, p.jpeg);
  });
  object(infoId, `<< /Title ${pdfText(options.title)} /Producer (Vylo) /Creator (Vylo) /CreationDate (${pdfDate(options.created ?? new Date())}) >>`);

  const xrefAt = length;
  const total = infoId + 1;
  let xref = `xref\n0 ${total}\n0000000000 65535 f \n`;
  for (let id = 1; id < total; id++) xref += `${String(offsets[id]).padStart(10, '0')} 00000 n \n`;
  push(xref);
  push(`trailer\n<< /Size ${total} /Root 1 0 R /Info ${infoId} 0 R >>\nstartxref\n${xrefAt}\n%%EOF\n`);

  const out = new Uint8Array(length);
  let at = 0;
  for (const c of chunks) {
    out.set(c, at);
    at += c.length;
  }
  return out;
}
