import { cp, mkdir, stat } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const npm = process.env.npm_execpath
  ? { command: process.execPath, args: [process.env.npm_execpath] }
  : {
      command: process.platform === 'win32' ? 'npm.cmd' : 'npm',
      args: [],
    };

let buildError;
try {
  execFileSync(npm.command, [...npm.args, 'run', 'build', '--', '--prerender-all'], {
    stdio: 'inherit',
  });
} catch (error) {
  buildError = error;
}

const prerenderedIndex = 'dist/server/prerendered-routes/index.html';
let hasPrerenderedIndex = false;
try {
  await stat(prerenderedIndex);
  hasPrerenderedIndex = true;
} catch {
  // Preserve the build failure below when no usable static output exists.
}

if (buildError && !hasPrerenderedIndex) throw buildError;

await mkdir('dist/client', { recursive: true });
await cp(prerenderedIndex, 'dist/client/index.html');
