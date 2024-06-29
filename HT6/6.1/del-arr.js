// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.

function symbDel(line, symbols) {
  const symbolsArray = symbols.split("");
  const filteredArray = line.split("").filter((char) => !symbolsArray.includes(char));
  return filteredArray.join("");
}

const text = prompt("Enter text");
const symbols = prompt("Enter symbols to delete");

const result = symbDel(text, symbols);
alert(result);
