const userCard = {
  name: "Alex",
  age: 15,
  town: "Dnipro",

  output: function () {
    console.log(`Hello, my name is ${this.name}
I'm ${this.age}
I live in ${this.town}`);
  },
};

userCard.output();
