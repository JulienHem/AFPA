bouton.addEventListener("click", function() { // PERMET L'ENVOIE DE L'EXO AU CLIC


function lafonction (mot, lettre){ // ON MET DEUX PARAMETRES QUE L'ON VA DEFINIR A L'APPEL DE LA FONCTION
mot2 = mot.split(lettre); // LE SPLIT PERMET DE DIVISER UNE CHAINE DE CARACTERES 
compteur = mot2.length-1; // PERMET DE COMPTER LE NOMBRE DE LETTRES DANS L'APPEL DE LA FONCTION
return compteur;
}
alert(lafonction("camembert","e"));
});