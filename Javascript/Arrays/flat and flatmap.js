
const arr = [[1,2,3], [4,5,6], 7,8];

console.log(arr.flat());

const arrDeep = [[[1,2],3], [4,[5,6]], 7,8];
// When .flat is used on this it still contains two inner arrays
// Flat method goes one level deep

console.log(arrDeep.flat(2)); // goes two levels deep

//Flatmap
// like usng map and then following up with flat
