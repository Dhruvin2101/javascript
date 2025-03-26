//ES6
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  EncryptPass() {
    //Method
    console.log(`${this.password}skdjssfdj`);
  }
}

const Dhruvin = new User("Dhruvin", "hello"); //new keyword **IMP**
console.log(Dhruvin);
console.log(Dhruvin.EncryptPass());

//----------------------------------------------------
//behind the scene

function CreateUser(username, password) {
  this.username = username;
  this.password = password;
}
CreateUser.prototype.EncryptPassword = function () {
  console.log(`${this.password}skdjssfdj`);
};

const param = new CreateUser("param", "hello");
console.log(param);
console.log(param.EncryptPassword());
