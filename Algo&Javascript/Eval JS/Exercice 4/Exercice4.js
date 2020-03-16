var j = 0;
var m = 0;
var v = 0;

do {
    var age = parseInt(prompt("Quel est votre âge ?"));
    if (age < 20){
        j++
    }
    else if(age >= 20 && age <= 40){
        m++
    }
    else if(age > 40 && age < 100){
        v++
    }
    else { }

}while(age <= 100)
alert("Il y'a " + j + " de personnes de moins de 20 ans, " + m + " personnes entre 20 et 40 "
+ v + " personne de plus de 40 ans")