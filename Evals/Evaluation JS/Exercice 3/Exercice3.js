var tab = []; // On crée un tableau
  while (nb != 0) { // Permet de rentrer dans la boucle pour entrer les valeurs
    var nb = parseInt(window.prompt("Saisir la valeur")); 
    if (nb != 0) { // Si on rentre la valeur "0" le script s'arrête
      tab.push(nb)
    }
    else { }
  }
  alert(tab)
  var min = Math.min(...tab) // Cherche le minimum dans le tableau
  var max = Math.max(...tab) // Cherche le max dans le tableau

alert("Le maximum est : " + max + " le minimum est : " + min)
