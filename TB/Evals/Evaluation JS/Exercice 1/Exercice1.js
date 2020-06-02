// Permet de rentrer les 2 valeurs et de les calculer dans une variable
var port = 0;
var r = 0;
var pu = parseFloat(prompt("Saisir le prix de l'article"));
var qte = parseInt(prompt("Saisir la quantité commandée"));
var tot = parseFloat(pu * qte);

// La variable TOT va ici permettre de comparer sa valeur

if (tot >= 100 && tot <= 200) { // Ici la condition permet de calculer la remise si le prix est entre 100 et 200 euros
    var r = (tot * 0.05);
    alert("Vous avez une remise de 5%")
}

else if (tot > 200){
    r = (tot * 0.1);
    alert("Vous avez une remise de 10%");
}

else {
    tot = tot;
    alert("Aucune remise")
}

remise = tot - r

// FRAIS DE PORT

if (tot - r > 500) {
    r = (tot * 0.1)
    alert("Les frais de port sont gratuits !")

}
else { // Ce else va permettre de calculer les frais de port avec la condition du minimum de 6€
    port = parseFloat(remise * 0.02);
    console.log(port)
    if (port < 6) {
        port = 6
    }
    alert("Vos frais de port s'élèvent donc à " + port + " €");
}

// Calcule du prix total avec la remise et les frais de port

somme = parseFloat(alert("Le total est de : " + ((tot - r) + port)));