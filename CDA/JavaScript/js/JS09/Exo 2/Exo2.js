// EXERCICE 2

bouton.addEventListener("click", function() {

function GetInteger() { // Lire un entier au clavier
    entier = parseInt(window.prompt("Entrez la taille du tableau"));
}

function InitTab() { // Créer et initialiser l'instance de tableau
    tableau = new Array(entier);
}


function SaisieTab() { // Saisie des différents postes du tableau
    for (i = 0; i < tableau.length; i++) {
        tableau[i] = (parseInt(window.prompt("Entrez vos valeurs")))
        alert(tableau)
        console.log(tableau)
    }
}

function AfficheTab() { // Afficher les postes du tableau
    affichage = tableau
    document.getElementById("classes").innerHTML = "Les postes sont : " + affichage
}

function RechercheTab() { // Afficher le contenu d'un poste dont le rang
    var rang = (parseInt(prompt("Veuillez saisir un rang")))
    tableau[rang]
    alert("Le rang saisi est égal à : " + tableau[rang])
}

function InfoTab() { // Maxi et moyenne des postes
    // Maximum
    alert("Le max est : " + Math.max.apply(null, affichage))

    // Moyenne
    var somme = 0
    for (i = 0; i < tableau.length; i++) {
        somme += tableau[i]
        console.log(somme)
    }
    var moy = somme / tableau.length
    alert("La moyenne est : " + moy)

    console.log(tableau.length)
}

GetInteger()

InitTab()

SaisieTab()


do {
var menu = prompt("1 - Afficher les postes du tableau : " + "\n" + "2 - Choisissez le contenu que vous voulez : " + "\n" + "3 - Maxi et moyenne des postes : " + "\n" + "4 - Annuler");

switch (menu){
    case "1" :
    AfficheTab()
    break;
    case "2" :
    RechercheTab()
    break;
    case "3" :
    InfoTab()
    break;
    case "4" : 
    break;
}
}while (menu != "4")
});