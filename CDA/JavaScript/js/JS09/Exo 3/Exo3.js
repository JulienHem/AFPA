



function format(checkpren) { // ON VA LANCER UNE VERIFICATION DU PRENOM ENTREE DANS L'INPUT 
    function switchMAJ(replace) {
        return replace.toLowerCase(); // PERMET DE TROUVER LE PRENOM MEME SI ON SAISIT EN MINUSCULE
    }
    checkpren = checkpren.replace(/é|è|ê/g,"e");
    checkpren = checkpren.replace(/[A-Zé]/g, switchMAJ); // PERMET DE TROUVER LE PRENOM MEME AVEC DES MAJUSCULES
    return checkpren;
}

let tab = ["audrey","aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"]; // ON STOCK LES PRENOMS DANS UN TABLEAU

bouton.addEventListener("click", function() { // PERMET L'ENVOI DE L'EXO AU CLIC

    let prenom = document.getElementById("prénom").value
    let checkpren = format(prenom);
    tab = tab.filter(item => item !== checkpren); // Va créer un autre tableau, moins la valeur entrée dans l'input
    tab.length = 10; // TAILLE MAX DU TABLEAU
    alert(tab);

});
