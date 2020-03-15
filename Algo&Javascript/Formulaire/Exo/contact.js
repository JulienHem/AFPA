

function verification() {

    // Permet de vérifier si il y'a au moins 1 caractère
    var uncara = document.getElementById("societe").value
    var filtre2 = new RegExp("^[a-z0-9A-Z -@]+$")
    var resultat2 = filtre2.test(uncara)
    if(resultat2 === false){
        alert("Rentrez un nom de société correct")
    }
    else 
    { }

    var ville = document.getElementById("ville").value
    var filtre3 = new RegExp("^[a-z0-9A-Z -@]+$")
    var resultat3 = filtre3.test(ville)
    if(resultat3 === false){
        alert("Rentrez le nom de votre ville")
    }
    else 
    { }

    var societe = document.getElementById("contact").value
    var filtre4 = new RegExp("^[a-z0-9A-Z -@]+$")
    var resultat4 = filtre4.test(societe)
    if(resultat4 === false){
        alert("Entrez le nom de la personne à contacter")
    }
    else 
    { }


// Vérifie si il y'a 5 chiffres pour le code postal
var cp = document.getElementById("cp").value;
var filtre = new RegExp("^[0-9]{5}$");
var resultat = filtre.test(cp);
if (resultat === false){
    alert("Entrez le code postal sur 5 chiffres")
}
else 
{ }


// Permet de vérifier si il y'a un "@" de rentrer pour le mail
var arobase = document.getElementById("mail").value;
var result = arobase.indexOf("@");
console.log(arobase)
    if (result == -1){
    alert("Vous êtes obligé de rentrer un arobase!")
    }
    else 
    { }

}


// Permet de lancer la verification quand on clique sur "Envoyer"
var verif = document.getElementById("button1")
verif.addEventListener("click", function () {
    verification()

});

