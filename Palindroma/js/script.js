
// leggere input utente
const parolaUtente = document.querySelector('input').value;
console.log(parolaUtente);

// salviamo il bottone
const button = document.querySelector('button');
console.log(button);


// creare evento click
button.addEventListener('click', function() {

    let showUserWord = document.getElementById('parola-inserita');
    showUserWord.innerHTML = "La parola inserita è: " + parolaUtente;

    reverse(parolaUtente);
    
    function reverse(parola) {
        // separo ogni lettera della stringa
        let wordSeparator = parola.split('');
        console.log(wordSeparator);
    
        // inverto l'ordine di ogni lettera della stringa
        wordSeparator.reverse();
        console.log(wordSeparator);
    
        //unisco tutti gli elementi della stringa reverse
        let wordReverse = wordSeparator.join('');
        console.log(wordReverse);
        return wordReverse;
    }
    
    //confronto tra la prola inserita dall'utente e la parola inversa
    let showComparison = document.getElementById('confronto');
    showComparison.innerHTML = `Confronto tra ${parolaUtente} e ${reverse(parolaUtente)}`;

    // selezione del'elemento DOM
    let showAnswer = document.getElementById('risposta');

    //istruzione di confronto
    if (parolaUtente == reverse(parolaUtente)) {

        showAnswer.innerHTML = "La parola è palindroma";
        // console.log("la parola è palindroma");

    } else {

        showAnswer.innerHTML = "La parola non è palindroma";
        // console.log("la parola non è palindroma");

    }
});
