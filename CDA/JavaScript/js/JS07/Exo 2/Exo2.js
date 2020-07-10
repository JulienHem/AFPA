// EXERCICE 2


bouton.addEventListener("click", function() { // PERMET L'ENVOIE DE L'EXO AU CLIC

  var n = document.getElementById("nbre").value; // ON VA CHERCHER LA VALEUR DE L'INPUT
  let y = n;
  let x = "";

  do
  {
    x = x + "\n" + n;
    n--

  }while (n >= 0) // PERMET DE NE PAS DESCENDRE EN DESSOUS DE 0 
  alert("Chiffres inférieur à " + y + " = " + x);


});