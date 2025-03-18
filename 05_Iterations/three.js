// for of
// ["", "", ""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num) 
}


// Maps

const map = new Map()
map.set('IN', "India") 
map.set('USA', "United States of America") 
map.set('FR', "France") 


// console.log(map)

for (const [key, values] of map) {
    console.log(key + ':-' + values)
}

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

for (const [key, values] of myObject) {
    console.log(key + ':-' + values)
}
