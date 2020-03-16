var pu = parseFloat(prompt("Saisir le prix de l'article"));
var qte = parseFloat(prompt("Saisir la quantité commandée"));
var tot = parseFloat(pu * qte);


if (tot > 500){
    alert("Les frais de port sont gratuits !")
}
else {
    alert("Vous avez 6€ de frais de port minimum");
    var port = parseFloat(tot * (2 / 100))
    alert("Le port est de " + port +"€")
    console.log(port)
        if (port < 6){
            port = 6
            alert("Les frais de port sont obligatoirement de 6 euros")
        }
}

if (tot >= 100 && tot <= 200){
    var r1 = parseFloat(tot * (1 - 5 / 100));
    var remise1 = alert("Vous avez une remise de 5%")
   
}
else {
    var r2 = parseFloat(tot * (1 - 10 / 100));
    var remise2 = alert("Vous avez une remise de 10%")
}
console.log(tot)
console.log(somme)

var somme = parseFloat(alert("Le prix total est de " + (r1 || r2 + port)));
