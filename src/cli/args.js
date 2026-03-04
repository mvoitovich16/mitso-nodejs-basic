// Задание: Command line interface (args.js)
// Аргументы приходят как: --propName value --prop2Name value2
// Вывести в формате: propName is value, prop2Name is value2

export function parseArgs() {
  const args = process.argv.slice(2);
  const out = [];

  for (let i = 0; i < args.length; i += 2) {
    const rawKey = args[i];
    const value = args[i + 1];
    const key = rawKey.startsWith('--') ? rawKey.slice(2) : rawKey;
    out.push(`${key} is ${value}`);
  }

  console.log(out.join(', '));
}

parseArgs();

