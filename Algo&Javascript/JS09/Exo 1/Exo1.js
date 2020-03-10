// EXERCICE 1 

var tableau = new Array(parseInt(window.prompt("Entrez la taille du tableau")));
var nb = tableau.length

for (i = 0; i<tableau.length; i++){
tableau[i] = (window.prompt("Entrez votre valeur"));
alert(tableau)
}