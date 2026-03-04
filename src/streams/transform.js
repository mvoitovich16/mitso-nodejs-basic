// Задание: Streams (transform.js)
// Читать из stdin, переворачивать текст (reverse), писать в stdout

import { Transform } from 'node:stream';

export function transform() {
  const reverseTransform = new Transform({
    transform(chunk, enc, cb) {
      try {
        const text = chunk.toString();
        const reversed = text.split('').reverse().join('');
        cb(null, reversed);
      } catch (e) {
        cb(e);
      }
    },
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);
}

transform();

