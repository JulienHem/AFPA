            // Schéma

//  if (prédicat) 
//  {
//     Instruction 1      
//     Instruction 2
//     ...   
//     Instruction N
// } 


            // Conditions

// var reponse == "oui"; 

// if (reponse == "oui")
// {    
//     console.log("Bonne réponse !");    // Affichera 'Bonne réponse' dans la console
// }

                // Conditions multiples
        // Conditions avec ET

// if (age > 18 && permis == "Voiture")
// {
//     console.log("Vous avez plus de 18 ans ET vous avez un permis e conduire voiture, vous pouvez conduire");
// }

// // Conditions avec OU
// if (age > 18 || permis == "voiture")
// {
//     console.log("Vous avez plus de 18 ans OU vous avez un permis de conduire viture, vous ouvez conduire");
// }

// if (age >= 18 || sexe == "Homme")  
// {
//     console.log("Vous avez au moins 18 ans OU vous un êtes un homme, vous pouvez conduire");
// }

            // Conditions avec else

// var reponse = "oui";

    // 1er cas
// if (reponse == "oui")
// {
//     console.log("Bonne réponse !");
// }

// 2ème cas
// if (reponse == "non")
// {
//     console.log("Mauvaise réponse !");
// }

// if (reponse == "oui")
// {
//     console.log("Bonne réponse !");
// }
// else{
//     console.log("Mauvaise répose !");
// }

// var reponse = "B";

// if (reponse == "A" )
// {
//     console.log("Bonne réponse");
// }
// else if (reponse =="B")
// {
//     console.log("Mauvaise réponse !");
// }

// var reponse = "C";

// if (reponse == "A")
// {
//     console.log("Bonne réponse!");
// }
// else if (reponse == "B")
// {
//     console.log("Mauvaise réponse !");
// }
// else
// {
//     console.log("Réponse inconnue.");
// }

            // Instruction switch

// var modele = "Clio";

// switch (modele) {
//     case "208":
//         console.log("Modèle 208 : marque Peugeot");
//         break;

//     case "Clio":
//         console.log("Modèle Clio : marque Renault");
//         break;

//     case "C3":
//         console.log("Modèle C3 : marque Citroën");
//         break;

//     default:
//         console.log("Modèle " + modele + ": marque inconnue");
// }

            // Imbrication de conditions

// var reponse = "oui";

// if (reponse == "oui")
// {
//     console.log("Bonne réponse!");

//     score++; // augmente le score de 1

//     if (score == 20)
//     {
//         console.log("Vous avez gagné !");
//     }// fin du 2ème if
// }//fin du 1er if


                // Condition
var age = 19;

(age >=18) ? console.log("Vous êtes majeur") : console.log("Vous êtes mineur")