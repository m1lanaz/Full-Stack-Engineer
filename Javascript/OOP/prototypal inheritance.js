'use strict';

const person = function(firstName, birthYear) {
    console.log(this);
    //Properties
    this.firstName = firstName;
    this.birthYear = birthYear;
};

person.prototype.calcAge = function() {
    console.log(2023 - this.birthYear);
}; 


const Milana = new person('Milana', 2005);

Milana.calcAge();

console.log(Milana.__proto__); 

console.log(Milana.__proto__.__proto__.__proto__);

console.log(person.prototype.constructor);


Array.prototype.unique = function() {
    return [...new Set(this)]
}

const arr = [1,2,3,4,5,6,6,5,4,4];

console.log(arr.unique());

//Not a good idea to extend prototype of existing object

