bouton.addEventListener("click", function() { // PERMET L'ENVOIE DE L'EXO AU CLIC

    let nb1 = parseInt(document.getElementById("nombre1").value); // RECUPERE LA VALEUR SAISIE DANS L'INPUT AVEC L'ID CORRESPONDANT
    let ope = document.getElementById("opé").value; // RECUPERE LA VALEUR SAISIE DANS L'INPUT AVEC L'ID CORRESPONDANT
    let nb2 = parseInt(document.getElementById("nombre2").value); // RECUPERE LA VALEUR SAISIE DANS L'INPUT AVEC L'ID CORRESPONDANT

    if (ope != "+" && ope != "-" && ope != "*" && ope != "/") { // CONDITION POUR NE PAS RENTRER N'IMPORTE QUEL OPERATEUR
    window.alert("Entrez un opérateur correct");
    }

    else if (ope == "/" && nb2 == 0) { // PERMET DE NE PAS DIVISER PAR 0
        window.alert("Erreur");
    }

    else { // UTILISATION D'UN SWITCH POUR POUVOIR REALISER LES CALCULS
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