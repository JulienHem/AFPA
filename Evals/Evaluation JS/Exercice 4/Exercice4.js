// Variables qui vont définir les âges
var j = 0;
var m = 0;
var v = 0;
// Début de la boucle
do {
    var age = parseInt(prompt("Quel est votre âge ?")); // Saisie de l'âge
    if (age < 20){ // Incrémentation des différentes variables 
        j++
    }
    else if(age >= 20 && age <= 40){
        m++
    }
    else if(age > 40 && age < 100){
        v++
    }
    else { }

}while(age <= 101) // La boucle s'arrête si on saisit 100 ou +
alert("Il y'a " + j + " de personnes de moins de 20 ans, " + m + " personnes entre 20 et 40 "
+ v + " personne de plus de 40 ans")