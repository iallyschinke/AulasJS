// Estrutura de repetição - for in

// for in - lê os indices ou chaves do objeto

const pessoa = {
  nome: "Ially",
  idade: 27,
  profissao: "Programador",
};

for (const atributo in pessoa) {
  console.log("O atributo " + atributo + " = " + pessoa[atributo]);
}
