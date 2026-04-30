// find () - encontra o primeiro elemento que atende uma condição

const pessoas = [
  { nome: "João", idade: 17 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 35 },
];

const pessoaEncontrada = pessoas.find((pessoa) => pessoa.nome === "Maria");
console.log(pessoaEncontrada);
