function lafonction (mot, lettre){
mot2 = mot.split(lettre);
compteur = mot2.length-1;
return compteur;
}
alert(lafonction("camembert","e"));
