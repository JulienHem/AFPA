// EXERCICE 4


var a = 0
var m = 0
console.log("Somme et moyenne");
console.log("=======================");

do {
  var n1 = parseInt(window.prompt("Saisir le premier nombre"));

  if (n1 == 0) {
    break;
  }

  a = a + n1
  m = (m + n1) / 2

  console.log(m + "   " + a + "   " + n1)
} while (n1 != 0)
console.log("Fin de la boucle")