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

function oneRound(playerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        return 'TIE';
    } else if (((playerSelection == 'ROCK') && (computerSelection == 'SCISSORS')) || ((playerSelection == 'PAPER') && (computerSelection == 'ROCK')) || ((playerSelection == 'SCISSORS') && (computerSelection == 'PAPER'))) {
        return 'YOU WIN!'
    } else if (((computerSelection == 'ROCK') && (playerSelection == 'SCISSORS')) || ((computerSelection == 'PAPER') && (playerSelection == 'ROCK')) || ((computerSelection == 'SCISSORS') && (playerSelection == 'PAPER'))){
        return 'YOU LOSE :('
    } else {
        return 'Might have made a typo'
    }
}

let player;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
const computerScore = document.querySelector('.computerScore .score');
const playerScore = document.querySelector('.playerScore .score');
const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const b2 = document.querySelector('#b2');
const compDisplay = document.createElement('div'); 

if (!computerSelection) {
    result.innerHTML = '<img src="./photos/lit.gif" alt="rps gif">';
} 

buttons.forEach((buttonSelection) => {
    buttonSelection.addEventListener('click', () => {
        player = buttonSelection.className;
        b2.insertBefore(compDisplay, result);
        let whoWon = oneRound(player);
        if (whoWon === 'YOU WIN!') {
            playerWins++;
        } else if (whoWon === 'YOU LOSE :(') {
            computerWins++;
        }
        computerScore.textContent = computerWins;
        playerScore.textContent = playerWins;
        result.textContent = whoWon; // Result of playing a round
        result.setAttribute('style', 'font-size: 40px;')
        compDisplay.textContent = `The computer chose ${computerSelection}`
        compDisplay.setAttribute('style', 'font-size: 33px;');
        if (playerWins == 5) {
            alert('YOU WIN');
            playerWins = 0;
            computerWins = 0;
        } else if (computerWins == 5) {
            alert('LOSER');
            playerWins = 0;
            computerWins = 0;
        }
    })
})

/*
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
*/