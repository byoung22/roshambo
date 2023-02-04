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
        return 'TIE';
    } else if (((playerSelection == 'ROCK') && (computerSelection == 'SCISSORS')) || ((playerSelection == 'PAPER') && (computerSelection == 'ROCK')) || ((playerSelection == 'SCISSORS') && (computerSelection == 'PAPER'))) {
        return 'WIN'
    } else if (((computerSelection == 'ROCK') && (playerSelection == 'SCISSORS')) || ((computerSelection == 'PAPER') && (playerSelection == 'ROCK')) || ((computerSelection == 'SCISSORS') && (playerSelection == 'PAPER'))){
        return 'LOSER'
    } else {
        return 'Might have made a typo'
    }
}

function game () {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5 ; i++) {
        let result = oneRound();
        if (result == 'LOSER') {
            computerScore += 1;
            console.log(computerScore,'L');
        } else if (result == 'WIN') {
            playerScore += 1;
            console.log('+1');
        } else {
            console.log('DRAW');
        }
    }
    console.log('Score is',playerScore,'vs',computerScore);
    if (playerScore > computerScore){
        console.log('YOU WIN');
    } else if (computerScore > playerScore) {
        console.log('YOU LOSE')
    } else {
        console.log('TIE GAME')
    }
}

game();