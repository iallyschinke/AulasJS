// Estruturas condicionais em JavaScript
// if, else if, else

// Exemplo 1: Verificar se um número é positivo, negativo ou zero
let numero = 2;

if (numero > 0) {
  console.log("o número é positivo");
} else if (numero < 0) {
  console.log("o número é negativo");
} else {
  console.log("o número é zero.");
}

console.log(numero);

// Exemplo 2: Verificar se uma pessoa é maior de idade
let idade = 18;
if (idade < 18) {
  console.log("A pessoa é menor de idade.");
} else if (idade >= 18 && idade < 65) {
  console.log("A pessoa é adulta.");
} else {
  console.log("A pessoa é idosa.");
}
