// Boucles avec FOR

// console.log("Table de multiplication par 5");
// console.log("=============================");
// for (i=0; i<=10; i++)   
// {
//     resultat = 5 * i;
//     console.log("5 * "+i+" = "+resultat);  
// }
// // instructions exécutées après le for (i vaut 10)

// console.log("fin de la boucle");

// Boucles avec WHILE

// var i = 0; 
// console.log("Table de multiplication par 5"); 
// console.log("=============================");

// while (i <= 10)
// {   
//     // Exécute le calcul et stocke le résultat   
//     // dans une variable nommée ‘resultat’  
//             resultat = 5 * i
//     // A chaque tour, on affiche le résultat courant à l’utilisateur
//     console.log("Le résultat de 5 x "+i+" est : "+resultat);

//     // A chaque tour, on ajoute +1 à la variable i  
//     i++; 
// }

// // instructions exécutées après le for (i vaut 10)
// console.log("fin de la boucle");


// i = 1;
// while (i <= 10)
// {
//     // Instructions :
//     console.log("Le résultat de 5 x "+i+" est : "+resultat);
//     // Actualisation :
//     i++;
// }       

// Instruction BREAK

// cpt = 1;
// while (cpt<10)     
// {
//     if (cpt==9)  
//     {  
//         break;
//     }  
//     console.log("ligne : "+cpt)
//     cpt++;  
// }    
// console.log("fin de la boucle");

// Boucles avec do ... while

// var i=0
// console.log("Table de multiplication par 5");
// console.log("=============================");
// do 
// {   
//     resultat = 5 * i;
//     console.log("5 * "+i+" = "+resultat)
//     i++;
// } while (i <= 10) ;
// // instructions exécutées après le for (i vaut 10)
// console.log("fin de la boucle");

//                 Boucles for ... in
// var tableau = ["Paul", "Pierre", "Anne", "Sophie"];
//     for (var i in tableau)   
// { 
//     console.log(tableau[i]);  
// }


// EXERCICE 1

// var i=1;
// var pre;
// console.log("Liste de prénoms");
// console.log("==================");

// while (pre != "" && i <= 10)
// {
//   pre=window.prompt("Saisissez le prénom" + " " +i)
//   result = pre
//   console.log("Prénom"+i+" = "+result);

//   i++
// } 

// console.log("Fin de la boucle");

// EXERCICE 2

// var n = window.prompt("Saisir nombre");
// console.log("Nombres inférieur à N");
// console.log("================");

// do
// {
//   console.log("Nombre" + " " + n)

//   n--
// }while ( n >= 0)
// console.log("Fin de la boucle")


// EXERCICE 3

// var n1 = parseInt(window.prompt("Saisir le premier nombre"));
// var n2 = parseInt(window.prompt("Saisir le deuxième nombre"));
// var a = 0
// console.log("Somme des entiers");
// console.log("===================");


// if (n1 < n2) {
//   do {
//     a = a + n1
//     n1++;
//     console.log(a)
//   } while (n1 < n2)
// }
// else {
//   do {
//     a = a + n2;
//     n2++;
//     console.log(a)
//   } while (n1 > n2);
// }

// console.log("Fin de la boucle");

// EXERCICE 4


// var a = 0
// var m = 0
// console.log("Somme et moyenne");
// console.log("=======================");

// do {
//   var n1 = parseInt(window.prompt("Saisir le premier nombre"));

//   if (n1 == 0) {
//     break;
//   }

//   a = a + n1
//   m = (m + n1) / 2

//   console.log(m + "   " + a + "   " + n1)
// } while (n1 != 0)
// console.log("Fin de la boucle")


// EXERCICE 5

// var n = parseInt(window.prompt("Entrez le 1er nombre"))
// var x = parseInt(window.prompt("Entrez le 2eme nombre"))
// console.log("Résultats")
// console.log("======================")

// for (n = 0; n <= 10; n++) {

//   result = n * x
//   console.log(n + "*" + x + "=" + result)
// }
// console.log("Fin de la boucle")

// EXERCICE 6

// var mot = window.prompt("Rentrez le mot");
// var voyelle = 1;
// var comp = 0;
// var temp;
// var tableau = ("aeiouy")
// console.log("Les voyelles");
// console.log("=========================");

// for (var i in tableau)
// {
//   console.log(tableau[i]);
//   temp = mot 
//   voyelle = 1

// while (voyelle != 0)
// {
//   voyelle = temp.indexOf(tableau[i])
//   voyelle++
//   temp = temp.substr(voyelle)
//   if (voyelle != 0)
//   {
//   comp++
//   }
// }
// }

// console.log("Nombre de voyelles " + comp)
// console.log("Fin de la boucle ")


// EXERCICE 7

var n = 0
var result = true;
var nb = window.prompt("Saisir un nombre");

for (n = 2; n < nb; n++) {
  if (nb % n == 0) 
  {
    result = false;
    alert(nb + " est pas premier "+result)
    break;
  }
  else 
  alert(nb + " est premier "+result)
  break;
}
