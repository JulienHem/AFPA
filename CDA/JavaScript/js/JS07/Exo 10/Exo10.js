// EXERCICE 7


bouton.addEventListener("click", function() { // PERMET L'ENVOIE DE L'EXO AU CLIC
let message;
let nb = document.getElementById("nbre").value; // RECUPERE LA VALEUR
for (let n = 2; n < nb; n++) {
  if (nb % n === 0)  // PERMET DEDIFFERENCIER SI UNE VALEUR EST PREMIER OU NON
  {
   message = nb + " est pas premier ";
    break;
  }
}

if (message) {
    alert(message)
}
else {
    alert(nb + " est premier");
}

});
