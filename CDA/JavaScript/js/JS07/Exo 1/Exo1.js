// // EXERCICE 1

let i = 0;
let result = "";


bouton.addEventListener("click", function() { // PERMET L'ENVOIE DE L'EXO AU CLIC
let pre = document.getElementById("pren").value;


if (pre == "") { // PERMET AU SCRIPT DE S'ARRETER ET DE LANCER UNE ALERT AVEC TOUS LES PRENOMS SAISIS UNN FOIS LE CHAMP VIDE
  alert("Prénoms" + " = " + "\n" + result );

}
else {
  result = i + " " + pre + " " + "\n" + result; // ON STOCK LES VALEURS POUR POUVOIR AFFICHER PLUSIEURS PRENOMS A L'ENVOI
  i++
}

});
