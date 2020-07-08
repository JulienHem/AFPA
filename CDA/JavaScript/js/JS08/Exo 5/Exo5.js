



bouton.addEventListener("click", function() {

let str1 = document.getElementById("char").value;
let str2 = document.getElementById("separ").value;
let n = parseInt(document.getElementById("val").value);

function strtok (str1, str2, n){

result = str1.split(str2)
window.alert(result [n-1])

}strtok(str1, str2 , n)
});