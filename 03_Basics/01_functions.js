function addition(number1, number2){
     let result = number1 + number2;
     return result
}
const result = addition(4, 5)
console.log(result);

function user(username){
    return `${username} just logged in`
}
console.log(user("Dhruvin"));

function calculateCartPrice(...nums){  //for any number of arguments
    return nums 
}
console.log(calculateCartPrice(200, 100, 300, 40));


//**************************to handle any object in function
const user1 = {
    name: 'Dhruvin',
    price: 100
}
function handleObject(anyObject){
    console.log(`the username is ${anyObject.name} and the price is ${anyObject.price}`);
}
handleObject(user1);


//**************************to handle any array in function
const myArray = [100, 200, 300, 410]
function handleArray(anyArray){
    return anyArray[1];
}
console.log(handleArray(myArray))