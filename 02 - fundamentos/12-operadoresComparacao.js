// Operadores Lógicos de comparação
// Em JavaScript, os operadores de comparação são usados para
// comparar dois valores e retornar um valor booleano (true ou false)
// com base na comparação. Aqui estão os principais operadores de comparação:

// 1. Igualdade (==): Verifica se os valores são iguais, ignorando o tipo de dado.
// 2. Estritamente Igual (===): Verifica se os valores são iguais e do mesmo tipo de dado.
// 3. Desigualdade (!=): Verifica se os valores são diferentes, ignorando o tipo de dado.
// 4. Estritamente Desigual (!==): Verifica se os valores são diferentes ou de tipos de dados diferentes.
// 5. Maior que (>): Verifica se o valor à esquerda é maior que o valor à direita.
// 6. Menor que (<): Verifica se o valor à esquerda é menor que o valor à direita.
// 7. Maior ou igual (>=): Verifica se o valor à esquerda é maior ou igual ao valor à direita.
// 8. Menor ou igual (<=): Verifica se o valor à esquerda é menor ou igual ao valor à direita.

//Igualdade (==)
console.log("Igual (==)");
console.log(5 == "5"); // True, porque realiza coerção de tipo
console.log(5 == 5); // True
console.log(5 == 10); // False

// Estritamente Igual (===)
console.log("Estritamente Igual (===)");
console.log(5 === "5");
console.log(5 === 5);
console.log(5 === 10);

// Desigualdade (!=)
console.log("Desigualdade (!=)");
console.log(5 != "5");
console.log(5 != 5);
console.log(5 != 10);

// Estritamente Desigual (!==)
console.log("Estritamente Desigual (!==)");
console.log(5 !== "5");
console.log(5 !== 5);
console.log(5 !== 10);

// Maior que (>)
console.log("Maior que (>)");
console.log(10 > 5);
console.log(5 > 10);
console.log(5 > 5);

// Menor que (<)
console.log("Menor que (<)");
console.log(10 < 5);
console.log(5 < 10);
console.log(5 < 5);

// Maior ou igual (>=)
console.log("Maior ou igual (>=)");
console.log(5 >= 10);
console.log(5 >= 5);
console.log(5 >= 10);

// Menor ou igual (<=)
console.log("Menor ou igual (<=)");
console.log(5 <= "5");
console.log(5 <= 5);
console.log(5 <= 10);
