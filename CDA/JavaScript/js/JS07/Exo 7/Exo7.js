


bouton.addEventListener("click", function () {

let n = parseInt(document.getElementById("nbre1").value);
let x = parseInt(document.getElementById("nbre2").value);
let result = "";
for (n = 1; n < x; n++) {

  result = n + "*" + x + "=" + ( n * x ) + "\n" + result
}
alert(result)

});
