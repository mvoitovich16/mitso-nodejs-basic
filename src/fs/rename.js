// Задание: File system (rename.js)
// Переименовать wrongFilename.txt -> properFilename.md
// Если wrongFilename.txt нет ИЛИ properFilename.md уже есть -> Error('FS operation failed')

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function rename() {
  const filesDir = path.join(__dirname, 'files');
  const fromPath = path.join(filesDir, 'wrongFilename.txt');
  const toPath = path.join(filesDir, 'properFilename.md');

  try {
    await fs.access(fromPath); // если нет -> упадет

    try {
      await fs.access(toPath);
      throw new Error('exists');
    } catch (e) {
      if (e && e.message === 'exists') throw e;
    }

    await fs.rename(fromPath, toPath);
  } catch (e) {
    throw new Error('FS operation failed');
  }
}

rename();

