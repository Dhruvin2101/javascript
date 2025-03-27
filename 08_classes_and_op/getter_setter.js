class user {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value;
    return `${this.value}abc`;
  }
}
let Dhruvin = new user("dhruvin", "abc");
console.log(Dhruvin.password);
