let precoCombustivel = 5.78; // preço por litro
let distancia = 199; // em km
let consumo = 10; // km por litro

let litrosNecessarios = distancia / consumo; // cálculo dos litros necessários
console.log(
  "Litros necessários para a viagem: " + litrosNecessarios.toFixed(2),
); // Output: Litros necessários para a viagem: 19.90

let custoTotal = litrosNecessarios * precoCombustivel; // cálculo do custo total
console.log("Custo total da viagem: R$ " + custoTotal.toFixed(2), "reais"); // Output: Custo total da viagem: R$ 50.00
