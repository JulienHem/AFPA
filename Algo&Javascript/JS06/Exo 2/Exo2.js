// EXERCICE 2

var year = window.prompt("Date de naissance");
var age = 0;

if (2020 - year < 18)

{ 
    age = 2020 - year
    window.alert("Il est mineur" + " " + "Il a" + " " + age + "ans")

}
else 
{
    window.alert("Il est majeur" +" " + "Il a" + " " + age + "ans")
}