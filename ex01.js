const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite um número: '));

if(!numero || !numero instanceof Number) return console.log('Valor inválido!');
if(numero % 2 === 0) return console.log('O número é par!');

console.log('O número é ímpar!');
