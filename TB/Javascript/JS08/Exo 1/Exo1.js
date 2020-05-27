// EXERCICE 1


function cube(nombre){
document.getElementById("cube").innerHTML = "Le cube est de " + nombre + " est égal à " 
+ Math.pow(nombre, + 3)
}
cube(3);

function produit(x, y){
document.getElementById("produit").innerHTML = "Le produit de " + x + "x" + y + " est égal à "
+ x*y
}
produit(3, 5)


function afficheImg(img){
document.getElementById("img").innerHTML = "<img src= "+img+ ">";
}
afficheImg("papillon.jpg");
