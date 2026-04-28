// Estruturas condicionais - Parte 2
// Switch case: é uma estrutura de controle de fluxo que
//  permite executar diferentes blocos de código
//  com base no valor de uma expressão.
//  Ele é útil quando temos várias condições para verificar, tornando o código mais legível e organizado.

let fruta = "Laranja";

switch (fruta) {
  case "Maçã":
    console.log(" O valor da maçã são R$ 2,00");
    break;
  case "Banana":
    console.log(" O valor da banana são de R$1,50");
    break;
  case "Laranja":
    console.log(" O valor da laranja são de R$1,00");
    break;
  default:
    console.log(" Fruta não encontrada");
}
