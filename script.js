let humanScore = 0;
let computerScore = 0;
let round = 0;
let buttons = document.querySelectorAll('button');
let results = document.querySelector("#results");

// Play the game
playGame();

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

function getHumanChoice(e) {
    return e.target.id;
}

function playRound(e) {
    let humanChoice = getHumanChoice(e);
    let computerChoice = getComputerChoice();
    let resultText = document.createElement("p");

    // Check which player won a round and print to screen. Increase winning player's score by 1.
    if ((computerChoice === "rock" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "scissors") || (computerChoice === "scissors" && humanChoice === "rock")) {
        resultText.innerText = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else if (computerChoice === humanChoice) {
        resultText.innerText = "You tie!";
    } else {
        resultText.innerText = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    results.appendChild(resultText);

    round++;

    if (round === 5) {
        buttons.forEach(button => button.removeEventListener("click", playRound));

        printWinner();
    }
}   

function playGame(score) {
    let rounds = 5;

    buttons.forEach(button => {
        button.addEventListener("click", playRound);
    });
}

function printWinner() {
    results.appendChild(document.createTextNode("Game Result: "));
    if (humanScore > computerScore) {
        results.appendChild(document.createTextNode("You win the game!"));
    } else if (humanScore < computerScore) {
        results.appendChild(document.createTextNode("You lose the game!"));
    } else {
        results.appendChild(document.createTextNode("Tie!"));
    }
}