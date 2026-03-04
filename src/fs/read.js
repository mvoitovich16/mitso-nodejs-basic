// Задание: File system (read.js)
// Вывести содержимое files/fileToRead.txt в консоль
// Если файла нет -> Error('FS operation failed')

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function read() {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log(data);
  } catch (e) {
    throw new Error('FS operation failed');
  }
}

read();

