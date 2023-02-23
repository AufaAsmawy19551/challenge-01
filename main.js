const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question('Masukkan Operasi: ', input => {
  console.log(input);
});