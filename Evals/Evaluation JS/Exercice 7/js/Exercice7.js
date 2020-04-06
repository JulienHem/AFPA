function check(id, iderror, regex, errorMsg) { // Permet de centraliser les variables et les conditions pour chaque ID, RegEx et MSG d'erreurs
    var idObj = document.getElementById(id).value;
    var idError = document.getElementById(iderror);
    var filtre = new RegExp(regex);
    if (filtre.test(idObj) === true) {
        hide(iderror, errorMsg) // Appelle de Hide pour pouvoir enlever le message d'erreur quand un champ est valide
        return true;
    } else {
        idError.textContent = errorMsg;
        idError.style.color = "red";
        console.log(id)
        return false;
    }
}

function checkselect(id, iderror, errorMsg) {
    var menuselect = document.getElementById("menu");
    var iderrorSelect = menuselect.options[menuselect.selectedIndex].value;
    var errorselect = document.getElementById("menu-error");
    if (iderrorSelect != "empty") {
        return true;
    } else {
        errorselect.textContent = errorMsg;
        errorselect.style.color = "red";
        return false;
    }
}

function checkbox(id, iderror, errorMsg) {
    var getcheckbox = document.getElementById("checkbox").checked;
    var errorcheck = document.getElementById("check-error");
    if (getcheckbox === true) {
        return true;
    }
    else {
        errorcheck.textContent = errorMsg;
        errorcheck.style.color = "red";
        return false;
    }

}


function hide(iderror, errorMsg) { // Ici la fonction permet de cacher les messages d'erreurs si le champ est correct
    $("#" + iderror).hide(errorMsg)
}


var tabverif = [ // On rentre toutes les valeurs dans ce tableau pour les vérifier une à une

    ["name", "name-error", "^[a-zA-Zèéàiïôöüê' -]+$", "Vous devez rentrer un nom valable"],
    ["pren", "prenom-error", "^[a-zA-Zèéàiïôöüê' -]+$", "Veuillez rentrer un prénom valable"],
    ["ddn", "ddn-error", "^[0-9]{2}?\/[0-9]{2}?\/([0-9]{4})+$", "Veuillez rentrer une date de naissance correcte"],
    ["codepost", "codepost-error", "^[0-9]{5}$", "Veuillez rentrer un code postal correct"],
    ["adress", "adress-error", "^[0-9]*[a-zA-Z- éàèêûî]+$", "Veuillez rentrer une adresse valable"],
    ["city", "ville-error", "^[0-9]*[a-zA-Z- éàèêûî]+$", "Veuillez rentrer une ville valable"],
    ["mail", "mail-error", "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "Veuillez rentrer un mail valable"],
    ["question", "question-error", "^(.|\n){5,500}$", "Vous devez entrez au moins 5 caractères et vous ne pouvez dépasser 500 caractères"],
    ["menu", "menu-error", "Vous devez sélectionner votre demande"],
    ["checkbox", "check-error", "Si vous n'acceptez pas le formulaire ne sera pas envoyé"],
]

function verification(laverif) { // Appelle de la fonction pour commencer la vérification des données entrées dans les champs

    if (laverif == "verif") { // Permet de différencier entre les erreurs lorqu'on clique "envoyer" et le temps réel

        var sortie = true;
        for (i = 0; i < tabverif.length - 2; i++) { // Permet la vérification dans le tableau grâce à sa longueur
            if (check(tabverif[i][0], tabverif[i][1], tabverif[i][2], tabverif[i][3]) == false) {
                sortie = false // Si il y'a une erreur cela va les afficher
                console.log(sortie)
            }


            if (checkselect(tabverif[8][0], tabverif[8][1], tabverif[8][2]) == false) {
                sortie = false
            }

            if (checkbox(tabverif[9][0], tabverif[9][1], tabverif[9][2]) == false) {
                sortie = false

            }

        }
        return sortie
    }

}

$("input, textarea, select").on("change", function () { // Permet le temps réel 
    var getID = $(this).attr('id');
    for (i = 0; i < tabverif.length; i++) {
        if (getID === tabverif[i][0]) { // Va vérifier ligne par ligne
            check(tabverif[i][0], tabverif[i][1], tabverif[i][2], tabverif[i][3]); // Compare ligne par ligne, lance le check et affiche le message d'erreur si check retourne false
        }
    }
});

//  Lance la vérification au clique de "Envoyer" du formulaire
var verif = document.getElementById("send")
verif.addEventListener("click", function (event) {
    event.preventDefault()
    if (verification("verif")) {
        document.getElementById("formulaire").submit();
    }
});