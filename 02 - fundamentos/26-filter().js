// filter() - filtra os elementos de um array com base em uma
// condição e retorna um novo array com os elementos que atendem
// a essa condição.

const pessoas = [
  { nome: "João", idade: 17 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 35 },
];

const pessoaMaioresDeIdade = pessoas.filter((pessoa) => pessoa.idade >= 18);
console.log(pessoaMaioresDeIdade);
