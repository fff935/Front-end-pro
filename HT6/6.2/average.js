// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function calcAverage(arr) {
let sum = 0;
let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      sum += arr[i];
      count++;
    }
  }
  if (count === 0) {
    return 0;
  }
  return sum / count;
}
const array = ['apple', 84, 'banana', null, 93, undefined, NaN, 'orange', 10, 4];
const average = calcAverage(array);
console.log("The average value of the numbers in this array: ", average);