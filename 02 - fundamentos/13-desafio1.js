let diaSemana = Math.floor(Math.random() * 7);
let nomeDia;

switch (diaSemana) {
  case 0:
    nomeDia = "Hoje é Domingo";
    break;
  case 1:
    nomeDia = "Hoje é Segunda";
    break;
  case 2:
    nomeDia = "Hoje é Terça";
    break;
  case 3:
    nomeDia = "Hoje é Quarta";
    break;
  case 4:
    nomeDia = "Hoje é Quinta";
    break;
  case 5:
    nomeDia = "Hoje é Sexta";
    break;
  case 6:
    nomeDia = "Hoje é Sábado";
    break;
  default:
    ultimoDia = "Número inválido, não existe mais dia na semana";
}

console.log(nomeDia);

// Desafio 2

let num = 5;

if (num > 10 && num < 20) {
  console.log("O número está entre 10 e 20");
} else if (num === 5) {
  console.log("Seu número é igual a 5");
} else {
  console.log("Seu número é nada");
}

// Desafio 3

let nome = "Ially";
let sobreNome = "Schinke";

if (nome === sobreNome) {
  console.log("Os nomes são iguais");
} else {
  console.log("Os nomes são diferentes");
}
