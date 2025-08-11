// Track each player's score
let humanScore = 0;
let computerScore = 0;

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
    /* 
    
    Compare computer and human choices

    If human beats computer:
        Print "You win! Your choice beats the computer's choice"
    Else if computer beats human:
        Print "You lose! The computer's choice beats your choice"
    Else:
        Print "Tie!"

    Increment winning player's score by 1

    */
}