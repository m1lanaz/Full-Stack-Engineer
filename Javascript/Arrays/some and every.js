const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Equality
console.log(movements.includes(-130));

//Condition
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// Every
// if all the array passes true to our condition then it'll return true

console.log(movements.every(mov => mov > 0));

movementsNew = [1,2,3,4,5];

console.log(movementsNew.every(mov => mov > 0));

//seperate callback 

const deposit = mov => mov > 0;

console.log(movements.filter(deposit));