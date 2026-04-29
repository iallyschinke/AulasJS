// Estrutura de repetição for...of
// O for...of é uma estrutura de repetição introduzida no ECMAScript
//2015 (ES6) que permite iterar sobre elementos de objetos iteráveis,
// como arrays, strings, mapas, conjuntos, entre outros.
//Ele é especialment útil para percorrer coleções de dados de forma
// mais simples e legível.

//Exemplo de uso do for...of com um array
const listaDeEmails = [
  "iallyschinke@gmail.com",
  "marciocoutinho@gmail.com",
  "senacal@gmail.com",
];

for (let email of listaDeEmails) {
  console.log(`Enviando email para: ${email}`);
}

//Exemplo de uso do for...of com uma string
const nome = "Ially Schinke";
for (let char of nome) {
  console.log(char);
}
