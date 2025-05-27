console.log("Hello World");

const sassoBtn = document.getElementById('sasso');
const cartaBtn = document.getElementById('carta');
const forbiceBtn = document.getElementById('forbice');
const risultatoDiv = document.getElementById('risultato');
const punteggioDiv = document.getElementById('punteggio');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return "rock";
    } else if (result === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "È un pareggio!";
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        return `Hai vinto! ${playerChoice} batte ${computerChoice}`;
    } else {
        computerScore++;
        return `Il computer ha vinto! ${computerChoice} batte ${playerChoice}`;
    }
}

function updateScore() {
    punteggioDiv.textContent = `Umano: ${humanScore} - Computer: ${computerScore}`;
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const roundResult = determineWinner(playerSelection, computerSelection);
    risultatoDiv.textContent = `Hai scelto: ${playerSelection}, Computer: ${computerSelection}. ${roundResult}`;
    updateScore();

    if (humanScore === 5) {
        risultatoDiv.textContent = "Hai vinto la partita!";
        disableButtons(); // Disabilita i bottoni dopo la vittoria
    } else if (computerScore === 5) {
        risultatoDiv.textContent = "Il computer ha vinto la partita!";
        disableButtons(); // Disabilita i bottoni dopo la sconfitta
    }
}

function disableButtons() {
    sassoBtn.disabled = true;
    cartaBtn.disabled = true;
    forbiceBtn.disabled = true;
}

// Aggiungi gli event listener ai bottoni
sassoBtn.addEventListener('click', () => playRound('rock'));
cartaBtn.addEventListener('click', () => playRound('paper'));
forbiceBtn.addEventListener('click', () => playRound('scissors'));

// Inizializza il punteggio
updateScore();