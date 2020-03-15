// function checkcode() {

//     alert("Entrez le code postal en  chiffre SVP")
// }


function verif() {
    var x = document.getElementsByClassName('empty');
    var n = x.length
    for (var i = 0; i < n; i++) {
        console.log(x[i])
        if (x == "") {
            alert("Il dois y avoir au minimum un caracter de saisie")
        }
        else { }

    }


    var arobase = document.getElementById("mail").value;
    var result = arobase.indexOf("@");

    if (result == -1) {
        alert(" Il y a une erreur sur l'adresse mail");
    }
    else { }







    // var cp = document.getElementById("code").value;

    // console.log(cp)
    // }


    // En cas de clique sur submit, on lancer la function verif
    var element = document.getElementById("submit")
    element.addEventListener("click", function () {
        verif()
    });