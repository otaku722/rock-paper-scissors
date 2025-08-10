computer = getComputerChoice();
human = getHumanChoice();

console.log(human);

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