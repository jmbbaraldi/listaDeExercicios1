const prompt = require('prompt-sync')();

const numeroMacas = Number(prompt('Quantas maçãs você comprou? '));
let preco = 0.30;
let custoTotal;

if (numeroMacas => 12) {
    preco = 0.25;
    custoTotal = numeroMacas * preco;
    console.log(`O custo total é R$ ${custoTotal.toFixed(2)} (Preço promocional)`);
}  else {
    custoTotal = numeroMacas * preco;
    console.log(`O custo total é R$ ${custoTotal.toFixed(2)} (Preço normal)`);
}