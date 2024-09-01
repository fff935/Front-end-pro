class Calculator {
  multiply(firstNumber, secondNumber) {
    this.resultValue = firstNumber * secondNumber;
    return this.resultValue;
  }

  divide(firstNumber, secondNumber) {
    this.resultValue = firstNumber / secondNumber;
    return this.resultValue;
  }

  add(firstNumber, secondNumber) {
    this.resultValue = firstNumber + secondNumber;
    return this.resultValue;
  }

  subtract(firstNumber, secondNumber) {
    this.resultValue = firstNumber - secondNumber;
    return this.resultValue;
  }

  result() {
    console.log(this.resultValue);
  }
}

const calculator = new Calculator();

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(3, 6)); // 18
console.log(calculator.divide(8, 2)); // 4
