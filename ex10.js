const prompt = require('prompt-sync')();

const num = Number(prompt('Digite o número a ser lido: '));

for (let i = 0; i < 10; i++) {
    console.log(num);
}
