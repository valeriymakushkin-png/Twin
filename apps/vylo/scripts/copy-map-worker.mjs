// MapLibre's CSP build loads its worker from a URL; serve it as a static file next to the app.
import { copyFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const src = path.join(path.dirname(require.resolve('maplibre-gl/package.json')), 'dist/maplibre-gl-csp-worker.js');
const out = path.join(import.meta.dirname, '../public/maplibre-gl-csp-worker.js');
mkdirSync(path.dirname(out), { recursive: true });
copyFileSync(src, out);
console.log('copied maplibre worker →', path.relative(process.cwd(), out));
