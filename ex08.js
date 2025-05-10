const prompt = require('prompt-sync')();

const num1 = Number(prompt('Insira o primeiro número: '));
const num2 = Number(prompt('Insira o segundo número: '));

const numeros = [num1, num2];

console.log('Ordem crescente: ' + numeros.sort((a, b) => a - b).join(', '));
