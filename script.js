
function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    return prompt("Input your choice")
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == computerChoice) {
            console.log("It's a tie.");
        } else if ((humanChoice == "rock" && computerChoice == "scissors") || (
            humanChoice == "scissors" && computerChoice == "paper"
        ) || (humanChoice == "paper" && computerChoice == "rock")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }
    
    for (i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`Final Score: Human ${humanScore}, Computer ${computerScore}. You win!`);
    } else if (humanScore < computerScore) {
        console.log(`Final Score: Human ${humanScore}, Computer ${computerScore}. Computer win!`);
    }
}

playGame();