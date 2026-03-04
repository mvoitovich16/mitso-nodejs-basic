// Задание: File system (create.js)
// Нужно создать files/fresh.txt с текстом "I am fresh and young"
// Если файл уже есть -> Error('FS operation failed')

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function create() {
  const filesDir = path.join(__dirname, 'files');
  const filePath = path.join(filesDir, 'fresh.txt');

  try {
    await fs.mkdir(filesDir, { recursive: true });

    // 'wx' - создать файл только если его нет
    const handle = await fs.open(filePath, 'wx');
    await handle.writeFile('I am fresh and young');
    await handle.close();
  } catch (e) {
    throw new Error('FS operation failed');
  }
}

// чтобы можно было просто запускать: node ./src/fs/create.js
create();

