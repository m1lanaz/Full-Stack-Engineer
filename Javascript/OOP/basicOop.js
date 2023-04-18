'use strict';

const person = function(firstName, birthYear) {
    console.log(this);
    //Properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //, never create a method inside of a construcor function
    this.calcAge = function() {
        console.log(2020 - this.birthYear);
    };
};

// Only difference between a regular and constructor function is you call a contructor with new

const Milana = new person('Milana', 2005);
console.log(Milana);

// 1. New{} is created
// 2. function is created, this = {}
// 3. {} is linked to a prototype 
// 4. function automatically return {}

const Milly = new person('Milly', 2005);
console.log(Milly);

console.log(Milana instanceof person);

