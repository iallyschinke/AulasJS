const precoKWH = 0.28;
const consumoKWH = 500;
const taxaAdicional = 20;

const valorTotal = precoKWH * consumoKWH + taxaAdicional;

console.log("O valor total da conta de energia é: R$ " + valorTotal.toFixed(2));
