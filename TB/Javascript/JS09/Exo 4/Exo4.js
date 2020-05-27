var tableau = [666, 1, 7, 69, 33 ,13];
var j = 1;
var n = tableau.length;

    while (j != n){
    i = j - 1
    var tmp = tableau[j]
    
        while (i > -1 && tableau[i] > tmp){
            tableau[i+1] = tableau[i]
            i--
        }
        tableau[i+1] = tmp
        j++
    }
console.log(tableau)