class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(`${2023 - this.birthYear}`)
    }

    greet(){
        console.log("Hello");
    }
};

// use extends that will inherit the methods
class education extends Person {
    constructor(firstName, school) {
        // only need to call super if the extends class has a constructor
        super(firstName);
        // need to call super prior to this. object
        this.school = school;

    }
    // Shadows the method (allows the child to have a method with same name as parent)
    calcAge() {
        super.calcAge();
        console.log("Adding to the method");
    }

    //overriding method or property
    greet(){
        console.log("Hello world");
    }
};

let college = new education('random college', 2005);
console.log(college);

college.calcAge();

// Child classes also inherit static methods

college.greet();