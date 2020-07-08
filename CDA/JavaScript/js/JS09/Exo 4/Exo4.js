function tri(tabl) { // Permet de faire le tri
    do {
        changed = false;

        for (let i = 0; i < tabl.length - 1; i++) {
            if (tabl[i] > tabl[i + 1]) {
                var tampon = tabl[i + 1]
                tabl[i + 1] = tabl[i]
                tabl[i] = tampon
                changed = true;
            }
        }
    } while (changed)
}




bouton.addEventListener("click", function () {
    let num = document.getElementById("num").value;
    tabl = num.split(" ");
    for (let i = 0; i < tabl.length ; i++) {
        tabl [i] = parseInt(tabl[i])
    }
    tri(tabl)
    alert(tabl)
}); 