const array = [
  1, 2, 3, 2, 10, 2, 18, 36, 5, 7, 8, 6, -35, -8, -6, -2, 35, 64, 89,
];
let count = 0;

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count++;
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

console.log(selectionSort(array));
console.log("count:", count);