// Exercice Afficher du texte



function check(id, regexp) { // Permet de centraliser les variables et les conditions pour chaque ID, RegEx et MSG d'erreurs
    var idObj = document.getElementById(id).value;
    var filtre = new RegExp(regexp);
    if (filtre.test(idObj) === true) {
        return true;
    } else {
        return false;
    }

}

var tabverif = [ // On rentre toutes les valeurs dans ce tableau pour les vérifier une à une

    ["pren", "^[a-zA-Zèéàiïôöüê' -]+$"],
    ["name", "^[a-zA-Zèéàiïôöüê' -]+$"],
]

function verification() { // Appelle de la fonction pour commencer la vérification des données entrées dans les champs

    var sortie = true;
    for (i = 0; i < tabverif.length - 2; i++) { // Permet la vérification dans le tableau grâce à sa longueur
        if (check(tabverif[i][0], tabverif[i][1], tabverif[i][2] === false)) {
            sortie = false // Si il y'a une erreur cela va les afficher
        }
    }
    return sortie
}

bouton.addEventListener('click', function() {
    const prénom = document.getElementById("pren").value;
    const nom = document.getElementById("name").value;
    const bouton = document.getElementById("bouton");

    if (document.getElementById("homme").checked) {
        Mr = document.getElementById("homme").checked;
        Mr = "Mr ";
        alert("Bonjour " + Mr + prénom + " " + nom);
    }
    else if (document.getElementById("femme").checked){
        Mme = document.getElementById("femme");
        Mme = "Mme ";
        alert("Bonjour " + Mme + prénom + " " + nom)
    }


    });