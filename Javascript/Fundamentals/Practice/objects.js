const milana = {
    firstName: 'Milana',
    lastName: 'Zab',
    age: 17,
    job: 'student',
    friends: ['Bob', 'Stacey','Peter', 'Steven', 'Molly']
};

//dot notation
console.log(milana.lastName);

// bracket notation - can put a calcultion in bracket
console.log(milana['lastName']);

const nameKey = 'Name';

console.log(milana['first' + nameKey]);

// To add new properties:

//dot notation:
milana.Location = 'UK';
milana['Languages'] = ['Russian', 'English'];

console.log(milana);

console.log(`${milana['firstName']} has ${milana['friends'].length} friends, and her best friend is ${milana['friends'][2]}`);