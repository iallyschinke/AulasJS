const precoEtanol = 4.5;
const precoGasolina = 5.89;
const tipoCombustivel = "gasolina";
const gastoMedio = 10;
const distancia = 112;

if (tipoCombustivel === "etanol") {
  valorGasto = (distancia / gastoMedio) * precoEtanol;
} else {
  valorGasto = (distancia / gastoMedio) * precoGasolina;
}

console.log(
  "O valor gasto para percorrer " +
    distancia +
    " km é: R$ " +
    valorGasto.toFixed(2),
);
