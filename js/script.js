console.log('JS OK')
/* 
chiedo al viaggiatore il suo nome
chiedo al viaggiatore quanti kilometri fara
calcolo 0.21 per ogni km che percorrera
inserisco il costo base 
chiedo al viaggiatore la sua eta
se minore di 18 applico lo sconto del 20%
se e mmaggiore di 65 applico lo sconto del 40%
inserisco il costo con lo sconto
 */
//testo nel html
const sendBtn = document.querySelector('#send-btn');
const clearBtn = document.querySelector('#clear-btn');
const finalPrice = document.querySelector('#price');
sendBtn.addEventListener ('click', function(){
    const userName = document.getElementById('user-name').value;
    //km
let kmPrice = 0.21;
const userKm = parseInt(document.getElementById ('user-km').value);
const userAge = parseInt(document.getElementById ('user-age').value);
    //prezzo base
let basePrice = userKm * kmPrice;
let totalPrice = basePrice;
let message = "Tariffa Base";
console.log (basePrice + "€");
    //sconto del 20% gia applicato
if (userAge < 18) {
    totalPrice = (basePrice * 0.8);
    message = "Tariffa Under18";
    console.log (totalPrice + "€");
    //sconto del 20% gia applicato
} else if (userAge >= 65) {
    totalPrice = (basePrice * 0.6);
    message = "Tariffa Over65";
    console.log (totalPrice + "€");
} 

document.getElementById ('show-name').innerHTML = userName;
document.getElementById ('rate').innerHTML = message;
document.getElementById ('train-carriage').innerHTML = Math.floor(Math.random() *10 + 1);
document.getElementById('cp-code').innerHTML = Math.floor(Math.random() * 90000 + 10000);
finalPrice.innerHTML = totalPrice.toFixed(2) + "€";

})
clearBtn.addEventListener ('click', function(){
document.getElementById('user-name').value = "";
document.getElementById('user-km').value = "";
document.getElementById('user-age').value = "";
})




