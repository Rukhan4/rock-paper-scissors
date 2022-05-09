let playerScore = 0;
let computerScore = 0;
let playerPoints = document.querySelector('#playerScore');
let options = document.querySelectorAll('div.options button');
let computerPoints = document.querySelector('#computerScore');
let roundResults = document.querySelector('.result-box');

options.forEach(button => { button.addEventListener('click', getPlayerChoice) });

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function getPlayerChoice(e) {
    getRef = e.target.textContent;
    playerChoice = getRef.toLowerCase();
    playRound(playerChoice, computerPlay());
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        roundResults.textContent = "Tie!"
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerPoints.textContent == ++playerScore;
        roundResults.textContent = "You win this round! :)";
    } else {
        computerPoints.textContent == ++computerScore;
        roundResults.textContent = "You lost this round! :(";
    }
    checkWinner();
}

const winnerResults = {
    computer: ["You lost!", 'red'],
    player: ["You won!", 'green']
}

function checkWinner() {
    if (computerScore === 5) {
        roundResults.textContent = winnerResults["computer"][0];
        roundResults.style.color = winnerResults["computer"][1];
        endGame();
    } else if (playerScore === 5) {
        roundResults.textContent = winnerResults["player"][0];
        roundResults.style.color = winnerResults["player"][1];
        endGame();
    } else {
        getPlayerChoice();
    }
}

function endGame() {
    options.forEach(button => {
        button.removeEventListener('click', getPlayerChoice);
    })
}