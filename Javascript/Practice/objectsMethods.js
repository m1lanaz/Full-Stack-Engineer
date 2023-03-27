const milana = {
    firstName: 'Milana',
    lastName: 'Zab',
    birthYear: 2005,
    job: 'student',
    friends: ['Bob', 'Stacey','Peter', 'Steven', 'Molly'],
    hasDriverLicense: false,

    // calcAge: function(year) {
     //    return 2037 - year;
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};


//console.log(milana.calcAge(2005));
//console.log(milana['calcAge'](2005));

console.log(milana.calcAge());

console.log(milana.age);