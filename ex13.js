const prompt = require('prompt-sync')();

let soma = 0;
let cont = 0;
let numero;

do {
    numero = parseFloat(prompt('Digite um número decimal (ou 0 para sair): '));

    if (numero !== 0) {
        soma += numero;
        cont ++;
    }
} while (numero !== 0);

if(cont > 0) {
    let media = soma / cont;
    console.log('Média aritmética: ' + media.toFixed(2));
} else {
    console.log('Nenhum número foi inserido');
}