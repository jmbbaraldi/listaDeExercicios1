const prompt = require('prompt-sync')();

const peso =  Number(prompt('Insira seu peso: '));
const altura = Number(prompt('Insira sua altura: '));

const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log('Seu IMC é: ' + imc.toFixed(2) + ' - Abaixo do peso');
} else if (imc >= 18.5 && imc < 24.9)  {
    console.log('Seu IMC é: ' + imc.toFixed(2) + ' - Peso normal');
} else if (imc >= 25 && imc < 29.9) {
    console.log('Seu IMC é: ' + imc.toFixed(2) + ' - Sobrepeso');    
} else if (imc >= 30 && imc < 34.9) {
    console.log('Seu IMC é: ' + imc.toFixed(2) + ' - Obesidade');    
} else {
    console.log('Algum erro ocorreu, tente novamente!');
};