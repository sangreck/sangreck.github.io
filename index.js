var main = document.getElementById("dates");
// 
var date = new Date();
var annee = date.getFullYear();
var mois = date.getMonth();
var jour = date.getDate();
var jours = date.getDay();
// 
var Jours =["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]
var Mois = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre",]

mois = Mois[mois];
jours = Jours[jours];


// 
// 
// var heure = date.getHours();
// var minute = date.getMinutes();
// var second = date.getSeconds();

// if(heure < 10){heure = "0"+heure;}
// if(minute < 10){minute = "0"+minute;}
// if(second < 10){second = "0"+second;}
// 



setInterval(() => {
    var date = new Date();
    var heure = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

      if(heure < 10){heure = "0"+heure;}
      if(minute < 10){minute = "0"+minute;}
      if(second < 10){second = "0"+second;}

     main.innerHTML = heure + ":"+ minute + ":" + second;
    }, 1000);
    





