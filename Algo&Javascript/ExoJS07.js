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
// while (cpt<5)     
// {
//     if (cpt==4)  
//     {  
//         break;
//     }  
//     console.log("ligne : "+cpt)
//     cpt++;  
// }    
// console.log("fin de la boucle");

                // Boucles avec do ... while
// do 
// {      
//     instructions; 
// } while (condition);

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

                // Boucles for ... in
// var tableau = ["Paul", "Pierre", "Anne", "Sophie"];
//     for (var i in tableau)   
// { 
//     console.log(tableau[i]);  
// }


                // EXERCICE 1

var i=1;
var pre;
console.log("Liste de prénoms");
console.log("==================");

while (pre != "" && i <= 10)
{
  pre=window.prompt("Saisissez le prénom" + " " +i)
  result = pre
  console.log("Prénom"+i+" = "+result);

  i++
} 

console.log("Fin de la boucle");
