// // EXERCICE 1

// var i=1;
// var pre;
// console.log("Liste de prénoms");
// console.log("==================");

// while (pre != "" && i <= 10)
// {
//   pre=window.prompt("Saisissez le prénom" + " " + i)
//   result = pre
//   console.log("Prénom"+i+" = "+result);

//   i++
// } 

// console.log("Fin de la boucle");


bouton.addEventListener("click", function() {
let i=1;
var pre = document.getElementById("pren").value

while (pre != "" && i <=10)
{
  alert("Prénom" + i + " = " + pre);
  i++
}

});
