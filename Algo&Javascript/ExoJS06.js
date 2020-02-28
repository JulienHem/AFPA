// EXERCICE 0

// EXE 1
// var temp = window.prompt("Saisissez la température");

// if (temp > 38)
// {
//     window.alert("Le patient a de la fièvre")
// }


// EXE 2
// var temp = window.prompt("Saisissez la température");
// var tens = window.prompt("Saissez la tension") 

// if (temp > 38 && tens > 25)
// {
//     window.alert("Le patient va perdre patience")
// }


// EXE 3
// var nom = window.prompt("Saisissez le nom du patient");

// if (nom)
// {
//     window.alert("Econduire l'olibrius")
// }

// EXE 4
// var temps = window.prompt("Saisissez la température")
// var tens =  window.prompt("Saisissez la tension")
// var pouls = window.prompt("Saisissez le pouls")

// if (temps > 42 || (tens < 25 && pouls > 100))
// {
//     window.alert("Prévenir la famille")
// }


// EXE 5
// var temp = window.prompt("Saisissez la température")
// var tens = window.prompt("Saisissez la tension")

// if (temp > 40 || tens >= 25)
// {
//     window.alert("Hospitaliser le patient")
// }

// EXE 6
// var pat = window.prompt("Saisissez le nom du patient");
// var pouls = window.prompt("Saisissez le pouls"),

// if (pat && pouls == 0)
// {
//     window.alert("Appeler le curé")
// }


//  EXERCICE 1

// var user = window.prompt("Choisissez un nombre");
// var a = user % 2;

// if (a == 0)
// {
//     window.alert("Nombre pair")
// }
// else window.alert("Nombre impair")

// EXERCICE 2

// var year = window.prompt("Date de naissance");
// var age = 0;

// if (2020 - year < 18)

// { 
//     age = 2020 - year
//     window.alert("Il est mineur" + " " + "Il a" + " " + age + "ans")

// }
// else 
// {
//     age = 2020 - year
//     window.alert("Il est majeur" +" " + "Il a" + " " + age + "ans")
// }


// EXERCICE 3

var nb1 = parseInt(window.prompt("Premier nombre"));
var ope = window.prompt("Saisir un opérateur");
var nb2 = parseInt(window.prompt("Deuxième nombre"));

if (ope != "+" && ope != "-" && ope != "*" && ope != "/") {
    window.alert("Entrez un opérateur correct");
}

if (ope == "/" && nb2 == 0) {
    window.alert("Erreur");
}

else {
    switch (ope) {
        case "+":
            window.alert(nb1 + nb2);
            break;

        case "-":
            window.alert(nb1 - nb2);
            break;

        case "*":
            window.alert(nb1 * nb2);
            break;

        case "/":
            window.alert(nb1 / nb2);
            break;
    }
}
