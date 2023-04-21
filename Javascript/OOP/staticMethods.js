class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    static greeting() {
        return 'Hello!';
    }
};

const Milana = new PersonCl('Mil', 2005);
console.log(Milana);
// console.log(Milana.greeting()); This does not work
console.log(PersonCl.greeting());

// You cannot call a static method on an object only on an object class

// If you want to use the object inside the static method, you send it into a parameter:

class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    static greeting(x) {
        return `Hello ${x.firstName}`;
    }
};

console.log(Person.greeting(Milana));