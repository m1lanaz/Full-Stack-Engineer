// function declaration
function ageCalc(birthYear) {
    return 2037 - birthYear;
};

const age = ageCalc(2005);
console.log(age);

// function expression - they provide value
const ageCalc2 = function (birthYear) {
    return 2037 - birthYear;
};

const age2 = ageCalc2(2005);
console.log(age2);