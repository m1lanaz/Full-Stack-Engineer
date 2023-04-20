// For an object
const account = {
    owner: 'Milana',
    movements: [20000,344,100, 50],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    //each setter should have one param
    set latest(mov) {
        this.movements.push(mov);
    }
};

//Just write it as if it was a property
console.log(account.latest);

account.latest = 200;

console.log(account.latest);


//For class

class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    //Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    get age() {
        return 2023 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        if(name.includes(' ')) this._fullName = name;
        else console.log( `${name} is not a full name!` )
    }

    get fullName() {
        return this._fullName;
    }
};

const Milana = new PersonCl('Mil', 2005);

console.log(Milana.age);

Milana.fullName