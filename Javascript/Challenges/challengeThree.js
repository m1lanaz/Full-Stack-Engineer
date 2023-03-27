const Mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        this.BMI = this.mass / this.height **2;
        return this.BMI
    } 
};

const John = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        this.BMI = this.mass / this.height **2;
        return this.BMI
    }
};

console.log(Mark.calcBMI());
console.log(John.calcBMI());

console.log(Mark.BMI, John.BMI);