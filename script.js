let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

let yay = new Audio('./sounds/yay.mp3');
let aww = new Audio('./sounds/aww.mp3');

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
        roundResults.textContent = `Round ${roundsPlayed + 1} is a tie!`;
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerPoints.textContent = ++playerScore;
        roundResults.textContent = `You win round ${roundsPlayed + 1}!`;
    } else {
        computerPoints.textContent = ++computerScore;
        roundResults.textContent = `You lost round ${roundsPlayed + 1}!`;
    }
    roundsPlayed++;
    //console.log(roundsPlayed);
    checkWinner();
}

function checkWinner() {
    if (computerScore === 5) {
        endGame("computer");
        aww.play();
    } else if (playerScore === 5) {
        endGame("player");
        yay.play();
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