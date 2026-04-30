// every () - Verifica se todos os elementos do array passam por um teste
// retorna true ou false

const alunos = [
  { nome: "João", nota: 7.5 },
  { nome: "Maria", nota: 8.0 },
  { nome: "Pedro", nota: 7 },
];

const todosAprovados = alunos.every((aluno) => aluno.nota >= 7);
console.log(todosAprovados);
