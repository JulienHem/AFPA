// EXERCICE 1


// function cube(nombre){
// document.getElementById("cube").innerHTML = "Le cube est de " + nombre + " est égal à " 
// + Math.pow(nombre, + 3)
// }
// cube(3);

// function produit(x, y){
// document.getElementById("produit").innerHTML = "Le produit de " + x + "x" + y + " est égal à "
// + x*y
// }
// produit(3, 5)


// function afficheImg(img){
// document.getElementById("img").innerHTML = "<img src= "+img+ ">";
// }
// afficheImg("papillon.jpg");


// EXERCICE 2


// function lafonction (mot, lettre){
// mot2 = mot.split(lettre);
// compteur = mot2.length-1;
// return compteur;
// }
// alert(lafonction("camembert","e"));


// EXERCICE 3
// function result(n, x) {
//     document.getElementById("resultat").innerHTML = "Resultat = " + x * n
// }

// function moyenne(a, m) {
//     do {
//         var n1 = parseInt(window.prompt("Saisir le premier nombre"));
//         if (n1 == 0) {
//             break;
//         }
//         a = a + n1
//         m = (m + n1) / 2

//         document.getElementById("moyenne").innerHTML = "Moyenne = " + m + "\n" + " Somme total : " + a
//     } while (n1 != 0)
// }


// function voyelle(mot) {
//     var nbVoyelle = 0;
//     var i = 0;
//     for (i = 0; i < mot.length; i++) {
//         if ((mot[i] == "a") || (mot[i] == "e") || (mot[i] == "i") || (mot[i] == "o") || (mot[i] == "u") || (mot[i] == "y")) {
//             nbVoyelle++;
//         }
//     }
//     console.log(mot + "Contient " + nbVoyelle + " voyelle(s) " + "et " + (mot.length - nbVoyelle) + " consonne(s)")

//     document.getElementById("voyelle").innerHTML = " Contient " + nbVoyelle + " voyelle(s) " + "et " + (mot.length - nbVoyelle) + " consonne(s)"
// }

// function lafonction(mot, lettre) {
//     mot2 = mot.split(lettre);
//     compteur = mot2.length - 1;
//     return compteur;
// }

// var menu = window.prompt("Choisir le script" + "\n" + "1- Multiples" + "\n" + "2- Somme et moyenne" + "\n" + "3- Recherche du nombre de voyelles" + "\n" + "4- Recherche du nombre des caractères suivants" + "\n" + "Entrez votre choix : ")

// switch (menu) {
//     case "1":
//         var n = parseInt(window.prompt("Entrez le 1er nombre"))
//         var x = parseInt(window.prompt("Entrez le 2eme nombre"))

//         result(x, n)
//         break;

//     case "2":
//         var a = 0
//         var m = 0
//         moyenne(a, m)
//         break;

//     case "3":
//         var mot = prompt("Veuillez saisir un mot")
//         voyelle(mot)
//         break;

//     case "4":
//         var mot = window.prompt("Entrez un mot")
//         var lettre = window.prompt("Entrez une lettre")
// //         alert(lafonction(mot, lettre));
// }

// EXERCICE 4 
// var str1 = window.prompt("Saisir la suite de caractères");
// var str2 = window.prompt("Saisir le séparateur");
// var n = parseInt(window.prompt("Saisir la valeur"));

// function strtok (str1, str2, n){

// result = str1.split(str2)
// window.alert(result [n])

// }strtok(str1, str2 , n)

