const prompt = require('prompt-sync')();

const idade = Number(prompt('Digite sua idade: '));

if(!idade || !idade instanceof Number) return console.log('Valor inválido!');

if(idade < 12) {
    console.log('Você é uma criança!');
} else if(idade < 18) {
    console.log('Você é um adolescente!');
} else if (idade < 60) {
    console.log('Você é um adulto!');
} else {
    console.log('Você é um idoso!');
}