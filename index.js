
var dat = document.querySelector(".date");
var tim = document.querySelector(".time");
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

dat.innerHTML = jours + " "+ jour + " " + mois+ " "+ annee


setInterval(() => {
    var date = new Date();
    var heure = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

      if(heure < 10){heure = "0"+heure;}
      if(minute < 10){minute = "0"+minute;}
      if(second < 10){second = "0"+second;}

     tim.innerHTML = heure + ":"+ minute + ":" + second;
    }, 1000);
    
// *********************************************************
// 
// console.log(window.innerHeight);
  // console.log(window.scrollY);
  // console.log(document.body.offsetHeight);


const myselfty = document.querySelector('.myself');
const gen = document.getElementById('geoss')
const travaux = document.querySelector('.myself');
console.log(gen);

window.addEventListener('scroll', function  () {
  
scrollValue = (window.innerHeight+window.scrollY) / (document.body.offsetHeight);
// console.log(scrollValue);

if (scrollValue > 0.21){
  myselfty.style.opacity = '1';
  myselfty.style.transform = 'none';
}
if (scrollValue > 0.33){
  gen.style.opacity = '1';
  gen.style.transform = 'none';
}
  
});






