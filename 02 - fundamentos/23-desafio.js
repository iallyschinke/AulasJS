// Exemplo 1
const numeros = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  if (numero % 2 === 0) {
    console.log("O número é par " + numero);
  } else if (numero % 1 === 0) {
    console.log("O número é impar " + numero);
  }
}

// Exemplo 2

const mediaaAritmetica = (numeros) => {
  if (!numeros.length) return 0;
  const soma = numeros.reduce((acc, valor) => acc + valor, 0);
  return soma / numeros.length;
};

console.log("Média 1:", mediaaAritmetica([10, 3, 5, 3]));
console.log("Média 2:", mediaaAritmetica([10, 20, 30]));
console.log("Média 3:", mediaaAritmetica([5, 7, 9, 10]));

// Exemplo 3

const maiusculo = (texto) => {
  return texto.toUpperCase();
};
console.log(maiusculo("Olá") + ", me chamo Ially.");
console.log(
  "aqui não quero maiusculo." +
    maiusculo("Mais aqui eu quero maiusculo, se vire."),
);

// Exemplo 4

const ehPrimo = (numero) => {
  if (numero <= 1) return false;
  if (numero === 2) return true;
  if (numero % 2 === 0) return false;

  const limite = Math.sqrt(numero);
  for (let i = 3; i <= limite; i += 2) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
};

console.log("2 é primo ?", ehPrimo(2)); // true
console.log("4 é primo ?", ehPrimo(4)); // false
console.log("17 é primo ?", ehPrimo(17)); // true
console.log("20 é primo ?", ehPrimo(20)); // false

// Exercicio 1 igual o professor

function isPar(num) {
  return num % 2 === 0;
}
console.log(isPar(4)); // true
console.log(isPar(7)); // false

// Exercicio 2 igual o professor

function mediaAritmetica(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma / arr.length;
}
console.log(mediaAritmetica([2, 4, 6, 8])); // 5
console.log(mediaAritmetica([8, 8, 6, 8])); // 7.5

// Exercicio 3 igual o professor

function converterParaMaiusculo(str) {
  return str.toUpperCase();
}

console.log(converterParaMaiusculo("olá")); // "OLÁ"
console.log(converterParaMaiusculo("mundo")); // "MUNDO"

// Exercicio 4 igual o professor
