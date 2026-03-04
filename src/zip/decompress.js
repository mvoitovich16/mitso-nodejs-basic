// Задание: Zlib (decompress.js)
// Распаковать files/archive.gz обратно в files/fileToCompress.txt (то же содержимое)

import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function decompress() {
  const src = path.join(__dirname, 'files', 'archive.gz');
  const dest = path.join(__dirname, 'files', 'fileToCompress.txt');

  const gunzip = createGunzip();
  const input = createReadStream(src);
  const output = createWriteStream(dest);

  input.on('error', () => process.stdout.write('FS operation failed'));
  output.on('error', () => process.stdout.write('FS operation failed'));

  input.pipe(gunzip).pipe(output);
}

decompress();

