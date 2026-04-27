// Objetos são coleções de propriedades,
// onde cada propriedade é uma associação
// entre um nome (chave) e um valor.
//  Eles são usados para armazenar e organizar dados de forma estruturada.

// Criando um objeto

let pessoa = {
  nome: "Ially",
  idade: 27,
  profissao: "Desenvolvedor",
  taTrabalhando: true,
  saudacao: function () {
    console.log("Olá, meu nome é " + this.nome);
  },
};

// Acessando propriedades do objeto
console.log(pessoa.nome); // Acessando a propriedade 'nome'
console.log(pessoa.idade); // Acessando a propriedade 'idade'
console.log(pessoa.profissao); // Acessando a propriedade 'profissao'
console.log(pessoa.taTrabalhando); // Acessando a propriedade 'taTrabalhando'
console.log(pessoa);

pessoa.saudacao(); // Chamando o método 'saudacao'
