import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const root = new URL('../../', import.meta.url);
if (!existsSync(new URL('graphify-out/graph.json', root))) {
  console.error('Graphify index missing. Run `graphify . --no-viz` after reviewing the indexed scope.');
  process.exit(1);
}
execFileSync(process.execPath, [new URL('doctor.mjs', import.meta.url).pathname], { stdio: 'inherit' });
