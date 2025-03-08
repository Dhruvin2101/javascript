const marvel_heros = ["ironman", "hulk", "blackPanther"]
const dc_heros = ["greenLantern","Flash", "Superman"]

marvel_heros.push(dc_heros) //pushes the whole array as a last element  i.e [1,2,3,[4,5]]

const combined_arr = marvel_heros.concat(dc_heros); // returns a new array and combines properly  i.e [1,2,3,4,5]
console.log(combined_arr); 


// a better way is to use "spread(...)" ,it basically spreads everything and then combines as a whole
const newAllHeros = [...marvel_heros, ...dc_heros];
console.log(newAllHeros);


//***************************************************************************************************************** */
const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9,[4,5]] ];
const usable_array = another_array.flat(Infinity);  //flat(depth to be reached) is used to solve the problem of arrya inside array
console.log(usable_array);

console.log(Array.isArray("Dhruvin")); //answer => boolean
console.log(Array.from("Dhruvin"));  //converts string=>array
console.log(Array.from({name: "Dhruvin",age:21})); //retuns empty array => not specifed array should be made of strings

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3));