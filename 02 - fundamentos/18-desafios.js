const frutas = ["maçã", "banana", "laranja", "uva", "melancia"];
console.log(frutas.length);

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

let usuario = {
  nome: "Ially",
  email: "iallyschinke@gmail.com",
};

for (let chave in usuario) {
  console.log(chave + ": " + usuario[chave]);
}

// Desafio 4
for (let fruta of frutas) {
  console.log(fruta);
}

//Desafio 05

function encontrarFruta(fruta) {
  for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === fruta) {
      return "Fruta encontrada";
    }
  }
  return "Fruta não encontrada";
}

console.log(encontrarFruta("maçã"));
console.log(encontrarFruta("jaca"));
