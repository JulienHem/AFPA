
bouton.addEventListener("click", function() {
    const num = document.getElementById("num").value 
    const a = num % 2;

    if (a == 0) {
        window.alert("Nombre pair")
    }
    else 
    window.alert("Nombre impair");

});