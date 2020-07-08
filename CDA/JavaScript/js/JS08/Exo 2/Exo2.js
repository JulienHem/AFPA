
let resultat = 0
let nb = document.getElementById("nbre").value

bouton.addEventListener("click", function() {


    for (i = 0; i <= 10; i++) {
        resultat = resultat + "\n" + i +"x" + nb + " = " + i*nb;
        
    }
    alert(resultat)
});