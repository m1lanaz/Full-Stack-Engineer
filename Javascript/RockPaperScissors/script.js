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

    if(compInput == userInput){
        userScore++;
        compScore++;
        console.log("Its a tie!")
    } else if(
        (compInput == "rock" && userInput == "scissors") ||
        (compInput == "paper" && userInput == "rock") ||
        (compInput == "scissors" && userInput =="paper")
    ){
        compScore++;
        console.log("Computer wins!");
    } else{
        userScore ++;
        console.log("User wins!");
    }
};


