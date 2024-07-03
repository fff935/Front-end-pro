//Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

function createSum(){
    let total = 0;
    return function (number){
        total += number;

        return total;
    }
}

let sum = createSum();

console.log(sum(4));
console.log(sum(8));
console.log(sum(4));
console.log(sum(10));
console.log(sum(3));