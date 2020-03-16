var n = parseInt(prompt("Insérez votre votre chiffre"));
var c = parseInt(prompt("Insérez votre opérateur"))
console.log("Somme des nombres inférieur à N");
console.log("=========================");

do {
    var result = n + c
    console.log("Nombre " + n + "+" + c + "=" + result)
    n--
}while(n >= 0)