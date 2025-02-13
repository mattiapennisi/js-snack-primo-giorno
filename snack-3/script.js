/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

numbers = 0

for (let i = 1; i < 11; i++) {
    let num = Number(prompt('Enter a number'))
    numbers += num
}

console.log(numbers);
