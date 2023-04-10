const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    } 
};

const greeterHey = greet('Hey');
greeterHey('Mil');
greeterHey('Ran')

greet('hello')('Mils');

const greets = greeting => name => console.log(`${greeting} ${name}}`);