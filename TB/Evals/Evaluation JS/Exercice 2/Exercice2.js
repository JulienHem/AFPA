// On rentre les 2 valeurs qui nous donnerons la somme
var n = parseInt(prompt("Insérez votre chiffre"));
var c = -n;

do {
    
    result = c += n // Calcul de la somme de n et c
    n-- // Décrémentation, ce qui permet d'aller du chiffre rentré jusqu'à 0

}while(n > 0) // Permet à N de ne pas aller en dessous de 0
alert("La somme des entiers inférieur au nombre saisie est : " + result)