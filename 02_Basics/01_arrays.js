const myArray = [1, 2, 3, 4, 5, 6, 7];
const myHeros = ["Batman", "superman", "ironman", "hulk", "hawkeye"];

const newArray = new Array(1, 2, 3, 4);

// console.log(MyArray[0]);
// console.log(myHeros);

//Array methods
// myArray.push(8);
// myArray.pop();    //removes the last value from the array
// myArray.unshift(9);    // adds the value to first


// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));


const oneArray = myArray.join(); //converts array to string
// console.log(myArray);  //normal arr
// console.log(oneArray);  //string arr

//splice and slice
const mna1 = myArray.slice(1,3);
console.log("A", myArray); // returns the value from 1-3 without inclding 3rd index but doesnt change the orignal array
console.log(mna1);
console.log()

console.log("B", myArray);
console.log()


const mna2 = myArray.splice(1,3); //returns the value from 1-3 including 3rd index and also removes index[1-3] from orignal arrray
console.log("C", myArray);
console.log(mna2);