// Class expression
//const PersonCl = class {}

//Class declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    //Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }
};

const Milana = new PersonCl('Milana', 2005);
console.log(Milana);
Milana.calcAge();

PersonCl.prototype.greet = function() {
    console.log(`Hey ${this.firstName}!`);
};

Milana.greet();

//Classes are not hoisted
// Classes are first-class citizens (can pass and return from function)
// Classes are executed in strict mode
