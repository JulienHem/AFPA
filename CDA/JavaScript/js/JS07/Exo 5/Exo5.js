// EXERCICE 5

var n = parseInt(window.prompt("Entrez le 1er nombre"))
var x = parseInt(window.prompt("Entrez le 2eme nombre"))
console.log("Résultats")
console.log("======================")

for (n = 0; n <= 10; n++) {

  result = n * x
  console.log(n + "*" + x + "=" + result)
}
console.log("Fin de la boucle")