const array = [1, 2, 3, 2, 10, 2, 18, 36, 5, 7, 8, 6];
let count = 0;

function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    count++;
    if (array[i] === value) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 3));
console.log('count:', count);