
        //  EXERCICE 4

bouton.addEventListener("click", function(){ // PERMET L'ENVOIE DE L'EXO AU CLIC

    let situation = document.getElementById("yes").checked; // VA CHERCHER LA VALEUR ET PERMET DE VERIFIER SI LE BOUTON RADIO EST COCHE OU NON
    let = 0;

    if (situation) {  // PERMET DE PARTIR SUR CETTE BASE POUR CONTINUER LES CALCULS
        p = 25;
    }
    else {
        p = 20
    }

    var kid = parseInt(document.getElementById("kid").value); // ON VA CHERCHER LA VALEUR DANS L'INPUT

    if (kid >= 1){
        p = p + kid * 10
    }

    var sal = parseInt(document.getElementById("salaire").value); // ON VA CHERCHER LA VALEUR DANS L'INPUT
    if (sal <= 1200) {
        p = p + 10;
    }

    if (p >= 50)
    {
        window.alert("La participation est plafonée à 50%")
    }

    else {
        window.alert("Vous avez le droit à " + p + "%" + " de participation")
    }



});