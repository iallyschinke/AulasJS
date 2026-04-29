// Escopo em JavaScript
// O escopo determina a visibilidade e acessibilidade de variaveis
// e funções em diferentes partes do código.
// Existem dois tipo principais de escopo: global e local (ou de função).

// Escopo Global
let escopoGlobal = "Eu sou uma variável Global";

function mostrarEscopoGlobal() {
  let escopoLocal = "Eu sou uma variável Local";
  console.log(escopoLocal); // Acessível dentro da função
}

mostrarEscopoGlobal(); // Chama a função para mostrar o escopo global
console.log(escopoLocal); // Erro: variável não acessível fora da função
console.log(escopoGlobal); //// Acessível fora da função
