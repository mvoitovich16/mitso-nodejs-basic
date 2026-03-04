// Задание: Worker Threads (main.js)
// Создать workers = количеству логических ядер.
// Отправить 10,11,12... каждому воркеру.
// Собрать результаты и вывести массив объектов:
// { status: 'resolved'|'error', data: value|null }
// Порядок результатов - как создали воркеры.

import os from 'node:os';
import { Worker } from 'node:worker_threads';

export async function main() {
  const count = os.cpus().length;
  const workerUrl = new URL('./worker.js', import.meta.url);

  const tasks = Array.from({ length: count }, (_, idx) => {
    const worker = new Worker(workerUrl, { type: 'module' });
    const value = 10 + idx;

    return new Promise((resolve) => {
      worker.once('message', (data) => {
        resolve({ status: 'resolved', data });
        worker.terminate();
      });

      worker.once('error', () => {
        resolve({ status: 'error', data: null });
      });

      worker.postMessage(value);
    });
  });

  const results = await Promise.all(tasks);
  console.log(results);
}

main();

