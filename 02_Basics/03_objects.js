//singleton
//object.create

//object literal
const mysmybol = Symbol("mykey1");

const Jsuser = {
    name:"Dhruvin",
    "fullName": "Dhruvin Patel", // you cannot access this using . so this method[] is also very imp
    [mysmybol]: "key1",
    age:21,
    location:"Surat",
    email:"dhruvinabc@ggmial.com"
}

//ways to access the values in object
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["fullName"]);
console.log(Jsuser.mysmybol);  //type => string
console.log(Jsuser[mysmybol]); //type => symbol

Jsuser.email = "dhruvin@abc.com"; //changing the value

// Object.freeze(Jsuser); // will now freeze and the changes made below wont affect it

Jsuser.greeting = function(){
    console.log("hello js user",this.name);
}

console.log(Jsuser.greeting);
console.log(Jsuser.greeting());