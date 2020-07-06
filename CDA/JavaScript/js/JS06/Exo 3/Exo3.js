bouton.addEventListener("click", function() {

    let nb1 = parseInt(document.getElementById("nombre1").value);
    let ope = document.getElementById("opé").value;
    let nb2 = parseInt(document.getElementById("nombre2").value);

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

});