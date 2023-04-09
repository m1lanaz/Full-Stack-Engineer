const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza','Pasta','Risotto']);

console.log(ordersSet); // Doesn't print the duplicates

console.log(new Set('Mil'));

console.log(ordersSet.size); // Gets size, doesn't include the duplicates

console.log(ordersSet.has('Pizza')); //Checks if in the set

ordersSet.add('Garlic Bread');

console.log(ordersSet);

ordersSet.delete('Pizza');

console.log(ordersSet);

//ordersSet.clear();

console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//Example 
const staff = ['waiter', 'chef', 'waiter', 'manager','chef','waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);
const newArray = [...staffUnique];
console.log(newArray);

//OR

const arrayNew = [...new Set(staff)];