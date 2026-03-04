// Задание: Child Processes (cp.js)
// spawnChildProcess(args): запустить script.js с args и связать:
// - stdin главного процесса -> stdin дочернего
// - stdout дочернего -> stdout главного

import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function spawnChildProcess(args) {
  const scriptPath = path.join(__dirname, 'script.js');

  const child = spawn(process.execPath, [scriptPath, ...args], {
    stdio: ['pipe', 'pipe', 'inherit'],
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
}

spawnChildProcess(['hello', 'from', 'parent']);

