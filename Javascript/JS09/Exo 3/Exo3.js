function tri (tabl){ // Permet de faire le tri
    do {
        changed = false;
        for (i = 0; i < nb -1; i++){
            if (tabl[i] > tabl[i + 1]){
            var tampon = tabl[i + 1]
            tabl[i + 1] = tabl[i]
            tabl[i] = tampon
            changed = true;
        }
    }
    }while(changed);
}

var tabl = new Array(parseInt(prompt("Saisissez le nombre de colonne : ")))
var nb = tabl.length
for (i = 0; i < nb; i++){
tabl[i] = parseInt(prompt("Saisissez vos numéros :" ))
console.log(tabl)
}

tri(tabl)
console.log(tabl)