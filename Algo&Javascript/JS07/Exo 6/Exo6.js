// EXERCICE 6

var mot = prompt("Veuillez saisir un mot")
            // Je définis la valeur de nbVoyelle pour commencer à partir de 0
var nbVoyelle = 0;
var i = 0;
            // "for" me permet de donner toutes les conditions de "i"
for (i = 0; i < mot.length; i++) {
            // Cela permet d'identifier les voyelles
    if ((mot[i]=="a")||(mot[i]=="e")||(mot[i]=="i")||(mot[i]=="o")||(mot[i]=="u")||(mot[i]=="y")) {
        nbVoyelle++;
    }
}
console.log(mot + " contient " + nbVoyelle + " voyelle(s) " + "et "+ (mot.length - nbVoyelle) + " consonne(s)")
