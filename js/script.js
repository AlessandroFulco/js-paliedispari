const parolaUtente = prompt('inserisci una parola');
console.log(parolaUtente);


function reverse(parola) {
    // separo ogni lettera della stringa
    let wordSeparator = parola.split('');
    console.log(wordSeparator);

    // inverto l'ordine di ogni lettera della stringa
    wordSeparator.reverse();
    console.log(wordSeparator);

    let wordReverse = wordSeparator.join('');
    console.log(wordReverse);
    return wordReverse;
}

reverse(parolaUtente);

if (parolaUtente == reverse(parolaUtente)) {
    console.log("la parola è palindroma");
} else {
    console.log("la parola non è palindroma");
}
