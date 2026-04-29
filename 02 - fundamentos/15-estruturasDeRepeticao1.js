// Estruturas de Repetição 1
//for

//Inicialização; Condição de parda; Incremento/Decremento
for (let i = 0; i < 10; i++) {
  console.log("Executando o for: " + i);
}

const listaDeEmails = [
  "iallyschinke@gmail.com",
  "marciocoutinho@gmail.com",
  "senacal@gmail.com",
];

for (let i = 0; i < listaDeEmails.length; i++) {
  console.log("Enviando Email para: " + listaDeEmails[i]);
}
