// filter
const coding = ['ruby', 'js', 'css', 'python']

// const values = coding.forEach( (item) => {
//     console.log(item)
// })

// console.log(values);

const myNums = ['1', '2', '3', '4', '5', '6']

const newNums = myNums.filter( (num) => num > 3)
// const newNums = myNums.filter( (num) => {
//     return num > 3)
// }
console.log(newNums)




// map

const dNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newDums = dNums.map( (num) => num + 3 )

const newDums = dNums
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)

console.log(newDums)





// reduce 

const heyNums = [1, 2, 3, 4, 5]

// const myTotal = heyNums.reduce( function(acc,currval) {
//     return acc + currval
// }, 0 )

const myTotal = heyNums.reduce( (acc,currval) => { acc + currval}, 0)

console.log(myTotal)

const shoppingCart = [
    {
        itemname: 'mobile dev course',
        price: 5999
    },
    {
        itemname: 'data science course',
        price: 12999
    },
    {
        itemname: 'javascript course',
        price: 2999
    },
]

const cartTotal = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(cartTotal)