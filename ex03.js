const prompt = require('prompt-sync')();

const nota = Number(prompt('Digite a nota do aluno (0 a 10): '));

if(nota < 7) {
    console.log('Reprovado!');
} else if (nota <= 10) {
    console.log('Aprovado!');
} else {
    console.log('Valor inválido!');
}
