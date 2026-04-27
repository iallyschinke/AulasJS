let pessoa = {
  nome: "Ially",
  idade: 27,
  profissao: "Desenvolvedor",
  taTrabalhando: true,
  saudacao: function () {
    console.log("Olá, meu nome é " + this.nome);
  },
};

// Modificando propriedades do objeto
pessoa.idade = 31;
pessoa.profissao = "Engenheiro de Software";

console.log(pessoa);

// Adicionando novas propriedades ao objeto
pessoa.cidade = "Arapiraca - AL";
console.log(pessoa);

// Deletando propriedades do objeto

delete pessoa.taTrabalhando;
console.log(pessoa);
