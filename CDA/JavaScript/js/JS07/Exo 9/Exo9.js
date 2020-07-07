// Variables qui vont définir les âges
let j = 0;
let m = 0;
let v = 0;

bouton.addEventListener("click", function() {
    var age = document.getElementById("age").value; // Saisie de l'âge
    if (age < 20){ // Incrémentation des différentes variables 
        j++
    }
    else if(age >= 20 && age <= 40){
        m++
    }
    else if(age > 40 && age < 100){
        v++
    }
    else { 
        alert("Il y'a " + j + " de personnes de moins de 20 ans, " + m + " personnes entre 20 et 40 "
+ v + " personne de plus de 40 ans")
    }

 // L'alerte s'afffiche si on saisit 100 ou +

});
