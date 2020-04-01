var nb = parseInt(prompt("Saisir la valeur et entrez 0 pour arrêter")); // Saisie des valeurs MAX et MIN
var max = nb;
var min = nb;

while (nb != 0) { // Permet d'arrêter le script à l'insertion de 0

var nb = parseInt(prompt("Saisir la valeur et entrez 0 pour arrêter")); // Permet de continuer la saisie des valeurs

  if (nb > max){ // Défini le MAX
    max = nb;
  }

  else if (nb < min){ // Défini le MIN
    if (nb != 0){ // Permet de ne pas entrer 0 à son insertion
      min = nb;
  }
}

};
alert("Le maximum est : " + max + " et le minimum est : " + min);
