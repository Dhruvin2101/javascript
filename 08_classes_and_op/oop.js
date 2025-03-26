// constructor

function user(username, password, isLoggedIn) {
  this.username = username; //this helps to identify the context(which username we are talking about)
  this.password = password;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const user1 = new user("dhruvin", "hello", true); // new keyword is used as a constructor and it also creates a new instance so by creating new refernecs wont affect the previous one
const user2 = new user("param", "patel", false);

// console.log(user1);
// console.log(user2);

//**********Make your own function using prototype */
function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(this.score);
};

const user3 = new createUser("Dhruvin", 20); //without 'new' keyword the value of user wont get injected to user3 **IMP**
user3.printMe();
user3.increment();
user3.printMe();
