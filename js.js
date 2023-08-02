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
    if (playerSelection == computerSelection) {
        return `tie`;
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        return `won`;
    } else {
        return `lost`;
    }
}
const rockbtn = document.querySelector('.rock');
rockbtn.addEventListener('click', () => console.log(playRound('Rock', getComputerChoice())));
const paperbtn = document.querySelector('.paper');
paperbtn.addEventListener('click', () => console.log(playRound('Paper', getComputerChoice())));
const scissorsbtn = document.querySelector('.scissors');
scissorsbtn.addEventListener('click', () => console.log(playRound('Scissors', getComputerChoice())));
