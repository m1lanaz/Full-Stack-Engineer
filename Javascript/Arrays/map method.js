const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const conversion = movements.map(function(mov) {
    return mov * euroToUsd;
});

const movementsUSD = movements.map(mov => mov * euroToUsd);

const movementsDescriptions = movements.map((mov, i) =>
    `Movement ${i + 1}: You deposited ${mov}`
);

console.log(movementsDescriptions);

// Could be rewritten using
const movementsUSDfor = []
for (const mov of movements) movementsUSDfor.push(mov * euroToUsd)