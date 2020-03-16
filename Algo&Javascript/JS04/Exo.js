// Exercice Afficher du texte

myVar = "Bonjour";
var bienvenue = "Bienvenue sur notre site web"
var reponse1 = window.prompt("Entrez votre nom");
var reponse2 = window.prompt("Entrez votre prénom")

if (window.confirm("Êtes-vous un homme ?") == true) {
    window.alert(myVar + " " + reponse1 + " " + reponse2 + " " + "\n" + bienvenue);
}

