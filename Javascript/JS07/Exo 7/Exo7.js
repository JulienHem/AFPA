// EXERCICE 7

var n = 0
var result = true;
var nb = window.prompt("Saisir un nombre");

for (n = 2; n < nb; n++) {
  if (nb % n == 0) 
  {
    result = false;
    alert(nb + " est pas premier "+result)
    break;
  }
  else 
  alert(nb + " est premier "+result)
  break;
}