// EXERCICE 2


bouton.addEventListener("click", function() {

  var n = document.getElementById("nbre").value;
  let y = n;
  let x = "";

  do
  {
    x = x + "\n" + n;
    n--

  }while (n >= 0)
  alert("Chiffres inférieur à " + y + " = " + x);


});