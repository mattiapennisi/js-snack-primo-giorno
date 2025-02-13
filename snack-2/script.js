/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

let wordOne = String(prompt('Enter a word'))
let wordTwo = String(prompt('Enter a second word'))

if (wordOne.length > wordTwo.length) {
    console.log(wordTwo);
    console.log(wordOne);
} else if (wordOne.length < wordTwo.length) {
    console.log(wordOne);
    console.log(wordTwo);
} else {
    console.log('Words got the same length');
}