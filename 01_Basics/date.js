 let myDate = new Date();
//  console.log(myDate);
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toISOString());
//  console.log(myDate.toLocaleString());
//  console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,2);
// let myCreatedDate = new Date("2025-5-21");   //yyyy-MM-dd
let myCreatedDate = new Date("5-20-2025");      //MM-DD-YYYY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));