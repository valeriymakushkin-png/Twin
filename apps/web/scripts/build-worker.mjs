// Bundles the 3D snapshot worker (three.js + @mascot/mascot-3d) into public/, independent of
// the Next.js bundler. Loaded lazily the first time a thumbnail is rendered.
import { build } from 'esbuild';

await build({
  entryPoints: ['src/workers/mascot3d.worker.ts'],
  bundle: true,
  format: 'iife',
  minify: true,
  target: 'es2020',
  outfile: 'public/mascot3d-worker.js',
  logLevel: 'warning',
});
