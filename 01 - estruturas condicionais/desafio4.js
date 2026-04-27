const guitarra = 500;
const quantidadeComprada = 5;
const desconto = 0.2;

const valorTotal = guitarra * quantidadeComprada * (1 - desconto);

console.log("O valor total da compra é: R$ " + valorTotal.toFixed(2));
