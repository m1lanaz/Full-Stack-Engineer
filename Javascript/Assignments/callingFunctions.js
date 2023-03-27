const percentageOfWorld3 = population => {
    return (population/7900) * 100;
};

const describePopulation = (country, population) => `${country} has ${population} people. Which is ${percentageOfWorld3(population)} percent`;

console.log(describePopulation('UK', 2000));

