const array = [
  1, 2, 3, 2, 10, 2, 18, 36, 5, 7, 8, 6, -35, -8, -6, -2, 35, 64, 89,
];
let count = 0;

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
      count++;
    }
  }
  return array;
}

console.log("length: ", array.length);
console.log(bubbleSort(array));
console.log("count: ", count);
