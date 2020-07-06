// EXERCICE 3

var n1 = parseInt(window.prompt("Saisir le premier nombre"));
var n2 = parseInt(window.prompt("Saisir le deuxième nombre"));
var a = 0
console.log("Somme des entiers");
console.log("===================");


if (n1 < n2) {
  do {
    a = a + n1
    n1++;
    console.log(a)
  } while (n1 < n2)
}
else {
  do {
    a = a + n2;
    n2++;
    console.log(a)
  } while (n1 > n2);
}

console.log("Fin de la boucle");