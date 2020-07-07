// EXERCICE 4


bouton.addEventListener("click", function() {

var n1 = parseInt(document.getElementById("nbre1").value);
var n2 = parseInt(document.getElementById("nbre2").value);
var a = 0

if (n1 < n2) {
  do {
    a = a + n1
    n1++;
  } while (n1 < n2)
  alert(a)

}
else {
  do {
    a = a + n2;
    n2++;
  } while (n1 > n2);
  alert(a)

}
})