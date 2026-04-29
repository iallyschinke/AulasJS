// Funções Anônimas
// São funções em nome, geralmente atribuídas a variáveis ou passadas
// como argumentos para outras funções

// Exemplo 1: Atribuindo uma função anônima a uma variável
const saudacao = function (nome) {
  return `Olá, ${nome}!`;
};

console.log(saudacao("Maria")); // Saída: Olá, Maria!

// Exemplo 2: Passando uma função anônima como argumento para outra função
setTimeout(function () {
  console.log("Esta mensagem será exibida após 2 segundos.");
}, 2000);
