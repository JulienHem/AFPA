// // EXERCICE 1

let result = "";
let i =1;


bouton.addEventListener("click", function() {
let pre = document.getElementById("pren").value;

result = i + " " + pre + " " + "\n" + result;

if (pre != " ") {
  alert("Prénoms" + " = " + "\n" + result );
  i++
}

});
