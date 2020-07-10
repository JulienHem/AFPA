bouton.addEventListener('click', function() { // PERMET DE LANCER L'EXERCICE AU CLIC DU BOUTON
    const prénom = document.getElementById("pren").value;
    const nom = document.getElementById("name").value;
    const bouton = document.getElementById("bouton");

    // PERMET LA DIFFERENCIATION ENTRE HOMME ET FEMME DANS L'ALERT

    if (document.getElementById("homme").checked) { 
        Mr = document.getElementById("homme").checked;
        Mr = "Mr ";
        alert("Bonjour " + Mr + prénom + " " + nom);
    }
    else if (document.getElementById("femme").checked){ 
        Mme = document.getElementById("femme");
        Mme = "Mme ";
        alert("Bonjour " + Mme + prénom + " " + nom)
    }


    });