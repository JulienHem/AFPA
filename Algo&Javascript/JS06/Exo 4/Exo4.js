
        //  EXERCICE 4

var situation = (window.confirm("Êtes-vous marié?"));
var p = 0

if (situation)
{
    p = 25   
}

else 
{
    p = 20
}

var kid = window.prompt("Combien d'enfants avec-vous ?")

if (kid >= 1)
{
    p = p + kid * 10
}

var sal = window.prompt("Quel est votre salaire")
if (sal <= 1200)
{
    p = p + 10
}

if (p >= 50)
{
    window.alert("La participation est plafonée à 50%")
}

else {
    window.alert("Vous avez le droit à" + " " + p + "%" + " " + "de participation")
}
