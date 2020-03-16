// EXERCICE 4

var s = 0;
var m = 0;
console.log("Somme et moyenne");
console.log("=======================");

do {
  var n1 = parseInt(window.prompt("Saisir le premier nombre"));

  if (n1 == 0) {
    break;
  }

  s = s + n1
  m = (m + n1) / 2

  console.log("La somme est de "  + s + " et la moyenne est de " + m )
} while (n1 != 0)
console.log("Fin de la boucle")