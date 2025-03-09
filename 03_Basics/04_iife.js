// Immediately Invoked Function Expression (IIFE)
(function hey(){
    console.log("Hey there!");
})();

//syntax: (function)()
//2nd () automatially calls the object so we cont have to write hey() for execution



//eg:2
( (name) => {
    console.log(`Hello bro ${name}`)
})("Dhruvin");