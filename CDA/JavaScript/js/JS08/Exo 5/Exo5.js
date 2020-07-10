



bouton.addEventListener("click", function() { // PERMET L'ENVOI DE L'EXO AU CLIC


// ON RECUPERE LES VALEURS DES INPUTS
let str1 = document.getElementById("char").value; 
let str2 = document.getElementById("separ").value;
let n = parseInt(document.getElementById("val").value);

function strtok (str1, str2, n){

result = str1.split(str2) // CELA PERMET D'IDENTIFIER LE SEPARATEUR DANS LA DEUXIEME INPUT
window.alert(result [n-1])

}strtok(str1, str2 , n)
});