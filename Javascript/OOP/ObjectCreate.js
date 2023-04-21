// Object.create() static method creates a new object using the existing object as the prototype of the newly created object

// Vegy class
const vegetable = {
    isRotten: false,
    grown: false,
    type: 'Potato',

    finishedGrowing() {
        if (this.grown) console.log('Ready for harvest!');
        else console.log('Not finished growing');
    }
};

let carrots = Object.create(vegetable);

carrots.type = 'Carrots';
carrots.finishedGrowing();

carrots.grown = true;
carrots.finishedGrowing();

let Onions = Object.create(vegetable, {
    type: {value: 'Onions'},
    Expired: {value: true}
});

console.log(Onions.type);