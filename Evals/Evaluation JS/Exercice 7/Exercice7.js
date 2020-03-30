function check(id, regex, errorMsg) { // Permet de centraliser les variables et les conditions pour chaque ID
    var idObj = document.getElementById(id).value
    var filtre = new RegExp(regex)
    if (filtre.test(idObj) === true) {
        return true;
    } else {
        alert(errorMsg) 
    }
}

function verification() { // On rentre chaque arguments pour afficher un message d'erreurs

const checkName = check("name", "^[a-zA-Zèéàiïôöüê' -]+$", "Vous devez rentrer minimum un caractère")
const checkDate = check("ddn", "^[0-9]{2}?\/[0-9]{2}?\/([0-9]{4})+$", "Veuillez rentrer une date de naissance correcte")
const checkCP = check("codepost", "^[0-9]{5}$", "Veuillez rentrer un code postal correct")
const checkAdress = check("adress", "^[0-9]*[a-zA-Z- éàèêûî]+$", "Veuillez rentrer une adresse valable")
const checkMail = check("mail","^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "Veuillez rentrer un mail valable")
const checkQuestion = check("question", "^(.|\n){0,500}$", "Vous ne pouvez dépasser 500 caractères")
}

//  Lance la vérification au clique de "Envoyer" du formulaire
var verif = document.getElementById("send")
verif.addEventListener("click", function () {
   
    verification()
});