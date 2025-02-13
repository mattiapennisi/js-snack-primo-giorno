/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

let numbers = []

for (let i = 1; i < 7; i++) {
    const userNum = Number(prompt('Enter a number'))
    if (userNum % 2 == 1) {
        numbers.push(userNum)
    } 
}

console.log(numbers);