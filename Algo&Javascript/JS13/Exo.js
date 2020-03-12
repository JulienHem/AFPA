
var s = 0;
var t = (parseInt(prompt("Définir la taille du tableau : ")));
tabl = new Array(t);


for (i = 0; i < tabl.length; i++) {
    tabl[i] = parseInt(prompt("Veuillez saisir vos valeurs numériques : "));
    s += tabl[i]
    console.log(tabl)
    console.log(s)
    alert(tabl)
    if (tabl[i] == 0) {
        break;
    }
}

alert("Il y'a " + (tabl.length) + " valeurs")
alert("La somme est : " + s)
moy = s / tabl.length
alert("La moyenne est : " + moy)
