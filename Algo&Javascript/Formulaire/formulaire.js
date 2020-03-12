// function checkForm(f){
// alert("Vous vous appelez : " + f.elements["nom"].value + " " + f.elements["prenom"].value);
// return false; // do not submit the form
// }

function livre(auteur, editeur, prix) { 
    this.auteur = auteur; 
    this.editeur = editeur; 
    this.prix = prix; 
} 

    var l1 = new livre("Ken", "Flo", 15.0); 
    document.write("Mon Auteur '" + l1.auteur + "' vaut " + l1.prix + " euros.");
