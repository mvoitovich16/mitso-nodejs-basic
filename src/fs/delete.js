// Задание: File system (delete.js)
// Удалить файл files/fileToRemove.txt
// Если файла нет -> Error('FS operation failed')

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function remove() {
  const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await fs.unlink(filePath);
  } catch (e) {
    throw new Error('FS operation failed');
  }
}

remove();

