let number = prompt("Enter your number:");
let allSameNumer;
let twoSameNumber;

if (number % 111 === 0) {
    allSameNumer = 1;
}
else if (new Set(number).size !== number.length) {
    twoSameNumber = 1;
}
else {
    alert(`"${number}": NO same digits`);
}

if (allSameNumer == 1) {
    alert(`"${number}": all digits are the same`);
}
if (twoSameNumber == 1) {
    alert(`Two numbers are the same`);
}