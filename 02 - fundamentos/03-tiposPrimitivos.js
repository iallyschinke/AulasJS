// Tipos Primitivos

// String
// Number
// Boolean
// Undefined
// Null
// Symbol

// String: Representa uma sequência de caracteres.
// //Pode ser delimitada por aspas simples (' '), aspas duplas (" ") ou crases (` `).

let nome = "Ially Schinke"; // declaração de uma variável do tipo string usando aspas duplas
let nome2 = "Adele";
let nome3 = "João";
let nome4 = `Maria`;

// Number: Representa um valor numérico, seja inteiro ou decimal.

let idade = 30; // declaração de uma variável do tipo number com um valor
let altura = 1.75; // declaração de uma variável do tipo number com um valor decimal

// Boolean: Representa um valor lógico que pode ser verdadeiro (true) ou falso (false).

let isStudent = true; // declaração de uma variável do tipo boolean com o valor true
let isMarried = false; // declaração de uma variável do tipo boolean com o valor false

let eEstudante = true;
let eCasado = false;

// Undefined: Representa uma variável que foi declarada, mas ainda não foi atribuída a um valor.

let endereco; // declaração de uma variável sem atribuição, o que a torna undefined
let telefone;
console.log(endereco);

// Null: Representa a ausência intencional de um valor.
// // É um valor atribuído a uma variável para indicar que ela não tem um valor válido.

let salario = null; // declaração de uma variável do tipo null, indicando que ela não tem um valor válido

// Symbol: Representa um valor único e imutável,
// geralmente usado como identificador para propriedades de objetos.

let id = Symbol("id"); // declaração de uma variável do tipo symbol com uma descrição "id"
let id2 = Symbol("id"); // declaração de outra variável do tipo symbol com a mesma descrição "id"

console.log(nome);
console.log(nome2);
console.log(nome3);
console.log(nome4);
console.log(idade);
console.log(altura);
console.log(isStudent);
console.log(isMarried);
console.log(eEstudante);
console.log(eCasado);
console.log(salario);
console.log(id);
console.log(id2);
console.log(id === id2); // comparação entre os dois símbolos, que resultará em false, pois cada símbolo é único e imutável
