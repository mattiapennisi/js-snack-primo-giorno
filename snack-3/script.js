/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

numbers = 0

for (let i = 1; i < 11; i++) {
    let num = Number(prompt('Enter a number'))

    if (isNaN(num)) {
        console.log('Invalid input. Enter a correct number');
    } else {       
    numbers += num
    }
}

console.log(numbers);