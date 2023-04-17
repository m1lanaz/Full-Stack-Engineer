const owners = ['Mils', 'Molly', 'Martha', 'Jojo'];
console.log(owners.sort());
// .sort() mutates the original array

//numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort()); // Doesnt sort them properly, acts as if they are strings


movements.sort((a, b) => {
    if (a > b) return 1;
    if (b > a) return -1;
});

console.log(movements);


//Descending:

movements.sort((a,b) => {
    if (a > b) return -1;
    if (a < b) return 1;
});

console.log(movements);

// Improvements

movements.sort((a,b) => a - b);
console.log(movements);