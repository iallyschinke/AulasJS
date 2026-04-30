// reduce() - é um metodo de array que reduz uma coleção de valores
// a um único valor, aplicando uma função a cada elemento da coleção.
// Ele é frequentemente usado para somar número, concatenar strings
// ou acumular resultados de alguma forma.

const funcionarios = [
  { nome: "João", salario: 3000 },
  { nome: "Maria", salario: 4000 },
  { nome: "Pedro", salario: 2500 },
];

// Exemplo 1: Somar os salários dos funcionários

const totalSalarios = funcionarios.reduce((acumulador, funcionario) => {
  return acumulador + funcionario.salario;
}, 0); // o segundo argumento (0) é o valor inicial do acumulador

console.log(`Total de salários: R$ ${totalSalarios}`);
