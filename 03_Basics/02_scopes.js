
if (true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Dhruvin";

    function two(){
        const website = "youtube"
        console.log(username);  //child can acces parent variables , but parent cant of child's
    }
    // console.log(website);
    two();
    
}
one();


// ++++++++++++++++++++ interseting ++++++++++++++++++++
addone(5); // no error
function addone(num){
    return num + 1;
}


addtwo(5); // error => cant access before delaring a variable 
const addtwo = function(value){
    return value + 2;
}