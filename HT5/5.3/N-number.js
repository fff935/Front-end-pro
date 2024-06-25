//Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

const N = prompt("Enter your number");

for (let i = 1; N > Math.pow(i, 2) && i <= 100; i++) {
    console.log(i);
}