// map() - percorre um array e retorna um novo array com os elementos
// modificados

const pessoas = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 35 },
];

const nomes = pessoas.map((pessoa) => {
  return {
    nome: pessoa.nome,
  };
});
console.log(nomes);
