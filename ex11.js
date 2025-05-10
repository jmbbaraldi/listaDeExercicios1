const prompt = require('prompt-sync')();
let soma = 0;

for (let i = 0; i < 5; i++) {
    const num = Number(prompt('Digite o número a ser lido: '));
    soma += num;
    console.log(`A soma até agora é: ${soma}`);
}
