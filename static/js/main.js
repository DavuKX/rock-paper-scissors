const CHOICES = {"paper": 0, "rock": 1, "scissors": 2};

function getKeyFromValue(value) {
    return Object.keys(CHOICES).find(key => CHOICES[key] === value);
}

function getComputerChoice(CHOICES) {
    let choice;
    choice = Math.floor(Math.random() * 3);
    return choice;
}

function playRound(playerSelection, computerSelection) {
    // playerSelection = CHOICES[playerSelection];
    if ((playerSelection - computerSelection) === 0) {
        return 0; // 0 for tie
    } else if ((playerSelection - computerSelection) === 1) {
        return 1; // 1 for lose
    } else if ((playerSelection - computerSelection) === -1) {
        return 2; // 2 for win
    } else if ((playerSelection - computerSelection) === -2) {
        return 1;
    } else {
        return 2;
    }
}

function game() {
    let playerSelection;
    let gamesWon = 0;
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice()
        playerSelection = prompt("Type in your choice: ").toLowerCase()
        while (!(playerSelection in CHOICES)) {
            playerSelection = prompt("Type a correct choice (paper, rock, scissors): ").toLowerCase()
        }
        if (playRound(CHOICES[playerSelection], computerSelection) === 0) {
            console.log("It's a tie!")
        } else if (playRound(CHOICES[playerSelection], computerSelection) === 1) {
            console.log(`You lose! ${getKeyFromValue(computerSelection)} beats ${playerSelection}`)
        } else if (playRound(CHOICES[playerSelection], computerSelection) === 2) {
            gamesWon += 1;
            console.log(`You win! ${playerSelection} beats ${getKeyFromValue(computerSelection)}`)
        }
    }
    console.log(`You won ${gamesWon} out of 5 games.`)
}

game()