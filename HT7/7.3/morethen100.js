// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу).
// Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. Якщо користувач вводить більше ста,
// текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію.

function askForNumMoreThan100() {
  for (let i = 0; i < 10; i++) {
    let enteredNum = prompt("Please enter a number:");

    let num = Number(enteredNum);

    if (isNaN(num)) {
      alert(`You entered text ${enteredNum}`);
      console.log(enteredNum);
      break;
    }
    else if (num < 100) {
      alert("Please enter a number more than 100");
      console.log(enteredNum);
    }
    else {
      console.log(num);
      console.log(enteredNum);
      break;
    }
  }
}

askForNumMoreThan100();
