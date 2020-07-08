



function format(checkpren) {
    function switchMAJ(replace) {
        return replace.toLowerCase();
    }
    checkpren = checkpren.replace(/é|è|ê/g,"e");
    checkpren = checkpren.replace(/[A-Zé]/g, switchMAJ);
    return checkpren;
}

let tab = ["audrey","aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];

bouton.addEventListener("click", function() {

    let prenom = document.getElementById("prénom").value
    let checkpren = format(prenom);
    tab = tab.filter(item => item !== checkpren); // Va créer un autre tableau, moins la valeur entrée dans le prompt
    tab.length = 10;
    alert(tab);

});
