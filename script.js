let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const winnerResults = {
    computer: ["You lost", 'red'],
    player: ["You won", 'green']
}

let playerPoints = document.querySelector('#playerScore');
let options = document.querySelectorAll('div.options button');
let computerPoints = document.querySelector('#computerScore');
let roundResults = document.querySelector('.result-box');

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

options.forEach(button => { button.addEventListener('click', getPlayerChoice) });

function getPlayerChoice(event) {
    playerChoice = event.target.getAttribute('id');
    playRound(playerChoice, computerPlay());
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        roundResults.textContent = "Tie!"
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerPoints.textContent = ++playerScore;
        roundResults.textContent = "You win this round! :)";
    } else {
        computerPoints.textContent = ++computerScore;
        roundResults.textContent = "You lost this round! :(";
    }
    roundsPlayed++;
    //console.log(roundsPlayed);
    checkWinner();
}

function checkWinner() {
    if (computerScore === 5) {
        endGame("computer");
    } else if (playerScore === 5) {
        endGame("player");
    } else {
        getPlayerChoice();
    }
}

function endGame(winner) {
    roundResults.textContent = winnerResults[winner][0] + ` in ${roundsPlayed} rounds!`;
    roundResults.style.color = winnerResults[winner][1];
    options.forEach(button => {
        button.removeEventListener('click', getPlayerChoice);
    })
}