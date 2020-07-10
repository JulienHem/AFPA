


bouton.addEventListener("click", function () { // PERMET L'ENVOIE DE L'EXO AU CLIC

let n = parseInt(document.getElementById("nbre1").value); // RECUPERE LA VALEUR DE L'INPUT
let x = parseInt(document.getElementById("nbre2").value); // RECUPERE LA VALEUR DE L'INPUT
let result = "";
for (n = 1; n < x; n++) { // ON UTILISE UN FOR POUR AFFICHER PLUSIEURS RESULTATS A L'ENVOI

  result = n + "*" + x + "=" + ( n * x ) + "\n" + result
}
alert(result)

});
