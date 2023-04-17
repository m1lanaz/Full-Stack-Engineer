const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov <0); // Will return first element in array that satisfies this
console.log(firstWithdrawal);

//Different from flkter because:
// Find returns only element, filter returns array
// Find only returns first element that meets requirements

