// Задание: Streams (read.js)
// Прочитать files/fileToRead.txt через Readable stream и вывести в process.stdout

import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function read() {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
  const stream = createReadStream(filePath);

  stream.on('error', () => {
    process.stdout.write('FS operation failed');
  });

  stream.pipe(process.stdout);
}

read();

