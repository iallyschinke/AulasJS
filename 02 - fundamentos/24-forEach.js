// For Each é um método de array que executa um função para cada
// elemento do array. Ele é usado para iterar sobre os elementos do
// array e realizar uma ação para cada um deles. O método forEach
// não retorna um novo array, ele apenas executa a função para cada
// elemento do array original.
const pessoas = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 35 },
];

pessoas.forEach((pessoa, indice) => {
  console.log(pessoa, indice);
});
