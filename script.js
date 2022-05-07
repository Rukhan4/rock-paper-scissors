let playerWins = false;
let computerWins = false;
let playerScore = 0;
let computerScore = 0;
let gameon = true;

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    // validate user input
    while (true) {
        playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
            break;
        } else {
            alert("Please enter rock, paper, or scissors.");
        }
    }
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        playerWins = false;
        computerWins = false;
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerWins = true;
        computerWins = false;
    } else {
        playerWins = false;
        computerWins = true;

    }
}

function game() {
    while (gameon) {
        round = playRound();
        if (playerWins) {
            playerScore++;
            console.log("You win this round! :)")
        } else if (computerWins) {
            computerScore++;
            console.log("You lost this round! :(")
        } else {
            console.log("Tie!")
        }
        if (playerScore === 5) {
            gameon = false;
            return `You won the game!
                    Score was Player ${playerScore} : Opponent ${computerScore}`;

        } else if (computerScore === 5) {
            gameon = false;
            return `You lost the game!
                    Score was Player ${playerScore} : Opponent ${computerScore}`;

        }
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);
    }
}

console.log(game());