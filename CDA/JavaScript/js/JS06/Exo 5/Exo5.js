
        //  EXERCICE 4

bouton.addEventListener("click", function(){

    let situation = document.getElementById("yes").checked;
    let = 0;

    if (situation) {
        p = 25;
    }
    else {
        p = 20
    }

    var kid = parseInt(document.getElementById("kid").value);

    if (kid >= 1){
        p = p + kid * 10
    }

    var sal = parseInt(document.getElementById("salaire").value);
    if (sal <= 1200) {
        p = p + 10;
    }

    if (p >= 50)
    {
        window.alert("La participation est plafonée à 50%")
    }

    else {
        window.alert("Vous avez le droit à " + p + "%" + " de participation")
    }



});