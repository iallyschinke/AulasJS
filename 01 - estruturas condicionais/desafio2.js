const bandeirada = 10;
const precoKmRodado = 5;
const distanciaKm = 30;

const valorTotal = bandeirada + precoKmRodado * distanciaKm;
console.log(
  "O valor total da corrida é: R$ " + valorTotal.toFixed(2),
  "onde rodou " + distanciaKm + " km",
);
