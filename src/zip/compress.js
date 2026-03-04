// Задание: Zlib (compress.js)
// Сжать files/fileToCompress.txt в files/archive.gz используя zlib + streams

import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function compress() {
  const src = path.join(__dirname, 'files', 'fileToCompress.txt');
  const dest = path.join(__dirname, 'files', 'archive.gz');

  const gzip = createGzip();
  const input = createReadStream(src);
  const output = createWriteStream(dest);

  input.on('error', () => process.stdout.write('FS operation failed'));
  output.on('error', () => process.stdout.write('FS operation failed'));

  input.pipe(gzip).pipe(output);
}

compress();

