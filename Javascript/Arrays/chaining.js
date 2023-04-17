const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const total = movements
.filter(mov => mov > 0)
.map((mov, i, arr) => {
    console.log(arr);
    return mov * 1.1
})

.reduce((acc,mov) => acc+ mov);

console.log(total);