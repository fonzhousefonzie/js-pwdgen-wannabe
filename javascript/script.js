const nomeUtente = prompt('Come ti chiami?');
const cognomeUtente = prompt('Qual è il tuo cognome?');
const coloreUtente = prompt('Qual è il tuo colore preferito?');

const newPassword = nomeUtente + cognomeUtente + coloreUtente + '22';

document.getElementById("newPassword").innerHTML = newPassword.toLowerCase().replace(/ /g, "") ;