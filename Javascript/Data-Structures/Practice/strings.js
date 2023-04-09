const airline = 'MAN Air Manchester';
const plane = 'A320';

console.log(plane[0]);

console.log(airline.length);

console.log(airline.indexOf('M')); //only gives first occurance
console.log(airline.lastIndexOf('M'));

console.log(airline.slice(4)); // Begin parameter
console.log(airline.slice(4,7)); //Begin and end-1

console.log(airline.slice(0, airline.indexOf(' '))); // extract first word without knowing the position
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //same but with last word

console.log(airline.slice(1, -1)); 

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name

const passenger = 'mIlaNA';
let passengerLower = passenger.toLowerCase();
passengerLower = (passengerLower.slice(0,1)).toUpperCase() + passengerLower.slice(1,6);
console.log(passengerLower);

const random = '                  hello';
console.log(random);
console.log(random.trim()); // Gets rid of whitespace

//replacing

console.log(passenger.replace('m', 'a'));

const conversation = 'So today I did this. What did you do today?';
console.log(conversation.replace('today', 'yesterday')) // only targets first one
console.log(conversation.replace(/today/g, 'yesterday')); //Targets them all using regex

//Booleans

console.log(conversation.includes('hello'));
console.log(conversation.startsWith('So'));
console.log(conversation.endsWith('?'));

//padding

console.log(passengerLower.padStart(10, '-').padEnd(14,'-'));

//repeat

console.log(passengerLower.repeat(5));