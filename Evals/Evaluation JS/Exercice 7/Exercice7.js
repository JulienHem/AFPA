function check(event, id, regex, errorMsg) { // Permet de centraliser les variables et les conditions pour chaque ID, RegEx et MSG d'erreurs
    var idObj = document.getElementById(id)
    var filtre = new RegExp(regex)
    if (filtre.test(idObj)) {
        return true;
    } else {
        idObj.textContent = errorMsg; 
        idObj.style.color = "red";
        event.preventDefault();
    }
}

function verification(event) { // On rentre chaque arguments pour afficher un message d'erreurs

const checkName = check(event, "name-error", "^[a-zA-Zèéàiïôöüê' -]+$", "Vous devez rentrer minimum un caractère")
const checkPren = check(event, "prenom-error","^[a-zA-Zèéàiïôöüê' -]+$", "Vous devez rentrer minimum un caractère")
const checkDate = check(event, "ddn-error", "^[0-9]{2}?\/[0-9]{2}?\/([0-9]{4})+$", "Veuillez rentrer une date de naissance correcte")
const checkCP = check(event, "codepost-error", "^[0-9]{5}$", "Veuillez rentrer un code postal correct")
const checkAdress = check(event, "adress-error", "^[0-9]*[a-zA-Z- éàèêûî]+$", "Veuillez rentrer une adresse valable")
const checkMail = check(event, "mail-error","^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "Veuillez rentrer un mail valable")
const checkQuestion = check(event, "question-error", "^(.|\n){0,500}$", "Vous ne pouvez dépasser 500 caractères")
}

//  Lance la vérification au clique de "Envoyer" du formulaire
var verif = document.getElementById("send")
verif.addEventListener("click", function (event) {
    
    verification(event)
});