let array1 = [];

bouton.addEventListener("click", function () { // PERMET L'ENVOIE DE L'EXO AU CLIC
  
  let nb = parseInt(document.getElementById("nbre1").value); // Saisie des valeurs MAX et MIN

  if (nb == 0) {
    alert("Le maximum est : " + Math.max(...array1) + " et le minimum est : " + Math.min(...array1)); // PERMET DE DONNER LE RESULTAT A L'ENTREE DE 0
  }
  else {
    let newlength = array1.push(nb) // ON RENTRE LES VALEURS DANS LE TABLEAU 
  }

});