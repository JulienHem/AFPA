function tri(tabl) { // Permet de faire le tri
    do {
        changed = false; // TANT QUE LE RESULTAT EST FAUX LA BOUCLE EN DESSOUS VA CONTINUER

        for (let i = 0; i < tabl.length - 1; i++) {
            if (tabl[i] > tabl[i + 1]) {
                var tampon = tabl[i + 1]
                tabl[i + 1] = tabl[i]
                tabl[i] = tampon
                changed = true; // SI LE RESULTAT EST VRAI ALORS LA BOUCLE S'ARRETE ET CELA VA PERMETTRE LE TRI
            }
        }
    } while (changed)
}




bouton.addEventListener("click", function () { // PERMET L'ENVOI DE L'EXO AU CLIC
    let num = document.getElementById("num").value;
    tabl = num.split(" "); // PERMET DE DIFFERENCIER LES VALEURS AVEC UN ESPACE
    for (let i = 0; i < tabl.length ; i++) {
        tabl [i] = parseInt(tabl[i]) // INSERT DES RESULTATS DANS LE TABLEAU
    }
    tri(tabl)
    alert(tabl)
}); 