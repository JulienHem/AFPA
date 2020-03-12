// EXEMPLE 1



// console.log("La 2nde zone de texte a pour nom :");
// console.log(document.forms['form1'].elements[1].name);
// console.log("La 1ère zone de texte a pour valeur : ");
// console.log(document.forms['form1'].elements['nom'].value); 
// console.log("Le bouton Submit a pour identifiant unique : "); 
// console.log(document.getElementById('idSubForm1').id); 
// console.log("Le bouton Submit a pour valeur : "); 
// console.log(document.getElementsByName('subForm1')[0].value);


// EXEMPLE 2

// function testerRadio() {
//     var radio = document.getElementsByName("btnRadChoix");
//     for (var i = 0; i < radio.length; i++) 
//         {
//         if (radio[i].checked) { document.getElementById("txtBox1").value = radio[i].value; 
//     }
//     }
// }     


// EXEMPLE 3

// var version = navigator.appVersion;
// console.log("Le code name de votre browser est :" + navigator.appCodeName);
// console.log("Le nom ou la marque du browser est :" + navigator.appName);
// console.log("Les informations sur la version sont :" + version);
// console.log("Le browser a comme user-agent :" + navigator.userAgent);
// console.log("");
// if (version.indexOf('Win') > -1) {
//     console.log("<br />Vous etes sous l'environnement Windows");
//     console.log("<br />");
// }
// if (navigator.userAgent.indexOf('Firefox') > -1) {
//     console.log("Vous utilisez un navigateur FireFox");
// }
// else if (version.indexOf('Chrome') > -1) {
//     console.log("Vous utilisez un navigateur Chrome");
// }
// else if (version.indexOf('MSIE') > -1) {
//     console.log("Vous utilisez un navigateur Microsoft Internet Explorer");
// }
// else { console.log("Vous utilisez un navigateur inconnu"); }


// EXEMPLE 4

// var myDate1 = new Date() ;// Date du jour
// var myDate2 = new Date(3600*24*365*40) ;// Date depuis le 1er janvier 1970
// var myDate3 = new Date(2012, 9, 19) ;
// var myDate4 = new Date(2012, 9, 19, 10, 33, 12);
// var myDate5 = new Date("Jan 1, 2000 00:00:00");
// console.log('new Date() : ' + myDate1.toLocaleString()); 
// console.log('new Date(3600*24*365*40) : ' + myDate2.toLocaleString());
// console.log('new Date(2012, 9, 19) : ' + myDate3.toLocaleString());
// console.log('new Date(2012, 9, 19, 10, 33, 12) : ' + myDate4.toLocaleString());
// console.log('new Date("Jan 1, 2000 00:00:00") : ' + myDate5.toLocaleString());
// console.log("");
// var annee = 1900 + myDate1.getYear();
// var mois  = myDate1.getMonth() + 1;
// var jour  = myDate1.getDate();
// console.log('date du jour : ' + jour + "/" + mois + "/" + annee);