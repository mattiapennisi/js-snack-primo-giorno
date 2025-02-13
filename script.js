/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

const numOne = prompt('Inserisci un numero (esempio "1"')
const numTwo = prompt('Inserisci un altro numero (esempio "1"')

if (numOne > numTwo) {
    console.log(numOne);
} else if (numOne < numTwo) {
    console.log(numTwo);
} else {
    console.log('I numeri sono uguali');
}