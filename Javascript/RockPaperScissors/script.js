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
    alert(`computer picks ${compInput} `)

    if(compInput == userInput){
        userScore++;
        compScore++;
        alert("Its a tie!")
    } else if(
        (compInput == "rock" && userInput == "scissors") ||
        (compInput == "paper" && userInput == "rock") ||
        (compInput == "scissors" && userInput =="paper")
    ){
        compScore++;
        alert("Computer wins!");
    } else{
        userScore ++;
        alert("User wins!");
    }
};

if(userScore > compScore){
    alert("User wins")
} else if(compScore > userScore){
    alert("Computer wins")
}else{
    alert("Everyone wins!")
}
