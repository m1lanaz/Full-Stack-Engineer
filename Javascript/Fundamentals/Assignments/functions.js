function describeCountry(country,population,capitalCity) {
    return `The ${country} has ${population} people and its capital city is ${capitalCity}`;
};

const country = describeCountry('UK','68 million', 'London');
console.log(country);