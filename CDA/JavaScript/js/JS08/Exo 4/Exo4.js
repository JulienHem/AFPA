   
   bouton.addEventListener("click", function () { // PERMET L'ENVOIE DE L'EXO AU CLIC

   //EXERCICE MULTIPLICATION ET MOYENNE

   function result(n, x) {
        document.getElementById("resultat").innerHTML = "Resultat = " + x * n
    }
    
    function moyenne(a, m) {
        do {
            var n1 = parseInt(window.prompt("Saisir le premier nombre"));
            if (n1 == 0) {
                break;
            }
            a = a + n1
            m = (m + n1) / 2
    
            document.getElementById("moyenne").innerHTML = "Moyenne = " + m + "\n" + " Somme total : " + a
        } while (n1 != 0)
    }
    
    // EXERCICE DES VOYELLES
    
    function voyelle(mot) {
        var nbVoyelle = 0;
        var i = 0;
        for (i = 0; i < mot.length; i++) {
            if ((mot[i] == "a") || (mot[i] == "e") || (mot[i] == "i") || (mot[i] == "o") || (mot[i] == "u") || (mot[i] == "y")) {
                nbVoyelle++;
            }
        }
        console.log(mot + "Contient " + nbVoyelle + " voyelle(s) " + "et " + (mot.length - nbVoyelle) + " consonne(s)")
    
        document.getElementById("voyelle").innerHTML = " Contient " + nbVoyelle + " voyelle(s) " + "et " + (mot.length - nbVoyelle) + " consonne(s)"
    }

    // EXERCICE DU COMPTAGE DE LETTRES
    
    function lafonction(mot, lettre) {
        mot2 = mot.split(lettre);
        compteur = mot2.length - 1;
        return compteur;
    }
    
    var menu = window.prompt("Choisir le script" + "\n" + "1- Multiples" + "\n" + 
    "2- Somme et moyenne" + "\n" + "3- Recherche du nombre de voyelles" + "\n" + 
    "4- Recherche du nombre des caractères suivants" + "\n" + "Entrez votre choix : ") // AFFICHAGE DU MENU
    
    switch (menu) {
        case "1":
            var n = parseInt(window.prompt("Entrez le 1er nombre"))
            var x = parseInt(window.prompt("Entrez le 2eme nombre"))
    
            result(x, n)
            break;
    
        case "2":
            var a = 0
            var m = 0
            moyenne(a, m)
            break;
    
        case "3":
            var mot = prompt("Veuillez saisir un mot")
            voyelle(mot)
            break;
    
        case "4":
            var mot = window.prompt("Entrez un mot")
            var lettre = window.prompt("Entrez une lettre")
            alert(lafonction(mot, lettre));
    }
});