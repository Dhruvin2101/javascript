//for-in loop



// *****  for objects    *****/
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`)
}


//******   for Array *****/
const myArray = ['C++', 'Ruby', 'Swift']
for (const key in myArray) {
    console.log(` ${key} is ${myArray[key]}`)
}