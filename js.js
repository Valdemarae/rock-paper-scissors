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
    if (playerSelection == computerSelection) {
        return `tie`;
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        return `won`;
    } else {
        return `lost`;
    }
}
function game () {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Enter Rock, Paper or Scissors!");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        while (playerSelection != 'Rock' && playerSelection != 'Paper' && playerSelection != 'Scissors') {
            playerSelection = prompt("WRONG INPUT! Enter Rock, Paper or Scissors!");
            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        }
        let computerSelection = getComputerChoice();
        let result = singleRound(playerSelection, computerSelection);
        if (result == 'tie') {
            console.log(`Round ${i} - Tie! You both got ${playerSelection}!`);
        } else if (result == 'won') {
            console.log(`Round ${i} - You win! ${playerSelection} beats ${computerSelection}!`);
            playerScore++;
        } else {
            console.log(`Round ${i} - You lose! ${computerSelection} beats ${playerSelection}!`);
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You won the game with score " + playerScore + " : " + computerScore + "! Congratulations!");
    } else if (computerScore > playerScore) {
        console.log("You lost the game with score " + playerScore + " : " + computerScore + "!"); 
    } else {
        console.log("No one won the game! It is a tie! Score is " + playerScore + " : " + computerScore + ".");
    }
}
game();