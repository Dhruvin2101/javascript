// const tinderUser = new Object(); // singleton obj
const tinderUser = {} //non-singleton obj
tinderUser.name = "Dhruvin";
tinderUser.email = "abc@gamil.com";
tinderUser.age = 21;

const regularUser = {
    email: "someone@gamil.com",
    fullName:{
        userFullName: {
            FirstName:"Dhruvin",
            LastName: "Patel"
        }
    }
}

// console.log(regularUser.fullName.userFullName.FirstName)

const obj1 ={
    a: "hello",
    b: "hi"
}
const obj2 = {
    c: "bye",
    d: "tata"
}

// const obj3 = Object.assign({}, obj1, obj2); //using {} is a nice practice and it ensures both obj returns a new obj and assign=> merge
const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("name"))


//******* obj destructure ***********/
const course = {
    courseName: "Js",
    price: 999,
    instructor: "Dhruvin Patel"
}
const {instructor} = course // would just have to write "instructor" instead of "course.instructor"
const {instructor: ins} = course // would just have to write "ins" instead of "course.instructor"
console.log(ins);