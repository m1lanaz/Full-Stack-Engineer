'use strict';

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        console.log("no input given!");
    }
});
