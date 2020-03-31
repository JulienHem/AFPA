function check(id, iderror, regex, errorMsg) { // Permet de centraliser les variables et les conditions pour chaque ID, RegEx et MSG d'erreurs
    var idObj = document.getElementById(id).value
    var idError = document.getElementById(iderror)
    var filtre = new RegExp(regex)
    if (filtre.test(idObj)) {
        return true;
    } else {
        idError.textContent = errorMsg; 
        idError.style.color = "red";
        return false;
    }
}

function verification() { // On rentre chaque arguments pour afficher un message d'erreurs

var tabverif = [] // On rentre toutes les valeurs dans ce tableau pour les vérifier une à une

tabverif.push(check("name", "name-error", "^[a-zA-Zèéàiïôöüê' -]+$", "Vous devez rentrer minimum un caractère"))
tabverif.push(check("pren", "prenom-error", "^[a-zA-Zèéàiïôöüê' -]+$", "Veuillez rentrer un prénom valable"))
tabverif.push(check("ddn", "ddn-error", "^[0-9]{2}?\/[0-9]{2}?\/([0-9]{4})+$", "Veuillez rentrer une date de naissance correcte"))
tabverif.push(check("codepost", "codepost-error", "^[0-9]{5}$", "Veuillez rentrer un code postal correct"))
tabverif.push(check("adress", "adress-error", "^[0-9]*[a-zA-Z- éàèêûî]+$", "Veuillez rentrer une adresse valable"))
tabverif.push(check("city", "ville-error", "^[0-9]*[a-zA-Z- éàèêûî]+$", "Veuillez rentrer une ville valable"))
tabverif.push(check("mail", "mail-error","^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "Veuillez rentrer un mail valable"))
tabverif.push(check("question", "question-error", "^(.|\n){5,500}$", "Vous ne pouvez dépasser 500 caractères"))

for (i = 0; i < tabverif.length; i++){ // Permet la vérification dans le tableau grâce à sa longueur
    if (tabverif[i] === false)
    return false; // Si il y'a une erreur cela va afficher les erreurs
    else {
        return true; // Si tout est bon le formulaire est envoyé
    }
}
}

//  Lance la vérification au clique de "Envoyer" du formulaire
var verif = document.getElementById("send")
verif.addEventListener("click", function (event) {
    event.preventDefault()
    if (verification(event))
    {
        document.getElementById("formulaire").submit()
    }

});