// Этот файл запускается как child process.
// Просто выводит args и дальше прокидывает stdin -> stdout.

process.stdout.write(`args: ${process.argv.slice(2).join(' ')}\n`);
process.stdin.pipe(process.stdout);

