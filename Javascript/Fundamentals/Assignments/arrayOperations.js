cities = ['London', 'Manchester', 'Derby', 'Birmingham', 'Newcastle'];

cities.push('Utopia');

console.log(cities);

cities.pop();

console.log(cities);

if (cities.includes('Manchester')) {
    console.log("A good list!");
};

const indexOfACity = cities.indexOf('Derby');
cities[indexOfACity] = 'Essex';

console.log(cities);