let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2)); // starts at 2, doesn't mutate original array
console.log(arr.slice(2,4));

console.log(arr.splice(2));
console.log(arr); // Array loses the part you sliced

arr  = ['a','b','c','d','e']
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

const letters = arr.concat(arr2);
console.log(letters);


console.log(letters.join('-'));