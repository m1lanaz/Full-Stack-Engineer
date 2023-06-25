let userScore = 0;
let compScore = 0;

while (userScore != 5 && compScore != 5){
    let userInput = prompt("Enter rock, paper or scissors");
    userInput = userInput.toLowerCase();

    let compInput = Math.floor(Math.random() * 3);
    if(compInput == 1){
        compInput = 'rock';
    } else if(compInput == 0){
        compInput = 'scissors'
    } else {
        compInput = 'paper'
    }

    
}
