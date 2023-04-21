class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

// use extends that will inherit the methods
class education extends Person {
    constructor(firstName, school) {
        super(firstName);
        this.school = school;

    }
};

let college = new education('random college', 2005);
console.log(college);