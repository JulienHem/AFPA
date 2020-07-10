
bouton.addEventListener("click", function() { // PERMET L'ENVOI DE L'EXO AU CLIC
    const num = document.getElementById("num").value // ON VA CHERCHER LA VALEUR DE CE QU'IL Y'A DANS L'INPUT
    const a = num % 2;

    if (a == 0) { // VA FAIRE LA DIFFERENCIATION ENTRE PAIR ET IMPAIR
        window.alert("Nombre pair")
    }
    else 
    window.alert("Nombre impair");

});