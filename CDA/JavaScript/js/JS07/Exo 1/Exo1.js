// // EXERCICE 1

let result = "";
let i =1;


bouton.addEventListener("click", function() { // PERMET L'ENVOIE DE L'EXO AU CLIC
let pre = document.getElementById("pren").value;

result = i + " " + pre + " " + "\n" + result; // ON STOCK LES VALEURS POUR POUVOIR AFFICHER PLUSIEURS PRENOMS A L'ENVOI 

if (pre != " ") { // PERMET AU SCRIPT DE S'ARRETER ET DE LANCER UNE ALERT AVEC TOUS LES PRENOMS SAISIS UNN FOIS LE CHAMP VIDE
  alert("Prénoms" + " = " + "\n" + result );
  i++
}

});
