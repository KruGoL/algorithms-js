const map = new Map();
const obj = { id: 5 };
map.set(obj, "1");

console.log(map.get(obj));

const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(1);
set.add(1);
set.add(2);
set.add(5);
console.log(set);
