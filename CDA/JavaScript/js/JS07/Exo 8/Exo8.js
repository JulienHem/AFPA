let mot = document.getElementById("mot").value;
let nbVoyelle = 0;             // Je définis la valeur de nbVoyelle pour commencer à partir de 0
let i = 0;

bouton.addEventListener("click", function() {

            // "for" me permet de donner toutes les conditions de "i"
for (i = 0; i < mot.length; i++) {
            // Cela permet d'identifier les voyelles
    if ((mot[i]=="a")||(mot[i]=="e")||(mot[i]=="i")||(mot[i]=="o")||(mot[i]=="u")||(mot[i]=="y")) {
        nbVoyelle++;
    }
}
alert(mot + " contient " + nbVoyelle + " voyelle(s) " + "et "+ (mot.length - nbVoyelle) + " consonne(s)")

});
