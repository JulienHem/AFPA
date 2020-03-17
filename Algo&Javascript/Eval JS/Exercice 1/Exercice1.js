// Permet de rentrer les 2 valeurs et de les calculer dans une variable
var pu = parseFloat(prompt("Saisir le prix de l'article"));
var qte = parseFloat(prompt("Saisir la quantité commandée"));
var tot = parseFloat(pu * qte);

// La variable TOT va ici permettre de comparer sa valeur

if (tot >= 100 && tot <= 200){ // Ici la condition permet de calculer la remise si le prix est entre 100 et 200 euros
    var r1 = parseFloat(tot * (1 - 5 / 100));
    var remise1 = alert("Vous avez une remise de 5%")
   
}
else {
    var r2 = parseFloat(tot * (1 - 10 / 100));
    var remise2 = alert("Vous avez une remise de 10%")
}

if (tot > 500){
    alert("Les frais de port sont gratuits !")
}
else { // Ce else va permettre de calculer les frais de port avec la condition du minimum de 6€
    var port = parseFloat(tot * (2 / 100))
    alert("Les frais de port sont de " + port +"€")
    alert("Vous avez 6€ de frais de port minimum");
    console.log(port)
        if (port < 6){
            port = 6
            alert("Les frais de port sont obligatoirement de 6 euros")
        }
}
console.log(tot)
console.log(somme)

// Calcule du prix total avec la remise et les frais de port
var somme = parseFloat(alert("Le prix total est de " + (r1 || r2 + port)));
