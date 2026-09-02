import { cp, mkdir, stat } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const build = spawnSync(npm, ['run', 'build', '--', '--prerender-all'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

const prerenderedIndex = 'dist/server/prerendered-routes/index.html';
let hasPrerenderedIndex = false;
try {
  await stat(prerenderedIndex);
  hasPrerenderedIndex = true;
} catch {
  // Preserve the build failure below when no usable static output exists.
}

if (build.error) throw build.error;
if (build.status !== 0 && !hasPrerenderedIndex) {
  process.exit(build.status ?? 1);
}

await mkdir('dist/client', { recursive: true });
await cp(prerenderedIndex, 'dist/client/index.html');
