/**
 * Готовит встроенные географические данные (запускается вручную: `node scripts/build-geo.mjs`, результат лежит в git):
 *  - src/data/cities.generated.json — города мира с населением от 15 000 (GeoNames, CC BY 4.0): название, русские названия,
 *    страна, координаты, население. Нужен для офлайн-поиска города и координат.
 *  - src/data/country-numeric.generated.ts — перевод цифровых кодов стран (в картах world-atlas) в двухбуквенные (ISO).
 * Источники лежат в devDependencies: cities-15000-structured (файл GeoNames) и i18n-iso-countries.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);

// --- Города --------------------------------------------------------------------------------------------------------
const src = join(root, 'node_modules/cities-15000-structured/dist/cities15000.txt');
// Русскими считаем только названия из букв русского алфавита: в списке GeoNames рядом лежат украинские, сербские,
// татарские и другие кириллические формы без пометки языка, их отсекаем по «чужим» буквам.
const RU = /^[А-ЯЁ][А-Яа-яЁё]*([ \-'][А-Яа-яЁё]+)*$/;
const rows = readFileSync(src, 'utf8')
  .split('\n')
  .filter(Boolean)
  .map((line) => {
    const c = line.split('\t');
    const ru = [];
    for (const a of c[3].split(',')) {
      const name = a.trim();
      if (RU.test(name) && !name.endsWith(' ош') && !ru.includes(name)) ru.push(name);
    }
    return [c[1], ru.slice(0, 8).join('|'), c[8], Math.round(Number(c[4]) * 1000) / 1000, Math.round(Number(c[5]) * 1000) / 1000, Number(c[14] || 0)];
  })
  .sort((a, b) => b[5] - a[5]);
writeFileSync(join(root, 'src/data/cities.generated.json'), JSON.stringify(rows));
console.log(`cities: ${rows.length}`);

// --- Коды стран ----------------------------------------------------------------------------------------------------
const iso = require('i18n-iso-countries');
const numeric = iso.getNumericCodes(); // { '004': 'AF', … }
const body = Object.entries(numeric)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([n, a2]) => `  '${n}': '${a2}',`)
  .join('\n');
writeFileSync(
  join(root, 'src/data/country-numeric.generated.ts'),
  `// Сгенерировано scripts/build-geo.mjs — не править вручную.\n/** Цифровой код ISO 3166-1 (как в картах world-atlas) → двухбуквенный. */\nexport const NUMERIC_TO_ALPHA2: Record<string, string> = {\n${body}\n};\n`,
);
console.log(`countries: ${Object.keys(numeric).length}`);
