const prompt = require('prompt-sync')();

console.log('Calculadora básica!');
console.log('Escolha uma operação:');
console.log('1. Adição (+)');
console.log('2. Subtração (-)');
console.log('3. Multiplicação (*)');
console.log('4. Divisão (/)');
const opcao = Number(prompt('Digite a opção desejada: '));

const n1 = Number(prompt('Digite o primeiro número: '));
const n2 = Number(prompt('Digite o segundo número: '));

switch (opcao) {
    case 1:
        console.log(`\nResultado = ${n1 + n2}`);
        break;
    case 2:
        console.log(`\nResultado = ${n1 - n2}`);
        break;
    case 3: 
        console.log(`\nResultado = ${n1 * n2}`);
        break;
    case 4:
        console.log(`\nResultado = ${n1 / n2}`);
        break;
    default:
        console.log('Opção inválida!');
        break;
}
