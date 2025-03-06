// Hoisting => It basically means that the JS reads the code from top to bottom format so if we try to print the thing which is initialized later

//Conversion

let score = "33abc";

console.log(typeof(score));

let new_score = Number(score);
console.log(typeof(new_score));
console.log(new_score);

console.log("--------------------------------");

let hello = null;

console.log(typeof(hello));

let new_hello = Number(hello);
console.log(typeof(new_hello));
console.log(new_hello);

console.log("--------------------------------");

let bus = undefined;

console.log(typeof(bus));

let new_bus = Number(bus);
console.log(typeof(new_bus));
console.log(new_bus);

/* "33" => 33 
    "33abc" => NaN
    null => 0
    true => 1; false => 0
*/
console.log("--------------------------------");


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

/* 1 => true
    "" => false
    "dhruvin" => true
*/
console.log("--------------------------------");


