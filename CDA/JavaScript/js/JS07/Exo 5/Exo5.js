// EXERCICE 5

let s = 0;
let m = 0;

bouton.addEventListener("click", function() { // PERMET L'ENVOIE DE L'EXO AU CLIC

  var n1 = parseInt(document.getElementById("nbre1").value);
  

 if (n1 == 0) { // ON DONNE UNE VALEUR 0 SUR LES 2 CHAMPS SI ON RENTRE 0
  
  alert("La somme est de "  + s + " et la moyenne est de " + m )

 } else {
  
  s = s + n1 // CALCUL LA SOMME
  m = (m + n1) / 2 // CALCUL LA MOYENNE
 
}

});
