// Permet de rentrer les 2 valeurs et de les calculer dans une variable
var pu = parseFloat(prompt("Saisir le prix de l'article"));
var qte = parseInt(prompt("Saisir la quantité commandée"));
var tot = (pu * qte);
var port = 0;
var r1 = 0;
var r2 = 0;

// La variable TOT va ici permettre de comparer sa valeur

if (tot >= 100 && tot <= 200){ // Ici la condition permet de calculer la remise si le prix est entre 100 et 200 euros
    r1 = (tot * (1 - 5 / 100));
    alert("Vous avez une remise de 5%")
   
}

else if (tot < 100){
    var r = tot
    alert("Aucune remise")
}


else {
    r2 = (tot * (1 - 10 / 100));
    alert("Vous avez une remise de 10%")
}

if (tot > 500){
    alert("Les frais de port sont gratuits !")
}
else { // Ce else va permettre de calculer les frais de port avec la condition du minimum de 6€
    port = tot * (2 / 100)
    alert("Les frais de port sont de " + port +"€")
    alert("Il y a 6€ de frais de port minimum");
    console.log(port)
        if (port < 6){
            port = 6
        }
}

// Calcule du prix total avec la remise et les frais de port
var somme = parseInt(alert("Le prix total est de " + (r + port || r1 + port || r2 + port)))