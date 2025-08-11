function getComputerChoice() {
    // Stores random number between 1 and 3
    let choice = Math.floor(Math.random() * 3);

    // Return "rock", "paper", or "scissors" based on random number
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    // Return user input in lowercase
    return prompt("Rock, paper, or scissors?").toLowerCase();
}

function playRound(computerChoice, humanChoice) {
    // Check which player won and print to screen. Increase winning player's score by 1.
    if ((computerChoice === "rock" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "scissors") || (computerChoice === "scissors" && humanChoice === "rock")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (computerChoice === humanChoice) {
        console.log("You tie")
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame() {
    // Track each player's score
    let humanScore = 0;
    let computerScore = 0;

    /*
    
    Create loop to play round 5 times

    At end of game compare player scores and print the winner or print "Tie!"
    
    */
}