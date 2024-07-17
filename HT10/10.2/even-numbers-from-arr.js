const origArr = [10, 15, 20, 25, 30];
let evenNumbers = origArr.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);
