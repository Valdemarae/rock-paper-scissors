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
const output = document.querySelector('.output');
function displayResult (result, playerSelection, computerSelection) {
    const para = document.createElement('p');
    switch (result) {
        case 'tie':
            para.textContent = `Tie! You both got ${playerSelection}!`;
            break;
        case 'won':
            para.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
            break;
        case 'lost':
            para.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
            break;
    }
    output.appendChild(para);
}
const rockbtn = document.querySelector('.rock');
rockbtn.addEventListener('click', () => playRound('Rock', getComputerChoice()));
const paperbtn = document.querySelector('.paper');
paperbtn.addEventListener('click', () => playRound('Paper', getComputerChoice()));
const scissorsbtn = document.querySelector('.scissors');
scissorsbtn.addEventListener('click', () => playRound('Scissors', getComputerChoice()));