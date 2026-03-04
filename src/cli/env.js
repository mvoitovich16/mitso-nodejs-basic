// Задание: Command line interface (env.js)
// Вывести переменные окружения с префиксом MITSO_ в формате:
// MITSO_name1=value1; MITSO_name2=value2

export function parseEnv() {
  const pairs = [];

  for (const key of Object.keys(process.env)) {
    if (!key.startsWith('MITSO_')) continue;
    pairs.push(`${key}=${process.env[key]}`);
  }

  console.log(pairs.join('; '));
}

parseEnv();

