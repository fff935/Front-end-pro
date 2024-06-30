function delItem(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
      i--; 
    }
  }
  return array;
}

const array = [7, 1, 6, 8, 3, 1, 5];
const itemToRemove = 1;

const filteredArr = delItem(array, itemToRemove);
console.log(filteredArr); 
