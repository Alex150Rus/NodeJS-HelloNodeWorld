const ansi = require('ansi');
const cursor = ansi(process.stdout);

cursor.red().bg.green().write('Hello Node world').bg.reset().write('\n');
cursor.beep();
cursor.reset();