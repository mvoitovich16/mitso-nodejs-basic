// Задание: File system (copy.js)
// Скопировать папку files -> files_copy (на том же уровне)
// Если files нет или files_copy уже есть -> Error('FS operation failed')

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function copy() {
  const srcDir = path.join(__dirname, 'files');
  const destDir = path.join(__dirname, 'files_copy');

  try {
    // если src нет -> ошибка
    await fs.access(srcDir);

    // если dest уже есть -> специально кидаем ошибку
    try {
      await fs.access(destDir);
      throw new Error('exists');
    } catch (e) {
      // ок, если не существует
      if (e && e.message === 'exists') throw e;
    }

    // Node 18: fs.cp есть
    await fs.cp(srcDir, destDir, { recursive: true, errorOnExist: true });
  } catch (e) {
    throw new Error('FS operation failed');
  }
}

copy();

