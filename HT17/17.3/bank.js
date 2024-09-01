class BankAccount {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      return console.log("Impossible operation");
    } else {
      this.balance += amount;
    }
  }

  withdraw(amount) {
    if (amount <= 0) {
      return console.log("Impossible operation");
    } else if (this.balance - amount < 0) {
      return console.log("Impossible operation");
    } else {
      this.balance -= amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}

const account1 = new BankAccount("Alex", 1000);
console.log("Alex: " + account1.getBalance());
account1.deposit(500);
console.log("Alex: " + account1.getBalance());
account1.withdraw(200);
console.log("Alex: " + account1.getBalance());
account1.withdraw(10000);
console.log("Alex: " + account1.getBalance());

const account2 = new BankAccount("Nastya", 5000);
console.log("Nastya: " + account2.getBalance());
account2.deposit(700);
console.log("Nastya: " + account2.getBalance());
account2.withdraw(100);
console.log("Nastya: " + account2.getBalance());
