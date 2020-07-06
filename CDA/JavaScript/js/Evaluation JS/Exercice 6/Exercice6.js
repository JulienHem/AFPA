



function format(checkpren) {
    function switchMAJ(replace) {
        return replace.toLowerCase();
    }
    checkpren = checkpren.replace(/é|è|ê/g,"e");
    checkpren = checkpren.replace(/[A-Zé]/g, switchMAJ);
    return checkpren;
}

var tab = ["audrey","aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];

alert("Choisissez un prénom de cette liste : Audrey, Aurélien, Flavien, Jérémy, Laurent, Melik, Nouara, Salem, Samuel, Stéphane")
do { // Cette boucle va permettre de rentrez un prénom et de le supprimer
    var prenom = prompt("Quel prénom recherchez-vous ?")
    var checkpren = format(prenom);
    var tab = tab.filter(item => item !== checkpren); // Va créer un autre tableau, moins la valeur entrée dans le prompt
    tab.length = 10;
    alert(tab);

}while(tab != 0) // Si le tableau arrive à 0 le script s'arrête

