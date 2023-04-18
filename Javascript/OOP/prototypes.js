'use strict';

const person = function(firstName, birthYear) {
    console.log(this);
    //Properties
    this.firstName = firstName;
    this.birthYear = birthYear;
};


const Milana = new person('Milana', 2005);

//prototypes

person.prototype.calcAge = function() {
    console.log(2023 - this.birthYear);
}; // all objects created with the constructor fuction can now reuse this function, not good practice

Milana.calcAge();

console.log(Milana.__proto__); 
console.log(Milana.__proto__ === person.prototype); // Jonas prototype is the progtotype property of the person constructor function

console.log(person.prototype.isPrototypeOf(Milana)); // Confirms above statement

console.log(person.prototype.isPrototypeOf(person));
// it is not the prototype of person, more like prototype of linked objects 
// __proto__ points to the the internal prototype of the object

