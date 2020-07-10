// EXERCICE 2

bouton.addEventListener("click", function() { // PERMET L'ENVOIE DE L'EXO AU CLIC
    var year = document.getElementById("ddn").value; // ON VA CHERCHER LA VALEUR DE CE QU'IL Y'A DANS L'INPUT


    
    if (year < 18) 
    {
        window.alert("Il est mineur " + "Il a "+ year + " ans")
    } 
    else if (year < 130) { // Permet une limite de l'âge saisie
        window.alert("Il est majeur " + "Il a " + year + " ans")
    }

  
});