// Задание: File system (list.js)
// Вывести в консоль массив имен файлов из папки files
// Если папки files нет -> Error('FS operation failed')

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function list() {
  const filesDir = path.join(__dirname, 'files');

  try {
    const names = await fs.readdir(filesDir);
    console.log(names);
  } catch (e) {
    throw new Error('FS operation failed');
  }
}

list();

