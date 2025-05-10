const prompt = require('prompt-sync')();

const num = Number(prompt('Insira um número: '));

for(let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}