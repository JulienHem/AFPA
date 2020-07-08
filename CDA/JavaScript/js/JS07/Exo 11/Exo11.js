// EXERCICE 8

var magic = parseInt(Math.random() * 100);

bouton.addEventListener("click", function() {


    var num = document.getElementById("nbre").value;
    if (num < magic) {
        window.alert("PLUS GRAND LEL")
    }
    else if (num > magic) {
        window.alert("PLUS PETIT NOOB")
    }
    else {
        window.alert("GG BG")
    }

});