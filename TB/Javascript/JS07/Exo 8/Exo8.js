// EXERCICE 8

var magic = parseInt(Math.random() * 100);
console.log(magic)

do {
    var num = window.prompt("Cherche le nombre 'culé");
    if (num < magic) {
        window.alert("PLUS GRAND LEL")
    }
    else if (num > magic) {
        window.alert("PLUS PETIT NOOB")
    }
    else {
        window.alert("GG BG")
    }

} while (num != magic)
