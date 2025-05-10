const prompt = require('prompt-sync')();

const numero = Number(prompt('Digite um número para o cálculo de fatorial: '));
let fatorial = 1;

for (let i = numero; i > 1; i--) {
    fatorial *= i;
}

console.log(`O fatorial de ${numero} é: ${fatorial}`);
