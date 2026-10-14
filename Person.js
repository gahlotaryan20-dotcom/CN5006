class Person {
  constructor(name, age, email) {
    this.name = "Aryan Gahlot";
    this.age = 20;
    this.email = "gahlotaryan20@gmail.com";
  }

  getPersonInfo() {
    return {
      Name: this.name,
      Age: this.age,
      Email: this.email
    };
  }
}

module.exports = Person;