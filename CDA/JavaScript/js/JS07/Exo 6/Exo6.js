let array1 = [];

bouton.addEventListener("click", function () {
  
  let nb = parseInt(document.getElementById("nbre1").value); // Saisie des valeurs MAX et MIN
  console.log(array1)

  if (nb == 0) {
    alert("Le maximum est : " + Math.max(...array1) + " et le minimum est : " + Math.min(...array1));
  }
  else {
    let newlength = array1.push(nb)
  }

});