const user = {
    username: "Dhruvin",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        
    }
}

// function chai(){
//     const username = "dhruvin";
//     console.log(this.username);  // error => only works in object not in function 
// }

// const mychai = function() {
//     const username = "dhruvin";
//     console.log(this.username);  // error => only works in object not in function
// }
// mychai();

const mychai = () => {
    const username = "dhruvin";
    console.log(this.username);  // error => only works in object not in function
}
mychai();

// const add = (num1,num2) => {
//     return  num1 + num2;
// }

// const add = (num1,num2) => (num1 + num2); //wouldn't ahve to write return keyword in "()""


const add = (num1,num2) => ({username: "dhruvin"});

console.log(add(1, 5));