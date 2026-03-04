// Задание: Modules (cjsToEsm -> esm.mjs)
// Тут просто эквивалент: вместо require/module.exports используем import/export

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getModuleInfo() {
  // чисто чтобы было что проверить
  return {
    dirname: __dirname,
    filename: __filename,
  };
}

console.log(getModuleInfo());

