        // EXERCICE 3

var nb1 = parseInt(window.prompt("Premier nombre"));
var ope = window.prompt("Saisir un opérateur");
var nb2 = parseInt(window.prompt("Deuxième nombre"));

if (ope != "+" && ope != "-" && ope != "*" && ope != "/") {
    window.alert("Entrez un opérateur correct");
}

else if (ope == "/" && nb2 == 0) {
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
