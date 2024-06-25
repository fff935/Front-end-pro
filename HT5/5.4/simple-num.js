//Дано ціле число (ввести через 'prompt'). З'ясувати, чи просте воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).

const n = prompt("Enter your number");
let simple = true;

for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        simple = false
    }
}
if(simple){
    console.log(`${n} is a simple number`);
}
else{
    console.log(`${n} is NOT a simple number`);
}