function getComputerChoice() {
    let choice;
    let Num = Math.floor(Math.random() * 3);
    if (Num == 0) {
        choice = 'ROCK';
    } else if (Num == 1){
        choice = 'PAPER'
    } else {
        choice = 'SCISSORS'
    }
    return choice;
}

function oneRound() {
    let playerSelection = prompt('Choose Rock, Paper, or Scissors');
    playerSelection = playerSelection.toUpperCase();
    let computerSelection = getComputerChoice();
    console.log('The computer chose',computerSelection)
    if (playerSelection == computerSelection) {
        return 'TIE!';
    } else if (((playerSelection == 'ROCK') && (computerSelection == 'SCISSORS')) || ((playerSelection == 'PAPER') && (computerSelection == 'ROCK')) || ((playerSelection == 'SCISSORS') && (computerSelection == 'PAPER'))) {
        return 'CONGRATS YOU WON!!!'
    } else if (((computerSelection == 'ROCK') && (playerSelection == 'SCISSORS')) || ((computerSelection == 'PAPER') && (playerSelection == 'ROCK')) || ((computerSelection == 'SCISSORS') && (playerSelection == 'PAPER'))){
        return 'LMAO LOSER'
    } else {
        return 'Might have made a typo'
    }
}
console.log(oneRound())