

function verification() {
var uncara = document.getElementsByClassName("uncara")
if (uncara == "")
    alert("Vous devez rentrer au moins 1 caractère")
}


var verif = document.getElementById("button1");
verif.addEventListener("click", function() {
    verification()

});

