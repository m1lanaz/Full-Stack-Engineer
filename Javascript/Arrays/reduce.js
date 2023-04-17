const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

const balance = movements.reduce(function(acc, cur, i, arr) {
    console.log(`Iteration ${i} : ${acc}`);
    return acc + cur;
}, 0) // the value specificed here is the initial value of the acc

// accuulator, current value, index, array
// always return

console.log(balance);