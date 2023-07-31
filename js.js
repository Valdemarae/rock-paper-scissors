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
function singleRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection == computerSelection) {
        console.log(`Tie! You both got ${playerSelection}!`)
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Scissors')) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }
}
singleRound('paper', getComputerChoice());