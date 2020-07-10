
let resultat = 0
let nb = document.getElementById("nbre").value

bouton.addEventListener("click", function() { // PERMET L'ENVOIE DE L'EXO AU CLIC


    for (i = 0; i <= 10; i++) { // PERMET D'AFFICHER PLUSIEURS RESULTATS DANS UNE MEME ALERT
        resultat = resultat + "\n" + i +"x" + nb + " = " + i*nb; // ON STOCK RESULTAT POUR POUVOIR RECUPERER LA VALEUR EN BOUCLE ET DONC DE L'AFFICHER PLUSIEURS FOIS
        
    }
    alert(resultat)
});