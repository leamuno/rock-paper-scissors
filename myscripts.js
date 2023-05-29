function getComputerChoice() {
    let computerRNG = Math.ceil(Math.random() * 3);

    if (computerRNG == 1) {
        return "paper";
    }else if (computerRNG == 2) {
        return "rock";
    }else {
        return "scissors";
    }
}

let computerSelection = getComputerChoice();

let playerSelection = 'rock';

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `It's a draw.`;
    }else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            return 'You Win! Scissors beats Paper';
        }else {
            return 'You Lose! Rock beats Scissors'
        }
    }else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return 'You Lose! Paper beats Rock';
        }else {
            return 'You Win! Rock beats Scissors';
        }
    }else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            return 'You Lose! Scissors beats paper'
        }else {
            return 'You win! Paper beats rock'
        }
    }
}

function game() {
    computerSelection = getComputerChoice();
    playerSelection = prompt('Choose rock, paper, or scissors:').toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
}
