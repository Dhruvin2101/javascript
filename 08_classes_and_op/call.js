function SetUsername(username) {
  this.username = username;
  console.log("called");
}

function CreateUser(username, email, password) {
  SetUsername.call(this, username); // call to pass current executional context to other and this to refer the setusername this
  this.email = email;
  this.password = password;
}

const chai = new CreateUser("Dhruvin", "abcd@gamil.com", "hello123");
console.log(chai);
