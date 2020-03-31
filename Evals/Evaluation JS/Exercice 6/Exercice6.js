var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];


do { // Cette boucle va permettre de rentrez un prénom et de le supprimer
    alert(tab)
    var prenom = prompt("Quel prénom recherchez-vous ?")
    var tab = tab.filter(item => item !== prenom); // Va créer un autre tableau, moins la valeur entrée dans le prompt
    tab.length = 10;
    

}while(tab != 0) // Si le tableau arrive à 0 le script s'arrête







