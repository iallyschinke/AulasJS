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
