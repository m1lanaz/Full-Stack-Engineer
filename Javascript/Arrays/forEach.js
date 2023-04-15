const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for(const [i, movement] of movements.entries()){
    if(movement > 0){
        console.log(`Movement ${i+1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
    }
}

console.log("--------FOREACH--------");
//same for loop with an easier way:

movements.forEach(function(movement, index, array) {
    if(movement > 0){
        console.log(`Movement ${index+1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${index+1}: You withdrew ${Math.abs(movement)}`);
    }
}) // Uses a higher order function

//First param is the current element
//Second param is the current index
//Third param is the entire array we are looping over
