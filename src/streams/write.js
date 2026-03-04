// Задание: Streams (write.js)
// Записать данные из process.stdin в files/fileToWrite.txt через Writable stream

import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function write() {
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
  const stream = createWriteStream(filePath, { flags: 'a' });

  stream.on('error', () => {
    process.stdout.write('FS operation failed');
  });

  process.stdin.pipe(stream);
}

write();

