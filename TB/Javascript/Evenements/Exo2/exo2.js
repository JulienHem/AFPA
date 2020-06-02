var magic = parseInt(Math.random() * 100);
console.log(magic)


function verification() {
    var contenu = document.getElementById("textbox1").value
    console.log(contenu)
        if (contenu < magic) {
            window.alert("PLUS GRAND LEL")
        }
        else if (contenu > magic) {
            window.alert("PLUS PETIT NOOB")
        }
        else {
            window.alert("GG BG")
        }

}

var verif = document.getElementById("button1");
verif.addEventListener("click", function () {
    verification()

});





