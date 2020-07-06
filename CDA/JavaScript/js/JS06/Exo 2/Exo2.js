// EXERCICE 2

bouton.addEventListener("click", function() {
    let year = document.getElementById("ddn").value;
    let age = 0;

    if (2020 - year < 18)
    {
        age = 2020 - year
        window.alert("Il est mineur " + "Il a "+ age + " ans")
    } 
    else {
        age = 2020 - year
        window.alert("Il est majeur " + "Il a " + age + " ans")
    }

});