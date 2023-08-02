function getComputerChoice () {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}
function playRound (playerSelection, computerSelection) {
    let result = "";
    if (playerSelection == computerSelection) {
        result = `tie`;
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        result = `won`;
    } else {
        result = `lost`;
    }
    return displayResult(result, playerSelection, computerSelection);
}
let playerScore = 0;
let computerScore = 0;
let roundCount = 1;
const output = document.querySelector('.output');
const body = document.querySelector('body');
function displayResult (result, playerSelection, computerSelection) {
    const para = document.createElement('p');
    switch (result) {
        case 'tie':
            para.textContent = `Round ${roundCount} - Tie! You both got ${playerSelection}!`;
            break;
        case 'won':
            playerScore++;
            para.textContent = `Round ${roundCount} - You win! ${playerSelection} beats ${computerSelection}!`;
            break;
        case 'lost':
            computerScore++;
            para.textContent = `Round ${roundCount} - You lose! ${computerSelection} beats ${playerSelection}!`;
            break;
    }
    roundCount++;
    output.appendChild(para);
    if (playerScore == 5 || computerScore == 5) {
        const h2 = document.createElement('h2');
        if (playerScore == 5) {
            h2.textContent = `You won the game with score ${playerScore} : ${computerScore}! Congratulations!`;
        } else {
            h2.textContent = `You lost the game with score ${playerScore} : ${computerScore}!`;
        }
        roundCount = 1;
        playerScore = 0;
        computerScore = 0;
        output.appendChild(h2);
        const againbtn = document.createElement('button');
        againbtn.textContent = 'Play one more time!';
        againbtn.addEventListener('click', () => {
            let delChild = output.firstChild;
            while (delChild) {
                output.removeChild(delChild);
                delChild = output.firstChild;
            }
        });
        output.appendChild(againbtn);
    }
}
const rockbtn = document.querySelector('.rock');
rockbtn.addEventListener('click', () => playRound('Rock', getComputerChoice()));
const paperbtn = document.querySelector('.paper');
paperbtn.addEventListener('click', () => playRound('Paper', getComputerChoice()));
const scissorsbtn = document.querySelector('.scissors');
scissorsbtn.addEventListener('click', () => playRound('Scissors', getComputerChoice()));