const prompt = require('prompt-sync')();

const ladoA = Number(prompt('Insira o lado A do triângulo: '));
const ladoB = Number(prompt('Insira o lado B do triângulo: '));
const ladoC = Number(prompt('Insira o lado C do triângulo: '));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if (ladoA === ladoB && ladoA !== ladoC || ladoB === ladoC && ladoB !== ladoA || ladoA === ladoC && ladoA !== ladoB) {   
        console.log('O triângulo é isósceles!');
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        console.log('O triângulo é escaleno!');
    } else if (ladoA === ladoB && ladoB === ladoC){
        console.log('O triângulo é equilátero!');
    } else {
        console.log('Algum erro ocorreu, tente novamente!');
    }
} else {
    console.log('Os lados informados não formam um triângulo!');
}
