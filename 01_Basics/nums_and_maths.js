const score = 400;
const balance = new Number(100); // stricter way for defining balance as integer datatype
// console.log(balance);

const oneNumber = 32.44568;
// console.log(oneNumber.toFixed(3)); //baiscally rounds up the value to 3rd digit starting from 0th index i.e 3

const hundered = 100000
// console.log(hundered.toLocaleString('en-IN'));


// *************************MATHS******************
console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(6.6));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);

const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //floor is used to round off the values to decimal point