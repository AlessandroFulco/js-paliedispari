/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/



//lettura numero utente
let userNum = parseInt(document.getElementById('numero-utente').value);
console.log(userNum);




const button = document.querySelector('button');
button.addEventListener('click', function() {

    //salviamo la scelta dell'utente
    const scelta = document.getElementById('pari-dispari').value;
    console.log(scelta);

    //scelta numero pc
    let pcNum;
    pcNum = randomGenerator(1, 6);
    console.log(pcNum);

    let somma = userNum + pcNum;
    console.log("la somma dei due numeri è: ", somma);

    let determinaPari;
    let determinaDispari;

    function pariODispari(numero) {
        numero = somma;
        if(numero % 2 === 0) {
            return determinaPari = "pari";
        } else {
            return determinaDispari = "dispari";
        }
    }
    
    //salviamo Elemento DOM
    let showWinner = document.getElementById('vincitore');

    if(pariODispari(somma) == determinaPari) {
        showWinner.innerHTML = "Congratulazioni hai vinto";
    } else {
        showWinner.innerHTML = "Hai perso, ritenta";
    }
    







});


//funzione che genera un numero random da 1 a 5 per il computer
function randomGenerator(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min)) + min;
    return pcNum = randomNum;
}






