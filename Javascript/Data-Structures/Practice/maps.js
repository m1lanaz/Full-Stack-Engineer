

const restMap = new Map();
restMap.set('owner', 'Mil');
restMap.set('name', 'Clacio resturant');
console.log(restMap);

restMap
.set('categories', ['Italian', 'Pizzeria', 'Organic'])
.set('close', 23)
.set(true, 'We are open');

console.log(restMap);

console.log(restMap.get('categories'));

console.log(restMap.has('categories'));
restMap.delete('name');
console.log(restMap);

restMap.clear();
console.log(restMap.size);

const arr = [1,2]
restMap.set(arr, 'Test');
console.log(restMap.get(arr));