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

var menu = window.prompt("Choisir le script" + "\n" + "1- Multiples" + "\n" + "2- Somme et moyenne" + "\n" + "3- Recherche du nombre de voyelles" + "\n" + "4- Recherche du nombre des caractères suivants" + "\n" + "Entrez votre choix : ")

switch (menu) {
    case "1":
        var n = parseInt(window.prompt("Entrez le 1er nombre"))
        var x = parseInt(window.prompt("Entrez le 2eme nombre"))

        function result(n, x) {
            for (n = 0; n <= x; n++) {
                document.getElementById("resultat").innerHTML = "Resultat = " + x * n
            }
        } result(x, n)
        break;

    case "2":
        var n = parseInt(window.prompt("Saisir le premier nombre"))
        var a = n
        var m = n

        function moyenne(a, m) {
            do {
                var n1 = parseInt(window.prompt("Saisir le second nombre"))

                if (n1 == 0) {
                    break;
                }

                a = a + n1
                m = (m + n1) / 2
                document.getElementById("moyenne").innerHTML = "Moyenne = " + m + "\n" + " Somme total : " + a

            } while (n1 != 0)

        }
        moyenne(a, m)
        break;

    case "3":
        var mot = window.prompt("Rentrez le mot");

        function voyelle(comp){
            var voyelle = 1;
            var comp = 0;
            var temp;
            var tableau = ("aeiouy")

        for (var i in tableau){
            console.log(tableau[i]);
            temp = mot
            voyelle = 1
        
        while (voyelle != 0)
        {
            voyelle = temp.indeOx(tableau[i])
            voyelle++
            temp = temp.substr(voyelle)
            if (voyelle != 0){
                comp++
            }
        }
            document.getElementById("voyelle").innerHTML = "Nombre de voyelles = " + comp
        }
        }voyelle(comp)
        break;
}     