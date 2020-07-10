// EXERCICE 7

var n = 0
var result = true;

bouton.addEventListener("click", function() { // PERMET L'ENVOIE DE L'EXO AU CLIC

var nb = document.getElementById("nbre").value; // RECUPERE LA VALEUR

for (n = 2; n < nb; n++) {
  if (nb % n == 0)  // PERMET DEDIFFERENCIER SI UNE VALEUR EST PREMIER OU NON
  {
    result = false;
    alert(nb + " est pas premier ")
    break;
  }
  else 
  alert(nb + " est premier ")
  break;
}
});