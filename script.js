console.log("Hello World");
let humanScore = 0;
let computerScore = 0;

console.log("Computer Score " + computerScore);
console.log("Human Score " + humanScore)
if (humanScore > computerScore) {
    console.log("Human win"); 
} else if (computerScore > humanScore) {
    console.log("Computer win");
} else {
    console.log("Tie");
}

function getComputerChoice () {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return "Rock";
    } else if (result === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log("il risultato è " + getComputerChoice());

function getHumanChoice() {
    let userInput = prompt("Scegli rock, paper o scissors:").toLowerCase();
    const validChoices = ["rock", "paper", "scissors"];

    if (validChoices.includes(userInput)) {
        return userInput;
    } else {
        console.log("Scelta non valida, riprova.");
        return getHumanChoice();
    }
}

console.log(getHumanChoice()); 

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "È un pareggio!";
    } 

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return "Hai vinto!";
    } else {
        return "Il computer ha vinto!";
    }
}

function playGame() {
    let playerChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    
    console.log(`Tu hai scelto: ${playerChoice}`);
    console.log(`Il computer ha scelto: ${computerChoice}`);
    
    console.log(determineWinner(playerChoice, computerChoice));
}

playGame();

