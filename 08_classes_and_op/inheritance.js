class User {
  constructor(username) {
    this.username = username;
  }

  LogMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends user {
  constructor(username, password, email) {
    super(username); //would automatically call the username from parent class including refferinf eith 'this' keyword
    this.password = password;
    this.email = email;
  }
}
