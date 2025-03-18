//if - short hand

const balance = 1000

if( balance > 500) console.log(" balance is greater than 500"); //semi colon is must for short hand writing

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = null ?? 10
val1 = undefined ?? 20

console.log(val1)

//Terniary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80")

// && -> checks both the values
// || -> checks one of the values