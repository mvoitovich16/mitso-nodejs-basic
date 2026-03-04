// Задание: Worker Threads (worker.js)
// Получить число из main, посчитать что-то и отправить обратно.
// Я сделал просто: вернуть квадрат числа (чтоб было видно что посчитал).

import { parentPort } from 'node:worker_threads';

if (!parentPort) {
  throw new Error('No parent port');
}

parentPort.on('message', (num) => {
  try {
    // типа "вычисления"
    const result = Number(num) * Number(num);
    parentPort.postMessage(result);
  } catch (e) {
    throw e;
  }
});

