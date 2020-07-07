// EXERCICE 5

let s = 0;
let m = 0;

bouton.addEventListener("click", function() {

  var n1 = parseInt(document.getElementById("nbre1").value);
  

 if (n1 == 0) {
  
  alert("La somme est de "  + s + " et la moyenne est de " + m )

 } else {
  
  s = s + n1
  m = (m + n1) / 2
 
}

});
