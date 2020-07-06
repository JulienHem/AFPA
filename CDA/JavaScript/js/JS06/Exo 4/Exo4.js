bouton.addEventListener ("click", function(){

var port = 0;
var r = 0;
var pu = parseFloat(document.getElementById("price").value);
let qte = parseInt(document.getElementById("qte").value);
var tot = parseFloat(pu * qte);

// La variable TOT va ici permettre de comparer sa valeur

if (tot >= 100 && tot <= 200) { // Ici la condition permet de calculer la remise si le prix est entre 100 et 200 euros
    var r = (tot * 0.05);
    alert("Vous avez une remise de 5%")
}

else if (tot > 200){
    r = (tot * 0.1);
}

else {
    tot = tot;
}

remise = tot - r

// FRAIS DE PORT

if (tot - r > 500) {
    r = (tot * 0.1)

}
else { // Ce else va permettre de calculer les frais de port avec la condition du minimum de 6€
    port = parseFloat(remise * 0.02);
    console.log(port)
    if (port < 6) {
        port = 6
    }
}

// Calcule du prix total avec la remise et les frais de port

somme = parseFloat(alert("Le total est de : " + ((tot - r) + port)));

})