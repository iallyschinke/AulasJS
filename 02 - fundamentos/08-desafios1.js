let nome = "Ially";
let idade = 27;

console.log(`${nome} ${idade}`);

let mensagem = "Olá, meu nome é " + nome + " e eu tenho " + idade + " anos.";
console.log(mensagem);

let pessoa = {
  nome: "Ially",
  idade: 27,
  profissao: "Atendente de Telemarketing",
  hobby: "Tocar Violão, Guitarra e treinar Judô",
  taTrabalhando: true,
  saudacao: function () {
    console.log(
      "Olá, meu nome é " +
        this.nome +
        " e estou trabalhando de: " +
        this.profissao +
        " e quero me tornar um desenvolverdor Full-Stack.",
    );
  },
};

console.log(pessoa);
pessoa.saudacao();

let nota = 6;
if (nota > 6) {
  console.log("Foi aprovado");
} else if (nota >= 1 && nota < 5) {
  console.log("foi reprovado");
} else {
  console.log("Foi aprovado com ressalvas");
}

console.log(nota);
