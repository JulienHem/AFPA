// On rentre les 2 valeurs qui nous donnerons la somme
var n = parseInt(prompt("Insérez votre votre chiffre"));
var c = parseInt(prompt("Insérez votre second chiffre"))
console.log("Somme des nombres inférieur à N");
console.log("=========================");

do {
    var result = n + c // Calcul de la somme de n et c
    alert("Nombre " + n + "+" + c + "=" + result)
    n-- // Décrémentation, ce qui permet d'aller du chiffre rentré jusqu'à 0

}while(n >= 0) // Permet à N de ne pas aller en dessous de 0