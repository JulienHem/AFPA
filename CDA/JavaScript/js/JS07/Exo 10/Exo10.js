// EXERCICE 7

var n = 0
var result = true;

bouton.addEventListener("click", function() {

var nb = document.getElementById("nbre").value;

for (n = 2; n < nb; n++) {
  if (nb % n == 0) 
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