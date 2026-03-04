// Задание: Hash (calcHash.js)
// Посчитать SHA256 для fileToCalculateHashFor.txt и вывести в консоль hex

import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function calcHash() {
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  return new Promise((resolve, reject) => {
    const hash = createHash('sha256');
    const stream = createReadStream(filePath);

    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('error', () => reject(new Error('FS operation failed')));
    stream.on('end', () => {
      console.log(hash.digest('hex'));
      resolve();
    });
  });
}

calcHash();

