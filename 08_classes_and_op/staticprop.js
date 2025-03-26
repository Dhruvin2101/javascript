class User {
  constructor(username) {
    this.username = username;
  }

  static SetId() {
    // static prevents the method from getting accessed by itself and it child classes
    return 123; // generally used when we dont want to give access to someother class etc
  }
}

const dhruvin = new User("dhruvin");
console.log(dhruvin.SetId());
