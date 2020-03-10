
// .length
// var letableau = ["pomme", "poire", "banane","fraise", "abricot", "topkek"];
// var nb = letableau.length
// console.log("Le tableau contient "+nb+ "éléments"); // Affiche 6

//                         // Parcourir un tableau

// for (var i = 0; i<letableau.length; i++)
// {
//     console.log("Fruit : "+letableau[2])
// }


// TABLEAU MULTIDIMENSIONNELS

// var tabl1 = [];
// // tabl1[0] = ["poireau", "tomate", "carotte"];
// // tabl1[1] = ["pomme", "poire", "banane"];


// var legumes = ["poireau", "tomate", "carotte"];
// var fruits = ["pomme", "poire", "banane"];

// tabl1[0] = legumes;
// tabl1[1] = fruits;

// console.log(tabl1[0][1]);


// EXERCICE 1 

// var tableau = new Array(parseInt(window.prompt("Entrez la taille du tableau")));
// var nb = tableau.length

// for (i = 0; i<tableau.length; i++)
// tableau[i] = (window.prompt("Entrez votre valeur"));
// alert(tableau)
// }


// EXERCICE 2


function GetInteger() { // Lire un entier au clavier
    entier = parseInt(window.prompt("Entrez le nombre entier"));
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

AfficheTab()

RechercheTab()

InfoTab()