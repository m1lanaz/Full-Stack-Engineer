const rest1 = {
    name: 'capri',
    //numGuests: 20,
    numGuests: 2,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

//rest2.numGuests = rest1.numGuests || 10;
//rest1.numGuests = rest2.numGuests || 10;

//Same thing, more concise:

// Aka if there are no numGuests (if this variable is falsy) then set it to 10.
rest1.numGuests  ||= 10;
rest2.numGuests  ||= 10;

console.log(rest1);
console.log(rest2);

const x = {
    fname:'milana',
    age: 18,
}

const y = {
    name: 'random',
}

// Will assign if variable is null
x.age ??= 10;
y.age ??= 10;

console.log(x, y)

//x.fname = x.fname && 'ANNON';
//y.fname = y.fname && 'ANNON';
// Can be replaced with:
x.fname &&= 'ANNON';
y.fname &&= 'ANNON'; // wont give undefiened as it only assigns if it's truthy

console.log(x);
console.log(y); // Gives undefined because it doesn't have this variable unless you use &&=